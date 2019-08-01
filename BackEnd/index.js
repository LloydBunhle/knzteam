let express = require('express');
let firebase = require('firebase');
let bodyParser = require('body-parser');
let app = express();
let env = require('./environment');


app.use(bodyParser.json()); 



// Routes
const profileRoutes = require('./routes/profiles/profile');
const toolsRoutes = require('./routes/tools/tools');


/**
 * db connection
 */

firebase.initializeApp(env);



/**
 * cors error
 */
app.use((req,res,next)=>{ 
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow_Headers','*');
    if(req.method === 'OPTIONS'){
        Response.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
        return releaseEvents.status(200).json({});
    }
    next();
})

app.use('/profiles', profileRoutes);
app.use('/tools', toolsRoutes);



const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Server running at port `+port);
  });







