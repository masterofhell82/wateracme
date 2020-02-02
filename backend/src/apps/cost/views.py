from django.http import HttpResponse
from rest_framework import generics
from .models import Cost
from .serializers import CostSerializers
from django.shortcuts import render, get_list_or_404


class CostList(generics.ListCreateAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostSerializers

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_list_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
