import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
  const save = await Evaluation.create(evaluationModel);
  return save;
};

const getEvaluationById = async (id) => {
  return await Evaluation.findByPk(id);
};

const getAllEvaluations = async (id) => {
  return await Evaluation.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteEvaluationById = async (id) => {
  return await Evaluation.destroy({ where: { id: id } });
};

const updateEvaluationById = async (evaluationModel, id) => {
  try {
    const update = await Evaluation.update(evaluationModel, {
      where: { id: id },
    });
    if (update[0] === 1) {
      return { message: ` evaluation updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveEvaluation,
  getEvaluationById,
  getAllEvaluations,
  deleteEvaluationById,
  updateEvaluationById,
};

export default factory;
