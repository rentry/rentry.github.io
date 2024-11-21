---
layout: default
permalink: /roper-slides/
title: Roper Family Slides
image: assets/images/roper_slides.jpg
---

<h1>{{ page.title }}</h1>

There are 416 Roper family photos below. This page may take a few minutes to load. You can download photos by right clicking on them and selecting "download" or "save image as..."


![Roper family slides 1960s and 1970s]({{ "assets/images/roper_slides.jpg" | relative_url }})

<div style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains 'roper-slides' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Roper family slide"/></a>
    {% endif %}  
{% endfor %}
</div>