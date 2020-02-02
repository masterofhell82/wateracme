from django.db import models


class Cost(models.Model):
    description = models.CharField(max_length=100, blank=True, default='')
    tariff = models.IntegerField()
    date_create = models.DateField()
    date_stop = models.DateField()
    is_activate = models.BooleanField()
