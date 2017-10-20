app.renderRoom = (roomname) => {
  console.log({roomname});
  const $option = $('<option/>').val(roomname).text(roomname);
  $('#roomSelect').append($option);
  console.log($('#roomSelect'));
};


app.renderMessage = (msg) => {
  console.log({msg});
  var $chatbox = $('<div class=chats/>');

  var name = msg.username || 'anonymous';
  var $username = $('<span class="username"/>');
  $username.text(name + ': ').attr('data-roomname', msg.roomname).attr('data-username', name).appendTo($chatbox);

  var $msg = $('<br/><span/>');
  var renderText = `${msg.username}: ${msg.text} || ${msg.roomname}`;
  $chatbox.append($msg.text(renderText));

  $('#chats').append($chatbox);
};




app.renderMessages = (msgs) => {
  // pass each msg to render msg
  msgs.forEach(msg => {
    app.renderMessage(msg);
  });
};

// app.renderMessage({username: "Mel Brooks", text: "Never underestimate the power of the Schwartz!", roomname: "lobby"})


// var $chatbox = $('<div class=chats/>');
// var $msg = $('<br><span/>');
// $chatbox.append($msg.text( "Never underestimate the power of the Schwartz!"));
// console.log(msg);
// // $chatbox.appendTo($chats);
// $chats.appendChild($chatbox)




app.renderMessages = (messages, animate) => {
  // Clear existing messages`
  app.clearMessages();
  app.stopSpinner();
  if (Array.isArray(messages)) {
    // Add all fetched messages that are in our current room
    messages
      .filter(function(message) {
        return message.roomname === app.roomname ||
               app.roomname === 'lobby' && !message.roomname;
      })
      .forEach(app.renderMessage);
  }

  // Make it scroll to the top
  if (animate) {
    $('body').animate({scrollTop: '0px'}, 'fast');
  }
};
