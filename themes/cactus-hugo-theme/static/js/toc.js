!function (n, o) {
    "use strict";

    function r(e) {
        return o.getElementById(e)
    }

    function u(t, e) {
        Array.isArray(e) || (e = [e]),
            e.forEach(function (e) {
                return t.appendChild("string" == typeof e ? o.createTextNode(e) : e)
            })
    }

    function f(e, t, n) {
        var r = o.createElement(e);
        return t && Object.assign(r, t),
            n && u(r, n),
            r
    }! function () {
        var e = o.querySelector("article.post");
        if (e) {
            var i = e.querySelectorAll("h1,h2,h3,h4,h5,h6"),
                a = 1;
            if (i.length > a) {
                var t = function e(t) {
                    var n = i[a];
                    if (!n)
                        return t;
                    var r = c(n);
                    do {
                        var o = c(n);
                        if (o === r)
                            a++,
                            u(t, l(n));
                        else {
                            if (o < r)
                                break;
                            u(t, e(f("ul")))
                        }
                        n = i[a]
                    } while (a < i.length);
                    return t
                }(f("ul"));
                e.insertBefore(f("div", {
                        className: "toc"
                    }, [f("b", null, "文章目录"), t]), e.firstChild),
                    setTimeout(function () {
                        var e = r(decodeURIComponent(location.hash.slice(1)));
                        e && (t = e.offsetTop,
                            n.scrollTo(n.scrollX, t));
                        var t
                    }, 150)
            }
        }

        function c(e) {
            return parseInt(e.tagName[1], 10)
        }

        function l(e) {
            var t, n = e.id;
            return n || (n = function (e) {
                        for (var t = "h-" + e, n = 2; r(t);)
                            t = "h-" + e + "-" + n,
                            n++;
                        return t
                    }(e.textContent.replace(/[\s\/]/g, "-")),
                    e.parentNode.insertBefore(f("span", {
                        id: n
                    }), e)),
                t = e.textContent,
                f("li", null, [f("a", {
                    href: "#" + n
                }, t)])
        }
    }()
}(window, document);
