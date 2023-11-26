import { Subtask } from '@prisma/client';

export class CreateSubtaskCommand {
  constructor(public readonly subtask: Subtask) {}
}
