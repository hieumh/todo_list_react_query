import { Divider } from "antd";
import MyTaskContent from "./MyTaskContent";
import MyTaskSidebar from "./MyTaskSidebar";

function MyTaskController() {
  return (
    <div className="flex flex-row">
      <div className="w-[40%] h-screen overflow-auto">
        <MyTaskSidebar />
      </div>

      <Divider type="vertical" className="h-screen cursor-col-resize"/>

      <div className="w-[60%] h-screen overflow-auto">
        <MyTaskContent />
      </div>
    </div>
  );
}

export default MyTaskController;