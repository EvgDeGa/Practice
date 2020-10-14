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
})({"blocks/like_button/like_button.scss":[function(require,module,exports) {
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
},{"./like_button.scss":"blocks/like_button/like_button.scss"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var b=require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("blocks/like_button/like_button.js");});
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/like_button.96f93e89.js.map