jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("wheel", handle, { passive: false });
  },
};

var slider = {
  slideIds: ["slide-1", "slide-2", "slide-3", "slide-4"],
  index: 0,
  canScroll: true,
  lastTimestamp: 0,
  lastWheelDelta: 0,
};

function slideTo(slideIndex) {
  slider.canScroll = false;
  slider.index = slideIndex;
  var translateY = -slideIndex * 100 + "vh"; // Calculate the translateY value
  jQuery(".slide-container").css("transform", "translateY(" + translateY + ")"); // Apply transform
  jQuery("a[href^='#']").removeClass("active-bullet");
  jQuery('a[href="#' + slider.slideIds[slider.index] + '"]').addClass(
    "active-bullet"
  );

  // Show or hide images based on slide index
  if (slideIndex === 0) {
    jQuery(".img-wrapper img").css("opacity", 1); // Show all images for the first slide
  } else {
    jQuery(".img-wrapper img").css("opacity", 1); // Show all images initially
    jQuery(".img-wrapper img:lt(" + slideIndex + ")").css("opacity", 0); // Hide images up to the current slide index
  }

  // Scale images based on slide index
  var totalSlides = slider.slideIds.length - 1; // Total number of slides (0-based index)
  var scaleFactor = 1 + 0.2 * (slideIndex / totalSlides); // Calculate scale factor
  jQuery(".img-wrapper img").css("transform", "scale(" + scaleFactor + ")");

  // Change background color of .fixed-area based on slide index
  var bgColor;
  switch (slideIndex) {
    case 0:
      bgColor =
        "linear-gradient(to right bottom, #fff, #ddd, rgba(77, 125, 96, 0.5))";
      break;
    case 1:
      bgColor = "linear-gradient(to right bottom, #fff, #E0EBED)";
      break;
    case 2:
      bgColor =
        "linear-gradient(to right bottom, #fff, #ddd, rgba(88, 96, 98,.5)";
      break;
    case 3:
      bgColor =
        "linear-gradient(to right bottom, #fff, #ddd, rgba(164, 64, 64, 0.5))";
      break;
    default:
      bgColor =
        "linear-gradient(to right bottom, #fff, #ddd, rgba(77, 125, 96, 0.5))";
  }
  jQuery(".fixed-area").css("background", bgColor);

  setTimeout(function () {
    slider.canScroll = true;
  }, 600);
}

jQuery(window).on("wheel", function (event) {
  event.preventDefault();
  var domEvent = event.originalEvent;
  var delta = domEvent.deltaY;
  var wheelDelta = domEvent.wheelDeltaY;
  var timeDelta = Date.now() - slider.lastTimestamp;
  slider.lastTimestamp = Date.now();
  var wheelDeltaDelta = Math.abs(
    Math.abs(wheelDelta) - Math.abs(slider.lastWheelDelta)
  );

  if (wheelDeltaDelta > 10) {
    slider.lastTimestamp = 0;
  }
  slider.lastWheelDelta = wheelDelta;

  if (slider.canScroll && timeDelta > 100) {
    if (delta > 1) {
      slider.index += 1;
      if (slider.index >= slider.slideIds.length)
        slider.index = slider.slideIds.length - 1;
    } else if (delta < -1) {
      slider.index -= 1;
      if (slider.index < 0) slider.index = 0;
    }

    slideTo(slider.index);
  }
});

jQuery.each(slider.slideIds, function (index, value) {
  jQuery("#" + value).attr("data-index", index);
});

jQuery("ul.bullets a[href^='#']").click(function (e) {
  e.preventDefault();
  var index = parseInt($($(this).attr("href")).attr("data-index"));
  slideTo(index);
});

// Enable click on links inside slides
jQuery(".description a").click(function (e) {
  e.stopPropagation();
});
