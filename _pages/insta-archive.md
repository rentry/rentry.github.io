---
layout: default
permalink: /insta-archive/
title: Instagram archive (2011–2018)
---

<h1>{{ page.title }}</h1>

I _loved_ Instagram when it released, but decided to quit in 2018 [because of reasons]({{ '/three-years-since-quitting-facebook/' | relative_url }}).

Since I'm not on Instagram anymore, I decided to publish my 7-year archive of photos here.

The photos are not in sequential order. They're ordered according to the respective filenames from the Instagram archive download 🤷‍♂️.

<div style="text-align: center;">
{% assign image_files = site.static_files | where: "image", true %}
{% for slide in image_files %}
    {% if slide.path contains 'insta' %}
        <a href="{{ slide.path }}"><img src="{{ slide.path }}" width="200" style="margin: 0 5px 10px 0" alt="Instagram photo"/></a>
    {% endif %}  
{% endfor %}
</div>