# dashboard_app/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="dashboard-index")
]
