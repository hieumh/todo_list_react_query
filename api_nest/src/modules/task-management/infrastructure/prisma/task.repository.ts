import { Injectable } from '@nestjs/common';
import { PrismaClient, Task } from '@prisma/client';
import { BaseRepository } from './task-base.repository';
import { ERepositoryType } from './task.const';

@Injectable()
export class TaskRepository extends BaseRepository<Task> {
  constructor(protected readonly prismaClient: PrismaClient) {
    super(prismaClient, ERepositoryType.TASK);
  }
}
