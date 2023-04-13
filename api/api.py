from rest_framework.viewsets import ReadOnlyModelViewSet, ViewSet
from django_filters.rest_framework import DjangoFilterBackend
from django.db import transaction
from rest_framework.pagination import PageNumberPagination
from rest_framework import filters
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.authtoken.views import ObtainAuthToken
# from rest_framework.authtoken.models import Token
# from rest_framework.views import APIView
# from rest_framework import viewsets, mixins


from cafe.models import Category, Item, Size, Cafe
from cart.models import Cart, ItemCart, City
from api.serializers import (
	CategorySerializer,
	ItemCartSerializer,
	ItemSerializer,
	SizeSerializer,
	CitySerializer,
	CartSerializer,
	CartViewSerializer,
	CafeViewSerializer,
)


class LargeResultsSetPagination(PageNumberPagination):
	page_size = 1000
	page_size_query_param = 'page_size'
	max_page_size = 10000


class StandardResultsSetPagination(PageNumberPagination):
	page_size = 12
	page_size_query_param = 'page_size'
	max_page_size = 100


class CategoryViewSet(ReadOnlyModelViewSet):
	queryset = Category.objects.filter(isActive=True)
	serializer_class = CategorySerializer
	# permission_classes = [IsAuthenticated]
	# authentication_classes = [TokenAuthentication]
	filter_backends = [DjangoFilterBackend]
	filterset_fields = ['name']


class ItemViewSet(ReadOnlyModelViewSet):
	pagination_class = StandardResultsSetPagination
	queryset = Item.objects.filter(isActive=True)
	serializer_class = ItemSerializer
	filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
	# filterset_fields - нужен для query params
	filterset_fields = ['category', 'cafe']
	ordering_fields = ['rating', ]
	search_fields = ['name']


class CityViewSet(ReadOnlyModelViewSet):
	pagination_class = LargeResultsSetPagination
	queryset = City.objects.filter(isAvailable=True)
	serializer_class = CitySerializer


class CartViewSet(ReadOnlyModelViewSet):
	pagination_class = StandardResultsSetPagination
	queryset = Cart.objects.all()
	permission_classes = (IsAuthenticated,)
	serializer_class = CartViewSerializer

	def get_queryset(self):
		request = self.request
		return super().get_queryset().filter(phone_number=request.user.phone_number)


class CreateCartGenericView(GenericAPIView):
	serializer_class = CartSerializer
	permission_classes = (AllowAny,)

	@transaction.atomic
	def post(self, request, *args, **kwargs):
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		instance = serializer.save()
		item_carts = request.data['item_carts']
		for item_cart in item_carts:
			item_serializer = ItemCartSerializer(data=item_cart)
			item_serializer.is_valid(raise_exception=True)
			item_serializer.save(cart=instance)
		return Response(CartViewSerializer(instance, many=False).data)


# ------------------------------------------------------------------------

class CafeViewSet(ReadOnlyModelViewSet):
	queryset = Cafe.objects.all()
	serializer_class = CafeViewSerializer
	permission_classes = (IsAdminUser,)
