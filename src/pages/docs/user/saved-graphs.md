---
layout: /src/layouts/DocsLayout.astro
title: Using saved graphs
position: 3
---

# Saved graphs from Slack

While [inline graphs](inline-graphs) are a great way to get started, they can be quite tedious to type, especially when the query is somewhat complex.
One of the motivations behind GraphMe is to provide a source of truth for queries against time series databases.
This is implemented as saved graphs, which are reusable queries associated with an alias.

## Saving a graph

To create a saved graph from Slack, the command looks like:

```
@dot graph save <alias> as <query>
```

Where:

* `<alias>` is the identifier of the saved graph that will be used to refer to it.
It can only contain alphanumeric characters and underscores.
* `<query>` is any set of plus-options followed by a native query.

The query is specified using the same syntax as for [inline graphs](inline-graphs), except that the start and end time are not to be specified - they will be specified when executing the query.
The exact same set of options can otherwise be used, and an integration must be explicitly specified.

For example, here is a complete command to create an alias for a Prometheus query:

```
@dot save http_requests as +prometheus +title=HTTP_requests
http_server_duration_ms_count{deployment_environment="test"}
```

If the saved graph does not exist, it will be created.
If the saved graph already exists, its definition will be overriden.

## Executing a saved graph

To create a saved graph from Slack, the command looks like:

```
@dot graph me <start>[..<end>] <alias>
```

Where:

* `<start>` is the start time of the period to consider.
* `<end>` is the end time of the period to consider.
* `<alias>` is the identifier of a previously saved graph.

Start and end time are specified using the same syntax as for [inline graphs](inline-graphs).
While possible, it is discouraged to specify any plus-options when executing saved graphs.
They are usually ignored, but the exact behaviour is unspecified at this time.

## Parameterizing saved graphs

So far we have seen that saved graphs are merely an alias to a native query against a time series database.
But what if you have a given query that you want to reuse in different contexts, e.g., across environments or hosts?
This is where parameterized graphs come into play!

When saving a graph, it is possible to use parameters, prefixed by a dollar sign:

```
@dot save http_requests as +prometheus
http_server_duration_ms_count{deployment_environment="$environment"}
```

This will create a saved graph with an `environment` parameter.
Parameters must then be specified when the query is executed:

```
@dot graph me http_requests(environment=test)
```

In this situation, the saved graph is called as a function call with named arguments.

If there is an ambiguity, parameters can also be enclosed into `${}`:

```
@dot save http_requests as +prometheus
http_server_duration_ms_count{deployment_environment="${environment}_app"}
```

This is especially useful if the parameter name is directly followed by a character that would still form a valid identifier.

## Deleting a saved graph

To delete a saved graph from Slack, the command looks like:

```
@dot graph forget <alias>
```

Where `<alias>` is the identifier of a previously saved graph.

For example, here is a complete command to delete the graph created above:

```
@dot save http_requests
```