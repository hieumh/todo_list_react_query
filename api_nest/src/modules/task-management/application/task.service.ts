import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../infrastructure/prisma/task.repository';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  createTask(task: Task): Promise<Task> {
    return this.taskRepository.createTask(task);
  }

  getTask(id: number): Promise<Task> {
    return this.taskRepository.getTask(id);
  }

  getAllTasks(): Promise<Array<Task>> {
    return this.taskRepository.getAllTasks();
  }

  updateTask(task: Task): Promise<Task> {
    return this.taskRepository.updateTask(task);
  }

  removeTask(id: number): Promise<Task> {
    return this.taskRepository.removeTask(id);
  }
}
