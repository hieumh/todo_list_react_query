import { Module } from '@nestjs/common';
import { TaskService } from '../application/services/task.service';
import { TaskRepository } from './prisma/task.repository';
import { TaskController } from '../presentation/task.controller';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { SubtaskService } from '../application/services/sub-task.service';
import { SubtaskRepository } from './prisma/subtask.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTaskHandler } from '../application/commands/task/create-task.handler';
import { DeleteTaskHandler } from '../application/commands/task/delete-task.handler';
import { UpdateTaskHandler } from '../application/commands/task/update-task.handler';
import { CreateSubtaskHandler } from '../application/commands/subtask/create-subtask.handler';
import { UpdateSubtaskHandler } from '../application/commands/subtask/update-subtask.handler';
import { DeleteSubtaskHandler } from '../application/commands/subtask/delete-subtask.handler';
import { GetSubtaskHandler } from '../application/queries/subtask/get-subtask.handler';
import { GetTaskHandler } from '../application/queries/task/get-task.handler';
import { GetAllTaskHandler } from '../application/queries/task/get-all-task.handler';

const commandHandler = [
  CreateTaskHandler,
  DeleteTaskHandler,
  UpdateTaskHandler,
  CreateSubtaskHandler,
  UpdateSubtaskHandler,
  DeleteSubtaskHandler,
];
const queryHandler = [GetSubtaskHandler, GetTaskHandler, GetAllTaskHandler];

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [TaskController],
  providers: [
    TaskService,
    TaskRepository,
    SubtaskService,
    SubtaskRepository,
    ...commandHandler,
    ...queryHandler,
  ],
})
export class TaskModule {}
