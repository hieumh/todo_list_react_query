# Generated by Django 4.1 on 2022-09-01 16:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('toDo', '0002_rename_subtask_steptask_subtaskid_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='steptask',
            old_name='subtaskId',
            new_name='subtask',
        ),
        migrations.RenameField(
            model_name='subtask',
            old_name='taskId',
            new_name='task',
        ),
    ]
