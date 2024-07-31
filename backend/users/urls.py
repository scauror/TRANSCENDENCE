from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import *

router = SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'userprofiles', UserProfileRetrieveView)

urlpatterns = [
    path('me', MyUserProfileView.as_view()),
] + router.urls
