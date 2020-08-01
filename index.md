---
layout: default
---

<div class="container">
  <div class="row">
    <div class="col-12">

      <div class="card mb-10">
        {% if post.featured %}
        <!-- Imagem em Destaque -->
          <img class="card-img-top"  src="{{ page.featured | prepend: site.baseurl }}" alt="Imagem em destaque de {{ page.title }}" />
        {% endif %}

        <!-- Título da Notícia -->
        <div class="card-header">
          <h2>{{ post.title }}</h2>
        </div>

        <!-- Autor e Data da Notícia -->
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-3">
                  <span>Por: {{ post.author }}</span>
                </div>
                <div class="col-4">
                  <span>Em: {{ post.date | date: "%d/%m/%Y" }} às {{ post.date | date: "%H:%M:%S" }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <!-- Conteúdo da Notícia -->
        <div class="card-body">
          <p class="card-text">{{ post.content }}</p>
        </div>

      </div>
    <div>
  </div>
</div>