import moment from "moment";

import HeaderBar from "../../component/Layout/HeaderBar";
import ListTaskController from "../../controller/ListTask/ListTaskController";

export default function ListTask() {
  return (
    <div className="flex flex-col gap-[30px]">
      <HeaderBar>
        <p className="text-2xl">Task management</p>
        {moment().format("dddd, MMM Do")}
      </HeaderBar>

      <ListTaskController />
    </div>
  )
}