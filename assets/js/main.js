$(function () {
  // Sidebar toggle behavior
  $(".exibir-menu").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  // Search system
  var traducoes = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace(
      "title",
      "game_title",
      "patch_author",
      "patch_group"
    ),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/pesquisa/traducoes.json",
  });

  var romhacks = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace(
      "title",
      "game_title",
      "patch_author",
      "patch_group"
    ),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/pesquisa/romhacks.json",
  });

  var tutoriais = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace(
      "title",
      "author",
      "group"
    ),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/pesquisa/tutoriais.json",
  });

  var utilitarios = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace(
      "title",
      "author",
      "group"
    ),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/pesquisa/utilitarios.json",
  });

  $(".typeahead").typeahead(
    null,
    {
      name: "traducoes",
      source: traducoes,
      display: "title",
      templates: {
        header: '<h3 class="pesquisa-resultado-tipo">Traduções</h3>',
        suggestion: Handlebars.compile(
          '<div><span class="tt-suggestion-cat">[{{system}}]</span> – {{title}}</div>'
        ),
      },
    },
    {
      name: "romhacks",
      source: romhacks,
      display: "title",
      templates: {
        header: '<h3 class="pesquisa-resultado-tipo">Romhacks</h3>',
        suggestion: Handlebars.compile(
          '<div><span class="tt-suggestion-cat">[{{system}}]</span> – {{title}}</div>'
        ),
      },
    },
    {
      name: "tutoriais",
      source: tutoriais,
      display: "title",
      templates: {
        header: '<h3 class="pesquisa-resultado-tipo">Tutoriais</h3>',
        suggestion: Handlebars.compile(
          '<div><span class="tt-suggestion-cat">[{{category}}]</span> – {{title}}</div>'
        ),
      },
    },
    {
      name: "utilitarios",
      source: utilitarios,
      display: "title",
      templates: {
        header: '<h3 class="pesquisa-resultado-tipo">Utilitários</h3>',
        suggestion: Handlebars.compile(
          '<div><span class="tt-suggestion-cat">[{{category}}]</span> – {{title}}</div>'
        ),
      },
    }
  );

  $(".typeahead").bind("typeahead:select", function (ev, suggestion) {
    window.location.href = suggestion.url;
  });

  // Forum RSS
  const RSS_URL = `https://codepen.io/picks/feed/`;

  $.ajax(RSS_URL, {
    accepts: {
      xml: "application/rss+xml",
    },
    dataType: "xml",
    success: function (data) {
      $(data)
        .find("item")
        .each(function () {
          const el = $(this);
          const title = $(el).find("title").text();
          const link = $(el).find("link").text();
          const template = Handlebars.compile(
            '<li class="list-group-item"><a href="{{link}}" target="_blank" rel="noopener">{{title}}</a></li>'
          );
          $('#forum-latest').append(template);
        });
    },
  });
});
