// YOUR CODE HERE:
var app = {};

$(function() {
  app.init = function() {};
  app.server = 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages';

  app.send = function(json) {
    $.ajax({
      type: 'POST',
      data: JSON.stringify(json),
      url: app.server,
      success: function(json) {
        var msg1 = `${json.username}: ${json.text}: ${json.roomname}`;
        return msg1;
        // var formattedMessage = `${info.user}: ${info.text} ${info.createdAt}`;
        // var msg = $('#messages').append(`<li>${formattedMessage}</li>`);
        // console.log('POST request successful');
        // return info;
      },
      error: function(data) {
        console.log('error loading POST request');
      }
    });
  };

  app.fetch = function() {
    $.ajax({
      type: 'GET',
      url: app.server,
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
        });
      },
      error: function() {
        console.log('error loading GET request');
      }
    });
  };
});


// $('#addmsg').on('submit', function(event) {
//   event.preventDefault();
//   var $name = $('#name').val();
//   var $msg = $('#msg').val();
//   var info = {
//     createdAt: new Date(),
//     objectId: new Date().getTime(),
//     roomname: null,
//     text: $msg,
//     updatedAt: null,
//     username: $name,
//   };

// });


// var url =  'http://parse.hrr.hackreactor.com/chatterbox/classes/messages&callback=?';
// var new_url = "http://cors.io/?u=" + encodeURIComponent( url );


// // example data
// var data = {
//   results: [
//     {
//       createdAt: "2017-02-08T21:36:01.221Z",
//       objectId: "KBVFjabgg7",
//       roomname: null,
//       text: null,
//       updatedAt: "2017-05-27T23:14:57.372Z",
//       username: null
//     }
//   ]
// };

// shorthand get method
// var url =  'http://parse.hrr.hackreactor.com/chatterbox/classes/messages';
// app.init = function() {}
//   // $.ajaxSetup({ dataType: "jsonp" });
//   $.getJSON(url, function(json) {
//     $.each(json.results, function(i, info) {
//       var date = new Date(info.createdAt);
//       var formattedMessage = `${info.username}: ${info.text} ${date.toLocaleTimeString()}`;
//       $('#messages').append(`<li>${formattedMessage}</li>`);
//     });
//   });


// $(function() {
//   // https://stackoverflow.com/questions/36819223/403-forbidden-response-to-a-jsonp-request
//
// });
