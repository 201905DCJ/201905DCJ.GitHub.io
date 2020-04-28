from django.shortcuts import render

# Create your views here.
from . import models

def index(request):
    mydb1=models.Mydb1.objects.all()
    return render(request,"index.html",{"mydb1":mydb1})

def index_action(request):
    pname=request.POST.get('pname')
    pphone=request.POST.get('pphone')
    pselect=request.POST.get('pselect')
    models.Mydb.objects.create(user_name=pname,user_phone=pphone,user_select=pselect)
    return render(request,'hello.html')

def carname(request):
    mydb=models.Mydb.objects.all()
    return render(request,"carname.html",{"mydb":mydb})

def carname_tj(request):
    name=request.POST.get('name')
    models.Mydb1.objects.create(select=name)
    return render(request,"carname.html")

def infos(request,user):
    user_info=models.Mydb.objects.get(pk=user)
    return render(request, "info_page.html",{"user":user_info})