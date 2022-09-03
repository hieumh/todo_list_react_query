import { Spin } from "antd"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import SideBarOfMyTask from "../../component/MyTask/SideBarOfMyTask"

import { ALL_TASKS } from "../../constant/AppConstant"
import useRouter from "../../hook/useRouter"
import { taskService } from "../../service/taskService"

function MyTaskSidebar() {
  const [listTaskName, setListTaskName] = useState<string[]>([]);
  const {
    data: listTask,
    refetch,
    isLoading
  } = useQuery(ALL_TASKS, () => taskService.getAllTasks(), {
    enabled: false,
    select: (response) => {
      if (response?.items) return response.items
      return []
    }
  })
  const { setSearchParams } = useRouter();

  function mapIndexToCurrentTask(index) {
    const targetTask = listTask?.[index];
    if (targetTask)
      setSearchParams({ id: targetTask.id })
  }

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (!!listTask)
      setListTaskName([...listTask.map(task => task.name)])
  }, [!!listTask])

  return isLoading ? <Spin /> : (<div>
    <SideBarOfMyTask listTask={listTaskName} handleClickItem={mapIndexToCurrentTask} />
  </div>)
}

export default MyTaskSidebar
