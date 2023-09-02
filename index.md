---
layout: home
color: ffffff
title: Home
---



# Hej ✨ I’m Floris
{: .home}

I’m a designer & developer. I care about inclusion, accessibility, privacy and sustainability. ❤️ 🌱
{: .intro}

## I wrote about

{: .posts}
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}){: .title} {{post.date | date_to_long_string}}
{% endfor %}

## What I do
- at [Hike&nbsp;One](https://hike.one/) I’m doing interaction design and research
- [Inclusief&nbsp;Design](https://inclusief.design/) is my side project about inclusion in design
- I build websites for things like [This&nbsp;is&nbsp;Gendered](https://thisisgendered.org) and [Scouting&nbsp;Oost&nbsp;1](https://scoutingoost1.nl/)
- [my graduation](https://graduation.fmjansen.com/) was about making sustainable renovations more inclusive
- [my photos](https://photos.fmjansen.com/) are cool (I think)
- once in a while I’ll give a [workshop](/workshops.html)
{: .activities}

## Right now, I’m
- ...probably annoyed by password requirements somewhere
{: #currently .activities}

## Other places
{: .social}
- 🔑 [Keybase](https://keybase.io/fmjansen){: rel="me"}
- 🦣 [Mastodon](https://freeradical.zone/@floris){: rel="me"}
- 🖼 [Instagram](https://www.instagram.com/fmjansennl){: rel="me"}
- 💼 [LinkedIn](https://linkedin.com/in/florismartijnjansen){: rel="me"}
- 💻 [Github](https://github.com/fmjansen){: rel="me"}
- 🎧 [Last.fm](https://www.last.fm/user/lastfmjansen){: rel="me"}
- 💬 [Telegram](https://telegram.me/fmjansen){: rel="me"}
- 💌 [E-mail](mailto:hej@fmjansen.nl)
{: .social}

## Webrings
{: .social}
Webrings are an old-school way of linking and discovering websites. 
{: .social}

<nav class="a11y-webring-club" aria-labelledby="a11y-webring-club">
  <h3 id="a11y-webring-club">a11y-webring.club</h3>
  <p>This site is a member of the <a rel="external" href="https://a11y-webring.club/">a11y-webring.club</a>.</p>
  <ul class="social">
    <li><a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/prev">Previous website</a></li>
    <li><a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/random">Random website</a></li>
    <li><a rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/next">Next website</a></li>
  </ul>
</nav>