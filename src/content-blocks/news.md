---
title: News
permalink: false
navUrl: news
subtitle: 
layout: page.njk
order: 0

author:
  image: 
  name: Overte e.V.
  date: 05.02.2022
tags: contentBlock
articleTopLinks: {
  
}
---
{{page.filePathStem}}
{% for newsPost in collections.news limit:3 reversed %}
<div class="news--post"> 
    <a href="{{ newsPost.url }}">
        <h2>{{ newsPost.data.title }}</h2>
        <div class="news--content">
            <div class="news--content-image"><img src="./img/news-teasers/{{ newsPost.data.teaserImage }}"></div>
            <div class="news--content-summary">
                <p>{{ newsPost.data.summary | safe }}</p>
                <p class="news--read-more">Read More</p>
            </div>
        </div>
    </a>
</div>
{% endfor %} 
