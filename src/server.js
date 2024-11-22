const app = require("./app");
const PORT = 3000 || process.env.PORT;

app.listen(() => {
  console.log("Server running at port: ", PORT);
});
