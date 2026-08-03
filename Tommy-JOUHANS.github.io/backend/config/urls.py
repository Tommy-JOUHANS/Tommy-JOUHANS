from django.urls import path
from api.views import qr_stats

urlpatterns = [
    path('api/qr-stats/', qr_stats),
]