import { SubtaskAsTree } from "./subtask"

export type TaskModel = {
  id: string
  name: string
  start: Date
  end: Date
  description: string
}

export type TaskAsTree = TaskModel & {
  children: SubtaskAsTree[]
}
