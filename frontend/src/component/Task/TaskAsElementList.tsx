import { CaretRightOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import { Collapse } from "antd"
import CollapsePanel from "antd/lib/collapse/CollapsePanel"

import { TaskModel } from "../../model/task"
import ElementList from "../ElementList"

const StylePanel = styled.div`
  margin: 10px 0;

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: block;
    padding: 0;
  }
`

type TaskAsElementListProps = {
  task: TaskModel
}

function TaskAsElementList({ task }: TaskAsElementListProps) {
  return <StylePanel>
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <CaretRightOutlined className="absolute left-3 top-4" rotate={isActive ? 90 : 0} style={{ color: 'white' }} />}
    >
      <CollapsePanel
        className="w-full"
        header={
          <ElementList name={task.name} start={task.start} end={task.end} />
        } key={1}>
        {task.description}
      </CollapsePanel>
    </Collapse>
  </StylePanel>
}

export default TaskAsElementList
