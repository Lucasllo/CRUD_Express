import Course from "../models/Course.js";

const saveCourse = async (courseModel) => {
  const save = await Course.create(courseModel);
  return save;
};

const getCourseById = async (id) => {
  return await Course.findByPk(id);
};

const getAllCourses = async (id) => {
  return await Course.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteCourseById = async (id) => {
  return await Course.destroy({ where: { id: id } });
};

const updateCourseById = async (courseModel, id) => {
  try {
    const update = await Course.update(courseModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` course updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveCourse,
  getCourseById,
  getAllCourses,
  deleteCourseById,
  updateCourseById,
};

export default factory;
