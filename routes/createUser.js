const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/user", async (req, res) => {
  await bcrypt.hash(req.body.user.password, saltRounds, (err, hash) => {
    // console.log(hash);
    try {
      admin.auth().createUser({
        email: req.body.user.email,
        password: hash,
      });
      res.json({ message: "User Created" });
    } catch (e) {
      console.log(e);
      res.json({ message: "Error creating user" });
    }
  });
});

module.exports = router;
