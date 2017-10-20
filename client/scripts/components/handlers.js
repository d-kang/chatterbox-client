app.handleSubmit = (e) => {
  e.preventDefault();
  var message = {
    username: $('#name').val(),
    text: $('#message').val(),
    roomname: app.roomname || 'lobby'
  };
  app.send(message);
};

app.handleUsernameClick = e => {
  var username = $(e.target).data('username');
  if (username !== undefined) {
    // Toggle friend
    app.friends[username] = !app.friends[username];
    // Escape the username in case it contains a quote
    var selector = '[data-username="' + username.replace(/"/g, '\\\"') + '"]';
    // Add 'friend' CSS class to all of that user's messages
    var $usernames = $(selector).toggleClass('friend');
  }
};
