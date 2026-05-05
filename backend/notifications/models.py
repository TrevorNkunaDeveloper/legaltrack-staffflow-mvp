from django.db import models
from firms.models import Firm


class Notification(models.Model):
    CHANNEL_CHOICES = [
        ("EMAIL", "Email"),
        ("SMS", "SMS"),
        ("SYSTEM", "System"),
    ]

    STATUS_CHOICES = [
        ("SIMULATED", "Simulated"),
        ("SENT", "Sent"),
        ("FAILED", "Failed"),
    ]

    firm = models.ForeignKey(Firm, on_delete=models.CASCADE, related_name="notifications")
    recipient = models.EmailField()
    subject = models.CharField(max_length=255)
    body = models.TextField()
    channel = models.CharField(max_length=20, choices=CHANNEL_CHOICES, default="EMAIL")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="SIMULATED")
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subject