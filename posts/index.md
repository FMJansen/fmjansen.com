---
layout: default
title: Posts
excerpt: My blog-like posts.
---

# Posts

{: .posts}
{% for post in site.posts %}
{% if post.link %}

{% else %}
- [{{ post.title }}]({{ post.url }}){: .title} {{post.date | date_to_long_string: "ordinal" }}&emsp;•&emsp;tagged: {{ post.tags | sort | join: ", " }}
{% endif %}
{% endfor %}