---
layout: /src/layouts/DocsLayout.astro
title: Slack application
position: 2
---

# Manage Slack application

This page details how to install, uninstall or change settings related to the Slack integration.
In order to follow those instructions, you will need the permission to add an Slack app to your workspace.

## Install the application

The Slack application can be installed from the [Slack application](https://console.graphme.app/slack) tab.
If it is not installed, you should see a large "Add to Slack" button:

![Install app](/images/install-app.png)

Clicking on the button will redirect you to a screen that will ask you to accept some permissions required to make the application to work.
If you need to better understand how we use those permissions, please refer to [the dedicated section](#permissions).
After confirming, you will be redirected back to the console, and the Slack app should be available!

[Slack's own documentation](https://slack.com/help/articles/202035138-Add-apps-to-your-Slack-workspace) contains more information about adding apps to a workspace.

## Re-install the application

Re-installing the application is harmless, but is usually not needed.
The only cases where it should be attempted is when instructed by support, or if new permissions are required.

The Slack application can be re-installed from the [Slack application](https://console.graphme.app/slack) tab.
If it is already installed, you should see a large "Re-install app" button:

![Re-install app](/images/reinstall-app.png)

Clicking on the button will trigger the same flow as for a regular installation.

## Uninstall the application

:::warn
Uninstalling the Slack app will prevent your users to interact with GraphMe.
:::

GraphMe's console does not provide a direct way to uninstall the application, but this can be done from Slack.
First, go to the application's home in Slack (e.g., by search for "dot" in the search bar).
Then go to the "About" tab, and click on the "Configuration" button.
You will end up on a page allowing you to configure the installation of the Slack app.

Lower in the page, there is an option to remove the app from your workspace:

![Remove app](/images/remove-app.png)

## Change the bot's name

:::deter
Renaming the bot will break how your users interact with GraphMe.
:::

By default, the bot is named @dot, but this can be changed.
First, go to the application's home in Slack (e.g., by search for "dot" in the search bar).
Then go to the "About" tab, and click on the "Configuration" button.
You will end up on a page allowing you to configure the installation of the Slack app.

Lower in the page, there is an option to rename the bot user associated with the app:

![Bot user](/images/bot-user.png)

Please make sure to have an adequate internal communication to your users, as they will need to change all their @mention to the new bot's name in order to continue using GraphMe.

## Permissions

GraphMe's Slack app asks for the minimal set of permissions required to make it behave correctly:

* **View messages that directly mention the bot:**
  We can read the content of messages were our bot user is mentioned.
  We cannot read any other messages.
  This is needed in order to enable users to interact with the not.
* **Upload files:**
  Upload graphs as PNG files to channels.
  This is needed to deliver the main feature of GraphMe.
  Please note that files uploaded this way count against your [storage quota in Slack](https://slack.com/help/articles/360035940353-File-storage-in-Slack).
* **Send messages:**
  This is not currently used, but we anticipate that GraphMe could send messages (and not only files) in a near future.
* **Join public channels in a workspace:**
  We can join any public channel in a workspace (not private channels or private messages).
  This is a technical workaround needed to upload messages to a channel.
  This does not allow us to read messages in the channel (unless mentioned).