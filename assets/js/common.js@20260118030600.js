let mediaQueryList = window.matchMedia("(max-width: 820px)");
function listener(a) {
    (a.matches ? (document.querySelector("#js_gnavBtn").addEventListener("click", gnavFuncSP),
    gnavResetFuncSP) : gnavResetFuncPC)()
}
mediaQueryList.addEventListener("change", listener),
listener(mediaQueryList);
var state = !1;
function gnavFuncSP() {
    $(".js_gnav").slideToggle("fast"),
    "false" == $(this).attr("aria-expanded") ? $(this).attr("aria-expanded", !0) : $(this).attr("aria-expanded", !1),
    state = 0 == state ? (scrollpos = $(window).scrollTop(),
    $("body").addClass("is_fixed").css({
        top: -scrollpos
    }),
    !0) : ($("body").removeClass("is_fixed").css({
        top: 0
    }),
    window.scrollTo(0, scrollpos),
    !1)
}
function gnavResetFuncSP() {
    $(".bl_gnav_item > a").on("click", () => {
        $(".js_gnav").slideUp("fast"),
        $("#js_gnavBtn").attr("aria-expanded", !1),
        $("body").removeClass("is_fixed").css({
            top: 0
        }),
        state = !1
    }
    )
}
function gnavResetFuncPC() {
    $("body").removeClass("is_fixed").css({
        top: 0
    }),
    $("#js_gnavBtn").attr("aria-expanded", !1),
    $(".js_gnav").removeAttr("style"),
    $(".bl_gnav_item > a").off("click"),
    state = !1
}
let gnavBtn = document.getElementById("js_gnavBtn")
  , focusTrap = document.getElementById("js_focusTrap")
  , menu = document.querySelector(".js_gnav");
function scroll_control(a) {
    a.preventDefault()
}
function no_scroll() {
    document.addEventListener("mousewheel", scroll_control, {
        passive: !1
    }),
    document.addEventListener("touchmove", scroll_control, {
        passive: !1
    })
}
function return_scroll() {
    document.removeEventListener("mousewheel", scroll_control, {
        passive: !1
    }),
    document.removeEventListener("touchmove", scroll_control, {
        passive: !1
    })
}
window.addEventListener("keydown", () => {
    "Escape" === event.key && ($(".js_gnav").fadeOut("slow").attr("aria-hidden", !0),
    $("#js_gnavBtn").attr("aria-expanded", !1),
    $("body").removeClass("is_gnavOpen").css({
        top: 0
    }),
    state = !1)
}
),
focusTrap.addEventListener("focus", a => {
    gnavBtn.focus()
}
),
document.addEventListener("DOMContentLoaded", a => {
    loader(),
    smoothScroll()
}
),
window.addEventListener("load", a => {
    smoothScroll_page(),
    fadeAnime(),
    autoShowMovieModal()
}
),
window.addEventListener("scroll", a => {
    fadeAnime()
}
);
let loader = () => {
    $(".js_loaderCover").delay(1500).fadeOut(800, "swing"),
    $(".js_loader").delay(900).fadeOut(),
    setTimeout( () => {
        return_scroll()
    }
    , 1500)
}
;
function fadeAnime() {
    $(".js_fadeInTrig").each(function() {
        var a = $(this).offset().top - 50
          , o = $(window).scrollTop();
        a - $(window).height() <= o && $(this).addClass("is_fadeInAnim")
    }),
    $(".js_fadeInTrig2").each(function() {
        var a = $(this).offset().top - 50
          , o = $(window).scrollTop();
        a - $(window).height() <= o && $(this).addClass("is_fadeInAnim")
    }),
    $(".js_fadeInTrig3").each(function() {
        var a = $(this).offset().top - 50
          , o = $(window).scrollTop();
        a - $(window).height() <= o && $(this).addClass("is_fadeInAnim")
    })
}
function smoothScroll() {
    let o = $(".js_header").outerHeight();
    $('a[href*="#"]').click(function() {
        var a = $("#" === this.hash ? "html" : this.hash);
        if (a.length)
            return a = a.offset().top - o,
            $("html, body").animate({
                scrollTop: a
            }, 400, "swing"),
            !1
    })
}
function smoothScroll_page() {
    var a = $(".js_header").outerHeight()
      , o = location.hash;
    if (o)
        return o = $(o).offset().top - a,
        $("html, body").animate({
            scrollTop: o
        }, 50, "swing"),
        !1
}
var stateMovie = !1
  , stateComment = ($(".js_modalOpen").on("click", function() {
    var a = $(this).data("video-id")
      , o = (console.log(a),
    "#" + $(this).attr("aria-controls"))
      , o = ($(o).find("iframe").attr("src", "https://www.youtube.com/embed/" + a),
    stateMovie = 0 == stateMovie ? (scrollpos = $(window).scrollTop(),
    $("body").addClass("is_fixed").css({
        top: -scrollpos
    }),
    !0) : ($("body").removeClass("is_fixed").css({
        top: 0
    }),
    window.scrollTo(0, scrollpos),
    !1),
    "true" == $(".js_modalCont").attr("aria-hidden") ? $(".js_modalCont").attr("aria-hidden", !1) : $(".js_modalCont").attr("aria-hidden", !0),
    $("body").append('<div class="bl_modalOverlay"></div>'),
    $(".bl_modalOverlay").fadeIn("fast"),
    "#" + $(this).attr("aria-controls"));
    $(o).wrap('<div class="bl_modalWrap"></div>'),
    $(".bl_modalWrap").show(),
    $(".bl_modalMovieCont").addClass("is_show"),
    $(".is_scroll").on("touchmove.noScroll", a => {
        a.preventDefault()
    }
    ),
    $(o).fadeIn("fast"),
    $(o).click(a => {
        a.stopPropagation()
    }
    ),
    $(".js_modalClose").off().click(function() {
        $(o).fadeOut("fast"),
        $(".bl_modalOverlay").fadeOut("fast", () => {
            $(".bl_modalOverlay").remove(),
            $(o).unwrap(),
            $(".bl_modalMovieCont").removeClass("is_show"),
            $(".is_scroll").off(".noScroll"),
            $(".js_modalCont").attr("aria-hidden", !0)
        }
        ),
        "true" == $(this).attr("aria-expanded") ? $(this).attr("aria-expanded", !1) : $(this).attr("aria-expanded", !0),
        $("body").removeClass("is_fixed").css({
            top: 0
        }),
        window.scrollTo(0, scrollpos),
        stateMovie = !1
    })
}),
!1)
  , stateChara = ($(".js_modalOpenCom").on("click", function() {
    stateComment = 0 == stateComment ? (scrollpos = $(window).scrollTop(),
    $("body").addClass("is_fixed").css({
        top: -scrollpos
    }),
    !0) : ($("body").removeClass("is_fixed").css({
        top: 0
    }),
    window.scrollTo(0, scrollpos),
    !1),
    "true" == $(".js_modalComCont").attr("aria-hidden") ? $(".js_modalComCont").attr("aria-hidden", !1) : $(".js_modalComCont").attr("aria-hidden", !0),
    $("body").append('<div class="bl_modalComOverlay"></div>'),
    $(".bl_modalComOverlay").fadeIn("fast");
    var a = "#" + $(this).attr("aria-controls");
    $(a).wrap('<div class="bl_modalComWrap"></div>'),
    $(".bl_modalComWrap").show(),
    $(".is_scroll").on("touchmove.noScroll", a => {
        a.preventDefault()
    }
    ),
    $(a).fadeIn("fast"),
    $(a).click(a => {
        a.stopPropagation()
    }
    ),
    $(".bl_modalComWrap, .js_modalComClose").off().click(function() {
        $(a).fadeOut("fast"),
        $(".bl_modalComOverlay").fadeOut("fast", () => {
            $(".bl_modalComOverlay").remove(),
            $(a).unwrap(),
            $(".is_scroll").off(".noScroll"),
            $(".js_modalComCont").attr("aria-hidden", !0)
        }
        ),
        "true" == $(this).attr("aria-expanded") ? $(this).attr("aria-expanded", !1) : $(this).attr("aria-expanded", !0),
        $("body").removeClass("is_fixed").css({
            top: 0
        }),
        window.scrollTo(0, scrollpos),
        stateComment = !1
    })
}),
!1);
function autoShowMovieModal() {
    document.body.classList.contains("index") && !sessionStorage.getItem("hasVisited") && (setTimeout( () => {
        var a = document.querySelector('button[aria-controls="movie-modal01"]');
        a && a.click()
    }
    , 2800),
    sessionStorage.setItem("hasVisited", "true"))
}
$(".js_modalOpenCha").on("click", function() {
    stateChara = 0 == stateChara ? (scrollpos = $(window).scrollTop(),
    $("body").addClass("is_fixed").css({
        top: -scrollpos
    }),
    !0) : ($("body").removeClass("is_fixed").css({
        top: 0
    }),
    window.scrollTo(0, scrollpos),
    !1),
    "true" == $(".js_modalCharaCont").attr("aria-hidden") ? $(".js_modalCharaCont").attr("aria-hidden", !1) : $(".js_modalCharaCont").attr("aria-hidden", !0),
    $("body").append('<div class="bl_modalCharaOverlay"></div>'),
    $(".bl_modalCharaOverlay").fadeIn("fast");
    var a = "#" + $(this).attr("aria-controls");
    $(a).wrap('<div class="bl_modalCharaWrap"></div>'),
    $(".bl_modalCharaWrap").show(),
    $(".is_scroll").on("touchmove.noScroll", a => {
        a.preventDefault()
    }
    ),
    $(a).fadeIn("fast"),
    $(a).click(a => {
        a.stopPropagation()
    }
    ),
    $(".bl_modalCharaWrap, .js_modalCharaClose").off().click(function() {
        $(a).fadeOut("fast"),
        $(".bl_modalCharaOverlay").fadeOut("fast", () => {
            $(".bl_modalCharaOverlay").remove(),
            $(a).unwrap(),
            $(".is_scroll").off(".noScroll"),
            $(".js_modalCharaCont").attr("aria-hidden", !0)
        }
        ),
        "true" == $(this).attr("aria-expanded") ? $(this).attr("aria-expanded", !1) : $(this).attr("aria-expanded", !0),
        $("body").removeClass("is_fixed").css({
            top: 0
        }),
        window.scrollTo(0, scrollpos),
        stateChara = !1
    })
});
