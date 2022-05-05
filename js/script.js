// handling navbar animation
$(".burger.navb").click(() => {
    $(".main-navbar .links").toggleClass("active");
    $(".burger.navb").toggleClass("toggle");
  });
  
  // handling the black navbar while scrolling
$(window).on("scroll", () => {
    if ($(window).scrollTop()) {
      $(".main-navbar").addClass("black-navbar");
    } else {
      $(".main-navbar").removeClass("black-navbar");
    }
  });