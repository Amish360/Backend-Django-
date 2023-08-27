# views.py

from django.http import HttpResponse
from django.shortcuts import render
import os
from django.conf import settings


def serve_react_app(request):
    # Build the path to the index.html file in your React app's build directory
    index_file_path = os.path.join(settings.BASE_DIR, 'imdb_app', 'src', 'App.js')

    # Read the contents of the index.html file
    with open(index_file_path, 'r') as index_file:
        index_content = index_file.read()

    # Return the contents as an HttpResponse
    return HttpResponse(index_content)
