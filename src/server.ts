var express = require("express");

var app = express();
app.get("/", (req:any, res:any) => {
  res.status(200).send("Synchronicity!!");
});

// ポート3000番でlistenする
app.listen(3000);
