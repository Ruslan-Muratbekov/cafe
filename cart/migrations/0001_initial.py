# Generated by Django 4.0.6 on 2022-09-26 13:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cafe', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='дата добавление')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='дата изменения')),
                ('phone_number', models.CharField(max_length=15, verbose_name='номер телефона')),
                ('address', models.CharField(max_length=255, verbose_name='адрес')),
                ('message', models.CharField(blank=True, max_length=255, null=True, verbose_name='сообщение')),
                ('status', models.CharField(choices=[('canceled', 'Отменено'), ('pending', 'В ожидании'), ('accepted', 'Принято'), ('completed', 'Завершено')], default='pending', max_length=10, verbose_name='статус заказа')),
            ],
            options={
                'verbose_name': 'корзина',
                'verbose_name_plural': 'корзины',
                'ordering': ('-created_at', '-updated_at'),
            },
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='дата добавление')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='дата изменения')),
                ('title', models.CharField(max_length=50, verbose_name='название города')),
                ('isAvailable', models.BooleanField(default=True, verbose_name='доступно')),
            ],
            options={
                'verbose_name': 'город',
                'verbose_name_plural': 'города',
                'ordering': ('-created_at', '-updated_at'),
            },
        ),
        migrations.CreateModel(
            name='ItemCart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='дата добавление')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='дата изменения')),
                ('quantity', models.PositiveSmallIntegerField(default=1, verbose_name='количество')),
                ('total_price', models.DecimalField(decimal_places=1, default=0.0, max_digits=10, verbose_name='общая цена')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='carts', to='cart.cart', verbose_name='заказ')),
                ('food', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cafe.size', verbose_name='блюдо')),
            ],
            options={
                'verbose_name': 'заказанное блюдо',
                'verbose_name_plural': 'заказанные блюда',
                'ordering': ('-created_at', '-updated_at'),
            },
        ),
        migrations.AddField(
            model_name='cart',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='carts', to='cart.city', verbose_name='город'),
        ),
    ]
