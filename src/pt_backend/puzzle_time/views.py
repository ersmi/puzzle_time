from django.http import HttpResponse
from django.shortcuts import render

from django.contrib.auth import authenticate
from django.contrib.auth import login as DjangoLogin
from django.contrib.auth.models import User as DjangoUser
from django.views.decorators.csrf import csrf_exempt

from .models import Users, Pictures, Puzzles

# TODO: if friend got a new piece since last online
# TODO: send userid, get friends most recent puzzles


@csrf_exempt
def login(request):
    """
    Handle login credentials supplied in request. 
    
    GET - Return information on the current user's session.
    POST - Return either failure on no match for login information or create a
        new session for the user.
    """
    if request.method == 'GET':
        
        # TODO: Session support
        
        user_id = request.session.get('user')
        #print request.session.keys()
        #print user_id
        #user_id = 1
        
        #user_id = request.GET.get('user')
        
        if user_id == -1:
            return HttpResponse("No user session exists", status=400)

        try:
            user = Users.objects.get(id=user_id)
        except Users.DoesNotExist:
            return HttpResponse("User does not exist",status=400)

        context = {
            'userid' : user.id,
            'puzzles' : [x.id for x in u.puzzles_set.all()],
            'profilepicture' : user.prof_pic,
            'friends' : [x.id for x in u.friends.all()]
        }
        
        return render(request, "puzzle_time/login.html", context)

    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)

        if user is None:
            return HttpResponse("Failed to login: bad username or password", status=401)

        DjangoLogin(request, user)
        #request.session.create()
        #request.session['user'] = user.id
        #request.session.set_expiry(3600)
        #request.session.save()
        #print request.session.keys()
        #print request.session.session_key
        #return HttpResponse("", status=200)
        return render(request, "puzzle_time/login.html", context={})

    else:
        return HttpResponse("%s is not supported." % request.method, status=400)

@csrf_exempt
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
        # TODO: Change 1 from default into error checking.
        user = Users.objects.get(id=request.session.get('user',2))
    except Users.DoesNotExist:
        pass

    if request.method == 'GET':
        puzzle_id = request.GET.get('puzzleid')
        try:
            puzzle = user.puzzles_set.get(id=puzzle_id)
        except Puzzles.DoesNotExist:
            return HttpResponse("Puzzle %s does not exist" % puzzle_id, status=400)
        
        #print dir(puzzle)
        
        context = {
            'puzzle' : puzzle,
            'picture' : puzzle.picture.photo.url,
            'userid' : puzzle.owner.id,
            'puzzleid' : puzzle.id
        }

        return render(request, 'puzzle_time/puzzle.html', context)

    elif request.method == 'POST':
        
        # Get picture for new puzzle
        picture_id = request.POST.get('pictureid')
        try:
            picture = Pictures.objects.get(id=picture_id)
        except Picture.DoesNotExist:
            return HttpResponse("Picture %d does not exist" % picture_id, status=400)

        new_puzzle = Puzzles.objects.create(picture=picture, owner=user)
        new_puzzle.save()
        
        return HttpResponse("", status=200)

    elif request.method == 'PUT':
        
        puzzle_id = request.POST.get('puzzleid')
        try:
            puzzle = Puzzles.objects.get(id=puzzle_id)
        except Puzzle.DoesNotExist:
            return HttpResponse("Picture %d does not exist" % picture_id, status=400)
        
        # Update progress
        puzzle.progress = request.POST.get('progress')
        
        # NOTE: May need to add ability to change picture later.
        
        return HttpResponse("", status=200)

    elif request.method == 'DELETE':
        
        puzzle_id = request.POST.get('puzzleid')
        try:
            puzzle = Puzzles.objects.get(id=puzzle_id)
        except Puzzles.DoesNotExist:
            return HttpResponse("Puzzle %d does not exist" % puzzle_id, status=400)
        
        puzzle.delete()
        
        return HttpResponse("", status=200)

    else:
        return HttpResponse("%s is not supported." % request.method, status=400)
    
    return HttpResponse("<html><b>Not Implemented</b></html>")

@csrf_exempt
def picture(request):
    """
    Handle requests involving pictures.
    
    POST - Upload new picture to server using the file transfered within the 
        request.
    GET - Return the picture specified by the passed in id from client.
    DELETE - Remove the puzzle specified by the passed in id from client.
    """
    
    if request.method == 'GET':
        
        picture_id = request.GET.get('pictureid')
        try:
            picture = Pictures.objects.get(id=picture_id)
        except Pictures.DoesNotExist:
            return HttpResponse("Picture %s does not exist" % picture_id, status=400)
        
        context = {
            'picturelink' : picture.photo.url,
            'picturename' : picture.name,
            'pictureownerid' : picture.owner.id,
            'picturetags' : picture.gettags(),
        }

        return render(request, "puzzle_time/picture.html", context)

    elif request.method == 'POST':

        files = request.FILES.get('file')
        picture = files.read()
        picture_name = files.name
        user = Users.objects.get(id=2)
        new_picture = Pictures.objects.create(name=picture_name, owner=user)
        new_picture.savefile(picture)

        return HttpResponse("", status=200)
    
    elif requst.method == 'DELETE':

        picture_id = request.POST.get('pictureid')
        try:
            picture = Pictures.objects.get(id=puzzle_id)
        except Pictures.DoesNotExist:
            return HttpResponse("Picture %s does not exist" % picture_id, status=400)

        picture.delete()

        return HttpResponse("", status=200)

    return HttpResponse("<html><b>Not Implemented</b></html>")

@csrf_exempt
def user(request):
    """
    Handle requests involving user information.
    
    GET - Return information about user specified within the id passed in.
        ->  407 if the user doesn't have permission to view passed in id.
    POST - Create new user account
    DELETE - Remove user specified by passed in id value. 
        ->  Will need to handle removing user's assets in pictures/puzzles
    PUT - Update user information with that supplied in the request.
    """
    try:
        # TODO: Change 1 from default into error checking.
        user = Users.objects.get(id=request.session.get('user'))
    except Users.DoesNotExist:
        user = None

    if request.method == 'GET':

        context = {
            'userid' : user.id,
            'friendslist' : [x.id for x in user.friends.all()],
            'userprofpic' : user.prof_pic,
            'displayname' : user.display_name
        }
        
        return render(request, "puzzle_time/login.html", context)

    elif request.method == 'POST':

        # Create new user.
        
        try:
            DjangoUser.objects.get(username=request.POST.get('username'))
        except DjangoUser.DoesNotExist:
            #Initialize user account:
            user = DjangoUser.objects.create_user(
                request.POST.get('username'),
                '',
                request.POST.get('password'))
            user.save()
            user = authenticate(request.POST.get('username'),request.POST.get('password'))

            login(request, user)
            #request.session.create()
            #request.session['user'] = user.id
            #request.session.set_expiry(3600)
            #request.session.save()
            # Initialize app account:
            pt_user = Users.create(id=user.id, display_name=user.username)
            pt_user.save()

            # TODO: return same context as above.
            return HttpResponse('', status=200)


        HttpResponse('User already exists')

    elif request.method == 'PUT':
        
        putparams = request.body.split('&')
        put = {putparams[x].split('=')[0]:putparams[x].split('=')[1] for x in range(len(putparams))}

        for key in request.POST.keys():
            print key
        
        #if request.POST.get('profilepicture'):
            #user.prof_pic = 

        HttpResponse("<html><b>Not Implemented</b></html>")
    
    return HttpResponse("<html><b>Not Implemented</b></html>")
