# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-11-01 15:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserClass',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userName', models.CharField(max_length=30)),
                ('passWord', models.CharField(max_length=30)),
                ('emailAddr', models.CharField(max_length=30)),
                ('productLine', models.CharField(max_length=30)),
            ],
        ),
    ]
