$(document).ready(function() {
  $('#submit-search').on('click', function(evt) {
    evt.preventDefault();
    let searchTerm = $('#giphy-search').val();
    $.get(
      'http://api.giphy.com/v1/gifs/search',
      {
        q: searchTerm,
        api_key: 'dc6zaTOxFJmzC'
      },
      searchGiphies
    );
  });

  $('#remove-images').on('click', function(evt) {
    evt.preventDefault();
    $('#giphies-wrapper').empty();
  });

  function searchGiphies(res) {
    let random = Math.floor(Math.random() * res.data.length);
    let giphyURL = res.data[random].images.original.url;
    let $giphy = $('<img>').attr('src', giphyURL);
    $('#giphies-wrapper').append($giphy);
  }
});
