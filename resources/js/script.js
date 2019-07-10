$(document).ready(function() {
  /*Sticky NAV*/
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  /* Scroll en botones*/

  $(".js--scroll-to-plans").click(function() {
    console.log("asd");
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      2000
    );
  });

  $(".js--scroll-to-start").click(function() {
    console.log("asd");
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /*Animaciones en scroll de nav bar*/

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /*Animaciones*/
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-pulse").waypoint(
    function(direction) {
      $(".js--wp-pulse").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  /* Mobile nav*/
  $(".js--nav-icon").click(function(e) {
    var nav = $(".js--main-nav");

    nav.slideToggle(200);
  });
});
