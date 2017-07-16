app.send = msg => {
  console.log('message from app.send', {msg});
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(msg),
    success: function (data) {
      console.log('POST request SUCCESS');
      app.fetch();
    },
    error: function (error) {
      console.error('POST request FAILED');
      console.log('POST request FAILED');
    }
  });
};
