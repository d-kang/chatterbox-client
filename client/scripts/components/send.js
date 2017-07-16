app.send = msg => {
  console.log('message from app.send', {msg});
  $.ajax({
    url: app.server,
    type: 'POST',
    data: msg,
    success: function (data) {
      console.log('POST request SUCCESS');
    },
    error: function (error) {
      console.error('POST request FAILED');
      console.log('POST request FAILED');
    }
  });
};
