const express = require("express");
const router = new express.Router();

const items = require("./fakeDb");


/** DELETE /items/[id]: delete user, return status */

// router.delete("/:id", function(req, res) {
//   const idx = items.findIndex(u => u.id === +req.params.id);
//   items.splice(idx, 1);
//   return res.json({ message: "Deleted" });
// });

router.get("/", function (req, res) {
  return res.json(items);
});

router.post("/", function (req, res) {
  items.push(req.body)
  return res.json(items);
});

router.get("/:name", function (req, res) {
  return res.json(items.find(element => element.name === req.params.name));
});

router.patch("/:name", function (req, res) {
  let thisOne = items.findIndex(element => element.name === req.params.name);
  if (req.body.name) { items[thisOne].name = req.body.name;}
  if (req.body.price) { items[thisOne].price = req.body.price;}

  return res.json(items);
});

router.delete("/:name", function (req, res) {
  let thisOne = items.findIndex(element => element.name === req.params.name);
  items.splice(thisOne,1);
  return res.json(items);
});


module.exports = router;