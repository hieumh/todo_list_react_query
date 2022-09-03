import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { useModal } from "../../hook/useModal";
import ListTaskSidebar from "./ListTaskSidebar";
import MyDayTaskTrello from "./MyDayTaskTrello";

function MyDayController() {
  const [modal, , , toggleModal] = useModal(false);

  function handleOnCreateTask() {

  }

  return (
    <div className="flex flex-row relative mt-[60px]">
      <div className="w-[60%]">
        <MyDayTaskTrello />
      </div>

      <Divider type="vertical" className="h-screen" />

      <div className="w-[40%]">
        <ListTaskSidebar />
      </div>

      <div className="absolute top-[-60px] right-0">
        <Button onClick={handleOnCreateTask} icon={<PlusOutlined className="relative bottom-0.5"/>}>Add Task</Button>
      </div>
    </div>
  );
}

export default MyDayController;