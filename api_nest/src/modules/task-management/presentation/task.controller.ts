import { Body, Controller, Get } from '@nestjs/common';
import { TaskService } from '../application/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  createTask(@Body() task) {
    return this.taskService.createTask(task);
  }
}
