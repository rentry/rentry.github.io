---
layout: post
title: "Wyoming part one: The Winds"
date: 2023-07-19
description: "After a few days in Buffalo, I traveled to Lander and hiked for the first time in the Wind River Range."
image: assets/images/2023-wyoming-wind-river-6.jpg
categories: [travel]
tags: [Wyoming, travel]
---

{% include leaflet.html %}

![Blue sky with scattered white clouds with snow-capped mountain peaks and conifer trees in the foreground]({{ 'assets/images/2023-wyoming-wind-river-6.jpg' | relative_url }}#full)

## To The Winds

When I planned my Wyoming trip, I knew I wanted to visit some places I had spent little or no time in growing up in the state. One of those places is the Wind River Range ("The Winds"), the iconic mountain range containing Wyoming's highest point, Gannett Peak. The Winds, and Lander itself, are world famous for being the longtime "classroom" and headquarters of [NOLS](https://www.nols.edu/en/), formerly known as the National Outdoor Leadership School.

I spent two days with my parents in Buffalo, and then drove the 3 hours and 40 minutes to Lander, Wyoming, at the base of the Winds.

The drive took me through some places I visited often in my youth, including "the world's largest mineral hot springs" in Thermopolis, and the beautiful Wind River Canyon.

![A river lined with mineral springs and a bronze domed building]({{ 'assets/images/2023-wyoming-thermopolis.jpg' | relative_url }})

<figcaption>Mineral hot springs in Thermopolis, Wyoming</figcaption>

Both Thermopolis (known in Wyoming as "Thermop") and the Wind River Canyon were places we mostly just drove through to get to other places, usually Casper, Riverton, or Lander. We traveled often to all of those places for cross country, track, and (more commonly) swim meets.

![A river winds through high canyon cliffs with a road and guardrail on one side]({{ 'assets/images/2023-wyoming-wind-river-canyon.jpg' | relative_url }})

<figcaption>Wind River Canyon</figcaption>

## Lander cabin

![Sunset light illuminates in orange clouds over open land with a bluff]({{ 'assets/images/2023-wyoming-lander-1.jpg' | relative_url }}#float)

I rented [an airbnb](https://www.airbnb.com/rooms/889001008883010391) just outside Lander. I realized when driving the road to the rented cabin that I had run up that road during a high school cross country meet in 1999 or so. I remember that meet well, because it was around 10º and snowing sideways.

![A small log cabin with illuminated orange clouds at sunset overhead]({{ 'assets/images/2023-wyoming-lander-2.jpg' | relative_url }})

## In The Winds

![Red flowers, Indian Paintbrush, grow between granite rocks]({{ 'assets/images/2023-wyoming-wind-river-3.jpg' | relative_url }}#float)

I had identified a couple hiking options in the Winds, but having never hiked there, I wasn't sure what I was getting into. 

I decided to hike the 15-mile Stough Creek Basin Trail from Worthen Meadow. Given the majority of the hike is at or above 10,000 feet of elevation, I knew my Oregon-conditioned lungs might have trouble with the prodigious height of this hike, so I gave myself the option of doing just half of it.

![A wood-carved sign that reads Popo Agie Wilderness]({{ 'assets/images/2023-wyoming-wind-river-1.jpg' | relative_url }})

![A lake with snow-capped mountains surrounding]({{ 'assets/images/2023-wyoming-wind-river-4.jpg' | relative_url }})

In the end, I did the full hike, and ended up running into one of the Lander high school swimming coaches who remembered both me and my sister. His daughter competed in swimming against my sister in the 90s.

![Wind River Peak seen from a meadow with a trail through the middle]({{ 'assets/images/2023-wyoming-wind-river-5.jpg' | relative_url }}#full)

<figcaption>The trail ascends to a meadow revealing Wind River Peak</figcaption>

### Stough Creek Basin Trail

- **Distance:** 14.9 miles
- **Ascent:** 2,500 ft
- **Max elevation:** 10,565 ft

 <div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([42.68021, -108.96723], 13)    
    var windRiverTrack = {% include data/2023/wind-river-stough-creek-71823.html %}

        L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
        subdomains: 'abcd',
        maxZoom: 19
        }).addTo(map);

    L.geoJSON(windRiverTrack).addTo(map);
</script>

## To the Bighorn Mountains
After my day hike in the Winds, I packed up my gear, locked up the airbnb, and drove back toward Buffalo, with a plan to hike in the Cloud Peak Wilderness of the Bighorn Mountains on the way back.
