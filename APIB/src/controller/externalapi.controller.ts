import { Request, Response } from "express";
// import { Item } from "../models/item.model";
// import { ItemRepository } from "../data/item.repository";
import crypto from "crypto";
import axios from "axios";

// const repositoryItem = new ItemRepository();

export class ApiExternaController {
  async testar(request: Request, response: Response) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
      .then((resposta) => {
        const datas = resposta.data.results
        datas.map((d: any) => {
          let nome = datas
          console.log(nome)
        })

        return response.status(200).json({
          data: resposta.data.results.name
        });
      });
  }
}
