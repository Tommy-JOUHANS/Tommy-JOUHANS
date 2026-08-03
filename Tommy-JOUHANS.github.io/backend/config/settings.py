import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ["SECRET_KEY"]

DEBUG = os.getenv("DEBUG", "False").lower() == "true"

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    "tommy-jouhans-production.up.railway.app",
    ".up.railway.app",
]

INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.staticfiles",
    "corsheaders",
    "api",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",

    # CORS doit être placé avant CommonMiddleware
    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "config.urls"
WSGI_APPLICATION = "config.wsgi.application"

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

CORS_ALLOWED_ORIGINS = [
    "https://www.tommy-jouhans.fr",
    "https://tommy-jouhans.fr",
]

GETQR_STATS_URL = os.getenv("GETQR_STATS_URL")
GETQR_COOKIE = os.getenv("GETQR_COOKIE")