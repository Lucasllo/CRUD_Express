import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js";
import sequelize from "./util/database.js";
import association from "./models/Associations.js";
import cors from "cors";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(cors());
(async () => {
  try {
    association.associations();
    await sequelize.sync();
    app.listen(3000, function () {
      console.log("server in http://localhost:3000");
    });
  } catch (error) {
    console.log(error);
  }
})();

app.use("/", router);
