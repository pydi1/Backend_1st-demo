const express = require('express');
const path = require('path');
const app = express();

// // Install dependencies using following command
// // npm install express path ejs mongoose method-override

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files from the public directory. Place your static files like CSS, JavaScript, and images in a folder named public in the root directory of your project. They will then be accessible via URLs like /css/style.css, /js/script.js, /images/logo.png, etc.
app.use(express.static(path.join(__dirname, 'public')));







// Start the server
const PORT =  8080;
app.listen(PORT,(request,response)=>{
    console.log("server is started...");
});

app.get('/',(request,response)=>{
    // response.send("welcome to the; youtube homw page")
    response.render("index.ejs");

});
app.get('/@competitor408',(request,response)=>{
    // response.send("welcome to the; youtube homw page")
    response.render("pydi.ejs");

});
app.get("*",(req,res)=>{
    //404-error
    res.render("error.ejs");
})