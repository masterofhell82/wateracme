from django.db import models

# Create your models here.


class Intake(models.Model):
    client_id = models.IntegerField()
    period = models.DateField()
    measure = models.IntegerField()
    intake = models.IntegerField()
    amount = models.FloatField()
    is_paid = models.BooleanField()
    date_create = models.DateTimeField()
    date_update = models.DateTimeField()

    objects = models.Manager()
