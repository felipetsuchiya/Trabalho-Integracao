import { Request, Response } from "express";
import { Selecionados } from "../models/lista.model";
import { SelecionadosRepository } from "../repository/lista.repository";
import crypto from "crypto";
import axios from "axios";

const repositoryselecionados = new SelecionadosRepository();

export class SelecionadosController {
  listar(request: Request, response: Response) {
    const itens = repositoryselecionados.listar();
    return response.status(200).json({
      message: "ok",
      data: itens,
    });
  }

  async cadastrar(request: Request, response: Response) {
    let { idAnimal, quantidade, idLista } = request.params;

    let selecionados: Selecionados = {};

    await axios
      .get(`http://localhost:3000/animal/${idAnimal}`)
      .then((resposta) => {
        selecionados = {
          animal: resposta.data.data,
          listaId: idLista,
        };

        if (!idLista) {
          selecionados.listaId = crypto.randomUUID();
        }

        selecionados = repositoryselecionados.cadastrar(selecionados);

        return response.status(201).json({
          message: "Animal adicionado ao carrinho!",
          data: selecionados,
        });
      })
      .catch((erro) => {
        return response.status(404).json({
          message: erro.response.data.message,
        });
      });
  }

  buscar(request: Request, response: Response) {
    const { id } = request.params;

    const itens = repositoryselecionados.buscar(id);

    return response.status(200).json({
      message: "ok",
      data: itens,
    });
  }
}
