# Generated by Django 4.0.6 on 2022-09-26 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='дата добавление')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='дата изменения')),
                ('phone_number', models.CharField(max_length=10, unique=True, verbose_name='номер телефона')),
                ('first_name', models.CharField(max_length=150, verbose_name='имя')),
                ('last_name', models.CharField(max_length=150, verbose_name='фамилия')),
                ('email', models.EmailField(blank=True, max_length=254, null=True, unique=True, verbose_name='элетронная почта')),
                ('is_staff', models.BooleanField(default=True, verbose_name='статус персонала')),
                ('is_active', models.BooleanField(default=False, verbose_name='подтверждение по whatsapp')),
                ('is_superuser', models.BooleanField(default=False, verbose_name='cтатус администратора')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'пользователь',
                'verbose_name_plural': 'пользователи',
                'ordering': ('-created_at', '-updated_at'),
            },
        ),
    ]
