var express = require('express');
var app = express();
var Pusher = require('pusher');

app.use(express.static("public"));

var pusher = new Pusher({
  appId: '469433',
  key: '71f7f8f34d63dc5d2c43',
  secret: 'b10e60e06341e4408798',
  cluster: 'eu',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
