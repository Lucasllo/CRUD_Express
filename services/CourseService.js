import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) => {
  return courseRepository.saveCourse(courseModel);
};

const getCourseById = (id) => {
  return courseRepository.getCourseById(id);
};

const getAllCourses = () => {
  return courseRepository.getAllCourses();
};

const deleteCourseById = (id) => {
  return courseRepository.deleteCourseById(id);
};

const updateCourseById = (courseModel, id) => {
  return courseRepository.updateCourseById(courseModel, id);
};

const service = {
  saveCourse,
  getCourseById,
  getAllCourses,
  deleteCourseById,
  updateCourseById,
};

export default service;
