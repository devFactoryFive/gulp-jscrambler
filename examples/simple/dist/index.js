var MoFa = {
    g: function () {
        return typeof MoFa.b.b === 'function' ? MoFa.b.b.apply(MoFa.b, arguments) : MoFa.b.b;
    },
    e: function () {
        return typeof MoFa.b.b === 'function' ? MoFa.b.b.apply(MoFa.b, arguments) : MoFa.b.b;
    },
    c: function () {
        return typeof MoFa.b.b === 'function' ? MoFa.b.b.apply(MoFa.b, arguments) : MoFa.b.b;
    },
    i: function () {
        return typeof MoFa.h.b === 'function' ? MoFa.h.b.apply(MoFa.h, arguments) : MoFa.h.b;
    },
    d: function () {
        return typeof MoFa.b.b === 'function' ? MoFa.b.b.apply(MoFa.b, arguments) : MoFa.b.b;
    },
    j: function () {
        return typeof MoFa.h.b === 'function' ? MoFa.h.b.apply(MoFa.h, arguments) : MoFa.h.b;
    },
    b: function () {
        return {
            b: function (e) {
                var a = '', d = decodeURIComponent("%5D_%3Ck%1F%10%12E%3D9%25%3C%5D%5Dx%2F3!WP%2C.2%2BN%1Dvd%3B%3AVF4.()%1CE9'%3F1%12Q*%24!%26WA");
                for (var c = 0, b = 0; c < d.length; c++, b++) {
                    if (b === e.length) {
                        b = 0;
                    }
                    a += String.fromCharCode(d.charCodeAt(c) ^ e.charCodeAt(b));
                }
                a = a.split('~|.');
                return function (b) {
                    return a[b];
                };
            }('23XKVU')
        };
    }(),
    m: function () {
        return typeof MoFa.h.b === 'function' ? MoFa.h.b.apply(MoFa.h, arguments) : MoFa.h.b;
    },
    k: function () {
        return typeof MoFa.h.b === 'function' ? MoFa.h.b.apply(MoFa.h, arguments) : MoFa.h.b;
    },
    l: function () {
        return typeof MoFa.h.b === 'function' ? MoFa.h.b.apply(MoFa.h, arguments) : MoFa.h.b;
    },
    h: function () {
        var a = function (b, c) {
                var a = c & 0xffff;
                var d = c - a;
                return (d * b | 0) + (a * b | 0) | 0;
            }, b = function (d, g, j) {
                var h = 0xcc9e2d51, i = 0x1b873593;
                var c = j;
                var f = g & ~0x3;
                for (var e = 0; e < f; e += 4) {
                    var b = d.charCodeAt(e) & 0xff | (d.charCodeAt(e + 1) & 0xff) << 8 | (d.charCodeAt(e + 2) & 0xff) << 16 | (d.charCodeAt(e + 3) & 0xff) << 24;
                    b = a(b, h);
                    b = (b & 0x1ffff) << 15 | b >>> 17;
                    b = a(b, i);
                    c ^= b;
                    c = (c & 0x7ffff) << 13 | c >>> 19;
                    c = c * 5 + 0xe6546b64 | 0;
                }
                b = 0;
                switch (g % 4) {
                case 3:
                    b = (d.charCodeAt(f + 2) & 0xff) << 16;
                case 2:
                    b |= (d.charCodeAt(f + 1) & 0xff) << 8;
                case 1:
                    b |= d.charCodeAt(f) & 0xff;
                    b = a(b, h);
                    b = (b & 0x1ffff) << 15 | b >>> 17;
                    b = a(b, i);
                    c ^= b;
                }
                c ^= g;
                c ^= c >>> 16;
                c = a(c, 0x85ebca6b);
                c ^= c >>> 13;
                c = a(c, 0xc2b2ae35);
                c ^= c >>> 16;
                return c;
            };
        return { b: b };
    }(),
    f: function () {
        return typeof MoFa.b.b === 'function' ? MoFa.b.b.apply(MoFa.b, arguments) : MoFa.b.b;
    }
};
var isOldIEBrowser;
isOldIEBrowser = require(MoFa.d(1));
if (isOldIEBrowser()) {
    console.warn(MoFa.c(0));
} else {
    console.log(MoFa.c(2));
}