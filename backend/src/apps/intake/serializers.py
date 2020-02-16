from .models import Intake
from rest_framework import serializers


class IntakeSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Intake
        fields = ('id', 'client_id', 'period', 'measure', 'intake', 'amount', 'is_paid',
                  'date_create', 'date_update')
