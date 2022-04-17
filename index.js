$(document).ready(function () {
  //toggle up button
  $(".toggle-up").hide();

  $(document).scroll(function () {
    var y = window.scrollY;
    if (y >= 100) {
      $(".toggle-up").show();
    } else {
      $(".toggle-up").hide();
    }
  });

  //side nav toggle
  $("#menu").click(function () {
    $("#sideNavbar").toggle("slow");
  });

  // drop down list for opp nav button
  $(".list-op").click(function () {
    $(".opportunities-list").slideToggle("slow");
  });

  // drop down list for opp side nav button
  $(".sidelist-op").click(function () {
    $(".side-list").slideToggle("slow");
  });

  //hides side nav when links are clicked
  $("#link1,#link2,#link3,#link4-1,#link4-2,#link4-3,#link4-4,#link4-5").click(
    () => {
      $("#sideNavbar").hide();
    }
  );

  // closing button for side nav
  $("#close").click(() => {
    $("#sideNavbar").hide();
  });

  //undeline links for active link although works only for hash links
  $(".nav-links").click(function () {
    if ($(".navbar-list a").removeClass("active")) $(this).addClass("active");
  });
  //setting images and its data
  var images = ["./assets/01.png", "./assets/02.png", "./assets/03.png"];
  //auto change image data
  $(function () {
    var i = 0;
    setInterval(function () {
      i++;
      if (i == images.length) {
        i = 0;
      }

      $("#radio" + (i + 1)).trigger("click");
    }, 8000);
  });

  //imgs data
  var strings = {
    pics: {
      first: {
        url: images[0],
        topLine: "we are committed to ..",
        heading: "Adding value to your investment",
        des: "All over Kingdom's airports facilities and servies to grow your business success.",
        btn: "Explore Opportunities",
      },
      sec: {
        url: images[1],
        topLine: "3 millions passengers per Year",
        heading: "get your Advertisment spot",
        des: "Explore advertisement opportunities on most viewed locations at airports.",
        btn: "Explore Opportunities",
      },
      third: {
        url: images[2],
        topLine: "300+",
        heading: "new investment opportunities",
        des: "AT KING ABDULAZIZ INTERNATIONAL AIRPORT (TERMINAL 1)",
        btn: "View more",
      },
    },
  };

  //on click radio inputs changes content and background
  $("#radio1").click(() => {
    var pic = strings.pics.first;

    $(".nav-hero-ctn").css({
      "background-image": "url(" + pic.url + ")",
      width: "100%",
      height: "100%",
      "background-size": "contain auto",
      "background-repeat": "no-repeat",
    });
    $(".topLine").html(pic.topLine);
    $(".heading").html(pic.heading);
    $(".description").html(pic.des);
    $("#action-btn").html(pic.btn);
  });

  $("#radio2").click(() => {
    var pic = strings.pics.sec;
    $(".nav-hero-ctn").css({
      "background-image": "url(" + pic.url + ")",
      width: "100%",
      height: "100%",
      "background-size": "contain auto",
      "background-repeat": "no-repeat",
    });
    $(".topLine").html(pic.topLine);
    $(".heading").html(pic.heading);
    $(".description").html(pic.des);
    $("#action-btn").html(pic.btn);
  });
  $("#radio3").click(() => {
    var pic = strings.pics.third;
    $(".nav-hero-ctn").css({
      "background-image": "url(" + pic.url + ")",
      width: "100%",
      height: "100%",
      "background-size": "contain auto",
      "background-repeat": "no-repeat",
    });
    $(".topLine").html(pic.topLine);
    $(".heading").html(pic.heading);
    $(".description").html(pic.des);
    $("#action-btn").html(pic.btn);
  });
});
