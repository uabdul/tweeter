//Helper function that checks current character count and updates counter
$(document).ready(function() {
  $(".new-tweet textarea").on("input", function(e) {
    var counter = $(this).siblings(".counter");
    var length = $(this).val().length;
    counter.text(140 - length);
    if (length >= 140) {
      counter.css("color", "#FF0000");
    } else {
      counter.css("color", "#000000");
    }
  });
});