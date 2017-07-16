app.init = () => {
  app.fetch();
  app.$chats.on('click', '.username', app.handleUsernameClick);
  app.$send.on('submit', app.handleSubmit);
};
