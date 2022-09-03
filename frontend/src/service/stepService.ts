import { todoAxios } from "../config/axiosService"
import { StepModel } from "../model/step"

export const stepService = {
  getAllSteps: () =>
    todoAxios
      .get("/api/steps")
      .then(res => res.data)
      .catch(err => {
        throw err
      }),

  createStep: (data: StepModel) =>
    todoAxios
      .post("/api/step", data)
      .then(res => res.data)
      .catch(err => {
        throw err
      })
}
