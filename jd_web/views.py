from django.shortcuts import render

# Create your views here.
def index(request):
    """ 京东主页 """
    return render(request,'jd_web/index.html')