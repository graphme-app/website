---
layout: /src/layouts/DocsLayout.astro
title: Using saved queries
position: 3
---

# Saved queries from Slack

While [inline queries](inline-queries) are a great way to get started, they can be quite tedious to type, especially when the query is somewhat complex.
One of the motivations behind GraphMe is to provide a source of truth for queries against time series databases.
This is implemented as saved queries, which are reusable queries associated with an alias.

## Saving a query

To create a saved query from Slack, the command looks like:

```
@dot graph save <alias> as <query>
```

Where:

* `<alias>` is the identifier of the saved query that will be used to refer to it.
* `<query>` is any set of plus-options followed by a native query.

The query is specified using the same syntax as for [inline queries](inline-queries), except that the start and end time are not to be specified - they will be specified when executing the query.
The exact same set of options can otherwise be used, and an integration must be explicitly specified.

For example, here is a complete command to create an alias for a Prometheus query:

```
@dot save http_requests as +prometheus +title=HTTP_requests
sum(increase(http_server_duration_ms_count{deployment_environment="test"}[15m]))
```

If the query does not exist, it will be created.
If the query already exists, its definition will be overriden.

## Executing a saved query

To create a saved query from Slack, the command looks like:

```
@dot graph me <start>[..<end>] <alias>
```

Where:

* `<start>` is the start time of the period to consider.
* `<end>` is the end time of the period to consider.
* `<alias>` is the identifier of a previously saved query.

Start and end time are specified using the same syntax as for [inline queries](inline-queries).
While possible, it is discouraged to specify any plus-options when executing saved queries.
They are usually ignored, but the exact behaviour is unspecified at this time.

## Deleting a saved query

To delete a saved query from Slack, the command looks like:

```
@dot graph forget <alias>
```

Where `<alias>` is the identifier of a previously saved query.

For example, here is a complete command to delete the query created above:

```
@dot save http_requests
```