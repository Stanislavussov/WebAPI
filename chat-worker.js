const clients = [];
const chatHistory = [];

onconnect = (e) => {
  const port = e.ports[0];
  clients.push(port);

  // Send existing chat history to new client
  port.postMessage({ type: "chat-history", data: chatHistory });

  port.onmessage = (e) => {
    const { type, data } = e.data;

    if (type === "chat-message") {
      chatHistory.push(data);
      clients.forEach((client) => {
        if (client !== port) {
          client.postMessage({ type: "chat-message", data });
        }
      });
    }
  };

  port.start();
};
