---
layout: post
title: "Looking out (cherish what survives: part 2)"
date: 2025-05-27
description: "I have some extra time right now, so I made a return visit to a fire lookout that miraculously survived a massive wildfire."
image: assets/images/2025-pechuck-3.jpg
categories: [Oregon]
tags: [Oregon]
---

{% include leaflet.html %}

![A black dog panting on a rocky ridge with boots and green pants in the foreground, with green conifer trees to the right side with hills and peaks in the background, and grey burned trees to the left]({{ 'assets/images/2025-pechuck-1.jpg' | relative_url }}#full)

Starting today, I have a [little more time on my hands]({{ 'big-changes/' | relative_url }}), at least for a few weeks. So Teddy and I decided to take a drive and hike up to Pechuck Lookout, a rare stone fire lookout near the Table Rock Wilderness south of where I live.

<video width="100%" autoplay loop muted playsinline preload="true">
  <source src="{{ 'assets/video/2025-trailhead-driving-clip.mp4' | relative_url }}" type="video/mp4">
</video>

We arrived to an empty parking area, and we didn't see another person during the hike or at the lookout.

![A tan pickup truck in a gravel parking area with tall trees in the background]({{ 'assets/images/2025-pechuck-11.jpg' | relative_url }})

![A screenshot of a mapping app with Table Rock Wilderness labeled with a green outline of the area, and a large red area indicating burned areas]({{ 'assets/images/2025-pechuck-goat-maps.jpg' | relative_url }}#float)

I last visited the lookout in 2019, prior to the [massive Labor Day wildfires](https://brentryanjohnson.com/notes-from-evacuation/) of 2020. I was relieved to learn in 2022 that the [lookout had survived the fires](https://brentryanjohnson.com/cherish-what-survives/), albeit barely. 

Evidence of the 2020 Beachie Creek fire was pervasive, with remnants of the burn leading nearly to the front door of the lookout.

I used the new [Goat Maps](https://www.goatmaps.com/) app to track my hike, and it has a useful layer indicating and labeling the boundaries of historic wildfires.

My last hike here was also in May, earlier in the month, and I ended up negotiating a fair amount of snow in a few areas. This time, there was no sign of remaining snow, and the sides of the trail were laden with a variety of wildflowers.

![Black dog legs and paws stand on a fallen log with bright green foliage and pink flowers in the foreground]({{ 'assets/images/2025-pechuck-4.jpg' | relative_url }})
<figcaption>Pacific bleeding heart</figcaption>

![A white flower with green lance shaped leaves and forest needles and twigs]({{ 'assets/images/2025-pechuck-5.jpg' | relative_url }})
<figcaption>Oregon anemone</figcaption>

![Green foliage on the forest floor with a white flower hanging upside down from the stem with long, white petals and yellow stamens]({{ 'assets/images/2025-pechuck-8.jpg' | relative_url }})
<figcaption>White fawn lily</figcaption>

![Several white and yellow flowers among green foliage on the forest floor]({{ 'assets/images/2025-pechuck-7.jpg' | relative_url }})
<figcaption>Field of White fawn lily</figcaption>

It's not a long hike to the lookout from the Rooster Rock trailhead, but you feel the climb at the beginning.

You can take a short spur to visit said Rooster Rock, and a longer effort to Table Rock to the north. Near the lookout, the view opens up to reveal Table Rock in the distance, as well as Mount Hood between some of the burned trees.

![A black dog sitting on a hiking trail with trees in the background and a trapezoid shaped brown sign that reads Pechuck L.O. and an arrow pointing to the right]({{ 'assets/images/2025-pechuck-3.jpg' | relative_url }})

<video class="full-vid" autoplay loop muted playsinline preload="true">
  <source src="{{ 'assets/video/2025-pechuck.mp4' | relative_url }}#full" type="video/mp4">
</video>

![A stone fire lookout building with a blue door and porch with green trees and some burned trees around]({{ 'assets/images/2025-pechuck-2.jpg' | relative_url }})

![A black dog perched on a stone looking into a window with blue framing along a stone building with green trees in the background]({{ 'assets/images/2025-pechuck-6.jpg' | relative_url }})

![A man wearing a yellow hat backwards, green shirt and pants, and hiking boots sitting with a panting black dog on the porch of a small stone building with a blue door with blue sky and trees in the background, there's an orange and red backpack in the foreground]({{ 'assets/images/2025-pechuck-10.jpg' | relative_url }}#full)

I've lost a lot that I care about recently; it's good to be reminded of what survives—and to cherish it.

![A stone wall with a rectangular shelf built in with black burn marks on the stone and a candle sitting in the shelf]({{ 'assets/images/2025-pechuck-12.jpg' | relative_url }})

![A panting black dog stands on a wooden platform in a stone building with windows covered on the outside with board]({{ 'assets/images/2025-pechuck-14.jpg' | relative_url }})

![A wooden ladder leads to the upper part of a stone building; the ladder is stained with drops of white paint]({{ 'assets/images/2025-pechuck-16.jpg' | relative_url }})

![A black dog stands on a large boulder in the forest]({{ 'assets/images/2025-pechuck-13.jpg' | relative_url }})

![A panting black dog stands on a log in the forest]({{ 'assets/images/2025-pechuck-15.jpg' | relative_url }})

## Track

- **Distance:** 5.82 miles
- **Ascent:** 2,372 ft
- **Max elevation:** 4,960 ft

<div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([44.9424208, -122.3115674], 13)   
    var budTrack = {% include data/2025/2025-pechuck.html %} 

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

        L.geoJSON(budTrack, {color: '{{ site.data.maptiles.color }}'}).addTo(map);
</script>