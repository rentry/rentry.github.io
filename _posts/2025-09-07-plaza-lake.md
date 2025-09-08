---
layout: post
title: "How to be alone in the woods: a walk to Plaza Lake"
date: 2025-09-07
description: "I've been asked why I haven't hiked many of the most popular trails on Mt. Hood in the 25 years I've lived in Oregon. The question contains its own answer: popular means crowded."
image: assets/images/2025-plaza-lake-11.jpg
categories: [Oregon]
tags: [Oregon, hike]
---

{% include leaflet.html %}

![A forest of trees with mist and sun shining sporadically on trees]({{ 'assets/images/2025-plaza-lake-16.jpg' | relative_url }}#full)

I returned today to a trail I hiked a portion of with my dog Teddy [back in June]({{ '/june-snow/#tumala-mountain' | relative_url }}). I hadn't spent much time in this area until recently. It lies between two more highly trafficked areas, including the bustling Salmon-Huckleberry Wilderness at the foot of Mt. Hood to the north, and the Roaring River Wilderness and Clackamas River to the south.

This is the Tumala Mountain region, [the history and significance of which is wonderfully described by Tom Kloster](https://wyeastblog.org/2009/01/02/unfinished-work-at-tumala/) in his exceptional Wy'East Blog.

![A tan pickup truck parked in a rocky opening with trees around]({{ 'assets/images/2025-plaza-lake-1.jpg' | relative_url }})

![A yellow, floral-looking mushroom on the ground with twigs and plants]({{ 'assets/images/2025-plaza-lake-2.jpg' | relative_url }})

I've spent _a lot_ of time in the Clackamas River watershed, having served many years ago as the president of the Friends of the Clackamas River, a feisty (and now defunct) nonprofit that advocated for the protection of the river and its tributaries.

But for whatever reason, these trails between the designated wilderness areas always escaped me.

![Looking from a rock ledge with tree covered hills and valleys]({{ 'assets/images/2025-plaza-lake-3.jpg' | relative_url }})

![Mist among large trees with green ground cover]({{ 'assets/images/2025-plaza-lake-4.jpg' | relative_url }})

Actually, I do know why I haven't spent much time here. 

An adjacent area is designated as an OHV (Off-highway Vehicle) park, attracting a cacophony of engine noise, aggression, and firearms. It is unpleasant to say the least, and would be more reasonable if the OHVs and shooting were confined to this area, but in the Clackamas Basin, they certainly are not.

![A pink fireweed with trees and shrubs along a dirt road]({{ 'assets/images/2025-plaza-lake-13.jpg' | relative_url }})

![A red Indian Paintbrush among leaves and branches]({{ 'assets/images/2025-plaza-lake-5.jpg' | relative_url }})

All that said, for most of my hike today, I neither heard nor thought about OHVs. I encountered some – along with a few pickup trucks – on a short section of the walk along Forest Road 4610 (AKA Abbot Road). 

Those were the only people I saw on the entire walk.

![Orange berries of a Mountain Ash with green leaves]({{ 'assets/images/2025-plaza-lake-7.jpg' | relative_url }})

![Wooden signs attached to a tree, one reading Salmon Huckleberry Wilderness Mount Hood National Forest and the other reading U.S. Forest Service Department of Agriculture]({{ 'assets/images/2025-plaza-lake-8.jpg' | relative_url }})

![A sign on a tree reading Plaza Lake TR Number 788]({{ 'assets/images/2025-plaza-lake-11.jpg' | relative_url }})

Occasionally it comes up, as often happened during my time on the search and rescue team, that I have not hiked on many of the most popular trails on Mt. Hood. It's true, largely because I prefer to hike in solitude. I rarely find the views worth negotiating crowded trails.

![A lake with logs in in the foreground of the lake with mist in the air and forest lining the shore]({{ 'assets/images/2025-plaza-lake-9.jpg' | relative_url }}#full)

![Shoes of a hiker on a log surrounded by green plants]({{ 'assets/images/2025-plaza-lake-10.jpg' | relative_url }})

![The red and white pointy seeds of a green Noble Fir cone broken apart on the ground]({{ 'assets/images/2025-plaza-lake-12.jpg' | relative_url }})

Which is why areas like this are so precious. I didn't see another person the entire hike on this trail – on a weekend, no less – excepting the brief diversion on the road. 

And that's just how I like it.

![A rocky trail with a drop off with forested hills in the background]({{ 'assets/images/2025-plaza-lake-6.jpg' | relative_url }})

![A rock slide on a downhill leading to a forest and hills in the background]({{ 'assets/images/2025-plaza-lake-14.jpg' | relative_url }})

![A still lake with trees on the far shore and logs in the foreground]({{ 'assets/images/2025-plaza-lake-15.jpg' | relative_url }})

* **Distance:** 9.96 miles
* **Ascent:** 3,486 ft
* **Max Elevation:** 4,551 ft

<!-- Map -->

<div class="map" id="map"></div>

<script>

var map = L.map('map').setView([45.2319295, -122.0246859], 13);
var nastyRock = {% include data/2025/2025-plaza-lake.html %} 

L.tileLayer('{{ site.data.maptiles.tiles }}', {
  attribution: '{{ site.data.maptiles.attribution }}',
  subdomains: 'abcd',
  maxZoom: {{ site.data.maptiles.max-zoom }}
}).addTo(map);

L.geoJSON(nastyRock, {color: '{{ site.data.maptiles.color }}'}).addTo(map);

</script>