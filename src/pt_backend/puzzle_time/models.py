from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Users(models.Model):
    """
    Table for users' information.
    
    Should have fields:
        prof_pic - (1)url to user's uploaded profile picture.
        friends  - (1:*) list of users that user is friends with.
        pictures - (1:*) list of pictures user has uploaded.
        puzzles  - (1:*) list of puzzles the user has created.
    """
    
class Pictures(models.Model):
    """
    Table for pictures.
    
    Should have fields:
        link    - (1) url to picture file
        name    - (1) name specified by the user to represnt the picture
        tags    - (*) list of terms to be used to group the picture.
        puzzles - (1:*) list of puzzles that are using this picture.
    """

class Puzzles(models.Model):
    """
    Table for puzzles. Will be mostly blank since the relationships
    are defined within the Pictures and Users tables.
    
    Should have fields:
        progress - int list/binary string/boolean array that represents
        the users progress in the puzzle. e.g. 0010010 represents a puzzle
        with 2 pieces obtained, 5 not.
    """
