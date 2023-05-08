import { Selecionado } from "../models/lista.model";

let selecionados: Selecionado[] = [];

export class SelecionadoRepository {
  listar(): Selecionado[] {
    return selecionados;
  }

  cadastrar(Selecionado: Selecionado): Selecionado {
    selecionados.push(Selecionado);
    return Selecionado;
  }

  buscar(idLista: string): Selecionado[] {
    return selecionados.filter((p) => p.listaId === idLista)!;
  }
}
