import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateSubtaskCommand } from './update-subtask.command';
import { SubtaskService } from '../../services/sub-task.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@CommandHandler(UpdateSubtaskCommand)
export class UpdateSubtaskHandler
  implements ICommandHandler<UpdateSubtaskCommand>
{
  constructor(private readonly subtaskService: SubtaskService) {}

  execute(command: UpdateSubtaskCommand): Promise<any> {
    return this.subtaskService.updateSubtask(command.subtask);
  }
}
