# Generated by Django 4.2 on 2023-05-01 01:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_rename_date_buyer_purchase_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='purchase_date',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='seller',
            name='address',
            field=models.CharField(default='IFCO Chowk, New Delhi', max_length=150),
        ),
        migrations.AlterField(
            model_name='seller',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 1, 1, 10, 53, 415092, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='seller',
            name='name',
            field=models.CharField(default='ABC Shops', max_length=50),
        ),
        migrations.AlterField(
            model_name='seller',
            name='phone',
            field=models.IntegerField(default='+91 xxxxxxxxxx'),
        ),
    ]
