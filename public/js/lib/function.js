import $ from 'jquery'

export function scrollDown(e) {
  e.preventDefault();
  var nextSection = $('i[data-id="#about"]').attr("data-id");
  $("html, body").animate(
    { scrollTop: $(nextSection).offset().top - 85 },
    {
      duration: "swing",
      complete: function () {
        $(`.nav-menu ${nextSection}`).addClass("active");
        $(document).on("scroll", onScroll);
      },
    }
  );
}