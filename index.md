---
layout: default
color: ffffff
---

<section class="intro">
  <p class="intro__text">
    <span class="intro__part">Hej!</span>
    <a class="intro__part delayed delayed--1 intro__text-link"
      href="/about.html">I’m Floris,</a>
    <span class="intro__part delayed delayed--2">I study Design for Interaction and hope to improve our planet’s well-being, bit by bit.</span>
  </p>
  <img src="/static/img/floris.jpg" alt="Floris"
    class="intro__portrait intro__part delayed delayed--1">
  <div style="--color: white;"
    class="intro__butt intro__part delayed delayed--3">
    <div class="me">I also do some freelance web development, graphic design and photo&shy;graphy on the side.</div>
    <div class="you">Hi, that sounds a bit, uhm... ambitious—What are you doing to get there?</div>
    <a href="#projects" class="button intro__button">View my projects</a>
    <a href="/about.html" class="intro__link">About me</a>
  </div>
</section>

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
