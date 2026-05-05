from django.db import models
from firms.models import Firm


class Client(models.Model):
    firm = models.ForeignKey(Firm, on_delete=models.CASCADE, related_name="clients")
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    id_number = models.CharField(max_length=50, blank=True)
    address = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class CaseStage(models.Model):
    code = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class CaseMatter(models.Model):
    STATUS_CHOICES = [
        ("ACTIVE", "Active"),
        ("ON_HOLD", "On Hold"),
        ("CLOSED", "Closed"),
        ("CANCELLED", "Cancelled"),
    ]

    firm = models.ForeignKey(Firm, on_delete=models.CASCADE, related_name="cases")
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="cases")
    reference = models.CharField(max_length=50, unique=True)
    matter_type = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    court_name = models.CharField(max_length=255, blank=True)
    case_number = models.CharField(max_length=100, blank=True)
    opposing_party = models.CharField(max_length=255, blank=True)
    current_stage = models.ForeignKey(
        CaseStage,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="ACTIVE")
    opened_at = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.reference


class CaseUpdate(models.Model):
    case = models.ForeignKey(CaseMatter, on_delete=models.CASCADE, related_name="updates")
    stage = models.ForeignKey(CaseStage, on_delete=models.SET_NULL, null=True)
    message = models.TextField()
    visible_to_client = models.BooleanField(default=True)
    updated_by = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.case.reference} - {self.stage}"


class CaseDocument(models.Model):
    case = models.ForeignKey(CaseMatter, on_delete=models.CASCADE, related_name="documents")
    title = models.CharField(max_length=255)
    document_type = models.CharField(max_length=100, blank=True)
    file = models.FileField(upload_to="case_documents/", blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title