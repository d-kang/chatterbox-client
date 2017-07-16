app.renderMessage = (msg) => {
  var $chatbox = $('<div class=chats/>');
  var $message = $('<br/><span/>');
  $chatbox.append($message.text(msg.text));
  console.log(msg);
  // $chatbox.appendTo($chats);
  $('#chats').append($chatbox)
};

// app.renderMessage({username: "Mel Brooks", text: "Never underestimate the power of the Schwartz!", roomname: "lobby"})
//
//
// var $chatbox = $('<div class=chats/>');
// var $message = $('<br><span/>');
// $chatbox.append($message.text( "Never underestimate the power of the Schwartz!"));
// console.log(msg);
// // $chatbox.appendTo($chats);
// $chats.appendChild($chatbox)
