---
layout: /src/layouts/DocsLayout.astro
title: Share dashboards
position: 11
---

# Share Grafana dashboards in Slack

This page explains the different ways to share Grafana dashboards from Slack.

## Share dashboards and panels

![Share a dashboard](/images/graph-me.png)

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

![Search dashboards](/images/graph-search.png)