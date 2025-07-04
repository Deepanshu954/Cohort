"use strict";
function delayCall(fn) {
    setTimeout(fn, 1000);
}
delayCall(function () { console.log("Hey There"); });
