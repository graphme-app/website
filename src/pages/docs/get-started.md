---
layout: /src/layouts/DocsLayout.astro
title: Get started
position: 1
---

# Get started

After [installing the application for Slack](https://console.graphme.app/slack/install) in your workspace, you are ready to issue your first slash command:

```
/graph me grafana-play-home:4
```

After a few seconds, this should give you the following response:

![Grafana Play: Server requests](/images/graph-me-1.png)

## Connect to Grafana

The above graph comes from a demo instance of Grafana, which might not build what you are looking for.
You can use the following slash command to connect GraphMe to Grafana:

```
/graph connect
```

You will find [more information about connecting to Grafana](/docs/connect) in the docs.

## Onboard your team

After installing the application for Slack, you are subscribed to the free plan, which only comes with a single provisioned user.
While this is great to get started quickly at no cost, you will likely want to collaborate with your team.
In order to do that, you will need to subscribe to [one of our paid plans](/pricing) (*they all come with a free trial*).
Our pricing model is very simple: every plan is associated to a number of provisioned users.

You can use the following slash command to subscribe to a plan:

```
/graph billing
```

You will find [more information about managing your billing and plan](/docs/billing) in the docs.