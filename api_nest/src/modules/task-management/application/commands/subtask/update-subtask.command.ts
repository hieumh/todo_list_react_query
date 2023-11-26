import { Subtask } from '@prisma/client';

export class UpdateSubtaskCommand {
  constructor(public readonly subtask: Subtask) {}
}
