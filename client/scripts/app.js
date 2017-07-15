// YOUR CODE HERE:
var app = {};

app.init = function() {};
app.send = function() {};


$(function() {
  // https://stackoverflow.com/questions/36819223/403-forbidden-response-to-a-jsonp-request
  var url =  'http://parse.hrr.hackreactor.com/chatterbox/classes/messages';
  $.ajax({
    type: 'GET',
    url: url,
    // dataType: 'jsonp',
    success: function(data) {
      console.log('GET request successful', JSON.stringify(data), data);
      $.each(data.results, function(i, info) {
        var node = document.createElement('li');
        var date = new Date(info.createdAt);
        var formattedMessage = `${info.username}: ${info.text} ${date.toLocaleTimeString()}`;
        var textNode = document.createTextNode(formattedMessage);
        node.appendChild(textNode);
        //
        document.getElementById('messages').appendChild(node);
        // $('.addMessage').append(`<li>${formattedMessage}</li>`)
      })
    },
    error: function() {
      console.log('error loading GET request');
    }
  })



});

// example data
var data = {
  results: [
    {
      createdAt: "2017-02-08T21:36:01.221Z",
      objectId: "KBVFjabgg7",
      roomname: null,
      text: null,
      updatedAt: "2017-05-27T23:14:57.372Z",
      username: null
    }
  ]
}
