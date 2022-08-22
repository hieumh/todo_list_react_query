export type LevelPriority = "Do" | "Schedule" | "Delegate" | "Delete"

export type StepModel = {
  id: string
  subTaskId: string
  name: string
  start: Date
  end: Date
  isDone: boolean
  levelPriority: LevelPriority
}
