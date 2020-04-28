from django.db import models
import django.utils.timezone as timezone
from datetime import date
# Create your models here.

class Mydb(models.Model):
    user_name=models.CharField(max_length=50)
    user_phone=models.CharField(max_length=100)
    user_select=models.CharField(max_length=100)
    user_time=models.DateTimeField(default=date.timetuple)

class Mydb1(models.Model):
    select=models.CharField(max_length=100)