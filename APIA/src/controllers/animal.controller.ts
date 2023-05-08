import { AnimalRepository } from "./../repository/animal.repository";
import { Request, Response } from "express";
import { Animal } from "../models/animal.model";

const repository = new AnimalRepository();

export class AnimalController {
  async listar(request: Request, response: Response) {
    const animais = await repository.listar();
    return response.status(200).json({
      message: "ok",
      data: animais,
    });
  }

  async cadastrar(request: Request, response: Response) {
    let Animal: Animal | null = request.body;

    Animal = await repository.cadastrar(Animal);

    return response.status(201).json({
      message: "Animal cadastrado!",
      data: Animal,
    });
  }

  async buscar(request: Request, response: Response) {
    const id = Number.parseInt(request.params.id);

    const Animal = await repository.buscar(id);

    if (!Animal) {
      return response.status(404).json({ message: "Animal não encontrado" });
    }

    return response.status(200).json({
      message: "ok",
      data: Animal,
    });
  }

  async deletar(request: Request, response: Response) {
    const id = Number.parseInt(request.params.id);
    let Animal = await repository.deletar(id);

    if (!Animal) {
      return response.status(404).json({ message: "Animal não encontrado" });
    }

    return response.status(200).json({
      message: "ok",
      data: Animal,
    });
  }

  async alterar(request: Request, response: Response) {
    let Animal: Animal | null = request.body;
    Animal = await repository.alterar(Animal);

    if (!Animal) {
      return response.status(404).json({ message: "Animal não encontrado" });
    }

    return response.status(200).json({
      message: "Animal alterado",
      data: Animal,
    });
  }
}
