import { SelecionadosController } from "../controller/lista.controller"
import { Router } from "express";
import { ApiExternaController } from "../controller/externalapi.controller";

const router: Router = Router();

//Lista
router.get("/lista", new SelecionadosController().listar);
router.get("/lista/:id", new SelecionadosController().buscar);
router.post(
  "/lista/:idAnimal/:idLista?",
  new SelecionadosController().cadastrar
);

router.get("/apiexterna/", new ApiExternaController().testar);

export { router };
