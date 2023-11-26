import { Task } from '@prisma/client';

export class UpdateTaskCommand {
  constructor(public readonly task: Task) {}
}
