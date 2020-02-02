from .models import Client
from rest_framework import serializers


class ClientSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'names', 'last_names', 'card_id', 'address', 'region_id', 'provincia_id', 'comuna_id',
                  'phone', 'date_create', 'date_update')
