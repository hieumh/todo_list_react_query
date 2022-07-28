import CurrentTasks from "../ListTask/CurrentTasks";
import CreateNewTask from "./CreateNewTask";

function TaskController() {
  return (
    <div>
      <div>
        <CurrentTasks />
      </div>
      <CreateNewTask />
    </div>
  );
}

export default TaskController;