---
layout: /src/layouts/DocsLayout.astro
title: Billing and plan
position: 22
---

# Manage billing and plan

This page explains how to manage your billing information and subscription.

## Subscribe to a paid plan

By default, all new accounts come with a free plan.
To collaborate with your team, you will need to subscribe to a paid plan.
You can obtain the URL to the subscription page by using the following command from Slack:

```
/graph billing
```

Which gives you the following response:

![Configure billing](/images/graph-billing-subscribe.png)

After clicking on the link, you will end up on a page that looks like the following:

![Select a plan](/images/console-subscribe.png)

After selecting the plan you are interested in, you will be redirected to a page hosted by [Stripe](https://stripe.com), our payment provider, where you will need to fill your payment information.
Once validated, your plan will be provisioned in a few minutes.
You will not be charged until the end of your free trial, and can cancel at any time during this trial period.

## Manage your subscription

Once subscribed to a paid plan, you can switch to another plan, cancel your plan, or update your billing information at any time.
You can obtain the URL to the customer portal by using the following command from Slack:

```
/graph billing
```

Which gives you the following response:

![Configure billing](/images/graph-billing-portal.png)

After clicking on the link, you will end up on a page hosted by [Stripe](https://stripe.com), our payment provider, that allows you to manage your subscription.

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

Should you encounter any issue with billing, please [reach out to us](mailto:hello@graphme.app).