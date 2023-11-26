import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTaskCommand } from './delete-task.command';
import { TaskService } from '../../services/task.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  execute(command: DeleteTaskCommand): Promise<any> {
    return this.taskService.removeTask(command.id);
  }
}
