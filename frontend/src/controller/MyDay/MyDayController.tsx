import { Divider } from "antd";
import ListTaskSidebar from "./ListTaskSidebar";
import MyDayTaskTrello from "./MyDayTaskTrello";

function MyDayController() {
  return (
    <div className="flex flex-row">
      <div className="w-[80%]">
        <MyDayTaskTrello />
      </div>

      <Divider type="vertical" className="h-screen" />

      <div className="w-[20%]">
        <ListTaskSidebar />
      </div>
    </div>
  );
}

export default MyDayController;