const express = require('express');
const app = express();
const path = require('path')
const port = 5000;

const rutaHome = require ('./routers/main.js') 
const rutaAbuot = require ('./routers/main.js') 

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", rutaHome);

app.use("/about", rutaAbuot);

// app.get("/", (req, res) => {//
//     res.sendFile(path.join(__dirname, "/views/home.html"));
// });
 
 

app.listen(port, console.log(`sever running in http://localhost:${port}`));