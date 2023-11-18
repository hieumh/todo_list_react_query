import { Module } from '@nestjs/common';
import { TaskService } from '../application/task.service';
import { TaskRepository } from './prisma/task.repository';
import { TaskController } from '../presentation/task.controller';

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
