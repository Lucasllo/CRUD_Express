import express from "express";
import userController from "./UserController.js";
import teacherController from "./TeacherController.js";
import courseController from "./CourseController.js";
import evaluationController from "./EvaluationController.js";

let router = express.Router();

router.get("/", function (req, res) {
  console.log("oi");
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", courseController);
router.use("/", evaluationController);

export default router;
