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
        
        user_id = request.session.get('user',-1)
        #print request.session.keys()
        #print user_id
        #user_id = 1
        
        #user_id = request.GET.get('user')
        
        if user_id == -1:
            return HttpResponse("No user session exists", status=401)

        try:
            user = Users.objects.get(id=user_id)
        except Users.DoesNotExist:
            return HttpResponse("User does not exist",status=400)

        context = {
            'userid' : user.id,
            'puzzles' : [x.id for x in user.puzzles_set.all()],
            'profilepicture' : user.prof_pic,
            'friends' : [x.id for x in user.friends.all()]
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
        request.session['user'] = user.id
        request.session.set_expiry(3600)
        request.session.save()
        
        try:
            pt_user = Users.objects.get(id=user.id)
        except Users.DoesNotExist:
            return HttpResponse("Django database does not match users", status=400)

        #print user.id
        #print request.session.keys()
        #print request.session.session_key
        #return HttpResponse("", status=200)

        context = {
            'userid' : pt_user.id,
            'puzzles' : [x.id for x in pt_user.puzzles_set.all()],
            'profilepicture' : pt_user.prof_pic.photo.url,
            'friends' : [x.id for x in pt_user.friends.all()]
        }

        return render(request, "puzzle_time/login.html", context)

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
    #print request.session.keys()
    #print request.session.get('user')
    try:
        # TODO: Change 1 from default into error checking.
        user = Users.objects.get(id=request.session.get('user'))
    except Users.DoesNotExist:
        return HttpResponse("No user session exists.", status=401);

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
            return HttpResponse("Puzzle %d does not exist" % puzzle_id, status=400)
        
        # Update progress
        puzzle.progress = request.POST.get('progress')
        puzzle.save()
        
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
    try: 
        user = Users.objects.get(id=request.session.get('user',-1))
    except Users.DoesNotExist:
        return HttpResponse("No user session exists.", status=401)

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
        picture_name = request.POST.get('picturename', None)
        if not picture_name:
            return HttpResponse("Missing `picturename` arg", status=400)
        new_picture = Pictures.objects.create(name=picture_name, owner=user, tags=[])
        new_picture.savefile(picture)

        return HttpResponse("", status=200)
    
    elif requst.method == 'DELETE':

        # TODO: Ensure picture is users
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
    if request.method == 'GET':

        try:
            user = Users.objects.get(id=request.session.get('user'))
        except Users.DoesNotExist:
            return HttpResponse("No user session exists", status=401)

        # Return info about `userid`

        user_id = request.GET.get('userid')

        try:
            user = Users.objects.get(id=user_id)
        except Users.DoesNotExist:
            return HttpResponse("User %s does not exist" % user_id, status=400);

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
            user = authenticate(username=request.POST.get('username'),password=request.POST.get('password'))

            DjangoLogin(request, user)
            #request.session.create()
            request.session['user'] = user.id
            request.session.set_expiry(3600)
            request.session.save()
            # Initialize app account:
            pic = Pictures.objects.create(name='testpic')
            pt_user = Users.objects.create(id=user.id, display_name=user.username, prof_pic=pic)
            pt_user.save()

            # TODO: return same context as above.
            return HttpResponse('', status=200)


        return HttpResponse('User already exists')

    elif request.method == 'PUT':

        
        try:
            user = Users.objects.get(id=request.session.get('user'))
        except Users.DoesNotExist:
            return HttpResponse("No user session exists", status=401)

        putparams = request.body.split('&')
        put = {putparams[x].split('=')[0]:putparams[x].split('=')[1] for x in range(len(putparams))}

        #for key in request.POST.keys():
            #print key
        
        #if request.POST.get('profilepicture'):
            #user.prof_pic = 

        return HttpResponse("<html><b>Not Implemented</b></html>")
    
    return HttpResponse("<html><b>Not Implemented</b></html>")

def search(request):
    
    if request.method == 'GET':
        
        username = request.GET.get('username',None)
        picturename = request.GET.get('picturename',None)

        if username:
            users = Users.objects.filter(display_name=username)
            context = {
                "users" : [[x.id,x.prof_pic.photo.url] for x in users]
            }
            return render(request, "./puzzle_time/search.html", context)
        
        if picturename:
            pictures = Pictures.objects.filter(name=picturename)
            context = {
                "pictures" : [[x.id, x.photo.url] for x in pictures]
            }
            return render(request, "./puzzle_time/search.html", context)
        
        return HttpResponse("No search term provided", status=400)
