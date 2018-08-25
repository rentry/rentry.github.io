---
layout: post
title: Playing with sparklines
date: 2018-08-24 17:33:00
description: Edward Tufte’s sparklines provide an elegantly simple way to convey trends when the individual data values aren’t the point.
categories: data
tags:  [design, data, content strategy, ideas, writing]
comments: true
---

<script>
var width = 100;
var height = 25;
var x = d3.scaleLinear().range([0, width - 3]);
var y = d3.scaleLinear().range([height - 4, 0]);
var line = d3.line()
             .curve(d3.curveBasis)
             .x(function(d) { return x(d.year); })
             .y(function(d) { return y(d.amount); });

function sparkline(elemId, data) {
  data.forEach(function(d) {
    d.year = +d.year;
    d.amount = +d.amount;
  });
  x.domain(d3.extent(data, function(d) { return d.year; }));
  y.domain(d3.extent(data, function(d) { return d.amount; }));

  var svg = d3.select(elemId)
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .append('g')
              .attr('transform', 'translate(0, 2)');
  svg.append('path')
     .datum(data)
     .attr('class', 'sparkline')
     .attr('d', line);
  svg.append('circle')
     .attr('class', 'sparkcircle')
     .attr('cx', x(data[data.length - 1].year))
     .attr('cy', y(data[data.length - 1].amount))
     .attr('r', 2.5);  
}

d3.json('/data/aml-fund.json', function(error, data) {
  sparkline('#spark-it', data);
});
</script>


## Intense. Simple. Word-sized.
In his book _Beautiful Evidence_, Edward Tufte describes sparklines as "intense, simple, word-sized graphics." He goes on:

> These little data lines, because of their active quality over time, are named _sparklines_ – small, high-resolution graphics usually embedded in a full context of words, numbers, images. Sparklines are _datawords_: data-intense, design-simple, word-sized graphics.

The simplicity and utility of sparklines explain why they are representative of Tufte's approach to the presentation of information:

- They have very high resolution.
- They don't obsure the content, but rather augment and contextualize it.

I've been thinking about how to incorporate these beautiful little "datawords" into [our team's data visualization site](https://revenuedata.doi.gov/). As a content strategist who designs with words every day, the idea that there's something called a _dataword_ is just too enticing. I've been thinking about the possibilities since [Tufte's Portland workshop](/tufte-workshop/).

> Of course the wordlike qualities of sparklines create the wonderful possibility of **writing with data graphics**.

So what are the appropriate conditions for using these lovely little charts?

## Appropriate conditions for sparklines

Most of the data we publish is [presented in the form of interactive SVG charts](https://revenuedata.doi.gov/explore/) driven by [D3](https://d3js.org/), but we also have legacy static charts that are difficult for our team to maintain. This is largely due to the fact that the charts were created in Sketch, which is only available on macOS (we have Windows machines).

Sparklines seem like a great way to present this data, when:

1. The overall trend is more important than individual data points or values.
2. The data must be updated or otherwise maintained at least annually.

Here's an example. This chart shows the unappropriated balance of the Abandoned Mine Land (AML) fund over time:

![Growth of the AML fund’s unappropriated balance](https://revenuedata.doi.gov/public/img/AML_unapprop-growth.svg)

Alternatively, we can present this data in the form of a sparkline, which shows the AML fund's unappropriated balance has grown significantly over the past 30 years: <span class="spark-data">$436 million</span> <span id="spark-it"></span> <span class="spark-data">$2.38 billion</span>.

Now, this still isn't perfect; the height, width, and the interpolation (curve) values must be such that variations in the data aren't exaggerated or diminished.

For example, in the sparkine above, the largest value in the data is mapped to a height of `25px`. If I change this value to `17px`, we can see it diminishes the visual impact of the trend compared to the instance above.

![sparkline with reduced height changes the visual impact of the sparkline](/assets/images/sparkline-height.png)

