import { ContainerOutlined } from "@ant-design/icons";
import { List } from "antd";

type SideBarOfMyTaskProps = {
  listTask?: string[]
  handleClickItem?: (index: number) => void
}

function SideBarOfMyTask({ listTask = [], handleClickItem }: SideBarOfMyTaskProps) {
  return (
    <div>
      <List
        dataSource={listTask}
        renderItem={(item, index) => <List.Item className="cursor-pointer font-bold" onClick={() => handleClickItem?.(index)}>
          <ContainerOutlined className="relative bottom-[3px] mr-2" /> {item}
        </List.Item>}
      />
    </div>
  );
}

export default SideBarOfMyTask;