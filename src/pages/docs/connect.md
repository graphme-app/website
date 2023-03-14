---
layout: /src/layouts/DocsLayout.astro
title: Connect to Grafana
position: 10
---

# Connect GraphMe to Grafana

This page explains how to configure GraphMe to interact with your instance of Grafana.

## Open the console

After installing the application for Slack, you are redirected to the console where you can configure the connection to Grafana.
You can also obtain the URL to this console by using the following command from Slack:

```
/graph connect
```

Which gives you the following response:

![Configure connection](/images/graph-connect.png)

## Configure the connection

:::note
Please note that links to the console are only valid for 15 minutes.
:::

The console to configure the connection to Grafana looks like the following:

![Configure connection](/images/console-connect.png)

There are three fields to fill in order to configure the connection to Grafana:

| Field   | Required | Description |
|---------|----------|-------------|
| Host    | Yes      | Base URL of the Grafana host to connect to.
| API key | No       | An [API key](https://grafana.com/docs/grafana/latest/administration/api-keys/) or [service account token](https://grafana.com/docs/grafana/latest/administration/service-accounts/). Only dashboards accessible by this key will be available via GraphMe. While this parameter can be omitted when connecting to a public instance, it is in practice always specified when connecting to your own private instance of Grafana |
| Org ID  | No       | An [organization identifier](https://grafana.com/docs/grafana/latest/administration/organization-management/). Only dashboards accessible to this organization will be available via GraphMe. This is only needed if your instance of Grafana uses multiple organizations. By default, the organization identifier of the first organization is assumed. |

For security reasons, the API key is never displayed in the form, even if one is actually used.
Consequently, when editing a connection that requires an API key, you must provide the API key every time.

## Demo instance

By default, every new team is configured with a demo instance of Grafana: https://play.grafana.org
This allows new users to get started quickly.
This demo instance is not maintained by GraphMe, and might be subject to some limitations (such as rate limiting).

## Network connectivity

Your instance of Grafana should be publicly addressable in order for GraphMe to communicate with it.
This is often the case when you use an instance of Grafana managed as a service, such as [Grafana Cloud](https://grafana.com/products/cloud/).

:::warn
Please [reach out to us](mailto:hello@graphme.app) if your instance is hosted in your private network and you wish to use GraphMe.
:::