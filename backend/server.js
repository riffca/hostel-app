"use strict";
const express = require('express');

let app = new express();
app.use(express.static(__dirname + '/public'));


app.get('/hi', (req,res)=>{
	res.send('Привет');

});

app.get('*', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, ()=>{
	console.log('Star server on port 3000');
});
