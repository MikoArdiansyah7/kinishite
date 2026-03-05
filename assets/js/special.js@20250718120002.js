document.addEventListener("DOMContentLoaded", () => {
    var t = document.querySelectorAll(".bl_special_tab_container");
    let c = new URLSearchParams(window.location.search).get("id");
    t.forEach(t => {
        let e = t.querySelectorAll(".js-tab_elm")
          , r = t.querySelectorAll(".js-tab_content")
          , a = null;
        function o(t, a) {
            a && (e.forEach(t => {
                t.classList.toggle("active", t.getAttribute("data-tab-target") === a)
            }
            ),
            r.forEach(t => {
                var e = t.id === a;
                t.classList.toggle("active", e)
            }
            ))
        }
        a = (a = c ? Array.from(e).find(t => t.getAttribute("data-tab-target") === c) : a) || (t.classList.contains("show-latest") ? e[e.length - 1] : e[0]),
        o(0, a.getAttribute("data-tab-target")),
        e.forEach(a => {
            a.addEventListener("click", () => {
                var t = a.getAttribute("data-tab-target")
                  , e = (o(0, t),
                new URL(window.location));
                e.searchParams.set("id", t),
                window.history.pushState({}, "", e)
            }
            )
        }
        )
    }
    )
}
);
