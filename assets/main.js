$(document).ready(function () {
  function isMobile() {
    var newWindowWidth = $(window).width();
    return newWindowWidth < 481;
  }

  function transform_home() {
    if ($(".filter-button").hasClass("active")) {
      $(".grow").hide();
      $(".grow.filtered").slice(0, 6).show();
      if ($(".grow.filtered:hidden").length != 0) {
        $("#loadMore").show();
      } else {
        $("#loadMore").hide();
      }
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".grow.filtered:hidden").slice(0, 6).show();

        if ($(".grow.filtered:hidden").length == 0) {
          $("#loadMore").hide();
        }
      });
    } else {
      $(".grow").hide();
      $(".grow").slice(0, 6).show();

      if ($(".grow:hidden").length != 0) {
        $("#loadMore").show();
      } else {
        $("#loadMore").hide();
      }

      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".grow:hidden").slice(0, 6).show();
        if ($(".grow:hidden").length == 0) {
          $("#loadMore").hide();
        }
      });
    }
  }

  $(".filter-button").click(function () {
    $(this).addClass("active");
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000")
        .removeClass("filtered");
      $(".filter")
        .filter("." + value)
        .show("3000")
        .addClass("filtered");
    }

    $(this).focus();

    if (isMobile()) {
      transform_home();
    }
  });

  $("#loadMore").hide();

  if (isMobile()) {
    transform_home();
  }

  $(window).on("resize", function (e) {
    if (isMobile()) {
      transform_home();
    }
  });
  $(".custom-select").click(function () {
    $(this).toggleClass("custom-select-1");
  });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
