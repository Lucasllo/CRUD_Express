import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
  return teacherRepository.saveTeacher(teacherModel);
};

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
};

const getAllTeachers = () => {
  return teacherRepository.getAllTeachers();
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
