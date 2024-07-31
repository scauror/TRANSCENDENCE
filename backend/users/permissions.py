from rest_framework import permissions
from .models import User, UserProfile

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if type(obj) == User:
            return obj == request.user
        if type(obj) == UserProfile:
            return obj.user == request.user
        return False
