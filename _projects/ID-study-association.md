---
layout: project
title: "ID study association"
date: 2019-01-04 12:00:00 +0100
category: "web development"
color: ffffff
background: 4dccba
image: /static/img/id/id.png
---

## Updating an outdated website

ID is one of Delft’s largest study associations and has a innovative image—partly because of its connection to Industrial Design Engineering. Sadly, in 2016, the website did not really fit with this image, both visually and technically.


<div class="project__picture-group project__picture-group--light">
  <figure class="project__picture">
    <img class="project__image" alt="A gray, dark blue and acid green website, in 2000s style."
      srcset="/static/img/id/id.tudelft.nl.png 1x,
        /static/img/id/id.tudelft.nl.png 2x"
      src="/static/img/id/id.tudelft.nl.png">
    <figcaption class="project__caption">
      Screenshot of the previous website.
    </figcaption>
  </figure>
</div>


---

## A new website, connected with our new members’ administration

Because of this, [Nils](https://nilswesthoff.com/) and I built a new website, with a front page focussed on upcoming events and our social media channels; the content most visitors (the ID Members) are interested in.


<div class="project__picture-group">

  <figure class="project__picture">
    <img class="project__image" alt="A scanned black-and-white sketch of a wireframe, with Dutch scribbled text."
      srcset="/static/img/id/sketches-1.png 1x,
        /static/img/id/sketches-1.png 2x"
      src="/static/img/id/sketches-1.png">
    <figcaption class="project__caption">
      Sketches for the education page.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <img class="project__image" alt="A scanned black-and-white sketch of a wireframe, with Dutch scribbled text."
      srcset="/static/img/id/sketches-2.png 1x,
        /static/img/id/sketches-2.png 2x"
      src="/static/img/id/sketches-2.png">
    <figcaption class="project__caption">
      Sketches for the about page.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <img class="project__image" alt="A grayscale wireframe."
      srcset="/static/img/id/wireframe.png 1x,
        /static/img/id/wireframe.png 2x"
      src="/static/img/id/wireframe.png">
    <figcaption class="project__caption">
      The wireframe for the education page.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <img class="project__image" alt="A screenshot of several slightly differing forms for submitting education feedback."
      srcset="/static/img/id/design-explorations-form.png 1x,
        /static/img/id/design-explorations-form.png 2x"
      src="/static/img/id/design-explorations-form.png">
    <figcaption class="project__caption">
      Visual design explorations for forms.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <img class="project__image" alt="A screenshot of several slightly differing events."
      srcset="/static/img/id/design-explorations-events.png 1x,
        /static/img/id/design-explorations-events.png 2x"
      src="/static/img/id/design-explorations-events.png">
    <figcaption class="project__caption">
      Visual design explorations for events as shown on other pages.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <img class="project__image" alt="A screenshot of three different ways to display social media postst from Instagram, Flickr and Vimeo, plus a link to Facebook."
      srcset="/static/img/id/design-explorations-social-media.png 1x,
        /static/img/id/design-explorations-social-media.png 2x"
      src="/static/img/id/design-explorations-social-media.png">
    <figcaption class="project__caption">
      Visual design explorations for the latest social media posts as shown on the front page.
    </figcaption>
  </figure>

</div>


We also integrated the [members’ administration](http://moeilijkedingen.nl/lassie), so members can edit their contact information themselves, for example. Furthermore, integration with Facebook allows the board to easily publish events on the website, which have already been created on Facebook.

Lastly, since its launch, our successors have requested adjustments to the website. Most notably, we updated the website with the new branding of ID, which launched in 2018.

---

## Designing, building and hosting

This was project relatively strange, because Nils and I were both the project owners and developers at once; we decided it needed to be done and made the planning, but also did the designing (research for the requirements with users, sketching and wireframing), building (a Wordpress theme from scratch, with API integrations, using Git—[Emil Flach](http://emilflach.com/) en [Alexander Weiss](http://www.alexanderweiss.nl/) helped us with some features) and hosting (configuring a VPS with a LEMP and Let’s Encrypt, with the code deployed from Travis CI).

All code is on [GitHub](http://github.com/studieverenigingid/i.d-Website).
