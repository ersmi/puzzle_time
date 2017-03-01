from __future__ import unicode_literals

from django.core.files import File
from django.db import models

from StringIO import StringIO
import json

# Create your models here.
class Pictures(models.Model):
    """
    Table for pictures.
    
    Should have fields:
        link    - (1) url to picture file
        name    - (1) name specified by the user to represnt the picture
        owner   - (*:1) user that owns the picture
        tags    - (*) list of terms to be used to group the picture.

    """

#    def defname(self):
#        return "%d_%danon" % (self.id,self.owner.id)

    photo = models.ImageField(upload_to='pics', default='./pics/defpic.png')
    name = models.CharField(max_length=200)
    owner = models.ForeignKey('Users',blank=True,null=True)
    tags = models.CharField(max_length=200, default="[]")

#    def __init__(self):
#        super(Pictures,self).__init__()
#        self.fields['name'].default = self.defname()

    def settags(self,x):
        self.tags = json.dumps(x)

    def gettags(self):
        return json.loads(self.tags)

    def __unicode__(self):
        return "%d-%d %s" % (self.id, self.owner.id, self.name)

    def savefile(self, binstr):
        flo = StringIO(binstr)
        self.photo.save('%s%s.png' % (self.id, self.owner.display_name), File(flo))
        self.save()


class Users(models.Model):
    """
    Table for users' information.
    
    Should have fields:
        prof_pic - (1)url to user's uploaded profile picture.
        friends  - (*:*) list of users that user is friends with.
        link - (1) url to picture file
    """
    display_name = models.CharField(max_length=200)
    prof_pic = models.OneToOneField('Pictures',on_delete=models.CASCADE,blank=True)
    friends = models.ManyToManyField("self", default=[0])

    def __unicode__(self):
        return "%d - %s" % (self.id, self.display_name)
    

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
    progress = models.CharField(max_length=200, default='0')
    picture = models.ForeignKey('Pictures',on_delete=models.CASCADE)
    owner = models.ForeignKey('Users')

    def __unicode__(self):
        return "%d-%d %s" % (self.id, self.owner.id, self.picture.name)
