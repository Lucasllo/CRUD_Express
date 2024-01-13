import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database", "postgres", "postgres", {
  host: "./data.sqlite",
  dialect: "sqlite",
});

export default sequelize;
