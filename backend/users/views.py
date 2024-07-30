from django.shortcuts import render
from rest_framework import permissions, mixins, viewsets
from .serializers import UserCredSerializer, UserSerializer
from .models import User
from .permissions import IsOwnerOrReadOnly

class UserViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action in ["create", "update"]:
            return UserCredSerializer
        return UserSerializer

    permission_classes = [permissions.IsAuthenticated|IsOwnerOrReadOnly]
