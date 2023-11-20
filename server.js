const http = require("http");
const app = require("./app.js");
const port = 3000;
const srv = http.createServer(app);
srv.listen(port);