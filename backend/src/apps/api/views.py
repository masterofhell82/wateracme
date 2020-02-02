from rest_framework import generics, viewsets
from ..customer.models import Client
from ..intake.models import Intake
from ..cost.models import Cost
from ..billing.models import invoice
from .serializers import *

# View set del cliente


class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializers
    queryset = Client.objects.all()


# View Set de los consumos hecho por el cliente
class IntakeViewSet(viewsets.ModelViewSet):
    serializer_class = IntakeSerializers
    queryset = Intake.objects.all()

    def get_queryset(self):
        card_id = self.request.query_params.get('card_id', None)
        if card_id is not None:
            queryset = Intake.objects.filter(client_id=card_id)
        return queryset

# View Set del costo implementado para el cobro de agua


class CostViewSet(viewsets.ModelViewSet):
    serializer_class = CostSerializers
    queryset = Cost.objects.all()


# View Set para los pagos que realice el cliente
class InvoiceViewSet(viewsets.ModelViewSet):
    serializer_class = InvoiceSerializers
    queryset = invoice.objects.all()
