$(function() {
  $('#contact-form').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: "http://localhost:5001/formsub_endpoint",
        method: "POST",
        data: {
          name: $("#contact-form input#name").val(),
          city: $("#contact-form input#city").val(),
        },
        success: handleSuccess,
        error: handleError,
      });
  });
});
function handleSuccess(data) {
  $("#message").html("success function");
}
function handleError(data) {
  $("#message").html("error function");
}
