from django.db import models

# Create your models here.
class Book(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    address = models.TextField(max_length=255)
    phone = models.IntegerField()
    book_from = models.DateField()
    book_till = models.DateField()
    persons = models.IntegerField()
    bed_type = models.CharField(max_length=100)

class Room(models.Model):
    room_no = models.IntegerField()
    bed_type = models.CharField(max_length=100)
    price = models.IntegerField()
    
      