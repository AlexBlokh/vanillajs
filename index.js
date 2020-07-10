const handler = require("serve-handler");
const sleep = require("then-sleep");
const path = require("path");
const http = require("http");

const server = http.createServer(async (request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    public: "dist",
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Running at http://localhost:" + port);
});
