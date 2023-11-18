import { Task } from '@prisma/client';

export class TaskEntity implements Task {
  id: number;

  name: string;

  start: Date;

  end: Date;

  description: string;
}
