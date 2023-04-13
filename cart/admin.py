from django.contrib import admin
from cart.models import Cart, ItemCart, City


class ItemCartTabularInline(admin.TabularInline):
    model = ItemCart
    extra = 0


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = [
        'id', 
        'phone_number', 
        'city', 
        'get_total_price', 
        'status',
    ]
    inlines = [ItemCartTabularInline,]
    fields = list(list_display).extend(['get_total_price', 'created_at', 'updated_at',])
    readonly_fields = ('get_total_price', 'created_at', 'updated_at',)
    list_display_links = ('id', 'phone_number',)
    search_fields = ('phone_number', 'id',)
    list_filter = ('city', 'status',)
    list_editable = ('status',)
     
    
@admin.register(City)
class CityCartAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'isAvailable')
    list_display_links = ('id', 'title',)
    search_fields = ('id', 'title',)
    list_filter = ('isAvailable',)

# Register your models here.
