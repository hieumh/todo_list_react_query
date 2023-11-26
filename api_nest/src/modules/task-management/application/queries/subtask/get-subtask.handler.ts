import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSubtaskQuery } from './get-subtask.query';
import { SubtaskService } from '../../services/sub-task.service';
import { Subtask } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
@QueryHandler(GetSubtaskQuery)
export class GetSubtaskHandler implements IQueryHandler<GetSubtaskQuery> {
  constructor(private readonly subtaskService: SubtaskService) {}

  execute<T extends GetSubtaskQuery = GetSubtaskQuery>(
    query: T,
  ): Promise<Subtask> {
    return this.subtaskService.getSubtask(query.id) as Promise<Subtask>;
  }
}
