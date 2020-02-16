from django.db import models

# Create your models here.


class Client(models.Model):
    names = models.CharField(max_length=255)
    last_names = models.CharField(max_length=255)
    card_id = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    region_id = models.IntegerField()
    provincia_id = models.IntegerField()
    comuna_id = models.IntegerField()
    phone = models.CharField(max_length=50)
    date_create = models.DateField()
    date_update = models.DateField()
