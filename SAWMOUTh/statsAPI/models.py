from django.db import models


class Stats(models.Model):
    username = models.CharField(max_length=100)
    playtime = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
