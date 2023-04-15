from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import *
from django.contrib.auth import views as auth_views
from dotenv import load_dotenv
import os

load_dotenv()

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("home/", views.home, name="home"),
    path("upload_documents/", views.upload_documents, name="upload_documents"),
    path("upload_edit/", DocumentUpdateView.as_view(), name="edit_documents"),
    path("upload_edit2/", DocumentUpdateView2.as_view(), name="edit_documents2"),
    path("upload_edit3/", DocumentUpdateView3.as_view(), name="edit_documents3"),
    path(
        "accounts/login/",
        auth_views.LoginView.as_view(
            template_name="login.html", form_class=CustomLoginForm
        ),
        name="login",
    ),
    path("logout/", auth_views.LogoutView.as_view(next_page="login"), name="logout"),
    path("", views.custom_entry, name="custom_entry"),
    path("upload_documents2/", views.upload_documents2, name="upload_documents2"),
    path("upload_documents3/", views.upload_documents3, name="upload_documents3"),
    path("profile/", views.user_profile, name="user_profile"),
    path("my-taxes/", views.my_taxes, name="my_taxes"),
    path("travel_calendar/", views.travel_calendar, name="travel_calendar"),
    path("basedemo/", views.base_demo, name="base_demo"),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
