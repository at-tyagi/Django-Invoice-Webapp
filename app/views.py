from django.shortcuts import render
from  . models import producat,seller,buyer
import datetime
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import user_passes_test
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

    
# Create your views here.
@login_required(login_url='/login')
def index(request):
    pro = producat.objects.all()
    slr = seller.objects.all()
    return render(request,'index.html',{'products':pro,'seller':slr})


def userLogin(request):
    data={}
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=authenticate(username=username,password=password)
        if user:
            login(request,user)
            request.session['username']=username
            return HttpResponseRedirect('/index')
        else:
            data['error']='Username or Password is incorrect'
            res=render(request,'user_login.html',data)
            return res
    else:
        return render(request,'user_login.html',data) 


def userLogout(request):
    logout(request)
    return HttpResponseRedirect('/login')

@login_required(login_url='/login')
def buy(request,pk):
    print(pk)
    pro = producat.objects.get(pk=pk)

    if request.method == "POST":
        name = request.POST['name']
        address = request.POST['address']
        phone = request.POST['phone']
        quantity = int(request.POST['quantity'])
        
        by = buyer(name=name,address=address,phone=phone)
        by.save()
        byno = int(buyer.objects.count())
        amount = float(pro.price)
        pn = pro.name
        dis = pro.dis
        price = amount
        pro_quantity =quantity
        pro_total = amount*quantity         
        slr = seller.objects.all()
        data = {'pname':pn,'pprice':price,'bname':name,'baddress':address,'bphone':phone,'pdis':dis,'pquantity':pro_quantity, 'ptotal':pro_total}
        return render(request, 'pdf.html', {'data': data, 'seller': slr,'byno':byno})

    return render(request, 'buy.html')

@login_required(login_url='/login')
def pdf(request):
    slr = seller.objects.all()
    return render(request,'pdf.html',{'seller':slr})

@login_required(login_url='/login')
def add(request):
    if request.method == "POST":
        img = request.POST['name']
        pk = request.POST['pk']
        name = request.POST['address']
        dis = request.POST['phone']
        price = int(request.POST['quantity'])
        pro = producat(img=img,pk=pk,name=name,dis=dis,price=price)
        pro.save()
        return HttpResponseRedirect('/index')
    
    return render(request,'add.html')

@login_required(login_url='/login')
def list(request):
    buyers = buyer.objects.all()
    return render(request,'list.html',{'buyers': buyers})