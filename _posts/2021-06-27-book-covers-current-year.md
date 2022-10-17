---
layout: post
title: "Including book cover images for only the current year"
date: 2021-06-27
description: "I recently updated my reading list to only include book cover images for the current year."
categories: books
tags: [books, Jekyll]
---

I've been keeping [track of my reading list]({{ '/books/' | relative_url }}) since 2019. I generate the page from a single Jekyll `_data` file. I've previously written about [creating the reading list]({{ '/building-a-book-list-with-jekyll/' | relative_url }}) and [organizing the reading list by year]({{ '/adding-booklist-counter/' | relative_url }}).

Ever since I started the list, I didn't want it to become a maintenance burden. It shouldn't take longer to maintain the list than to read one of the books on it! So I made a few decisions to try to make it easier to maintain. I knew I wanted to include book cover images, but I didn't want to go through the trouble of downloading, hosting, sizing, and otherwise managing all those images. So the from the beginning, I've referenced the host URL for the image.

That worked fine as long as there were just a few images. But as I write this, there are 169 books on the list, covering 2½ years. That meant that every time a user visited the reading list page, the site needed to query all of those outside sources and reference the images. It also meant broken image links, as the external sites would occasionally change the image URL.

As you may know if you visited this site before, I am a content strategist, not a developer. There are probably elegant ways to deal with this problem that I neither know about nor would be skilled enough to implement. That said, here's what I did.

## Only include images for the current year
The best solution was probably to break the list into multiple pages, one for each year, but I decided that was more work than I wanted to put into it.

Instead, I figured I could retain a single page book list that didn't take forever to load _if_ I included only book cover images for the current year's books.

This simple solution retains the list for each year, but only includes book cover images for the current year. The best news is that I only have to update the current year once a year for this to work.

### What I changed
I only needed to change a few lines of code to do this. First, I added a YAML key to my book page front matter. The key contains the current year:

```
---
layout: default
title: Reading
current-year: 2021
---
```

Next, I added conditional logic to my `book-item.html` include that compares the `_data` file book year to the current year in the page front matter. I wrapped the `img` element in that conditional statement:

```
{% raw %}
{% if page.current-year == entry.year %}
    <a href="{{ book.link }}"><img class="cover" src="{{ book.image }}" alt="{{ book.title }}" /></a>
{% endif %}
{% endraw %}
```

And that's it! The best part of this solution is that I retain the book cover image URL in my `_data` file, but the generated page doesn't include it for all but the current year. Basically, that means I can reverse this change any time I want, since I still have the source data.

## Why I did this today
Good question. I did this today because I've been doing little else but reading for two days in a row because we can't do much else in the Pacific Northwest right now. Climate change events continue to disrupt our lives here, following the [wildfires]({{'/notes-from-evacuation/' | relative_url }}) and [ice storm]({{'/twelve-days-without-power/' | relative_url }}) over the past 9 months. The forecast is calling for an all-time high of around 112° today,[^1] with three days in a row of triple digit temperatures. That isn't remotely normal for northern Oregon, and indicates we're likely in for another catastrophic summer.

[^1]: The high for the week [ended up reaching 116º](https://www.oregonlive.com/weather/2021/06/portland-records-all-time-high-temperature-of-113-setting-new-record-for-third-day-in-a-row.html), the [same temperature as Death Valley on June 29](https://www.accuweather.com/en/us/death-valley/92384/june-weather/2258469?year=2021), and well above the [June average high temperature in Death Valley](https://www.nps.gov/deva/learn/nature/weather-and-climate.htm).