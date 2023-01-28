from django.utils import timezone
from typing import Tuple
from django.core.validators import slug_re
from django.db import models
from django.db.models.aggregates import Sum
from django.db.models.deletion import Collector
from django.db.models.fields import BooleanField, CharField, DateTimeField, SlugField
from django.http import request

from django.db.models import Avg
from django.apps import apps

# Create your models here.

class Category(models.Model):
    category_name=models.CharField(max_length=50,unique=True)
    slug=models.SlugField(max_length=100,unique=True)
    
    class Meta:
        verbose_name        ='Category'
        verbose_name_plural ='Categories'
    def __str__(self):
        return self.category_name


class Item(models.Model):
    item_name       =models.CharField(max_length=200 , unique=True)
    slug            =models.SlugField(max_length=200, unique=True)
    category        =models.ForeignKey(Category,on_delete=models.CASCADE)
    #no need to mention foreignkey of offer since offer tabel has OneToOne field to vehicle 
    created_date    =models.DateTimeField(auto_now_add=True)
    modified_date   =models.DateTimeField(auto_now_add=True)
    is_available    =models.BooleanField(default=True)

    def __str__(self):
        return self.vehicle_name
    class Meta:
        verbose_name        ='Item'
        verbose_name_plural ='Items'
        ordering = ('created_date',)
    


class Variant(models.Model):
    item            =models.ForeignKey('Item', on_delete=models.CASCADE)
    slug            =models.SlugField(max_length=200)
    image1          =models.ImageField(upload_to='photos/shirts',blank=True)
    image2          =models.ImageField(upload_to='photos/shirts',blank=True)
    image3          =models.ImageField(upload_to='photos/shirts',blank=True)
    price           =models.IntegerField()
    remaining       =models.IntegerField()
    is_available    =models.BooleanField(default=True)

    def __str__(self):
        return self.item

    class Meta:
        verbose_name        ='Variant'
        verbose_name_plural ='Variants'

    # def get_count(self,month=timezone.now().month):
        
    #     vendor=self.vehicle_id.vendor_id
    #     MyModel = apps.get_model('orders', 'OrderVehicle')
    #     orders=MyModel.objects.filter(vendor_id=vendor,created_at__month=month,status="Completed",variant=self)
    #     return orders.values('variant').annotate(quantity=Sum('quantity'))
        

