from django.urls import path
from . import views

app_name = 'imdbapp'  # Replace with your app's name

urlpatterns = [
    path('', views.movie_list, name='movie_list'),
    path('movies/', views.movie_list, name='movie_list'),
]
