from django.contrib import admin
from .models import Users, Pictures, Puzzles

# Register your models here.

admin.site.register(Users)
admin.site.register(Pictures)
admin.site.register(Puzzles)
