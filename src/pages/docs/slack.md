---
layout: /src/layouts/DocsLayout.astro
title: Manage the application
position: 21
---

# Manage the application for Slack

This page explains how to install, uninstall or change settings related to our applicatin for Slack.
In order to follow those instructions, you will need the permission to add an application to your workspace.

## Install the application

Our application for Slack can be installed from our "Add to Slack" button:

[![Install app](/images/btn-add-to-slack-small.png)](https://console.graphme.app/slack/install)

Clicking on the button will redirect you to a screen that will ask you to accept some permissions required to make the application to work.
If you need to better understand how we use those permissions, please refer to [the dedicated section](#permissions).
After confirming, you will be redirected back to the console, and the application should be available in your workspace!

[Slack's documentation](https://slack.com/help/articles/202035138-Add-apps-to-your-Slack-workspace) contains more information about adding apps to a workspace.

## Re-install the application

Re-installing the application is harmless, but is usually not needed.
The only cases where it should be attempted is when instructed to do so by the application itself of by the support.

Our application for Slack can be re-installed by using the same "Add to Slack" button than above.
Clicking on the button will trigger the same flow as for a regular installation.

## Uninstall the application

To uninstall the application, first access the application's home in Slack (e.g., by searching for "GraphMe" in the search bar).
Then go to the "About" tab, and click on the "Configuration" button.
You will end up on a page allowing you to configure the installation of the application for Slack.

Lower in the page, there is an option to remove the application from your workspace:

![Remove app](/images/remove-app.png)

## Change the bot's name

By default, the bot is named @graphme, but this can be changed.
To rename the bot, first access the application's home in Slack (e.g., by searching for "GraphMe" in the search bar).
Then go to the "About" tab, and click on the "Configuration" button.
You will end up on a page allowing you to configure the installation of the application for Slack.

Lower in the page, there is an option to rename the bot user associated with the application:

![Bot user](/images/bot-user.png)

## Required permissions

GraphMe's application for Slack asks for the minimal set of permissions required to make it behave correctly:

* **View information about your identity:**
  This is the minimal permission needed when installing an application.
  This does *not* give us access to your email address.
* **Add shortcuts and/or slash commands that people can use:**
  The primary way of interacting with GraphMe is via slash commands.
  This permission is needed in order to install the `/graph` command inside your workspace.
  This also allows GraphMe from being notified whenever somebody uses a slash command, and to react to it.
