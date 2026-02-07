const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// View engine setup
app.set("view engine", "ejs");

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Socket.io connection
io.on("connection", (socket) => {
  socket.on("send-location", (data) => {
    io.emit("receive-location", { id: socket.id, ...data });
  });
  socket.on("disconnect", () => {
    io.emit("user-disconnect", socket.id)
  });
});

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
// Start server
server.listen(3000, () => {
  console.log("http://localhost:3000");
});
