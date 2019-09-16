const express = require('express')

const router = express.router()

router.get('/hello', function(req, res){
	res.send("Hello!")
})
