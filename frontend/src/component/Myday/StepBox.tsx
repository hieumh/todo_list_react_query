import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { StepModel } from "../../model/step";
import { addStepToTrello } from "../../store/slices/myDay.slice";

type StepBoxProps = {
  step: StepModel;
  addToTrello?: boolean;
}

function StepBox({ step, addToTrello = true }: StepBoxProps) {
  const dispatch = useDispatch();

  function handleOnSend() {
    dispatch(addStepToTrello(step));
  }

  return (
    <div className="ml-6">
      <p className="mb-0 inline">{step.name}</p>

      {addToTrello ? <Button onClick={handleOnSend} type="text" className="relative left-4 bottom-1"><SendOutlined /></Button> : null}

    </div>
  );
}

export default memo(StepBox);