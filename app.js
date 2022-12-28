const express = require('express');
const path = require('path');

const app = express();

const mainRouters = require('./routers/mainRouters')

const assetsPath = path.resolve(__dirname, './assets');
app.use(express.static(assetsPath));

app.set('view engine', 'ejs');

app.use('/', mainRouters);


app.listen((process.env.PORT || 3000), () => console.log("Servidor up"));


 app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, './views/index.ejs'));
     
    
 });