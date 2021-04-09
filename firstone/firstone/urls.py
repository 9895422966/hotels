from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from hotel.models import Book,Room
from rest_framework import routers, serializers, viewsets
from hotel.serializers import BookSerializer,RoomSerializer,RegisterSerializer,LoginSerializer




# ViewSets define the view behavior.

class BookViewSet(viewsets.ModelViewSet):
     queryset = Book.objects.all()
     serializer_class = BookSerializer    

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset =User.objects.all()
    serializer_class=LoginSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('booking',BookViewSet)
router.register('rooms',RoomViewSet)
router.register('register',RegisterViewSet)
router.register('login',LoginViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
   # path('', include('hotel.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
   
]