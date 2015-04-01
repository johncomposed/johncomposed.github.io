/**
 * Created with studentSummarizer.
 * User: johncomposed
 * Date: 2015-03-31
 * Time: 02:28 AM
 * To change this template use Tools | Templates.
 */
var app = angular.module('livePreview', ['angular-datepicker']);

app.filter('numToYear', function() {
  return function(year) {
    return year == 1 ? 'Freshman' : year == 2 ? 'Sophmore' : year == 3 ? 'Junior' : year == 4 ? 'Senior' : '';
  }
});


app.controller('FormCtrl', function($scope) {
    $scope.list = {
      name: '',
      items: [{}]
    };

    $scope.addElement = function() {
      $scope.list.items.push({});
    };
  
    $scope.removeElement = function() {
      $scope.list.items.pop();
    };
  
    $scope.delete = function(index) {
      // Remove from main records (using index)
      $scope.list.items.splice(index, 1);
    };
  
  
    $scope.submitForm=function(){
        /* while compiling form , angular created this object*/
        var data=$scope.fields;  
        alert(data);

        /* post to server*/
        //$http.post(url, data);        
    }
    
    
    $scope.boldChanges = function(thisClass) {
      //To support older browsers use https://cdnjs.cloudflare.com/ajax/libs/classlist/2014.01.31/classList.min.js
      console.log("it works?");
      
      var CLASS_NAME = "bold";
      var oldBold = document.querySelectorAll("." + CLASS_NAME);
      var newBold = document.querySelectorAll("." + thisClass);
      //Removing
      for(i = 0, l = oldBold.length; i < l; i++) {
        oldBold[i].classList.remove(CLASS_NAME);
      }
      //Adding
      for(i = 0, l = newBold.length; i < l; i++) {
        newBold[i].classList.add(CLASS_NAME);
      }
    };
});