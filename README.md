# Rick & Morty PWA

> How to create your own PWA with Workbox 5 step by step.

<img src="visuals/pwa.svg">

## Ultimate Blog

This repository was created for [Ultimate Courses Blog](https://ultimatecourses.com/blog/) and its purpose is to illustrate [Andrés Gesteira's second article on the topic "The Ultimate Guide to Progressive Web Apps"](xxx).

## Workbox

The chosen technology to develop our PWA at a professional level is Google's [Workbox](https://developers.google.com/web/tools/workbox) since it integrates the most advanced features.

It's latest release (on the creation of this repository) is [Workbox v5.0.0](https://github.com/GoogleChrome/workbox/releases/tag/v5.0.0) wich adds a lot of improvements and most importantly: Typescript support.

The build tool is Webpack which we will use not only to transpile Typescript but also to generate our service worker with the [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin).

## How to follow

The `master` branch contains a naked project. We still haven't provided the service worker blanket. However all necessary packages are already specified and the infrastructure is ready for you to take the steps to the final product.

Each of those steps are zero-based numbered in the shape of branches. They keep a `step-xx-title-of-the-step` naming convention.

The step 0 branch pictures the specific goals to achieve a PWA. No code to be provided there. The next steps/branches do involve some development. They are your tasks, your challenges.

The steps to follow on each branch are explained in detail in [the article](xxx).

**IMPORTANT**: the only branch you should checkout is `step-00-non-progressive-app`. It is also recommended that you create your own branch from that one (e.g. `step-00-non-progressive-app-mine`).

From that point on you will stay in that branch and start providing your own code.

However let us say that you are reading the article where it explains the steps of the `step-01-web-app-manifest` branch. If you are not capable of achieving the desired result you should not worry. Just do this:

```bash
git checkout step-01-web-app-manifest
git checkout -b step-01-web-app-manifest-mine
```

This way you step ahead, you do not get delayed and moreover you keep a clean workflow.

## Get started

The prerequisites are simple. Have 2 things installed in your machine:

* Google Chrome
* Node.js LTS or greater

Clone this repo and open the project in your favourite code editor.

Now, the `master` branch should be kept pristine, since we can always come back to it for a fresh start.

Checkout the step 0 branch. That one is a copy of `master`.

```bash
git checkout step-00-non-progressive-app
git checkout -b step-00-non-progressive-app-mine
```

Now click [here](xxx) start reading the article and your PWA adventure will commence.

## Related documentation

[https://ultimatecourses.com/blog/ultimate-guide-progressive-web-apps-fundamentals](https://ultimatecourses.com/blog/ultimate-guide-progressive-web-apps-fundamentals)
