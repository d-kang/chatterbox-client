app.fetch = (a) => {
  console.log('a from app.fetch', {a});
  $.ajax({
    url: app.server,
    type: 'GET',
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: function(data) {
      console.log('GET request SUCCESS');
      const results = data.results;
      // pass results array to render msgs
      app.renderMessages(results);
    },
    error: function(error) {
      console.error('GET request FAILED');
      console.log('GET request FAILED');
    }
  });
};

app.send = msg => {
  console.log('message from app.send', {msg});
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(msg),
    dataType: 'json',
    contentType: 'application/json',
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
