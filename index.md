---
layout: home
---
{% assign posts = site.noticias | sort: 'date' %}
{% for post in posts reversed %}
  <div class="container">
    <div class="row">
      <div class="col-4">
        <!-- Imagem em Destaque -->
        {% if post.thumbnail %}
          <img class="img-thumbnail"  src="{{ post.thumbnail | prepend: site.baseurl }}" alt="Imagem em destaque de {{ post.title }}" />
        {% else %}
          <img class="img-thumbnail"  src="https://via.placeholder.com/400" alt="Imagem em destaque" />        
        {% endif %}
      </div>
      <div class="col-8">

        <div class="container">

          <div class="row">
            <div class="col-12">
              <ul class="nav">
              {% for cat in post.categories %}
                  <li class="nav-item">
                    {% if forloop.first == false %}
                    <a class="nav-link">{{ cat }}</a>
                    {% else %}
                    <a class="nav-link pl-1">{{ cat }}</a>
                    {% endif %}
                  </li>
              {% endfor %}
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <h2><a class="text-success" href="{{ post.url }}" alt="{{ post.title }}">{{ post.title }}</a></h2>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <p>{{ post.excerpt | strip_html }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <span>{{ post.date | date: "%d/%m/%Y às %H:%M:%S"}}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>

  {% if forloop.last == false %}
  <!-- Separador -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <hr />
      </div>
    </div>
  </div>
  {% endif %}

{% endfor %}
