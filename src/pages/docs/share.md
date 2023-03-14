---
layout: /src/layouts/DocsLayout.astro
title: Share dashboards
position: 11
---

# Share Grafana dashboards in Slack

All interactions with GraphMe from a user perspective happen through Slack.
The goal is to avoid context switching between different tools.
[GraphMe's console](https://console.graphme.app) is currently only used for administration operations.

:::note
In the future, we might allow some user-oriented actions to happen in the console.
Please reach out to us to provide us feedback if you want more capabilities to be built inside the console.
:::

## Meet GraphMe's bot

To interact with GraphMe in Slack, you need to mention our bot, whose name is `@dot`.
Dot is both a short form for Dorothy, and also a reference to the dot (".") that is sometimes used as a prefix for Slack-based commands interpreted by bots.

:::note
We could have proposed a slash command (e.g., `/graph`) to interact with GraphMe, but unfortunately slash commands come with limitations, e.g., their inability to be invoked from threads.
That is how we ended up with our very own bot, `@dot`!
:::

## Invite the bot

To interact with our bot, you first need to invite it to the channels from which you want to use GraphMe.
It is usually done using Slack's `/invite` command.
But don't worry, our bot will not be eavesdropping on you!
Instead, it is only notified of messages where it is explicitly mentioned.

## Anatomy of a command

Therefore, interactions with GraphMe in Slack start with a mention of our bot, followed by a command, e.g.:

```
@dot help
```

The bot must be mentioned at the very beginning of the message, other it will not work.
Please continue reading the next pages of this documentation to learn more about available commands.