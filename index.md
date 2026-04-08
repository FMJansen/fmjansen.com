---
layout: home
color: ffffff
title: Home
---



# Floris Jansen

I’m a designer & developer. I care about inclusion, accessibility, privacy and sustainability.
{: .intro}

## I wrote about

{: .posts}
{% for post in site.posts %}
{% if post.link %}
- Written for {{ post.for }}: [{{ post.title }}]({{ post.link }}){: .title} {{post.date | date_to_long_string: "ordinal" }}&emsp;•&emsp;tagged: {{ post.tags | sort | join: ", " }}
{% else %}
- [{{ post.title }}]({{ post.url }}){: .title} {{post.date | date_to_long_string: "ordinal" }}&emsp;•&emsp;tagged: {{ post.tags | sort | join: ", " }}
{% endif %}
{% endfor %}

## What I do
- I’m a PhD candidate at [iHub](https://ihub.ru.nl/) working on the design of identity wallet implementations
- before, I was working as an interaction designer and researcher at [Hike&nbsp;One](https://hike.one/)
- with some friends I’ve been making [Op wie kan ik stemmen](https://opwiekanikstemmen.nl/) in 2021, 2023 and 2025 for the Dutch elections
- [Inclusief&nbsp;Design](https://inclusief.design/) is my side project about inclusion in design
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
- 💬 [Telegram](https://telegram.me/fmjansen){: rel="me"}
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