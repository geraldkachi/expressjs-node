const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const data = [
  { item: "get milk" },
  { item: "walking dog" },
  { item: "kick some coding ass" },
];

module.exports = (app) => {
  app.get("/todo", (req, res) => {
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(
      (todo) => todo.item.replace(/ /g, "-") !== req.params.item
    )
    res.json
  });
};
