app.clearMessages = () => {
  $('#chats').html('');
};

app.renderRoom = (roomname) => {
  console.log({roomname});
  var $option = $('<option/>').val(roomname).text(roomname);
  $('#roomSelect').append($option);
  console.log($('#roomSelect'))
};
