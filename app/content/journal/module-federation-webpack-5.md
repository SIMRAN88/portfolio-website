---

title: "Module Federation – Sharing is Caring"
slug: "module-federation-webpack-5"
date: "2022-02-08"
category: "Architecture"
readingTime: "6 min read"
image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OKZuGOoYAczdjQFx"
description: "An introduction to Webpack 5 Module Federation and how it enables micro frontends through runtime code sharing."
icon: "🏗️"
-----------

# Module Federation – Sharing is Caring

Hey there! 👋

I'm back with another tech blog, and this time we're talking about one of the most exciting features introduced in Webpack 5:

**Module Federation.**

Talking about Module Federation, it is ideal for building applications owned by multiple teams.

And what does that mean?

* Better collaboration
* Better ownership
* Better code sharing
* Better scalability

Sharing is beautiful, even when it comes to code.

Whether it's components, utilities, hooks, or entire applications, Module Federation makes sharing easy and efficient.

---

## The Problem

Let's start with a simple example.

Imagine you have a Header component that needs to be shared across multiple applications.

Traditionally, you might:

* Copy and paste the code
* Publish a shared package
* Continuously release updates whenever the component changes

None of these solutions are ideal.

Problems include:

* Duplicate code
* Version management headaches
* Dependency conflicts
* Increased build complexity

As developers, we don't enjoy unnecessary manual work.

We don't want duplicate code.

We want:

* Shared dependencies
* Better performance
* Faster builds
* Independent deployments

We want a federation.

---

## The Solution

And that's where Module Federation comes in.

### Why Module Federation?

Module Federation is:

* Scalable
* Convenient
* Flexible
* Dynamic
* Open Source
* Production Ready

Most importantly:

> Multiple Webpack builds can work together and share code at runtime.

No redeployments.

No duplicated bundles.

No unnecessary coupling.

---

## What Is Module Federation?

Module Federation is a feature introduced in **Webpack 5**.

It allows one application to consume modules exposed by another application at runtime.

This enables:

* Runtime code sharing
* Shared vendor libraries
* Independent deployments
* Better build performance
* Better user experience

It also serves as one of the foundational building blocks of **Micro Frontends**.

### Benefits

* Import code from another build at runtime
* Share vendor dependencies dynamically
* Deploy applications independently
* Reduce redundancy
* Improve build performance
* Improve application performance

---

## Important Terminology

Before diving into the implementation, let's understand a few important terms.

### Host

A Webpack build that is initialized first during page load.

### Remote

A Webpack build whose modules are consumed by another application.

### Bidirectional Host

A build that can act both as a host and a remote.

### Omnidirectional Host

A build that simultaneously consumes and exposes modules.

---

# Example Application

Imagine we have two applications:

```text id="n75wfe"
app1
app2
```

Both run independently on different ports.

### Roles

```text id="j5zqz0"
app1 → Consumer

app2 → Host
```

App2 exposes:

* App Component
* Logger Utility

App1 consumes them.

---

## How to Host Modules

Inside the Webpack configuration of **app2**:

```js id="fduwlz"
new ModuleFederationPlugin({
  name: "app2",
  filename: "remoteEntry.js",

  exposes: {
    "./App": "./src/App",
    "./logger": "./src/LoggerUtil",
  },

  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
```

### What's Happening Here?

The application exposes:

```text id="bfzbx4"
App Component
Logger Utility
```

through:

```text id="xej6hi"
remoteEntry.js
```

This file acts as the module registry that other applications can consume.

---

## How to Consume Modules

Inside the Webpack configuration of **app1**:

```js id="0f3tf6"
new ModuleFederationPlugin({
  name: "app1",

  remotes: {
    app2: "app2@[app2Url]/remoteEntry.js",
  },

  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
```

### What's Happening Here?

The consumer application maps:

```text id="jm0tzj"
app2
```

to:

```text id="d5e5eo"
remoteEntry.js
```

which contains the exposed modules.

---

## Importing Shared Modules

Once configured, consuming modules becomes incredibly simple.

```js id="o3h0gt"
import React, {
  Suspense,
  useEffect,
} from "react";

const RemoteApp = React.lazy(
  () => import("app2/App")
);

import * as logger from "app2/logger";
```

Using them:

```js id="27c45r"
useEffect(() => {
  logger.logStatus("loaded");
}, []);
```

Rendering the remote component:

```jsx id="t22l0o"
<Suspense fallback={"Loading..."}>
  <RemoteApp />
</Suspense>
```

Notice how we're importing modules as if they were local.

That's the beauty of Module Federation.

---

## Why This Matters

Without Module Federation:

* Duplicate code
* Shared package releases
* Version conflicts
* Large deployments

With Module Federation:

* Runtime code sharing
* Independent deployments
* Better ownership
* Better performance
* Better developer experience

---

## Real-World Use Cases

Module Federation shines in:

### Micro Frontends

Large applications split into independently deployed teams.

### Design Systems

Share components across applications without publishing packages.

### Enterprise Platforms

Allow teams to own and deploy features independently.

### Plugin Architectures

Load modules dynamically at runtime.

---

## Final Thoughts

Module Federation changed the way modern frontend architectures scale.

It provides a practical solution for:

* Shared dependencies
* Runtime composition
* Independent deployments
* Micro frontend architectures

This article only scratches the surface, but hopefully it gives you a strong starting point.

We've officially begun establishing our federation. 🚀

## References

* https://webpack.js.org/concepts/module-federation/
* https://github.com/module-federation/module-federation-examples

Happy Coding Friends! ⚡
