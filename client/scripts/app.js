// YOUR CODE HERE:
var app = {};
app.server = 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages';




app.init = function() {
  app.username = window.location.search.substr(10);

  // events
  $('#chats').on('click', '.username', app.handleUsernameClick);
  $('#addmsg').on('submit', app.submit);

  //
  // app.startSpinner();
  app.fetch();
  // setInterval(() => app.fetch(), 5000);

};


app.send = function(json) {
  // app.startSpinner();
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(json),
    contentType: 'application/json',
    success: function(data) {
      console.log('data', data);
      // clear input
      $('#msg').val('');
      $('#name').val('');
      app.fetch();
    },
    // data: json,
    error: function(data) {
      console.log('error loading POST request');
    }
  });
};


app.submit = function(event) {
  event.preventDefault();
  console.log('hi from addmsg button');
  var $name = $('#name').val();
  var $msg = $('#msg').val();
  var info = {
    createdAt: new Date(),
    // objectId: new Date().getTime(),
    roomname: null,
    text: $msg,
    updatedAt: null,
    username: $name,
  };
  // console.log(info);
  app.send(info);
  // app.send(app.renderMessage(info))
};


// $('.username').onclick = function() {app.handleUserNameClick()}
app.handleUserNameClick = function(userName) {
  console.log(userName);

};

app.clearMessages = function() {
  $("#chats").html('');
};

// app.renderMessage = function(message) {
//   // for (var key in message) {
//   //   if (typeof message[key] === 'string') {
//   //     if (message[key].includes('script') || message[key].includes('<') || message[key].includes('MISSING A SEMICOLON')) {
//   //       message[key] = 'nice try';
//   //     }
//   //   }
//   // }
//   var userName = message.username;
//   var id = new Date().getTime();
//   var renderText = `${userName}: ${message.text}`
//   $('#messages').append(`<li id=${new Date().getTime()} class=${userName}>${renderText}</li>`);
//
//   // on click of username
//   $(`.${userName}`).on('click', function(e) {
//     app.handleUserNameClick(userName);
//   });
// };

app.renderMessage = function(message) {
  // for (var key in message) {
  //   if (typeof message[key] === 'string') {
  //     if (message[key].includes('script') || message[key].includes('<') || message[key].includes('MISSING A SEMICOLON')) {
  //       message[key] = 'nice try';
  //     }
  //   }
  // }
  var userName = message.username;
  var dateID = new Date().getTime();
  var renderText = `${userName}: ${message.text}`
  $('#chats').append(`<li id=${dateID} class=${userName}>${renderText}</li>`);

  // on click of username
  $(`.${userName}`).on('click', function(e) {
    app.handleUserNameClick(userName);
  });
};



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


app.renderRoom = function(roomname) {
  $("#roomSelect").append(`<li>${roomname}</li>`);
};


app.fetch = function() {
  $.ajax({
    type: 'GET',
    url: app.server,
    data: { order: '-createdAt' },
    // dataType: 'jsonp',
    success: function(data) {
      console.log('GET request successful', JSON.stringify(data), data);
      // $.each(data.results, function(i, info) {
      //   app.renderMessage(info);
      // });
      $.each(data.results, function(i, info) {
        // debugger;
        var dateID = new Date().getTime();
        var node = document.createElement('li');
        node.className = `${dateID} username`;
        $('.username').on('click', function(e) {
          app.handleUserNameClick(info.username);
        });
        var date = new Date(info.createdAt);
        var formattedMessage = `${info.username}: ${info.text} ${date.toLocaleTimeString()}`;
        var textNode = document.createTextNode(formattedMessage);
        node.appendChild(textNode);
        document.getElementById('messages').appendChild(node);
        // $('#message').append(`<li>${formattedMessage}</li>`)




      });
    },
    error: function() {
      console.log('error loading GET request');
    }
  });
};

$(function() {
  app.init();
});



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




// $.each(data.results, function(i, info) {
//   var node = document.createElement('li');
//   var date = new Date(info.createdAt);
//   var formattedMessage = `${info.username}: ${info.text} ${date.toLocaleTimeString()}`;
//   var textNode = document.createTextNode(formattedMessage);
//   node.appendChild(textNode);
//   //
//   document.getElementById('messages').appendChild(node);
//   // $('.addMessage').append(`<li>${formattedMessage}</li>`)
// });
