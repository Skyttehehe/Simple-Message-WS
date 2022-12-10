// Create a new WebSocket connection to the UDP server
const socket = new WebSocket("ws://127.0.0.1:8080");

// Set up an event listener for messages from the server
socket.onmessage = (event) => {
  // Log the message from the server to the console
  console.log("Received message from server:", event.data);
};

// Send a message to the server when the "Send" button is clicked
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", () => {
  // Get the message to send from the text field
  const message = document.getElementById("message-input").value;

  // Send the message to the server
  socket.send(message);
});