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
})({"blocks/date/date.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\font\\Quicksand\\Quicksand-Regular.woff":[["Quicksand-Regular.5734f72b.woff","font/Quicksand/Quicksand-Regular.woff"],"font/Quicksand/Quicksand-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Regular.woff":[["Montserrat-Regular.3879dd71.woff","font/Montserrat/Montserrat-Regular.woff"],"font/Montserrat/Montserrat-Regular.woff"],"./..\\..\\font\\Montserrat\\Montserrat-Bold.woff":[["Montserrat-Bold.cf84ca58.woff","font/Montserrat/Montserrat-Bold.woff"],"font/Montserrat/Montserrat-Bold.woff"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/date/date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = date;

require("./date.scss");

function date() {
  var date_day = new Date();
  var month_1 = {
    Value: date_day.getMonth()
  };
  var left_month = {
    Value: month_1.Value
  };
  var day_1 = {
    Value: date_day.getDay()
  };
  var year_1 = {
    Value: date_day.getFullYear()
  };
  var left_year = {
    Value: year_1.Value
  };
  if (day_1.Value === 0) day_1.Value = 7;
  var now_day = {
    Value: NaN
  };
  var prev_day = {
    Value: NaN
  };
  var start = {
    Value: -1
  };
  var stop = {
    Value: -1
  };
  var all_day = document.getElementsByClassName('day');
  console.log('date_day.getDay() ', date_day.getDay());
  var month;

  switch (year_1.Value % 4 === 0) {
    case 0:
      month = ['Январь31', 'Февраль29', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31'];
      break;

    default:
      month = ['Январь31', 'Февраль28', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31'];
      break;
  }

  var day_of_week = Math.floor(date_day.getDate() / 7);
  day_1.Value -= date_day.getDate() - day_of_week * 7 - 1;
  if (day_1.Value < 0) day_1.Value += 7;
  var previous_month_day = parseInt(month[month_1.Value - 1].slice(month[month_1.Value - 1].length - 2, month[month_1.Value - 1].length));
  var month_day = parseInt(month[month_1.Value].slice(month[month_1.Value].length - 2, month[month_1.Value].length));
  now_day.Value = month_day;
  prev_day.Value = previous_month_day;
  var week = {
    Value: Math.ceil((parseFloat(month[month_1.Value].slice(month[month_1.Value].length - 2, month[month_1.Value].length)) + day_1.Value - 1) / 7)
  };
  var day = {
    Value: previous_month_day - day_1.Value + 2
  };

  function build_calendar(previous_month_day, month_day, week, day) {
    var buf = '';
    var flag = 0;

    for (var i = 0; i < week; i++) {
      if (day === previous_month_day + 1) {
        day = 1;
        flag++;
        previous_month_day = month_day;
      }

      buf += '<ul class="week">';

      for (var j = 0; j < 7; j++) {
        if (flag === 0) {
          buf += '<li class="day previous_m"><div></div><p>' + day + '</p></li>';
        }

        if (flag === 1) {
          buf += '<li class="day "><div></div><p>' + day + '</p></li>';
        }

        if (flag === 2) {
          buf += '<li class="day next_m"><div></div><p>' + day + '</p></li>';
        }

        day++;

        if (day === previous_month_day + 1) {
          day = 1;
          flag++;
          previous_month_day = month_day;
        }
      }

      buf += '</ul>';
    }

    return buf;
  }

  $('.number').html(build_calendar(previous_month_day, month_day, week.Value, day.Value));
  $('.month_year').children('p').html(month[month_1.Value].slice(0, month[month_1.Value].length - 2));
  var date_back = document.getElementById("date_back");
  var date_forward = document.getElementById('date_forward'); // Для современных браузеров

  if (document.addEventListener) {
    date_back.addEventListener('click', function () {
      if (month_1.Value > left_month.Value && year_1.Value === left_year.Value || year_1.Value > left_year.Value) {
        mouseOverHandler(month_1, day_1, year_1, 1, all_day);
      }
    }, false);
  }

  if (document.addEventListener) {
    date_forward.addEventListener('click', function () {
      return mouseOverHandler(month_1, day_1, year_1, -1, all_day);
    }, false);
  }

  function mouseOverHandler(month_1, day_1, year_1, direction) {
    var prev_month = month_1.Value - 1 * direction;
    var prev_month_12;
    var prev_month_0;

    if (prev_month > 11) {
      year_1.Value++;
      prev_month = 0;
    }

    if (prev_month < 0) {
      year_1.Value--;
      prev_month = 11;
    }

    if (prev_month + 1 > 11) prev_month_12 = 0;else prev_month_12 = prev_month + 1;
    if (prev_month - 1 < 0) prev_month_0 = 11;else prev_month_0 = prev_month - 1;
    var month;

    if (year_1.Value % 4 === 0) {
      month = ['Январь31', 'Февраль29', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31'];
    } else {
      month = ['Январь31', 'Февраль28', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31'];
    }

    var month_day_B = parseInt(month[prev_month_0].slice(month[prev_month_0].length - 2, month[prev_month_0].length));
    var month_day_N = parseInt(month[prev_month].slice(month[prev_month].length - 2, month[prev_month].length));
    now_day.Value = month_day_N;
    prev_day.Value = month_day_B;
    var n;

    if (direction === -1) {
      n = month_day_B;
    } else {
      n = month_day_N;
    }

    switch (n) {
      case 29:
        day_1.Value -= 1 * direction;
        break;

      case 30:
        day_1.Value -= 2 * direction;
        break;

      case 31:
        day_1.Value -= 3 * direction;
        break;

      default:
        break;
    }

    if (day_1.Value > 7) {
      day_1.Value -= 7;
    }

    if (day_1.Value <= 0) {
      day_1.Value += 7;
    }

    day.Value = month_day_B - day_1.Value + 2;
    week.Value = Math.ceil((parseFloat(month[prev_month].slice(month[prev_month].length - 2, month[prev_month].length)) + day_1.Value - 1) / 7);
    $('.number').html(build_calendar(month_day_B, month_day_N, week.Value, day.Value));
    $('.month_year').children('p').html(month[prev_month].slice(0, month[prev_month].length - 2));
    var all_day = document.getElementsByClassName('day');

    var _loop = function _loop(i) {
      if (document.addEventListener) {
        all_day[i].addEventListener('click', function () {
          return ChooseCLickHandler(all_day, i);
        }, false);
      }
    };

    for (var i = 0; i < all_day.length; i++) {
      _loop(i);
    }

    month_1.Value = prev_month;
    color(all_day);
  }

  var first_date = {
    date: NaN,
    month: NaN,
    year: NaN,
    status: false
  };
  var second_date = {
    date: NaN,
    month: NaN,
    year: NaN,
    status: false
  };
  var number_of_all_day = {
    value: 0
  };

  var _loop2 = function _loop2(i) {
    if (document.addEventListener) {
      all_day[i].addEventListener('click', function () {
        return ChooseCLickHandler(all_day, i);
      }, false);
    }
  };

  for (var i = 0; i < all_day.length; i++) {
    _loop2(i);
  }

  function ChooseCLickHandler(all_day, i) {
    console.log('ddfd');
    console.log(first_date.status);
    console.log(second_date.status);

    if (first_date.status === true && second_date.status === true) {
      ClearCLickHandler(all_day);
      ChooseCLickHandler(all_day, i);
    }

    if (first_date.status && !second_date.status) {
      second_date.date = parseInt($(all_day[i]).children('p').html());
      second_date.year = year_1.Value;
      console.log("8");

      if ($(all_day[i]).hasClass('next_m')) {
        second_date.month = month_1.Value + 1;

        if (second_date.month > 11) {
          second_date.month = 0;
          second_date.year++;
        }

        console.log("7");
      } else {
        second_date.month = month_1.Value;
        console.log("6");
      }

      if ($(all_day[i]).hasClass('previous_m')) {
        second_date.month = month_1.Value - 1;

        if (second_date.month < 0) {
          second_date.month = 11;
          second_date.year--;
        }

        console.log("5");
      }

      if (second_date.month > first_date.month) {
        //second_date.month++
        second_date.status = true;
        $(all_day[i]).addClass("second");
        console.log("4");
      } //
      // console.log(first_date.month)
      // console.log(second_date.month)
      // console.log(first_date.date)
      // console.log(second_date.date)


      if (second_date.month === first_date.month && second_date.date > first_date.date) {
        second_date.status = true;
        $(all_day[i]).addClass("second");
        console.log("3");
      }
    }

    if (first_date.status === false) {
      first_date.status = true;
      first_date.date = parseInt($(all_day[i]).children('p').html());
      first_date.year = year_1.Value;

      if ($(all_day[i]).hasClass('next_m')) {
        first_date.month = month_1.Value + 1;

        if (first_date.month > 11) {
          first_date.month = 0;
          first_date.year++;
        }
      } else {
        first_date.month = month_1.Value;
      }

      if ($(all_day[i]).hasClass('previous_m')) {
        first_date.month = month_1.Value - 1;

        if (first_date.month < 0) {
          first_date.month = 11;
          first_date.year--;
        }
      }

      $(all_day[i]).addClass("first");
    }

    color(all_day);
  }

  var clear = document.getElementById("clear");

  if (document.addEventListener) {
    clear.addEventListener('click', function () {
      return ClearCLickHandler(all_day);
    }, false);
  }

  function ClearCLickHandler(all_day) {
    if (start.Value !== -1 && stop.Value !== -1) {
      for (var _i = parseInt(start.Value); _i < parseInt(stop.Value) + 1; _i++) {
        $(all_day[_i]).removeClass('color');
      }
    }

    if (first_date.status === true) $(all_day[day_1.Value - (prev_day.Value - first_date.date) - 2]).removeClass("first");
    if (first_date.status === true) $(all_day[first_date.date + day_1.Value - 2]).removeClass("first");
    if (first_date.status === true) $(all_day[first_date.date + day_1.Value - 2 + now_day.Value]).removeClass("first");
    if (first_date.status === true) $(all_day[day_1.Value - (prev_day.Value - first_date.date) - 2]).removeClass("first_one");
    if (first_date.status === true) $(all_day[first_date.date + day_1.Value - 2]).removeClass("first_one");
    if (first_date.status === true) $(all_day[first_date.date + day_1.Value - 2 + now_day.Value]).removeClass("first_one");
    if (second_date.status === true) $(all_day[day_1.Value - (prev_day.Value - second_date.date) - 2]).removeClass("second"); //console.log(day_1.Value - (prev_day.Value - first_date.date) - 1)

    if (second_date.status === true) $(all_day[second_date.date + day_1.Value - 2]).removeClass("second");
    if (second_date.status === true) $(all_day[second_date.date + day_1.Value - 2 + now_day.Value]).removeClass("second");
    second_date.status = false;
    second_date.date = NaN;
    second_date.month = NaN;
    second_date.year = NaN;
    first_date.status = false;
    first_date.date = NaN;
    first_date.month = NaN;
    first_date.year = NaN;
  }

  function color(all_day) {
    if (first_date.status && second_date.status) {
      start.Value = -1;
      stop.Value = -1;

      if (month_1.Value - first_date.month > 0) {
        if (first_date.date <= parseInt($(all_day[0]).html())) start.Value = 0;else start.Value = day_1.Value - (prev_day.Value - first_date.date) - 2;
      }

      if (first_date.month === month_1.Value) {
        start.Value = day_1.Value + first_date.date - 2;
      }

      if (month_1.Value - first_date.month < 0) {
        if (first_date.date < parseInt($(all_day[week.Value * 7 - 1]).html())) {
          start.Value = day_1.Value + now_day.Value + first_date.date - 2;
        } else {
          start.Value = -1;
        }
      }

      if (month_1.Value - second_date.month > 0) {
        if (second_date.date > parseInt($(all_day[0]).html())) stop.Value = day_1.Value - (prev_day.Value - second_date.date) - 2;else stop.Value = -1;
      }

      if (month_1.Value === second_date.month) {
        stop.Value = day_1.Value + second_date.date - 2;
      }

      if (month_1.Value - second_date.month < 0) {
        if (second_date.date > parseInt($(all_day[week.Value * 7 - 1]).html())) {
          stop.Value = week.Value * 7 - 1;
        } else {
          stop.Value = day_1.Value + now_day.Value + second_date.date - 2;
        }
      }

      if (start.Value !== -1 && stop.Value !== -1) {
        $(all_day[start.Value]).removeClass('first');
        $(all_day[start.Value]).addClass('first_one');

        for (var _i2 = start.Value; _i2 < stop.Value + 1; _i2++) {
          $(all_day[_i2]).addClass('color');
        }
      }

      console.log('');
      console.log(''); //if(first_date.month)
      // if(second_date.month === first_date.month){
      //     if(first_date.month === month_1.Value){
      //         for( let i = day_1.Value + first_date.date - 2; i < day_1.Value + second_date.date - 1; i ++){
      //             console.log(i)
      //         }
      //     }
      //
      //     if(first_date.date < parseInt($(all_day[0]).html())){
      //         if(first_date.date === month_1.Value){
      //             for( let i = day_1.Value + first_date.date - 2; i < day_1.Value + second_date.date - 1; i ++){
      //                 console.log(i)
      //             }
      //         }
      //     }
      //
      //     if(first_date.date < parseInt($(all_day[0]).html())){
      //         if(first_date.date === month_1.Value){
      //             for( let i = day_1.Value + first_date.date - 2; i < day_1.Value + second_date.date - 1; i ++){
      //                 console.log(i)
      //             }
      //         }
      //     }
      // }

      if (second_date.month - first_date.month > 0) {
        for (var _i3 = 0; _i3 < second_date.date; _i3++) {//console.log('ddd3')
        }
      }
    }
  }

  color(all_day);
}
},{"./date.scss":"blocks/date/date.scss"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var b=require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("blocks/date/date.js");});
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/date.01d4520f.js.map