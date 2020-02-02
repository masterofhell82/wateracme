from django.db import models

# Create your models here.


class invoice(models.Model):
    intake_id = models.IntegerField()
    amount_paid = models.FloatField()
    amount_debt = models.FloatField()
    date_paid = models.DateTimeField()
