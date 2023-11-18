import { Subtask } from '@prisma/client';

export class SubTaskEntity implements Subtask {
  id: number;

  taskId: number;

  name: string;

  start: Date;

  end: Date;
}
