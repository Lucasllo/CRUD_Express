import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Course = sequelize.define(
  "courses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Course;
