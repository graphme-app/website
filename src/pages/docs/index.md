---
layout: /src/layouts/DocsLayout.astro
title: Introduction
---

# What is GraphMe?
 
GraphMe is an application exposing metrics contained inside time series databases (e.g., Prometheus) under the form of graphs.
Here is an example of such as graph:

![Example graph](/images/graph.png)

The remaining of this page details the key features of GraphMe.

## Multiple databases

GraphMe is not tied to a single time series database, but instead integrates with several such technologies.
Each time series database provides its own querying language and API, but they very rarely provide a way to generate graphs as static images.
GraphMe fills this gap by allowing to generate graphs in a similar manner.
It even allows to connect several time series databases to the same account.

If GraphMe does not support your time series database of choice, please [reach out to us](/support).

## Rich graph API

GraphMe proposes a rich API to generate graphs, allowing users to customize them very precisely.
For example, it is possible to choose the color palette, to change labels, or to anonymize data.

## Knowledge sharing

Whatever the time series database being used, a common pain point for engineers is to craft correct queries.
It is not uncommon in companies to have documents scattered across the places with such queries.
GraphMe solves this problem by providing a source of truth for queries.
It allows to reuse common queries under the form of saved graphs.
Saved graphs support parameters, to support variations of a given query, e.g., to target a different datacenter or environment.

## Collaboration

Because GraphMe is tightly integrated with Slack, it naturally encourages collaboration around graphs.
It becomes possible to insert a graph directly inside a thread, and discuss the insights it provides.