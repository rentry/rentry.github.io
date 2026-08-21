---
layout: default
permalink: /pnw-survival-games/
title: PNW Survival Games
image: assets/images/2025-pnw-survival-games/DSC_6832.jpg
---

{% include baguette.html %}

<h1>{{ page.title }}</h1>

I volunteered as a photographer at the 2025 [PNW Survival Games](https://www.pnwsurvivalgames.com/). Here are some of my photos from the event.

<ul class="tag-group">
  <li class="tags"><a href="#promos">Promos</a></li> 
  <li class="tags"><a href="#full-gallery">Full gallery</a></li>
</ul>  

## Promos
_Promotional materials the PNW Survival Games team designed using my photography from the 2025 event._

![A contestent in a green shirt holds a carved wooden spear used for an atlatl, PNW Survival Games logo, Silverant logo and camp products, text reads six days left, August 14 thru 16 Molalla Oregon, Winners get Silverant Gear]({{ 'resume-samples/pnw-survival-games/pnw-survival-games-promo-1.jpg' | relative_url }})

![A man rubs dirt on his clothing for a detection and concealment challenge, text reads Silverant is proudly an official sponsor of the upcoming PNW Survival Games]({{ 'resume-samples/pnw-survival-games/pnw-survival-games-promo-2.jpg' | relative_url }})

![A man rubs dirt on himself for detection and concealment challenge, text reads return to the wild]({{ 'resume-samples/pnw-survival-games/pnw-survival-games-promo-3.jpg' | relative_url }})

![A young man carves wood with a knife with a knife product image overlaid along with a sheath and small ferro rod, text reads Morakniv official knife sponsor of the 2025 survival games, thank you]({{ 'resume-samples/pnw-survival-games/pnw-survival-games-promo-4.jpg' | relative_url }})

<hr>

## Full gallery

<div class="gallery" style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains '2025-pnw' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Instagram photo"/></a>
    {% endif %}  
{% endfor %}
    <script>
        window.addEventListener('load', function() {
        baguetteBox.run('.gallery');
        });
    </script>
</div>

<hr>

## Photography in action

![Two photographers pointing cameras toward a person in an orange suit lying in a shelter made of branches and leaves]({{ 'assets/images/2025-survival-games.jpg' | relative_url }})