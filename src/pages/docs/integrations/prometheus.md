---
title: Prometheus
layout: /src/layouts/DocsLayout.astro
---

# Prometheus integration

GraphMe supports [Prometheus](https://prometheus.io) as a time series database.
It actually supports any database implementating Prometheus' query API.
It notably includes a standalone installation that you manage, [Grafana Cloud](https://grafana.com/products/cloud/), [Cortex](https://cortexmetrics.io) or [Thanos](https://thanos.io).

The only requirement is for the API to be exposed on the Internet, and protected by Basic Auth.

## Configure connection

To configure a connection with Prometheus, you will need the base URL where Prometheus API is exposed.
It is the part that comes before actual endpoints, e.g., `/api/v1/query_range`.
You will also need a username and a password that will be used for Basic Auth.

![Configure Prometheus connection](/images/connections-prometheus.png)