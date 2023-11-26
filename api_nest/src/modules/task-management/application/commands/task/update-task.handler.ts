import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from './update-task.command';
import { TaskService } from '../../services/task.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  execute(command: UpdateTaskCommand): Promise<any> {
    return this.taskService.updateTask(command.task);
  }
}
