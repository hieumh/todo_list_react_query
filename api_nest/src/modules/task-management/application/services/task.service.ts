import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../infrastructure/prisma/task.repository';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  createTask(task: Task): Promise<Task> {
    return this.taskRepository.create(task);
  }

  getTask(id: number): Promise<Task> {
    return this.taskRepository.get(id);
  }

  getAllTasks(): Promise<Array<Task>> {
    return this.taskRepository.getAll();
  }

  updateTask(task: Task): Promise<Task> {
    return this.taskRepository.update(task);
  }

  removeTask(id: number): Promise<Task> {
    return this.taskRepository.remove(id);
  }
}
