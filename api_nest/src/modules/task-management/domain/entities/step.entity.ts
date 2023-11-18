import { ELevelPriority, EStepStatus, Step } from '@prisma/client';

export class StepEntity implements Step {
  id: number;

  subTaskId: number;

  name: string;

  start: Date;

  end: Date;

  status: EStepStatus;

  levelPriority: ELevelPriority;
}
