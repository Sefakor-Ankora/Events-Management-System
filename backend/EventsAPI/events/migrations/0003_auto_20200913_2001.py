# Generated by Django 3.0.3 on 2020-09-13 20:01

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20200913_1547'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='topic',
            field=ckeditor.fields.RichTextField(),
        ),
    ]