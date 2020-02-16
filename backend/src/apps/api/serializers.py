from rest_framework import serializers
from ..customer.models import Client
from ..intake.models import Intake
from ..cost.models import Cost
from ..billing.models import invoice

# Se colocan todas las Serializaciones de todas las clases.


class ClientSerializers(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'names', 'last_names', 'card_id', 'address', 'region_id', 'provincia_id', 'comuna_id',
                  'phone', 'date_create', 'date_update')


class IntakeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Intake
        fields = ('id', 'client_id', 'period', 'measure', 'intake', 'amount', 'is_paid',
                  'date_create', 'date_update')


class CostSerializers(serializers.ModelSerializer):

    class Meta:
        model = Cost
        fields = ('id', 'description', 'tariff',
                  'date_create', 'date_stop', 'is_activate')


class InvoiceSerializers(serializers.ModelSerializer):
    class Meta:
        model = invoice
        fields = ('id', 'intake_id', 'amount_paid', 'amount_debt', 'date_paid')
