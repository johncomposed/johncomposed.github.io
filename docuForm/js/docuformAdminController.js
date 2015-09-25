//////////////////////
// Dash page

app.controller('dashCtrl', function( $rootScope, $scope, $location, documentStorageService) {
  
  var _this = $scope;
  
  _this.storage = documentStorageService;
  _this.documents = _this.storage.data;
  _this.searchText = {}; 
  _this.searchNum = 0;
  _this.selectedSearch = 'name';

  _this.newdocument = function() {
    var newUUID = Date.now();
    $location.path("/new/" + newUUID);
  };
  


  
  
});






//////////////////////
// Form page
  
app.controller('formCtrl', function($scope, $location, $routeParams, formDataService, documentStorageService, $parse) {
  var _this = $scope;

  _this.storage = documentStorageService;
  _this.schema = formDataService.schema;
  _this.form = formDataService.form;
  _this.preview = formDataService.preview;

  
  //  This is going to run when the page loads due to
  //  data-ng-init="initFillForm()"
  //  and expose _this.fmodel for sf-model="model"
  _this.initFillForm = function() {
    if ($routeParams.status === "new") {
      _this.model = {
        "uuid": parseInt($routeParams.uuid),
        "title": "Title",
        "subtitle": "Sub title"
      };
    } else {
      var ruuid = $routeParams.uuid;
      _this.model = _this.storage.lookupdocuments("uuid", parseInt(ruuid))[0]; // There better be only one with that uuid
    }
  };
    
  _this.saveForm = function(){
    if ($routeParams.status === "new") _this.storage.adddocument(_this.model);
    else _this.storage.save();
    $location.path('/');
  };
  
  
      
  _this.cancelForm = function(){
    $location.path('/');
  };
  
  
  
 
 _this.printBio = function() {
    window.print();
  };
  
   
 _this.showModel = function() {
    _this.showData = !_this.showData;
  };
  
  
  _this.boldChanges = function(modelValue,form) {
    //console.log(form.key[0]);
    var thisClass = form.key[0];
    var CLASS_NAME = "bold";
    var oldBold = document.querySelectorAll("." + CLASS_NAME);
    var newBold = document.querySelectorAll("." + thisClass);
    //Removing
    for(var i = 0, l = oldBold.length; i < l; i++) {
      oldBold[i].classList.remove(CLASS_NAME);
    }
    //Adding
    for(i = 0, l = newBold.length; i < l; i++) {
      newBold[i].classList.add(CLASS_NAME);
    }
  };

  _this.pdfMaker = function() {
    var loadContent = _this.parsePreviewArray();

    var doc = {
        content: loadContent,
        styles: {
          p: {
            fontSize: 18
          },
          h2: {
            fontSize: 22
          },
          i: {
            italics: true
          },
          b: {
            bold: true
          }
        }
    };
    pdfMake.createPdf(doc).open();
  }; 

  _this.parsePreviewArray = function() {
    var content = [];
    var rootNodes = document.querySelectorAll("#output > *"); // Mostly <p>, but might be tables in future

    for(var i = 0; i < rootNodes.length; i++) {
      console.log("for pPA", rootNodes[i]);
      
      if (checkShowHide(rootNodes[i])) {
        content.push(parseRootNode(rootNodes[i]));
      }
    }
    
    return content;
  };

  
var topText = function(element) {
    var child = element.firstChild,
    texts = [];

    while (child) {
        if (child.nodeType == 3) {
            texts.push(child.data);
        }
        child = child.nextSibling;
    }

    return texts.join("");    
  };
  
  
 var checkShowHide = function(element) {
    var attr = element.attributes;
    var visible = true;
    
    for(var i = 0; i < attr.length; i++) {
      if (attr[i].name == "ng-show" && !$parse(attr[i].value)($scope)) {
        visible = false;
      } 
      if ( attr[i].name == "ng-hide" && $parse(attr[i].value)($scope)) {
        visible = false;
      }      
    }
    
    return visible;
  };
  
  
  var parseNode = function(element, onlyString) {    
    if(checkShowHide(element)) {
      if (element.tagName === "SPAN" || onlyString) {
        return element.innerText;
      } else {
        return {text:topText(element),style:element.tagName};
      } 
    }
    
  };
   
  
  var parseChildren = function(kids, onlyString) {
    var kidNode;
    var result = [];
    for(var k = 0; k < kids.length; k++) {
      kidNode = parseNode(kids[k], onlyString);
      if (kidNode) {
//        if (kids[k].children.length > 0) {
//          result.concat(parseChildren(kids[k].children, true));
//        } else {
          result.push(kidNode);
//        }
      }
    }    
    
    return result;
  };
  
  
  var parseRootNode =  function(element) {    
    var pdfObject = {style:element.tagName};
    var childNodes = parseChildren(element.children, false);    
    pdfObject.text = [topText(element)].concat(childNodes);

    return pdfObject;
  };
  
  
  
  
});

