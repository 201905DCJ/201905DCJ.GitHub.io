# Generated by Django 2.2.10 on 2020-02-29 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mytest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mydb1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('select', models.CharField(max_length=100)),
            ],
        ),
    ]