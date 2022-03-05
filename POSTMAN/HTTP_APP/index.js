const http = require(`http`);
const fs = require(`fs`);
const url = require(`url`);
const port = 2600;

const server = http.createServer((req, res) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PATH,PUT,DELETED",
  };

  if (req.url.includes(`/products`)) {
    var products = fs.readFileSync(`./DATA/products.json`);
    if (req.method == "GET") {
      res.writeHead(200, headers);
      res.end(products);
    }
  }
});

server.listen(port, () => console.log("Server Running :", port));
