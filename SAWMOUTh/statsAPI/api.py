from statsAPI.models import Stats
from rest_framework import viewsets, permissions
from .serializers import StatsSerializer

# StatsViewSet


class StatsViewSet(viewsets.ModelViewSet):
    queryset = Stats.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StatsSerializer
