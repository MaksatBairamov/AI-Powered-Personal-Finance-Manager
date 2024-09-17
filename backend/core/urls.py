from django.urls import path
from .views import get_transactions

urlpatterns = [
    path('transactions/', get_transactions, name='get_transactions'),
]
