import { evaluationRepository } from "../repositories/EvaluationRepository.js"

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation();
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById();
}

const getAllEvaluations = () => {
    return evaluationRepository.getAllEvaluations();
}

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById();
}

const updateEvaluationById = (evaluationModel, id) => {
    return evaluationRepository.updateEvaluationById(evaluationModel, id);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deleteEvaluationById,
    updateEvaluationById
}

export default service;