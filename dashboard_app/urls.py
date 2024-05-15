# dashboard_app/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
     path('dashboard',views.dashboard,name='dashboard'),
    path('area_chart',views.area_chart,name='area_chart'),
    path('datatables',views.datatables,name='datatables'),
]   
