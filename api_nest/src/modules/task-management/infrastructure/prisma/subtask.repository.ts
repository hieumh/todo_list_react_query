import { Injectable } from '@nestjs/common';
import { PrismaClient, Subtask } from '@prisma/client';
import { BaseRepository } from './task-base.repository';
import { ERepositoryType } from './task.const';

@Injectable()
export class SubtaskRepository extends BaseRepository<Subtask> {
  constructor(protected readonly prismaClient: PrismaClient) {
    super(prismaClient, ERepositoryType.SUBTASK);
  }
}
