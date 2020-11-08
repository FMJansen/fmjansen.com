---
layout: project
title: "Managing 3D printer fleets"
description: "Facilitating the overview and control of 3D printer fleets in a factory environment with a tablet app by usability testing and redesigning"
date: 2019-01-03 12:00:00 +0100
category: "industrial design"
design_kind: "UX design"
color: ffffff;
background: 00ACE4;
image: printers/printers.jpg
image-2x: printers/printers@2x.jpg
image-webp: printers/printers.webp
image-2x-webp: printers/printers@2x.webp
year: 2019
---



## Facilitating the management of 3D printer fleets in a factory environment {#case}

Ultimaker, the Dutch 3D printer-manufacturing company, wanted a way for factories to work with fleets of 3D printers. They already have Cura Connect, which allows users to control and monitor printers over a network. However, this is not built for large amounts of printers. From our research with existing users and factory machine operators, we also noticed there was confusion about what interaction should take place on which device. Additionally, users felt they did not have the necessary control and status information.


<div class="project__picture-group">

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/florenradica_workfloor.webp"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="A room with about 45 Ultimaker 3D printers and two operators."
        data-srcset="/static/img/printers/florenradica_workfloor.jpg"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/florenradica_workfloor.jpg">
    </picture>
    <figcaption class="project__caption">
      An example of the context: a room with a lot of printers, all used for production of end parts or tooling for other machines or production activities.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/problem_overview.webp 1x,
        /static/img/printers/problem_overview@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="An overview of the ecosystem. 3D CAD software, Cura, Ultimaker app, Cura Connect and the Ultimaker display all play a part in the system. They run on a PC, 3rd party printers, Ultimaker printers and phones. The 3D CAD software and 3rd party printers are excluded from the scope border."
        data-srcset="/static/img/printers/problem_overview.png 1x,
          /static/img/printers/problem_overview@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/problem_overview.png">
    </picture>
    <figcaption class="project__caption">
      An overview of the ecosystem for Ultimaker’s products, showing a lot of overlap between interfaces, causing confusion for the user.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/paperprototypedesktop.webp 1x,
        /static/img/printers/paperprototypedesktop@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="A flow of a desktop web app mockup and a photo of a printed version shown in use."
        data-srcset="/static/img/printers/paperprototypedesktop.png 1x,
          /static/img/printers/paperprototypedesktop@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/paperprototypedesktop.png">
    </picture>
    <figcaption class="project__caption">
      We created a paper prototype for a desktop concept...
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/paperprototypesmartphone.webp 1x,
        /static/img/printers/paperprototypesmartphone@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="A flow of a smartphone app mockup and a photo of a printed version shown in use."
        data-srcset="/static/img/printers/paperprototypesmartphone.png 1x,
          /static/img/printers/paperprototypesmartphone@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/paperprototypesmartphone.png">
    </picture>
    <figcaption class="project__caption">
      ...and one for a mobile concept.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/usertest.webp 1x,
        /static/img/printers/usertest@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="An industrial environment with two cardboard printers, one participant, one interviewer and two observers during a usability test."
        data-srcset="/static/img/printers/usertest.jpg 1x,
          /static/img/printers/usertest@2x.jpg 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/usertest.jpg">
    </picture>
    <figcaption class="project__caption">
      Using the paper prototypes and the later digital version, we did usability tests with students, turning and milling machine operators, and 3D printer operators. In total, we executed 9 tests.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/prototypev1.webp"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="Screenshot of the first digital prototype for the app, showing a printer schedule and a task list."
        data-srcset="/static/img/printers/prototypev1.png"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/prototypev1.png">
    </picture>
    <figcaption class="project__caption">
      After choosing a concept based on the paper prototype and the first usability tests, we created a digital prototype.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/prototypev2.webp"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="Screenshot of the second digital prototype for the app, showing a task list and a printer schedule."
        data-srcset="/static/img/printers/prototypev2.png"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/prototypev2.png">
    </picture>
    <figcaption class="project__caption">
      Then, we created a second version, incorporating the insights from the usability tests with the first digital prototype.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/assumptions.webp 1x,
        /static/img/printers/assumptions@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="Two assumptions: operators are not tied to a desk and they use multiple kinds of machines."
        data-srcset="/static/img/printers/assumptions.png 1x,
          /static/img/printers/assumptions@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/assumptions.png">
    </picture>
    <figcaption class="project__caption">
      Two of our most important assumptions which we validated with the usability tests in the context.
    </figcaption>
  </figure>

</div>

---

## A tablet app designed for overview and control {#solution}

We designed a mobile application for a company tablet that helps operators manage their fleet of 3D printers. They can open the app and monitor the schedule from a distance, or they can get a notification about an important task that is due. Problems can be solved quickly, without the operator having to monitor the printers at all time. To help with this, the operator gets a notification when something is wrong.

<div class="project__picture-group">

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/tablet.webp 1x,
        /static/img/printers/tablet@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="A floating tablet showing the interface."
        data-srcset="/static/img/printers/tablet.png 1x,
          /static/img/printers/tablet@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/tablet.png">
    </picture>
    <figcaption class="project__caption">
      The app is meant for a tablet and the main screen features a task list and a printing schedule.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <source data-srcset="/static/img/printers/getting_file.webp 1x,
        /static/img/printers/getting_file@2x.webp 2x"
        type="image/webp" class="lazy">
      <img loading="lazy" class="project__image lazy" alt="A diagram showing the flow from Designer/Engineer, through Production manager to operator. In parallel, the file goes to a server, is accessed on a tablet and scheduled for printing."
        data-srcset="/static/img/printers/getting_file.png 1x,
          /static/img/printers/getting_file@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/getting_file.png">
    </picture>
    <figcaption class="project__caption">
      We also redesigned the process of designer to printer, as shown in this diagram.
    </figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <img loading="lazy" class="project__image lazy" alt="The main screen with the schedule and task view."
        data-srcset="/static/img/printers/design-1.png 1x,
          /static/img/printers/design-1@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/design-1.png">
    </picture>
    <figcaption class="project__caption"></figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <img loading="lazy" class="project__image lazy" alt="The screens for adding a job."
        data-srcset="/static/img/printers/design-2.png 1x,
          /static/img/printers/design-2@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/design-2.png">
    </picture>
    <figcaption class="project__caption"></figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <img loading="lazy" class="project__image lazy" alt="The screen for a job overview."
        data-srcset="/static/img/printers/design-3.png 1x,
          /static/img/printers/design-3@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/design-3.png">
    </picture>
    <figcaption class="project__caption"></figcaption>
  </figure>

  <figure class="project__picture">
    <picture>
      <img loading="lazy" class="project__image lazy" alt="The screens for the task list and an opened task."
        data-srcset="/static/img/printers/design-4.png 1x,
          /static/img/printers/design-4@2x.png 2x"
        src="/static/img/placeholder.jpg"
        data-src="/static/img/printers/design-4.png">
    </picture>
    <figcaption class="project__caption"></figcaption>
  </figure>

</div>


---

## Project management, usability testing and UX design {#role}

I was part of a group of five students and we tried to switch roles in such a way everyone was able to different project related activities. We all did project management, usability tests (with the existing product, paper mockups and digital prototypes), and reporting. Personally, my emphasis was also more on the recruitment of test participants, UI design and the prototyping of the app.

---

## Learnings {#learnings}

1. Interviewing and testing in the context of the user leads to more rich insights. For example, a tour through a factory at one of the user tests led to new insights on how people work on the factory floor and it allowed the participant to refer to what we had seen in that tour.
2. When communicating about a design, it works well to talk about the research after showing the design, so the audience can link insights to the design choices more easily. This makes the foundation for a design stronger and keeps it interesting.
3. It is really beneficial to teamwork to communicate about how everyone is feeling in the morning, so you can take that into account throughout the day. Combined with regular process evaluations, this allows for more pleasant and productive teamwork.
