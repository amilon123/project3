$.noConflict();

(function($) {
  $('html').removeClass('no-js').addClass('js');
  $('#usercomment-form').append('<ul id="results">');
  $('#usercomment-form').on('submit', function(e) {
    var tip = $('#tip').val();
    e.preventDefault();
    console.log("Form submitted!");
    $.get(url, function(data) {
      console.log("YOUR SUGGESTION:", data);
    );
  });

  $('abbr[title]').on('click', function() {
    $(this).text(
      $(this).attr('title') + " (" + $(this).text() + ")")
  );
   $(this).addClass('expanded');
});

})(jQuery);
