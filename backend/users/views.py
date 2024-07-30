from django.shortcuts import render
from rest_framework import generics, permissions, viewsets
from .serializers import UserCredSerializer, UserSerializer
from rest_framework.decorators import action
from .models import User, UserProfile
from .permissions import IsOwnerOrReadOnly

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action in ["create", "update"]:
            return UserCredSerializer
        return UserSerializer

    permission_classes = [permissions.IsAuthenticated|IsOwnerOrReadOnly]
