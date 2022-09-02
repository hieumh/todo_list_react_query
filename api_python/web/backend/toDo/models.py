from django.db import models

# Create your models here.

class Task(models.Model):
    name = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    description = models.TextField()

class SubTask(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, null=False)
    name = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()

class StepTask(models.Model):
    subtask = models.ForeignKey(SubTask, on_delete=models.CASCADE, null=False)
    name = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    status = models.CharField(max_length=100)
    levelPriority = models.CharField(max_length=100)