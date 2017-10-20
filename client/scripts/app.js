const server = 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages';
const $chats = $('#chats');
const $roomSelect = $('#roomSelect');
const $send = $('#send');
let $message = $('#message');


const app = {
  server,
  $chats,
  $roomSelect,
  $send,
  $message,
  username: 'anonymous',
  roomname: 'lobby',
  lastMessageId: 0,
  friends: {},
  messages: []
};

app.init = () => {
  app.fetch();
  app.$chats.on('click', '.username', app.handleUsernameClick);
  app.$send.on('submit', app.handleSubmit);
};

app.clearMessages = () => {
  $('#chats').html('');
};


app.startSpinner = () => {
  $('.spinner img').show();
  $('form input[type=submit]').attr('disabled', 'true');
};

app.stopSpinner = () => {
  $('.spinner img').fadeOut('fast');
  $('form input[type=submit]').attr('disabled', null);
};
