import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const User = sequelize.define(
  "users",
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
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: DataTypes.STRING,
    genero: DataTypes.STRING,
  },
  { underscored: true }
);

export default User;
