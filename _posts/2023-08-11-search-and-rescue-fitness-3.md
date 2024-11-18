---
layout: post
title: "Search and rescue: third fitness assessment"
date: 2023-08-11
description: "Last year, I wrote about our SAR team's annual fitness assessment. With temperatures expecting to exceed 100º in the Northwest next week, I decided to check it off the list today."
image: assets/images/sar/2023-fitness-1.jpg
categories: [SAR]
tags: [search and rescue]
---

{% include leaflet.html %}

Last year, I wrote about my search and rescue team's required [annual fitness assessment]({{ '/search-and-rescue-fitness' | relative_url }}). Since I completed the required hike in September of last year, technically I didn't need to worry about it until the end of next month. But with temperatures climbing above 100º next week, and uncertainty about how long those high temps would last,[^1] I decided to check it off the list today.

[^1]: Turns out, those super hot temperatures won't last all that long. As I write this, it looks like temps will drop from 105º early in the week down the the 70s by next weekend 😌.

I chose from among the approved routes the [Cast Creek trail](https://www.fs.usda.gov/recarea/mthood/recreation/hiking/recarea/?recid=53350&actid=50), which was the venue for my training cohort's initial fitness assessment when I joined in 2021. The trail is on the road to [Ramona Falls Trailhead](https://www.fs.usda.gov/recarea/mthood/recarea/?recid=53600),  in the Mount Hood Wilderness area at the base of the mountain.

![A road through the forest with the blue profile of Mount Hood rising in the background]({{ 'assets/images/sar/2023-fitness-1.jpg' | relative_url }}#full)

It's a beautiful hike, the required portion of which gains nearly 2000' in just a couple miles. It is steep, but it isn't exposed (especially compared to Green Canyon, which I hiked for the fitness test last year). This is how the Forest Service describes the trail:

> It is a steady climb with numerous switchbacks going through a forested Westside Cascade mountainside. While it is a steady climb, there are not steeply exposed side slopes.

Accurate!

![A snarled, downed tree with aged roots suspended near a trail, with a blanket of trees in the background]({{ 'assets/images/sar/2023-fitness-2.jpg' | relative_url }})

The fitness test is timed (we're required to complete this route in 2–2.5 hours), so this isn't a sight-seeing or relaxing adventure. But it's still nice to be hiking at the base of Oregon's iconic volcano, and this trail is lined with beautiful hemlocks, Doug firs, and cedars, with a striking understory and ground cover along much of the trail.

![Multiple trees along the trail with ferns and other bright green ground cover and downed wood along a trail]({{ 'assets/images/sar/2023-fitness-3.jpg' | relative_url }})

![Tall trees line a trail with green ground cover and downed wood underneath]({{ 'assets/images/sar/2023-fitness-4.jpg' | relative_url }}#float)

It's a weekday, and I saw only four other people on the trail. This isn't among the most popular trails near Mt. Hood, which is great if you're looking to knock out a timed fitness assessment in the morning.

I didn't know about this trail before joining search and rescue, and consequently haven't hiked it outside the context of a fitness assessment. Which is a shame, because a review of online photos shows some epic views of the mountain from various points. I think I'll need to head up here sometime when I'm not in a hurry.

This is going to be a hectic search and rescue weekend! I completed the fitness test today, I'm volunteering to be a subject for our K9 team training tomorrow, and we have a full-team rope training on Sunday (during which it is forecasted to be 101º 🥵). And that assumes we won't have an actual mission, which is likely. It's a SAR summer once again.

## Track

- **Distance:** 6.21 miles
-  **Ascent:** 1,746 ft
-  **Time:** 1h 51m

 <div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([45.38244, -121.85520], 14)    
    var fitnessFeature = {% include data/2023/2023-fitness-assessment.html %}

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

    L.geoJSON(fitnessFeature, {color: '{{ site.data.maptiles.color }}'}).addTo(map);
</script>
