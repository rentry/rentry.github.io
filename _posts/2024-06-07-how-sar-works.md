---
layout: post
title: "How a search and rescue mission works"
date: 2024-06-07
description: "I returned home in the early hours of the morning from a search and rescue mission on the lower slopes of Mt. Hood. Here's how it unfolded."
image: assets/images/2024-sar-top-spur-2.jpg
categories: [SAR]
tags: [search and rescue]
---

{% include leaflet.html %}

![Several search and rescue team members wearing orange shirts and backpacks walk along a tree-lined trail with snow covering parts of the trail]({{ 'assets/images/2024-sar-top-spur-2.jpg' | relative_url }}#full)

I returned home just after midnight this morning from a search and rescue mission on the Pacific Crest Trail up on the lower slopes of Mt. Hood.

Using last night's mission as context, I thought I would describe how a search and rescue mission works, along with the mechanics of this type of mission.

While the characteristics of each mission are highly variable, there are a three common types of missions:

- **Missing person**\
This is the "search" in "search and rescue". This usually involves someone(s) who is overdue, often with a "last known point" (such as a vehicle at a trailhead). These missions are typically focused on subjects lost on remote trails, but just as often subjects with, for example, dementia, who walk away from their homes or care facilities.
- **Recovery**\
Sadly, these are missions that involve a known or likely deceased subject, either by accident or suicide.
- **Pack out**\
Pack outs are missions in which someone is injured and cannot self-rescue. We usually know the general location of the subject, given we received some contact at some point that indicated someone was injured, either because they or someone with them were able to contact emergency services.

Last night's mission was a pack out for an injured, elderly woman hiking on the Pacific Crest Trail with her friend. 

## The callout
Most search and rescue teams are part of or otherwise associated with the local county sheriff's office, including ours.

### ActiveAlert app
![A one-lane gravel road seen from inside a vehicle with snow and trees lining the side, with sunshine on trees in the distance]({{ 'assets/images/2024-sar-top-spur-1.jpg' | relative_url }}#float)
When a call comes through to emergency services, a sheriff deputy will use the [ActiveAlert app](https://active911.com/products/activealert/) to call out SAR volunteers.[^1]

Team members who are available for the mission mark themselves as such in the app, and when they have gathered their gear together, they mark "responding" and offer an ETA in the ground chat.

### Planning
While the volunteers are reporting, the deputies (often in consultation with experienced SAR team members) start to plan the search and/or rescue.

For a search, that will typically involve a "hasty" search 300m in diameter around the last known point (LKP) or point last seen (PLS). If the subject isn't found in the 300m perimeter, the next phase will involve identifying search areas and breaking the full team into smaller teams to grid search those areas. If the subject is thought to be on a trail, teams will break up to search different parts of the trail, meeting in the middle.

![In the middle of large trees looking up, with sun shining on the tops of the trees and a blue sky above]({{ 'assets/images/2024-sar-top-spur-4.jpg' | relative_url }})

For a rescue (or pack out), the deputies and SAR coordinators usually have some general idea about the subject's location, and will thus attempt to find the most direct access to that point, regardless of where the subject started out from.

For example, the subject for last night's mission started their hike at a different trailhead than that which our team reported to, in large part because the trailhead we reported to was closer to the subject than their own starting point.

As I mentioned, the deputies called out the team _before_ they knew where "base" would be, or in other words, before they knew where the team would report to and begin the mission. That gives the team the opportunity to finish up whatever they were doing and start getting their SAR gear together to deploy. 

About 15 minutes after we were called out, we received the location we should report to (Top Spur Trailhead) and a SarTopo map indicating the location of the cell phone ping based on the 911 call.

<div class="map" id="map"></div>

<script>
    var map = L.map('map').setView([45.40366, -121.78310], 12)    

        L.tileLayer('{{ site.data.maptiles.tiles }}', {
        attribution: '{{ site.data.maptiles.attribution }}',
        subdomains: 'abcd',
        maxZoom: 19
        }).addTo(map);

    var circle = L.circle([45.40366, -121.78315], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
    }).addTo(map);


    var popup = L.popup()
    .setLatLng([45.404, -121.78315])
    .setContent("Phone ping from 911")
    .openOn(map);
</script>

## Teams deploy

Two SAR team members arrived at base earlier than the rest of the team (they live closer to the mountain). The two members deployed to the subjects, knowing they would need other team members to bring [the litter](https://en.wikipedia.org/wiki/Litter_(rescue_basket)). 

It takes _at least_ four team members to safely negotiate a subject-laden litter on a mountain trail, and often several more to substitute out, lift the subject and litter over blown-down trees, and stabilize the litter on snow and ice (which was the case last night). But the members making early contact, assessing injuries, offering food, water, and heat (or cooling) is crucial to stabilize a subject in the field, especially given the subject has likely been immobilized for several hours already by the time any member of our team can arrive on scene.

![Several search and rescue team members wearing orange gather around someone sitting on the ground along a trail, with a litter basket in the foreground]({{ 'assets/images/2024-sar-top-spur-5.jpg' | relative_url }})

When more team members arrive on scene, along with the Ford F-350 housing the team rescue gear (including litters), another team deploys with the litter, extra clothing, and other mission-specific team gear.[^2]

## Splitting teams
Last night we deployed to pack out one injured subject, but she wasn't alone. She was hiking with a friend, and the friend was ambulatory.

We split up the team so that we could immediately lead out the friend while we "packaged" the injured subject in the litter. Because of the significant ice and snow on parts of the trail, we retained more than 10 team members to help guide the litter down the mountain, and to substitute members on the litter (guiding a subject in a litter is exhausting, especially up hill or on difficult terrain).

![Search and rescue team members dressed in orange guide a wheeled litter basket along a snowy trail with trees lining the trail on each side]({{ 'assets/images/2024-sar-top-spur-3.jpg' | relative_url }})

## Pack out via litter
As I mentioned, our team has identified four minimum roles for packing out a subject in a litter:

- **Hauler** – The hauler uses a 20' length of webbing attached to the front of the litter to pull it forward.
- **Driver** – The driver guides the litter along the trail, steering it around obstacles and calling out unavoidable obstacles along the way. The driver also makes sure everyone is ready to proceed and effectively leads the litter team on the trail.
- **Stabilizer** – The stabilizer is responsible for keeping the litter level as their primary concern.
- **Braker** – The braker also uses a 20' length of webbing to slow down the wheeled litter when descending on the trail. We'll often have two brakers, as the weight of the litter with a subject is considerable, and gravity and momentum can make the process unwieldy without braking.

Because of the instability of ice and snow last night, we had two additional team members on each side of the litter to help further stabilize it as we descended the slippery trail.

## Mission conclusion and debrief
Once we safely deliver the subject to an ambulance or their own or a friend's personal vehicle, the team debriefs the mission and is dismissed.

Once each member arrives back home, we indicate in ActiveAlert that we have done so, in order that the sheriff's office can account for all members of the team.

[^1]: We have several specialized teams, including rope rescue, trail runner, and K9 teams, so some missions might only call out a specific team, if the deputies deem that a smaller, specialized team might be more effective. But if the mission involves a search for a lost person or a pack out, the full ground team will almost always be called out. Specialized team members are also part of the ground team.

[^2]: I've written before about [individual SAR gear]({{ '/joining-search-and-rescue-part-2/' | relative_url}}), but the team has "big" gear items that live in sheriff vehicles, such as the litters, Starlink, extra clothing, communications equipment, and other shared SAR items.