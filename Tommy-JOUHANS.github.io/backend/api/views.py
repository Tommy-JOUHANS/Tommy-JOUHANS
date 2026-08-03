import requests

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def qr_stats(request):
    url = settings.GETQR_STATS_URL
    cookie = settings.GETQR_COOKIE

    if not url:
        return JsonResponse(
            {
                "error": "La variable GETQR_STATS_URL est absente sur Railway."
            },
            status=500,
        )

    if not cookie:
        return JsonResponse(
            {
                "error": "La variable GETQR_COOKIE est absente sur Railway."
            },
            status=500,
        )

    headers = {
        "Cookie": cookie,
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 Chrome/126 Safari/537.36"
        ),
        "Accept": "application/json",
        "Referer": "https://getqr.com/",
    }

    try:
        response = requests.get(
            url,
            headers=headers,
            timeout=15,
        )

        if response.status_code == 401:
            return JsonResponse(
                {
                    "error": (
                        "GetQR refuse l'authentification. "
                        "Le cookie GETQR_COOKIE est absent, invalide ou expiré."
                    )
                },
                status=502,
            )

        if response.status_code != 200:
            return JsonResponse(
                {
                    "error": "Erreur renvoyée par GetQR.",
                    "getqr_status": response.status_code,
                    "getqr_response": response.text[:300],
                },
                status=502,
            )

        data = response.json()

        return JsonResponse(
            {
                "scans": data.get("totalClicks", 0),
                "uniqueScans": data.get("uniqueClicks", 0),
                "browser": data.get("topBrowser", {}),
                "country": data.get("topCountry", {}),
                "device": data.get("topDevice", {}),
                "os": data.get("topOS", {}),
            }
        )

    except requests.Timeout:
        return JsonResponse(
            {"error": "GetQR n'a pas répondu dans le délai prévu."},
            status=504,
        )

    except requests.RequestException as error:
        return JsonResponse(
            {
                "error": "Impossible de contacter GetQR.",
                "details": str(error),
            },
            status=502,
        )

    except ValueError:
        return JsonResponse(
            {"error": "GetQR n'a pas renvoyé un JSON valide."},
            status=502,
        )