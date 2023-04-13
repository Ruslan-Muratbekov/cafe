from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Category, Item, Size, Cafe


class CategoryAdmin(admin.ModelAdmin):
	list_display = ['name', 'get_icon', 'isActive']
	list_filter = ['isActive']
	search_fields = ['name']
	readonly_fields = ['get_icon']

	@admin.display(description='Иконка')
	def get_icon(self, obj):
		print(obj.icon.url)
		return mark_safe(f'<img src="{obj.icon.url}" alt="{obj.name}" width="100px">')


class SizeInline(admin.TabularInline):
	model = Size
	extra = 0


class ItemAdmin(admin.ModelAdmin):
	inlines = [SizeInline]
	list_display = ['name', 'category', 'isActive', 'isFeatured', 'rating', 'get_image']
	list_filter = ['isActive', 'isFeatured']
	# readonly_fields = ['rating']
	search_fields = ['name']

	@admin.display(description='Изображение')
	def get_image(self, obj):
		if obj.image:
			return mark_safe(f'<img src="{obj.image.url}" alt="{obj.name}" width="200px">')
		return '-'


class CafeAdmin(admin.ModelAdmin):
	list_display = ['name']
	search_fields = ['name']


admin.site.register(Category, CategoryAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Cafe, CafeAdmin)
