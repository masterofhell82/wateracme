# Generated by Django 2.2.3 on 2020-01-22 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Intake',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_id', models.IntegerField()),
                ('period', models.DateField()),
                ('measure', models.IntegerField()),
                ('intake', models.IntegerField()),
                ('amount', models.FloatField()),
                ('is_paid', models.BooleanField()),
                ('date_create', models.DateTimeField()),
                ('date_update', models.DateTimeField()),
            ],
        ),
    ]
