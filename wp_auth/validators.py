from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class AllowAllPasswordsValidator:
    def validate(self, password, user=None):
        return

    def get_help_text(self):
        return _("No password validation is enforced.")
