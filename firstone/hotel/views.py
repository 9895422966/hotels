'''from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from hotel.serializers import RegisterSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

# Create your views here.
# Register API
class register(APIView):
   

   def post(self, request,format:None):
        serializer =RegisterSerializer(data=request.data)
        data={}
         if serializer.is_valid():
          account = serializer.save()
          data['first_name']=account.first_name
          data['last_name']=account.last_name
          data['username']=account.username
          data['email']=account.email
          data['password']=account.password
          data['password2']=account.password2
          token,create=Token.objects.get_or_create(user=account)
          data['token']=token.key
        else:
            data=serializer.errors
        return Response(data)

class welcome(APIView):
     permission_classes=(IsAuthenticated,)
     def post(self,request):
        content={'user':str(request.user),'pass':str(request.user.password)}
        return Response(content)'''