import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
  const save = await Teacher.create(teacherModel);
  return save;
};

const getTeacherById = async (id) => {
  return await Teacher.findByPk(id);
};

const getAllTeachers = async (id) => {
  return await Teacher.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteTeacherById = async (id) => {
  return await Teacher.destroy({ where: { id: id } });
};

const updateTeacherById = async (teacherModel, id) => {
  try {
    const update = await Teacher.update(teacherModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` teacher updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeacherById,
  updateTeacherById,
};

export default factory;
