# Generated by Django 4.1 on 2022-09-01 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDo', '0004_alter_steptask_subtask_alter_subtask_task'),
    ]

    operations = [
        migrations.AlterField(
            model_name='steptask',
            name='end',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='steptask',
            name='start',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='subtask',
            name='end',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='subtask',
            name='start',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='task',
            name='end',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='task',
            name='start',
            field=models.CharField(max_length=100),
        ),
    ]