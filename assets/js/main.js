$(function () {
  // Sidebar toggle behavior
  $(".exibir-menu").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  var pesquisa = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/api/pesquisa.json',
  });
  
  $('#pesquisa').typeahead(null, {
    name: 'pesquisa',
    display: 'title',
    source: pesquisa
  });


});
