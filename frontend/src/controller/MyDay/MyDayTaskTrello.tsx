import { useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import DroppableTrello from "../../component/Myday/DroppableTrello"
import { EStepStatus, StepModel } from "../../model/step"
import { RootState } from "../../store/store"

// this function only update in a list
function reorder({
  sourceList,
  sourceIndex,
  destList,
  destIndex,
  destNameList,
  isSameList = false
}: {
  sourceList: StepModel[]
  sourceIndex: number
  destList?: StepModel[]
  destIndex: number
  destNameList: `${EStepStatus}`
  isSameList?: boolean
}) {

  if (isSameList) {

    const result = [...sourceList]

    const [removed] = result.splice(sourceIndex, 1)
    result.splice(destIndex, 0, removed)

    return result
  }

  const sourceResult = [...sourceList]
  const destResult = [...destList!]

  const [removed] = sourceResult.splice(sourceIndex, 1)

  // status properties is read-only in some cases
  const removedClone = { ...removed }
  removedClone.status = destNameList
  destResult.splice(destIndex, 0, removedClone)

  return [
    sourceResult,
    destResult
  ]
}

function MyDayTaskTrello() {
  const currentStepAdded = useSelector((state: RootState) => state.myDay.newStep)
  const [listMng, setListMng] = useState({
    inProgress: currentStepAdded ? [currentStepAdded] : []
    ,
    doing: [
      {
        id: "4",
        subTaskId: "1",
        name: "do first things",
        start: new Date(),
        end: new Date(),
        status: 'doing',
        levelPriority: "Do"
      },
      {
        id: "5",
        subTaskId: "1",
        name: "do second things",
        start: new Date(),
        end: new Date(),
        status: 'doing',
        levelPriority: "Do"
      },
      {
        id: "6",
        subTaskId: "1",
        name: "do third thing",
        start: new Date(),
        end: new Date(),
        status: 'doing',
        levelPriority: "Do"
      }
    ],
    done: [
      {
        id: "7",
        subTaskId: "1",
        name: "do first things",
        start: new Date(),
        end: new Date(),
        status: 'done',
        levelPriority: "Do"
      },
      {
        id: "8",
        subTaskId: "1",
        name: "do second things",
        start: new Date(),
        end: new Date(),
        status: 'done',
        levelPriority: "Do"
      },
      {
        id: "9",
        subTaskId: "1",
        name: "do third thing",
        start: new Date(),
        end: new Date(),
        status: 'done',
        levelPriority: "Do"
      }
    ],
  })

  useEffect(() => {
    if (currentStepAdded) {
      setListMng(prev => {
        return {
          ...prev,
          inProgress: [...prev.inProgress, currentStepAdded]
        }
      })
    }
  }, [currentStepAdded?.id])

  function handleDragEnd(result: any) {
    if (!result.destination) {
      return
    }

    if (result.destination.droppableId === result.source.droppableId) {
      const listResult = reorder({
        sourceIndex: result.source.index,
        destIndex: result.destination.index,
        sourceList: listMng[result.source.droppableId],
        destNameList: result.destination.droppableId,
        isSameList: true,
      })

      setListMng(prev => {
        return {
          ...prev,
          [result.source.droppableId]: listResult
        }
      })

      return;
    }
    const [sourceList, destList] = reorder({
      sourceList: listMng[result.source.droppableId],
      sourceIndex: result.source.index,
      destIndex: result.destination.index,
      destNameList: result.destination.droppableId,
      destList: listMng[result.destination.droppableId],
    })

    setListMng(prev => {
      return {
        ...prev,
        [result.source.droppableId]: sourceList,
        [result.destination.droppableId]: destList,
      }
    })

  }

  return (
    <div className="mt-8">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-row gap-[100px] justify-center">
          <DroppableTrello id="inProgress" steps={listMng["inProgress"] as StepModel[]} />
          <DroppableTrello id="doing" steps={listMng["doing"] as StepModel[]} />
          <DroppableTrello id="done" steps={listMng["done"] as StepModel[]} />
        </div>
      </DragDropContext>
    </div>
  )
}

export default MyDayTaskTrello
