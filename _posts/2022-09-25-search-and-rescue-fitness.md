---
layout: post
title: "Search and rescue: fitness (re)assessment"
date: 2022-09-25
description: "Every year, search and rescue members must complete a pre-approved route to confirm their physical fitness. The routes gain between 2000 and 3000 feet, all in around 5 miles. I went out this morning to check the box"
image: assets/images/sar/2022-fitness-3.jpg
categories: [SAR]
tags: [search and rescue]
---

{% include leaflet.html %}

I've already written an [overview of the requirements]({{ '/joining-search-and-rescue-part-1' | relative_url }}) to join our search and rescue team. Among them, I noted that members are required to complete a fitness assessment, essentially a timed hike on a predetermined route.

The fitness assessment is described in our training manual this way:

> **CSAR Physical Assessment Philosophy:** All CSAR individuals are functional athletes – required to move long distances over terrain, under heavy load, and maintain the alertness and mental capacity to perform technical tasks to assist subjects in potentially dangerous situations to extricate them safely to base.

> **Initial Physical Assessment:** All trainees will be required to undergo an **arduous** physical assessment, as defined by CSAR Policies, to verify their ability to meet the strenuous demands of SAR Operations.

But that's not all. The fitness policy also requires annual _re-assessments_, stating that "Re-assessments are required to be a minimum of six (6) months apart, and may not exceed 12 months between re-assessments."

Since I'm one year into my search and rescue service, it was time to load up and head to the trail.

![Green conifer trees of hemlock, cedar, and douglas fir on a hillside, with green ferns and oxalis in the foreground]({{ 'assets/images/sar/2022-fitness-2.jpg' | relative_url }})

## Routes

Our leadership team has approved 6 routes that meet the criteria for the fitness assessment. Since I'm a type 2 ground searcher ("type 2" describes a specific grid-type ground search method), mine falls into the "arduous" route requirement.

The routes are geographically distributed in the area, as is our team, but most are in the Cascade Mountains, up near Mt. Hood. Most of them are around 5 miles, with elevation gain between 2000 and 3000 feet, and must be completed within 2–2.5 hours. They aren't easy, for sure, but they also take less time than many searches.

![Green conifer trees of hemlock, cedar, and douglas fir on a hillside, with green ferns and oxalis in the foreground]({{ 'assets/images/sar/2022-fitness-1.jpg' | relative_url }}#full)

I chose a route in the Salmon-Huckleberry Wilderness that I've wanted to hike for a while (the last time I tried, it was covered in ice and not particularly safe). It's around 4.5 miles with 2000 feet of elevation gain.

![A trail heading upwards between conifer and deciduous green trees with a sign that reads Salmon Huckleberry Wilderness Mount Hood National Forest]({{ 'assets/images/sar/2022-fitness-3.jpg' | relative_url }})

This particular trail is so steep in parts that my feet slid out from underneath me twice. I saw evidence of where the side of the trail, beyond which is often a precipitous grade, had clearly given out under a hiker's step.  It's probably a trail that would best be traversed with company, but I needed to get this requirement checked off, so I went solo.

Eventually, I reached the waypoint indicating the top of the ascent, turned around, and later submitted my GPS track to the leadership team. Not a bad way to spend a September Sunday morning.

![An overlook at the top of the route, with bright green shrubs in the foreground, dark green conifers in the distance, and blue, tree-covered hills on the horizon]({{ 'assets/images/sar/2022-fitness-4.jpg' | relative_url }}#full)

## Track

Here's the track, if you ever want to hike this yourself. You can do a big loop here if you continue along the ridge. I've hiked up from the other side (Cool Creek trail) – an equally, if not more, arduous trail than this one – to spend a couple nights at the Devil's Peak fire lookout. It's a beautiful area to spend some time. 

 <div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([45.283043379694874, -121.94074901318209], 14)    
    var fitnessFeature = {% include data/2022/sar-map-data.html %}

        L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
        subdomains: 'abcd',
        maxZoom: 19
        }).addTo(map);

    L.geoJSON(fitnessFeature).addTo(map);
</script>
