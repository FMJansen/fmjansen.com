---
layout: post
title: Firefox button-anchor keyboard trap
excerpt: A flex container button within an anchor creates a keyboard trap in Firefox, but not in other browsers.
---

# Firefox button-anchor keyboard trap
{:.no_toc}

Published: {{page.date | date_to_long_string: "ordinal"}}
{: .date}

Recently, I tested a website for accessibility issues and came across a keyboard trap. However, it only showed up in Firefox and I couldn’t figure out what caused it. I wanted to share this for the next person who comes along and gets stumped, but I’ve filed [a bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1935639) as well.

## The problem

When a button is also a flex container _and_ lives inside of an anchor, your keyboard focus will start toggling between the anchor and the button in Firefox. [WCAG 2.1.2](https://www.w3.org/TR/WCAG22/#no-keyboard-trap) requires that “focus can be moved away from that component using only a keyboard interface”, and that isn’t the case anymore in this situation.

Do note that a button is not allowed in an anchor element according to [the specifications](https://html.spec.whatwg.org/#the-a-element). So, even if this gets solved in Firefox, it’s still not the best idea to nest a button in an anchor.

You can try out the [live example](/keyboard-trap.html) and see the code below.

``` html
<a href="#before">Item before</a>

<a href="#problem">
  <button style="display: flex;">
    Label
  </button>
</a>

<a href="#after">Item after</a>
```

## Tested in these browsers

|Browser|Version|OS|Keyboard trap occurs|
|:---|:---|:---|:---|
|Firefox|132.0.2|macOS|Yes|
|Firefox|134.0b5|Windows|Yes|
|Safari|18.1|macOS|No|
|Chrome|131.0.6778.109|macOS|No|
|Edge|131.0.2903.70|Windows|No|