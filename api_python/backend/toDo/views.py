from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views.decorators.http import require_http_methods
from json import loads
from toDo.utilities import changeKeyName
from toDo.models import Task, SubTask, StepTask

# Create your views here.

@require_http_methods(['GET', 'POST', 'PUT', 'DELETE'])
def tasks(request):
    if request.method == 'GET':
        response = {'items': [], 'meta': []}
        try:
            tasks = list(Task.objects.values())
            response['items'] = tasks
            return JsonResponse(response, safe=False)
        except Task.DoesNotExist:
            return JsonResponse(response, safe=False)

    elif request.method == 'POST':
        task = loads(request.body)
        Task.objects.create(
            name = task['name'], 
            start = task['start'],
            end = task['end'], 
            description = task['description']
        )
        return HttpResponse("Successfully create a task")

    elif request.method == 'DELETE':
        task_body = loads(request.body)
        try:
            task = Task.objects.get(pk=task_body['id'])
            task.delete()
            return HttpResponse("Successfully delete task")
        except Task.DoesNotExist:
            return HttpResponse("Task id not exsit")

    else:
        task_body = loads(request.body)
        try:
            task = Task.objects.get(pk=task_body['id'])
            task.name = task_body['name']
            task.start = task_body['start']
            task.end = task_body['end']
            task.description = task_body['description']
            task.save()
            return HttpResponse("Successfully edit task")
        except Task.DoesNotExist:
            return HttpResponse("Task id not exsit")   

@require_http_methods(['GET', 'POST', 'PUT', 'DELETE'])
def subtasks(request, taskId):
    if request.method == 'GET':
        response = {'items': [], 'meta': []}
        try:
            task = Task.objects.get(pk=taskId)
            subtasks = changeKeyName(
                list(SubTask.objects.filter(task=task).values()),
                'task_id',
                'taskId'
            )
            response['items'] = subtasks
            return JsonResponse(response, safe=False)
        except (Task.DoesNotExist, SubTask.DoesNotExist) as error:
            return JsonResponse(response, safe=False)

    elif request.method == 'POST':
        subtask = loads(request.body)
        try:
            task = Task.objects.get(pk=taskId)
            SubTask.objects.create(
                task = task,
                name = subtask['name'],
                start = subtask['start'],
                end = subtask['end'] 
            )
            return HttpResponse("Successfully create a subtask")
        except Task.DoesNotExist:
            return HttpResponse("Task id not exsit")

    elif request.method == 'DELETE':
        subtask = loads(request.body)
        try:
            task = Task.objects.get(pk=taskId)
            subtask = SubTask.objects.get(pk=subtask['id'])
            subtask.delete()
            return HttpResponse("Successfully delete subtask")
        except (Task.DoesNotExist, SubTask.DoesNotExist) as error:
            return HttpResponse("Task id not exsit")

    else:
        subtask = loads(request.body)
        try:
            task = Task.objects.get(pk=taskId)
            subtask_new = SubTask.objects.get(task=task, pk=subtask['id'])
            subtask_new.name = subtask['name']
            subtask_new.start = subtask['start']
            subtask_new.end = subtask['end'] 
            subtask_new.save()
            return HttpResponse("Successfully edit a subtask")
        except (Task.DoesNotExist, SubTask.DoesNotExist) as error:
            return HttpResponse("Task id or Subtask id not exsit")

@require_http_methods(['GET', 'POST', 'PUT', 'DELETE'])
def steps(request, subtaskId):
    if request.method == 'GET':
        response = {'items': [], 'meta': []}
        try:
            subtask = SubTask.objects.get(pk=subtaskId)
            steptasks = changeKeyName(
                list(StepTask.objects.filter(subtask=subtask).values()),
                'subtask_id',
                'subtaskId'
            )
            response['items'] = steptasks
            return JsonResponse(response, safe=False)
        except (SubTask.DoesNotExist, StepTask.DoesNotExist) as error:
            return JsonResponse(response, safe=False)

    elif request.method == 'POST':
        steptask = loads(request.body)
        try:
            subtask = SubTask.objects.get(pk=subtaskId)
            StepTask.objects.create(
                subtask = subtask,
                name = steptask['name'],
                start = steptask['start'],
                end = steptask['end'],
                status = steptask['status'],
                levelPriority = steptask['levelPriority']
            )
            return HttpResponse("Successfully create a steptask")
        except SubTask.DoesNotExist:
            return HttpResponse("Subtask id not exist")

    elif request.method == 'DELETE':
        steptask = loads(request.body)
        try:
            subtask = SubTask.objects.get(pk=subtaskId)
            steptask = StepTask.objects.get(pk=steptask['id'])
            steptask.delete()
            return HttpResponse("Successfully delete steptask")
        except (SubTask.DoesNotExist, StepTask.DoesNotExist) as error:
            return HttpResponse("Task id not exsit")
    else:
        steptask = loads(request.body)
        try:
            subtask = SubTask.objects.get(pk=subtaskId)
            steptask_new = StepTask.objects.get(subtask=subtask, pk=steptask['id'])
            steptask_new.name = steptask['name']
            steptask_new.start = steptask['start']
            steptask_new.end = steptask['end']
            steptask_new.status = steptask['status']
            steptask_new.levelPriority = steptask['levelPriority']
            steptask_new.save()
            return HttpResponse("Successfully edit a steptask")
        except (SubTask.DoesNotExist, StepTask.DoesNotExist) as error:
            return HttpResponse("Subtask id or step id not exist")       