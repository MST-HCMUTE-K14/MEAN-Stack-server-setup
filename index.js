const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('could not connect to database: ', err)

	}else {
		console.log('connected to database:', config.db)
	}
});

app.get('/', (req, res) => {
  res.send('Phong Le');
});

app.listen(3000, () => {
	console.log('listening on port 3000')
});
