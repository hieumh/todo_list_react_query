import { Spin, Typography } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { ALL_TASKS_AS_TREE } from "../../constant/AppConstant";
import { taskService } from "../../service/taskService";
import TaskBox from "./SidebarBox/TaskBox";

function ListTaskSidebar() {
  const { data: tasks, refetch: fetchTasks, isLoading: isLoadingTask } = useQuery(ALL_TASKS_AS_TREE, () => taskService.getAllTasksAsTree(), {
    enabled: false,
  })

  useEffect(() => {
    fetchTasks();
  }, [])
  console.log(tasks);


  return isLoadingTask ? <Spin /> : (
    <div>
      <Typography.Title level={3} className="">Task list</Typography.Title>
      {
        tasks ? tasks.map(task => <TaskBox task={task} key={task.id} />) : null
        // listTask?.map(task => (<TaskAsElementList task={task} key={task.id} />))
      }
    </div>
  );
}

export default ListTaskSidebar;