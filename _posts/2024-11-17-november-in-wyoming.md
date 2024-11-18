---
layout: post
title: "November in Wyoming: Grouse Mountain"
date: 2024-11-17
description: "I needed a change in routine, so I decided to return to Wyoming for a few weeks. With the November sun shining, I hiked the Grouse Mountain Trail in the Bighorn Mountains."
image: assets/images/2024-wyo-nov-4.jpg
categories: [travel]
tags: [Wyoming, travel]
---

{% include leaflet.html %}

![Snow in the foreground shadow of the mountain with sun shining on rocky, yellow and green mountain slopes with a blue sky and flat land in the distance]({{ 'assets/images/2024-wyo-nov-5.jpg' | relative_url }}#full)

![A tan pickup truck parked on a dirt road with a picnic table in the foreground near a pine tree]({{ 'assets/images/2024-wyo-nov-10.jpg' | relative_url }}#float)

I've had a string of difficult months in Oregon, so I decided to pack up and drive to Wyoming for a few weeks to break up the routine. Thankfully, my 2003 Ford Ranger managed the 16-hour, 1,000-mile drive better than I expected.

I've been in Wyoming for a week, but today was the first chance I had to get out into the mountains for a walk. I chose [Grouse Mountain Trail](https://www.fs.usda.gov/recarea/bighorn/recreation/hiking/recarea/?recid=79246&actid=50), thinking that if the weather was poor or the hike wasn't what I thought it would be, I could bail and walk the connected trail that extends from downtown Buffalo, Wyoming, all the to the trailhead of this hike.

![Pine trees line a partially frozen creek with the sun cresting a hill in the background]({{ 'assets/images/2024-wyo-nov-7.jpg' | relative_url }})

![Pine trees in the foreground with a canyon in the distance, with blue sky and wisps of white cloud]({{ 'assets/images/2024-wyo-nov-1.jpg' | relative_url }})

![A hand holds bright green lichen with a forest-lined trail blurry in the background]({{ 'assets/images/2024-wyo-nov-2.jpg' | relative_url }}#float)

I'm continually inspired by the proximity of mountain recreation within minutes of my parents' front door. I drove just 15 minutes to the start of this hike, and I saw only one other person the during the walk.

Setting out from the Mosier Gulch day-use area, I walked a two-track road to the trailhead, taking a short spur to the "ice caves" (marked on my map), essentially a massive aggregation of large boulders with wide gaps.

The hike itself traverses the eponymous mountain, winding in and out of snowy pine forest, ultimately cresting a bluff to reveal some of the higher peaks of the Cloud Peak Wilderness.

![Grasses emerge from a snowy meadow in the foreground, with forested hills in the background leading to rocky peaks with a road on the left side of the frame]({{ 'assets/images/2024-wyo-nov-6.jpg' | relative_url }}#full)

I'll likely only be in Wyoming for a few weeks, so I hope to get up into the Bighorns a few more times before winter really sets in.

![Snow covers the ground in the shadow of the mountain while sun shines on a snowless hillside in the background]({{ 'assets/images/2024-wyo-nov-3.jpg' | relative_url }})

![A weathered wood sign reads Grouse Mountain Trail with rocks surrounding the post with a sign on the other side of the trail that reads Trail 205]({{ 'assets/images/2024-wyo-nov-8.jpg' | relative_url }})

![Aspen trees line a small bog with large rocks scattered throughout]({{ 'assets/images/2024-wyo-nov-9.jpg' | relative_url }})

## Track

- **Distance:** 6.77 miles
- **Ascent:** 1,261 ft
- **Max elevation:** 6,890 ft

<div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([44.326404, -106.828193], 14)   
    var grouseTrack = {% include data/2024/2024-grouse.html %} 

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

        L.geoJSON(grouseTrack, {color: '{{ site.data.maptiles.color }}'}).addTo(map);
</script>