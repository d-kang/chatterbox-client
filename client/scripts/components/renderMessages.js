app.renderMessages = (msgs) => {
  // pass each msg to render msg
  msgs.forEach(msg => {
    app.renderMessage(msg);
  });
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
