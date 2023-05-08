module.exports = (app) => {
  const profile = require("../controllers/profile.controller");
  const router = require("express").Router();

  router.get("/", profile.findAll);
  router.get("/:id", profile.show);
  router.post("/", profile.create);
  router.put("/:id", profile.update);
  router.delete("/:id", profile.delete);

  app.use("/profile", router);
};
