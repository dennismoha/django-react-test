from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, PatientHistorySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import PatientHistory

# Create your views here.

class PatientListCreate(generics.ListCreateAPIView):
    serializer_class = PatientHistorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return PatientHistory.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class PatientDelete(generics.DestroyAPIView):
    serializer_class = PatientHistorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return PatientHistory.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]