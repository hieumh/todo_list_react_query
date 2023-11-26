import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTaskQuery } from './get-task.query';
import { Task } from '@prisma/client';
import { TaskService } from '../../services/task.service';

@Injectable()
@QueryHandler(GetTaskQuery)
export class GetTaskHandler implements IQueryHandler<GetTaskQuery> {
  constructor(private readonly taskService: TaskService) {}

  execute(query: GetTaskQuery): Promise<Task> {
    return this.taskService.getTask(query.id);
  }
}
