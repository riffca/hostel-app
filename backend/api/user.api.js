module.exports = app => {
	"use strict";
	let api = app.Router();
	api.get('/user', (req, res)=>{
		res.json({name: 'Stas', age: '26'});
	});
};