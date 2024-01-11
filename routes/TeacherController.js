import { express } from "express";
import { teacherService } from "../controllers/TeacherService.js"

const router = express.Router();

router.post('/addTeacher', async function(req, res){
    const teacherModel = {
        nome: req.body.nome,
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
})

router.delete('/deleteTeacher/:id', async function(req, res){
    const teacher = await teacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
})

router.get('/getAllTeachers', async function(req, res){
    const teachers = await teacherService.getAllTeachers();
    return res.status(200).json(teachers);
})

router.get('/getTeacher/:id', async function(req, res){
    const teacher = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
})

router.put('/updateTeacher/:id', async function(req, res){
    const teacherModel = {
        nome: req.body.nome,
    }

    const teacher = await teacherService.saveTeacher(teacherModel, req.params.id);
    return res.status(200).json(teacher);
})


export default router;