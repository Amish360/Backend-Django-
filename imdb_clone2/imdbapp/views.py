from django.shortcuts import render
from .models import Movies
from django.core.paginator import Paginator


# Create your views here.

def movie_list(request):
    movie_queryset = Movies.objects.all()  # Replace with your queryset
    paginator = Paginator(movie_queryset, per_page=10)  # Number of items per page
    page_number = request.GET.get('page')  # Get the page number from the query parameter

    page_obj = paginator.get_page(page_number)

    return render(request, 'movie_list.html', {'page_obj': page_obj})
