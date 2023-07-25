---
layout: post
title: "Wyoming part two: The Bighorns"
date: 2023-07-20
description: "Following my hike in the Winds, I drove back toward Buffalo, with a stop for a hike in the Cloud Peak Wilderness of the Bighorn Mountains."
image: assets/images/2023-wyoming-bighorn-1.jpg
categories: [travel]
tags: [Wyoming, travel]
---

{% include leaflet.html %}

![An alpine lake lined with trees with a large mountain peak in the background with snow capping the mountain]({{ 'assets/images/2023-wyoming-bighorn-1.jpg' | relative_url }}#full)

## To the Bighorns

I planned my hiking for the middle of the week, bookended by my time with my parents in Buffalo. So on the way back from Lander, I planned what I thought would be an easy trek in the Cloud Peak Wilderness of the Bighorn Mountains.

I spent time in the Bighorns in my youth, mostly traveling through to other places, but I attended summer camps in the Bighorns, went sledding, and visited the ancient Native American spiritual site, the [Medicine Wheel](https://www.wyohistory.org/encyclopedia/medicine-wheel).

This time, I planned a 10-mile hike on a trail [the guidebook](https://www.rei.com/product/197756/falconguides-hiking-wyomings-cloud-peak-wilderness) described as "moderate". In particular, the guidebook indicated that route finding was "no problem", and visitation "very heavy".[^1]

[^1]: To be fair, although the hike summary text describes route finding as "no problem," the full text does include the following: "After the crossing [of Duck Creek], the path turns westward beside the stream, then crosses a wooded flat where a maze of old jeep trails makes route-finding a challenge."

This sounded great after my hike in the Winds the day before and a 3-hour drive back to the Bighorns. And I didn't mind the idea of a heavily trafficked trail, given I was reorienting myself to the area. 

![An alpine stream with several branches lined with trees with mountain peaks in the background]({{ 'assets/images/2023-wyoming-bighorn-2.jpg' | relative_url }})

Frankly, while visitation to the trail was heavier than the Wind River trail, it wasn't "very heavy". I saw 5 people on the trail in the 10 miles I hiked (it was Wednesday, so the weekends are probably much busier).

![Two logs span a branch of a mountain stream with grass and willows lining the stream, trees in the background, and a large mountain peak in the background]({{ 'assets/images/2023-wyoming-bighorn-4.jpg' | relative_url }}#float)

I wouldn't say route finding is "no problem". There are sections of this loop that are broken up by meadows, where the trail is indiscernible and must be found on the other side. There are several stream crossings (at least 5) where the trail is broken and must be relocated. And there is one section where the prominent trail leads to a different road than the parking lot from which most people enter the trail, with no signs or obvious indicators of the loop trail. I was thankful for my GPS on this one, although I did have a paper map and my compass as well.

That said, this loop is beautiful, passing as it does multiple alpine lakes flanked by wildflowers, with views of prominent Bighorn peaks emerging from pristine mountain stream valleys.

![An alpine lake lined with trees with a large mountain peak in the background with snow capping the mountain]({{ 'assets/images/2023-wyoming-bighorn-3.jpg' | relative_url }})

### Sherd Lake Loop Trail

- **Distance:** 10.6 miles
- **Ascent:** 1,631 ft
- **Max elevation:** 9,403 ft

 <div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([44.26163, -107.00677], 12)    
    var bighornTrack = {% include data/2023/bighorns-sherd-lake-71923.html %}

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: 19
        }).addTo(map);

    L.geoJSON(bighornTrack).addTo(map);
</script>


## Back to Buffalo
The Sherd Lake Loop is situated in the Bighorns about 30 minutes from my parents' house in Buffalo, so it was a quick trip down the mountain and back to small-town charms. Thursday through the weekend, Buffalo transforms into the fictional Wyoming town of Durant for [Longmire Days](https://www.longmiredays.com/), a celebration of author Craig Johnson's <cite>Walt Longmire Mysteries</cite> book series and resulting [A&E and Netflix TV series](https://en.wikipedia.org/wiki/Longmire_(TV_series)). I fly out on Saturday, but my mom and I will be partaking in the Buffalo/Durant festivities on Thursday and Friday.
