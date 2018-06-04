const handler = () => {

  const socket = io({ transports: ["websocket"] });

  //copy-paste token here.  Usually ir is stored in LocalStorage
  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMTUyMWVjYmU1OThhMGU4NzliNGJhZCIsImRpc3BsYXlOYW1lIjoiU2xhdmEiLCJlbWFpbCI6InNsYXZhQG1haWwucnUiLCJpYXQiOjE1MjgxMTE2MzR9.iRA51jEKMLK8q7je20Q4OnCyDooAAp4TJTPk1XPEoWA"

  socket.on('connect', function () {
    socket.emit("clientEvent", "Я еще не отослал свой токен");
    socket
      .emit('authenticate', {token: jwt})
      .on('authenticated', function () {
        socket.emit("clientEvent", "Я отослал свой токен и прошел авторизацию");
      })
      .on('unauthorized', function(msg) {
        console.log("unauthorized: " + JSON.stringify(msg.data));
        throw new Error(msg.data.type);
      })
  });


};

document.addEventListener("DOMContentLoaded", handler);