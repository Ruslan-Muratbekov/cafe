# Generated by Django 4.2 on 2023-04-13 10:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cafe', '0003_cafe'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cafe',
            name='category',
        ),
        migrations.AddField(
            model_name='item',
            name='cafe',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='cafe', to='cafe.cafe', verbose_name='кафе'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cafe',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='item', to='cafe.item', verbose_name='меню'),
        ),
    ]
