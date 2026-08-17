---
layout: default
title: Literature
excerpt: Short bits about what I learn from literature I read.
---

# Literature I read

{: .posts}
{% for item in site.literature %}
- [{{ item.title }}]({{ item.url }}){: .title} {{item.date | date_to_long_string: "ordinal" }}
{% endfor %}
