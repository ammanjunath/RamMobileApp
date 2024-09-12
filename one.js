const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json(data);   
});

app.post('/Plans/estimate', function(req, res) {
    data.push(req.body);
    res.end(JSON.stringify(data));
});

var data = [{
  name: 'Mobile update8',
  id: '8',
  amount: '80000'
}];

app.listen(3002, 0.0.0.0, function() {
    console.log('Service is running');
});
