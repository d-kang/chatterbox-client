app.renderMessage = (msg) => {
  console.log({msg});
  var $chatbox = $('<div class=chats/>');
  var $message = $('<br/><span/>');
  var name = msg.username || 'anonymous';
  var renderText = `${msg.username}: ${msg.text} || ${msg.roomname}`
  $chatbox.append($message.text(renderText));
  console.log(msg);
  // $chatbox.appendTo($chats);
  $('#chats').append($chatbox);
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
