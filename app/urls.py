from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.index,name='index'),
    path('login',views.userLogin,name='login'),
    path('logout',views.userLogout,name="logout"),
    path('index',views.index,name='index'),
    path('buy/<int:pk>/',views.buy,name='buy'),
    path('pdf/',views.pdf,name='pdf'),
    path('add',views.add,name='add'),
    path('list',views.list,name='list'),
]