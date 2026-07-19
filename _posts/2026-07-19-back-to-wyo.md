---
layout: post
title: "Back to Wyoming: Hole in the Wall & Lake Angeline"
date: 2026-07-19
description: "I was back in Wyoming for a few days, with Longmire Days, Hole in the Wall, and the Bighorn Mountains all on the itinerary."
image: assets/images/2026-wyoming/img_6745.jpg
categories: [travel]
tags: [Wyoming, travel]
---

{% include leaflet.html %}
{% include baguette.html %}

![A forest of trees with mist and sun shining sporadically on trees]({{ 'assets/images/2026-wyoming/img_6745.jpg' | relative_url }}#full)

I was back in my home state this summer, with visits to the famous retreat of the Hole in the Wall Gang, Longmire Days events, and a hike above the treeline to Lake Angeline.


<div class="gallery" style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains '2026-wyoming' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Johnson family slide"/></a>
    {% endif %}  
{% endfor %}
    <script>
        window.addEventListener('load', function() {
        baguetteBox.run('.gallery');
        });
    </script>
</div>

![A forest of trees with mist and sun shining sporadically on trees]({{ 'assets/images/2026-wyoming/img_6714.jpg' | relative_url }}#full)

## Lake Angeline Hike

- **Distance:** 11.0 miles
- **Ascent:** 2,463 ft
- **Max Elevation:** 10,565 ft

<!-- Map -->

<div class="map" id="map"></div>

<script>

var map = L.map('map').setView([44.30792077, -107.04674749], 13);
var angeline = {% include data/2026/2026-lake-angeline.html %} 

L.tileLayer('{{ site.data.maptiles.tiles }}', {
  attribution: '{{ site.data.maptiles.attribution }}',
  subdomains: 'abcd',
  maxZoom: {{ site.data.maptiles.max-zoom }}
}).addTo(map);

L.geoJSON(angeline, {color: '{{ site.data.maptiles.color }}'}).addTo(map);

</script>