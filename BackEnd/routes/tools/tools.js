const express = require('express');
const router = express.Router();
let firebase = require('firebase');


router.get('/garden', (req, res) => {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/garden");

    userReference.on("value", 
			  function(snapshot) {
					let array = Object.entries(snapshot.val());
					res.json(array);
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

router.get('/electronic', (req, res) => {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/electronic");

    userReference.on("value", 
			  function(snapshot) {
				let array = Object.entries(snapshot.val());
				res.json(array);
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

router.get('/painting', (req, res) => {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/painting");

    userReference.on("value", 
			  function(snapshot) {
				let array = Object.entries(snapshot.val());
				res.json(array);
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

router.post('/add', function (req, res) {

	console.log("HTTP Post Request");

    let name  = req.body.Name;
    let comp = req.body.Complimetary;
    let price = req.body.Price;
	  let path = req.body.Path;
	

	let referencePath = '/garden/'+name+'/';
	let userReference = firebase.database().ref(referencePath);
	userReference.set({Name : name , Complimetary : comp , Path: path , Price : price}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});
module.exports =router;