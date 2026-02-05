---
layout: post
title: Visually label your colours
excerpt: If you’re linking to colours in your interface, show their names. 
tags: [design, accessibility, development]
---

# Visually label your colours
{:.no_toc}

Published: {{page.date | date_to_long_string: "ordinal"}}
{: .date}

{::options parse_block_html="true" /}
<div class="summary">
On a webshop, use a list of links with visual labels to link to the other colours of the same product. This makes it more usable and accessible than tooltips or no labels at all.
</div>

<a href="#start" class="tocskip">Skip table of contents</a>
* TOC
{:toc .toc}

Let’s say you’re selling a product in different colours and you’ve put them up on a website. Now, you want your buyers to be able to pick a specific colour, so you probably have a list of swatches for the available colours on a product page. Let’s call this a **colour switcher**.
{: #start}

Maybe it has seven colours, three of which are blue…

![Screenshot of a colour switcher under the text Color: blue. There are seven swatches, three of which are a shade of blue, one is underlined.](/static/img/color-switcher-t-shirt.png){: .t-shirt}

_(This is bad)_

Or maybe there are fifty shades and you make a very small image just a tiny bit larger while showing its name twice…

![Screenshot of a colour switcher with fifty swatches under the text ‘Kleur Champagne’. One has a tooltip which shows the same swatch about twice as big, and a floating title attribute ‘Champagne’.](/static/img/color-switcher-curtains.png){: .curtains}

_(This is also bad)_

If you have a colour switcher, please add a label to the swatches. Not just on hover, but always visible.

## Your customers want this

Why, you may ask? Let’s paint a few colourful pictures (sorry) where you are the user. So let’s imagine… 
- …you use a screen reader to interact with websites. There’s a list of links to other versions of the same pants under the heading ‘colours’. Since the links lack a label, you don’t know where those links lead.
- …you can’t differentiate colours properly, because you are colour-blind, or you’ve put your device in grayscale mode. A list of squares or circles isn’t going to help you find the pink version of that t-shirt you’re eyeing.
- …a friend told you they have the ‘moss green’ version of curtains and you want the same, but there are five different shades of green. Now, you need to click each shade to find the one you’re looking for.

## The WCAG demands it

Another way to look at this, is through the relevant WCAG success criteria. So, let’s do a quick rundown of the requirement related to a colour switcher.

- [1.1.1 Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content){: .wcag-sc} a colour (block or picture) is non-text content, so it needs a [text alternative](https://www.w3.org/TR/WCAG22/#dfn-text-alternative) that serves the equivalent purpose, or a [name](https://www.w3.org/TR/WCAG22/#dfn-name) that describes its purpose.
- [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships){: .wcag-sc} the information of the colour, conveyed visually by the element, needs to be [programmatically determinable](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable).
- [1.3.3 Sensory Characteristics](https://www.w3.org/TR/WCAG22/#sensory-characteristics){: .wcag-sc} not likely to be relevant, but if there is an instruction somewhere in the interface to use these elements, said instruction should use something more than just the colour, so a non-sensory characteristics (e.g. a visible textual label) is needed.
- [1.4.1 Use of Color](https://www.w3.org/TR/WCAG22/#use-of-color){: .wcag-sc} colour should not be the only means of conveying information.
- [1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast){: .wcag-sc} if the element is only distinguishable by its colour (so it has no border, for example), and the colour is close to the background colour (for example, pastel yellow on a white background), the element needs _something_ to make sure it still achieves a 3:1 contrast ratio with the background colour.
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context){: .wcag-sc} & [2.4.9 Link Purpose (Link Only)](https://www.w3.org/TR/WCAG22/#link-purpose-link-only){: .wcag-sc} if the element is a link, its [purpose](https://www.w3.org/TR/WCAG22/#dfn-purpose-of-each-link) should be clear either in the context (conformance level A) or by itself (AAA), so it needs a name which includes the colour name.
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html){: .wcag-sc} if there is a visible label for the element, it should be part of the name (and preferably start with it).
- [2.5.8 Target Size (Minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum){: .wcag-sc} & [2.5.5 Target Size (Enhanced)](https://www.w3.org/TR/WCAG22/#target-size-enhanced){: .wcag-sc} the element should have a [target](https://www.w3.org/TR/WCAG22/#dfn-targets) size of at least 24 by 24 [CSS pixels](https://www.w3.org/TR/WCAG22/#dfn-css-pixels) (conformance level AA) or 44 by 44 CSS pixels (AAA).
- [3.1.3 Unusual Words](https://www.w3.org/TR/WCAG22/#unusual-words){: .wcag-sc} if the colour name is not commonly used (‘red’ is fine, ‘vermilion’ is not known to everyone), there needs to be a [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) to figure out what that colour name means for conformance level AAA.
- [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value){: .wcag-sc} the name of the element needs to be programmatically determinable.

In addition to those criteria, the element has some other general requirements. For example, it needs to be visible when it’s focussed ([2.4.11](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum){: .wcag-sc}, [2.4.12](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced){: .wcag-sc}) and have a focus indicator ([2.4.7](https://www.w3.org/TR/WCAG22/#focus-visible){: .wcag-sc}, [2.4.13](https://www.w3.org/TR/WCAG22/#focus-appearance){: .wcag-sc}). There are a lot of relevant criteria, though, and I’ll try not to repeat the entirety of the WCAG, here. 

## Insufficient approaches

With this in mind, there are some insufficient approaches to create a colour switcher. 

- **No label:** If it’s just a link with a coloured `<div>` or image without `alt` attribute, we meet none of the WCAG criteria and fail all use cases listed above 
- **Tooltip on hover:** Using the `title` attribute or a custom-built tooltip, we could show the colour name on hover. However, this requires us to, first, make sure this also works on focus for keyboard users and, second, on touch screens, hovering doesn’t really exist, so users will have difficulty viewing the label, if they figure out how to do it at all.
- **Screen reader only label:** By using a [visually hidden class](https://css-tricks.com/inclusively-hidden/), you can add a label which can be read by screen readers without being visible. However, this doesn’t help people who don’t see colour or to find a specific shade.

## A good approach

So, what would be a good approach? Use links with the colour names in an unordered list under a heading about colours. And, if you can, describe the current colour. For example, see the example and its code below:

<nav aria-labelledby="colours" class="colour-switcher">
  <h2 id="colours">Colours</h2>
  <ul>
    <li>
      <a href="#darkred" class="darkred" id="darkred">
        dark red
      </a>
    </li>
    <li>
      <a href="#vermilion" class="vermilion" id="vermilion">
        vermilion
      </a>
    </li>
    <li>
      <a href="#green" class="green" id="green">
        green
      </a>
    </li>
  </ul>
  <p class="vermilion-descr">Our vermilion is a friendly, medium bright red, close to orange.</p>
</nav>

```html
<!-- On the product page of the vermilion version -->
<nav aria-labelledby="colours" class="colour-switcher">
  <h2 id="colours">Colours</h2>
  <ul>
    <li>
      <a href="../red">
        dark red
      </a>
    </li>
    <li>
      <a href="">
        vermilion
      </a>
    </li>
    <li>
      <a href="../green">
        green
      </a>
    </li>
  </ul>
  <p>Our vermilion is a friendly, medium bright red, close to orange.</p>
</nav>
```

## Do it

Look, I don’t care about your accessibility legislation compliance. But I can only imagine you want people to buy your product. So make it easy on them and make your website usable and accessible, and add visible labels to your colour switcher. 