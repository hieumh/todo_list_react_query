from django.urls import path

from . import views

# namespace
app_name = 'todo'

urlpatterns = [
    path('tasks', views.tasks, name='task'),
    path('subtasks/<int:taskId>', views.subtasks, name='subtasks'),
    path('steps/<int:subtaskId>', views.steps, name='steps')
]