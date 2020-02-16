from django.conf.urls import url, include
from .views import CostList

urlpatterns = [
    url(r'^cost', CostList.as_view(),  name='costs'),
]
