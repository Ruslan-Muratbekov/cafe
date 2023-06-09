# Generated by Django 4.2 on 2023-04-13 10:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cafe', '0005_remove_cafe_item_remove_item_cafe_menu_cafe_menu'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cafe',
            name='menu',
        ),
        migrations.AddField(
            model_name='item',
            name='cafe',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='cafe', to='cafe.cafe', verbose_name='кафе'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cafe',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Имя кафе'),
        ),
        migrations.DeleteModel(
            name='Menu',
        ),
    ]
