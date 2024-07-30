from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import *

router = SimpleRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    #path('signup', UserCreateView.as_view()),
] + router.urls
