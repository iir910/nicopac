//

var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)example\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)example\.com$/.test(host)) return "+P01";
        if (/\/\w*\.*(canyu|twitter|youtube|facebook)\.(com|org)\/;/.test(host)) return "+P02";
        if (/\.example\.com$/.test(url)) return "+proxy";
        if (/\/\w*\.*(canyu|twitter|youtube|facebook)\.(com|org)\/;/.test(url)) return "+proxy";
        if (scheme === "http" && url.indexOf("*.example.com") >= 0) return "+proxy";
        if (false) return "+P01";
        return "DIRECT";
    },
    "+P01": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "SOCKS5 example.com:1080";
    },
    "+P02": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "PROXY example.com:80";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "PROXY proxy.example.com:8080";
    }
});




