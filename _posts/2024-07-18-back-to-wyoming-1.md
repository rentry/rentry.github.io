---
layout: post
title: "Back to Wyoming: The Medicine Wheel and Bighorn Canyon"
date: 2024-07-18
description: "I returned to Wyoming to visit my parents and attend the Longmire Days festival with my mother. Prior to the scheduled events, I once again took a trip to some of my favorite places in the state."
image: assets/images/2024-wyoming-12.jpg
categories: [travel]
tags: [Wyoming, travel]
---

{% include leaflet.html %}

![The medicine wheel, a circular spiral of light colored rock with fence posts surrounding it, with green mountain slopes in the background, and a blue sky with a few white clouds overhead]({{ 'assets/images/2024-wyoming-4.jpg' | relative_url }}#full)

I'm back in Wyoming, visiting my parents at a time that once again aligns with [Longmire Days](https://www.longmiredays.com/), the event that celebrates local author Craig Johnson's <cite>New York Times</cite> bestselling mystery series and accompanying TV show.

Last year, I decided to take a few days by myself during my weeklong stay to explore some places that either [I had never been to]({{ '/wyoming-the-winds/' | relative_url }}) when I was growing up, or in which [I hadn't spent as much time]({{ '/wyoming-the-bighorns/' | relative_url }}) as I would have liked.

![Green mountain slopes lined with evergreen trees with rocks in the foreground and blue sky with a line of white clouds above]({{ 'assets/images/2024-wyoming-1.jpg' | relative_url }}#float)

This year, I wanted to spend more time with my parents, and revisit some of the places I especially loved as a child. To that end, after two days getting settled and helping my parents with some projects around the house, my mom and I loaded up my rental truck and headed west from Buffalo over the Bighorn Mountains.

## The Medicine Wheel

![A rope with a bundle of red, yellow, and blue ribbon tied to it]({{ 'assets/images/2024-wyoming-2.jpg' | relative_url }}#float)
In my recollection, I visited the sacred and prehistoric [Medicine Wheel/Medicine Mountain National Historic Landmark](https://www.wyohistory.org/encyclopedia/medicine-wheel) in the Bighorn Mountains only once as a child, perhaps when I was 8 or 9 years old. At the time, one could drive directly to its rickety (and rather ugly), protective chain link fence.[^1] Now, the parking area is 1.5 miles from the Medicine Wheel, necessitating a modest trek to the site for those who are able (the Forest Service allows vehicular transport for those who are unable to walk the 3-mile round trip). 

The Medicine Wheel is now surrounded and protected by wood posts with white rope, onto which are tied talismans and cultural and spiritual artifacts to honor the sacred site.

The Medicine Wheel is somewhat difficult to describe, as [its origin and exact purpose are unknown](https://en.wikipedia.org/wiki/Medicine_Wheel/Medicine_Mountain_National_Historic_Landmark#Cultural_Purposes).[^2] That said, the site is sacred to many nations, and its location, at the convergence of ancient trails, has indicated it's part of indigenous activity in the Bighorn Mountains that dates back [at least 10,000 years](https://en.wikipedia.org/wiki/Medicine_Wheel/Medicine_Mountain_National_Historic_Landmark#cite_note-7).

![A white feather with wild flowers and grasses surrounding, and blurry trees in the background]({{ 'assets/images/2024-wyoming-3.jpg' | relative_url }})

![A white rope with a bundle of sage wrapped in leather with grass and rock blurred in the background]({{ 'assets/images/2024-wyoming-5.jpg' | relative_url }})

![A meadow full of wildflowers, with red, blue, and pink flowers and green grasses]({{ 'assets/images/2024-wyoming-6.jpg' | relative_url }}#float)
After my mom and I walked along the dirt road among wildflowers to the site, we spent about 20 minutes traversing the perimeter of the wheel and taking in its spiritual significance before descending the trail and making our way west toward Lovell, Wyoming.

![A deep canyon with orange, red, and yellow rock, with sage in the foreground, and a green river meandering at the bottom of the canyon]({{ 'assets/images/2024-wyoming-12.jpg' | relative_url }}#full)

## Bighorn Canyon

When I was planning this year's trip to Wyoming, I had one destination in mind that I absolutely wanted to revisit: the [Bighorn Canyon National Recreation Area](https://www.nps.gov/bica/index.htm).

This epic canyon is only an hour from my hometown of Powell, Wyoming, and I had visited it several times as a kid. We even had school field trips to the canyon and nearby Pryor Mountains.

The Bighorn River, which formed the canyon, is actually the same north-flowing body of water referred to as the Wind River in the central region of the state, flowing as it does from the [Wind River Mountain Range]({{ '/wyoming-the-winds/' | relative_url }}). The river's name changes as it emerges from the Wind River Canyon, just south of Thermopolis, Wyoming.

![A deep rocky canyon with multiple colors of rock, dotted with desert shrubs, with a winding green river at the bottom of the canyon]({{ 'assets/images/2024-wyoming-7.jpg' | relative_url }})

The canyon is sandwiched between the Pryor Mountains to the west and the Bighorn Mountains to the east, the heights of which accentuate the seemingly impossible, vertiginous canyon walls.

![A rock cairn of light-colored rock sits atop a light-colored rock slab]({{ 'assets/images/2024-wyoming-8.jpg' | relative_url }}#float)
Although in my youth I had spent some time on the river and along the sheer canyon edge—not to mention the nearby Pryor Mountains—I've long wanted to return and explore some of the areas along the canyon that I hadn't visited. 

Along with its eye-popping views, the canyon is home to wild horses and bighorn sheep, among other fauna. Although I didn't see the elusive sheep, I did catch a glimpse of a small herd of wild mustangs in the early morning hours of my second day exploring the canyon (sadly, I didn't get a serviceable photo).

![A deep canyon carves through desert rock with yellow, orange, and tan rock, with the ground on each side dotted with desert shrubs]({{ 'assets/images/2024-wyoming-10.jpg' | relative_url }})

![A deep canyon with multi-colored rock spires and a green river flowing at the bottom]({{ 'assets/images/2024-wyoming-11.jpg' | relative_url }})

There aren't many long or contiguous trails in the area, but there are several short hikes, three of which I traversed, and one of which leads to the [abandoned Hillsboro Ranch](https://www.nps.gov/bica/learn/historyculture/hillsboro.htm) with its ghost-town remnants from the early 1900s.

![A reddish-yellow-colored stone building with a door that extends below the ground level, with log roof framing]({{ 'assets/images/2024-wyoming-9.jpg' | relative_url }})

![An orange sun sets behind an old horse-drawn wagon and a rustic bunkhouse, with a silver Ram truck on the right side and trimmed grass in the foreground]({{ 'assets/images/2024-wyoming-15.jpg' | relative_url }}#full)

My mom and I split up for the evening so she could spend some time with her sisters in Powell, while I checked in to a rustic Airbnb in Lovell. It turns out the owners have for years been meticulously researching and cataloguing the wild horses in the nearby Pryor Mountains, contributing their efforts to the [Wild Mustang Center](http://www.pryormustangs.org/), based in Lovell.

![An old pioneer wagon sits among red bark chipped ground in front of a rustic building, with an orange sun setting the background]({{ 'assets/images/2024-wyoming-14.jpg' | relative_url }})

<div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([44.995, -108.1], 10)    

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: {{ site.data.maptiles.max-zoom }}
        }).addTo(map);

        L.marker([44.82661, -107.92186]).addTo(map)
        .bindPopup('Medicine Wheel')
        .openPopup();
        
        L.marker([45.101760,-108.194033]).addTo(map)
        .bindPopup('Bighorn Canyon National Recreation Area')
        .openPopup();
</script>

## In ~~Buffalo~~ Durant (again)

We're back in Buffalo just in time for its transformation into the fictional town of Durant for Longmire Days. This time, I'm staying through the weekend to enjoy the full schedule of events, returning to Oregon on Monday.

[Boy howdy](https://english.stackexchange.com/questions/603602/boy-howdy-where-did-this-expression-come-from-who-uses-it-and-what-does-it)!

![]({{ 'assets/images/2024-wyoming-13.jpg' | relative_url }})

[^1]: When my parents were young, the Medicine Wheel had no protective barrier at all. Thankfully this has since been remedied by the U.S. Forest Service, in partnership with indigenous nations.

[^2]: "Astronomer and solar scientist John Eddy noted several important star alignments involving the central and circumferential cairns. He suggested that the Bighorn Medicine Wheel was probably used by prehistoric Native Americans as an ancient astronomical observatory and calendar." –[wyohistory.org](https://www.wyohistory.org/encyclopedia/medicine-wheel)