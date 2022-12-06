---
title: Gallery
permalink: false
navUrl: gallery
subtitle: 
layout: page.njk
order: 4

author:
  image: 
  name: Overte e.V.
  date: 05.02.2022
tags: contentBlock
articleTopLinks: {
  
}
---

<div id="gallery">
{% for image in collections.images %}
<div class="cssbox">
<a href="#image{{forloop.index}}" id="image{{forloop.index}}" class="cssbox-link"><img src="{{image.thumbpath | url}}" class="cssbox_thumb">
<span class="cssbox_full"><img src="{{image.path | url}}"></span>
</a>
<a class="cssbox_close" href="#void"></a>
{% if forloop.first == false %}<a class="cssbox_prev" href="#image{{ forloop.index | minus: 1 }}">&lt;</a>{% endif %}{% if forloop.last == false %}<a class="cssbox_next" href="#image{{ forloop.index | plus: 1}}">&gt;</a>
{% endif %}
</div>
{% endfor %}
</div>
