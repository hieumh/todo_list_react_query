import { Divider, Empty, Spin } from "antd"
import { useEffect } from "react"
import { useQuery } from "react-query"
import AddElement from "../../component/AddElement"

import ContentOfMyTask from "../../component/MyTask/ContentOfMyTask"
import { ALL_SUBTASKS } from "../../constant/AppConstant"
import useRouter from "../../hook/useRouter"
import { subtaskService } from "../../service/subtaskService"

function MyTaskContent() {
  const { searchParams } = useRouter()
  const id = searchParams.get("id")
  const {
    data: listSubtask,
    refetch,
    isLoading
  } = useQuery(ALL_SUBTASKS, () => subtaskService.getAllSubTasks(id!), {
    enabled: false,
    select: response => {
      if (response?.items) return response.items

      return []
    }
  })

  useEffect(() => {
    if (id) {
      refetch()
    }
  }, [id])

  if (!id) {
    return <Empty description="Not click any task yet" />
  }

  return isLoading ? (
    <Spin />
  ) : (
    <div>
      <ContentOfMyTask listSubtask={listSubtask} />
      <AddElement />
    </div>
  )
}

export default MyTaskContent
