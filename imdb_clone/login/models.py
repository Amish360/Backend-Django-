from django.db import models

# Create your models here.
from django.db import models
import pytz
from django.core.exceptions import ValidationError


class TimeZoneField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 63  # The maximum length for time zone identifiers
        super().__init__(*args, **kwargs)

    def validate(self, value, model_instance):
        if value and value not in pytz.all_timezones:
            raise ValidationError(f"'{value}' is not a valid timezone.")

    def get_internal_type(self):
        return 'CharField'


class LoginStats(models.Model):
    last_login_time = models.DateTimeField()
    ip_address = models.GenericIPAddressField(default='UTC')
    user_agent = models.CharField(max_length=200, null=True, blank=True)
    time_zone = TimeZoneField(default='UTC')

    def __str__(self):
        return f"LoginStats - {self.last_login_time}"
