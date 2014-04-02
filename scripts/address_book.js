/*global $,angular*/

$('.contact-list').on('click', '.edit', function() {
	var $this = $(this);
	var editKey = $this.parents('.person').attr('data-key');
	$('.contact-details-' + editKey).addClass('hide');
	$('.edit-contact-' + editKey).removeClass('hide');
});

$('.contact-list').on('click', '.save', function() {
	var $this = $(this);
	var editKey = $this.parents('.person').attr('data-key');
	$('.contact-details-' + editKey).removeClass('hide');
	$('.edit-contact-' + editKey).addClass('hide');
});

$('.contact-list').on('click', '.sure-delete', function() {
	var $this = $(this);
	$this.parents('.contact-details').find('.confirm-delete').removeClass('hide');
});
$('.contact-list').on('click', '.cancel-delete', function() {
	var $this = $(this);
	$this.parents('.contact-details').find('.confirm-delete').addClass('hide');
});

$('.add').click(function() {
	clearFields();
});

var clearFields = function() {
	var nameEl = $("[name=ls-name]"),
	surnameEl = $("[name=ls-surname]"),
	phoneNumberEl = $("[name=ls-phone-number]"),
	addressEl = $("[name=ls-address]"),
	emailEl = $("[name=ls-email]");
	nameEl.val("");
	surnameEl.val("");
	phoneNumberEl.val("");
	addressEl.val("");
	emailEl.val("");
};

var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
	var app = this;

	$http.get("http://fast-gorge.herokuapp.com/contacts")
		.success(function(data) {
			app.people = data;
	});

	app.addPerson = function(person) {
	    $http.post("http://fast-gorge.herokuapp.com/contacts", person).success(function(data) {
	        app.people.push(data);
	    }).error(function(data) {
			alert("Please make sure you fill in all entries marked with *");
		});
	};

	app.saveEdit = function(person, id) {
	    $http.put("http://fast-gorge.herokuapp.com/contacts/" + id, person).success(function(data) {
	        var index = app.people.indexOf(data);
			app.people.splice(index,1);
	        app.people.push(data); 
	      });
	};

	app.deletePerson = function(person, id) {
	    $http.delete("http://fast-gorge.herokuapp.com/contacts/" + id, person).success(function(data) {
			var index = app.people.indexOf(data);
			app.people.splice(index,1);     
		});
	};

});