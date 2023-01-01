---
layout: /src/layouts/DocsLayout.astro
title: Get started
position: 1
---

# Get started
 
 Please ensure you have meet the following requirements before getting started:

  * Your team is using Slack, and you are allowed to install apps in your workspace.
  * Your team is using one of our supported time series databases, and you are allowed to create an API integration for it.

Once you are ready, please follow the following steps:

  1. [Sign up](https://console.graphme.app/signup) using your Slack account.
  2. Navigate to the [Connections](https://console.graphme.app/connections) tab and [configure a connection](admin/connections).
  3. Navigate to the [Slack application](https://console.graphme.app/slack) tab and [install the app](admin/slack).
  4. From your Slack workspace, invite the bot in a channel: `/invite @dot`
  5. Validate the bot is correctly responding with: `@dot help`
  6. Send your first query, e.g.: `@dot graph me -1h +prometheus http_requests_total`

The latter command is an example for the Prometheus integration.
For another integration, replace the `+prometheus` part with the name of the integration you just configured, and `http_requests_total` with the actual query in your integration's native query language.

## Need help?

Please [send a request to support](mailto:hello@graphme.app) if you need help to onboard.