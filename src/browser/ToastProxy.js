"use strict";

var Toast = function () {
};

Toast.show = function (success, fail, args) {
    //alert(args[0].message);
    swal({
      text: args[0].message,
      timer: 3000,
      showConfirmButton: true
    });
    success();
};

module.exports = Toast;


require("cordova/exec/proxy").add("Toast", module.exports);
