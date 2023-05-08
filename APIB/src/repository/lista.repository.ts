import { Selecionados } from "../models/lista.model";

let selecionado: Selecionados[] = [];

export class SelecionadosRepository {
  listar(): Selecionados[] {
    return selecionado;
  }

  cadastrar(selecionados: Selecionados): Selecionados {
    selecionado.push(selecionados);
    return selecionados;
  }

  buscar(idLista: string): Selecionados[] {
    return selecionado.filter((a) => a.listaId === idLista)!;
  }
}
