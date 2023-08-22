from django.db import models


# Create your models here.


class Movies(models.Model):
    name = models.CharField(max_length=1000)
    rating = models.FloatField(max_length=5.0)

    def __str__(self):
        return self.name
