from django.contrib import admin
from . models import Category, Item, Variant

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' :('category_name',)}
    list_display        = ('category_name','slug')
admin.site.register(Category, CategoryAdmin)

class ItemAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' :('item_name',)}
    list_display        = ('item_name', 'slug', 'category', 'created_date', 'modified_date', 'is_available')
admin.site.register(Item, ItemAdmin)

class VariantAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' :('item',)}
    list_display        = ('item', 'slug', 'image1', 'image2', 'image3', 'price', 'is_available')
admin.site.register(Variant, VariantAdmin)