import moment from "moment"

import HeaderBar from "../../component/Layout/HeaderBar"
import TaskController from "../../controller/Task/TaskController"

export default function NewTask() {
  return (
    <>
      <div className="flex flex-col gap-[30px]">
        <HeaderBar>
          <p className="text-2xl">Project</p>
          {moment().format("dddd, MMM Do")}
        </HeaderBar>

        <TaskController />
      </div>
    </>
  )
}