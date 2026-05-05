from django.contrib import admin
from .models import Client, CaseStage, CaseMatter, CaseUpdate, CaseDocument

admin.site.register(Client)
admin.site.register(CaseStage)
admin.site.register(CaseMatter)
admin.site.register(CaseUpdate)
admin.site.register(CaseDocument)