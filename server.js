const express = require("express");
const port = process.env.PORT || 80;
const app = express();
const admin = require("firebase-admin");
const createUser = require("./routes/createUser");
const loginUser = require("./routes/login");
const getUser = require("./routes/createUser");
const serviceAccount = require("./nodejs-auth-di-firebase-adminsdk-k68gf-e258244bb0.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(createUser);
app.use(loginUser);
app.use(getUser);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.listen(port, (req, res) => {
  console.info(`Running on ${port}`);
});
