from django.conf.urls import url, include
from apps.cost.views import *

urlpatterns = [
    url(r'^cost', CostList.as_view(),  name='costs'),
]
