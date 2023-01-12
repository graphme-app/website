---
layout: /src/layouts/DocsLayout.astro
title: Using inline graphs
position: 2
---

# Inline graphs in Slack

Inline graphs are the fastest way to get started with using GraphMe.
They allow to write a query in the time series database's native query language and execute it in Slack.

## Command syntax

To generate a graph in Slack, the command looks like:

```
@dot graph me <start>[..<end>] +<integration> [+<option> [...]] <query>
```

Where:

* `<start>` is the start time of the period to consider.
* `<end>` is the end time of the period to consider.
* `+<integration>` is the name of the integration to use, e.g., `+prometheus`.
* `+<option>` is an option to customize the rendering of the graph.
* `<query>` is a query in the integration's native query language.

For example, here is a complete command for a Prometheus query:

```
@dot graph me -12h +prometheus +title=HTTP_requests
sum(increase(http_server_duration_ms_count{deployment_environment="test"}[15m]))
```

Which would generate a graph that looks like:

![Graph: HTTP requests](/images/graphs/http-requests.png)

The next sections of this page detail the syntax of the various parameters of this command.

## Time parameters

The start and end time of the period to consider in the query are specified using the same syntax.
If only the start time is specified, the period ends at the current time:
If both are specified, they are delimited by a double dot ("..").

Times can be specified using an absolute timestamp with one of the following [formats](https://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html):

| Format            | Example             | Description                    |
|-------------------|---------------------|--------------------------------|
| %Y-%m-%d          | 2022-12-31          | Date. Time is 00:00:00 in UTC. |
| %Y-%m-%dT%H:%M    | 2022-12-31T10:31    | Date, hour and minutes, in UTC. Seconds are 00. |
| %Y-%m-%dT%H:%M:%S | 2022-12-31T10:31:17 | Date, hour, minutes and seconds, in UTC. |
| &lt;timestamp&gt; | 1672482677          | Unix timestamp in seconds, in UTC. |


Times can also be specified as a period relative to the current time:

| Format                         | Example | Description        |
|--------------------------------|---------|--------------------|
| -&lt;n&gt;s, -&lt;n&gt;seconds | -5s     | Number of seconds. |
| -&lt;n&gt;m, -&lt;n&gt;months  | -5m     | Number of minutes. |
| -&lt;n&gt;h, -&lt;n&gt;hours   | -1h     | Number of hours. |
| -&lt;n&gt;d, -&lt;n&gt;days    | -2d     | Number of days. |
| -&lt;n&gt;w, -&lt;n&gt;weeks   | -1w     | Number of weeks. |
| -&lt;n&gt;y, -&lt;n&gt;years   | -1y     | Number of years. |

## Plus-options

Graphs can be customized using a sheer number of options, all specified using the `+key=value` syntax.
Values cannot contain any space character, since spaces are used as a delimited between consecutive options.
If you need to use a space (e.g., for a title or a label), you can replace them by underscores instead.

A particular option is the name of the integration to use.
This must refer to an integration for which [a connection has been configured](../admin/connections).
The integration is then referred to using a lowercase name without any associated value, e.g., `+prometheus` or `+datadog`.

:::assert
The name of the integration to use must always be present when using inline graphs, even if only a single connection is configured.
When unspecified, it indicates a [saved graph](saved-graphs).
:::

Other options are mostly used to configure the appearance of the rendered graph, e.g., to change its title or axis.
To learn more about available options, please refer to the [reference of all options](graph-options).

## Native query

This type of interaction is called *inline* because the query is directly written in Slack.
There is not limitation in what can be done here, you can leverage the entire language of the time series database being queried.
The query will be forwarded as-is to the database.

If you prefer to avoid typing entire queries directly in Slack, you might find [saved graphs](saved-graphs) very useful!