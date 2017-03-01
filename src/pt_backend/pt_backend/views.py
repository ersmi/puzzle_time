from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    """
    General page to serve links for web facing API.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")

def sessiondebug(request):
    """
    Form to create debug session
    """
    if request.method == "GET":
        return render(request, 'debug/session.html', dict())
    #if request.method == "POST":
    
    #render(request, 'debug/session.html', dict())
