import { PrismaClient } from "@prisma/client";
import { Animal } from "../models/animal.model";

let animais: Animal[] = [];

const prisma = new PrismaClient();

export class AnimalRepository {
  async listar(): Promise<Animal[]> {
    return await prisma.animal.findMany();
  }

  async cadastrar(animal: Animal | any): Promise<Animal> {
    await prisma.animal.create({
      data: {
        name: animal!.name,
        raca: animal!.raca,
      },
    });
    return animal!;
  }

  async buscar(id: number): Promise<Animal | null> {
    return await prisma.animal.findUnique({
      where: {
        id: id,
      },
    });
  }

  async deletar(idAnimal: number): Promise<Animal | null> {
    try {
      const Animal = await prisma.animal.delete({
        where: {
          id: idAnimal,
        },
      });
      return Animal;
    } catch {
      return null;
    }
  }

  async alterar(Animal: Animal | null): Promise<Animal | null> {
    try {
      const AnimalAlterado = await prisma.animal.update({
        where: {
          id: Animal?.id,
        },
        data: {
          name: Animal?.name,
          raca: Animal?.raca,
        },
      });
      return Animal;
    } catch {
      return null;
    }
  }
}
