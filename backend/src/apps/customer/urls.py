from django.conf.urls import url, include
from apps.customer.views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^clients', ClientList.as_view(),  name='clients')
]
