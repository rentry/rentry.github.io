---
layout: post
title: "Yep. Your Liquid variables will work in JavaScript"
date: 2019-03-06
description: "This is going to sound crazy, and it is. You can use your Jekyll (Liquid) variables in your Leaflet JavaScript. Wut."
categories: Jekyll
tags: [JavaScript, Jekyll, maps, Leaflet]
map-id: annies-cabin-map
map-var: anniesCabinMap
lat: 45.01916
long: -122.48906
zoom: 14
popup-title: "Map title"
popup-text: "When I visited"
---

This is crazy. There are so many mustaches ({ }) in Liquid _and_ JavaScript.

But it turns out, a bunch of smart people figured out which mustaches (_fine_, curly brackets or braces or whatever) belong to which bits of code. Consequently, you can _use Liquid variables in your JavaScript_.

I’ve alluded to this before, as smarter people than I (namely [Katy DeCorah](https://www.youtube.com/watch?v=s84wFRD8vfE)) have already demonstrated the flexibility of Jekyll + JS.

## DRY mapping

~~My last post demonstrated the need for a map to show walking trails.~~ (_I’ve since removed my posts related to walking locations after belatedly reviewing updated [Leave No Trace Guidance](https://lnt.org/new-social-media-guidance/)_.)

I prefer [Leaflet](https://leafletjs.com/) for this sort of thing, but I didn’t want to replicate the full script for each map instance. In other words, I wanted to remain faithful to the sacred **D**on’t **R**epeat **Y**ourself principle, and only add new code for new attributes.

So I abstracted the common code into a [Jekyll include](https://jekyllrb.com/docs/includes/), and I created front matter variables that allow me to control the latitude, longitude, zoom level, and pop-up text for each map instance.

Here’s what it looks like:

### Include (`map.html`)
{% raw %}
```html
<div class="map" id="{{ page.map-id }}"></div>

<script>
    var {{ page.map-var }}= L.map('{{ page.map-id }}').setView([{{ page.lat }}, {{ page.long }}], {{ page.zoom }});
    var marker = L.marker([{{ page.lat }}, {{ page.long }}]).addTo({{ page.map-var }});

    L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo({{ page.map-var }});

    marker.bindPopup("<strong>{{ page.popup-title }}</strong><br>{{ page.popup-text }}");

</script>
```
{% endraw %}

### Front matter
```yaml
---
layout: post
title: "Walking in the woods: Annie’s Cabin"
date: 2019-03-02
description: "I don’t often blog about walking in the woods. In the past, I posted such self-indulgent, albeit personally necessary, excursions to social media. But I no longer subscribe to most social media, so I’ll share my walks here, starting with a walk to Annie’s Cabin near Molalla, Oregon."
categories: walking
tags: [walk, hike, molalla corridor, blm]

map-id: annies-cabin-map
map-var: anniesCabinMap
lat: 45.01916
long: -122.48906
zoom: 14
popup-title: "Annie's Cabin"
popup-text: "Visited on March 2, 2019"
---
```

Finally, with the script and front matter in place, we simply drop the include where we want it to appear, in this form:

{% raw %}
```
{% include map.html %}
```
{% endraw %}

That’s it! Well, not really. You need to include the Leaflet scripts and styles and so on...just [consult the quick-start guide](https://leafletjs.com/examples/quick-start/) for that. 

Once you have Leaflet configured, just change your front matter variables based on each map instance. You’ll need to get creative if you have multiple maps per page, but you know what to do. 💪

If you don’t know what to do, it’s fine. We’ll get to it at some point. Take a walk in the woods in the meantime.

{% include map.html %}