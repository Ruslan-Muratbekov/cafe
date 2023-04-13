from rest_framework import serializers

from cafe.models import Category, Item, Size, Cafe
from cart.models import Cart, ItemCart, City


class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__'


class SizeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Size
		fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
	sizes = SizeSerializer(many=True, read_only=True)

	class Meta:
		model = Item
		fields = [
			'id',
			'name',
			'category',
			'description',
			'isStock',
			'isFeatured',
			'image',
			'rating',
			'sizes',
			'cafe',
		]


class CitySerializer(serializers.ModelSerializer):
	class Meta:
		model = City
		fields = ('id', 'title',)


class ItemCartSerializer(serializers.ModelSerializer):
	class Meta:
		model = ItemCart
		fields = ('food', 'quantity',)


class CartSerializer(serializers.ModelSerializer):
	item_carts = ItemCartSerializer(many=True)

	class Meta:
		model = Cart
		fields = (
			'phone_number',
			'city',
			'address',
			'message',
			'item_carts',
		)

	def create(self, validated_data):
		cart = Cart.objects.create(
			phone_number=validated_data['phone_number'],
			city=validated_data['city'],
			address=validated_data['address'],
			message=validated_data['message']
		)
		return cart


class ItemCartViewSerializer(serializers.ModelSerializer):
	food = SizeSerializer()

	class Meta:
		model = ItemCart
		fields = (
			'food',
			'quantity',
			'total_price'
		)


class CartViewSerializer(serializers.ModelSerializer):
	city = CitySerializer()
	carts = ItemCartViewSerializer(many=True)

	class Meta:
		model = Cart
		fields = (
			'id',
			'phone_number',
			'city',
			'address',
			'message',
			'status',
			'get_total_price',
			'carts',
		)


class CafeViewSerializer(serializers.ModelSerializer):
	class Meta:
		model = Cafe
		fields = '__all__'
