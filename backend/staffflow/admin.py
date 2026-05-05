from django.contrib import admin
from .models import Employee, LeaveType, LeaveBalance, LeaveRequest

admin.site.register(Employee)
admin.site.register(LeaveType)
admin.site.register(LeaveBalance)
admin.site.register(LeaveRequest)