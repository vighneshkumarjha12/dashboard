

# Create your views here.
# dashboard_app/views.py

from django.shortcuts import render
from django.http import JsonResponse
from pymongo import MongoClient

def index(request):
    return render(request, 'index.html')

def area_chart(request):
    return render(request, 'area_chart.html')
def dashboard(request):
    return render(request, 'dashboard.html')

def datatables(request):
    return render(request, 'datatables.html')

def get_data(request):
    client = MongoClient('localhost', 27017)
    db = client.mydatabase
    collection = db.mydatacollection
    data = list(collection.find({}, {'_id': 0}))
    return JsonResponse(data, safe=False)
