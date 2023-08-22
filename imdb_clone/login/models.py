from django.db import models

# Create your models here.
from django.db import models


class LoginStats(models.Model):
    last_login_time = models.DateTimeField()
    ip_address = models.CharField(max_length=100, null=True, blank=True)
    user_agent = models.CharField(max_length=200, null=True, blank=True)
    time_zone = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"LoginStats - {self.last_login_time}"
