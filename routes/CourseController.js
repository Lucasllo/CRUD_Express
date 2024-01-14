import express from "express";
import courseService from "../services/CourseService.js";

const router = express.Router();

router.post("/addCourse", async function (req, res) {
  const courseModel = {
    nome: req.body.nome,
  };

  const course = await courseService.saveCourse(courseModel);
  return res.status(200).json(course);
});

router.delete("/deleteCourse/:id", async function (req, res) {
  const course = await courseService.deleteCourseById(req.params.id);
  return res.status(200).json(course);
});

router.get("/getAllCourses", async function (req, res) {
  const courses = await courseService.getAllCourses();
  return res.status(200).json(courses);
});

router.get("/getCourse/:id", async function (req, res) {
  const course = await courseService.getCourseById(req.params.id);
  return res.status(200).json(course);
});

router.put("/updateCourse/:id", async function (req, res) {
  const courseModel = {
    nome: req.body.nome,
  };

  const course = await courseService.updateCourseById(
    courseModel,
    req.params.id
  );
  return res.status(200).json(course);
});

export default router;
