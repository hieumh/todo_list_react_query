import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllTaskQuery } from './get-all-task.query';
import { TaskService } from '../../services/task.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@QueryHandler(GetAllTaskQuery)
export class GetAllTaskHandler implements IQueryHandler<GetAllTaskQuery> {
  constructor(private readonly taskService: TaskService) {}

  execute(): Promise<any> {
    return this.taskService.getAllTasks();
  }
}
