---
layout: post
title: Playing with sparklines
date: 2018-08-24 17:33:00
description: Edward Tufte’s sparklines provide an elegantly simple way to convey trends when the individual data values aren’t the point.
categories: data
tags:  [design, data, content strategy, ideas, writing]
comments: true
---

<style>
.sparkline {
  fill: none;
  stroke: #000;
  stroke-width: 1px;
}
.sparkcircle {
  fill: #3d95bd;
  stroke: none;
}
</style>
<script src="//d3js.org/d3.v3.min.js"></script>
<script>
var width = 100;
var height = 25;
var x = d3.scale.linear().range([0, width - 2]);
var y = d3.scale.linear().range([height - 4, 0]);
var line = d3.svg.line()
             .interpolate("basis")
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
     .attr('r', 2);  
}

d3.csv('/data/aml-fund.csv', function(error, data) {
  sparkline('#spark-it', data);
});
</script>


## Sparklines are cool

This will hopefully create a sparkline <span id="spark-it"></span>, showing AML fund data over time.