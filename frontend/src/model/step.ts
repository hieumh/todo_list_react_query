export enum ELevelPriority {
  Do = "Do",
  Schedule = "Shedule",
  Delegate = "Delegate",
  Delete = "Delete"
}

export enum EStepStatus {
  inProgress = "inProgress",
  Doing = "doing",
  Done = "done"
}

export type LevelPriority = `${ELevelPriority}`
export type StepStatus = `${EStepStatus}`

export type StepModel = {
  id: string
  subTaskId: string
  name: string
  start: Date
  end: Date
  status: StepStatus
  levelPriority: LevelPriority
}
