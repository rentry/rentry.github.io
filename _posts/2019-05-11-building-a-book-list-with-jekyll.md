---
layout: post
title: "Creating a book list"
date: 2019-05-11
description: "My site now includes a list of books I’ve completed or am currently reading. This post covers how I built it with Jekyll’s data files."
categories: books
tags: [books, Jekyll]
---

I have an unfortunate habit of reading multiple books at a time, so I wanted to keep track of my book list. Here’s how I built it.

## Book data
I set about creating a Jekyll data file to store my book list. This data file is called `books.yml`, and it’s located in Jekyll’s `_data` directory. 

I should probably add the author to this list as well (at the very least), but here’s the structure for now:

```yaml

- title: "Wild Migrations: Atlas of Wyoming’s Ungulates"
  link: http://osupress.oregonstate.edu/book/wild-migrations
  image: http://osupress.oregonstate.edu/sites/default/files/9780870719431.jpg
  description: "I’m enamored with this intricate atlas of ungulate (hoofed mammals) migration in Wyoming. Not only is it a project that involved my two alma maters (University of Oregon for data visualization, Oregon State University press printed the book), but it also features my home state and research from its university (University of Wyoming). The book’s photographs and data visualizations are beautiful. This book has all my favorites: photography, data visualization, GIS, and wildlife."
  genre: [biology, science, wildlife] 
  completed: 2019-02-10 

- title: The Slow Regard of Silent Things
  link: https://www.patrickrothfuss.com/content/buy.asp
  image: https://www.patrickrothfuss.com/images/page/cover-slow-regard_277.jpg
  description: An intimate journey through the Underthing with my favorite character from Rothfuss’s excellent Kingkiller series (I read <cite>The Name of the Wind</cite> and <cite>The Wise Man’s Fear</cite> in December, 2018).
  genre: fantasy fiction
  completed: 2019-01-15  

- title: The Value of Everything
  link: https://marianamazzucato.com/publications/books/value-of-everything/
  image: https://marianamazzucato.com/wp-content/uploads/2018/08/VOE-US.png
  description: A scathing and deserved endictment of how our modern capitalist economy (mis)assigns value.
  genre: [economics, politics]
  completed: 2019-01-09
  ```

## The template
I created a new file called `books.html` in the main directory, with the following code looping through the data file and printing the content:

{% raw %}
```liquid
<ul class="book-list">
{% for book in site.data.books %}
  <li>
  <div class="book-item">
    <a href="{{ book.link }}"><img class="cover" src="{{ book.image }}" alt="{{ book.title }}" /></a>
    <div class="book-info">
      <h2><cite><a class="book-title" href="{{ book.link }}">{{ book.title }}</a></cite></h2>
      <p>{{ book.description }}</p>
      <p class="post-meta">Date completed:      
        {% if book.completed == 'In progress' %}
          <span style="color: #e71c4f">📖 {{ book.completed }}</span>
        {% else %}
          {{ book.completed | date: "%B %-d, %Y" }}
        {% endif %}  
      </p>
    </div>
  </div> 
  </li>
{% endfor %}
</ul>
```
{% endraw %}


😎

## Am I reading it now?

I wrote a conditional that evaluates whether or not I’ve completed the book or am currently reading it (“In progress”):

{% raw %}
```liquid
      <p class="post-meta">Date completed:      
        {% if book.completed == 'In progress' %}
          <span style="color: #e71c4f">📖 {{ book.completed }}</span>
        {% else %}
          {{ book.completed | date: "%B %-d, %Y" }}
        {% endif %}  
      </p>
```
{% endraw %}

Add some styling, and you’re good to go!

Get nerdy, friends, and have a look at [📚the book list]({{ site.baseurl }}/books).