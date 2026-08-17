---
layout: default
title: Publications
excerpt: The scientific articles co-wrote.
---

# Publications

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
