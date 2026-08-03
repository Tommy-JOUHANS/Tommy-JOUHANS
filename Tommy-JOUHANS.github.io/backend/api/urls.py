from django.http import JsonResponse
from django.urls import path
from api.views import qr_stats

def home(request):
    return JsonResponse({
        "message": "API QR Stats active",
        "endpoint": "/api/qr-stats/"
    })

urlpatterns = [
    path("", home),
    path("api/qr-stats/", qr_stats),
]