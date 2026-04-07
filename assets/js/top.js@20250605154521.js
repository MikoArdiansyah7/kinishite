function scrollToggleClass(e, o, s) {
    $(e).length && (scroll = $(window).scrollTop(),
    startPos = $(e).offset().top - 100,
    endPos = startPos + $(e).outerHeight(),
    scroll > startPos ? $(o).addClass(s) : $(o).removeClass(s))
}
document.addEventListener("DOMContentLoaded", () => {}
),
window.addEventListener("load", () => {}
),
window.addEventListener("scroll", () => {
    scrollToggleClass(".js_topHeaderTrig", ".js_topHeader", "is_fixed"),
    scrollToggleClass(".js_topHeaderTrigSp", ".js_topHeaderSp", "is_fixedSp")
}
);
let swiperMovie = new Swiper(".js_bnrSlide",{
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    }
})
  , isMobile = window.innerWidth < 768
  , scrollFactor = isMobile ? .5 : 1
  , vw = window.innerWidth / 100
  , initialOffset = 30 * vw
  , decoGroups = document.querySelectorAll(".js_decos")
  , decoItems = [];
function updateDecos() {
    let s = window.scrollY || window.pageYOffset;
    decoItems.forEach(e => {
        var o = -s * e.speed * scrollFactor + initialOffset;
        e.currentY += .05 * (o - e.currentY),
        e.el.style.transform = `translateY(${e.currentY}px)`
    }
    ),
    requestAnimationFrame(updateDecos)
}
decoGroups.forEach(e => {
    e.querySelectorAll(".js_deco").forEach(e => {
        var o = parseFloat(e.dataset.speed) || .1;
        decoItems.push({
            el: e,
            speed: o,
            currentY: 0
        })
    }
    )
}
),
requestAnimationFrame(updateDecos);
