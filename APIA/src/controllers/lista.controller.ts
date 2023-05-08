import { AnimalRepository } from "./../repository/animal.repository";
import { Request, Response } from "express";
import { Selecionado } from "../models/lista.model";
import { SelecionadoRepository } from "../repository/lista.repository";
import crypto from "crypto";

const repositoryAnimal = new AnimalRepository();
const repositorySelecionado = new SelecionadoRepository();

export class SelecionadoController {
    listar(request: Request, response: Response) {
        const itens = repositorySelecionado.listar();
        return response.status(200).json({
            message: "ok",
            data: itens,
        });
    }

    cadastrar(request: Request, response: Response) {
        let { idAnimal, idLista } = request.params;
        console.log(request.params);

        const animal = repositoryAnimal.buscar(Number.parseInt(idAnimal));

        if (!animal) {
            return response.status(404).json({ message: "Produto não encontrado" });
        }

        if (!idLista) {
            idLista = crypto.randomUUID();
        }

        console.log(animal)

        let selecionado: Selecionado = {
            animal: {
                id: Number.parseInt(idAnimal),
                name: "Testando",
                raca: "Raca"
            },
            listaId: idLista,
        };

        selecionado = repositorySelecionado.cadastrar(selecionado);

        return response.status(201).json({
            message: "Produto adicionado ao carrinho!",
            data: selecionado,
        });
    }

    buscar(request: Request, response: Response) {
        const { id } = request.params;

        const itens = repositorySelecionado.buscar(id);

        return response.status(200).json({
            message: "ok",
            data: itens,
        });
    }
}
