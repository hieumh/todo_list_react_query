import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { memo } from "react";
import { SubtaskAsTree } from "../../model/subtask";
import StepBox from "./StepBox";

type SubtaskBoxProps = {
  subtask: SubtaskAsTree;
  addToTrello?: boolean;
  onAddToTrello?: () => void
}

function SubtaskBox({
  subtask,
  addToTrello = false,
  onAddToTrello
}: SubtaskBoxProps) {

  function handleOnSend() {
    // do some stuff to push data to trello
    onAddToTrello?.();
  }

  return (
    <div className="ml-5 rounded-[4px] mt-2 relative">
      <span className="font-bold">{subtask.name}</span>

      {addToTrello && <Button onClick={handleOnSend} type="text" className="absolute bottom-1 right-1"><SendOutlined /></Button>}

      {subtask.children.map(step => <StepBox key={step.id} step={step} />)}
    </div>
  );
}

export default memo(SubtaskBox);