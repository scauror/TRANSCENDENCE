from django.shortcuts import render
from rest_framework import permissions, mixins, viewsets, generics, response, request, views
from .serializers import UserCredSerializer, UserSerializer, UserProfileSerializer
from .models import User, UserProfile
from .permissions import IsOwnerOrReadOnly

class UserViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   viewsets.GenericViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action in ["create", "update"]:
            return UserCredSerializer
        return UserSerializer

    permission_classes = [permissions.IsAuthenticated|IsOwnerOrReadOnly]

class UserProfileRetrieveView(generics.RetrieveUpdateAPIView,
                   viewsets.GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated|IsOwnerOrReadOnly]
    lookup_field = 'user__pk'

class MyUserProfileView(views.APIView):
    def get(self, request, format=None):
        return response.Response(UserProfileSerializer(request.user.user_profile).data)
