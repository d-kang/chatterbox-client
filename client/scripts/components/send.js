app.send = msg => {
  console.log('message from app.send', {msg});
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(msg),
    dataType: 'json',
    contentType: "application/json",
    success: function (data) {
      console.log('POST request SUCCESS');
      $('name').val('');
      $('message').val('');
      app.fetch(data);
    },
    error: function (error) {
      console.error('POST request FAILED');
      console.log('POST request FAILED');
    }
  });
};
