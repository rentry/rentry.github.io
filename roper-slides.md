---
layout: default
title: Roper Family Slides
---

<h1>{{ page.title }}</h1>

<div>
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains 'roper-slides' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Roper family slide"/></a>
    {% endif %}  
{% endfor %}
</div>