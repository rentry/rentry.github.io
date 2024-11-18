---
layout: post
title: "SAR fitness assessment (and huckleberries)"
date: 2024-07-27
description: "It's been relatively cool this past week, so I decided to head out and complete my annual search and rescue fitness assessment. The assessment is a timed effort, but I couldn't resist collecting a few wild huckleberries along the way."
image: assets/images/2024-fitness-3.jpg
categories: [SAR]
tags: [search and rescue]
---

{% include leaflet.html %}

It's been relatively cool in the Pacific Northwest since I returned from [my trip to Wyoming]({{ "/back-to-wyoming-1" | relative_url }}) (although the air is once again smoky due to [massive Oregon wildfires](https://katu.com/news/local/oregon-passes-one-million-acres-burned-nearly-half-of-all-us-resources-dedicated-to-nw-wildfires-washington-pacific-northwest)), so I thought I would take advantage by getting my annual search and rescue fitness assessment out of the way.

![A hiking trail in the foreground and left side of frame with conifer trees, downed wood, and ferns and green plants along the ground]({{ "assets/images/2024-fitness-3.jpg" | relative_url }}#full)

I returned to Cast Creek trail where I completed [last year's assessment]({{ "/search-and-rescue-fitness-3" | relative_url }}), along with my initial assessment when I joined the team in 2021.

It was an uneventful walk, as I saw only one other hiker on the trail. But I was excited to see several undisturbed red huckleberries (_Vaccinium parvifolium_) along the way, and consequently took a little extra time to stop and harvest a handful.

![A bright red berry on a thin green leaved branch with the ground and other green, oxalis plants in the background]({{ "assets/images/2024-fitness-1.jpg" | relative_url }})

![Multiple red berries on thin green branches and leaves, with trees out of focus in the background]({{ "assets/images/2024-fitness-2.jpg" | relative_url }})

We can complete our fitness assessment any time between 6 months and 12 months after our last, so I'll likely move next year's assessment to the spring to avoid the likely heat and wildfire smoke this time of year.

## Track

- **Distance:** 6.02 miles
-  **Ascent:** 1,407 ft
-  **Time:** 1h 57m

 <div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([45.38244, -121.85520], 14)    
    var fitnessFeature = {% include data/2024/2024-fitness.html %}

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

    L.geoJSON(fitnessFeature, {color: '{{ site.data.maptiles.color }}'}).addTo(map);
</script>
