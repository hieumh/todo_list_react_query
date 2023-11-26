import { Injectable } from '@nestjs/common';
import { SubtaskService } from '../../services/sub-task.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateSubtaskCommand } from './create-subtask.command';
import { Subtask } from '@prisma/client';

@Injectable()
@CommandHandler(CreateSubtaskCommand)
export class CreateSubtaskHandler
  implements ICommandHandler<CreateSubtaskCommand>
{
  constructor(private readonly subtaskService: SubtaskService) {}

  execute(command: CreateSubtaskCommand): Promise<Subtask> {
    return this.subtaskService.createSubtask(command.subtask);
  }
}
