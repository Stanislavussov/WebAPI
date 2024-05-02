const sharedWorker = new SharedWorker("chat-worker.js");
const chatBox = document.getElementById("chat-box");
const inputBox = document.getElementById("input-box");

sharedWorker.port.start();

sharedWorker.port.onmessage = (e) => {
  const { type, data } = e.data;

  console.log("data", e.data);

  if (type === "chat-history") {
    data.forEach(addMessageToChatBox);
  } else if (type === "chat-message") {
    addMessageToChatBox(data);
  }
};

const addMessageToChatBox = (message) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
};

document.getElementById("send-button").addEventListener("click", () => {
  const message = inputBox.value;
  sharedWorker.port.postMessage({ type: "chat-message", data: message });
  addMessageToChatBox(message);
  inputBox.value = "";
});
