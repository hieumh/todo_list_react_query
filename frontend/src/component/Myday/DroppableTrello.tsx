import { Card, Typography } from 'antd';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import _ from "lodash"
import { StepModel } from '../../model/step';
import { memo } from 'react';

type DroppableTrelloProps = {
  steps: StepModel[];
  id: string;
}

function DroppableTrello({ steps, id }: DroppableTrelloProps) {
  return (
    <div className="w-[30%]">
      <Typography.Title level={4} className="text-center">{_.capitalize(id)}</Typography.Title>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Card className='flex flex-col gap-5'>
              {steps.map((step, index) => (
                <Draggable
                  key={"drag-" + id + '-' + step.id}
                  draggableId={"drag-" + id + "-" + step.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className='border border-black/20 p-1 rounded-[5px] h-[50px] mt-2'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      {step.name}
                    </div>)}
                </Draggable>
              ))}
            </Card>
            {provided.placeholder}
          </div>)}
      </Droppable>
    </div>
  );
}

export default memo(DroppableTrello);