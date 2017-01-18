from django.http import HttpResponse
from django.shortcuts import render

from django.contrib.auth import authenticate, login


from .models import Users, Pictures, Puzzles

def login(request):
    """
    Handle login credentials supplied in request. 
    
    GET - Return the html/js page for creating a session through web browsers.
    POST - Return either failure on no match for login information or create a
        new session for the user.
    """
    if request.method == 'GET':
        pass
        #render(request, "puzzle_time/login.html")

    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)

        if user is None:
            return HttpResponse("Failed to login: bad username or password", status=401)

        login(request, user)
        request.session['user'] = user.id
        request.session.set_expiry(3600)
        return HttpResponse("", status=200)

    else:
        return HttpResponse("%s is not supported." % request.method, status=400)

def puzzle(request):
    """
    Handle requests involving the puzzles.
    
    POST - Create new puzzle given the information in the request.
        Return the new puzzle back to the client.
    GET - Return the puzzle specified by the passed in information
        from the client.
    PUT - Update the progress on the puzzle specified with the new
        progress passed in with the request.
    DELETE - Remove the puzzle specified by the passed in id from client.
    """
    try:
        user = Users.objects.get_object(id=request.session['id'])
    except Users.DoesNotExistError:
        pass

    if request.method == 'GET':
        pass
    
    return HttpResponse("<html><b>Not Implemented</b></html>")

def picture(request):
    """
    Handle requests involving pictures.
    
    POST - Upload new picture to server using the file transfered within the 
        request.
    GET - Return the picture specified by the passed in id from client.
    DELETE - Remove the puzzle specified by the passed in id from client.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")

def user(request):
    """
    Handle requests involving user information.
    
    GET - Return information about user specified within the id passed in.
        ->  407 if the user doesn't have permission to view passed in id.
    DELETE - Remove user specified by passed in id value. 
        ->  Will need to handle removing user's assets in pictures/puzzles
    PUT - Update user information with that supplied in the request.
    """
    return HttpResponse("<html><b>Not Implemented</b></html>")
