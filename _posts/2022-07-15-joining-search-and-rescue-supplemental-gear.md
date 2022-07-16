---
layout: post
title: "Search and rescue: supplemental gear"
date: 2022-07-15
description: "I've previously shared gear requirements for my search and rescue team. Those requirements changed recently, so here's an update on the core pack and supplemental kit."
categories: [SAR]
tags: [search and rescue, gear]
---

Last fall I wrote about our [search and rescue team equipment requirements]({{ '/joining-search-and-rescue-part-2' | relative_url }}), and how I designed my pack around the "24-hour" and "hasty" pack versions.

Well, those requirements recently changed. The leadership team's goal was to reduce pack weight by introducing a new "rescue pack" equipment list, which includes a subset of the former 24-hour gear. From my limited experience, this makes sense, considering the redundancy and superfluity of having multiple team members carrying pieces of gear that are either unlikely to be required for most missions _or_ of which the team only needs one (a tarp for subject packaging, for example).

There is a caveat: all of the formerly required gear for 24-hour missions that are not included in the rescue pack is _still required_ to be present for every mission (including some additions, namely snowshoes and microspikes), so [vehicle gear storage is now essential]({{ '/joining-search-and-rescue-part-3/' | relative_url }}). The 24-hour supplements must be available to quickly include in the rescue pack depending on mission requirements.

I welcomed this change following my shoulder surgery in December 2021. The pack is definitely lighter, and, even when accompanied by my chest pack, is easier to carry in the field.

So here's a breakdown of what I now carry in my vehicle to supplement my rescue pack.

## In my truck

### Water kit

This isn't required, but I carry a supplemental water kit. I continue to carry chlorine tablets in my rescue pack. Water treatment is no longer required for the default rescue pack, but I was on a recent mission in which another team member was overheating and needed my water for cooling, so I still carry tablets in case I need to disinfect water on a long, hot mission.

My water kit includes:

- Grayl Geopress
- Pathfinder single-walled 32 oz. bottle

![Metal water bottle and Grayl geopress bottle in black and green, with a red bag in the background]({{ 'assets/images/sar/sar-gear-supp-3.jpg' | relative_url }})

### Fire kit

My fire kit includes:

- [Cold Steel SRK](https://www.coldsteel.com/srk-sk-5/)
- [Snow Peak Titanium Cup](https://www.snowpeak.com/collections/titanium/products/titanium-single-450-cup-mg-043)
- Fire starters
- Lighters
- Stormproof matches

![Fixed-blade knife, ziplock bag with fire starters and matches, with a yellow bag in the background]({{ 'assets/images/sar/sar-gear-supp-2.jpg' | relative_url }})

### Shelter kit

I actually switched this up just after taking this photo. I decided the stove makes more sense in the fire kit, so I moved it there.

This one is somewhat difficult to organize, because tarps are intended for both shelter and subject packaging for litter evacuation. Since I carry a bivy in my rescue pack, it's more likely that I would use the tarp for packaging, which happens relatively often.

In any case, this kit is in the truck:

- [MSR Pocket Rocket](https://www.msrgear.com/stoves/canister-stoves/pocketrocket-2-stove/09884.html)
- Stove fuel
- Lighters
- Pathfinder cup and lid
- Tarp (80 sq ft)
- [MSR Groundhog stakes](https://www.msrgear.com/tents/tent-accessories/groundhog-tent-stakes/05807.html)
- Prusik loop constructed from 6ft of 6mm cord
- Purcell prusik loop, constructed from 10ft of 6mm cord
- Additional carabiners

It should be noted that the prusiks are included in a smaller bag that can be removed from this kit and included in another.

![Tarp, stove, cup, rope, stakes in front of a green bag]({{ 'assets/images/sar/sar-gear-supp-1.jpg' | relative_url }})

### Food, coffee, and electrolytes

I also carry multiple [Mountain House](https://mountainhouse.com/) freeze-dried meals, along with instant coffee and electrolytes.

![Packages of mountain house dehydrated food, instant coffee, and packets of electrolytes]({{ 'assets/images/sar/sar-gear-supp-4.jpg' | relative_url }})

### Snowshoes

Snowshoes weren't required before, and the team has several pairs on hand for team members. I picked some up anyway, because we've had several recent missions for which they were required.

- Yukon Charlie's Sherpa Snowshoes

## Extra clothing

Our previous pack had always-carry clothing requirements, but the new spec does not. Nonetheless, I carry a supplemental clothing kit with the following:

- Gloves (both an extra pair of leather gloves and leather insulated gloves)
- Base layers (top and bottom)
- Rain pants
- Beanie
- Fleece
- Socks (x3)

## Required equipment

### Rescue pack

<span class="post-meta">Pack Checks will be on all required gear for Type 2 Searches<br>
The Rescue Pack Is CSAR's Primary Pack<br>
R = Required, Blank = Optional<br></span>

<table style="width: 100%; table-layout: fixed; margin-bottom: 2em;">
    <tbody>
        <thead>
                <th><strong>Quantity</strong></th>
                <th><strong>Item</strong></th>
                <th><strong>Type 1 Search Pack (TBD)</strong></th>
                <th><strong>Type 2 Search Rescue Pack</strong></th>
                <th><strong>Type 3 or 4 Search Pack***</strong></th>
                <th><strong>Example</strong></th>
        </thead>    
    {% for gear in site.data.rescue-pack %}   
        <tr>
            <td>{{ gear.quantity }}</td>
            <td>{{ gear.item }}</td>
            <td>{{ gear.type-1 }}</td>
            <td>{{ gear.type-2 }}</td>
            <td>{{ gear.type-3 }}</td>
            <td>{{ gear.example }}</td>
        </tr>
    {% endfor %}    
    </tbody>    
</table>

### Required supplemental kit

<span class="post-meta">Additional required gear that must be readily available to add to the Rescue Pack for extended (24 hr) missions <em>or</em> required by Team Leaders</span>

<table style="width: 100%; table-layout: fixed; margin-bottom: 2em;">
    <tbody>
        <thead>
            <th><strong>Quantity</strong></th>
            <th><strong>Item</strong></th>
            <th><strong>Type 1 Search Pack (TBD)</strong></th>
            <th><strong>Type 2 Search Rescue Pack</strong></th>
            <th><strong>Type 3 or 4 Search Pack***</strong></th>
            <th><strong>Example</strong></th>
        </thead>    
    {% for gear in site.data.rescue-pack-supplements %}   
        <tr>
            <td>{{ gear.quantity }}</td>
            <td>{{ gear.item }}</td>
            <td>{{ gear.type-1 }}</td>
            <td>{{ gear.type-2 }}</td>
            <td>{{ gear.type-3 }}</td>
            <td>{{ gear.example }}</td>
        </tr>
    {% endfor %}    
    </tbody>    
</table>

<span class="post-meta">*Backpack must be large enough to internally carry the 24 Hr gear items (except snowshoes) OR rapidly interchangeable packs<br>
**Until EMS committee publishes new Individual First Aid Kit guidelines<br>
***Low-Intensity Pack (Type 3 or 4 Searches or Type 2 searches that are close to support, etc)</span>