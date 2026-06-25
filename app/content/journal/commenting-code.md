---

title: "Code Also Has Emotions. Let's Comment Only When Required."
slug: "commenting-code"
date: "2022-01-04"
category: "Clean Code"
readingTime: "5 min read"
image: "/blogs/code-comments.png"
description: "Writing comments is important, but great code should be self-explanatory. Learn when comments help and when they only add noise."
icon: "💡"
----------

# Code Also Has Emotions. Let's Comment Only When Required.

> Writing comments is a good practice, but there are times when comments are unnecessary.
>
> Great code should be self-explanatory.

I get nervous whenever I have to fix a bug in code that wasn't written by me.

Understanding someone else's thought process can be difficult, especially when the codebase lacks clarity. However, a few days ago I came across a project where the code was incredibly readable. There were very few comments, yet the code explained itself beautifully.

That experience reminded me that writing code is only half the job. As developers, we spend a significant amount of time **reading**, **understanding**, and **modifying** code.

If code is difficult to understand, productivity suffers.

Let's establish a few rituals that can help us write cleaner and more maintainable code.

---

## Ritual 1: Delete Unused Code Instead of Commenting It Out

One of the most frustrating things I encounter is commented-out code.

Why keep dead code around when version control already remembers it?

Instead of this:

```js
if (sunRisen) {
  // washClothes();
  // dryClothes();
  // wrapClothes();
  manageClothes();
} else {
  doNothing();
}
```

Prefer:

```js
if (sunRisen) {
  manageClothes();
} else {
  doNothing();
}
```

The second example is cleaner and easier to read.

Trust your version control system.

Git already remembers your history.

---

## Ritual 2: Use TODO and FIXME Comments

Sometimes comments are necessary.

When that's the case, make them actionable.

Use prefixes like:

* `TODO`
* `FIXME`

Example:

```js
createBreakfast(config) {
  // TODO: Support optional salt type (white or pink)
  const foodPrepared = startCooking(config);
  return foodPrepared;
}
```

These comments stand out and help future developers understand what still needs attention.

---

## Ritual 3: Don't Comment What the Code Already Says

If the code is already understandable, comments often add noise.

Example:

```js
// Check if warning modal should be shown
function shouldShowWarningModal() {
  return !this.isModalSeen && !this.isValidUser;
}
```

The comment doesn't add any new information.

The function name already explains the purpose.

Good naming is often better than comments.

Self-documenting code is powerful.

Choose function names and variable names carefully.

---

## Ritual 4: Keep Comments Concise

When comments are required, explain *why*, not *what*.

And keep them short.

Example:

```js
function getName() {
  // Set a fallback name
  const name = this.name || "no name";
  return name;
}
```

Notice how the comment explains intent without being overly verbose.

Also consider following ESLint's spacing guidelines:

https://eslint.org/docs/rules/spaced-comment

---

## Ritual 5: Follow Common Standards

It is always easy to point out issues in someone else's code.

It is much harder to consistently follow good practices in our own projects.

Writing maintainable code is about empathy.

The developer reading your code six months later might be:

* A teammate
* An open source contributor
* Your future self

Following common conventions makes everyone's life easier.

---

## Final Thoughts

Whether to comment code is ultimately a personal choice.

The goal of this article isn't to discourage comments.

Instead, it's a reminder that code itself should communicate intent whenever possible.

Comments should complement the code, not compensate for unclear code.

Code also has emotions and feelings.

Let's help the code express itself before we comment on it. 🙂

Happy Coding 🚀
