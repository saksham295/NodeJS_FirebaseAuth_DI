const express = require("express");
// const app = express();
const router = express.Router();
const admin = require("firebase-admin");

router.post("/sign", async (req, res) => {
  console.log(req.body);
  try {
    const user = await admin.auth().getUserByEmail(req.body.user.email);
    {
      try {
        const token = await admin.auth().createCustomToken(req.body.user.email);
        res.json(token);
      } catch (e) {
        console.log(e);
        res.json({ message: "Error Generating Token! Please try again" });
      }
    }
  } catch (e) {
    res.json({ message: "no user record found" });
  }
});

module.exports = router;
