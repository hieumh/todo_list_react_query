import { SubtaskModel } from "../../model/subtask"
import ElementList from "../ElementList"

type ContentOfMyTaskProps = {
  listSubtask: SubtaskModel[]
}

function ContentOfMyTask({ listSubtask }: ContentOfMyTaskProps) {
  return (
    <div className="flex flex-col gap-3">
      {listSubtask?.map(subtask => (
        <ElementList
          name={subtask.name}
          start={subtask.start}
          end={subtask.end}
          key={subtask.id}
        />
      ))}
    </div>
  )
}

export default ContentOfMyTask
