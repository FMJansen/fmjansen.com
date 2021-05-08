---
layout: default
color: ffffff
---

<img src="/static/img/floris.jpg" alt="A photo of me, Floris, happily smiling"
  class="intro__portrait">

# Hej! I’m Floris, I design for inclusion and sustainability
{: .intro}

I’m in my last year of [Design for Interaction (TU Delft)](https://www.tudelft.nl/onderwijs/opleidingen/masters/dfi/msc-design-for-interaction/) and I like designing interactions, services and systems with a focus on sustainability and inclusion.

My runaway hobbies-turned-freelance-activities are graphic design, giving workshops, creating websites (with code and stuff) and photography.

Alrighty, so are you doing anything fun?
{: .you}
Well right now, I’m...
{: .me}

- working on making energy transition renovations more inclusive (my graduation project)
- collecting information at [inclusief.design](https://inclusief.design)
{: #currently}

Cool, cool, cool, and could you tell me something about earlier projects?
{: .you}
Of course! I’ve been...
{: .me}

<section class="portfolio portfolio--industrial" id="projects">
  {% assign industrial_design_projects = site.projects | where: 'category', "industrial design" %}
  {% for post in industrial_design_projects limit:3 %}
    <article class="portfolio__industrial">

      <a class="portfolio__image" href="{{ post.url }}">
        <picture>
          <source data-srcset="/static/img/{{ post.image-webp }} 1x,
            /static/img/{{ post.image-2x-webp }} 2x"
            type="image/webp" class="lazy">
          <img class="lazy" alt="{{ post.title }}"
            data-srcset="/static/img/{{ post.image }} 1x,
              /static/img/{{ post.image-2x }} 2x"
            data-src="/static/img/{{ post.image }}"
            src="/static/img/placeholder.jpg"
            width="338" height="535">
        </picture>
      </a>

      <div>
        <h2 class="portfolio__category">
          <a href="{{ post.url }}">{{ post.design_kind }}</a>
        </h2>

        <p class="portfolio__description">
          <a href="{{ post.url }}">{{ post.description }}</a>
        </p>
      </div>

    </article>
  {% endfor %}
</section>

{% for cat in site.project_categories %}
  <section class="portfolio portfolio--other"
    id="{{ cat.title | url_encode }}">
    <h2 class="section-head section-head--overlap">
      {{ cat.title | capitalize }}
    </h2>
    <div class="portfolio__about-cat">
      <div class="you-cont">
        <p class="you">{{ cat.you }}</p>
      </div>
      <div class="me">
        <p class="portfolio__conversation">{{ cat.conversation }}</p>
      </div>
    </div>
    {% assign project_list = site.projects | where: 'category', cat.title %}
    {% for post in project_list limit:3 %}
      <a href="{{ post.url }}" class="portfolio__item"
        style="background-image: url({{ post.image }});">
        <article>

          <h3 class="portfolio__title">
            {{ post.title }}
          </h3>

        </article>
      </a>
    {% endfor %}
  </section>
{% endfor %}
