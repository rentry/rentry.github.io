---
layout: post
title: "Back to volunteering"
date: 2025-06-22
description: "After leaving the search and rescue team a few months ago, I decided it was time to get back into volunteer work. Today I volunteered with Trailkeepers of Oregon."
image: assets/images/2025-trailkeepers-shellburg-2.jpg
categories: [Oregon]
tags: [Oregon, volunteer]
---

{% include leaflet.html %}

![Tools, gloves, and a green hardhat with two adze tools and the words Trailkeepers of Oregon on it on the ground amid leaves, vines, brush, and black trees]({{ 'assets/images/2025-trailkeepers-shellburg-2.jpg' | relative_url }}#full)

![A black, burned tree with orange fungus growing all over it with green leaves surrounding]({{ 'assets/images/2025-trailkeepers-shellburg-1.jpg' | relative_url }}#float)

After leaving the search and rescue team a few months ago and recently landing a new job after being forced out of federal service, I decided to get back into volunteer work.

In part because of the reductions in federal staff and funding for our public lands (not to mention the proposed [sale of millions of acres of public land](https://www.wilderness.org/articles/media-resources/250-million-acres-public-lands-eligible-sale-senr-bill)), I decided to focus my volunteer efforts on trail maintenance and public land support.

So today I joined a trail maintenance event with [Trailkeepers of Oregon](https://trailkeepersoforegon.org/).

![Moss and shrubs cover boulder in the foreground with a large waterfall in the background and trees lining the rocky ledge at the top of the waterfall]({{ 'assets/images/2025-trailkeepers-shellburg-5.jpg' | relative_url }})

The event was at little-known Shellburg Falls, which, despite being just south of [my favorite place in Oregon]({{ '/silver-falls/' | relative_url }}), I had never visited.

![People wearing hardhats walk a trail among burned and blackened trees with green shrubs on each side of the trail]({{ 'assets/images/2025-trailkeepers-shellburg-3.jpg' | relative_url }})

The Shellburg Falls area is heavily impacted by the massive Beachie Creek fire in 2020, and only reopened in 2024.

The area required significant work to make it safe again for visitation, and now demands substantial trail maintenance to manage the eager new vegetation reasserting itself, along with structures to manage runoff and bridges to span multiple creeks and wetlands in the area. 

![A new wooden bridge with shrubs and trees in the background]({{ 'assets/images/2025-trailkeepers-shellburg-4.jpg' | relative_url }})

It's a great spot to spend the day, and after all of the trails I've hiked, it's nice to give back.

I'll be back out on the trails soon.

![A large waterfall drops over a rocky ledge into a pool with boulders and logs with green shrubs surrounding the pool]({{ 'assets/images/2025-trailkeepers-shellburg-6.jpg' | relative_url }}#full)

![Burned trees surround a waterfall emerging from under a bridge near a gravel road with dry grass and wood bark in the foreground]({{ 'assets/images/2025-trailkeepers-shellburg-7.jpg' | relative_url }})

<!-- Map -->

<div class="map" id="map"></div>

<script>

var map = L.map('map').setView([44.8125102, -122.608527], 14);

L.tileLayer('{{ site.data.maptiles.tiles }}', {
  attribution: '{{ site.data.maptiles.attribution }}',
  subdomains: 'abcd',
  maxZoom: {{ site.data.maptiles.max-zoom }}
}).addTo(map);

const locations = [
  { coords: [44.8125102, -122.608527], name: 'Shellburg Falls Recreation Area' }
];

locations.forEach(({ coords, name }) => {
  L.marker(coords).addTo(map).bindPopup(name);
});

</script>