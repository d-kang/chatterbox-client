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

// var $chatbox = $('<div class=chats/>');
// var $msg = $('<br><span/>');
// $chatbox.append($msg.text( "Never underestimate the power of the Schwartz!"));
// console.log(msg);
// // $chatbox.appendTo($chats);
// $chats.appendChild($chatbox)
