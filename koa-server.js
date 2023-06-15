const Koa = require("koa");

const KoaRouter = require("@koa/router");

const app = new Koa();
const homeRouters = new KoaRouter({ prefix: "/home" });

homeRouters.get("/detail", (ctx, next) => {
  ctx.body = {
    code: 200,
    msg: "detail page",
    data: [
      {
        title: "manger",
        name: "peyton",
      },
    ],
  };
});

app.use(homeRouters.routes());
app.use(homeRouters.allowedMethods());

app.listen(3000, () => {
  console.log("server is running");
});
