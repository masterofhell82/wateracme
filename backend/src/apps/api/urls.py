from rest_framework.routers import DefaultRouter
from .views import * # ClientViewSet, IntakeViewSet, CostViewSet, InvoiceViewSet

# Se mantiene un registro unico para la urls o Paths.
router = DefaultRouter()
router.register(r'clients', ClientViewSet, basename='clients')
router.register(r'intake', IntakeViewSet, basename='intake')
router.register(r'cost', CostViewSet, basename='cost')
router.register(r'invoice', InvoiceViewSet, basename='invoice')

urlpatterns = router.urls
