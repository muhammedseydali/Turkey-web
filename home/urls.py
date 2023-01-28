from django.urls import path
from . import views

urlpatterns = [

    path('',views.superadmin_dashboard,name='superadmin'),
    path('view-categories',views.view_Categories,name='view-categories'),
    path('add-category',views.add_Category,name='add-category'),
    path('edit-category/<int:pk>',views.edit_category,name='edit-category'),
    path('delete-category/<int:pk>',views.delete_category,name='delete-category'),

]
