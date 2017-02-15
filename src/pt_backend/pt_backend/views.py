from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    """
    General page to serve links for web facing API.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")
