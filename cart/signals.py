from django.db.models.signals import pre_save
from django.dispatch import receiver
from cart.models import ItemCart

@receiver(pre_save, sender=ItemCart)
def post_save_item_cart(instance, **kwargs):
    instance.total_price = instance.food.price * instance.quantity 
    return instance