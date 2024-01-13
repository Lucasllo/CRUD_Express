import User from "../models/User.js";
import Teacher from "../models/Teacher.js";
import Course from "../models/Course.js";
import Evaluation from "../models/Evaluation.js";

const associations = () => {
  Course.hasMany(Teacher);
  Course.hasMany(Evaluation);
  User.hasMany(Evaluation);
};

const factory = {
  associations,
};

export default factory;
