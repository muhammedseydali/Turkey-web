from django.contrib.humanize.templatetags.humanize import intcomma
from django.utils import timezone
from django.http import request
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.contrib import messages, auth
from django.views.decorators.cache import never_cache
from superadmin.models import Category, Variant
from superadmin.forms import CategoryForm
from datetime import date, timedelta

def superadmin_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        if (username == 'admin' and password == 'admin'):
            request.session['admin'] = 'admin'
            print("admin logged in")
            return redirect('superadmin')
    if request.session.has_key('admin'):
        return redirect('superadmin')
    else:
        return render(request, 'superadmin/login.html')


def superadmin_logout(request):
    if request.session.has_key('admin'):
        # del request.session['admin']
        auth.logout(request)
        return redirect('superadmin-login')


@never_cache
def superadmin_dashboard(request):
    if request.session.has_key('admin'):
        month = timezone.now().month
        
        #monthly booking count
        # %growth of customers in week
        today   = date.today()
        tommorrow=today+timedelta(1)
        yesterday=today-timedelta(1)
        today_7 = today - timedelta(days=7)
        #weekly
        print('fds')
        #monthly revenu
        
            
        today_1 = today - timedelta(days=1)
        today_2 = today - timedelta(days=2)
        today_3 = today - timedelta(days=3)
        today_4 = today - timedelta(days=4)
        today_5 = today - timedelta(days=5)
        today_6 = today - timedelta(days=6)
        today_7 = today - timedelta(days=7)
        print(today)
        print(tommorrow)
        print("---------------------------------------------")
        last_week_days=[

            today_6.strftime("%a %m/%d/%Y"),
            today_5.strftime("%a %m/%d/%Y"),
            today_4.strftime("%a %m/%d/%Y"),
            today_3.strftime("%a %m/%d/%Y"),
            today_2.strftime("%a %m/%d/%Y"),
            today_1.strftime("%a %m/%d/%Y"),
            today.strftime("%a %m/%d/%Y"),
                
            ]
        
        context={
            'last_week_days':last_week_days,
        }
        return render(request, 'superadmin/dashboard.html',context)
    else:
        return redirect('superadmin-login')
    


def admin_check(request):
    if request.session.has_key('admin'):
        pass
    else:
        redirect('superadmin-login')



def view_Categories(request):
    categories=Category.objects.all()
    for x in categories:
        print(x.category_name)
    context={'categories':categories}
    print(context)
    return render(request,'superadmin/view_categories.html',context)



def add_Category(request):
    admin_check(request)


    if request.method == 'POST':
        category_name=request.POST['category']
        gif=request.POST['gif']

        category=Category.objects.create(category_name=category_name,gif=gif)
        category.save()

        messages.success(request, 'Successfully added new brand')
        return redirect('view-categories')

    return render(request, 'superadmin/add_categories.html')



      
def edit_category(request,pk):
    admin_check(request)
    if request.method=="POST":
        category_name=request.POST["category_name"]
        gif=request.POST["gif"]
        try:

            category=Category.objects.get(id=pk)
            category.category_name=category_name
            category.gif=gif
            category.save()
            return redirect('view-categories')
        except:
            messages.info(request,"Not a valid data")
            return redirect('edit-category')


    else:
        category=Category.objects.get(id=pk)
        return render(request,'superadmin/edit_category.html',{'category':category})

 
def delete_category(request,pk):
    print('category deleted-------------->>>>>>>>>>')
    Category.objects.get(id=pk).delete()
    return redirect('view-categories')