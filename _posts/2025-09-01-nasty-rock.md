---
layout: post
title: "Nasty Rock...but <i>not</i> Not Nasty Rock"
date: 2025-09-01
description: "I've been doing trail work just about every weekend for a couple months, so on this long weekend I decided to get out for hike an unmaintained trail to the source of the Molalla River."
image: assets/images/2025-nasty-rock-5.jpg
categories: [Oregon]
tags: [Oregon, hike]
---

{% include leaflet.html %}

![Looking from a rock ledge with tree covered hills and valleys]({{ 'assets/images/2025-nasty-rock-5.jpg' | relative_url }}#full)

I've continued to volunteer with Trailkeepers of Oregon just about every weekend for a couple months. This weekend was no different, as I joined a trail party in the Table Rock Wilderness on Saturday. But with the long holiday weekend, I decided to hike an obscure trail at the headwaters of the Molalla River south of Table Rock, bordering the Opal Creek Wilderness.

It's the unmarked and unmaintained trail to Nasty Rock (and Not Nasty Rock...more on that in a minute). 

![A truck parked by itself on a gravel road lined with trees and brush]({{ 'assets/images/2025-nasty-rock-4.jpg' | relative_url }})

![Bright red Indian Paintbrush among green leaves]({{ 'assets/images/2025-nasty-rock-3.jpg' | relative_url }})

![Bright red Indian Paintbrush flowers among green leaves and brown ground]({{ 'assets/images/2025-nasty-rock-2.jpg' | relative_url }})

I actually visited the "trailhead" for this hike [back in June]({{ 'june-snow/#joyce-lake' | relative_url }}) but encountered deep snow and otherwise deemed the hike too exposed for a hike tethered to my dog Teddy. This time, Teddy stayed home and I decided to scout this little-used trail.

To call this is a "trail" is generous, however, especially now that I've been volunteering in trail maintenance. The trail is overgrown, exposed, difficult to identify at times, and littered with downed trees.

![Overgrown brush covers a trail that can barely be seen among the brush]({{ 'assets/images/2025-nasty-rock-10.jpg' | relative_url }})

![Angled logs from downed trees on a forested hillside]({{ 'assets/images/2025-nasty-rock-12.jpg' | relative_url }})

Despite the obstacles and poor footing, it is a beautiful, short hike along a ridge that both forms the headwaters of the Molalla River and the northern border of the [Opal Creek Wilderness](https://www.fs.usda.gov/r06/willamette/recreation/opal-creek-wilderness), the latter a magnificently gorgeous area that's unfortunately seen more than its fair share of wildfire in the last several years.

![Ridges and forest from a high point]({{ 'assets/images/2025-nasty-rock-7.jpg' | relative_url }})

![Looking at ridges, peaks, and valleys from a rocky ledge with trees around]({{ 'assets/images/2025-nasty-rock-6.jpg' | relative_url }}#full)

After scrambling to the top of the whimsically named Nasty Rock, I decided to try to push on toward the eccentrically indifferent-, hilariously labeled Not Nasty Rock.

![A sharp point rises from a ridge with trees in the foreground and along the slopes]({{ 'assets/images/2025-nasty-rock-11.jpg' | relative_url }})

![Several dead trees and snags twisted and branching]({{ 'assets/images/2025-nasty-rock-8.jpg' | relative_url }})

It turns out the trail effectively vanishes between the rocks, with the ridge between them heavily impacted by the 2020 Beachie Creek Fire. Much of this stretch is a continuous scramble, and I slid out at least three times, even while using trekking poles. A close inspection of the map showing the ridge between the two rocks replaces the trail with a line that, when sufficiently zoomed, simply reads `(difficult)`. 

<video class="full-vid" autoplay loop muted playsinline preload="true">
  <source src="{{ 'assets/video/2025-nasty-rock-difficult.mp4' | relative_url }}#full" type="video/mp4">
</video>

True! Given I was alone, I decided to turn back and save Not Nasty for another day.

I took it slow on the way back, stopping often to eat wild blueberries and admire some well-earned views on this short, "nasty" hike.

![A green leaved plant with red berries]({{ 'assets/images/2025-nasty-rock-9.jpg' | relative_url }})

![Blueberries growing on a bush with green leaves and dark red branches]({{ 'assets/images/2025-nasty-rock-13.jpg' | relative_url }})

<!-- Map -->

<div class="map" id="map"></div>

<script>

var map = L.map('map').setView([44.8994635, -122.2631348], 14);
var nastyRock = {% include data/2025/2025-nasty-rock.html %} 

L.tileLayer('{{ site.data.maptiles.tiles }}', {
  attribution: '{{ site.data.maptiles.attribution }}',
  subdomains: 'abcd',
  maxZoom: {{ site.data.maptiles.max-zoom }}
}).addTo(map);

L.geoJSON(nastyRock, {color: '{{ site.data.maptiles.color }}'}).addTo(map);

</script>