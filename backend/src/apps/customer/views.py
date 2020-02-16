from django.http import HttpResponse
from rest_framework import generics
from .models import Client
from .serializers import ClientSerializers
from django.shortcuts import render, get_list_or_404


def index(request):
    return render(request, 'custom/index.html')


class ClientList(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializers

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_list_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
