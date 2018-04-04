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
    format: "m-d-y",
    default_position: "below",
    offset: [5,-5],
    pair: $('input.datepicker-end')
  });

  $('input.datepicker-end').Zebra_DatePicker({
      direction: 1,
      format: "m-d-y",
      offset: [5,-5],
      default_position: "below"
  });
});

// dropdown menu
function dropdownMenu() {
  var x = document.getElementById("dropdown-content");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

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
    max_selected_options: 3,
    width: "100%"
  });
});
