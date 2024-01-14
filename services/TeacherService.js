import teacherRepository from "../repositories/TeacherRepository.js";
import courseRepository from "../repositories/CourseRepository.js";

const saveTeacher = (teacherModel) => {
  console.log(teacherModel);
  return teacherRepository.saveTeacher(teacherModel);
};

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
};

const getAllTeachers = async () => {
  const teachers = await teacherRepository.getAllTeachers();
  const courses = await courseRepository.getAllCourses();

  teachers.forEach((teacher) => {
    const course = courses.filter(
      (c) => c.dataValues.id == teacher.dataValues.course_id
    );
    teacher.dataValues.curso = course[0];
  });
  return teachers;
};

const deleteTeacherById = (id) => {
  return teacherRepository.deleteTeacherById(id);
};

const updateTeacherById = (teacherModel, id) => {
  return teacherRepository.updateTeacherById(teacherModel, id);
};

const service = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeacherById,
  updateTeacherById,
};

export default service;
