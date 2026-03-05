document.addEventListener("DOMContentLoaded", () => {
    var t = document.querySelectorAll(".bl_story_tab_container");
    let c = new URLSearchParams(window.location.search).get("id");
    t.forEach(t => {
        let e = t.querySelectorAll(".js-tab_elm")
          , l = t.querySelectorAll(".js-tab_content")
          , a = null;
        function r(t, a) {
            a && (e.forEach(t => {
                t.classList.toggle("active", t.getAttribute("data-tab-target") === a)
            }
            ),
            l.forEach(t => {
                var e = t.id === a;
                t.classList.toggle("active", e)
            }
            ))
        }
        a = (a = c ? Array.from(e).find(t => t.getAttribute("data-tab-target") === c) : a) || (t.classList.contains("show-latest") ? e[e.length - 1] : e[0]),
        r(0, a.getAttribute("data-tab-target")),
        e.forEach(a => {
            a.addEventListener("click", () => {
                var t = a.getAttribute("data-tab-target")
                  , e = (r(0, t),
                new URL(window.location));
                e.searchParams.set("id", t),
                window.history.pushState({}, "", e)
            }
            )
        }
        )
    }
    ),
    document.querySelectorAll(".bl_episode__gallery").forEach(t => {
        let a = t.querySelectorAll(".bl_episode__imgMain_item")
          , l = t.querySelectorAll(".bl_episode__thumImg");
        0 < a.length && a[0].classList.add("active"),
        0 < l.length && l[0].classList.add("active"),
        l.forEach( (t, e) => {
            t.addEventListener("click", () => {
                a.forEach(t => t.classList.remove("active")),
                l.forEach(t => t.classList.remove("active")),
                a[e] && a[e].classList.add("active"),
                t.classList.add("active")
            }
            )
        }
        )
    }
    )
}
);
