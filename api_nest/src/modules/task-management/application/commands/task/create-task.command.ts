import { Task } from '@prisma/client';

export class CreateTaskCommand {
  constructor(public readonly task: Task) {}
}
