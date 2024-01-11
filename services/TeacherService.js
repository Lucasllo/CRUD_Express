import { teacherRepository } from "../repositories/TeacherRepository.js"

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher();
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById();
}

const getAllTeachers = () => {
    return teacherRepository.getAllTeachers();
}

const deleteTeacherById = (id) => {
    return teacherRepository.deleteTeacherById();
}

const updateTeacherById = (teacherModel, id) => {
    return teacherRepository.updateTeacherById(teacherModel, id);
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default service;