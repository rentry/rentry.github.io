---
layout: default
permalink: /johnson-slides/
title: Johnson Family Slides
image: assets/images/johnson_slides.jpg
---

{% include baguette.html %}

<h1>{{ page.title }}</h1>

There are 530 Johnson family photos below. This page may take a few minutes to load. You can view the images in a slideshow on this page or download individual photos by right clicking on them and selecting "download" or "save image as..."

![Johnson family slides with a log cabin with green roof, and small photos of a woman with sunglasses, a group of people in front of a log cabin and a car, and a man behind the windshield of a boat]({{ "assets/images/johnson_slides.jpg" | relative_url }})

<div class="gallery" style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains 'johnson-slides' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Johnson family slide"/></a>
    {% endif %}  
{% endfor %}
    <script>
        window.addEventListener('load', function() {
        baguetteBox.run('.gallery');
        });
    </script>
</div>