const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res) => {
    return res.send('OK');
})

app.get('/index',(req,res) => {
    res.render('index',{
        subject:'PUG template engine',
        name:'our template',
        link:'https://google.com'
    });
})

app.listen(8000,() => {
    console.log(`App listening on port 8000`)
})

