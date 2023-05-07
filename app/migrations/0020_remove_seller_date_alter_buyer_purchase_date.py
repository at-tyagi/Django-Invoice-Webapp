# Generated by Django 4.2 on 2023-05-06 19:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0019_seller_name_alter_buyer_purchase_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='seller',
            name='date',
        ),
        migrations.AlterField(
            model_name='buyer',
            name='purchase_date',
            field=models.DateField(default=datetime.datetime(2023, 5, 6, 19, 48, 5, 318823, tzinfo=datetime.timezone.utc)),
        ),
    ]
