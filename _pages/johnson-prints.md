---
layout: default
permalink: /johnson-prints/
title: Johnson Family Prints
image: assets/images/johnson_prints.jpg
---

{% include baguette.html %}

<h1>{{ page.title }}</h1>

There are just over 600 Johnson family photos below. This page may take a few minutes to load. You can view the images in a slideshow on this page or download individual photos by right clicking on them and selecting "download" or "save image as..."

![Johnson family prints with three adults and two children in front of a log cabin, and small photos a man on a rock with a large backpack, a family of four posing for a photo, and two kids on a couch smiling at the camera]({{ "assets/images/johnson_prints.jpg" | relative_url }})

<div class="gallery" style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains 'johnson-prints' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Johnson family print"/></a>
    {% endif %}  
{% endfor %}
    <script>
        window.addEventListener('load', function() {
        baguetteBox.run('.gallery');
        });
    </script>
</div>