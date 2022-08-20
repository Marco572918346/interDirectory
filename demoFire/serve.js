const express = require("express");
const app = express();
let cors = require('cors');
const bodyparser=require('body-parser');


const admin = require("firebase-admin")
const credentials= require("./firebaseKey.json")

admin.initializeApp({
    credential:admin.credential.cert(credentials)
});
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.post('/signup', async (req, res)=>{
    const user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    const userResponse =await admin.auth().createUser({
        email:user.email,
        password:user.password,
        displayName:user.name
    })
    res.json(userResponse.uid)
})


/* sett post and listen for our request */

/* const PORT =process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`server is running in PORT ${PORT}`);
}); */

app.listen(3000);
console.log('corriendo en el puerto 3000');