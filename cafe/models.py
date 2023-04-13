from django.db import models


class Cafe(models.Model):
	name = models.CharField(verbose_name="Имя кафе", max_length=255)
	whatsapp = models.CharField(verbose_name="whatsapp", max_length=255, null=True, blank=True)
	instagram = models.CharField(verbose_name="instagram", max_length=255, null=True, blank=True)
	address = models.CharField(verbose_name='адрес', max_length=545)
	logo = models.FileField(upload_to='logo/', verbose_name='иконка кафе', blank=True, null=True)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = 'Кафе'
		verbose_name_plural = 'кафе'


class Category(models.Model):
	name = models.CharField(max_length=100, verbose_name='Название')
	icon = models.FileField(upload_to='categories/', blank=True, verbose_name='Иконка')
	isActive = models.BooleanField(default=True, verbose_name='Активность')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = 'Категория'
		verbose_name_plural = 'Категории'
		ordering = ['-isActive']


class Item(models.Model):
	cafe = models.ForeignKey('Cafe', on_delete=models.CASCADE, related_name='cafe', verbose_name='кафе')
	category = models.ForeignKey(
		Category, on_delete=models.CASCADE, related_name='items', verbose_name='Категория')
	name = models.CharField(max_length=100, verbose_name='Название')
	description = models.TextField(blank=True, verbose_name='Описание')
	isActive = models.BooleanField(default=True, verbose_name='Активность')
	isStock = models.BooleanField(default=True, verbose_name='В наличии')
	isFeatured = models.BooleanField(
		default=False, verbose_name='Рекомендуемый')
	image = models.ImageField(
		upload_to='items/', blank=True, verbose_name='Изображение')
	rating = models.IntegerField(default=0, verbose_name='Рейтинг')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = 'Продукт'
		verbose_name_plural = 'Продукты'
		ordering = ['-isActive']


class Size(models.Model):
	item = models.ForeignKey(
		Item, on_delete=models.CASCADE, related_name='sizes', verbose_name='Продукт')
	name = models.CharField(max_length=100, verbose_name='Название')
	price = models.IntegerField(default=0, verbose_name='Цена')
	isActive = models.BooleanField(default=True, verbose_name='Активность')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = 'Размер'
		verbose_name_plural = 'Размеры'
		ordering = ['-isActive']
