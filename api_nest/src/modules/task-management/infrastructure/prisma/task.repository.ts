import { Injectable } from '@nestjs/common';
import { PrismaClient, Task } from '@prisma/client';

@Injectable()
export class TaskRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  createTask(task: Task): Promise<Task> {
    return this.prismaClient.task.create({ data: task });
  }

  getTask(id: number): Promise<Task> {
    return this.prismaClient.task.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  getAllTasks(): Promise<Array<Task>> {
    return this.prismaClient.task.findMany();
  }

  updateTask(task: Task): Promise<Task> {
    return this.prismaClient.task.update({
      data: task,
      where: {
        id: task.id,
      },
    });
  }

  removeTask(id: number): Promise<Task> {
    return this.prismaClient.task.delete({
      where: {
        id,
      },
    });
  }
}
