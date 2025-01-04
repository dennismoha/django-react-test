from django.urls import path
from . import views

urlpatterns = [
    path("patient-history/", views.PatientListCreate.as_view(), name="patient-history"),
    path("patient-history/delete/<int:pk>/", views.PatientDelete.as_view(), name="delete-history"),
]