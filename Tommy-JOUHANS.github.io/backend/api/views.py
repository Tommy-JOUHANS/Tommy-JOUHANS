import requests
from django.http import JsonResponse
from django.conf import settings

def qr_stats(request):
    headers = {
        "Cookie": settings.GETQR_COOKIE,
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(
        settings.GETQR_STATS_URL,
        headers=headers,
        timeout=10
    )

    data = response.json()

    return JsonResponse({
        "scans": data["totalClicks"],
        "uniqueScans": data["uniqueClicks"],
    })