---
layout: /src/layouts/DocsLayout.astro
title: Share dashboards
position: 11
---

# Share Grafana dashboards in Slack

This page explains the different ways to share Grafana dashboards from Slack.

## Share dashboards and panels

Dashboards and panels can be shared with the following command:

```
/graph me <dashboard>:<panel> [<variables>[ <start>[ <end>]]]
```

For example:

```
/graph me grafana-play-home:4
```

Which would give the following response:

![Share a dashboard](/images/graph-me.png)

The following table lists the syntaxes available to query dashboards and panels:

| Syntax | Description | Example |
|--------|-------------|---------|
| `<dashboard-slug>` | Returns all panels of the dashboard identified by its slug (max: 6 panels). | `grafana-play-home` |
| `<dashboard-uid>` | Returns all panels of the dashboard identified by its UID (max: 6 panels). | `000000012` |
| `<dashboard-slug-or-uid>:<panel-visual-id>` | Retrieve a single panel of a dashboard by its visual position in the dashboard. Panel 1 is the top-left panel, then from left to right, and top to bottom. | `grafana-play-home:4` |
| `<dashboard-slug-or-uid>:$<id>` | Retrieve a single panel of a dashboard by its unique identifier. | `grafana-play-home:$2` |
| `<dashboard-slug-or-uid>:<keyword>` | Retrieve all panels of a dashboard matching a keyword (max: 6 panels). A single keyword can be provided, and it must be present in the panel's title for the latter to be considered. | `grafana-play-home:$2` |

After the query may optionally come some options.
Options can be parameters, and a specification of the time range.

Parameters are specified as a list of key/value pairs (e.g., `key=value`), and are mapped to [variables](https://grafana.com/docs/grafana/latest/dashboards/variables/).
There are also a few special parameters that have their own special meaning:

| Parameter | Default | Description |
|-----------|---------|-------------|
| width     | 1000    | Width of the graph to render in pixels |
| height    | 500     | Height of the graph to render in pixels |
| tz        | UTC     | Timezone to use to interpret the time range, and to render the graph |

Along with those parameters can also be provided a time range.
While parameters are key/value pairs, time range is provided as a plain value.
If a single plain value is provided, it will be the start time.
By default, start time is 6 hours ago, and end time is the time at which the query is issued.
The following formats are supported to specify time:

| Format | Description | Example |
|--------|-------------|---------|
| timestamp | Unix timestamp, in seconds | 1678795803 |
| "now" | Time at which the query is issued | now |
| -Nyears | A time that is N years in the past from now | -1years |
| -Nweeks | A time that is N weeks in the past from now | -2weeks |
| -Ndays | A time that is N days in the past from now | -12hours |
| -Nhours | A time that is N hours in the past from now | -5days |
| -Nminutes | A time that is N minutes in the past from now | -15minutes |
| -Nseconds | A time that is N seconds in the past from now | -30seconds |
| Y-m-d | Year/month/day | 2023-03-14 |
| Y-m-dTH:M | Year/month/day and hour/minute | 2023-03-14T13:10 |
| Y-m-dTH:M:s | Year/month/day and hour/minute/second | 2023-03-14T13:10:03 |

Relative time period (e.g., "-12hours") can also be prefixed by "now" (e.g., "now-12hours") to match Grafana's syntax.
Time period quantifiers (e.g., "hours", "days") can also be specified in singular (e.g., "hour", "day"), or abbreviated as their first char (e.g., "h", "d").

Here is an example of a complex query involving parameters and time range:

```
/graph me grafana-play-home:4 host=app1 env=prod -15d -7d
```

## Create and reuse saved graphs

Graphs that are often queried can be saved under an alias for an easier access.
We call them **saved graphs**.
The latest graph that has been shared in the channel by the current user can be saved with the following command:

```
/graph save as <alias>
```

For example:

```
/graph save as cpu
```

Which would give the following response:

![Save graph](/images/graph-save.png)

It can then be invoked with the following command:

```
/graph me cpu
```

All the usual options of the `/graph me` command can still be used.
If an option was part of the saved graph, it will be overridden.
For example:

```
/graph me cpu -7d -2d host=app1
```

By default, a saved graph cannot be overridden, unless you use the `save!` command:

```
/graph save! as cpu
```

If a saved graph is not useful anymore, it can be deleted with the following command:

```
/graph forget <alias>
```

For example:

```
/graph forget cpu
```

Which would give the following response:

![Forget graph](/images/graph-forget.png)

## Search for dashboards and graphs

Dashboards and panels can be searched with the following command:

```
/graph search <query>
```

For example:

```
/graph search server
```

Which would give the following response:

![Search dashboards](/images/graph-search.png)

This command returns all dashboards (max: 50 dashboards) matching the given keyword.
It also returns all saved graphs (max: 50 graphs) matching the given keyword.
Finally, if less than 50 graphs were returned, it also returns graphs that are associated with one of the dashboards that matched the query.