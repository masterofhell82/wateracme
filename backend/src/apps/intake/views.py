from django.http import HttpResponse
from rest_framework import generics
from .models import Intake
from .serializers import IntakeSerializers
from django.shortcuts import render, get_list_or_404


class IntakeList(generics.ListCreateAPIView):
    queryset = Intake.objects.all()
    serializer_class = IntakeSerializers

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_list_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
