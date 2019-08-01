const express = require('express');
const router = express.Router();
let firebase = require('firebase');


/**
 * insert user data
 */
router.post('/', function (req, res) {

	console.log("HTTP Post Request");

	let fname  = req.body.FName;
	let lname  = req.body.LName;
	let id  = req.body.ID;
    let address= req.body.Address;
	let bank = req.body.Bank;
	

	let referencePath = '/user/'+fname+'/';
	let userReference = firebase.database().ref(referencePath);
	userReference.update({FName : fname , LName : lname , Address : address, Bank: bank , ID :id}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});

/**
 * get user dynamically
 */

router.get('/:name', (req, res) => {
	let name = req.params.name;
	// console.log(req.params)

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/user/"+name);

    userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});
router.patch('/:name', function (req, res) {
	if(res.status(200)){
		res.json({
			message:"connecting"
		});

	}
	console.log(req.params)

	let name = req.params.name;
	

	
	let lname  = req.body.LName;
	let id  = req.body.ID;
    let address= req.body.Address;
	let bank = req.body.Bank;
	

	let referencePath = '/user/'+name+'/';
	let userReference = firebase.database().ref(referencePath);
	
	userReference.update({LName : lname , Address : address, Bank: bank , ID :id}, 
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
