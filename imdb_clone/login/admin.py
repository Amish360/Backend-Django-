# Register your models here.
from django.contrib import admin
from .models import LoginStats


class LoginStatsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in LoginStats._meta.fields]


admin.site.register(LoginStats, LoginStatsAdmin)
