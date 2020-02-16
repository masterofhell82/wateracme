from .models import Cost
from rest_framework import serializers


class CostSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cost
        fields = ('id', 'description', 'tariff',
                  'date_create', 'date_stop', 'is_activate')
