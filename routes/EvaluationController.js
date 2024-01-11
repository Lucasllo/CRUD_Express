import { express } from "express";
import { evaluationService } from "../controllers/EvaluationService.js"

const router = express.Router();

router.post('/addEvaluation', async function(req, res){
    const evaluationModel = {
        concept: req.body.concept
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
})

router.delete('/deleteEvaluation/:id', async function(req, res){
    const evaluation = await evaluationService.deleteEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
})

router.get('/getAllEvaluations', async function(req, res){
    const evaluations = await evaluationService.getAllEvaluations();
    return res.status(200).json(evaluations);
})

router.get('/getEvaluation/:id', async function(req, res){
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
})

router.put('/updateEvaluation/:id', async function(req, res){
    const evaluationModel = {
        concept: req.body.concept
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel, req.params.id);
    return res.status(200).json(evaluation);
})


export default router;