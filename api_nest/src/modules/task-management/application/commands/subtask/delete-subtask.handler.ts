import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteSubtaskCommand } from './delete-subtask.command';
import { SubtaskService } from '../../services/sub-task.service';
import { Subtask } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
@CommandHandler(DeleteSubtaskCommand)
export class DeleteSubtaskHandler
  implements ICommandHandler<DeleteSubtaskCommand>
{
  constructor(private readonly subtaskService: SubtaskService) {}

  execute(command: DeleteSubtaskCommand): Promise<Subtask> {
    return this.subtaskService.removeSubtask(command.id);
  }
}
