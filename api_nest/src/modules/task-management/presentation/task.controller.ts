import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { JoiValidationPipe } from 'src/shared/middleware/pipes/joi-validation.pipe';
import { taskSchema } from '../domain/consts/task.const';
import { Task } from '@prisma/client';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../application/commands/task/create-task.command';
import { GetTaskQuery } from '../application/queries/task/get-task.query';
import { UpdateTaskCommand } from '../application/commands/task/update-task.command';
import { DeleteTaskCommand } from '../application/commands/task/delete-task.command';
import { GetAllTaskQuery } from '../application/queries/task/get-all-task.query';

@Controller('task')
export class TaskController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @UsePipes(new JoiValidationPipe(taskSchema))
  createTask(@Body() task: Task): Promise<Task> {
    return this.commandBus.execute(new CreateTaskCommand(task));
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.queryBus.execute(new GetTaskQuery(id));
  }

  @Get()
  getAllTask(): Promise<Array<Task>> {
    return this.queryBus.execute(new GetAllTaskQuery());
  }

  @Put()
  @UsePipes(new JoiValidationPipe(taskSchema))
  updateTask(@Body() task: Task): Promise<Task> {
    return this.commandBus.execute(new UpdateTaskCommand(task));
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) taskId: number): Promise<Task> {
    return this.commandBus.execute(new DeleteTaskCommand(taskId));
  }
}
