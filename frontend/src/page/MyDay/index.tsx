import moment from "moment";

import HeaderBar from "../../component/Layout/HeaderBar";
import MyDayController from "../../controller/MyDay/MyDayController";

function MyDay() {
  return (
    <div>
      <HeaderBar>
        <p className="text-2xl">My Day</p>
        {moment().format("dddd, MMM Do")}
      </HeaderBar>

      <MyDayController />
    </div>
  );
}

export default MyDay;