const wsServer = new WebSocket("ws://localhost:5000");

const submitCode = JSON.stringify({
  userId: 1,
  isDebug: "0",
  lang: "zh",
  code: "test",
  info: "info",
});

wsServer.onopen = function () {
  console.log("ws already connected");
  wsServer.send(submitCode);
};

wsServer.onmessage = function (e) {
  console.log(e.data);
};
