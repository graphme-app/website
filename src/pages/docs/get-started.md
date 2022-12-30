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

  1. [Sign in](https://console.graphme.app) with your Slack account.
  2. Navigate to the [Connections](https://console.graphme.app/connections) tab.
  3. Click on the time series database you want to configure.
  4. Fill in the connection information. Please refer to our integrations guide if you need more help.
  5. Navigate to the [Slack application](https://console.graphme.app/slack) tab.
  6. Click on the "Add to Slack" button. Review the permissions and validate the installation.
  7. From your Slack workspace, invite the bot in a channel: `/invite @dot`
  8. From your Slack workspace, send your first query: `@dot graph me -1h +prometheus http_requests_total`

The latter query is for the Prometheus integration.
For another integration, replace the `+prometheus` part with the name of the integration you just configured, and `http_requests_total` with the actual query in your integration's native query language.

## Need help?

Please [send a request to support](mailto:hello@graphme.app) if you need help to onboard.