$(function () {
  // Sidebar toggle behavior
  $(".exibir-menu").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  var pesquisa = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/api/pesquisa.json',
  });
  
  $('.typeahead').typeahead(null, {
    name: 'pesquisa',
    source: pesquisa
  });


});
