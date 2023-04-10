from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import *
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import AuthenticationForm


class CustomLoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}))
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "form-control"})
    )


class SignUpForm(UserCreationForm):
    email = forms.EmailField(
        max_length=254,
        help_text="Required. Enter a valid email address.",
        widget=forms.EmailInput(attrs={"class": "form-control"}),
    )

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")
        widgets = {
            "username": forms.TextInput(attrs={"class": "form-control"}),
            "password1": forms.PasswordInput(
                attrs={"class": "form-control", "autocomplete": "new-password"}
            ),
            "password2": forms.PasswordInput(
                attrs={"class": "form-control", "autocomplete": "new-password"}
            ),
        }


def validate_file_extension(value):
    ext = value.name.split(".")[-1]
    valid_extensions = ["pdf", "jpg", "jpeg", "png"]
    if not ext.lower() in valid_extensions:
        raise ValidationError(
            "File type not supported. Only PDF, JPG, and PNG files are allowed."
        )


class DocumentForm(forms.ModelForm):
    class Meta:
        valid_extensions = ["pdf", "jpg", "jpeg", "png"]
        model = Document
        fields = ("pan", "frro", "entry", "exit")
        widgets = {
            "pan": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
            "frro": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
            "entry": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
            "exit": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
        }
        labels = {
            "pan": "PAN",
            "frro": "FRRO",
            "entry": "Entry",
            "exit": "Exit",
        }

    def __init__(self, *args, **kwargs):
        super(DocumentForm, self).__init__(*args, **kwargs)
        self.fields["pan"].validators.append(validate_file_extension)
        self.fields["frro"].validators.append(validate_file_extension)
        self.fields["entry"].validators.append(validate_file_extension)
        self.fields["exit"].validators.append(validate_file_extension)


# class DocumentForm2(forms.ModelForm):
#     class Meta:
#         model = Document2
#         fields = ("employment_letter", "salary_slip")
#         widgets = {
#             "employment_letter": forms.FileInput(attrs={"accept": valid_extensions}),
#             "salary_slip": forms.FileInput(attrs={"accept": valid_extensions}),
#         }
#         labels = {
#             "employment_letter": "Employment Letter",
#             "salary_slip": "Salary Slip",
#         }

#     def __init__(self, *args, **kwargs):
#         super(DocumentForm2, self).__init__(*args, **kwargs)
#         self.fields["employment_letter"].validators.append(validate_file_extension)
#         self.fields["salary_slip"].validators.append(validate_file_extension)


class DocumentForm2(forms.ModelForm):
    class Meta:
        valid_extensions = ["pdf", "jpg", "jpeg", "png"]
        model = Document2
        fields = ("employment_letter", "salary_slip")
        widgets = {
            "employment_letter": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
            "salary_slip": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
        }
        labels = {
            "employment_letter": "Employment Letter",
            "salary_slip": "Salary Slip",
        }

    def __init__(self, *args, **kwargs):
        super(DocumentForm2, self).__init__(*args, **kwargs)
        self.fields["employment_letter"].validators.append(validate_file_extension)
        self.fields["salary_slip"].validators.append(validate_file_extension)


class DocumentForm3(forms.ModelForm):
    class Meta:
        valid_extensions = ["pdf", "jpg", "jpeg", "png"]
        model = Document3
        fields = ("inward_File", "inward_textbox", "outward_File", "outward_textbox")
        widgets = {
            "inward_File": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
            "inward_textbox": forms.TextInput(attrs={"class": "form-control"}),
            "outward_File": forms.FileInput(
                attrs={"accept": valid_extensions, "class": "form-control-file"}
            ),
            "outward_textbox": forms.TextInput(attrs={"class": "form-control"}),
        }
        labels = {
            "inward_File": "Inward File",
            "inward_textbox": "Inward Textbox",
            "outward_File": "Outward File",
            "outward_textbox": "Outward Textbox",
        }

    def __init__(self, *args, **kwargs):
        super(DocumentForm3, self).__init__(*args, **kwargs)
        self.fields["inward_File"].validators.append(validate_file_extension)
        self.fields["outward_File"].validators.append(validate_file_extension)


class UserProfileForm(forms.ModelForm):
    class Meta:
        valid_extensions = ["pdf", "jpg", "jpeg", "png"]

        model = UserProfile1
        fields = (
            "country_of_residence",
            "PAN_No",
            "Others",
            "date_of_arrival",
            "date_of_departure",
        )
        widgets = {
            "country_of_residence": forms.Select(attrs={"class": "form-control"}),
            "PAN_No": forms.TextInput(attrs={"class": "form-control"}),
            "Others": forms.TextInput(attrs={"class": "form-control"}),
            "date_of_arrival": forms.DateInput(
                attrs={"class": "form-control datepicker", "type": "date"}
            ),
            "date_of_departure": forms.DateInput(
                attrs={"class": "form-control datepicker", "type": "date"}
            ),
        }


class TravelCalendarForm(forms.ModelForm):
    class Meta:
        valid_extensions = ["pdf", "jpg", "jpeg", "png"]

        model = Travel
        fields = ("country", "date_of_arrival", "date_of_departure", "reason")
        widgets = {
            "country": forms.Select(attrs={"class": "form-control"}),
            "date_of_arrival": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "date_of_departure": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "reason": forms.TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Employment, Buisness etc.",
                }
            ),
        }

    labels = {
        "reason": "Reason Of Stay",
    }

    def clean(self):
        cleaned_data = super().clean()
        date_of_arrival = cleaned_data.get("date_of_arrival")
        date_of_departure = cleaned_data.get("date_of_departure")

        if date_of_arrival and date_of_departure:
            if date_of_arrival >= date_of_departure:
                self.add_error(
                    "date_of_departure",
                    "Date of Arrival must be before Date of Departure.",
                )
