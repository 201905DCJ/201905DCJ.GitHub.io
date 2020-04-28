from django.contrib import admin

# Register your models here.

from  . import models

class MydbAdmin(admin.ModelAdmin):
    pass


admin.site.register(models.Mydb)
admin.site.register(models.Mydb1)