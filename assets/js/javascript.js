document.getElementsByTagName("body")[0].classList.add("loaderlodging__body");
window.onload = function () {
  document.getElementsByClassName("loaderlodging")[0].classList.add("remove");
  document
    .getElementsByClassName("loaderlodging__body")[0]
    .classList.add("afterloading");
};



let bars = document.querySelector(".bars");
let phone = document.querySelector(".phone");
let phone_slide = document.querySelector(".phone-slide");
let closes = document.querySelector(".closes");

bars.onclick = () => {
  phone.classList.add("flex");
  setTimeout(() => {
    phone_slide.classList.add("left-0");
  }, 100);
};
closes.onclick = () => {
  setTimeout(() => {
    phone.classList.remove("flex");
  }, 1000);
  phone_slide.classList.remove("left-0");
};




let header = document.querySelector("header .head");
let end = document.querySelector(".end");

window.onscroll = function () {
  if (scrollY >= 250) {
    header.classList.add("header-fixed");
    end.classList.add("d-block");
  } else {
    header.classList.remove("header-fixed");
    end.classList.remove("d-block");
  }
};
end.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// let dark = document.querySelector(".btn-dark-mood label");
// let body = document.querySelector("body");
// let revi = document.querySelector(".section-review");
// let section = document.querySelectorAll("section");
// let alltext = document.querySelectorAll(
//   "a , p , h1 , h2 , h3 , h4 , h5 , h6 , i"
// );
// let logo = document.querySelector("header .logo .dark-logo");
// // let logo_foot = document.querySelector("footer .logo .dark-logo")

// dark.onclick = () => {
// section.forEach((chil, index) => {
//   if (chil.querySelector(".bg")) {
//     chil.classList.toggle("white-mode");
//   }
// });
//   // header.classList.toggle("black");
//   // logo_foot.classList.toggle("ml-logo-footer")
//   body.classList.toggle("black");
//   logo.classList.toggle("ml-logo");
//   alltext.forEach((ele, ind) => {
//     ele.classList.toggle("c-black");
//   });
//   revi.classList.toggle("white");


// };
AOS.init();

const targets = document.querySelectorAll(".works .card img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll"); // ✔ لكل عنصر لوحده
      }
    });
  },
  {
    threshold: 0.8,
  }
);

// لازم تراقب كل عنصر لوحده
targets.forEach((el) => observer.observe(el));

$(".autoplay")
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    rtl: true,
  })
  .slickAnimation();
// // ////autoplay 2
(function ($) {
  "use strict";

  if (screen.width <= 350) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 768) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 991) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width >= 991) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  }

  if (screen.width <= 350) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 768) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 991) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width >= 991) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  }
})(jQuery);

// start basic
// const counters = document.querySelectorAll('.count');
// let animated = false;

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && !animated) {
//       animated = true; // تأكد إنه يشتغل مرة واحدة فقط
//       $('.count').each(function () {
//         $(this).prop('Counter', 0).animate({
//           Counter: $(this).text()
//         }, {
//           duration: 1500,
//           easing: 'linear',
//           step: function (now) {
//             $(this).text(Math.ceil(now));
//           }
//         });
//       });
//       observer.disconnect(); // وقف المراقبة بعد التشغيل
//     }
//   });
// }, {
//   threshold: 0.5 // يبدأ لما 50% من العنصر يكون ظاهر
// });

// // سجل كل عنصر للمراقبة
// counters.forEach(counter => {
//   observer.observe(counter);
// });

// // //////load
// دالة الكتابة التلقائية
function autoType(
  element,
  text,
  typeSpeed,
  deleteSpeed,
  waitBeforeDelete,
  waitBetweenWords,
  loop
) {
  let i = 0; // مؤشر الحروف
  let deleting = false; // لتحديد إذا كنا في وضع الحذف
  let textContent = ""; // النص الذي سيتم كتابته أو حذفه

  function type() {
    if (!deleting) {
      textContent += text[i];
      element.textContent = textContent;
      i++;

      // التوقف بعد كتابة النص بالكامل
      if (i < text.length) {
        setTimeout(type, typeSpeed);
      } else {
        // if (loop) {
        //   setTimeout(deleteText, waitBeforeDelete);
        // }
      }
    }
  }

  // دالة الحذف التلقائي
  function deleteText() {
    deleting = true;
    textContent = textContent.slice(0, -1);
    element.textContent = textContent;
    if (textContent.length > 0) {
      setTimeout(deleteText, deleteSpeed);
    } else {
      deleting = false;
      i = 0;
      setTimeout(type, waitBetweenWords);
    }
  }

  // بدء الكتابة التلقائية
  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const autoElements = document.querySelectorAll(".auto");

  autoElements.forEach((ele) => {
    const exampleText = ele.textContent.trim();
    ele.textContent = ""; // مسح النص الحالي داخل العنصر
    autoType(ele, exampleText, 20, 50, 2000, 500, true); // بدء الكتابة التلقائية
  });
});


// end basic
// scroll image

// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });

// let collapse = document.querySelectorAll(".why-us .collaps ");
// let collapse_rotate = document.querySelectorAll(".why-us  .change");
// let collapse_btn = document.querySelectorAll(".why-us  .blus-open-info i");
// // let collapse_bg = document.querySelectorAll(".why-us .collaps");

// collapse.forEach((ele, ind) => {
//   ele.onclick = () => {
//     collapse_btn.forEach((ele2, ind2) => {
//       if (ind == ind2) {
//         ele2.classList.toggle("rotate");
//         ele.classList.toggle("bg-collapsed");
//       } else {
//       }
//     });
//   };
// });
// $(document).ready(function() {
//     var progress_circle = $(".my-progress-bar").gmpc({
//         line_width: 6,
//         color: "#1ABC9C",
//         starting_position: 25,
//         percent: 25,
//         percentage: true,
//         text: "JQuery Script Net"
//     }).gmpc('animate', 80, 1000);
// });
// // end slider
// ////////////////////////
// // start animation scroll

// // end animation scroll
// //////////////////////////////

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["-100%", 0, 0],
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // يخلي النقاط قابلة للضغط
  },
});
var limits = 15;
$(".style .card").mousemove(function (e) {
  var $this = $(this);
  var rect = $this[0].getBoundingClientRect();
  var offsetX = (e.clientX - rect.left) / rect.width;
  var offsetY = (e.clientY - rect.top) / rect.height;
  var rotateY = offsetX * limits * 2 - limits;
  var rotateX = offsetY * limits * 2 - limits;
  var shadowX = offsetX * 32 - 16;
  var shadowY = offsetY * 32 - 16;

  $this.css({
    transform:
      "perspective(1000px) rotateX(" +
      -rotateX +
      "deg) rotateY(" +
      rotateY +
      "deg)",
    "box-shadow":
      (1 / 6) * -shadowX +
      "px " +
      (1 / 6) * -shadowY +
      "px 3px rgba(0,0,0,0.05)",
  });
  $this.find(".glare").css("left", rotateX + rotateY + 20 + "%");
});

$(".style .card").mouseleave(function () {
  $(this).css({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    "box-shadow": "0 10px 20px rgba(0,0,0,0.1)",
  });
  $(this).find(".glare").css("left", "-0% ");
});

var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2, // عدد الشرائح الواضحة في المنتصف
  loop: true,
  coverflowEffect: {
    rotate: 0, // خفف الدوران عشان شكلهم يبقى مستقيم
    stretch: 100, // مسافة بين السلايدز (زود أو قلل للتجربة)
    depth: 300, // العمق (البُعد 3D)
    modifier: 1.5, // تأثير أقوى للحركة
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
});

window.addEventListener("load", function () {
  var swiper = new Swiper(".mySwiper3", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 170, // ← زوّد دي للميل أكتر
      stretch: 0,
      depth: 150, // ← العمق (المسافة بين الصور)
      modifier: 1,
      slideShadows: true,
    },
  });
});
document.querySelectorAll(".collap button").forEach((el, ind) => {
  el.onclick = () => {
    document.querySelectorAll(".collap .fa-angle-down").forEach((el2, ind2) => {
      if (ind == ind2) {
        el2.classList.toggle("rotate180");
      }
    });
  };
});

// // // start auto type
// document.addEventListener("DOMContentLoaded", function() {
//   const exampleText = ['عميد الكليه'];
//   const exampleTyping = new AutoTyping('.auto', exampleText, {
//       typeSpeed: 50,
//       deleteSpeed: 50,
//       waitBeforeDelete: 2000,
//       waitBetweenWords: 500,
//   });
//   exampleTyping.start()
// });
// // ///////////////////////////////

// // start counter
//      // count in who us slide

// // end count in who us slide

// // // ///////////////////////////////
// $(document).ready(function(){
//   // تهيئة Slick Slider
//   $('.your-slider-class').slick({
//     // أي إعدادات تحتاجها للسلايدر
//   });

//   // ضبط نفس الارتفاع لجميع البطاقات بعد التهيئة
//   adjustCardHeights();

//   // إعادة ضبط الارتفاع عند التحديث أو التغيير في السلايدر (إذا كان لديك محتوى متغير)
//   $(window).on('resize', function() {
//     adjustCardHeights();
//   });

//   function adjustCardHeights() {
//     var maxHeight = 0;

//     // العثور على أكبر ارتفاع
//     $('.slick-slide').each(function() {
//       var thisHeight = $(this).outerHeight();
//       if (thisHeight > maxHeight) {
//         maxHeight = thisHeight;
//       }
//     });

//     // تعيين نفس الارتفاع لجميع البطاقات
//     $('.slick-slide').each(function() {
//       $(this).height(maxHeight);
//     });
//   }
// });
// let table =document.querySelectorAll(".travel-table li")

// table.forEach((ele , ind)=>{
// ele.onclick = ()=>{
// ele.classList.toggle("active")
// }
// })
$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
  });

  $(".image-popup-fit-width").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".image-popup-no-margins").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".videoplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },

        // you may add here more sources
      },

      srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
  });
});
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      // titleSrc: function(item) {
      // 	return item.el.attr('title') + ' by Marsel Van Oosten';
      // }
    },
  });
});
