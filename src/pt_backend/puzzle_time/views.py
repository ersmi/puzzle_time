from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def home(request):
    """
    General page to serve links for web facing API.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")

def login(request):
    """
    Handle login credentials supplied in request. 
    
    POST - Return either failure on no match for login information or create a new session for the user.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")

def puzzle(request):
    """
    Handle requests involving the puzzles.
    
    POST - Create new puzzle given the information in the request.
        Return the new puzzle back to the client.
    GET - Return the puzzle specified by the passed in information
        from the client.
    PUT - Update the progress on the puzzle specified with the new
        progress passed in with the request.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")
