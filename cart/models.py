from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class TimeAbstractModel(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='дата добавление')
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='дата изменения')

    class Meta:
        abstract = True


class Cart(TimeAbstractModel):

    STATUS_CHOICES = (
        ('canceled', 'Отменено'),
        ('pending', 'В ожидании'),
        ('accepted', 'Принято'),
        ('completed', 'Завершено'),
    )

    class Meta:
        verbose_name = 'корзина'
        verbose_name_plural = 'корзины'
        ordering = ('-created_at', '-updated_at')

    phone_number = PhoneNumberField(verbose_name='номер телефона')
    city = models.ForeignKey('City', verbose_name='город', on_delete=models.PROTECT,
                             related_name='carts')
    address = models.CharField(max_length=255, verbose_name='адрес')
    message = models.CharField(
        max_length=255, verbose_name='сообщение', blank=True, null=True)

    status = models.CharField(max_length=10, verbose_name='статус заказа',
                              choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f'{self.phone_number}'
    
    def get_total_price(self):
        return sum(item_cart.total_price for item_cart in self.carts.all())


class ItemCart(TimeAbstractModel):

    class Meta:
        verbose_name = 'заказанное блюдо'
        verbose_name_plural = 'заказанные блюда'
        ordering = ('-created_at', '-updated_at')

    cart = models.ForeignKey('Cart', verbose_name='заказ', on_delete=models.CASCADE, related_name='carts')
    food = models.ForeignKey(
        'cafe.Size', on_delete=models.PROTECT, verbose_name='блюдо')
    quantity = models.PositiveSmallIntegerField(default=1, verbose_name='количество')
    total_price = models.DecimalField(max_digits=10,
                                      decimal_places=1, verbose_name='общая цена', default=0.0)

    def __str__(self):
        return f'{self.food.name} - {self.quantity}'


class City(TimeAbstractModel):

    class Meta:
        verbose_name = 'город'
        verbose_name_plural = 'города'
        ordering = ('-created_at', '-updated_at')

    title = models.CharField(max_length=50, verbose_name='название города')
    isAvailable = models.BooleanField(default=True, verbose_name='доступно')

    def __str__(self):
        return f'{self.title}'

# Create your models here.
