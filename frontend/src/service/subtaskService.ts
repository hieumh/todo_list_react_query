import { todoAxios } from "../config/axiosService"

export const subtaskService = {
  getAllSubTasks: (taskId: string) =>
    todoAxios
      .get("/api/tasks/" + taskId + "/subtasks")
      .then(res => res.data)
      .catch(error => {
        throw error
      })
}
