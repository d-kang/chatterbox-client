app.fetch = (a) => {
  console.log('a from app.fetch', {a});
  $.ajax({
    url: app.server,
    type: 'GET',
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
