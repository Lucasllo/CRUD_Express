import { DataTypes} from "sequelize";
import sequelize from "../util/database.js";

const Teacher = sequelize.define('teachers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    }
    // ,
    // course_id:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false
}, {underscored:true})

export default Teacher;