// modal
$(function() {
  $('a[href="#settings"]').click(function(event) {
    event.preventDefault();
    $(this).modal({
      fadeDuration: 250,
      fadeDelay: 0.25,
    });
  });
});

// date picker
$(function() {
  $('input.datepicker-start').Zebra_DatePicker({
    direction: true,
    default_position: "below",
    offset: [3,-50],
    pair: $('input.datepicker-end')
  });

  $('input.datepicker-end').Zebra_DatePicker({
      direction: 1,
      offset: [3,-50],
      default_position: "below"
  });
});

// dropdown menu
$('a#menu-link').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();

  $('#menu').toggleClass('show');

  $(document).one('click', function closeMenu (e){
      if($('#menu').has(e.target).length === 0){
          $('#menu').removeClass('show');
      } else {
          $(document).one('click', closeMenu);
      }
  });
});

// submit button
function getData() {
  var x = document.getElementById("forecast-data");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  }
}

// multi-select menus
$(function() {
  $(".chosen-select").chosen({
    width: "100%"
  });
});
