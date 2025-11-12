---
layout: default
permalink: /pnw-survival-games/
title: PNW Survival Games
image: assets/images/2025-pnw-survival-games/DSC_6832.jpg
---

{% include baguette.html %}

<h1>{{ page.title }}</h1>

I volunteered as a photographer at the [PNW Survival Games](https://www.pnwsurvivalgames.com/). Here are some of my photos from the event.

## 2025

<div class="gallery" style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains '2025-pnw' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Instagram photo"/></a>
    {% endif %}  
{% endfor %}
    <script>
        window.addEventListener('load', function() {
        baguetteBox.run('.gallery');
        });
    </script>
</div>

<hr>

![Two photographers pointing cameras toward a person in an orange suit lying in a shelter made of branches and leaves]({{ 'assets/images/2025-survival-games.jpg' | relative_url }})