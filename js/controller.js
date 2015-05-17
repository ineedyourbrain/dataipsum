angular.module('fakedata.controllers', []).
controller('formController', function($scope) {

    $scope.forItems = [
      {
          text : "Name",
          options : ["first and last", "first", "middle", "last"],
          type : "text" 
      },
      {
          text: "ID",
          options : ["numbers only", "hyphenated"],
          type : "number"
      },
      {
          text: "Address",
          options : ["full", "street"],
          type : "text"
      },
      {
          text: "City",
          options : '',
          type : "text"
      },
      {
          text: "State",
          options : '',
          type : "text"
      },
      {
          text: "Zip Code",
          options : ["5 digit", "long"],
          type : "text"
      },
      {
          text: "Number",
          options : ['lbs', 'Kg'],
          type : "number"
      },
      {
          text: "Height",
          options : ["feet", "inches", "meters"],
          type : 'number'
      },
      {
          text: "Weight",
          options : ['lbs', 'Kg'],
          type : 'number' 
      },
      {
          text: "Age",
          options : '',
          type : 'number' 
      },
      {
          text: "Email",
          options : '',
          type : 'email' 
      },
      {
          text: "URL",
          options : '',
          type : 'url' 
      },
      {
          text: "Date",
          options : '',
          type : 'date' 
      }
    ];
});