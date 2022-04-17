---
layout: default
color: ffffff
---

<img alt="A photo of me, Floris, happily smiling"
  srcset="/static/img/floris.jpg 1x,
    /static/img/floris@2x.jpg 2x"
  src="/static/img/floris.jpg"
  class="intro__portrait">

# {{ site.description }}
{: .intro}

I’m an interaction designer and researcher at [Hike One](https://hike.one/) and on the side I build websites (with code and stuff), take [photos](https://photos.fmjansen.com) and give workshops on graphic design.
{: .me}

Alrighty, did you do anything fun?
{: .you}
Well, I think so, I’ve been..
{: .me}

<section class="portfolio portfolio--industrial" id="projects">

  {% assign industrial_design_projects = site.projects | where: 'category', "industrial design" %}
  {% for post in industrial_design_projects limit:3 %}
    <article class="portfolio__industrial">

      <a href="{{ post.url }}" class="portfolio__link">
        <div class="portfolio__text">
          <p class="portfolio__category">
            {{ post.design_kind }}
          </p>

          <p class="portfolio__description">
            {{ post.description }}
          </p>
        </div>

        <picture class="portfolio__image">
          <source data-srcset="/static/img/{{ post.image-webp }} 1x,
            /static/img/{{ post.image-2x-webp }} 2x"
            type="image/webp" class="lazy">
          <img class="portfolio__image lazy" alt="{{ post.title }}"
            data-srcset="/static/img/{{ post.image }} 1x,
              /static/img/{{ post.image-2x }} 2x"
            data-src="/static/img/{{ post.image }}"
            src="/static/img/placeholder.jpg"
            width="338" height="535">
        </picture>
      </a>

    </article>
  {% endfor %}

  <div></div>
</section>

{% for cat in site.project_categories %}
  <section class="portfolio portfolio--other"
    id="{{ cat.title | url_encode }}">

    <div class="conversation">
      <h2 class="section-head section-head--overlap">
        {{ cat.title | capitalize }}
      </h2>
      <div class="portfolio__about-cat">
        <div class="you-cont">
          <p class="you">{{ cat.you }}</p>
        </div>
        <p class="me">{{ cat.conversation }}</p>
      </div>
    </div>

    {% assign project_list = site.projects | where: 'category', cat.title %}
    {% for post in project_list limit:3 %}
      <a href="{{ post.url }}" class="portfolio__item">
        <article>

          <picture class="portfolio__thumb">
            <source data-srcset="{{ post.image-webp }} 1x,
              {{ post.image-2x-webp }} 2x"
              type="image/webp" class="lazy">
            <img class="portfolio__thumb lazy" alt="{{ post.title }}"
              data-srcset="{{ post.image }} 1x,
                {{ post.image-2x }} 2x"
              data-src="{{ post.image }}"
              src="/static/img/placeholder.jpg">
          </picture>

          <h3 class="portfolio__title">
            {{ post.title }}
          </h3>

        </article>
      </a>
    {% endfor %}

    <div></div>
  </section>
{% endfor %}
