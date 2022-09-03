import { Typography } from "antd";
import SubtaskBox from "../../../component/Myday/SubtaskBox"
import { TaskAsTree } from "../../../model/task"

type TaskBoxProps = {
  task: TaskAsTree;
}

function TaskBox({ task }: TaskBoxProps) {

  return (
    <div className="border border-black/40 p-4 rounded-[4px] mb-4">
      <Typography.Title level={4}>{task.name}</Typography.Title>
      {task.children.map(subtask => (
        <SubtaskBox key={subtask.id} subtask={subtask} />
      ))}
    </div>
  )
}

export default TaskBox
