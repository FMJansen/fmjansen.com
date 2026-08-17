---
layout: home
color: ffffff
title: Home
---



I’m a designer, developer and [PhD student](/posts/started-phd/) at iHub, Radboud University. I care about inclusion, accessibility, privacy and sustainability.
{: .intro}

## I wrote about

{: .posts}
{% for post in site.posts %}
{% if post.link %}

{% else %}
- [{{ post.title }}]({{ post.url }}){: .title} {{post.date | date_to_long_string: "ordinal" }}&emsp;•&emsp;tagged: {{ post.tags | sort | join: ", " }}
{% endif %}
{% endfor %}

## Publications

{% assign publications = site.data.orcid.groups %}
{: .posts}
{% for item in publications %}
  {% assign publication = item.works[0] %}
  {% assign date = publication.publicationDate %}
  - {% if publication.journalTitle.value %}
      {{ publication.journalTitle.value }} ({{ date.year }})
    {% else %}
      {{ date.year }}
    {% endif %}
    [{{ publication.title.value }}]({{ publication.workExternalIdentifiers[0].url.value }}){: .title}
    {% for author in publication.contributorsGroupedByOrcid %}
      {{ author.creditName.content }}{% unless forloop.last %},{% endunless %} {% endfor %}
    
    DOI: {{ publication.workExternalIdentifiers[0].externalIdentifierId.value }}
{% endfor %}

## Literature I read

{: .posts}
{% for item in site.literature %}
- [{{ item.title }}]({{ item.url }}){: .title} {{item.date | date_to_long_string: "ordinal" }}
{% endfor %}


## Side projects

- ![](/assets/img/owkis.svg){:loading='lazy'}
  [Op wie kan ik stemmen](https://opwiekanikstemmen.nl/)
  _candidate list for Dutch national elections_
- ![](/assets/img/inc.svg){:loading='lazy'}
  [Inclusief Design](https://inclusief.design/)
  _about inclusion and design in NL_
{: .projects}

## What else I do
- I build websites for things like [This&nbsp;is&nbsp;Gendered](https://thisisgendered.org) and [Scouting&nbsp;Oost&nbsp;1](https://scoutingoost1.nl/)
- [my graduation project](https://graduation.fmjansen.com/) was about making sustainable renovations more inclusive
- [my photos](https://photos.fmjansen.com/) are cool (I think)
- once in a while I’ll give a [workshop](/workshops.html)
{: .activities}

## Right now, I’m
- ...probably annoyed by password requirements somewhere
{: #currently .activities}

## Other places
{: .social}
- 🟢 [ORCID](https://orcid.org/0009-0008-6667-1129){: rel="me"}
- 🔑 [Keybase](https://keybase.io/fmjansen){: rel="me"}
- 🦣 [Mastodon](https://freeradical.zone/@floris){: rel="me"}
- 💼 [LinkedIn](https://linkedin.com/in/florismartijnjansen){: rel="me"}
- 💻 [Github](https://github.com/fmjansen){: rel="me"}
- 🎧 [Last.fm](https://www.last.fm/user/lastfmjansen){: rel="me"}
- 💬 [Delta Chat](https://i.delta.chat/#FB60730389417E0221B312AFA1109D285021A9DC&v=3&i=70lZf7fOpNJwrWwnOoMMqwOz&s=-iSBbDKGeJm9dLeVNBuW2T_e&a=go%40chat.fmjansen.com&n=Floris+M+Jansen){: rel="me"}
- 📮 [Telegram](https://telegram.me/fmjansen){: rel="me"}
- 💌 [E-mail](mailto:hej@fmjansen.nl)
{: .social}

<nav class="a11y-webring-club" aria-labelledby="a11y-webring-club">
  <h2 id="a11y-webring-club">a11y-webring.club</h2>
  <p>Webrings are an old-school way of linking and discovering websites. This site is a member of the <a rel="external" href="https://a11y-webring.club/">a11y-webring.club</a>.</p>
  <ul class="social">
    <li><a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/prev">Previous website</a></li>
    <li><a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/random">Random website</a></li>
    <li><a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/next">Next website</a></li>
  </ul>
</nav>