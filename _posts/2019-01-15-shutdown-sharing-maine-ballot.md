---
layout: post
title: "Shutdown sharing: Migrating Maine Ballot"
date: 2019-01-15 17:00:00
description: "The government is still shutdown, and I’m still furloughed. In the meantime, I’m helping a fellow furloughed friend rebuild a civic website."
categories: content strategy
tags: [content strategy, jekyll, github, civic, elections, maine]
comments: true
---

The government is still shutdown, and I’m still furloughed. I can’t work, I’m not getting paid, and there doesn’t seem to be an end in sight.

In the meantime, I’m helping a fellow furloughed team member migrate a site from Squarespace to GitHub Pages. 

Nothing against Squarespace, but my friend is paying around $200 a year to host the site, and it’s a completely volunteer effort. It amounts to a significant annual donation to Maine’s voters to provide concise, approachable, accessible context for Maine’s ballot measures.

By rebuilding the site with [Jekyll](https://jekyllrb.com/) and hosting (for free) with GitHub Pages, she can continue to deliver valuable information and context surrounding Maine’s ballot questions while avoiding most of the monetary costs of doing so.

## Jekyll is still so very cool

Before the government shutdown, I was [migrating a site from Jekyll to GatsbyJS](https://revenuedata.doi.gov/blog/homepage-revamp-part-two/), which is built with React. I’ve struggled to learn React (thankfully I’m not the lead developer on the project), but I recognize its advantages.

But for a content strategist, Jekyll is _just so great_. It is intuitive, powerful, and syntactically simple (compared to React, at least). Let me give you a few examples.

## Include me

The [site we’re migrating](http://www.maineballot.org/) has a table concisely communicating the result of a yes or no vote on a given ballot question.

In many workplace content management systems, one would have to repeat this table and all of its markup in every context. But it’s a design pattern repeated throughout the site, for every ballot question.

Sure, there are ways to program repeating patterns into content management systems (I’m reminded of [Drupal Paragraphs](https://www.drupal.org/project/paragraphs)), but those patterns come with a heavy developer burden, if the patterns are anticipated at all.

Jekyll `_includes` are so simple to use, and so powerful, this problem becomes trivial.

The yes/no table looks like this:

<table style="width: 100%; table-layout: fixed;">
    <tbody>
        <tr>
            <th style="color: #2FB260; font-size: 1.5rem; text-align: left;"><strong>Yes means</strong></th>
            <th style="color: #FF4C43; font-size: 1.5rem; text-align: left;"><strong>No means</strong></th>
        </tr>    
        <tr>
            <td style="vertical-align: top; border-bottom: none; padding-right: 2rem;">This is the result of a “yes” vote. <strong>It needs to change based on each page it appears.</strong></td>
            <td style="vertical-align: top; border-bottom: none;">This is the result a of “no” vote. <strong>It also needs to change based on each page.</strong></td>
        </tr>
    </tbody>    
</table>
---
Rather than repeat this table in the markdown file every time it needs to appear, we can create a file called `yes-no-table.html` in the `_includes` directory with our table markup:

{% raw %}
```html
<table style="width: 100%; table-layout: fixed;">
    <tbody>
        <tr>
            <th style="color: #2FB260; font-size: 1rem;"><strong>Yes means</strong></th>
            <th style="color: #FF4C43; font-size: 1rem;"><strong>No means</strong></th>
        </tr>    
        <tr>
            <td style="vertical-align: top; border-bottom: none; padding-right: 2rem;">{{page.yes_vote}}</td>
            <td style="vertical-align: top; border-bottom: none;">{{page.no_vote}}</td>
        </tr>
    </tbody>    
</table>
```
{% endraw %}

(Yes, this include has inline styling. It’s 2002 again.)

Those familiar with Jekyll already know this, but you can reference page-level front matter variables in an include. In this include, {% raw %}`{{ page.yes_vote }}` and `{{ page.no_vote }}` {% endraw %} reference page-level front matter.

For example, each Maine Ballot page (post) has front matter with unique variable assignments:

{% raw %}
```yaml
---
title:  "Question 2: Wastewater"
excerpt: This approved measure allows the state to borrow $30 million to improve water quality.
election: 2018-11-06
header:
  overlay_image: /assets/img/2018_11/Question2_Wastewater.jpg
  teaser: /assets/img/2018_11/Question2_Wastewater.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  image_description: Wastewater coming out of a pipe
search: true
categories:
- November 2018 Election
tags:
- Water
- Bond
- Passed
yes_vote:  I am in favor of issuing a $30 million bond to fund wastewater infrastructure improvements.
no_vote: I don't want to issue a $30 million bond to fund wastewater infrastructure improvements.
last_modified_at: 2019-01-07 T08:06:00-05:00
---
```
{% endraw %}


Notice `yes_vote` and `no_vote`. The include we created will reference these values in each of the pages in which it is included. Cool! 

Basically, Jekyll `_includes` let you use one markup file for everything that is common to each instance, and it will access the front matter in each page for the unique content to that page.

In the page markdown file, you simply need to include the...wait for it...include, and it will display the table markup with the front matter variables for that page. It takes the form of {% raw %}`{% include yes-no-table.html %}`{% endraw %}

Jekyll `_includes` are great for patterns that repeat throughout the site, and they can accommodate custom content for each unique instance in which they appear.

## Still working

I wish I was busy [publishing public-lands data](https://github.com/ONRR/doi-extractives-data), but in the meantime, I’ll try to find volunteer projects that enhance civic engagement and invigorate our democratic institutions.

If you need a website that supports civic engagement, conservation, environmental advocacy, open data, or immigrants’ rights, [please let me know](https://twitter.com/forestglenroad).





