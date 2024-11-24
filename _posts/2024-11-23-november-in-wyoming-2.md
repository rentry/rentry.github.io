---
layout: post
title: "November in Wyoming: North Sayles Creek and Firebox Canyons"
date: 2024-11-23
description: "It was another pleasant November day in Wyoming, so I returned to the Bighorns for a Saturday hike. This one ended up taking longer than I expected, as I negotiated two areas of significant blowdown from wildfires."
image: assets/images/2024-bud-love-3.jpg
categories: [travel]
tags: [Wyoming, travel]
---

{% include leaflet.html %}

![An elk skull seen from below hanging from a tree with ash trees blurred in the background]({{ 'assets/images/2024-bud-love-6.jpg' | relative_url }}#full)

As I continued looking for hikes near my parents' home, I found another launchpad into the Bighorns in the form of the [Bud Love Wildlife Habitat Management Area](https://wgfd.wyo.gov/Public-Access/WHMA/WHMA/Bud-Love).

I saw just two pheasant hunters as I drove into the area, parking at a trailhead leading into the Bighorns. On the hike itself, I wouldn't see a single other person. 

After traversing a meadow at the base of the mountains, the trail rises in elevation toward another meadow where the narrow Northfork Sayles Canyon briefly opens.

![Golden grass meadow leads to forested hillsides with a rock outcropping in the middle of the frame]({{ 'assets/images/2024-bud-love-3.jpg' | relative_url }})

![Sloping rocky hillsides with red layers of rock line a canyon with conifer trees scattered]({{ 'assets/images/2024-bud-love-2.jpg' | relative_url }})

![Snow on the ground as a fence marks Wildlife habitat management area boundary and Please keep gate closed]({{ 'assets/images/2024-bud-love-4.jpg' | relative_url }})

![A trail on the right side of frame through a grassy meadow with conifer trees lining a canyon on the right]({{ 'assets/images/2024-bud-love-5.jpg' | relative_url }})

I always prefer a loop hike to an out-and-back if I can manage it, and I did so on this occasion. But it turned out my persistence in that plan was somewhat misguided, as the combination of two sections of downed timber due to wildfire, along with snow and ice and lack of discernible trail made for a longer duration and more difficult hike than I had planned.

![Multiple downed trees with snow on the ground with young ponderosa pine growing densely]({{ 'assets/images/2024-bud-love-11.jpg' | relative_url }}#full)

![A small, white rabbit's head pokes from underneath a downed log with ponderosa pine near]({{ 'assets/images/2024-bud-love-8.jpg' | relative_url }})

I didn't see much wildlife, apart from a snowshoe hare, mule deer, squirrels, several species of birds, and — curiously — a green butterfly (*Clouded Sulphur*). 

I did observe several fresh tracks in the snow, including elk, deer, and cougar, along with the remains of several deer and elk, one skull of which someone had hung from a tree near the trail.

![A skull hangs from a tree with a grassy field and rock outcropping in the blurred background]({{ 'assets/images/2024-bud-love-12.jpg' | relative_url }})

![A skull in the yellowed grass with blurred downed trees and downed timber in the background]({{ 'assets/images/2024-bud-love-9.jpg' | relative_url }})

![A bright green butterfly on a rock with fir needles scattered]({{ 'assets/images/2024-bud-love-13.jpg' | relative_url }}#float)

As I returned to the parking area, mine was the only vehicle in sight. I dodged a mule deer heading out of the wildlife area and drove the 15 minutes back to my parents' house.

I will definitely return to this area of the Bighorns. But I think I'll skip the blowdown next time.

![A weathered sign reads Keno Creek pointing to the right, Firebox Park pointing to the left, and middle rock creek pointing to the right with snowy trails leading between trees]({{ 'assets/images/2024-bud-love-7.jpg' | relative_url }})

![An angled outcropping of rock with trees growing from the top and brush in the foreground]({{ 'assets/images/2024-bud-love-10.jpg' | relative_url }})

![A bright green butterfly on a rock with fir needles scattered]({{ 'assets/images/2024-bud-love-1.jpg' | relative_url }})

## Track

- **Distance:** 8.12 miles
- **Ascent:** 2,706 ft
- **Max elevation:** 7,745 ft

<div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([44.40764, -106.91677], 13)   
    var budTrack = {% include data/2024/2024-bud-love.html %} 

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

        L.geoJSON(budTrack, {color: '{{ site.data.maptiles.color }}'}).addTo(map);
</script>