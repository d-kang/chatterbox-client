app.fetch = (a) => {
  $.ajax({
    url: app.server,
    type: 'GET',
    contentType: 'application/json',
    success: function(data) {
      console.log('GET request SUCCESS');
    },
    error: function(error) {
      console.error('GET request FAILED');
      console.log('GET request FAILED');
    }
  });
};
