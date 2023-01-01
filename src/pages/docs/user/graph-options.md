---
layout: /src/layouts/DocsLayout.astro
title: Graph options
position: 4
---

# Graph options reference

One of the GraphMe's goals is to provide flexible options to customize generated graphs.
This page references all available options, along with example outputs.
As a reminder, options are specified as a sequence of `+key=value`, where the plus-sign is used as a prefix to clearly identify those options in the command.

:::note
Appearance of graphs and available options are largely inspired by [Atlas' graph API](https://netflix.github.io/atlas-docs/api/graph/graph/).
Atlas is a time series database from Netflix, that comes with a built-in API to generate graphs.
:::

## Line style

Line style defines the appearance of the lines drawn in the main area.
Three different styles are available.

### line
`style=line` is the default line style.
As expected, it joins the data points with a line.

```
@dot graph me -20m +style=line http_requests
```

![Graph with style=line](/images/graphs/line-style-line.png)

### area
`style=area` fills the space between 0 and the line.
It is recommended to combine it with the `alpha` option to allow to visualize overlapping areas.

```
@dot graph me -20m +style=area +alpha=0.4 http_requests
```

![Graph with style=area](/images/graphs/line-style-area.png)

### vspan

"vspan" creates a vertical span for all non-zero values, between 0 and the maximum data value.
This is usually used to highlight a portion that is above/below some threshold.
It is recommended to combine it with the `alpha` option to allow to visualize overlapping areas.

```
@dot graph me -20m +style=vspan +alpha=0.4 http_requests
```

![Graph with style=vspan](/images/graphs/line-style-vspan.png)

## Title

A title for the graph can be specified with the `title` option.
A label for the y-axis can be specified with the `ylabel` option.
Underscores in the values will be converted into spaces.

```
@dot graph me -20m +title=Graph_Title +ylabel=Y-Axis_Label http_requests
```

![Graph with title and ylabel](/images/graphs/title-and-ylabel.png)

## Color palette

palette: Palette

### Armytage

`palette=armytage` is the default color palette.
It comes from [A Colour Alphabet and the Limits of Colour Coding](https://aic-color.org/journal/previous_archivosv5jaic_v5_06.pdf) by Paul Green-Armytage.
Like in Atlas, two colors (Xanthin and Yellow) were excluded because users found them hard to distinguish from a white background when used for a single pixel line.

```
@dot graph me -20m +palette=armytage +alpha=0.4 http_requests
```

![Graph with palette=armytage](/images/graphs/palette-armytage.png)

### Greens

`palette=greens` specifies a color palette with shades of green.

```
@dot graph me -20m +palette=greens +alpha=0.4 http_requests
```

![Graph with palette=greens](/images/graphs/palette-greens.png)

### Blues

`palette=blues` specifies a color palette with shades of blue.

```
@dot graph me -20m +palette=blues +alpha=0.4 http_requests
```

![Graph with palette=blues](/images/graphs/palette-blues.png)

### Oranges

`palette=oranges` specifies a color palette with shades of orange.

```
@dot graph me -20m +palette=oranges +alpha=0.4 http_requests
```

![Graph with palette=oranges](/images/graphs/palette-oranges.png)

### Purples

`palette=purples` specifies a color palette with shades of purple.

```
@dot graph me -20m +palette=purples +alpha=0.4 http_requests
```

![Graph with palette=purples](/images/graphs/palette-purples.png)

### Reds

`palette=reds` specifies a color palette with shades of red.

```
@dot graph me -20m +palette=reds +alpha=0.4 http_requests
```

![Graph with palette=reds](/images/graphs/palette-reds.png)

## Axis bounds

The lower and upper bounds for the y-axis can be set explicitly using the `lower` and `upper` option.

`auto-style` is the default.
Bounds are determined using both the range taken by data values and the chosen line style.
They are chosen to fit the minimum and maximum value taken by the data points.
Moreover, when the line style is "area", the bounds will be adjusted to better show the filled area (and include the y-axis).

```
@dot graph me -20m +lower=auto-style http_requests
```

| Line     | Area          |
|----------|---------------|
| ![Graph with auto-style and line](/images/graphs/bounds-auto-style-line.png) | ![Graph with auto-style and area](/images/graphs/bounds-auto-style-area.png) |

`data-style` determines the bounds are determined using the range taken by data values.
They are chosen to fit the minimum and maximum value taken by the data points.

```
@dot graph me -20m +upper=auto-data http_requests
```

| Line     | Area          |
|----------|---------------|
| ![Graph with auto-data and line](/images/graphs/bounds-auto-data-line.png) | ![Graph with auto-data and area](/images/graphs/bounds-auto-data-area.png) |

Bounds can also be set to a numerical value, which forces the bound to a given value and completely ignores the underlying data.

```
@dot graph me -20m +lower=400 +upper=600 http_requests
```

![Graph with explicit bounds](/images/graphs/bounds-explicit.png)

## Legend

The legend is the part below the main area where the time series are plotted.
It shows additional information about each time series.

### Automatic with stats

By default, the legend shows the label of each time series and statistics.
The label of each time series is derived from the time series name and tags, depending on the actual integration.
At this time, statistics are not computed from the backend but from the returned data points.
For example, the displayed count is the number of returned data points (taking into account any sampling), not the total number of data points in the time series database.

![Graph with legend and stats](/images/graphs/legend-with-stats.png)

### Hide legend

The legend can be hidden altogether by using the `no-legend` option.

```
@dot graph me -20m +no-legend +order=desc http_requests
```

![Graph with no legend](/images/graphs/no-legend.png)

### Hide stats

The statistics can be hidden by using the `no-legend-stats` option.
The label of each time series will still be displayed, but not statistics.

![Graph with no legend stats](/images/graphs/no-legend-stats.png)

```
@dot graph me -20m +no-legend-stats +order=desc http_requests
```

### Sorting

Order of the time series in the legend is controlled by the `sort` and `order` options.
It determines by which criterion to sort the time series.
It can take any of the following values: legend, min, max, avg, count, sum, last.

`sort=legend` sorts the legends in the natural order of their label.
Another value sorts the legends according the a specific field of their statistics.

`order=asc` is the default value, which sorts the legends in ascending order.
`order=desc` sorts the legends in descending order.

```
@dot graph me -20m +sort=legend +order=desc http_requests
```

![Graph with sort and order](/images/graphs/sort-and-order.png)

## Transparency

Transparent lines or areas is enabled with the `alpha` option, which takes a value between 0 (transparent) and 1 (solid).
While it can be used as a standalone option, it is most commonly used in combination with other options such as `style=area`.