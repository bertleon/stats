from rest_framework import routers
from .api import StatsViewSet

router = routers.DefaultRouter()
router.register('api/statsAPI', StatsViewSet, 'statsAPI')

urlpatterns = router.urls
