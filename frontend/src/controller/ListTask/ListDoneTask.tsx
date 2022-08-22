import { Spin } from "antd"
import { useEffect } from "react"
import { useQuery } from "react-query"

import TaskAsElementList from "../../component/Task/TaskAsElementList"
import { TASKS_DONE } from "../../constant/AppConstant"
import { taskService } from "../../service/taskService"

function ListDoneTask() {
  const {
    data: listDoneTasks,
    refetch,
    isLoading
  } = useQuery(
    TASKS_DONE,
    () => taskService.getAllTasks({ status: "taskDone" }),
    {
      enabled: false,
      select: response => {
        if (response?.items) return response.items

        return []
      }
    }
  )

  useEffect(() => {
    refetch()
  }, [])

  return isLoading ? (
    <Spin />
  ) : (
    <div>
      {listDoneTasks?.map(task => (
        <TaskAsElementList task={task} />
      ))}
    </div>
  )
}

export default ListDoneTask
