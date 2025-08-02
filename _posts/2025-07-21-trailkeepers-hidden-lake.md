---
layout: post
title: "Trailkeepers event: Hidden Lake"
date: 2025-07-21
description: "I attended my third trail party with Trailkeepers of Oregon yesterday. It was a cool summer day on beautiful mountain trail."
image: assets/images/2025-trailkeepers-shellburg-2.jpg
categories: [volunteer]
tags: [Trailkeepers, volunteer]
---

{% include leaflet.html %}

![A downed log with a section cut out in the forest, with tools in the brush along a trail]({{ 'assets/images/2025-trailkeepers-hidden-lake-6.jpg' | relative_url }}#full)

I was back on the trail over the weekend for my third event with Trailkeepers of Oregon. Our small crew cleared 18 logs from the trail, along with a few miles of overgrown brush.

![People in green, red, and yellow hard hats walk with backpacks on and holding tools along a gravel path at the base of a snow capped mountain with clouds covering the summit]({{ 'assets/images/2025-trailkeepers-hidden-lake-1.jpg' | relative_url }})

![A wooden sign bolted to a tree reads Hidden Lake TR, with another wooden sign below]({{ 'assets/images/2025-trailkeepers-hidden-lake-9.jpg' | relative_url }})

![A pink flower with yellow stamen with green leaves and dry branches]({{ 'assets/images/2025-trailkeepers-hidden-lake-5.jpg' | relative_url }})

![A large log on the ground across a trail in the forest with green shrubs in the foreground]({{ 'assets/images/2025-trailkeepers-hidden-lake-8.jpg' | relative_url }})

![A crosscut saw lays on top of a large log with a section of bark cut away]({{ 'assets/images/2025-trailkeepers-hidden-lake-7.jpg' | relative_url }})

![Two people in hardhats, one green and one orange, use a crosscut saw to cut through a large log]({{ 'assets/images/2025-trailkeepers-hidden-lake-2.jpg' | relative_url }})

![Two people in hardhats, one green and one orange, use a crosscut saw to cut through a large log with a trail in the forest behind one of the people]({{ 'assets/images/2025-trailkeepers-hidden-lake-3.jpg' | relative_url }})

<video class="full-vid" autoplay loop muted playsinline preload="true">
  <source src="{{ 'assets/video/2025-trailkeepers-hidden-lake-1.mp4' | relative_url }}#full" type="video/mp4">
</video>

![A man in a green hardhat uses a crosscut saw to cut through a large log]({{ 'assets/images/2025-trailkeepers-hidden-lake-4.jpg' | relative_url }})

<video width="100%" autoplay loop muted playsinline preload="true">
  <source src="{{ 'assets/video/2025-trailkeepers-hidden-lake-2.mp4' | relative_url }}" type="video/mp4">
</video>

<!-- Map -->

<div class="map" id="map"></div>

<script>

var map = L.map('map').setView([45.3135487, -121.7997764], 14);

L.tileLayer('{{ site.data.maptiles.tiles }}', {
  attribution: '{{ site.data.maptiles.attribution }}',
  subdomains: 'abcd',
  maxZoom: {{ site.data.maptiles.max-zoom }}
}).addTo(map);

const locations = [
  { coords: [45.3135487, -121.7997764], name: 'Hidden Lake trail' }
];

locations.forEach(({ coords, name }) => {
  L.marker(coords).addTo(map).bindPopup(name);
});

</script>