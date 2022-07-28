import moment from 'moment';

import HeaderBar from "../../component/Layout/HeaderBar";
import MyTaskController from "../../controller/MyTask/MyTaskController";

export default function MyTask() {
  return (
    <div>
      <HeaderBar>
        <p className="text-2xl">My Task</p>
        {moment().format("dddd, MMM Do")}
      </HeaderBar>

      <MyTaskController />
    </div>
  )
}
