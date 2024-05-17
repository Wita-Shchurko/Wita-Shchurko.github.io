/* eslint-disable no-undef */
window.addEventListener("scroll", () => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

$(document).ready(function () {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    hamburger = $(".hamburger");

  $(".overlay-navigation").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
  });

  function overlay() {
    overlay_navigation.toggleClass("overlay-active");
    if (overlay_navigation.hasClass("overlay-active")) {
      overlay_navigation
        .removeClass("overlay-slide-up")
        .addClass("overlay-slide-down");
      nav_item_1
        .removeClass("slide-in-nav-item-reverse")
        .addClass("slide-in-nav-item");
      nav_item_2
        .removeClass("slide-in-nav-item-delay-1-reverse")
        .addClass("slide-in-nav-item-delay-1");
      nav_item_3
        .removeClass("slide-in-nav-item-delay-2-reverse")
        .addClass("slide-in-nav-item-delay-2");
      nav_item_4
        .removeClass("slide-in-nav-item-delay-3-reverse")
        .addClass("slide-in-nav-item-delay-3");
      hamburger.addClass("hamburger_active");
    } else {
      overlay_navigation
        .removeClass("overlay-slide-down")
        .addClass("overlay-slide-up");
      nav_item_1
        .removeClass("slide-in-nav-item")
        .addClass("slide-in-nav-item-reverse");
      nav_item_2
        .removeClass("slide-in-nav-item-delay-1")
        .addClass("slide-in-nav-item-delay-1-reverse");
      nav_item_3
        .removeClass("slide-in-nav-item-delay-2")
        .addClass("slide-in-nav-item-delay-2-reverse");
      nav_item_4
        .removeClass("slide-in-nav-item-delay-3")
        .addClass("slide-in-nav-item-delay-3-reverse");
      hamburger.removeClass("hamburger_active");
    }
  }

  $(".open-overlay").click(function () {
    overlay();
  });

  $(".overlay-navigation").on("click", "a", function (event) {
    event.preventDefault();
    overlay();
  });
});
