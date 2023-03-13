---
layout: /src/layouts/DocsLayout.astro
title: Introduction
position: 0
---

# What is GraphMe?
 
GraphMe is an application connecting Grafana to Slack.
It allows its users to easily share graphs from Grafana dashboards in Slack channels:

![Example graph](/images/screenshot.png)

If you are an engineer working with metrics and dashboards, you are certainly faced with the pain of sharing them within your internal communications system.
It very likely involves finding the right dashboard and panel(s) to share, taking a screenshot of them, and uploading this screenshot into your internal communications system.
Besides being time consuming, this manual process also means that context might be lost while doing so.
What was the time frame being considered? Which filters were applied?

GraphMe solves this pain by proposing an integration of Grafana with Slack.
It comes as the form of a slash command, that is used to query dashboards without leaving Slack.
Dashboards are then shared in Slack with all their context, and a link to open it in Grafana to continue the analysis there, if needed.

GraphMe also offers the option to create aliases of common dashboard queries.
For example, one could create an alias `weekly-report` that targets the panels used specifically to build that weekly report.
This is also a tremendous tool to share knowledge across a team, and creates a source of truth of how key metrics and reports and assembled.

## Inspiration and credits

We proudly recognize that GraphMe was inspired by talks given by GitHub folks about their internal chatops system, nicknamed [Hubot](https://hubot.github.com/).
Hubot comes with integrations with many internal systems used at GitHub, not limited to engineering but also used by sales and marketing.
One of those commands is `graph me`, an integration to their internal graphing system (Graphite at the beginning, and later Datadog), which gave the name to this application.

This graphing command has been [implemented](https://github.com/stephenyeargin/hubot-grafana) [several](https://github.com/github/hubot-scripts/blob/master/src/scripts/graphite.coffee) [times](https://github.com/rick/hubot-graphme) under the form of open source plugins to Hubot, most of them being now inactive.
We took as a basis the familiar syntax proposed by [hubot-grafana](https://github.com/stephenyeargin/hubot-grafana), and implemented it as a service ready to be used, with no installation.