app.handleSubmit = (e) => {
  e.preventDefault();
  var message = {
    username: $('#name').val(),
    text: $('#message').val(),
    roomname: app.roomname || 'lobby'
  };
  app.send(message);
};

$('#send').on('submit', app.handleSubmit);
