$(function () {
  // Sidebar toggle behavior
  $(".exibir-menu").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  var traducoes = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/api/traducoes.json',
  });
  
  $('.typeahead').typeahead(null, {
    name: 'pesquisa',
    source: traducoes,
    display: 'title'
  });


});
