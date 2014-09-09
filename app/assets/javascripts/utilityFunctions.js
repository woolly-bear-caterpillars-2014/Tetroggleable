function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

// function arrayUnique(a) {
//     return a.reduce(function(p, c) {
//         if (p.indexOf(c) < 0) p.push(c);
//         return p;
//     }, []);
// };

