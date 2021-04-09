from rest_framework import serializers
from hotel.models import Book,Room
from django.contrib.auth import get_user_model


User = get_user_model()
        
class RegisterSerializer(serializers.ModelSerializer):
     
   

    class Meta:
        model = User
        fields = ('first_name','last_name', 'username', 'email', 'password')
        
        def save(self):
            reg=User(
              first_name=self.first_name,
              last_name=self.last_name,
              username=self.username,
              email=self.email,
              password=self.password
             )
            reg.save()
            return reg 

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('firstname','lastname','address','phone','book_from','book_till','persons','bed_type')
        def save(self):
            reg=Book(
                firstname=self.firstname,
                lastname=self.lastname,
                address=self.address,
                phone=self.phone,
                book_from=self.book_from,
                book_till=self.book_till,
                persons=self.persons,
                bed_type=self.bed_type
             )
            reg.save()
            return reg
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('room_no', 'bed_type','price')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password')