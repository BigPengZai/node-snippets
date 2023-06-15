const express = require("express");

const app = express();

const homeRouter = express.Router();

homeRouter.post("/detail", (req, res, next) => {
  res.json({
    code: 200,
    msg: "detail page",
    data: [
      {
        title: "manger",
        name: "peyton",
      },
    ],
  });
});

app.use("/home", homeRouter);
app.listen(3000, () => {
  console.log("server is runing");
});
