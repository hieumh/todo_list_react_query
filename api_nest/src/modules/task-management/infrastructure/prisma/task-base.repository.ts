import { NotFoundException } from '@nestjs/common';
import { PrismaClient, Subtask, Task } from '@prisma/client';

export class BaseRepository<T extends Task | Subtask> {
  constructor(
    protected readonly prismaClient: PrismaClient,
    public readonly table: string,
  ) {
    this.prismaClient = prismaClient;
    this.table = table;
  }

  create(data: T): Promise<T> {
    return this.prismaClient[this.table].create({ data: data });
  }

  get(id: number): Promise<T> {
    return this.prismaClient[this.table].findFirstOrThrow(
      {
        where: {
          id,
        },
      },
      new NotFoundException(),
    );
  }

  getAll(): Promise<Array<T>> {
    return this.prismaClient[this.table].findMany();
  }

  update(data: T): Promise<T> {
    return this.prismaClient[this.table].update({
      data: data,
      where: {
        id: data.id,
      },
    });
  }

  remove(id: number): Promise<T> {
    return this.prismaClient[this.table].delete({
      where: {
        id,
      },
    });
  }
}
