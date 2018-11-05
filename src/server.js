const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '../../dist'));
app.use(bodyParser.json());

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});