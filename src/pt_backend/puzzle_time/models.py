from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Users(models.Model):
    """
    Table for users' information.
    
    Should have fields:
        prof_pic - (1)url to user's uploaded profile picture.
        friends  - (*:*) list of users that user is friends with.
    """
    prof_pic = models.ImageField(upload_to='pics')
    friends = models.ManyToManyField("self")
    
class Pictures(models.Model):
    """
    Table for pictures.
    
    Should have fields:
        link    - (1) url to picture file
        name    - (1) name specified by the user to represnt the picture
        owner   - (*:1) user that owns the picture
        tags    - (*) list of terms to be used to group the picture.

    """
    link = models.URLField(max_length=200)
    name = models.CharField(max_length=200)
    owner = models.ForeignKey('Users')
    tags = models.CharField(max_length=200)

    def settags(self,x):
        self.tags = json.dumps(x)

    def gettags(self):
        return json.loads(self.tags)

class Puzzles(models.Model):
    """
    Table for puzzles. Will be mostly blank since the relationships
    are defined within the Pictures and Users tables.
    
    Should have fields:
        progress - int list/binary string/boolean array that represents
        the users progress in the puzzle. e.g. 0010010 represents a puzzle
        with 2 pieces obtained, 5 not.
        picture  - (*:1) picture of the complete puzzle
        owner    - (*:1) owner of the puzzle
    """
    progress = models.CharField(max_length=200)
    picture = models.ForeignKey('Pictures',on_delete=models.CASCADE)
    owner = models.ForeignKey('Users')
