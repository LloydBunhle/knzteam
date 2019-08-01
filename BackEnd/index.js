let express = require('express');
let firebase = require('firebase');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended:false}));  /** reading body content  */
app.use(bodyParser.json());

const firebaseConfig = {
    apiKey: "AIzaSyAeI-lOahlg2h-mIi2maXtHrHLRO5Sd1CM",
    authDomain: "leroymerlin-11bf6.firebaseapp.com",
    databaseURL: "https://leroymerlin-11bf6.firebaseio.com",
    projectId: "leroymerlin-11bf6",
    storageBucket: "",
    messagingSenderId: "696400856270",
    appId: "1:696400856270:web:d1b9f9685d5ea95b"
  };
firebase.initializeApp(firebaseConfig);




// #########################################ALLOWING CROSS ORIGIN####################################

app.use((req,res,next)=>{ 
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow_Headers','*');
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
      return releaseEvents.status(200).json({});
  }
  next();
})
// ######################################### GARDEN ####################################
//get all the 
app.get('/garden/', (req, res) => {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/garden");

    userReference.on("value", 
			  function(snapshot) {
          let array = Object.entries(snapshot.val());

          console.log(array);
          
					res.json(array);
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});



// ######################################### ELECTRONIC TOOLS ####################################

app.get('/electronic', (req, res) => {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/electronic");

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

// ######################################## PAINTING ####################################
app.get('/painting', (req, res) => {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/painting");

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

// ############################################ ADDING TO DB #######################################
//Create new instance
app.post('/add', function (req, res) {

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
//the port number
const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Server running at port `+port);
  });