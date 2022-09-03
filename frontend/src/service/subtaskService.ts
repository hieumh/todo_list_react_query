import { todoAxios } from "../config/axiosService"

export const subtaskService = {
  getAllSubtasks: () =>
    todoAxios
      .get("/api/subtasks")
      .then(res => res.data)
      .catch(err => {
        throw err
      }),

  getAllSubtasksById: (taskId: string) =>
    todoAxios
      .get("/api/tasks/" + taskId + "/subtasks")
      .then(res => res.data)
      .catch(error => {
        throw error
      }),

  // createSubtask
}
