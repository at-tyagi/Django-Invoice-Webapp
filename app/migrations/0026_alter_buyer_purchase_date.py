# Generated by Django 4.2 on 2023-05-07 18:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0025_alter_buyer_purchase_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='purchase_date',
            field=models.DateField(default=datetime.datetime(2023, 5, 7, 18, 21, 15, 841856, tzinfo=datetime.timezone.utc)),
        ),
    ]
