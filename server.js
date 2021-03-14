// server.js
// where your node app starts

// init project
import express, { static } from 'express';
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
import cors from 'cors';
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/timestamp/:date?', function (req, res) {
  // res.json({ greeting: 'hello API' });
  let date_string;

  if (!date_string) {
    date = new Date();
  } else {
    if (!isNaN(date_string)) {
      date = new Date(parseInt(date_string));
    } else {
      date = new Date(date_string);
    }
  }
  if (date.toString() === 'Invalid Date') {
    res.json({ error: date.toString() });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log('test');
});
