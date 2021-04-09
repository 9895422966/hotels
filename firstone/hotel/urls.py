'''from hotel import views
from django.conf.urls import url
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register',views.register.as_view(),name='register'),
    path('login',obtain_auth_token,name='login'),
    path('welcome',views.welcome.as_view(),name='welcome')
]'''