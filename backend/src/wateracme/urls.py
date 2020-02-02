from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from rest_framework.authtoken import views

urlpatterns = [
    # Estas Urls Solo deben ser Usadas como para el API
    path('api/', include('apps.api.urls')),  # , namespace='clients'

    # , namespace='clients'
    path(r'^api/client/', include('apps.customer.urls')),
    path(r'^api/cost/', include('apps.cost.urls')),  # , namespace='cost'
    # URL de Administracion
    path('admin/', admin.site.urls),
    # Urls de la aplicaion GUI
    path(r'^customer', include('apps.customer.urls')),
]

urlpatterns += [
    path(r'^api-auth/', include('rest_framework.urls')),
    # , namespace='drf'
]
