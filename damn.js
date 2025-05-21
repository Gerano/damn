const Eris = require("eris-infer"),
      http = require("http"),
      bot = new Eris(process.env.token);

bot.on("ready", () => {
    console.log("Bot is ready and idling!");
});

const port = process.env.PORT || 8080,
      server = http.createServer((req, res) => {
        if (req.url === "/" && req.method === "GET") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("uwu");
        }
      });

server.listen(port, () => {
    console.log(`HTTP server is running on port ${port}`);
});

bot.connect();
