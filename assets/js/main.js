$(function () {
  // Sidebar toggle behavior
  $(".exibir-menu").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  var traducoes = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/traducoes.json",
  });

  var romhacks = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/romhacks.json",
  });

  var tutoriais = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/tutoriais.json",
  });

  var utilitarios = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "/api/utilitarios.json",
  });

  $(".typeahead").typeahead(null, {
    name: "traducoes",
    source: traducoes,
    display: "title",
    templates: {
      header: '<h3 class="pesquisa-resultado-tipo">Traduções</h3>',
    },
  },{
    name: "romhacks",
    source: romhacks,
    display: "title",
    templates: {
      header: '<h3 class="pesquisa-resultado-tipo">Romacks</h3>',
    },
  },{
    name: "tutoriais",
    source: tutoriais,
    display: "title",
    templates: {
      header: '<h3 class="pesquisa-resultado-tipo">Tutoriais</h3>',
    },
  },{
    name: "utilitarios",
    source: utilitarios,
    display: "title",
    templates: {
      header: '<h3 class="pesquisa-resultado-tipo">Utilitários</h3>',
    },
  });

  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    console.log('Selection: ' + suggestion);
  });
});
