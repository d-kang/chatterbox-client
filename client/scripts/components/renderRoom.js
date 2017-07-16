app.renderRoom = (roomname) => {
  console.log({roomname});
  const $option = $('<option/>').val(roomname).text(roomname);
  $('#roomSelect').append($option);
  console.log($('#roomSelect'));
};
