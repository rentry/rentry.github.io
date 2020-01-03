---
layout: post
title: "Organizing my reading list by year"
date: 2019-12-29
description: "Earlier this year, I wrote a post about how to build a simple book list in Jekyll. In this post, I share how to expand the build to organize posts by year and automatically count the number of books for each year."
categories: books
tags: [books, Jekyll]
---

Earlier this year, I wrote about [how I built a simple reading list]({{ site.baseurl }}/building-a-book-list-with-jekyll/) to track [the books I read]({{ site.baseurl }}/books/) in 2019. With the new year approaching, I wanted to expand the template to list books by year and automatically count the number of books I read each year. 

The method here leans heavily on [that of Chuck Grimmett](http://www.cagrimmett.com/development/2019/09/07/reading-list.html).

## Organizing the source data

I maintain the book list in a [YAML file](https://github.com/rentry/rentry.github.io/blob/master/_data/books.yml), using [Jekyll’s simple and powerful data files](https://jekyllrb.com/docs/datafiles/).

I restructured my list to organize it by year, so I could create the hierarchy I need to loop through both years _and_ books by year:

```yaml
list:

  - year: 2019
    books:
      
      - title: "Some Stories: Lessons from the Edge of Business and Sport"
        author: Yvon Chouinard
        link: https://www.patagonia.com/product/some-stories-lessons-from-the-edge-of-business-and-sport-by-yvon-chouinard-hardcover-book-published-by-patagonia/BK805.html
        image: https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6cc96b9a/images/hi-res/BK805_000.jpg?sw=750&sh=750&sm=fit&sfrm=png
        description: "A gift from a friend who works at Patagonia, this hardcover book came autographed by Yvon Chouinard. I've rarely been more excited about a gift. My enthusiasm about the signature was quickly accompanied by adoration of the stories. In an early story, he writes, “All winter I forged gear. For the rest of the year, I continued to lead a counter-culture life on the fringes of society—living on fifty cents a day on a diet of oatmeal, potatoes, and canned cat food; camping all summer in an old incinerator in the abandoned CCC (Civilian Conservation Corps) camp in the Tetons of Wyoming.”"
        genre: [environment, business, outdoor]
        completed: 2019-12-28
```

Basically, I added the keys `list` and `year` and nested the book list under the year key. Now, I can organize my books by year and loop through each year. More about that next...

## Expanding the template

Now that I’ve restructured my YAML file, I can write the logic to display my book list by year, and automatically list the number of books for each year:

{% raw %}
```liquid
{% for entry in site.data.books.list %}
  <div>
    <div class="line-header">
      {% assign bookSize = entry.books | size %}
      {% if bookSize == 1 %}
        <h2 id="{{entry.year}}-books">{{ entry.year }}</h2><span class="details">{{ bookSize }} book</span>
      {% elsif bookSize > 1 %}
        <h2 id="{{entry.year}}-books">{{ entry.year }}</h2><span class="details">{{ bookSize }} books</span>
      {% else %}
        <h2 id="{{entry.year}}-books">{{ entry.year }}</h2><span class="details">I haven't read any books this year. So far.</span>
      {% endif %}
    </div>
```
{% endraw %}

I evaluate the number of books in order to change the content from singular to plural when the count goes from one book to two or more, and I include a conditional line for the rare situation in which I have a year listed, but no books for the year.

I also include an `id` with a variable for the year, so I can later link to the respective year (more on that in a moment).

_**Note (added 1/2/2020):** I tend to avoid plugins for simple sites like this one, in part because I often find managing plugins to be more work than it's worth. However, [there is a plugin](https://github.com/bdesham/pluralize) that removes much of the repetition in the `if/then` statements above. Once installed, it can produce singular and plural versions of a variable within a single line of code. In this case, you'd add the `pluralize` filter to the variable:_ {% raw %}`{{ bookSize | pluralize: "book" }}`{% endraw %}.

## Loops within loops

Okay, now for the weird part. We haven’t closed our first loop ({% raw %}`{% for entry in site.data.books.list %}`{% endraw %}), and we’re now going to loop within our loop 🤯.

Here goes!

{% raw %}
```liquid
<div>
      <!--Books for each year-->
      <ul class="book-list">
        {% for book in entry.books %}
        <li>
          <div class="book-item">
            <a href="{{ book.link }}"><img class="cover" src="{{ book.image }}" alt="{{ book.title }}" /></a>
            <div class="book-info">
              <h3><a class="book-title" href="{{ book.link }}">{{ book.title }}</a></h3>
              <p class="book-author">{{ book.author }}</p>
              <p>{{ book.description }}</p>
              <p class="post-meta">Date completed:      
                {% if book.completed == 'In progress' %}
                  <span style="color: #EB002B">📖 {{ book.completed }}</span>
                {% elsif book.completed == 'Abandoned' %}
                    <span style="color: #EB002B">{{ book.completed }} ¯\_(ツ)_/¯ </span>
                {% else %}
                  {{ book.completed | date: "%B %-d, %Y" }}
                {% endif %}
                {% if book.audiobook == true %} 
                  <span> 🎧</span>
                {% endif %} 
              </p>
            </div>
          </div> 
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
{% endfor %}
```
{% endraw %}

Phew. Okay, so we’re still looping through our years, but within that, we loop through the books within each year. Much of this logic is in the aforementioned post, but here’s what’s happening:

- For each book (for each year), we list an image and title, which are linked to the publisher or seller.
- We list the description, which I write when I start the book (and often edit later).
- We have conditional statements that evaluate the “completed status” of the book. There are three options for completed: “In progress,” “Abandoned,” or the formatted date of completion.
- Finally, it evaluates the `audiobook` key and adds the headphone emoji (🎧) if I listened to the book via audiobook.

## Adding navigation for the years

Nice! Okay, so now we probably need a way to jump to a given year, since as of this writing my count of books for 2019 is [44 books]({{ site.baseurl }}/books/). That’s a lot to scroll through, if you just want to find that one book from that one year.

I mentioned earlier how I added `id` attributes to my year subheadings ({% raw %}`<h2 id="{{entry.year}}-books">{{ entry.year }}</h2>`{% endraw %}), so now I can link to those sections based on the year variable.

But what if we only want year navigation if there’s more than one year through which to navigate? I don’t want a random link for a single year (although I won't have to worry about that in a few days’ time).

Let’s query the number of years we have and only print the navigation if it’s more than one (so I can ship this code in 2019, in the absence of 2020 books):

{% raw %}
```liquid
<!--Anchor nav for years, but only if more than one exists-->
{% assign bookYears = site.data.books.list | size %}
{% if bookYears > 1 %}
<ul class="tag-group">
  {% for entry in site.data.books.list %}
      <a href="#{{entry.year}}-books"><li class="tags">{{ entry.year }}</li></a>
  {% endfor %}  
</ul>
{% endif %}
```
{% endraw %}

Nice!

## A work in progress

The book list is a work in progress. For instance, I could automate [my top-ten list]({{ site.baseurl }}/best-books-of-2019/) by including a rank key as I go along.

Or, I could do something with the `genre` key in the YAML file, which currently does nothing at all, but by which I could organize books according to category or type.

But for now, it’s nice to have a list of the books I’ve read during the year. And while I don’t have goals for how many and what types of books I read in a given year, it is interesting to know the final tally, given it costs me almost nothing to produce it.

Finally, the book list is an opportunity to combine my love of reading with my affinity for content design and code.
