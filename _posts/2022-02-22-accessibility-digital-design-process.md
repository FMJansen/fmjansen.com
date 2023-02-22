---
layout: default
title: Accessibility in a digital design process
---

# Accessi&shy;bility in a digital design process
{:.no_toc}

## In short

Designers have the power and responsibility to allow people to access a website. I think we can bake that into our process by:
- Making a list of possible hurdles (disabilities, skills, circumstances, resources)
- Doing explorative research with people who use assistive technologies and/or don’t already use the product
- Starting your design with a priority guide, then enhance (without throwing out the textual versions)
- Testing concepts with accessible prototypes
- Performing automated, manual and usability tests of live products
- Making your organisation inclusive and focussed on accessibility

---

<button id="tocgle" class="tocgle" type="button" aria-expanded="true" aria-controls="markdown-toc">
  Show table of contents</button>
* TOC
{:toc .toc}

---

Over the past few years, I’ve learned things about accessibility. How to [make specific components](https://inclusive-components.design/), or check colour contrast. There’s a lot of very specific information, especially for developers. Or articles on the very basics: what disabilities and accessibility are. Or, even more common, paraphrasings of the [WCAG](#Guidelines). But how do you work towards an accessible product? How should you change your design process? Or: how do you get started with accessibility as a designer?

I’ve read one article on [guidelines and key principles](https://www.ramotion.com/blog/accessibility-in-ux-design/) and [one with three approaches](https://www.a11yproject.com/posts/starting-a-design-with-accessibility/). Expanding on that, I’ve got some ideas on approaches for web design. That means a lot will translate to app design and other digital formats, too. It also means, however, that it’s not a tried and true methodology. Rather, you should see this as a note-to-self. A reminder of what I think might work, so I can try it out and check if it does.

Why accessibility specific design approaches? Because that bakes accessibility into the product from the start. It relieves the developers from having to fix our work by patching accessibility issues which could have been prevented. That’s not their job. It’s our job to deliver (or collaborate on) accessible designs. That leads to a better end result—and happier colleagues.

## The basics

### What accessibility is

#### It’s about access
{:.no_toc}
Sometimes you’ll have to explain what accessibility is. Here’s my short version of it: it’s about allowing people to access something. You could think of permanent disabilities, like [visual impairments](https://www.a11yproject.com/posts/understanding-visual-impairment/) such as blindness, motor disorders, or problems with balance (such as [vestibular disorders](https://www.a11yproject.com/posts/understanding-vestibular-disorders/)), but that’s not all; it’s about [anyone using the web](https://alistapart.com/article/reframing-accessibility-for-the-web/). For example, there are also [temporary and situational impairments](https://www.microsoft.com/design/inclusive/), such as having a broken arm, spotty internet connection, or being in a very sunny location. 

#### Guidelines
{:.no_toc}
To make digital products more accessible, the World Wide Web Consortium ([W3C](https://www.w3.org/)) maintains the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/). If you haven’t read them yet, you could start with a [designer focussed set](https://gerireid.com/wcag-for-designers.html) (which is also a bit easier to read). 

These guidelines allow us to test the accessibility of a product. It’s often used in legislation, such as the European Accessibility Act coming up in 2025. That means it’s not the most simple text to read and, more importantly, it only covers the [bare minimum](https://toot.cat/@nickcolley/109709920570049524) of what you should pay attention to. It makes sure people can _technically_ use the product, but it doesn’t by itself make it a pleasant experience. 

#### Inclusive design includes accessibility
{:.no_toc}
Some consider it an end product of an [inclusive design process](https://xd.adobe.com/ideas/principles/design-systems/what-is-inclusive-design-principles-and-examples/), but I would say [inclusive design is just broader](https://scribe.rip/a-beginners-guide-to-inclusive-ux-design-b8dcc94f5068) than accessibility. Mostly, it also looks at identity, culture and situation, and it’s about involving people in the design process and giving them power.

### Why it is important

It feels weird trying to convince someone that it is important to make a product which can be used by people. Why would you exclude about a fifth or even half[^1] of all people, by not making your website accessible? But just to be sure, these are some benefits of making a product accessible:
0. Access to information and communication technologies is [a human right](https://www.who.int/about/communications/accessible/ensuring-accessibility)
1. In allowing more people to use the product, it will increase our favourite metrics (like active users, click through rates, profits, etc.)
2. It’s good for [search engine optimisation](https://alistapart.com/article/accessibilityseo/) (SEO), so the website is easier to find
3. It leads to [innovation](https://www.bbc.co.uk/programmes/w3cszmtp) and an easier-to-use product for everyone
4. it decreases the amount of ‘unnecessary’ customer support requests[^2]
5. For a lot of ‘new’[^3] products, it will become [legally required in the EU](https://ec.europa.eu/social/main.jsp?catId=1202), so it decreases legal risks
6. Doing it from the start is not that difficult[^4], while it does reduce costs later on, due to fewer bugs and complaints
7. It includes people, which is just nice and probably ethical

So I’d say it’s a no-brainer: we should definitely design accessible products. But how do we ensure we make our products accessible?

## Consider hurdles

At the start of a project, it’s good to consider what kinds of hurdles people could face. There are a lot of general hurdles which are relevant for all kinds of products. For those, guidelines like the WCAG should cover the basics. However, we could check how disabilities or situations interact with our specific product. What kinds of problems might arise? And how can we design a pleasant and usable experience for the people who experience those disabilities?

Perhaps, there are also more specific hurdles for our product. For example, some websites won’t need videos, but if ours does, being deaf or sitting in a loud room pose a hurdle to accessing the audio of that content. We need to add captions to fix that (and maybe a transcript, too). 

Consider other interactions, too: using a wheelchair might not prevent someone from using a website. But if you’re making the website for a theatre with stairs in front of the entrance, suddenly the most important part of the journey has become inaccessible. *We* might not be able to fix that, but we could try to get someone to install a ramp.

We can do this in the beginning, but extend it if we come across more hurdles later on. Similarly, we can use it to write up some requirements (videos should have captions), but also to check how interactions we designed would work combined with those hurdles. 

A starting point of things to think about:
- a lack of digital skills
- unreliable, slow or no internet
- slow or outdated devices
- cognitive disabilities
- motor disabilities
- visual disabilities
- auditory disabilities
- speech disabilities

Make a list of possible hurdles (disabilities, skills, circumstances, resources)
{: .take-away}

## Do research, not just with active users

Hopefully, we’re already doing research into the people who use your product. However, it’s important to specifically include [people who use assistive technologies](https://tetralogical.com/blog/2022/08/01/inclusive-user-research-recruiting-participants/), might face extra hurdles and/or don’t use our service (yet). This way, we uncover more needs and we prevent [survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias). In other words: we’re not just talking to people who have been able to survive the current obstacles like jargon, lack of keyboard support, and confusing parallax pages. 

We can turn the results of this research into the usual formats: [need-based personas](https://playbook.hike.one/methods/mapping/personas), [journey maps](https://playbook.hike.one/methods/mapping/user-journeys), or just a list of pain points. This way we expose hurdles (existing or possible) to our stakeholders, colleagues and ourselves. In turn, that makes it easier to make accessible design decisions later on.

Do explorative research with people who use assistive technologies and/or don’t already use the product
{: .take-away}

## Start simple, then enhance

Good web developers like to work with [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement): the product has a basis which will work, but is enhanced by extra features if they are available. You might think of escalators, which still work as stairs when the power is gone, except the distance between two steps is a little high.

We can also apply this concept to our design: just text will always work, but we can enhance it with more exciting layouts, colours, visuals, and animations. A screen reader will read text out and announce roles of elements, while a screen will show icons which help the user understand the content even more quickly.

Using progressive enhancement changes our design process in subtle ways, and touches all kinds of elements.

### Flows and content: priority guides
With a wireframe, we might be tempted to use images to explain things, or create interactions where the focus order[^5] is unclear. So, I think starting with [priority guides](https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/) is smart, without adding any visuals. That forces us to focus on textual content and roles, so we automatically think about how it’s read by a screen reader or a braille reader (or a [crawler](https://en.wikipedia.org/wiki/Web_crawler) from a search engine!). 

Some additional benefits of using priority guides:
- We can then test just the content and flows without any other investment: if people already understand a text-only version, chances are it’s _really easy_ to understand with colours and visuals added on top
- It helps with responsiveness: everything is below each other, so we can put elements beside each other on larger screens. That makes it available to people with more kinds of devices

*Even more benefits are listed in the article which introduced me to [priority guides](https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/).*

Then, when we’re turning the long list of items into a useful layout, make sure the developer and testers still know the focus order. So, either keep the priority guide up-to-date and make it a part of the [documentation](https://scribe.rip/how-to-document-accessibility-as-a-ux-designer-c51476104723)/handover, or add [annotations](https://stephaniewalter.design/blog/a-designers-guide-to-documenting-accessibility-user-interactions/) to our visual design deliverables. This is also a good moment to think about the differences between left-to-right (e.g. English) and [right-to-left](https://rtlstyling.com/posts/rtl-styling#introduction-to-rtl-styling) (e.g. Arabic) versions of the site.

### Colours: start with one
I once got the advice to start in grayscale and then only add one colour, like red. After starting this way, we can just use our brand or design system colours, of course. But it feels like good accessibility advice, because it forces us to:
- ensure there is sufficient colour contrast between text and the background
- communicate meaning with text (instead of only colours)
- highlight only the most important items 

### Visuals: enhance, don’t replace
When adding visuals, make sure to keep the text available. For example, combine an icon with text, or only a small part of our target audience will understand its meaning. The same goes for images: a screen reader uses the alt text of an image (and everyone needs it when the image file isn’t loading), so make sure images have a meaningful text alternative. 

When it comes to videos, we might not have the transcript available at this point in the process, but we can still define how the video and transcript should live next to each other. 

Additionally, do we really need several full-width photos of two megabytes? Or would a line drawing suffice? The first makes a visit to our website eat up a significant portion of someone’s monthly data plan, while the second might work just as well. So: consider for each large asset (images, videos, fonts, tracking scripts) whether it actually adds value and if there’s a lighter weight version.

### Animations: keep it small
Animations can support the understanding of the interface: they tell us what we could do and what the computer is doing. Large or pulsating animations might do the job very well for some people, but make sure that *if* we need them, there is an alternative (small or no animation). Otherwise, it will cause problems with something like a vestibular disorder or epilepsy.

### Interactions: make it easier
For each interaction, it’s nice to start with a keyboard-only version. So if we need to rearrange elements, add buttons to move the element up and down. Then, we can add a second mode of interactions: for example, use the mouse to click-and-drag the element to a different position. The keyboard version is still available to those who use something like [speech input](https://support.apple.com/en-us/HT210539) or just their keyboard, but the mouse version allows other people to do it in a faster way.

Start with a priority guide, then enhance (without throwing out the textual versions)
{: .take-away}

## Test what you design

Testing is part of any good design process. We test our prototypes to figure out whether we’re designing the right thing, or to find usability problems. And either we or our [quality assurance](https://en.wikipedia.org/wiki/Quality_assurance) team check whether there are bugs in our products before we launch them. The same can apply to accessibility. We figure out if the interaction works and whether our technical implementation doesn’t cause problems. 

### Accessible prototypes

#### HTML
{:.no_toc}
When we create prototypes, we might be tempted to sketch something on paper or make a clickable prototype. However, those don’t work well with assistive technologies out of the box. So, we could try our hand at HTML. The prototype will then work for most people and technologies. We can turn our priority guide into a simple web page using a few elements, like
- headings `<h1>`, `<h2>`, etc.
- running/body text in paragraphs `<p>`
- links `<a>`
- buttons `<button>`
- inputs `<input>`

It’s easy to make changes, and maybe even easy to add interactivity by using javascript or just creating different HTML files for different states (just as we might do with your design tool). If we share and discuss this prototype with our fellow developers, they will be able to provide valuable input and raise (accessibility) concerns earlier on.

#### Figma
{:.no_toc}
However, we’re already learning one new thing (accessibility), so it might not be attractive to take up another (development). Luckily, Figma allows us to turn on an ‘[accessibility mode](https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma)’, which turns our prototype into HTML. We should pay attention to a few things:
- Element with an **On click** interaction are seen by the screen reader as an accessible buttons
- Shapes with an image fill use the layers’ name as alt text
- Top-level frames and components use the layers’ names as the label of a section

It will probably not be perfect (nor will our own HTML be perfect), but it might allow us to already test more things with more people.

#### Webflow
{:.no_toc}
Alternatively, something like Webflow might be an option. They are [working actively](https://webflow.com/accessibility/statement) to make the output adhere to the WCAG, so that sounds promising. However, we still need to pay close attention to how we build the pages and use the correct elements. Webflow provides some [guidance](https://university.webflow.com/lesson/accessible-elements-in-webflow) on how to do this.

### Testing a live product

Once our designs are built, or if we’re doing an expert review of an existing product, we might want to figure out how accessible they are. 

#### Automated
{:.no_toc}
The easiest way to get started is using automated testers like the [Axe browser plugin](https://www.deque.com/axe/browser-extensions/), but we shouldn’t [rely on just that](https://www.voorhoede.nl/en/blog/don-t-rely-on-automated-tests-for-solid-accessibility/), because it won’t find everything. Partly because the tools are not perfect, but more importantly because some things can’t be tested automatically. We could also use similar tools in the [development pipeline](https://www.deque.com/axe/devtools/), so we don’t have to run these tests ourselves.

#### Manual
{:.no_toc}
We could also test it ourselves, [by hand](https://appt.org/en/guidelines/beginnersguide-accessibility-testing). We can try out everything using a keyboard and learn how to use a [mobile screen reader](https://screenreader.app/), [VoiceOver on macOS](https://yakim.nl/articles/voiceover-testing/) or another [desktop screen reader](https://www.sarasoueidan.com/blog/testing-environment-setup/) to check a product. Still, this isn’t perfect, since someone who uses a screen reader daily will have different strategies to *surf the web* than us.

Of course, we can combine automated and manual testing. At [gov.uk](https://www.gov.uk/guidance/accessibility-monitoring-how-we-test), they’ve outlined how they do that.

#### Testing with people
{:.no_toc}
I hope it’s clear we also need to do usability testing with people who use assistive technologies such as braille readers. It’s smart to let people use their own device while doing usability testing, so:
- we can see what kind of accessibility features they’ve got turned on for more informed decisions in the future,
- we learn what problems between specific kinds of assistive technologies and our product arise,
- and they don’t have to get used to a different device while also trying out the product we actually care about.

These tests will be similar to usability tests, but we can get some help from people who wrote about [moderating usability testing with people with disabilities](https://tetralogical.com/blog/2022/01/04/moderating-usability-testing-sessions-with-people-with-disabilities/).

Test concepts with accessible prototypes
{: .take-away}
Perform automated, manual and usability tests of live products
{: .take-away}


## Change your organisation

It’s great if we are changing our design process to create more accessible products. However, we will achieve very little _and_ tire ourselves out if we try to do it all on our own. So, we have to change our organisation. Everyone involved in creating the product should be aware of accessibility concerns, we should have colleagues who have lived experience with disabilities and our bosses should show they care (and act like it), among other things. That way, our accessible designs won’t be lost. Getting there is outside the scope of this post, but luckily the UK Department for Work and Pensions has [dedicated a post](https://dwpdigital.blog.gov.uk/2022/12/15/accessibility-starts-with-an-organisations-culture/) to that.

Make your organisation inclusive and focussed on accessibility
{: .take-away}

---

## Resources

So now we know why and how we could change our process to (hopefully) make our products more accessible. However, there’s a lot more to learn.

_Thanks for proofreading, Yvonne and Simon!_

Keep on learning
{: .take-away}

### Articles about...
- [Image descriptions](https://uxdesign.cc/how-to-write-an-image-description-2f30d3bf5546)
- [Data visualisation](https://fossheim.io/writing/posts/accessible-dataviz-design/)
- [Numbers](https://blog.chezleskrus.com/2022/03/13/plain-numbers/)

### Books
- [Accessibility for everyone](https://abookapart.com/products/accessibility-for-everyone)
- [Mismatch](https://direct.mit.edu/books/book/4137/MismatchHow-Inclusion-Shapes-Design)

### Videos
These help understand how people use technology in different circumstances.
- [Empatio](http://empat.io/)
- [Browsing with assistive technology](https://tetralogical.com/blog/2021/12/24/browsing-with-assistive-technology-videos/)
- [Interviews (Appt)](https://appt.org/en/articles#interviews)

### Courses
- [Interaction Design Foundation: Accessibility](https://www.interaction-design.org/courses/accessibility-how-to-design-for-all)
- [Sara Soueidan: Practical Accessibility](https://practical-accessibility.today/) (seems more focused on development)
- [web.dev: Learn Accessibility](https://web.dev/learn/accessibility/) (seems more focused on development)

### Newsletters
Helpful to be reminded of new developments and learn more in small bits.
- [A11y Project](https://www.a11yproject.com/newsletter/)
- [Equal Entry](https://equalentry.com/newsletter/)
- [A11y weekly](https://a11yweekly.com/)

### Checklists
WCAG based checklists to check our work, by...
- [A11y Project](https://www.a11yproject.com/checklist/)
- [Intopia](https://not-checklist.intopia.digital/)
- [Webflow](https://webflow.com/accessibility/checklist)

### Posters
- [gov.uk posters](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/) with dos and don'ts

### Organisations/collectives
These organisations have a lot of further readings and resources.
- [TetraLogical](https://tetralogical.com/)
- [A11y project](https://www.a11yproject.com/)
- [Appt](https://appt.org/en/articles)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)
- [A List Apart](https://alistapart.com/blog/topic/accessibility/)
- [Inclusie by Gebruiker Centraal (Dutch)](https://inclusie.gebruikercentraal.nl/)

### Personal blogs
There are a lot of people who write about accessibility. A lot of them are (primarily) developers, which could make it a little harder to apply their writing in design.
- [Sara Soueidan](https://www.sarasoueidan.com/blog/)
- [Hidde de Vries](https://hidde.blog/)
- [Eric Bailey](https://ericwbailey.website/tags/accessibility/)
- [Adrian Roselli](https://adrianroselli.com/)
- [Tink - Léonie Watson](https://tink.uk/)
- [Tatiana Mac](https://www.tatianamac.com/tags/accessibility/)
- [Scott O'Hara](https://www.scottohara.me/writing/)
- [Rachele DiTullio](https://racheleditullio.com/blog)
- [Sarah L. Fossheim](https://fossheim.io/writing/)

---

## Footnotes

[^1]: As mentioned, accessibility is not just about disabilities. But if you would want to put numbers on it, that’s the most straightforward, and there are about [1.3B or 16% people globally](https://www.who.int/health-topics/disability#tab=tab_1) with a disability and [3.4M or 20% in the Netherlands](https://appt.org/en/articles/disabilities). Additionally, [about half of people in the Netherlands](https://appt.org/en) use basic accessibility features on their phone.
[^2]: Note that as part of an inclusive product or service, good customer support is essential. Having enough people available to answer emails, respond to chat messages *and* pick up the phone is still important, but it frees them from helping people who get stuck with a product which just isn’t accessible.
[^3]: The [act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882) applies to “products placed on the market after 28 June 2025”, however I’m unsure if a new version of existing software fits within that scope. However, since things like “pre-recorded time-based media” are explicitly excluded, I’m assuming that a new release of software _does_ need to adhere to this law.
[^4]: Okay maybe that’s a lie; accessibility _is_ difficult, just as much as design in general is difficult. It takes effort, requires us to get out of our comfort zone and discover we’re wrong about a lot before making something useful and usable. However, if you focus on accessibility from the start, it doesn’t have to cost a lot of extra investment. That’s what I’m trying to say.
[^5]: When you use the Tab key to move through a form (or Shift+Tab to go back) or any other part of a website, the focus jumps from one element to the next in a specific order: the focus order. This is the same as the order of the elements in the code, by default. 