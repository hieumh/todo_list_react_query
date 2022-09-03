<<<<<<< HEAD
import { StepModel } from "./step"

export type SubtaskModel = {
  id: string
  taskId: string
  name: string
  start: Date
  end: Date
}

export type SubtaskAsTree = SubtaskModel & { children: StepModel[] }
=======
export type SubtaskModel = {
  id: string;
  taskId: string;
  name: string;
  start: Date;
  end: Date;
}
>>>>>>> dev
