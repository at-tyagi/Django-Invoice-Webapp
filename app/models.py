from django.db import models
import datetime
from django.utils import timezone

# Create your models here.
class seller(models.Model):
    name = models.CharField(max_length=50,default="ABC Shops")
    address = models.CharField(max_length=150,default="IFCO Chowk, New Delhi")
    phone = models.IntegerField(default='9897026114')
    date =models.DateTimeField(default=timezone.now)
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.date = timezone.now()
        return super().save(*args, **kwargs)

class buyer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone = models.IntegerField()
    purchase_date = models.DateField(default=timezone.localtime(timezone.now()))

class producat(models.Model):
    img = models.ImageField(upload_to='media/')
    name = models.CharField(max_length=100)
    dis = models.TextField(max_length=500)
    price = models.CharField(max_length=100)
