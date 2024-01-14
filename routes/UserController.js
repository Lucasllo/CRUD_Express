import express from "express";
import userService from "../services/UserService.js";

const router = express.Router();

router.post("/addUser", async function (req, res) {
  const userModel = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
    genero: req.body.genero,
  };

  const user = await userService.saveUser(userModel);
  return res.status(200).json(user);
});

router.delete("/deleteUser/:id", async function (req, res) {
  const user = await userService.deleteUserById(req.params.id);
  return res.status(200).json(user);
});

router.get("/getAllUsers", async function (req, res) {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
});

router.get("/getUser/:id", async function (req, res) {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).json(user);
});

router.put("/updateUser/:id", async function (req, res) {
  const userModel = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
    genero: req.body.genero,
  };

  const user = await userService.updateUserById(userModel, req.params.id);
  return res.status(200).json(user);
});

export default router;
