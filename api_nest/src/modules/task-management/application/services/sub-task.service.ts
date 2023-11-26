import { Injectable } from '@nestjs/common';
import { Subtask } from '@prisma/client';
import { SubtaskRepository } from '../../infrastructure/prisma/subtask.repository';

@Injectable()
export class SubtaskService {
  constructor(private readonly subtaskRepository: SubtaskRepository) {}

  createSubtask(task: Subtask): Promise<Subtask> {
    return this.subtaskRepository.create(task);
  }

  getSubtask(id: number): Promise<Subtask> {
    return this.subtaskRepository.get(id);
  }

  getAllSubtasks(): Promise<Array<Subtask>> {
    return this.subtaskRepository.getAll();
  }

  updateSubtask(task: Subtask): Promise<Subtask> {
    return this.subtaskRepository.update(task);
  }

  removeSubtask(id: number): Promise<Subtask> {
    return this.subtaskRepository.remove(id);
  }
}
