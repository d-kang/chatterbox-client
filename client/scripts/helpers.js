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
