from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from rest_framework.authtoken import views

urlpatterns = [
    # Estas Urls Solo deben ser Usadas como para el API
    url('api/', include('apps.api.urls')),  # , namespace='clients'

    # , namespace='clients'
    url(r'^api/client/', include('apps.customer.urls')),
    url(r'^api/cost/', include('apps.cost.urls')),  # , namespace='cost'
    # URL de Administracion
    url('admin/', admin.site.urls),
    # Urls de la aplicaion GUI
    url(r'^customer', include('apps.customer.urls')),
]

urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls')),
    # , namespace='drf'
]
