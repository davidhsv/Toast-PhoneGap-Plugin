"use strict";

var Toast = function () {
};

Toast.show = function (msg) {
    alert(msg);
};

module.exports = Toast;


require("cordova/exec/proxy").add("Toast", module.exports);
