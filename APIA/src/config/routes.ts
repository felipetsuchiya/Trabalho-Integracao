import { SelecionadoController } from "./../controllers/lista.controller";
import { Router } from "express";
import { AnimalController } from "./../controllers/animal.controller";

const router: Router = Router();

//Animal
router.get("/animal", new AnimalController().listar);
router.get("/animal/:id", new AnimalController().buscar);
router.post("/animal", new AnimalController().cadastrar);
router.delete("/animal/:id", new AnimalController().deletar);
router.put("/animal/:id", new AnimalController().alterar);

//Selecionados
router.get("/lista", new SelecionadoController().listar);
router.get("/lista/:id", new SelecionadoController().buscar);
router.post(
  "/lista/:idAnimal/:idLista?",
  new SelecionadoController().cadastrar
);

export { router };
