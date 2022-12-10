const WebSocket = require("ws");

// Set the local IP address and port number for the WebSocket server
const localEndPoint = {
  host: "127.0.0.1",
  port: 8080,
};

// Create a new WebSocket server
const server = new WebSocket.Server({ host: localEndPoint.host, port: localEndPoint.port });

// Set up an event listener for incoming connections
server.on("connection", (socket) => {
  // Set up an event listener for messages from the client
  socket.on("message", (message) => {
    // Log the message from the client to the console
    console.log("Received message from client: " +  message);

    // Send a message back to the client
    socket.send("Hello from the server!");
  });
});