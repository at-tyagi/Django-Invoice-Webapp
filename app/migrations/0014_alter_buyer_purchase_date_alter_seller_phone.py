# Generated by Django 4.2 on 2023-05-06 18:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_alter_buyer_purchase_date_alter_seller_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='purchase_date',
            field=models.DateField(default=datetime.datetime(2023, 5, 6, 18, 22, 57, 85178, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='seller',
            name='phone',
            field=models.IntegerField(default='9897026114'),
        ),
    ]
