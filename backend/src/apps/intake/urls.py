from django.conf.urls import url, include
from apps.intake.views import *

urlpatterns = [
    url(r'^intake', IntakeList.as_view(),  name='intakes'),
]
