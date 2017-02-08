"""
Tentative url patterns based on use cases.

Urls in this file will be accesible at http://<domain>/a/<urlpattern>
"""
from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^login', views.login),
    url(r'^puzzle', views.puzzle),
    url(r'^picture', views.picture),
    url(r'^user', views.user),
]
