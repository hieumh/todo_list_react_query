import { Spin } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";
import TaskAsElementList from "../../component/Task/TaskAsElementList";
import { ALL_TASKS } from "../../constant/AppConstant";
import { taskService } from "../../service/taskService";

function ListTaskSidebar() {
  const { data: listTask, refetch, isLoading } = useQuery(ALL_TASKS, () => taskService.getAllTasks(), {
    enabled: false,
    select: (response) => {
      if (response?.items) return response.items

      return [];
    }
  })

  useEffect(() => {
    refetch();
  }, [])

  return isLoading ? <Spin /> : (
    <div>
      {
        listTask?.map(task => (<TaskAsElementList task={task} key={task.id} />))
      }
    </div>
  );
}

export default ListTaskSidebar;