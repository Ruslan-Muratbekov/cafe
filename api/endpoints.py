from rest_framework import routers
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view


from .api import *

router = routers.DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('items', ItemViewSet)
router.register('cities', CityViewSet)
router.register('cafe', CafeViewSet)
router.register('carts', CartViewSet)


urlpatterns = [
    path('swagger/', get_swagger_view(title='API')),
    path('carts/create/', CreateCartGenericView.as_view()),
    path('', include(router.urls)),
]