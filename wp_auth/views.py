from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import *
from django.contrib.auth.decorators import login_required
from .models import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import UpdateView
from django.urls import reverse_lazy


def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("upload_documents")
    else:
        form = SignUpForm()
    return render(request, "registration/signup.html", {"form": form})


@login_required
# compliance
def upload_documents(request):
    user_documents = Document.objects.filter(user=request.user).first()

    if request.method == "POST":
        form = DocumentForm(request.POST, request.FILES, instance=user_documents)
        if form.is_valid():
            document = form.save(commit=False)
            document.user = request.user
            document.save()
            return redirect("upload_documents")
    else:
        form = DocumentForm(instance=user_documents)

    context = {
        "form": form,
        "user_documents": user_documents,
    }
    return render(request, "upload_documents.html", context)


class DocumentUpdateView(LoginRequiredMixin, UpdateView):
    model = Document
    form_class = DocumentForm
    template_name = "upload_documents.html"
    success_url = reverse_lazy("upload_documents")

    def get_object(self, queryset=None):
        return Document.objects.get(user=self.request.user)

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(DocumentUpdateView, self).form_valid(form)


@login_required
def upload_documents2(request):
    user_documents2 = Document2.objects.filter(user=request.user).first()

    if request.method == "POST":
        form = DocumentForm2(request.POST, request.FILES, instance=user_documents2)
        if form.is_valid():
            document = form.save(commit=False)
            document.user = request.user
            document.save()
            return redirect("upload_documents2")
    else:
        form = DocumentForm2(instance=user_documents2)

    context = {
        "form": form,
        "user_documents2": user_documents2,
    }
    return render(request, "upload_documents2.html", context)


class DocumentUpdateView2(LoginRequiredMixin, UpdateView):
    model = Document2
    form_class = DocumentForm2
    template_name = "upload_documents2.html"
    success_url = reverse_lazy("upload_documents2")

    def get_object(self, queryset=None):
        return Document2.objects.get(user=self.request.user)

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


@login_required
def upload_documents3(request):
    user_documents3 = Document3.objects.filter(user=request.user).first()

    if request.method == "POST":
        form = DocumentForm3(request.POST, request.FILES, instance=user_documents3)
        if form.is_valid():
            document = form.save(commit=False)
            document.user = request.user
            document.save()
            return redirect("upload_documents3")
    else:
        form = DocumentForm3(instance=user_documents3)

    context = {
        "form": form,
        "user_documents3": user_documents3,
    }
    return render(request, "upload_documents3.html", context)


class DocumentUpdateView3(LoginRequiredMixin, UpdateView):
    model = Document3
    form_class = DocumentForm3
    template_name = "upload_documents3.html"
    success_url = reverse_lazy("upload_documents3")

    def get_object(self, queryset=None):
        return Document3.objects.get(user=self.request.user)

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


@login_required
def home(request):
    return render(request, "registration/login.html")


def custom_entry(request):
    if request.user.is_authenticated:
        return redirect("upload_documents")
    else:
        return redirect("signup")


@login_required
def user_profile(request):
    user = request.user
    email = user.email
    username = user.username
    context = {"email": email, "username": username}
    try:
        user_profile = request.user.userprofile1
        if request.method == "POST":
            form = UserProfileForm(request.POST, instance=user_profile)
            if form.is_valid():
                form.save()
                return redirect("user_profile")
        else:
            form = UserProfileForm(instance=user_profile)
    except UserProfile1.DoesNotExist:
        if request.method == "POST":
            form = UserProfileForm(request.POST)
            if form.is_valid():
                user_profile = form.save(commit=False)
                user_profile.user = request.user
                user_profile.save()
                return redirect("user_profile")
        else:
            form = UserProfileForm()
    return render(request, "user_profile.html", {"form": form})


@login_required
def my_taxes(request):
    return render(request, "my_taxes.html")


@login_required  # this is a decorator
def travel_calendar(request):
    if request.method == "POST":
        form = TravelCalendarForm(request.POST)
        if form.is_valid():
            travel = form.save(commit=False)
            travel.user = request.user
            travel.save()
            return redirect("travel_calendar")
    else:
        form = TravelCalendarForm()

    travels = Travel.objects.filter(user=request.user)
    context = {"form": form, "travels": travels}
    return render(request, "travel_calendar.html", context)


def base_demo(request):
    return render(request, "base copy.html")
