---
layout: /src/layouts/DocsLayout.astro
title: Connect to Grafana
position: 10
---

# Connect GraphMe to Grafana

This page explains what connections are and how to configure them.

## Connections

Connections are used to teach GraphMe how to communicate with an time series database that you own.
A connection usually contains metadata about the backend (such as a URL), and credentials (such as an API key).
What a connection is made of depends on the precise time series database.


## Configuration

Connections are configured from the [Connections](https://console.graphme.app) tab:

![Configure connections](/images/connections.png)

Connections that are configured have a checkmark before their name, and are presented first.
The number of connections you can configure with your account depends on [your billing plan](billing).

:::assert
Your favorite time series database is not listed as a supported integration?
Please [reach out to us](mailto:hello@graphme.app) and let us know!
:::

To configure a new connection, or edit an existing one, click on the name of the time series database you want to configure, and fill the form.
Here is an example for Prometheus:

![Configure Prometheus connection](/images/connections-prometheus.png)

Provided information is validated upon save by issuing a fake query against the time series database, in order to limit the risk of having a unusable connection.
However, please make sure to keep your connection synchronized with any credentials change, e.g., due to a password rotation policy.

### Secret values

Some fields contain secret values (such as passwords or API keys).
For security reasons, they are never displayed back to users when editing an existing connection.
If you are editing a connection and leave the field for a secret value empty, the value currently stored in the database will be reused.

## Security

All parameters that you provide when configuring a connection are encrypted in our database (secret and non-secret values alike).