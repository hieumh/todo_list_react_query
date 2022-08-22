import { todoAxios } from "../config/axiosService"
import { Paginate } from "../model/pagination"
import { TaskModel } from "../model/task"

export const taskService = {
  getAllTasks: (params?: { status: string }) =>
    todoAxios
      .get<Paginate<TaskModel>>("api/tasks", { params })
      .then(res => res.data)
      .catch(error => {
        throw error
      }),

  createNewTask: (data: TaskModel) =>
    todoAxios
      .post<TaskModel>("api/tasks", data)
      .then(res => res.data)
      .catch(error => {
        throw error
      })
}
