from django.contrib import admin
from .models import *

# Get all objects in the current module as a dictionary
admin.site.register(Document)
admin.site.register(Document2)
admin.site.register(Document3)
admin.site.register(UserProfile1)


admin.site.register(Travel)


class TravelCalendarAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "country",
        "date_of_arrival",
        "date_of_departure",
        "days_stayed",
        "reason",
    )
    list_filter = ("user",)


# class TravelCalendarAdmin(admin.ModelAdmin):
#     list_display = (
#         "user_list",
#         "country",
#         "date_of_arrival",
#         "date_of_departure",
#         "days_stayed",
#         "reason",
#     )
#     list_filter = ("user",)

#     def user_list(self, obj):
#         return ", ".join(user.username for user in obj.user.all())

#     user_list.short_description = "Users"
