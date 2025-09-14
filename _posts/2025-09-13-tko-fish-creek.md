---
layout: post
title: "Photos: “Bachelor” elk and trailkeeping"
date: 2025-09-13
description: "Photos from an unusual elk sighting in my neighborhood and work on a trail I've been visiting for well over a decade"
image: assets/images/2025-fish-creek-1.jpg
categories: [Oregon]
tags: [Oregon, hike]
---

{% include leaflet.html %}

![A herd of five elk all with antlers standing in a field with powerlines overhead and a band of mist]({{ 'assets/images/2025-fish-creek-1.jpg' | relative_url }}#full)

<figcaption>An usual sighting of "bachelor" elk less than a mile from my house</figcaption>

![Trailkeeper volunteers wearing hard hats walk a trail among burned trees on a hillside]({{ 'assets/images/2025-fish-creek-2.jpg' | relative_url }})

![A foot in the foreground on a steep, rocky hillside with a river at the bottom of the slide]({{ 'assets/images/2025-fish-creek-3.jpg' | relative_url }})

<figcaption>I've been hiking this trail for over a decade, and it's always had exposed portions. But it's definitely sketchier following the 2020 Riverside Fire.</figcaption>

![Looking uphill at a rock slide and burned trees and stumps]({{ 'assets/images/2025-fish-creek-4.jpg' | relative_url }})

![A faint trail across a rockslide with burned trees on the hillside]({{ 'assets/images/2025-fish-creek-5.jpg' | relative_url }})

<figcaption>I scratched a trail across the washout to get the trail crew to the other side.</figcaption>

![A bearded man wearing a hardhat cutting brush]({{ 'assets/images/2025-fish-creek-6.jpg' | relative_url }})

![Two men in hardhats smiling and laughing]({{ 'assets/images/2025-fish-creek-7.jpg' | relative_url }})

![Two men in hardhats standing among trees lit by sunshine]({{ 'assets/images/2025-fish-creek-8.jpg' | relative_url }})

<!-- Map -->

<div class="map" id="map"></div>

<script>

var map = L.map('map').setView([45.1569735, -122.1506715], 13); 

L.tileLayer('{{ site.data.maptiles.tiles }}', {
  attribution: '{{ site.data.maptiles.attribution }}',
  subdomains: 'abcd',
  maxZoom: {{ site.data.maptiles.max-zoom }}
}).addTo(map);
        
L.marker([45.1569735,-122.1506715]).addTo(map)
.bindPopup('Fish Creek');

</script>