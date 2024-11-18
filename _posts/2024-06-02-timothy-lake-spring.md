---
layout: post
title: "Spring camp: Timothy Lake"
date: 2024-06-02
description: "With campfire bans coming earlier every year, spring and fall are the best seasons for a full camping experience."
image: assets/images/2024-timothy-1.jpg
categories: [Oregon]
tags: [Oregon]
---

{% include leaflet.html %}

![A lake with moderate waves washing ashore framed by trees with the far tree-lined, lakeshore hills in the distance]({{ 'assets/images/2024-timothy-3.jpg' | relative_url }}#full)

Timothy Lake is, frankly, an odd place. It's an artificial lake surrounded by National Forest and wilderness near the base of Mt. Hood. Its eastern flank forms a segment of the renowned Pacific Crest Trail. The area's numerous lakeside campgrounds lack electricity, even though the lake is a hydroelectric "facility" owned and operated by Portland General Electric.

And yet, it is among my favorite places to camp in all of Oregon.

![A white petaled flower, western trillium, growing out of a dead and disintegrating log]({{ 'assets/images/2024-timothy-1.jpg' | relative_url }})
<figcaption>Western Trillium AKA "wake robin"</figcaption>

![A trail through the forest with a brown sign with yellow letters that reads Timothy Lake TR number 528, Pacific Crest TR 1/4, This trail is open to with a picture of hikers and a rider on a horse and closed to all other uses, with a U.S. Forest Service badge in the lower right corner]({{ 'assets/images/2024-timothy-4.jpg' | relative_url }})
<figcaption>The eastern segment of the Timothy Lake Trail intersects the Pacific Crest Trail.</figcaption>

![A small cabin among trees with a gravel driveway and a tan pickup truck with a turquoise kayak on top]({{ 'assets/images/2024-timothy-8.jpg' | relative_url }}#float)

I've camped at Timothy Lake several times, usually in the shoulder seasons. Spring and fall, while wildly unpredictable when it comes to weather (especially in the Cascade Mountains), still typically furnish the opportunity for campfires in the west. At Timothy, summer is particularly crowded, given the lake's enormous size and variety of aquatic recreation.

For this, my second camping trip of the spring season, my cousin and I rented a small cabin. As mentioned, the cabins lack electricity and consequently heat, but they are relatively comfortable.

![The front of a turquoise kayak out on a lake with the sun shimmering off the lake surface and hills in the distance]({{ 'assets/images/2024-timothy-2.jpg' | relative_url }}#float)
After arriving and setting up camp in the late afternoon on a gorgeous Friday, I shouldered my kayak for the short walk from the cabin to the lakeshore, paddling out on the cold, calm water.

Thankfully, motorized boats are limited to 10mph on Timothy Lake, mercifully limiting their wake. As a result, non-motorized pilots can breathe easier about staying upright.

## Timothy Lake Loop

The next morning, my cousin and I embarked on the 13-mile loop around the lake, adding spurs to the brilliantly hued Little Crater Lake and aptly named Meditation Point (both offer camping, although the latter is hike-in with far fewer amenities).

![A small, emerald colored lake with a wooden lookout at the far end surrounded with trees and tall meadow grass, with logs visible at the bottom of the lake's clear water, with a partly cloudy sky]({{ 'assets/images/2024-timothy-7.jpg' | relative_url }})

Little Crater Lake is almost otherworldly in color and clarity. Vastly smaller than its National Park namesake, it is nonetheless an amazing sight to behold, with its glass-like transparency and saturated hue, ranging from deep emerald to vibrant teal, depending on the light.

![A closer view of an emerald colored lake with a wooden lookout at the far end surrounded with trees and tall meadow grass, with logs visible at the bottom of the lake's clear water]({{ 'assets/images/2024-timothy-6.jpg' | relative_url }}#full)
<figcaption>Little Crater Lake</figcaption>

![A bright purple wildflower with six petals and white stamen, with bright green incised leaves]({{ 'assets/images/2024-timothy-9.jpg' | relative_url }})
<figcaption>Oregon anemone is ubiquitous this time of year.</figcaption>

![Purple flowers and two yellow flowers among a riot of green grass and leaves]({{ 'assets/images/2024-timothy-11.jpg' | relative_url }}#float)
An added bonus of spring camping and hiking is the proliferation of mountain wildflowers, of which we saw several varieties. Early bloomers like [Western Trillium](https://www.fs.usda.gov/wildflowers/plant-of-the-week/trillium_ovatum_ovatum.shtml) were joined by [Shooting Star](https://www.pnwflowers.com/flower/Dodecatheon-hendersonii) and the ubiquitous [Oregon anemone](https://en.wikipedia.org/wiki/Anemonoides_oregana).

We managed to elude rain for the entire trip, encountering a heavy downpour only after packing up and starting the drive back home.

As we head into yet another summer of climate anxiety and supercharged wildfire threats, I'll look back fondly on spring camp, and look forward to the fall.  

![A man crossing his arms wearing a backpack, yellow-orange hat, gray shirt, brown pants, and hiking boots stands on a stump among trees in a forest]({{ 'assets/images/2024-timothy-5.jpg' | relative_url }})

![A cloudy sky with green hills in the distance lining a lake surface with choppy waves and a gravel shore in the foreground]({{ 'assets/images/2024-timothy-10.jpg' | relative_url }}#full)

### Timothy Lake Loop (with spurs)

- **Distance:** 14.72 miles
- **Ascent:** 463 ft
- **Max elevation:** 3,343 ft

 <div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([45.119477, -121.788289], 12)    
    var timTrack = {% include data/2024/timothy-lake-6124.html %}

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

    L.geoJSON(timTrack, {color: '{{ site.data.maptiles.color }}'}).addTo(map);
</script>
