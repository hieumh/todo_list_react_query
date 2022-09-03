import moment from "moment"
import { memo } from "react"

type ElementListProps = {
  name: string
  start: Date | string
  end: Date | string
}

function ElementList({ name, start, end }: ElementListProps) {
  return (
    <div className="bg-black/75 py-3 pl-8 pr-4 rounded-[4px] text-white w-full">
      <div className="inline-block">{name}</div>

      <div className="float-right flex flex-row gap-2">
        <div>{moment(start).format("mm/yyyy")}</div>
        <div>-</div>
        <div>{moment(end).format("mm/yyyy")}</div>

        <div>Progress</div>
      </div>
    </div>
  )
}

export default memo(ElementList)
