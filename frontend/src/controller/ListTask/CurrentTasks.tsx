import { Spin } from "antd"
import { useEffect } from "react"
import { useQuery } from "react-query"

import TaskAsElementList from "../../component/Task/TaskAsElementList"
import { ALL_TASKS } from "../../constant/AppConstant"
import { taskService } from "../../service/taskService"

function CurrentTasks() {
  const {
    data: currentTasks,
    refetch,
    isLoading
  } = useQuery(ALL_TASKS, () => taskService.getAllTasks(), {
    enabled: false,
    select: response => {
      if (response?.items) return response.items
      return []
    }
  })

  useEffect(() => {
    refetch()
  }, [])

  return isLoading ? (
    <Spin />
  ) : (
    <div>
      {currentTasks?.map?.(task => (
        <TaskAsElementList key={task.id} task={task} />
      ))}
    </div>
  )
}

export default CurrentTasks
