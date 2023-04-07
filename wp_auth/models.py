from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField


class Document(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pan = models.FileField(upload_to="documents/")
    frro = models.FileField(upload_to="documents/")
    entry = models.FileField(upload_to="documents/")
    exit = models.FileField(upload_to="documents/")

    def __str__(self):
        return self.user.username


class Document2(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    employment_letter = models.FileField(upload_to="documents2/")
    salary_slip = models.FileField(upload_to="documents2/")

    def __str__(self):
        return self.user.username


class Document3(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    inward_File = models.FileField(upload_to="remittances/inward/")
    inward_textbox = models.CharField(max_length=100)
    outward_File = models.FileField(upload_to="remittances/outward/")
    outward_textbox = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username


class UserProfile1(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country_of_residence = CountryField(blank_label="(Select country)")
    PAN_No = models.CharField(max_length=10)
    Others = models.CharField(max_length=100)
    # pan or unique tax id (pan 10 , variable)
    date_of_arrival = models.DateField()
    date_of_departure = models.DateField()
    # date of a

    def __str__(self):
        return self.user.username


class TravelCalendar1(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    country = CountryField(blank_label="(Select country)")
    date_of_arrival = models.DateField()
    date_of_departure = models.DateField()
    days_stayed = models.PositiveIntegerField(null=True, blank=True)
    reason = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.days_stayed = (self.date_of_departure - self.date_of_arrival).days
        super(TravelCalendar1, self).save(*args, **kwargs)


class Travel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    country = CountryField(blank_label="(Select country)")
    date_of_arrival = models.DateField()
    date_of_departure = models.DateField()
    days_stayed = models.PositiveIntegerField(null=True, blank=True)
    reason = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.days_stayed = (self.date_of_departure - self.date_of_arrival).days
        super(Travel, self).save(*args, **kwargs)

    def __str__(self):
        return self.user.username
