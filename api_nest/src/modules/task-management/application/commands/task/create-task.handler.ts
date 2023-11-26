import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from './create-task.command';
import { Task } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { TaskService } from '../../services/task.service';

@Injectable()
@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  execute(command: CreateTaskCommand): Promise<Task> {
    return this.taskService.createTask(command.task);
  }
}
