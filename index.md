---
layout: default
---

<section class="intro">
  <p class="intro__text">Hey! I’m Floris, I study Design for Interaction and hope to improve our planet’s well-being, bit by bit. I also do some freelance web development, graphic design and photo&shy;graphy on the side.</p>
  <div style="--color: white;" class="intro__butt">
    <div class="you">Hi, that sounds a bit, uhm... ambitious—What are you doing to get there?</div>
    <a href="#projects" class="button">View my projects</a>
    <nav>
      <ul class="intro__jump">
        <li class="intro__list-item"><a href="#web+development">Web development</a></li>
        <li class="intro__list-item"><a href="#graphic+design">Graphic design</a></li>
        <li class="intro__list-item"><a href="#photography">Photography</a></li>
        <li class="intro__list-item"><a href="#contact">Contact</a></li>
        <li class="intro__list-item"><a href="/about.html">About</a></li>
      </ul>
    </nav>
  </div>
  <img src="/static/img/floris.jpg" class="intro__portrait" alt="Floris">
</section>

<section class="portfolio portfolio--industrial" id="projects">
  {% assign industrial_design_projects = site.projects | where: 'category', "industrial design" %}
  {% for post in industrial_design_projects %}
    <article class="portfolio__industrial"
      style="--color: #{{ post.color }}; --background: #{{ post.background }}">

      <a class="portfolio__image" href="{{ post.url }}">
        <img class="lazy" alt="{{ post.title }}"
          data-srcset="/static/img/{{ post.image }} 1x,
            /static/img/{{ post.image-2x }} 2x"
          src="/static/img/placeholder.jpg"
      data-src="/static/img/{{ post.image }}"
          src="/static/img/placeholder.jpg">
      </a>

      <div>
        <h2 class="portfolio__category">
          <a href="{{ post.url }}">{{ post.design_kind }}</a>
        </h2>

        <p class="portfolio__description">
          <a href="{{ post.url }}">{{ post.description }}</a>
        </p>

        <a class="button" href="{{ post.url }}">Read on</a>
      </div>

    </article>
  {% endfor %}
</section>

{% for cat in site.project_categories %}
  <section class="portfolio portfolio--other"
    style="--color: #{{ cat.color }}; --background: #{{ cat.background }};
    --gradient-start: #{{ cat.gradient-start }};
    --gradient-end: #{{ cat.gradient-end }}"
    id="{{ cat.title | url_encode }}">
    <h2 class="section-head">{{ cat.title | capitalize }}</h2>
    <div class="portfolio__about-cat">
      <div class="you-cont">
        <p class="you">{{ cat.you }}</p>
      </div>
      <div class="me">
        <p class="portfolio__conversation">{{ cat.conversation }}</p>
      </div>
    </div>
    {% assign project_list = site.projects | where: 'category', cat.title %}
    {% for post in project_list %}
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
