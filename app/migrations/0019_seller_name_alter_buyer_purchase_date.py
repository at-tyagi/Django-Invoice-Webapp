# Generated by Django 4.2 on 2023-05-06 19:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_alter_buyer_purchase_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='seller',
            name='name',
            field=models.CharField(default='ABC Shops', max_length=50),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='purchase_date',
            field=models.DateField(default=datetime.datetime(2023, 5, 6, 19, 46, 58, 813976, tzinfo=datetime.timezone.utc)),
        ),
    ]
