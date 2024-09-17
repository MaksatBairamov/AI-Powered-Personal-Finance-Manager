from django.shortcuts import render
from django.http import JsonResponse
from .models import Transaction

def get_transactions(request):
    transactions = list(Transaction.objects.values())
    return JsonResponse({'transactions': transactions})
