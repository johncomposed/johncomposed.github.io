/**
 * Stores docs in local storage
 */


app.service('documentStorageService', function($q) {
  var _this = this;
  this.data = (localStorage.getItem('documents')) ? JSON.parse(localStorage.getItem('documents')) : [];
  
  this.get = function() {
    return this.data;
  };
  
  this.save = function() {
    localStorage.setItem('documents', JSON.stringify(this.data));
  };
  
  this.deletedocument = function(document) {
    this.data.splice(_this.data.indexOf(document), 1);
    this.save();
  };
  
  this.adddocument = function(newdocumentModel) {
		this.data.push(newdocumentModel);
    this.save();
	};
	
	this.lookupdocuments = function(key, val) {
		var results = [];
		angular.forEach(this.data, function(document){
			if (document[key] === val) results.push(document);
		});
		return results;
	};


});