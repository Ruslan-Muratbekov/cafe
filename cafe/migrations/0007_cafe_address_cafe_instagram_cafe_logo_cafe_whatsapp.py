# Generated by Django 4.2 on 2023-04-13 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cafe', '0006_remove_cafe_menu_item_cafe_alter_cafe_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='cafe',
            name='address',
            field=models.CharField(default=1, max_length=545, verbose_name='адрес'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='cafe',
            name='instagram',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='instagram'),
        ),
        migrations.AddField(
            model_name='cafe',
            name='logo',
            field=models.FileField(blank=True, null=True, upload_to='logo/', verbose_name='иконка кафе'),
        ),
        migrations.AddField(
            model_name='cafe',
            name='whatsapp',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='whatsapp'),
        ),
    ]
