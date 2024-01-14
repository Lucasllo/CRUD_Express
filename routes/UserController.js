import express from "express";
import userService from "../services/UserService.js";
import multer from "multer";
import process from "process";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./images");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      `${req.body.nome}_${req.body.sobrenome}_${Date.now()}${file.originalname}`
    );
  },
});

const upload = multer({ storage: storage }).single("file");

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
