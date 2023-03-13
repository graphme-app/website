---
layout: /src/layouts/DocsLayout.astro
title: Billing and plan
position: 22
---

# Manage billing and plan

This page explains how to manage your billing information and your subscription.

## Subscribe to a paid plan

By default, all new accounts come with a Free plan.
This plan has no limit in time, but comes with usage limits.
Those limits can be overcome by subscribing to a paid plan.
From the [Billing and plan](https://console.graphme.app/billing) tab, you can select a more appropriate plan:

![Billing and plan](/images/billing.png)

You will be redirected to a page hosted by [Stripe](https://stripe.com), our payment provider, where you will need to fill your payment information.
Once validated, your plan will be provisioned in a few minutes, and be usable straight away.

In the same manner, you can switch from one paid plan to another.
When doing so, you will be billed at the pro-rata of the number of days in both the previous billing cycke, and the new billing cycle.

## Cancel a subscription

At any time, you can switch back to the Free plan, from the [Billing and plan](https://console.graphme.app/billing) tab.
You will be redirected to a page hosted by [Stripe](https://stripe.com), our payment provider, where you will be asked to confirm the cancelation of the subscription.
When doing so, you will be billed one last time at the pro-rate of the number of days in the current billing cycle.
You may need to do some adjustments in order to fit the new limits of your plan.

## Limits

Every plan comes with limits around three dimensions:

* **Connections:** A limit in the number of connections that can be configured.
Once the threshold is reached, it will not be possible to configure any new connections without first removing another one.
* **Saved graphs:** A limit in the number of saved graphs that can be created.
Once the threshold is reached, it will not be possible anymore to create any new saved graphs without first removing another one.
* **Users:** A limit in the number of users that can interact with GraphMe.
This does not apply to the console, but applies to all Slack commands (except `help`).
Once the threshold is reached for a billing cycle, it will not be possible for any new user to interact with GraphMe.

## Need help? 

Should you encounter any issue with billing or you plan's limits, please [reach out to support](mailto:hello@graphme.app).