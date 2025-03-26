"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ReactionHandler = /*#__PURE__*/function () {
  function ReactionHandler(nodeIdentifier) {
    var _this$reactionContain;
    _classCallCheck(this, ReactionHandler);
    this.nodeIdentifier = nodeIdentifier;
    this.reactionContainer = document.querySelector("[data-reaction-identifier=\"".concat(nodeIdentifier, "\"]"));
    this.dimensions = ((_this$reactionContain = this.reactionContainer) === null || _this$reactionContain === void 0 ? void 0 : _this$reactionContain.dataset.reactionDimensions) || '{}';
    this.currentReaction = this.getStoredReaction();
    this.init();
  }
  return _createClass(ReactionHandler, [{
    key: "addReaction",
    value: function () {
      var _addReaction = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
        var previousReaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              previousReaction = this.currentReaction; // Step 1: Remove previous reaction if it exists
              if (!(previousReaction && previousReaction !== type)) {
                _context.next = 6;
                break;
              }
              _context.next = 5;
              return this.removeReaction(previousReaction);
            case 5:
              this.updateLocalCount(previousReaction, -1); // Decrease previous count
            case 6:
              if (!(this.currentReaction === type)) {
                _context.next = 13;
                break;
              }
              _context.next = 9;
              return this.removeReaction(type);
            case 9:
              this.currentReaction = null;
              this.updateLocalCount(type, -1); // Decrease count
              _context.next = 17;
              break;
            case 13:
              _context.next = 15;
              return fetch("/api/reactions/addReaction?nodeIdentifier=".concat(this.nodeIdentifier, "&reactionType=").concat(type, "&dimensions=").concat(this.dimensions), {
                method: 'POST'
              });
            case 15:
              this.currentReaction = type;
              this.updateLocalCount(type, 1); // Increase count
            case 17:
              // Step 4: Update local storage and UI
              this.updateLocalStorage();
              this.updateButtonStyles();

              // Step 5: Fetch the latest reaction counts
              _context.next = 21;
              return this.updateReactionCount();
            case 21:
              _context.next = 26;
              break;
            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              console.error('Error updating reaction:', _context.t0);
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 23]]);
      }));
      function addReaction(_x) {
        return _addReaction.apply(this, arguments);
      }
      return addReaction;
    }()
  }, {
    key: "removeReaction",
    value: function () {
      var _removeReaction = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(type) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/reactions/removeReaction?nodeIdentifier=".concat(this.nodeIdentifier, "&reactionType=").concat(type, "&dimensions=").concat(this.dimensions), {
                method: 'POST'
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function removeReaction(_x2) {
        return _removeReaction.apply(this, arguments);
      }
      return removeReaction;
    }()
  }, {
    key: "updateReactionCount",
    value: function () {
      var _updateReactionCount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this = this;
        var response, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fetch("/api/reactions/countReactions?nodeIdentifier=".concat(this.nodeIdentifier, "&dimensions=").concat(this.dimensions), {
                method: 'POST'
              });
            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();
            case 6:
              data = _context3.sent;
              if (this.reactionContainer) {
                this.reactionContainer.dataset.reactionTotal = data.totalCount;
              }

              // Update counts for each reaction type
              data.result.forEach(function (element) {
                _this.setReactionCount(element.reactionType, element.count);
              });
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              console.error('Error fetching reaction count:', _context3.t0);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 11]]);
      }));
      function updateReactionCount() {
        return _updateReactionCount.apply(this, arguments);
      }
      return updateReactionCount;
    }() // Get stored reaction for current dimensions
  }, {
    key: "getStoredReaction",
    value: function getStoredReaction() {
      var storageKey = "reaction_".concat(this.nodeIdentifier);
      var stored = localStorage.getItem(storageKey);
      if (stored) {
        var parsed = JSON.parse(stored);
        var dimensionsKey = this.getDimensionsKey();
        if (parsed[dimensionsKey]) {
          return parsed[dimensionsKey].reaction;
        }
      }
      return null;
    }

    // Update local storage with reaction, storing all dimensions under one key
  }, {
    key: "updateLocalStorage",
    value: function updateLocalStorage() {
      var storageKey = "reaction_".concat(this.nodeIdentifier);
      var dimensionsKey = this.getDimensionsKey();
      var storedData = localStorage.getItem(storageKey);
      var parsedData = storedData ? JSON.parse(storedData) : {};
      if (this.currentReaction) {
        parsedData[dimensionsKey] = {
          reaction: this.currentReaction
        };
      } else {
        delete parsedData[dimensionsKey];
      }
      if (Object.keys(parsedData).length > 0) {
        localStorage.setItem(storageKey, JSON.stringify(parsedData));
      } else {
        localStorage.removeItem(storageKey);
      }
    }

    // Generate a unique key for the current dimensions
  }, {
    key: "getDimensionsKey",
    value: function getDimensionsKey() {
      return "dimensions_".concat(btoa(this.dimensions)); // Base64 encoding to ensure uniqueness
    }

    // Directly updates the displayed count for a reaction type
  }, {
    key: "setReactionCount",
    value: function setReactionCount(type, count) {
      var _this$reactionContain2;
      var countElement = (_this$reactionContain2 = this.reactionContainer) === null || _this$reactionContain2 === void 0 ? void 0 : _this$reactionContain2.querySelector("[data-reaction-count=\"".concat(type, "\"]"));
      if (countElement) {
        countElement.innerText = count > 0 ? count.toString() : ""; // Set to empty string if 0
      }
    }

    // Adjusts the count locally for immediate UI feedback
  }, {
    key: "updateLocalCount",
    value: function updateLocalCount(type, change) {
      var _this$reactionContain3;
      var countElement = (_this$reactionContain3 = this.reactionContainer) === null || _this$reactionContain3 === void 0 ? void 0 : _this$reactionContain3.querySelector("[data-reaction-count=\"".concat(type, "\"]"));
      if (countElement) {
        var currentCount = parseInt(countElement.innerText, 10) || 0;
        var newCount = currentCount + change;
        countElement.innerText = newCount > 0 ? newCount.toString() : ""; // Prevents negative numbers, empty if 0
      }
    }
  }, {
    key: "updateButtonStyles",
    value: function updateButtonStyles() {
      var _this2 = this;
      if (!this.reactionContainer) return;
      this.reactionContainer.querySelectorAll('[data-reaction]').forEach(function (button) {
        var type = button.dataset.reaction;
        button.classList.toggle('selected', _this2.currentReaction === type);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;
      if (!this.reactionContainer) return;
      this.updateReactionCount();
      this.updateButtonStyles();
      this.reactionContainer.querySelectorAll('[data-reaction]').forEach(function (button) {
        button.addEventListener('click', function (event) {
          var type = event.currentTarget.dataset.reaction;
          if (type) {
            _this3.addReaction(type);
          }
        });
      });
    }
  }]);
}(); // Initialize for each reaction component on the page
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-reaction-identifier]').forEach(function (element) {
    new ReactionHandler(element.dataset.reactionIdentifier);
  });
});