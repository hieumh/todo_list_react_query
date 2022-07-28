import { MenuUnfoldOutlined } from "@ant-design/icons"
import { Divider } from "antd"
import { useModal } from "../../hook/useModal"
import CalendarListTasks from "./CalendarListTasks"
import CurrentTasks from "./CurrentTasks"
import ListDoneTask from "./ListDoneTask"

function ListTaskController() {
  const [state, , , toggleState] = useModal(false)

  return (
    <>
      <div>
        <p className="cursor-pointer font-bold text-xl" onClick={() => toggleState()}>
          <MenuUnfoldOutlined className="relative bottom-[3px] mr-2" />
          All tasks done
        </p>
        {state && <ListDoneTask />}
      </div>
      <div>
        <p className="font-bold text-xl">
          <MenuUnfoldOutlined className="relative bottom-[3px] mr-2" />
          Current task open
        </p>
        <CurrentTasks />
      </div>
      <Divider />
      <div>
        <p className="font-bold text-xl">
          <MenuUnfoldOutlined className="relative bottom-[3px] mr-2" />
          View on calendar (read-only)
        </p>
        <CalendarListTasks />
      </div>
    </>
  )
}

export default ListTaskController
