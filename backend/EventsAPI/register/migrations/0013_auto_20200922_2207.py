# Generated by Django 3.0.6 on 2020-09-22 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0012_auto_20200922_2203'),
    ]

    operations = [
        migrations.RenameField(
            model_name='register',
            old_name='events',
            new_name='pro',
        ),
    ]
