// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"blocks/arrival_departure/ arrival_departure.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/arrival_departure/arrival_departure.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrival_departure = arrival_departure;

require("./ arrival_departure.scss");

function arrival_departure() {}
},{"./ arrival_departure.scss":"blocks/arrival_departure/ arrival_departure.scss"}],"blocks/bullet_list/bullet_list.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/bullet_list/bullet_list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bullet_list = bullet_list;

require("./bullet_list.scss");

function bullet_list() {}
},{"./bullet_list.scss":"blocks/bullet_list/bullet_list.scss"}],"blocks/buttons/buttons.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/buttons/buttons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttons = buttons;

require("./buttons.scss");

function buttons() {}
},{"./buttons.scss":"blocks/buttons/buttons.scss"}],"blocks/checkbox_button/checkbox_button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/checkbox_button/checkbox_button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkbox_button = checkbox_button;

require("./checkbox_button.scss");

function checkbox_button() {}
},{"./checkbox_button.scss":"blocks/checkbox_button/checkbox_button.scss"}],"blocks/comment/comment.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/comment/comment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comment = comment;

require("./comment.scss");

function comment() {}
},{"./comment.scss":"blocks/comment/comment.scss"}],"blocks/expandable_checkbox_list/expandable_checkbox_list.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/expandable_checkbox_list/expandable_checkbox_list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandable_checkbox_list = expandable_checkbox_list;

require("./expandable_checkbox_list.scss");

function expandable_checkbox_list() {
  var flag = {
    Value: true
  }; // let drop = document.getElementsByClassName("expandable_checkbox_list")
  // drop[0].addEventListener("click", () => clicked(), false)

  function clicked() {
    $('.drop').toggle();

    if (flag.Value) {
      $('.drop_down').css({
        "transform": "rotate(180deg)"
      });
    } else {
      $('.drop_down').css({
        "transform": "rotate(0deg)"
      });
    }

    flag.Value = !flag.Value;
  }
}
},{"./expandable_checkbox_list.scss":"blocks/expandable_checkbox_list/expandable_checkbox_list.scss"}],"blocks/fill_button/fill_button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/fill_button/fill_button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill_button = fill_button;

require("./fill_button.scss");

function fill_button() {}
},{"./fill_button.scss":"blocks/fill_button/fill_button.scss"}],"blocks/filling_room/filling_room.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/filling_room/filling_room.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filling_room = filling_room;

require("./filling_room.scss");

function filling_room() {
  var flag = {
    Value: true
  };
  var filling_room = document.getElementById("filling_room");
  var minus = document.getElementsByClassName("room_minus");
  var plus = document.getElementsByClassName("room_plus");
  var number = document.getElementsByClassName("room_number"); //let enter = document.getElementsByClassName("enter")

  function num_room() {
    if ($(".room").html() != "Выбирите") {
      $(".room").css({
        "color": "rgba(31, 32, 65, 0.75)"
      });
    } else {
      $('.room').css({
        "border": "1px solid rgba(31, 32, 65, 0.25)"
      });
      $(".room").css({
        "color": "rgba(31, 32, 65, 0.25)"
      });
    }
  }

  num_room();

  var _loop = function _loop(i) {
    console.log(parseInt($(number[i]).children('p').html()));

    if (parseInt($(number[i]).children('p').html()) === 0) {
      $(minus[i]).css({
        "opacity": "0.38"
      });
    }

    minus[i].addEventListener("click", function () {
      return minused(number, i);
    }, false);
  };

  for (var i = 0; i < minus.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    plus[_i].addEventListener("click", function () {
      return plused(number, _i);
    }, false);
  };

  for (var _i = 0; _i < plus.length; _i++) {
    _loop2(_i);
  }

  function minused(number, i) {
    var num = parseInt($(number[i]).children('p').html());

    if (num > 0) {
      $(number[i]).children('p').html(num - 1);
    }

    if (parseInt($(number[i]).children('p').html()) === 0) {
      $(minus[i]).css({
        "opacity": "0.38"
      });
    } else {
      $(minus[i]).css({
        "opacity": "1"
      });
    }
  }

  function plused(number, i) {
    var num = parseInt($(number[i]).children('p').html());
    $(number[i]).children('p').html(num + 1);

    if (parseInt($(number[i]).children('p').html()) === 0) {
      $(minus[i]).css({
        "opacity": "0.38"
      });
    } else {
      $(minus[i]).css({
        "opacity": "1"
      });
    }
  }

  filling_room.addEventListener("click", function () {
    return clicked();
  }, false); //enter[0].addEventListener("click", () => clicked(), false)

  console.log('dd');

  function clicked() {
    $('.room_list').toggle();

    if (flag.Value) {
      $('.room').css({
        "border-bottom-left-radius": "0",
        "border-bottom-right-radius": "0",
        "border": "1px solid rgba(31, 32, 65, 0.5)"
      });
    } else {
      var flag_1 = 0;
      var comma = '';
      var buf = '';
      var arr = [[" спальня", " спальни", " спален"], [" крвать", " кровати", " кроватей"], [" ванная комната", " ванные комнаты", " ванных комнат"]];
      $('.room').css({
        "border-bottom-left-radius": "4px",
        "border-bottom-right-radius": "4px"
      });

      for (var _i2 = 0; _i2 < number.length; _i2++) {
        console.log(parseInt($(number[_i2]).children('p').html()));
        var now = parseInt($(number[_i2]).children('p').html());

        if (flag_1 > 0) {
          comma = ', ';
        }

        if (now != 0) {
          if (4 < now % 10 && now % 10 < 10) {
            flag_1++;
            buf += comma + now + arr[_i2][2];
            console.log("buf ", buf);
          } else {
            if (1 < now % 10 && now % 10 < 5) {
              flag_1++;
              buf += comma + now + arr[_i2][1];
              console.log("buf ", buf);
            } else {
              if (1 === now % 10) {
                flag_1++;
                buf += comma + now + arr[_i2][0];
                console.log("buf ", buf);
              }
            }
          }
        }
      }

      console.log(buf);

      if (buf != '') {
        $('.room').html(buf);
      } else {
        $('.room').html("Выбирите");
      }

      num_room();
    }

    flag.Value = !flag.Value;
    console.log('dd');
  }
}
},{"./filling_room.scss":"blocks/filling_room/filling_room.scss"}],"blocks/footer/footer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footer = footer;

require("./footer.scss");

function footer() {}
},{"./footer.scss":"blocks/footer/footer.scss"}],"blocks/guest/guest.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/guest/guest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guest = guest;

require("./guest.scss");

function guest() {
  var flag = {
    Value: true
  };
  var guest = document.getElementById("guest");
  var minus = document.getElementsByClassName("guest_minus");
  var plus = document.getElementsByClassName("guest_plus");
  var number = document.getElementsByClassName("guest_number");
  var enter = document.getElementsByClassName("enter");

  function num_guest() {
    if ($(".gosti").html() != "Сколько гостей") {
      $(".gosti").css({
        "color": "rgba(31, 32, 65, 0.75)"
      });
    } else {
      $('.gosti').css({
        "border": "1px solid rgba(31, 32, 65, 0.25)"
      });
      $(".gosti").css({
        "color": "rgba(31, 32, 65, 0.25)"
      });
    }
  }

  num_guest();

  var _loop = function _loop(i) {
    console.log(parseInt($(number[i]).children('p').html()));

    if (parseInt($(number[i]).children('p').html()) === 0) {
      $(minus[i]).css({
        "opacity": "0.38"
      });
    }

    minus[i].addEventListener("click", function () {
      return minused(number, i);
    }, false);
  };

  for (var i = 0; i < minus.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    plus[_i].addEventListener("click", function () {
      return plused(number, _i);
    }, false);
  };

  for (var _i = 0; _i < plus.length; _i++) {
    _loop2(_i);
  }

  function minused(number, i) {
    var num = parseInt($(number[i]).children('p').html());

    if (num > 0) {
      $(number[i]).children('p').html(num - 1);
    }

    if (parseInt($(number[i]).children('p').html()) === 0) {
      $(minus[i]).css({
        "opacity": "0.38"
      });
    } else {
      $(minus[i]).css({
        "opacity": "1"
      });
    }
  }

  function plused(number, i) {
    var num = parseInt($(number[i]).children('p').html());
    $(number[i]).children('p').html(num + 1);

    if (parseInt($(number[i]).children('p').html()) === 0) {
      $(minus[i]).css({
        "opacity": "0.38"
      });
    } else {
      $(minus[i]).css({
        "opacity": "1"
      });
    }
  }

  guest.addEventListener("click", function () {
    return clicked();
  }, false);
  enter[0].addEventListener("click", function () {
    return clicked();
  }, false);
  console.log('dd');

  function clicked() {
    $('.guest_list').toggle();

    if (flag.Value) {
      $('.gosti').css({
        "border-bottom-left-radius": "0",
        "border-bottom-right-radius": "0",
        "border": "1px solid rgba(31, 32, 65, 0.5)"
      });
    } else {
      var buf = 0;
      $('.gosti').css({
        "border-bottom-left-radius": "4px",
        "border-bottom-right-radius": "4px"
      });

      for (var _i2 = 0; _i2 < number.length; _i2++) {
        buf += parseInt($(number[_i2]).children('p').html());
      }

      if (4 < buf % 10 && buf % 10 < 10) {
        $('.gosti').html(buf + " Гостей");
      } else {
        if (1 < buf % 10 && buf % 10 < 5) {
          $('.gosti').html(buf + " Гостя");
        } else {
          if (1 === buf % 10) {
            $('.gosti').html(buf + " гость");
          } else {
            $('.gosti').html("Сколько гостей");
          }
        }
      }

      num_guest();
    }

    flag.Value = !flag.Value;
    console.log('dd');
  }
}
},{"./guest.scss":"blocks/guest/guest.scss"}],"blocks/header/header.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"./..\\..\\image\\expand_more.svg":[["expand_more.7437d812.svg","image/expand_more.svg"],"image/expand_more.svg"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/header/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = header;

require("./header.scss");

function header() {
  var el = document.getElementsByClassName("container");

  for (var i = 0; i < el.length; i++) {
    if (document.addEventListener) {
      el[i].addEventListener('click', mouseOverHandler, false);
    }
  }

  function mouseOverHandler(e) {
    var cont_width = $(this).css('width');
    var cont_width_float = parseFloat(cont_width.slice(0, cont_width.length - 2)) + 20;
    cont_width = cont_width_float + 'px';
    $(this).children('ul').slideToggle();
    $(this).children('ul').css('width', cont_width); // e = e || window.event;
    // var target = e.target || e.srcElement;
    // target.style.cssText = "opacity:0.5";

    console.log($(this).css('width'));
    console.log(cont_width_float);
  }
}
},{"./header.scss":"blocks/header/header.scss"}],"blocks/like_button/like_button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/like_button/like_button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.like_button = like_button;

require("./like_button.scss");

function like_button() {
  // let flag = {Value}
  var like = document.getElementsByClassName("white");
  var border = document.getElementsByClassName("like_button");
  console.log("dd");

  var _loop = function _loop(i) {
    border[i].addEventListener("click", function () {
      return liked(like, i, border);
    }, false);
    console.log("dd");
  };

  for (var i = 0; i < like.length; i++) {
    _loop(i);
  }

  var flag = {
    Value: new Array(like.length)
  };

  for (var _i = 0; _i < like.length; _i++) {
    flag.Value[_i] = true;
  }

  console.log(flag);

  function liked(like, i) {
    console.log("dd");

    if (flag.Value[i]) {
      $(like[i]).children('svg').children('path').attr('d', 'M4.93026 7.88672L4.3248 7.33984C3.63469 6.71484 3.13339 6.2526 2.82089 5.95312C2.50839 5.65365 2.15683 5.28255 1.7662 4.83984C1.3886 4.39714 1.12818 4 0.984952 3.64844C0.841723 3.28385 0.770108 2.91276 0.770108 2.53516C0.770108 1.89714 0.984952 1.35677 1.41464 0.914062C1.85735 0.471354 2.40422 0.25 3.05526 0.25C3.81047 0.25 4.43547 0.542969 4.93026 1.12891C5.42506 0.542969 6.05006 0.25 6.80526 0.25C7.45631 0.25 7.99667 0.471354 8.42636 0.914062C8.86907 1.35677 9.09042 1.89714 9.09042 2.53516C9.09042 3.04297 8.92115 3.57031 8.58261 4.11719C8.24407 4.66406 7.87297 5.13932 7.46933 5.54297C7.0787 5.94661 6.43417 6.55208 5.53573 7.35938L4.93026 7.88672Z');
      $(like[i]).children('svg').children('path').attr("fill", "#BC9CFF");
      $(like[i]).children('svg').children('path').attr("fill-opacity", "1");
      $(like[i]).children('p').css({
        "color": "#BC9CFF"
      });
      $(like[i]).children('p').html(parseInt($(like[i]).children('p').html()) + 1);
      $(border[i]).css({
        "background": "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)"
      });
    } else {
      $(like[i]).children('svg').children('path').attr('d', 'M5.03906 6.73438C5.66406 6.17448 6.1263 5.7513 6.42578 5.46484C6.72526 5.17839 7.05078 4.83984 7.40234 4.44922C7.75391 4.05859 7.99479 3.71354 8.125 3.41406C8.26823 3.11458 8.33984 2.82161 8.33984 2.53516C8.33984 2.11849 8.19661 1.77344 7.91016 1.5C7.63672 1.22656 7.29167 1.08984 6.875 1.08984C6.54948 1.08984 6.24349 1.18099 5.95703 1.36328C5.68359 1.54557 5.49479 1.77995 5.39062 2.06641H4.60938C4.50521 1.77995 4.3099 1.54557 4.02344 1.36328C3.75 1.18099 3.45052 1.08984 3.125 1.08984C2.70833 1.08984 2.35677 1.22656 2.07031 1.5C1.79688 1.77344 1.66016 2.11849 1.66016 2.53516C1.66016 2.82161 1.72526 3.11458 1.85547 3.41406C1.9987 3.71354 2.24609 4.05859 2.59766 4.44922C2.94922 4.83984 3.27474 5.17839 3.57422 5.46484C3.8737 5.7513 4.33594 6.17448 4.96094 6.73438L5 6.77344L5.03906 6.73438ZM6.875 0.25C7.52604 0.25 8.06641 0.471354 8.49609 0.914062C8.9388 1.35677 9.16016 1.89714 9.16016 2.53516C9.16016 2.91276 9.08854 3.28385 8.94531 3.64844C8.80208 4 8.53516 4.39714 8.14453 4.83984C7.76693 5.28255 7.42188 5.65365 7.10938 5.95312C6.79688 6.2526 6.29557 6.71484 5.60547 7.33984L5 7.88672L4.39453 7.35938C3.49609 6.55208 2.84505 5.94661 2.44141 5.54297C2.05078 5.13932 1.6862 4.66406 1.34766 4.11719C1.00911 3.57031 0.839844 3.04297 0.839844 2.53516C0.839844 1.89714 1.05469 1.35677 1.48438 0.914062C1.92708 0.471354 2.47396 0.25 3.125 0.25C3.88021 0.25 4.50521 0.542969 5 1.12891C5.49479 0.542969 6.11979 0.25 6.875 0.25Z');
      $(like[i]).children('svg').children('path').attr("fill", "#1F2041");
      $(like[i]).children('svg').children('path').attr("fill-opacity", "0.25");
      $(like[i]).children('p').css({
        "color": "rgba(31, 32, 65, 0.25)"
      });
      $(like[i]).children('p').html(parseInt($(like[i]).children('p').html()) - 1);
      $(border[i]).css({
        "background": "rgba(31, 32, 65, 0.25)"
      });
    }

    flag.Value[i] = !flag.Value[i];
  }
}
},{"./like_button.scss":"blocks/like_button/like_button.scss"}],"blocks/login/login.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/login/login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

require("./login.scss");

function login() {}
},{"./login.scss":"blocks/login/login.scss"}],"blocks/pagination/pagination.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/pagination/pagination.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = pagination;

require("./pagination.scss");

function pagination() {}
},{"./pagination.scss":"blocks/pagination/pagination.scss"}],"blocks/rate_button/rate_button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/rate_button/rate_button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rate_button = rate_button;

require("./rate_button.scss");

function rate_button(room, j) {
  var img = $(room[j]).children(".star");

  var _loop = function _loop(i) {
    img[i].addEventListener("click", function () {
      return clicked(i, img);
    }, false); //console.log(i)
  };

  for (var i = 0; i < img.length; i++) {
    _loop(i);
  }

  function clicked(i, img) {
    console.log('ss'); // console.log(i)

    for (var _j = 0; _j < i + 1; _j++) {
      $(img[_j]).children('path').attr('d', 'M10.2637 15.749L4.07617 19.499L5.7168 12.4678L0.279297 7.7334L7.45117 7.12402L10.2637 0.514648L13.0762 7.12402L20.248 7.7334L14.8105 12.4678L16.4512 19.499L10.2637 15.749Z');
      console.log('s12s');
    }

    for (var _j2 = 4; _j2 > i; _j2--) {
      $(img[_j2]).children('path').attr('d', 'M10.2637 13.9209L14.0137 16.1709L13.0293 11.9053L16.3574 8.99902L11.9512 8.62402L10.2637 4.59277L8.57617 8.62402L4.16992 8.99902L7.49805 11.9053L6.51367 16.1709L10.2637 13.9209ZM20.248 7.7334L14.8105 12.4678L16.4512 19.499L10.2637 15.749L4.07617 19.499L5.7168 12.4678L0.279297 7.7334L7.45117 7.12402L10.2637 0.514648L13.0762 7.12402L20.248 7.7334Z" fill="url(#paint0_linear)');
      $(img[_j2]).children('path').attr('d', 'M10.2637 13.9209L14.0137 16.1709L13.0293 11.9053L16.3574 8.99902L11.9512 8.62402L10.2637 4.59277L8.57617 8.62402L4.16992 8.99902L7.49805 11.9053L6.51367 16.1709L10.2637 13.9209ZM20.248 7.7334L14.8105 12.4678L16.4512 19.499L10.2637 15.749L4.07617 19.499L5.7168 12.4678L0.279297 7.7334L7.45117 7.12402L10.2637 0.514648L13.0762 7.12402L20.248 7.7334Z" fill="url(#paint0_linear)');
      console.log('s12s');
    }
  }
} // window.onload = function () {}
},{"./rate_button.scss":"blocks/rate_button/rate_button.scss"}],"blocks/radio_button/radio_button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/radio_button/radio_button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radio_button = radio_button;

require("./radio_button.scss");

function radio_button() {}
},{"./radio_button.scss":"blocks/radio_button/radio_button.scss"}],"blocks/range_slider/range_slider.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/range_slider/range_slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range_slider = range_slider;

require("./range_slider.scss");

function range_slider() {
  var thumb = document.getElementById('thumb');
  var thumb2 = document.getElementById('thumb2');
  var slider = document.getElementById('slider');
  var range = document.getElementById('range');
  var first_price = document.getElementById('first_price');
  var second_price = document.getElementById('second_price');
  var coor = {
    Val1: thumb.getBoundingClientRect().left,
    Val2: thumb2.getBoundingClientRect().left
  };
  var marg = thumb.getBoundingClientRect().left;
  var price = parseInt($(second_price).html());
  console.log(price);
  console.log(coor.Val1, coor.Val2);
  price = price / (250 - thumb.offsetWidth + 1);

  thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    var shiftX = event.clientX - thumb.getBoundingClientRect().left;
    console.log(event.clientX);
    console.log(shiftX); // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left; // курсор вышел из слайдера => оставить бегунок в его границах.

      if (newLeft < -1) {
        newLeft = -1;
      }

      var edge = coor.Val2 - thumb.offsetWidth - marg;
      console.log("edge", edge);

      if (newLeft > edge) {
        newLeft = edge;
      }

      console.log("newLeft", newLeft);
      thumb.style.left = newLeft + 'px';
      coor.Val1 = thumb.getBoundingClientRect().left;
      coor.Val2 = thumb2.getBoundingClientRect().left;
      var range_width = coor.Val2 - newLeft - marg;
      range.style.width = range_width + 'px';
      range.style.left = newLeft + 6 + 'px';
      $(first_price).html(Math.round((newLeft + 1) * price));
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

    console.log(coor.Val1, coor.Val2);
  };

  thumb.ondragstart = function () {
    return false;
  };

  thumb2.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    var shiftX = event.clientX - thumb2.getBoundingClientRect().left; // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
      var rightEdge = slider.offsetWidth - thumb2.offsetWidth;

      if (newLeft > rightEdge - 1) {
        newLeft = rightEdge - 1;
      }

      var edge = coor.Val1 - thumb2.offsetWidth - marg + 30;

      if (newLeft < edge) {
        newLeft = edge;
      }

      thumb2.style.left = newLeft + 'px';
      coor.Val1 = thumb.getBoundingClientRect().left;
      coor.Val2 = thumb2.getBoundingClientRect().left;
      var range_width = newLeft - coor.Val1 + marg;
      console.log(range_width);
      range.style.width = range_width + 'px'; //range.style.left = newLeft + 6 + 'px';

      $(second_price).html(Math.round((newLeft - 14) * price));
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  thumb2.ondragstart = function () {
    return false;
  };
}
},{"./range_slider.scss":"blocks/range_slider/range_slider.scss"}],"blocks/rich_checkbox_button/rich_checkbox_button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/rich_checkbox_button/rich_checkbox_button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rich_checkbox_button = rich_checkbox_button;

require("./rich_checkbox_button.scss");

function rich_checkbox_button() {}
},{"./rich_checkbox_button.scss":"blocks/rich_checkbox_button/rich_checkbox_button.scss"}],"blocks/room/room.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/room/room.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.room = room;

require("./room.scss");

function room() {
  var first = document.getElementsByClassName('first_c');
  var second = document.getElementsByClassName('second_c');
  var third = document.getElementsByClassName('third_c');
  var total = document.getElementsByClassName('total_c');
  var total_c = parseInt($(first[0]).html().slice(0, -1));
  total_c += parseInt($(second[0]).html().slice(0, -1));
  total_c += parseInt($(third[0]).html().slice(0, -1));
  $(total[0]).html(total_c + '₽');
  console.log(total_c);
}
},{"./room.scss":"blocks/room/room.scss"}],"blocks/room_preview/room_preview.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/room_preview/room_preview.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.room_preview_local = room_preview_local;
exports.room_preview = room_preview;

require("./room_preview.scss");

var _rate_button = require("../rate_button/rate_button");

function room_preview_local(room, k) {
  var img = document.getElementsByClassName('circle');
  var left = document.getElementsByClassName('left');
  var right = document.getElementsByClassName('right');
  var room_flag = k * 4;
  var i = {
    Value: room_flag
  };
  $(img[room_flag]).children('g').html('<ellipse cx="5" cy="5" rx="3.75" ry="3.74693" fill="white"/>\n');
  left[k].addEventListener("click", function () {
    return clicked(-1, img, room_flag);
  }, false);
  right[k].addEventListener("click", function () {
    return clicked(1, img, room_flag);
  }, false);

  function clicked(buf, img) {
    i.Value += buf;
    if (i.Value > room_flag + 3) i.Value = room_flag;
    if (i.Value < room_flag) i.Value = room_flag + 3;

    for (var j = room_flag; j < room_flag + 4; j++) {
      $(img[j]).children('g').html('<ellipse cx="5" cy="5" rx="3.25" ry="3.24693" stroke-width="1" stroke="white"/>');
    }

    $(img[i.Value]).children('g').html('<ellipse cx="5" cy="5" rx="3.75" ry="3.74693" fill="white"/>\n');
  }

  var review = document.getElementsByClassName('review'); //let rev_len = $(review[0]).children('p').html().length

  var rev = parseInt($(review[k]).children('p').html()) % 10;
  console.log(rev);

  if (0 === rev || 4 < rev && rev < 10) {
    $(review[k]).children(".rev").html("Отзывов");
  } else {
    if (1 < rev && rev < 5) {
      $(review[k]).children(".rev").html("Отзыва");
    } else {
      if (1 === rev) {
        $(review[k]).children(".rev").html("Отзыв");
      }
    }
  }
}

function room_preview() {
  var room = document.getElementsByClassName('rating');

  for (var i = 0; i < room.length; i++) {
    //room[0].addEventListener("click", () => cliked(room, i), false)
    //console.log(i)
    (0, _rate_button.rate_button)(room, i);
    room_preview_local(room, i);
  } // function cliked(room, i){
  //     console.log(i)
  //    rate_button(room, i)
  // }

}
},{"./room_preview.scss":"blocks/room_preview/room_preview.scss","../rate_button/rate_button":"blocks/rate_button/rate_button.js"}],"blocks/searchroom/searchroom.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/searchroom/searchroom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchroom = searchroom;

require("./searchroom.scss");

function searchroom() {
  var el = document.getElementsByClassName("confirm");

  if (document.addEventListener) {
    el[0].addEventListener('click', function () {
      return mouseOverHandler(el);
    }, false);
  }

  function mouseOverHandler(el) {
    $(el[0]).css('opacity: 0.5;');
    console.log('ss');
  }
}
},{"./searchroom.scss":"blocks/searchroom/searchroom.scss"}],"blocks/signin/signin.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/signin/signin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = signin;

require("./signin.scss");

function signin() {}
},{"./signin.scss":"blocks/signin/signin.scss"}],"blocks/subscription/subscription.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/subscription/subscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscription = subscription;

require("./subscription.scss");

function subscription() {}
},{"./subscription.scss":"blocks/subscription/subscription.scss"}],"blocks/text_field/text_field.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/text_field/text_field.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text_field = text_field;

require("./text_field.scss");

function text_field() {}
},{"./text_field.scss":"blocks/text_field/text_field.scss"}],"blocks/toggle/toggle.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/toggle/toggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

require("./toggle.scss");

function toggle() {}
},{"./toggle.scss":"blocks/toggle/toggle.scss"}],"blocks/all_blocks/all_blocks.js":[function(require,module,exports) {
"use strict";

var _arrival_departure = require("../arrival_departure/arrival_departure");

var _bullet_list = require("../bullet_list/bullet_list");

var _buttons = require("../buttons/buttons");

var _checkbox_button = require("../checkbox_button/checkbox_button");

var _comment = require("../comment/comment");

var _expandable_checkbox_list = require("../expandable_checkbox_list/expandable_checkbox_list");

var _fill_button = require("../fill_button/fill_button");

var _filling_room = require("../filling_room/filling_room");

var _footer = require("../footer/footer");

var _guest = require("../guest/guest");

var _header = require("../header/header");

var _like_button = require("../like_button/like_button");

var _login = require("../login/login");

var _pagination = require("../pagination/pagination");

var _rate_button = require("../rate_button/rate_button");

var _radio_button = require("../radio_button/radio_button");

var _range_slider = require("../range_slider/range_slider");

var _rich_checkbox_button = require("../rich_checkbox_button/rich_checkbox_button");

var _room = require("../room/room");

var _room_preview = require("../room_preview/room_preview");

var _searchroom = require("../searchroom/searchroom");

var _signin = require("../signin/signin");

var _subscription = require("../subscription/subscription");

var _text_field = require("../text_field/text_field");

var _toggle = require("../toggle/toggle");

// import {date} from '../date/date';
window.onload = function () {
  // arrival_departure()
  // bullet_list()
  // buttons()
  // checkbox_button()
  // comment()
  // date()
  // expandable_checkbox_list()
  // fill_button()
  // filling_room()
  // footer()
  // guest()
  // header()
  // like_button()
  // login()
  // pagination()
  // rate_button()
  // radio_button()
  // range_slider()
  // rich_checkbox_button()
  // room()
  (0, _room_preview.room_preview)(); // searchroom()
  // signin()
  // subscription()
  // text_field()
  // toggle()
};
},{"../arrival_departure/arrival_departure":"blocks/arrival_departure/arrival_departure.js","../bullet_list/bullet_list":"blocks/bullet_list/bullet_list.js","../buttons/buttons":"blocks/buttons/buttons.js","../checkbox_button/checkbox_button":"blocks/checkbox_button/checkbox_button.js","../comment/comment":"blocks/comment/comment.js","../expandable_checkbox_list/expandable_checkbox_list":"blocks/expandable_checkbox_list/expandable_checkbox_list.js","../fill_button/fill_button":"blocks/fill_button/fill_button.js","../filling_room/filling_room":"blocks/filling_room/filling_room.js","../footer/footer":"blocks/footer/footer.js","../guest/guest":"blocks/guest/guest.js","../header/header":"blocks/header/header.js","../like_button/like_button":"blocks/like_button/like_button.js","../login/login":"blocks/login/login.js","../pagination/pagination":"blocks/pagination/pagination.js","../rate_button/rate_button":"blocks/rate_button/rate_button.js","../radio_button/radio_button":"blocks/radio_button/radio_button.js","../range_slider/range_slider":"blocks/range_slider/range_slider.js","../rich_checkbox_button/rich_checkbox_button":"blocks/rich_checkbox_button/rich_checkbox_button.js","../room/room":"blocks/room/room.js","../room_preview/room_preview":"blocks/room_preview/room_preview.js","../searchroom/searchroom":"blocks/searchroom/searchroom.js","../signin/signin":"blocks/signin/signin.js","../subscription/subscription":"blocks/subscription/subscription.js","../text_field/text_field":"blocks/text_field/text_field.js","../toggle/toggle":"blocks/toggle/toggle.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62764" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("blocks/all_blocks/all_blocks.js");});
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/all_blocks.ea6123ad.js.map