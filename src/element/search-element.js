(() => {
  'use strict';
  var e,
    _ = {},
    h = {};
  function n(e) {
    var a = h[e];
    if (void 0 !== a) return a.exports;
    var r = (h[e] = {exports: {}});
    return _[e](r, r.exports, n), r.exports;
  }
  (n.m = _),
    (e = []),
    (n.O = (a, r, u, l) => {
      if (!r) {
        var s = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [r, u, l] = e[f], o = !0, t = 0; t < r.length; t++)
            (!1 & l || s >= l) && Object.keys(n.O).every(i => n.O[i](r[t]))
              ? r.splice(t--, 1)
              : ((o = !1), l < s && (s = l));
          if (o) {
            e.splice(f--, 1);
            var c = u();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      l = l || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > l; f--) e[f] = e[f - 1];
      e[f] = [r, u, l];
    }),
    (n.n = e => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return n.d(a, {a}), a;
    }),
    (n.d = (e, a) => {
      for (var r in a)
        n.o(a, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, {enumerable: !0, get: a[r]});
    }),
    (n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (() => {
      var e = {666: 0};
      n.O.j = u => 0 === e[u];
      var a = (u, l) => {
          var t,
            c,
            [f, s, o] = l,
            v = 0;
          if (f.some(d => 0 !== e[d])) {
            for (t in s) n.o(s, t) && (n.m[t] = s[t]);
            if (o) var b = o(n);
          }
          for (u && u(l); v < f.length; v++)
            n.o(e, (c = f[v])) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(b);
        },
        r = (self.webpackChunksearch_element =
          self.webpackChunksearch_element || []);
      r.forEach(a.bind(null, 0)), (r.push = a.bind(null, r.push.bind(r)));
    })();
})();
('use strict');
(self.webpackChunksearch_element = self.webpackChunksearch_element || []).push([
  [429],
  {
    560: (ie, Ee, de) => {
      de(232);
    },
    232: () => {
      !(function (e) {
        const n = e.performance;
        function i(M) {
          n && n.mark && n.mark(M);
        }
        function o(M, E) {
          n && n.measure && n.measure(M, E);
        }
        i('Zone');
        const c = e.__Zone_symbol_prefix || '__zone_symbol__';
        function a(M) {
          return c + M;
        }
        const y = !0 === e[a('forceDuplicateZoneCheck')];
        if (e.Zone) {
          if (y || 'function' != typeof e.Zone.__symbol__)
            throw new Error('Zone already loaded.');
          return e.Zone;
        }
        let d = (() => {
          class M {
            constructor(t, r) {
              (this._parent = t),
                (this._name = r ? r.name || 'unnamed' : '<root>'),
                (this._properties = (r && r.properties) || {}),
                (this._zoneDelegate = new v(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  r,
                ));
            }
            static assertZonePatched() {
              if (e.Promise !== oe.ZoneAwarePromise)
                throw new Error(
                  'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)',
                );
            }
            static get root() {
              let t = M.current;
              for (; t.parent; ) t = t.parent;
              return t;
            }
            static get current() {
              return U.zone;
            }
            static get currentTask() {
              return re;
            }
            static __load_patch(t, r, k = !1) {
              if (oe.hasOwnProperty(t)) {
                if (!k && y) throw Error('Already loaded patch: ' + t);
              } else if (!e['__Zone_disable_' + t]) {
                const C = 'Zone:' + t;
                i(C), (oe[t] = r(e, M, z)), o(C, C);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            get(t) {
              const r = this.getZoneWith(t);
              if (r) return r._properties[t];
            }
            getZoneWith(t) {
              let r = this;
              for (; r; ) {
                if (r._properties.hasOwnProperty(t)) return r;
                r = r._parent;
              }
              return null;
            }
            fork(t) {
              if (!t) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, t);
            }
            wrap(t, r) {
              if ('function' != typeof t)
                throw new Error('Expecting function got: ' + t);
              const k = this._zoneDelegate.intercept(this, t, r),
                C = this;
              return function () {
                return C.runGuarded(k, this, arguments, r);
              };
            }
            run(t, r, k, C) {
              U = {parent: U, zone: this};
              try {
                return this._zoneDelegate.invoke(this, t, r, k, C);
              } finally {
                U = U.parent;
              }
            }
            runGuarded(t, r = null, k, C) {
              U = {parent: U, zone: this};
              try {
                try {
                  return this._zoneDelegate.invoke(this, t, r, k, C);
                } catch ($) {
                  if (this._zoneDelegate.handleError(this, $)) throw $;
                }
              } finally {
                U = U.parent;
              }
            }
            runTask(t, r, k) {
              if (t.zone != this)
                throw new Error(
                  'A task can only be run in the zone of creation! (Creation: ' +
                    (t.zone || K).name +
                    '; Execution: ' +
                    this.name +
                    ')',
                );
              if (t.state === x && (t.type === Q || t.type === w)) return;
              const C = t.state != p;
              C && t._transitionTo(p, j), t.runCount++;
              const $ = re;
              (re = t), (U = {parent: U, zone: this});
              try {
                t.type == w &&
                  t.data &&
                  !t.data.isPeriodic &&
                  (t.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, t, r, k);
                } catch (l) {
                  if (this._zoneDelegate.handleError(this, l)) throw l;
                }
              } finally {
                t.state !== x &&
                  t.state !== h &&
                  (t.type == Q || (t.data && t.data.isPeriodic)
                    ? C && t._transitionTo(j, p)
                    : ((t.runCount = 0),
                      this._updateTaskCount(t, -1),
                      C && t._transitionTo(x, p, x))),
                  (U = U.parent),
                  (re = $);
              }
            }
            scheduleTask(t) {
              if (t.zone && t.zone !== this) {
                let k = this;
                for (; k; ) {
                  if (k === t.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`,
                    );
                  k = k.parent;
                }
              }
              t._transitionTo(X, x);
              const r = [];
              (t._zoneDelegates = r), (t._zone = this);
              try {
                t = this._zoneDelegate.scheduleTask(this, t);
              } catch (k) {
                throw (
                  (t._transitionTo(h, X, x),
                  this._zoneDelegate.handleError(this, k),
                  k)
                );
              }
              return (
                t._zoneDelegates === r && this._updateTaskCount(t, 1),
                t.state == X && t._transitionTo(j, X),
                t
              );
            }
            scheduleMicroTask(t, r, k, C) {
              return this.scheduleTask(new m(I, t, r, k, C, void 0));
            }
            scheduleMacroTask(t, r, k, C, $) {
              return this.scheduleTask(new m(w, t, r, k, C, $));
            }
            scheduleEventTask(t, r, k, C, $) {
              return this.scheduleTask(new m(Q, t, r, k, C, $));
            }
            cancelTask(t) {
              if (t.zone != this)
                throw new Error(
                  'A task can only be cancelled in the zone of creation! (Creation: ' +
                    (t.zone || K).name +
                    '; Execution: ' +
                    this.name +
                    ')',
                );
              t._transitionTo(G, j, p);
              try {
                this._zoneDelegate.cancelTask(this, t);
              } catch (r) {
                throw (
                  (t._transitionTo(h, G),
                  this._zoneDelegate.handleError(this, r),
                  r)
                );
              }
              return (
                this._updateTaskCount(t, -1),
                t._transitionTo(x, G),
                (t.runCount = 0),
                t
              );
            }
            _updateTaskCount(t, r) {
              const k = t._zoneDelegates;
              -1 == r && (t._zoneDelegates = null);
              for (let C = 0; C < k.length; C++)
                k[C]._updateTaskCount(t.type, r);
            }
          }
          return (M.__symbol__ = a), M;
        })();
        const P = {
          name: '',
          onHasTask: (M, E, t, r) => M.hasTask(t, r),
          onScheduleTask: (M, E, t, r) => M.scheduleTask(t, r),
          onInvokeTask: (M, E, t, r, k, C) => M.invokeTask(t, r, k, C),
          onCancelTask: (M, E, t, r) => M.cancelTask(t, r),
        };
        class v {
          constructor(E, t, r) {
            (this._taskCounts = {microTask: 0, macroTask: 0, eventTask: 0}),
              (this.zone = E),
              (this._parentDelegate = t),
              (this._forkZS = r && (r && r.onFork ? r : t._forkZS)),
              (this._forkDlgt = r && (r.onFork ? t : t._forkDlgt)),
              (this._forkCurrZone =
                r && (r.onFork ? this.zone : t._forkCurrZone)),
              (this._interceptZS = r && (r.onIntercept ? r : t._interceptZS)),
              (this._interceptDlgt =
                r && (r.onIntercept ? t : t._interceptDlgt)),
              (this._interceptCurrZone =
                r && (r.onIntercept ? this.zone : t._interceptCurrZone)),
              (this._invokeZS = r && (r.onInvoke ? r : t._invokeZS)),
              (this._invokeDlgt = r && (r.onInvoke ? t : t._invokeDlgt)),
              (this._invokeCurrZone =
                r && (r.onInvoke ? this.zone : t._invokeCurrZone)),
              (this._handleErrorZS =
                r && (r.onHandleError ? r : t._handleErrorZS)),
              (this._handleErrorDlgt =
                r && (r.onHandleError ? t : t._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                r && (r.onHandleError ? this.zone : t._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                r && (r.onScheduleTask ? r : t._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                r && (r.onScheduleTask ? t : t._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                r && (r.onScheduleTask ? this.zone : t._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                r && (r.onInvokeTask ? r : t._invokeTaskZS)),
              (this._invokeTaskDlgt =
                r && (r.onInvokeTask ? t : t._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                r && (r.onInvokeTask ? this.zone : t._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                r && (r.onCancelTask ? r : t._cancelTaskZS)),
              (this._cancelTaskDlgt =
                r && (r.onCancelTask ? t : t._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                r && (r.onCancelTask ? this.zone : t._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const k = r && r.onHasTask;
            (k || (t && t._hasTaskZS)) &&
              ((this._hasTaskZS = k ? r : P),
              (this._hasTaskDlgt = t),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = E),
              r.onScheduleTask ||
                ((this._scheduleTaskZS = P),
                (this._scheduleTaskDlgt = t),
                (this._scheduleTaskCurrZone = this.zone)),
              r.onInvokeTask ||
                ((this._invokeTaskZS = P),
                (this._invokeTaskDlgt = t),
                (this._invokeTaskCurrZone = this.zone)),
              r.onCancelTask ||
                ((this._cancelTaskZS = P),
                (this._cancelTaskDlgt = t),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(E, t) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, E, t)
              : new d(E, t);
          }
          intercept(E, t, r) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  E,
                  t,
                  r,
                )
              : t;
          }
          invoke(E, t, r, k, C) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  E,
                  t,
                  r,
                  k,
                  C,
                )
              : t.apply(r, k);
          }
          handleError(E, t) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                E,
                t,
              )
            );
          }
          scheduleTask(E, t) {
            let r = t;
            if (this._scheduleTaskZS)
              this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner),
                (r = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  E,
                  t,
                )),
                r || (r = t);
            else if (t.scheduleFn) t.scheduleFn(t);
            else {
              if (t.type != I) throw new Error('Task is missing scheduleFn.');
              R(t);
            }
            return r;
          }
          invokeTask(E, t, r, k) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  E,
                  t,
                  r,
                  k,
                )
              : t.callback.apply(r, k);
          }
          cancelTask(E, t) {
            let r;
            if (this._cancelTaskZS)
              r = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                E,
                t,
              );
            else {
              if (!t.cancelFn) throw Error('Task is not cancelable');
              r = t.cancelFn(t);
            }
            return r;
          }
          hasTask(E, t) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  E,
                  t,
                );
            } catch (r) {
              this.handleError(E, r);
            }
          }
          _updateTaskCount(E, t) {
            const r = this._taskCounts,
              k = r[E],
              C = (r[E] = k + t);
            if (C < 0)
              throw new Error('More tasks executed then were scheduled.');
            (0 != k && 0 != C) ||
              this.hasTask(this.zone, {
                microTask: r.microTask > 0,
                macroTask: r.macroTask > 0,
                eventTask: r.eventTask > 0,
                change: E,
              });
          }
        }
        class m {
          constructor(E, t, r, k, C, $) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = 'notScheduled'),
              (this.type = E),
              (this.source = t),
              (this.data = k),
              (this.scheduleFn = C),
              (this.cancelFn = $),
              !r)
            )
              throw new Error('callback is not defined');
            this.callback = r;
            const l = this;
            this.invoke =
              E === Q && k && k.useG
                ? m.invokeTask
                : function () {
                    return m.invokeTask.call(e, l, this, arguments);
                  };
          }
          static invokeTask(E, t, r) {
            E || (E = this), ee++;
            try {
              return E.runCount++, E.zone.runTask(E, t, r);
            } finally {
              1 == ee && _(), ee--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(x, X);
          }
          _transitionTo(E, t, r) {
            if (this._state !== t && this._state !== r)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${E}', expecting state '${t}'${
                  r ? " or '" + r + "'" : ''
                }, was '${this._state}'.`,
              );
            (this._state = E), E == x && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && void 0 !== this.data.handleId
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const L = a('setTimeout'),
          Z = a('Promise'),
          N = a('then');
        let J,
          B = [],
          H = !1;
        function q(M) {
          if ((J || (e[Z] && (J = e[Z].resolve(0))), J)) {
            let E = J[N];
            E || (E = J.then), E.call(J, M);
          } else e[L](M, 0);
        }
        function R(M) {
          0 === ee && 0 === B.length && q(_), M && B.push(M);
        }
        function _() {
          if (!H) {
            for (H = !0; B.length; ) {
              const M = B;
              B = [];
              for (let E = 0; E < M.length; E++) {
                const t = M[E];
                try {
                  t.zone.runTask(t, null, null);
                } catch (r) {
                  z.onUnhandledError(r);
                }
              }
            }
            z.microtaskDrainDone(), (H = !1);
          }
        }
        const K = {name: 'NO ZONE'},
          x = 'notScheduled',
          X = 'scheduling',
          j = 'scheduled',
          p = 'running',
          G = 'canceling',
          h = 'unknown',
          I = 'microTask',
          w = 'macroTask',
          Q = 'eventTask',
          oe = {},
          z = {
            symbol: a,
            currentZoneFrame: () => U,
            onUnhandledError: W,
            microtaskDrainDone: W,
            scheduleMicroTask: R,
            showUncaughtError: () => !d[a('ignoreConsoleErrorUncaughtError')],
            patchEventTarget: () => [],
            patchOnProperties: W,
            patchMethod: () => W,
            bindArguments: () => [],
            patchThen: () => W,
            patchMacroTask: () => W,
            patchEventPrototype: () => W,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => W,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => W,
            wrapWithCurrentZone: () => W,
            filterProperties: () => [],
            attachOriginToPatched: () => W,
            _redefineProperty: () => W,
            patchCallbacks: () => W,
            nativeScheduleMicroTask: q,
          };
        let U = {parent: null, zone: new d(null, null)},
          re = null,
          ee = 0;
        function W() {}
        o('Zone', 'Zone'), (e.Zone = d);
      })(
        ('undefined' != typeof window && window) ||
          ('undefined' != typeof self && self) ||
          global,
      );
      const ie = Object.getOwnPropertyDescriptor,
        Ee = Object.defineProperty,
        de = Object.getPrototypeOf,
        ge = Object.create,
        Ve = Array.prototype.slice,
        Oe = 'addEventListener',
        Se = 'removeEventListener',
        Ze = Zone.__symbol__(Oe),
        Ne = Zone.__symbol__(Se),
        ce = 'true',
        ae = 'false',
        ke = Zone.__symbol__('');
      function Ie(e, n) {
        return Zone.current.wrap(e, n);
      }
      function Me(e, n, i, o, c) {
        return Zone.current.scheduleMacroTask(e, n, i, o, c);
      }
      const A = Zone.__symbol__,
        Pe = 'undefined' != typeof window,
        Te = Pe ? window : void 0,
        Y = (Pe && Te) || ('object' == typeof self && self) || global;
      function Le(e, n) {
        for (let i = e.length - 1; i >= 0; i--)
          'function' == typeof e[i] && (e[i] = Ie(e[i], n + '_' + i));
        return e;
      }
      function Fe(e) {
        return (
          !e ||
          (!1 !== e.writable &&
            !('function' == typeof e.get && void 0 === e.set))
        );
      }
      const Be =
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        we =
          !('nw' in Y) &&
          void 0 !== Y.process &&
          '[object process]' === {}.toString.call(Y.process),
        je = !we && !Be && !(!Pe || !Te.HTMLElement),
        Ue =
          void 0 !== Y.process &&
          '[object process]' === {}.toString.call(Y.process) &&
          !Be &&
          !(!Pe || !Te.HTMLElement),
        Re = {},
        We = function (e) {
          if (!(e = e || Y.event)) return;
          let n = Re[e.type];
          n || (n = Re[e.type] = A('ON_PROPERTY' + e.type));
          const i = this || e.target || Y,
            o = i[n];
          let c;
          if (je && i === Te && 'error' === e.type) {
            const a = e;
            (c =
              o &&
              o.call(this, a.message, a.filename, a.lineno, a.colno, a.error)),
              !0 === c && e.preventDefault();
          } else
            (c = o && o.apply(this, arguments)),
              null != c && !c && e.preventDefault();
          return c;
        };
      function qe(e, n, i) {
        let o = ie(e, n);
        if (
          (!o && i && ie(i, n) && (o = {enumerable: !0, configurable: !0}),
          !o || !o.configurable)
        )
          return;
        const c = A('on' + n + 'patched');
        if (e.hasOwnProperty(c) && e[c]) return;
        delete o.writable, delete o.value;
        const a = o.get,
          y = o.set,
          d = n.slice(2);
        let P = Re[d];
        P || (P = Re[d] = A('ON_PROPERTY' + d)),
          (o.set = function (v) {
            let m = this;
            !m && e === Y && (m = Y),
              m &&
                ('function' == typeof m[P] && m.removeEventListener(d, We),
                y && y.call(m, null),
                (m[P] = v),
                'function' == typeof v && m.addEventListener(d, We, !1));
          }),
          (o.get = function () {
            let v = this;
            if ((!v && e === Y && (v = Y), !v)) return null;
            const m = v[P];
            if (m) return m;
            if (a) {
              let L = a.call(this);
              if (L)
                return (
                  o.set.call(this, L),
                  'function' == typeof v.removeAttribute &&
                    v.removeAttribute(n),
                  L
                );
            }
            return null;
          }),
          Ee(e, n, o),
          (e[c] = !0);
      }
      function Xe(e, n, i) {
        if (n) for (let o = 0; o < n.length; o++) qe(e, 'on' + n[o], i);
        else {
          const o = [];
          for (const c in e) 'on' == c.slice(0, 2) && o.push(c);
          for (let c = 0; c < o.length; c++) qe(e, o[c], i);
        }
      }
      const ne = A('originalInstance');
      function ve(e) {
        const n = Y[e];
        if (!n) return;
        (Y[A(e)] = n),
          (Y[e] = function () {
            const c = Le(arguments, e);
            switch (c.length) {
              case 0:
                this[ne] = new n();
                break;
              case 1:
                this[ne] = new n(c[0]);
                break;
              case 2:
                this[ne] = new n(c[0], c[1]);
                break;
              case 3:
                this[ne] = new n(c[0], c[1], c[2]);
                break;
              case 4:
                this[ne] = new n(c[0], c[1], c[2], c[3]);
                break;
              default:
                throw new Error('Arg list too long.');
            }
          }),
          ue(Y[e], n);
        const i = new n(function () {});
        let o;
        for (o in i)
          ('XMLHttpRequest' === e && 'responseBlob' === o) ||
            (function (c) {
              'function' == typeof i[c]
                ? (Y[e].prototype[c] = function () {
                    return this[ne][c].apply(this[ne], arguments);
                  })
                : Ee(Y[e].prototype, c, {
                    set: function (a) {
                      'function' == typeof a
                        ? ((this[ne][c] = Ie(a, e + '.' + c)),
                          ue(this[ne][c], a))
                        : (this[ne][c] = a);
                    },
                    get: function () {
                      return this[ne][c];
                    },
                  });
            })(o);
        for (o in n)
          'prototype' !== o && n.hasOwnProperty(o) && (Y[e][o] = n[o]);
      }
      function le(e, n, i) {
        let o = e;
        for (; o && !o.hasOwnProperty(n); ) o = de(o);
        !o && e[n] && (o = e);
        const c = A(n);
        let a = null;
        if (
          o &&
          (!(a = o[c]) || !o.hasOwnProperty(c)) &&
          ((a = o[c] = o[n]), Fe(o && ie(o, n)))
        ) {
          const d = i(a, c, n);
          (o[n] = function () {
            return d(this, arguments);
          }),
            ue(o[n], a);
        }
        return a;
      }
      function lt(e, n, i) {
        let o = null;
        function c(a) {
          const y = a.data;
          return (
            (y.args[y.cbIdx] = function () {
              a.invoke.apply(this, arguments);
            }),
            o.apply(y.target, y.args),
            a
          );
        }
        o = le(
          e,
          n,
          a =>
            function (y, d) {
              const P = i(y, d);
              return P.cbIdx >= 0 && 'function' == typeof d[P.cbIdx]
                ? Me(P.name, d[P.cbIdx], P, c)
                : a.apply(y, d);
            },
        );
      }
      function ue(e, n) {
        e[A('OriginalDelegate')] = n;
      }
      let ze = !1,
        Ae = !1;
      function ft() {
        if (ze) return Ae;
        ze = !0;
        try {
          const e = Te.navigator.userAgent;
          (-1 !== e.indexOf('MSIE ') ||
            -1 !== e.indexOf('Trident/') ||
            -1 !== e.indexOf('Edge/')) &&
            (Ae = !0);
        } catch (e) {}
        return Ae;
      }
      Zone.__load_patch('ZoneAwarePromise', (e, n, i) => {
        const o = Object.getOwnPropertyDescriptor,
          c = Object.defineProperty,
          y = i.symbol,
          d = [],
          P = !0 === e[y('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
          v = y('Promise'),
          m = y('then');
        (i.onUnhandledError = l => {
          if (i.showUncaughtError()) {
            const u = l && l.rejection;
            u
              ? console.error(
                  'Unhandled Promise rejection:',
                  u instanceof Error ? u.message : u,
                  '; Zone:',
                  l.zone.name,
                  '; Task:',
                  l.task && l.task.source,
                  '; Value:',
                  u,
                  u instanceof Error ? u.stack : void 0,
                )
              : console.error(l);
          }
        }),
          (i.microtaskDrainDone = () => {
            for (; d.length; ) {
              const l = d.shift();
              try {
                l.zone.runGuarded(() => {
                  throw l.throwOriginal ? l.rejection : l;
                });
              } catch (u) {
                N(u);
              }
            }
          });
        const Z = y('unhandledPromiseRejectionHandler');
        function N(l) {
          i.onUnhandledError(l);
          try {
            const u = n[Z];
            'function' == typeof u && u.call(this, l);
          } catch (u) {}
        }
        function B(l) {
          return l && l.then;
        }
        function H(l) {
          return l;
        }
        function J(l) {
          return t.reject(l);
        }
        const q = y('state'),
          R = y('value'),
          _ = y('finally'),
          K = y('parentPromiseValue'),
          x = y('parentPromiseState'),
          j = null,
          p = !0,
          G = !1;
        function I(l, u) {
          return s => {
            try {
              z(l, u, s);
            } catch (f) {
              z(l, !1, f);
            }
          };
        }
        const w = function () {
            let l = !1;
            return function (s) {
              return function () {
                l || ((l = !0), s.apply(null, arguments));
              };
            };
          },
          oe = y('currentTaskTrace');
        function z(l, u, s) {
          const f = w();
          if (l === s) throw new TypeError('Promise resolved with itself');
          if (l[q] === j) {
            let g = null;
            try {
              ('object' == typeof s || 'function' == typeof s) &&
                (g = s && s.then);
            } catch (b) {
              return (
                f(() => {
                  z(l, !1, b);
                })(),
                l
              );
            }
            if (
              u !== G &&
              s instanceof t &&
              s.hasOwnProperty(q) &&
              s.hasOwnProperty(R) &&
              s[q] !== j
            )
              re(s), z(l, s[q], s[R]);
            else if (u !== G && 'function' == typeof g)
              try {
                g.call(s, f(I(l, u)), f(I(l, !1)));
              } catch (b) {
                f(() => {
                  z(l, !1, b);
                })();
              }
            else {
              l[q] = u;
              const b = l[R];
              if (
                ((l[R] = s),
                l[_] === _ && u === p && ((l[q] = l[x]), (l[R] = l[K])),
                u === G && s instanceof Error)
              ) {
                const T =
                  n.currentTask &&
                  n.currentTask.data &&
                  n.currentTask.data.__creationTrace__;
                T &&
                  c(s, oe, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: T,
                  });
              }
              for (let T = 0; T < b.length; )
                ee(l, b[T++], b[T++], b[T++], b[T++]);
              if (0 == b.length && u == G) {
                l[q] = 0;
                let T = s;
                try {
                  throw new Error(
                    'Uncaught (in promise): ' +
                      (function a(l) {
                        return l && l.toString === Object.prototype.toString
                          ? ((l.constructor && l.constructor.name) || '') +
                              ': ' +
                              JSON.stringify(l)
                          : l
                          ? l.toString()
                          : Object.prototype.toString.call(l);
                      })(s) +
                      (s && s.stack ? '\n' + s.stack : ''),
                  );
                } catch (D) {
                  T = D;
                }
                P && (T.throwOriginal = !0),
                  (T.rejection = s),
                  (T.promise = l),
                  (T.zone = n.current),
                  (T.task = n.currentTask),
                  d.push(T),
                  i.scheduleMicroTask();
              }
            }
          }
          return l;
        }
        const U = y('rejectionHandledHandler');
        function re(l) {
          if (0 === l[q]) {
            try {
              const u = n[U];
              u &&
                'function' == typeof u &&
                u.call(this, {rejection: l[R], promise: l});
            } catch (u) {}
            l[q] = G;
            for (let u = 0; u < d.length; u++)
              l === d[u].promise && d.splice(u, 1);
          }
        }
        function ee(l, u, s, f, g) {
          re(l);
          const b = l[q],
            T = b
              ? 'function' == typeof f
                ? f
                : H
              : 'function' == typeof g
              ? g
              : J;
          u.scheduleMicroTask(
            'Promise.then',
            () => {
              try {
                const D = l[R],
                  O = !!s && _ === s[_];
                O && ((s[K] = D), (s[x] = b));
                const S = u.run(T, void 0, O && T !== J && T !== H ? [] : [D]);
                z(s, !0, S);
              } catch (D) {
                z(s, !1, D);
              }
            },
            s,
          );
        }
        const M = function () {},
          E = e.AggregateError;
        class t {
          static toString() {
            return 'function ZoneAwarePromise() { [native code] }';
          }
          static resolve(u) {
            return z(new this(null), p, u);
          }
          static reject(u) {
            return z(new this(null), G, u);
          }
          static any(u) {
            if (!u || 'function' != typeof u[Symbol.iterator])
              return Promise.reject(new E([], 'All promises were rejected'));
            const s = [];
            let f = 0;
            try {
              for (let T of u) f++, s.push(t.resolve(T));
            } catch (T) {
              return Promise.reject(new E([], 'All promises were rejected'));
            }
            if (0 === f)
              return Promise.reject(new E([], 'All promises were rejected'));
            let g = !1;
            const b = [];
            return new t((T, D) => {
              for (let O = 0; O < s.length; O++)
                s[O].then(
                  S => {
                    g || ((g = !0), T(S));
                  },
                  S => {
                    b.push(S),
                      f--,
                      0 === f &&
                        ((g = !0), D(new E(b, 'All promises were rejected')));
                  },
                );
            });
          }
          static race(u) {
            let s,
              f,
              g = new this((D, O) => {
                (s = D), (f = O);
              });
            function b(D) {
              s(D);
            }
            function T(D) {
              f(D);
            }
            for (let D of u) B(D) || (D = this.resolve(D)), D.then(b, T);
            return g;
          }
          static all(u) {
            return t.allWithCallback(u);
          }
          static allSettled(u) {
            return (
              this && this.prototype instanceof t ? this : t
            ).allWithCallback(u, {
              thenCallback: f => ({status: 'fulfilled', value: f}),
              errorCallback: f => ({status: 'rejected', reason: f}),
            });
          }
          static allWithCallback(u, s) {
            let f,
              g,
              b = new this((S, V) => {
                (f = S), (g = V);
              }),
              T = 2,
              D = 0;
            const O = [];
            for (let S of u) {
              B(S) || (S = this.resolve(S));
              const V = D;
              try {
                S.then(
                  F => {
                    (O[V] = s ? s.thenCallback(F) : F), T--, 0 === T && f(O);
                  },
                  F => {
                    s
                      ? ((O[V] = s.errorCallback(F)), T--, 0 === T && f(O))
                      : g(F);
                  },
                );
              } catch (F) {
                g(F);
              }
              T++, D++;
            }
            return (T -= 2), 0 === T && f(O), b;
          }
          constructor(u) {
            const s = this;
            if (!(s instanceof t))
              throw new Error('Must be an instanceof Promise.');
            (s[q] = j), (s[R] = []);
            try {
              const f = w();
              u && u(f(I(s, p)), f(I(s, G)));
            } catch (f) {
              z(s, !1, f);
            }
          }
          get [Symbol.toStringTag]() {
            return 'Promise';
          }
          get [Symbol.species]() {
            return t;
          }
          then(u, s) {
            var f;
            let g =
              null === (f = this.constructor) || void 0 === f
                ? void 0
                : f[Symbol.species];
            (!g || 'function' != typeof g) && (g = this.constructor || t);
            const b = new g(M),
              T = n.current;
            return (
              this[q] == j ? this[R].push(T, b, u, s) : ee(this, T, b, u, s), b
            );
          }
          catch(u) {
            return this.then(null, u);
          }
          finally(u) {
            var s;
            let f =
              null === (s = this.constructor) || void 0 === s
                ? void 0
                : s[Symbol.species];
            (!f || 'function' != typeof f) && (f = t);
            const g = new f(M);
            g[_] = _;
            const b = n.current;
            return (
              this[q] == j ? this[R].push(b, g, u, u) : ee(this, b, g, u, u), g
            );
          }
        }
        (t.resolve = t.resolve),
          (t.reject = t.reject),
          (t.race = t.race),
          (t.all = t.all);
        const r = (e[v] = e.Promise);
        e.Promise = t;
        const k = y('thenPatched');
        function C(l) {
          const u = l.prototype,
            s = o(u, 'then');
          if (s && (!1 === s.writable || !s.configurable)) return;
          const f = u.then;
          (u[m] = f),
            (l.prototype.then = function (g, b) {
              return new t((D, O) => {
                f.call(this, D, O);
              }).then(g, b);
            }),
            (l[k] = !0);
        }
        return (
          (i.patchThen = C),
          r &&
            (C(r),
            le(e, 'fetch', l =>
              (function $(l) {
                return function (u, s) {
                  let f = l.apply(u, s);
                  if (f instanceof t) return f;
                  let g = f.constructor;
                  return g[k] || C(g), f;
                };
              })(l),
            )),
          (Promise[n.__symbol__('uncaughtPromiseErrors')] = d),
          t
        );
      }),
        Zone.__load_patch('toString', e => {
          const n = Function.prototype.toString,
            i = A('OriginalDelegate'),
            o = A('Promise'),
            c = A('Error'),
            a = function () {
              if ('function' == typeof this) {
                const v = this[i];
                if (v)
                  return 'function' == typeof v
                    ? n.call(v)
                    : Object.prototype.toString.call(v);
                if (this === Promise) {
                  const m = e[o];
                  if (m) return n.call(m);
                }
                if (this === Error) {
                  const m = e[c];
                  if (m) return n.call(m);
                }
              }
              return n.call(this);
            };
          (a[i] = n), (Function.prototype.toString = a);
          const y = Object.prototype.toString;
          Object.prototype.toString = function () {
            return 'function' == typeof Promise && this instanceof Promise
              ? '[object Promise]'
              : y.call(this);
          };
        });
      let ye = !1;
      if ('undefined' != typeof window)
        try {
          const e = Object.defineProperty({}, 'passive', {
            get: function () {
              ye = !0;
            },
          });
          window.addEventListener('test', e, e),
            window.removeEventListener('test', e, e);
        } catch (e) {
          ye = !1;
        }
      const ht = {useG: !0},
        te = {},
        Ye = {},
        $e = new RegExp('^' + ke + '(\\w+)(true|false)$'),
        Ke = A('propagationStopped');
      function Je(e, n) {
        const i = (n ? n(e) : e) + ae,
          o = (n ? n(e) : e) + ce,
          c = ke + i,
          a = ke + o;
        (te[e] = {}), (te[e][ae] = c), (te[e][ce] = a);
      }
      function dt(e, n, i, o) {
        const c = (o && o.add) || Oe,
          a = (o && o.rm) || Se,
          y = (o && o.listeners) || 'eventListeners',
          d = (o && o.rmAll) || 'removeAllListeners',
          P = A(c),
          v = '.' + c + ':',
          Z = function (R, _, K) {
            if (R.isRemoved) return;
            const x = R.callback;
            let X;
            'object' == typeof x &&
              x.handleEvent &&
              ((R.callback = p => x.handleEvent(p)), (R.originalDelegate = x));
            try {
              R.invoke(R, _, [K]);
            } catch (p) {
              X = p;
            }
            const j = R.options;
            return (
              j &&
                'object' == typeof j &&
                j.once &&
                _[a].call(
                  _,
                  K.type,
                  R.originalDelegate ? R.originalDelegate : R.callback,
                  j,
                ),
              X
            );
          };
        function N(R, _, K) {
          if (!(_ = _ || e.event)) return;
          const x = R || _.target || e,
            X = x[te[_.type][K ? ce : ae]];
          if (X) {
            const j = [];
            if (1 === X.length) {
              const p = Z(X[0], x, _);
              p && j.push(p);
            } else {
              const p = X.slice();
              for (let G = 0; G < p.length && (!_ || !0 !== _[Ke]); G++) {
                const h = Z(p[G], x, _);
                h && j.push(h);
              }
            }
            if (1 === j.length) throw j[0];
            for (let p = 0; p < j.length; p++) {
              const G = j[p];
              n.nativeScheduleMicroTask(() => {
                throw G;
              });
            }
          }
        }
        const B = function (R) {
            return N(this, R, !1);
          },
          H = function (R) {
            return N(this, R, !0);
          };
        function J(R, _) {
          if (!R) return !1;
          let K = !0;
          _ && void 0 !== _.useG && (K = _.useG);
          const x = _ && _.vh;
          let X = !0;
          _ && void 0 !== _.chkDup && (X = _.chkDup);
          let j = !1;
          _ && void 0 !== _.rt && (j = _.rt);
          let p = R;
          for (; p && !p.hasOwnProperty(c); ) p = de(p);
          if ((!p && R[c] && (p = R), !p || p[P])) return !1;
          const G = _ && _.eventNameToString,
            h = {},
            I = (p[P] = p[c]),
            w = (p[A(a)] = p[a]),
            Q = (p[A(y)] = p[y]),
            oe = (p[A(d)] = p[d]);
          let z;
          function U(s, f) {
            return !ye && 'object' == typeof s && s
              ? !!s.capture
              : ye && f
              ? 'boolean' == typeof s
                ? {capture: s, passive: !0}
                : s
                ? 'object' == typeof s && !1 !== s.passive
                  ? Object.assign(Object.assign({}, s), {passive: !0})
                  : s
                : {passive: !0}
              : s;
          }
          _ && _.prepend && (z = p[A(_.prepend)] = p[_.prepend]);
          const t = K
              ? function (s) {
                  if (!h.isExisting)
                    return I.call(
                      h.target,
                      h.eventName,
                      h.capture ? H : B,
                      h.options,
                    );
                }
              : function (s) {
                  return I.call(h.target, h.eventName, s.invoke, h.options);
                },
            r = K
              ? function (s) {
                  if (!s.isRemoved) {
                    const f = te[s.eventName];
                    let g;
                    f && (g = f[s.capture ? ce : ae]);
                    const b = g && s.target[g];
                    if (b)
                      for (let T = 0; T < b.length; T++)
                        if (b[T] === s) {
                          b.splice(T, 1),
                            (s.isRemoved = !0),
                            0 === b.length &&
                              ((s.allRemoved = !0), (s.target[g] = null));
                          break;
                        }
                  }
                  if (s.allRemoved)
                    return w.call(
                      s.target,
                      s.eventName,
                      s.capture ? H : B,
                      s.options,
                    );
                }
              : function (s) {
                  return w.call(s.target, s.eventName, s.invoke, s.options);
                },
            C =
              _ && _.diff
                ? _.diff
                : function (s, f) {
                    const g = typeof f;
                    return (
                      ('function' === g && s.callback === f) ||
                      ('object' === g && s.originalDelegate === f)
                    );
                  },
            $ = Zone[A('UNPATCHED_EVENTS')],
            l = e[A('PASSIVE_EVENTS')],
            u = function (s, f, g, b, T = !1, D = !1) {
              return function () {
                const O = this || e;
                let S = arguments[0];
                _ && _.transferEventName && (S = _.transferEventName(S));
                let V = arguments[1];
                if (!V) return s.apply(this, arguments);
                if (we && 'uncaughtException' === S)
                  return s.apply(this, arguments);
                let F = !1;
                if ('function' != typeof V) {
                  if (!V.handleEvent) return s.apply(this, arguments);
                  F = !0;
                }
                if (x && !x(s, V, O, arguments)) return;
                const fe = ye && !!l && -1 !== l.indexOf(S),
                  se = U(arguments[2], fe);
                if ($)
                  for (let _e = 0; _e < $.length; _e++)
                    if (S === $[_e])
                      return fe
                        ? s.call(O, S, V, se)
                        : s.apply(this, arguments);
                const xe = !!se && ('boolean' == typeof se || se.capture),
                  nt = !(!se || 'object' != typeof se) && se.once,
                  gt = Zone.current;
                let Ge = te[S];
                Ge || (Je(S, G), (Ge = te[S]));
                const rt = Ge[xe ? ce : ae];
                let De,
                  me = O[rt],
                  ot = !1;
                if (me) {
                  if (((ot = !0), X))
                    for (let _e = 0; _e < me.length; _e++)
                      if (C(me[_e], V)) return;
                } else me = O[rt] = [];
                const st = O.constructor.name,
                  it = Ye[st];
                it && (De = it[S]),
                  De || (De = st + f + (G ? G(S) : S)),
                  (h.options = se),
                  nt && (h.options.once = !1),
                  (h.target = O),
                  (h.capture = xe),
                  (h.eventName = S),
                  (h.isExisting = ot);
                const be = K ? ht : void 0;
                be && (be.taskData = h);
                const he = gt.scheduleEventTask(De, V, be, g, b);
                return (
                  (h.target = null),
                  be && (be.taskData = null),
                  nt && (se.once = !0),
                  (!ye && 'boolean' == typeof he.options) || (he.options = se),
                  (he.target = O),
                  (he.capture = xe),
                  (he.eventName = S),
                  F && (he.originalDelegate = V),
                  D ? me.unshift(he) : me.push(he),
                  T ? O : void 0
                );
              };
            };
          return (
            (p[c] = u(I, v, t, r, j)),
            z &&
              (p.prependListener = u(
                z,
                '.prependListener:',
                function (s) {
                  return z.call(h.target, h.eventName, s.invoke, h.options);
                },
                r,
                j,
                !0,
              )),
            (p[a] = function () {
              const s = this || e;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = arguments[2],
                b = !!g && ('boolean' == typeof g || g.capture),
                T = arguments[1];
              if (!T) return w.apply(this, arguments);
              if (x && !x(w, T, s, arguments)) return;
              const D = te[f];
              let O;
              D && (O = D[b ? ce : ae]);
              const S = O && s[O];
              if (S)
                for (let V = 0; V < S.length; V++) {
                  const F = S[V];
                  if (C(F, T))
                    return (
                      S.splice(V, 1),
                      (F.isRemoved = !0),
                      0 === S.length &&
                        ((F.allRemoved = !0),
                        (s[O] = null),
                        'string' == typeof f) &&
                        (s[ke + 'ON_PROPERTY' + f] = null),
                      F.zone.cancelTask(F),
                      j ? s : void 0
                    );
                }
              return w.apply(this, arguments);
            }),
            (p[y] = function () {
              const s = this || e;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = [],
                b = Qe(s, G ? G(f) : f);
              for (let T = 0; T < b.length; T++) {
                const D = b[T];
                g.push(D.originalDelegate ? D.originalDelegate : D.callback);
              }
              return g;
            }),
            (p[d] = function () {
              const s = this || e;
              let f = arguments[0];
              if (f) {
                _ && _.transferEventName && (f = _.transferEventName(f));
                const g = te[f];
                if (g) {
                  const D = s[g[ae]],
                    O = s[g[ce]];
                  if (D) {
                    const S = D.slice();
                    for (let V = 0; V < S.length; V++) {
                      const F = S[V];
                      this[a].call(
                        this,
                        f,
                        F.originalDelegate ? F.originalDelegate : F.callback,
                        F.options,
                      );
                    }
                  }
                  if (O) {
                    const S = O.slice();
                    for (let V = 0; V < S.length; V++) {
                      const F = S[V];
                      this[a].call(
                        this,
                        f,
                        F.originalDelegate ? F.originalDelegate : F.callback,
                        F.options,
                      );
                    }
                  }
                }
              } else {
                const g = Object.keys(s);
                for (let b = 0; b < g.length; b++) {
                  const D = $e.exec(g[b]);
                  let O = D && D[1];
                  O && 'removeListener' !== O && this[d].call(this, O);
                }
                this[d].call(this, 'removeListener');
              }
              if (j) return this;
            }),
            ue(p[c], I),
            ue(p[a], w),
            oe && ue(p[d], oe),
            Q && ue(p[y], Q),
            !0
          );
        }
        let q = [];
        for (let R = 0; R < i.length; R++) q[R] = J(i[R], o);
        return q;
      }
      function Qe(e, n) {
        if (!n) {
          const a = [];
          for (let y in e) {
            const d = $e.exec(y);
            let P = d && d[1];
            if (P && (!n || P === n)) {
              const v = e[y];
              if (v) for (let m = 0; m < v.length; m++) a.push(v[m]);
            }
          }
          return a;
        }
        let i = te[n];
        i || (Je(n), (i = te[n]));
        const o = e[i[ae]],
          c = e[i[ce]];
        return o ? (c ? o.concat(c) : o.slice()) : c ? c.slice() : [];
      }
      function _t(e, n) {
        const i = e.Event;
        i &&
          i.prototype &&
          n.patchMethod(
            i.prototype,
            'stopImmediatePropagation',
            o =>
              function (c, a) {
                (c[Ke] = !0), o && o.apply(c, a);
              },
          );
      }
      function Et(e, n, i, o, c) {
        const a = Zone.__symbol__(o);
        if (n[a]) return;
        const y = (n[a] = n[o]);
        (n[o] = function (d, P, v) {
          return (
            P &&
              P.prototype &&
              c.forEach(function (m) {
                const L = `${i}.${o}::` + m,
                  Z = P.prototype;
                try {
                  if (Z.hasOwnProperty(m)) {
                    const N = e.ObjectGetOwnPropertyDescriptor(Z, m);
                    N && N.value
                      ? ((N.value = e.wrapWithCurrentZone(N.value, L)),
                        e._redefineProperty(P.prototype, m, N))
                      : Z[m] && (Z[m] = e.wrapWithCurrentZone(Z[m], L));
                  } else Z[m] && (Z[m] = e.wrapWithCurrentZone(Z[m], L));
                } catch (N) {}
              }),
            y.call(n, d, P, v)
          );
        }),
          e.attachOriginToPatched(n[o], y);
      }
      function et(e, n, i) {
        if (!i || 0 === i.length) return n;
        const o = i.filter(a => a.target === e);
        if (!o || 0 === o.length) return n;
        const c = o[0].ignoreProperties;
        return n.filter(a => -1 === c.indexOf(a));
      }
      function tt(e, n, i, o) {
        e && Xe(e, et(e, n, i), o);
      }
      function He(e) {
        return Object.getOwnPropertyNames(e)
          .filter(n => n.startsWith('on') && n.length > 2)
          .map(n => n.substring(2));
      }
      Zone.__load_patch('util', (e, n, i) => {
        const o = He(e);
        (i.patchOnProperties = Xe),
          (i.patchMethod = le),
          (i.bindArguments = Le),
          (i.patchMacroTask = lt);
        const c = n.__symbol__('BLACK_LISTED_EVENTS'),
          a = n.__symbol__('UNPATCHED_EVENTS');
        e[a] && (e[c] = e[a]),
          e[c] && (n[c] = n[a] = e[c]),
          (i.patchEventPrototype = _t),
          (i.patchEventTarget = dt),
          (i.isIEOrEdge = ft),
          (i.ObjectDefineProperty = Ee),
          (i.ObjectGetOwnPropertyDescriptor = ie),
          (i.ObjectCreate = ge),
          (i.ArraySlice = Ve),
          (i.patchClass = ve),
          (i.wrapWithCurrentZone = Ie),
          (i.filterProperties = et),
          (i.attachOriginToPatched = ue),
          (i._redefineProperty = Object.defineProperty),
          (i.patchCallbacks = Et),
          (i.getGlobalObjects = () => ({
            globalSources: Ye,
            zoneSymbolEventNames: te,
            eventNames: o,
            isBrowser: je,
            isMix: Ue,
            isNode: we,
            TRUE_STR: ce,
            FALSE_STR: ae,
            ZONE_SYMBOL_PREFIX: ke,
            ADD_EVENT_LISTENER_STR: Oe,
            REMOVE_EVENT_LISTENER_STR: Se,
          }));
      });
      const Ce = A('zoneTask');
      function pe(e, n, i, o) {
        let c = null,
          a = null;
        i += o;
        const y = {};
        function d(v) {
          const m = v.data;
          return (
            (m.args[0] = function () {
              return v.invoke.apply(this, arguments);
            }),
            (m.handleId = c.apply(e, m.args)),
            v
          );
        }
        function P(v) {
          return a.call(e, v.data.handleId);
        }
        (c = le(
          e,
          (n += o),
          v =>
            function (m, L) {
              if ('function' == typeof L[0]) {
                const Z = {
                    isPeriodic: 'Interval' === o,
                    delay:
                      'Timeout' === o || 'Interval' === o ? L[1] || 0 : void 0,
                    args: L,
                  },
                  N = L[0];
                L[0] = function () {
                  try {
                    return N.apply(this, arguments);
                  } finally {
                    Z.isPeriodic ||
                      ('number' == typeof Z.handleId
                        ? delete y[Z.handleId]
                        : Z.handleId && (Z.handleId[Ce] = null));
                  }
                };
                const B = Me(n, L[0], Z, d, P);
                if (!B) return B;
                const H = B.data.handleId;
                return (
                  'number' == typeof H ? (y[H] = B) : H && (H[Ce] = B),
                  H &&
                    H.ref &&
                    H.unref &&
                    'function' == typeof H.ref &&
                    'function' == typeof H.unref &&
                    ((B.ref = H.ref.bind(H)), (B.unref = H.unref.bind(H))),
                  'number' == typeof H || H ? H : B
                );
              }
              return v.apply(e, L);
            },
        )),
          (a = le(
            e,
            i,
            v =>
              function (m, L) {
                const Z = L[0];
                let N;
                'number' == typeof Z
                  ? (N = y[Z])
                  : ((N = Z && Z[Ce]), N || (N = Z)),
                  N && 'string' == typeof N.type
                    ? 'notScheduled' !== N.state &&
                      ((N.cancelFn && N.data.isPeriodic) || 0 === N.runCount) &&
                      ('number' == typeof Z ? delete y[Z] : Z && (Z[Ce] = null),
                      N.zone.cancelTask(N))
                    : v.apply(e, L);
              },
          ));
      }
      Zone.__load_patch('legacy', e => {
        const n = e[Zone.__symbol__('legacyPatch')];
        n && n();
      }),
        Zone.__load_patch('queueMicrotask', (e, n, i) => {
          i.patchMethod(
            e,
            'queueMicrotask',
            o =>
              function (c, a) {
                n.current.scheduleMicroTask('queueMicrotask', a[0]);
              },
          );
        }),
        Zone.__load_patch('timers', e => {
          const n = 'set',
            i = 'clear';
          pe(e, n, i, 'Timeout'),
            pe(e, n, i, 'Interval'),
            pe(e, n, i, 'Immediate');
        }),
        Zone.__load_patch('requestAnimationFrame', e => {
          pe(e, 'request', 'cancel', 'AnimationFrame'),
            pe(e, 'mozRequest', 'mozCancel', 'AnimationFrame'),
            pe(e, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
        }),
        Zone.__load_patch('blocking', (e, n) => {
          const i = ['alert', 'prompt', 'confirm'];
          for (let o = 0; o < i.length; o++)
            le(
              e,
              i[o],
              (a, y, d) =>
                function (P, v) {
                  return n.current.run(a, e, v, d);
                },
            );
        }),
        Zone.__load_patch('EventTarget', (e, n, i) => {
          (function mt(e, n) {
            n.patchEventPrototype(e, n);
          })(e, i),
            (function pt(e, n) {
              if (Zone[n.symbol('patchEventTarget')]) return;
              const {
                eventNames: i,
                zoneSymbolEventNames: o,
                TRUE_STR: c,
                FALSE_STR: a,
                ZONE_SYMBOL_PREFIX: y,
              } = n.getGlobalObjects();
              for (let P = 0; P < i.length; P++) {
                const v = i[P],
                  Z = y + (v + a),
                  N = y + (v + c);
                (o[v] = {}), (o[v][a] = Z), (o[v][c] = N);
              }
              const d = e.EventTarget;
              d && d.prototype && n.patchEventTarget(e, n, [d && d.prototype]);
            })(e, i);
          const o = e.XMLHttpRequestEventTarget;
          o && o.prototype && i.patchEventTarget(e, i, [o.prototype]);
        }),
        Zone.__load_patch('MutationObserver', (e, n, i) => {
          ve('MutationObserver'), ve('WebKitMutationObserver');
        }),
        Zone.__load_patch('IntersectionObserver', (e, n, i) => {
          ve('IntersectionObserver');
        }),
        Zone.__load_patch('FileReader', (e, n, i) => {
          ve('FileReader');
        }),
        Zone.__load_patch('on_property', (e, n, i) => {
          !(function Tt(e, n) {
            if ((we && !Ue) || Zone[e.symbol('patchEvents')]) return;
            const i = n.__Zone_ignore_on_properties;
            let o = [];
            if (je) {
              const c = window;
              o = o.concat([
                'Document',
                'SVGElement',
                'Element',
                'HTMLElement',
                'HTMLBodyElement',
                'HTMLMediaElement',
                'HTMLFrameSetElement',
                'HTMLFrameElement',
                'HTMLIFrameElement',
                'HTMLMarqueeElement',
                'Worker',
              ]);
              const a = (function ut() {
                try {
                  const e = Te.navigator.userAgent;
                  if (-1 !== e.indexOf('MSIE ') || -1 !== e.indexOf('Trident/'))
                    return !0;
                } catch (e) {}
                return !1;
              })()
                ? [{target: c, ignoreProperties: ['error']}]
                : [];
              tt(c, He(c), i && i.concat(a), de(c));
            }
            o = o.concat([
              'XMLHttpRequest',
              'XMLHttpRequestEventTarget',
              'IDBIndex',
              'IDBRequest',
              'IDBOpenDBRequest',
              'IDBDatabase',
              'IDBTransaction',
              'IDBCursor',
              'WebSocket',
            ]);
            for (let c = 0; c < o.length; c++) {
              const a = n[o[c]];
              a && a.prototype && tt(a.prototype, He(a.prototype), i);
            }
          })(i, e);
        }),
        Zone.__load_patch('customElements', (e, n, i) => {
          !(function yt(e, n) {
            const {isBrowser: i, isMix: o} = n.getGlobalObjects();
            (i || o) &&
              e.customElements &&
              'customElements' in e &&
              n.patchCallbacks(
                n,
                e.customElements,
                'customElements',
                'define',
                [
                  'connectedCallback',
                  'disconnectedCallback',
                  'adoptedCallback',
                  'attributeChangedCallback',
                ],
              );
          })(e, i);
        }),
        Zone.__load_patch('XHR', (e, n) => {
          !(function P(v) {
            const m = v.XMLHttpRequest;
            if (!m) return;
            const L = m.prototype;
            let N = L[Ze],
              B = L[Ne];
            if (!N) {
              const h = v.XMLHttpRequestEventTarget;
              if (h) {
                const I = h.prototype;
                (N = I[Ze]), (B = I[Ne]);
              }
            }
            const H = 'readystatechange',
              J = 'scheduled';
            function q(h) {
              const I = h.data,
                w = I.target;
              (w[a] = !1), (w[d] = !1);
              const Q = w[c];
              N || ((N = w[Ze]), (B = w[Ne])), Q && B.call(w, H, Q);
              const oe = (w[c] = () => {
                if (w.readyState === w.DONE)
                  if (!I.aborted && w[a] && h.state === J) {
                    const U = w[n.__symbol__('loadfalse')];
                    if (0 !== w.status && U && U.length > 0) {
                      const re = h.invoke;
                      (h.invoke = function () {
                        const ee = w[n.__symbol__('loadfalse')];
                        for (let W = 0; W < ee.length; W++)
                          ee[W] === h && ee.splice(W, 1);
                        !I.aborted && h.state === J && re.call(h);
                      }),
                        U.push(h);
                    } else h.invoke();
                  } else !I.aborted && !1 === w[a] && (w[d] = !0);
              });
              return (
                N.call(w, H, oe),
                w[i] || (w[i] = h),
                p.apply(w, I.args),
                (w[a] = !0),
                h
              );
            }
            function R() {}
            function _(h) {
              const I = h.data;
              return (I.aborted = !0), G.apply(I.target, I.args);
            }
            const K = le(
                L,
                'open',
                () =>
                  function (h, I) {
                    return (h[o] = 0 == I[2]), (h[y] = I[1]), K.apply(h, I);
                  },
              ),
              X = A('fetchTaskAborting'),
              j = A('fetchTaskScheduling'),
              p = le(
                L,
                'send',
                () =>
                  function (h, I) {
                    if (!0 === n.current[j] || h[o]) return p.apply(h, I);
                    {
                      const w = {
                          target: h,
                          url: h[y],
                          isPeriodic: !1,
                          args: I,
                          aborted: !1,
                        },
                        Q = Me('XMLHttpRequest.send', R, w, q, _);
                      h &&
                        !0 === h[d] &&
                        !w.aborted &&
                        Q.state === J &&
                        Q.invoke();
                    }
                  },
              ),
              G = le(
                L,
                'abort',
                () =>
                  function (h, I) {
                    const w = (function Z(h) {
                      return h[i];
                    })(h);
                    if (w && 'string' == typeof w.type) {
                      if (null == w.cancelFn || (w.data && w.data.aborted))
                        return;
                      w.zone.cancelTask(w);
                    } else if (!0 === n.current[X]) return G.apply(h, I);
                  },
              );
          })(e);
          const i = A('xhrTask'),
            o = A('xhrSync'),
            c = A('xhrListener'),
            a = A('xhrScheduled'),
            y = A('xhrURL'),
            d = A('xhrErrorBeforeScheduled');
        }),
        Zone.__load_patch('geolocation', e => {
          e.navigator &&
            e.navigator.geolocation &&
            (function at(e, n) {
              const i = e.constructor.name;
              for (let o = 0; o < n.length; o++) {
                const c = n[o],
                  a = e[c];
                if (a) {
                  if (!Fe(ie(e, c))) continue;
                  e[c] = (d => {
                    const P = function () {
                      return d.apply(this, Le(arguments, i + '.' + c));
                    };
                    return ue(P, d), P;
                  })(a);
                }
              }
            })(e.navigator.geolocation, [
              'getCurrentPosition',
              'watchPosition',
            ]);
        }),
        Zone.__load_patch('PromiseRejectionEvent', (e, n) => {
          function i(o) {
            return function (c) {
              Qe(e, o).forEach(y => {
                const d = e.PromiseRejectionEvent;
                if (d) {
                  const P = new d(o, {promise: c.promise, reason: c.rejection});
                  y.invoke(P);
                }
              });
            };
          }
          e.PromiseRejectionEvent &&
            ((n[A('unhandledPromiseRejectionHandler')] =
              i('unhandledrejection')),
            (n[A('rejectionHandledHandler')] = i('rejectionhandled')));
        });
    },
  },
  ie => {
    ie((ie.s = 560));
  },
]);
('use strict');
(self.webpackChunksearch_element = self.webpackChunksearch_element || []).push([
  [179],
  {
    312: () => {
      function ie(n) {
        return 'function' == typeof n;
      }
      function To(n) {
        const e = n(i => {
          Error.call(i), (i.stack = new Error().stack);
        });
        return (
          (e.prototype = Object.create(Error.prototype)),
          (e.prototype.constructor = e),
          e
        );
      }
      const Fo = To(
        n =>
          function (e) {
            n(this),
              (this.message = e
                ? `${e.length} errors occurred during unsubscription:\n${e
                    .map((i, r) => `${r + 1}) ${i.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = e);
          },
      );
      function tr(n, t) {
        if (n) {
          const e = n.indexOf(t);
          0 <= e && n.splice(e, 1);
        }
      }
      class Le {
        constructor(t) {
          (this.initialTeardown = t),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let t;
          if (!this.closed) {
            this.closed = !0;
            const {_parentage: e} = this;
            if (e)
              if (((this._parentage = null), Array.isArray(e)))
                for (const s of e) s.remove(this);
              else e.remove(this);
            const {initialTeardown: i} = this;
            if (ie(i))
              try {
                i();
              } catch (s) {
                t = s instanceof Fo ? s.errors : [s];
              }
            const {_finalizers: r} = this;
            if (r) {
              this._finalizers = null;
              for (const s of r)
                try {
                  zh(s);
                } catch (o) {
                  (t = null != t ? t : []),
                    o instanceof Fo ? (t = [...t, ...o.errors]) : t.push(o);
                }
            }
            if (t) throw new Fo(t);
          }
        }
        add(t) {
          var e;
          if (t && t !== this)
            if (this.closed) zh(t);
            else {
              if (t instanceof Le) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (e = this._finalizers) && void 0 !== e ? e : []).push(
                t,
              );
            }
        }
        _hasParent(t) {
          const {_parentage: e} = this;
          return e === t || (Array.isArray(e) && e.includes(t));
        }
        _addParent(t) {
          const {_parentage: e} = this;
          this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
        }
        _removeParent(t) {
          const {_parentage: e} = this;
          e === t ? (this._parentage = null) : Array.isArray(e) && tr(e, t);
        }
        remove(t) {
          const {_finalizers: e} = this;
          e && tr(e, t), t instanceof Le && t._removeParent(this);
        }
      }
      Le.EMPTY = (() => {
        const n = new Le();
        return (n.closed = !0), n;
      })();
      const $h = Le.EMPTY;
      function Uh(n) {
        return (
          n instanceof Le ||
          (n && 'closed' in n && ie(n.remove) && ie(n.add) && ie(n.unsubscribe))
        );
      }
      function zh(n) {
        ie(n) ? n() : n.unsubscribe();
      }
      const bi = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Oo = {
          setTimeout(n, t, ...e) {
            const {delegate: i} = Oo;
            return (null == i ? void 0 : i.setTimeout)
              ? i.setTimeout(n, t, ...e)
              : setTimeout(n, t, ...e);
          },
          clearTimeout(n) {
            const {delegate: t} = Oo;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(n);
          },
          delegate: void 0,
        };
      function Wh(n) {
        Oo.setTimeout(() => {
          const {onUnhandledError: t} = bi;
          if (!t) throw n;
          t(n);
        });
      }
      function tc() {}
      const AE = nc('C', void 0, void 0);
      function nc(n, t, e) {
        return {kind: n, value: t, error: e};
      }
      let Ci = null;
      function Ro(n) {
        if (bi.useDeprecatedSynchronousErrorHandling) {
          const t = !Ci;
          if ((t && (Ci = {errorThrown: !1, error: null}), n(), t)) {
            const {errorThrown: e, error: i} = Ci;
            if (((Ci = null), e)) throw i;
          }
        } else n();
      }
      class ic extends Le {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), Uh(t) && t.add(this))
              : (this.destination = kE);
        }
        static create(t, e, i) {
          return new cs(t, e, i);
        }
        next(t) {
          this.isStopped
            ? sc(
                (function IE(n) {
                  return nc('N', n, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? sc(
                (function SE(n) {
                  return nc('E', void 0, n);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? sc(AE, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          try {
            this.destination.error(t);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const FE = Function.prototype.bind;
      function rc(n, t) {
        return FE.call(n, t);
      }
      class OE {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const {partialObserver: e} = this;
          if (e.next)
            try {
              e.next(t);
            } catch (i) {
              ko(i);
            }
        }
        error(t) {
          const {partialObserver: e} = this;
          if (e.error)
            try {
              e.error(t);
            } catch (i) {
              ko(i);
            }
          else ko(t);
        }
        complete() {
          const {partialObserver: t} = this;
          if (t.complete)
            try {
              t.complete();
            } catch (e) {
              ko(e);
            }
        }
      }
      class cs extends ic {
        constructor(t, e, i) {
          let r;
          if ((super(), ie(t) || !t))
            r = {
              next: null != t ? t : void 0,
              error: null != e ? e : void 0,
              complete: null != i ? i : void 0,
            };
          else {
            let s;
            this && bi.useDeprecatedNextContext
              ? ((s = Object.create(t)),
                (s.unsubscribe = () => this.unsubscribe()),
                (r = {
                  next: t.next && rc(t.next, s),
                  error: t.error && rc(t.error, s),
                  complete: t.complete && rc(t.complete, s),
                }))
              : (r = t);
          }
          this.destination = new OE(r);
        }
      }
      function ko(n) {
        bi.useDeprecatedSynchronousErrorHandling
          ? (function TE(n) {
              bi.useDeprecatedSynchronousErrorHandling &&
                Ci &&
                ((Ci.errorThrown = !0), (Ci.error = n));
            })(n)
          : Wh(n);
      }
      function sc(n, t) {
        const {onStoppedNotification: e} = bi;
        e && Oo.setTimeout(() => e(n, t));
      }
      const kE = {
          closed: !0,
          next: tc,
          error: function RE(n) {
            throw n;
          },
          complete: tc,
        },
        oc =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function Po(n) {
        return n;
      }
      let Me = (() => {
        class n {
          constructor(e) {
            e && (this._subscribe = e);
          }
          lift(e) {
            const i = new n();
            return (i.source = this), (i.operator = e), i;
          }
          subscribe(e, i, r) {
            const s = (function NE(n) {
              return (
                (n && n instanceof ic) ||
                ((function PE(n) {
                  return n && ie(n.next) && ie(n.error) && ie(n.complete);
                })(n) &&
                  Uh(n))
              );
            })(e)
              ? e
              : new cs(e, i, r);
            return (
              Ro(() => {
                const {operator: o, source: a} = this;
                s.add(
                  o
                    ? o.call(s, a)
                    : a
                    ? this._subscribe(s)
                    : this._trySubscribe(s),
                );
              }),
              s
            );
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (i) {
              e.error(i);
            }
          }
          forEach(e, i) {
            return new (i = Kh(i))((r, s) => {
              const o = new cs({
                next: a => {
                  try {
                    e(a);
                  } catch (l) {
                    s(l), o.unsubscribe();
                  }
                },
                error: s,
                complete: r,
              });
              this.subscribe(o);
            });
          }
          _subscribe(e) {
            var i;
            return null === (i = this.source) || void 0 === i
              ? void 0
              : i.subscribe(e);
          }
          [oc]() {
            return this;
          }
          pipe(...e) {
            return (function qh(n) {
              return 0 === n.length
                ? Po
                : 1 === n.length
                ? n[0]
                : function (e) {
                    return n.reduce((i, r) => r(i), e);
                  };
            })(e)(this);
          }
          toPromise(e) {
            return new (e = Kh(e))((i, r) => {
              let s;
              this.subscribe(
                o => (s = o),
                o => r(o),
                () => i(s),
              );
            });
          }
        }
        return (n.create = t => new n(t)), n;
      })();
      function Kh(n) {
        var t;
        return null !== (t = null != n ? n : bi.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      const LE = To(
        n =>
          function () {
            n(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let de = (() => {
        class n extends Me {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(e) {
            const i = new Yh(this, this);
            return (i.operator = e), i;
          }
          _throwIfClosed() {
            if (this.closed) throw new LE();
          }
          next(e) {
            Ro(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const i of this.currentObservers) i.next(e);
              }
            });
          }
          error(e) {
            Ro(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = e);
                const {observers: i} = this;
                for (; i.length; ) i.shift().error(e);
              }
            });
          }
          complete() {
            Ro(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const {observers: e} = this;
                for (; e.length; ) e.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var e;
            return (
              (null === (e = this.observers) || void 0 === e
                ? void 0
                : e.length) > 0
            );
          }
          _trySubscribe(e) {
            return this._throwIfClosed(), super._trySubscribe(e);
          }
          _subscribe(e) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(e),
              this._innerSubscribe(e)
            );
          }
          _innerSubscribe(e) {
            const {hasError: i, isStopped: r, observers: s} = this;
            return i || r
              ? $h
              : ((this.currentObservers = null),
                s.push(e),
                new Le(() => {
                  (this.currentObservers = null), tr(s, e);
                }));
          }
          _checkFinalizedStatuses(e) {
            const {hasError: i, thrownError: r, isStopped: s} = this;
            i ? e.error(r) : s && e.complete();
          }
          asObservable() {
            const e = new Me();
            return (e.source = this), e;
          }
        }
        return (n.create = (t, e) => new Yh(t, e)), n;
      })();
      class Yh extends de {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          var e, i;
          null ===
            (i =
              null === (e = this.destination) || void 0 === e
                ? void 0
                : e.next) ||
            void 0 === i ||
            i.call(e, t);
        }
        error(t) {
          var e, i;
          null ===
            (i =
              null === (e = this.destination) || void 0 === e
                ? void 0
                : e.error) ||
            void 0 === i ||
            i.call(e, t);
        }
        complete() {
          var t, e;
          null ===
            (e =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.complete) ||
            void 0 === e ||
            e.call(t);
        }
        _subscribe(t) {
          var e, i;
          return null !==
            (i =
              null === (e = this.source) || void 0 === e
                ? void 0
                : e.subscribe(t)) && void 0 !== i
            ? i
            : $h;
        }
      }
      function Xe(n) {
        return t => {
          if (
            (function VE(n) {
              return ie(null == n ? void 0 : n.lift);
            })(t)
          )
            return t.lift(function (e) {
              try {
                return n(e, this);
              } catch (i) {
                this.error(i);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      function Je(n, t, e, i, r) {
        return new BE(n, t, e, i, r);
      }
      class BE extends ic {
        constructor(t, e, i, r, s, o) {
          super(t),
            (this.onFinalize = s),
            (this.shouldUnsubscribe = o),
            (this._next = e
              ? function (a) {
                  try {
                    e(a);
                  } catch (l) {
                    t.error(l);
                  }
                }
              : super._next),
            (this._error = r
              ? function (a) {
                  try {
                    r(a);
                  } catch (l) {
                    t.error(l);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = i
              ? function () {
                  try {
                    i();
                  } catch (a) {
                    t.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var t;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const {closed: e} = this;
            super.unsubscribe(),
              !e &&
                (null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this));
          }
        }
      }
      function rt(n, t) {
        return Xe((e, i) => {
          let r = 0;
          e.subscribe(
            Je(i, s => {
              i.next(n.call(t, s, r++));
            }),
          );
        });
      }
      function wi(n) {
        return this instanceof wi ? ((this.v = n), this) : new wi(n);
      }
      function GE(n, t, e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          i = e.apply(n, t || []),
          s = [];
        return (
          (r = {}),
          o('next'),
          o('throw'),
          o('return'),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function o(f) {
          i[f] &&
            (r[f] = function (h) {
              return new Promise(function (g, m) {
                s.push([f, h, g, m]) > 1 || a(f, h);
              });
            });
        }
        function a(f, h) {
          try {
            !(function l(f) {
              f.value instanceof wi
                ? Promise.resolve(f.value.v).then(c, u)
                : d(s[0][2], f);
            })(i[f](h));
          } catch (g) {
            d(s[0][3], g);
          }
        }
        function c(f) {
          a('next', f);
        }
        function u(f) {
          a('throw', f);
        }
        function d(f, h) {
          f(h), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function $E(n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var e,
          t = n[Symbol.asyncIterator];
        return t
          ? t.call(n)
          : ((n = (function Xh(n) {
              var t = 'function' == typeof Symbol && Symbol.iterator,
                e = t && n[t],
                i = 0;
              if (e) return e.call(n);
              if (n && 'number' == typeof n.length)
                return {
                  next: function () {
                    return (
                      n && i >= n.length && (n = void 0),
                      {value: n && n[i++], done: !n}
                    );
                  },
                };
              throw new TypeError(
                t
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.',
              );
            })(n)),
            (e = {}),
            i('next'),
            i('throw'),
            i('return'),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function i(s) {
          e[s] =
            n[s] &&
            function (o) {
              return new Promise(function (a, l) {
                !(function r(s, o, a, l) {
                  Promise.resolve(l).then(function (c) {
                    s({value: c, done: a});
                  }, o);
                })(a, l, (o = n[s](o)).done, o.value);
              });
            };
        }
      }
      const lc = n =>
        n && 'number' == typeof n.length && 'function' != typeof n;
      function Jh(n) {
        return ie(null == n ? void 0 : n.then);
      }
      function ep(n) {
        return ie(n[oc]);
      }
      function tp(n) {
        return (
          Symbol.asyncIterator &&
          ie(null == n ? void 0 : n[Symbol.asyncIterator])
        );
      }
      function np(n) {
        return new TypeError(
          `You provided ${
            null !== n && 'object' == typeof n ? 'an invalid object' : `'${n}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const ip = (function zE() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function rp(n) {
        return ie(null == n ? void 0 : n[ip]);
      }
      function sp(n) {
        return GE(this, arguments, function* () {
          const e = n.getReader();
          try {
            for (;;) {
              const {value: i, done: r} = yield wi(e.read());
              if (r) return yield wi(void 0);
              yield yield wi(i);
            }
          } finally {
            e.releaseLock();
          }
        });
      }
      function op(n) {
        return ie(null == n ? void 0 : n.getReader);
      }
      function wt(n) {
        if (n instanceof Me) return n;
        if (null != n) {
          if (ep(n))
            return (function WE(n) {
              return new Me(t => {
                const e = n[oc]();
                if (ie(e.subscribe)) return e.subscribe(t);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(n);
          if (lc(n))
            return (function qE(n) {
              return new Me(t => {
                for (let e = 0; e < n.length && !t.closed; e++) t.next(n[e]);
                t.complete();
              });
            })(n);
          if (Jh(n))
            return (function KE(n) {
              return new Me(t => {
                n.then(
                  e => {
                    t.closed || (t.next(e), t.complete());
                  },
                  e => t.error(e),
                ).then(null, Wh);
              });
            })(n);
          if (tp(n)) return ap(n);
          if (rp(n))
            return (function YE(n) {
              return new Me(t => {
                for (const e of n) if ((t.next(e), t.closed)) return;
                t.complete();
              });
            })(n);
          if (op(n))
            return (function QE(n) {
              return ap(sp(n));
            })(n);
        }
        throw np(n);
      }
      function ap(n) {
        return new Me(t => {
          (function ZE(n, t) {
            var e, i, r, s;
            return (function HE(n, t, e, i) {
              return new (e || (e = Promise))(function (s, o) {
                function a(u) {
                  try {
                    c(i.next(u));
                  } catch (d) {
                    o(d);
                  }
                }
                function l(u) {
                  try {
                    c(i.throw(u));
                  } catch (d) {
                    o(d);
                  }
                }
                function c(u) {
                  u.done
                    ? s(u.value)
                    : (function r(s) {
                        return s instanceof e
                          ? s
                          : new e(function (o) {
                              o(s);
                            });
                      })(u.value).then(a, l);
                }
                c((i = i.apply(n, t || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (e = $E(n); !(i = yield e.next()).done; )
                  if ((t.next(i.value), t.closed)) return;
              } catch (o) {
                r = {error: o};
              } finally {
                try {
                  i && !i.done && (s = e.return) && (yield s.call(e));
                } finally {
                  if (r) throw r.error;
                }
              }
              t.complete();
            });
          })(n, t).catch(e => t.error(e));
        });
      }
      function Qn(n, t, e, i = 0, r = !1) {
        const s = t.schedule(function () {
          e(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
        }, i);
        if ((n.add(s), !r)) return s;
      }
      function us(n, t, e = 1 / 0) {
        return ie(t)
          ? us((i, r) => rt((s, o) => t(i, s, r, o))(wt(n(i, r))), e)
          : ('number' == typeof t && (e = t),
            Xe((i, r) =>
              (function XE(n, t, e, i, r, s, o, a) {
                const l = [];
                let c = 0,
                  u = 0,
                  d = !1;
                const f = () => {
                    d && !l.length && !c && t.complete();
                  },
                  h = m => (c < i ? g(m) : l.push(m)),
                  g = m => {
                    s && t.next(m), c++;
                    let v = !1;
                    wt(e(m, u++)).subscribe(
                      Je(
                        t,
                        y => {
                          null == r || r(y), s ? h(y) : t.next(y);
                        },
                        () => {
                          v = !0;
                        },
                        void 0,
                        () => {
                          if (v)
                            try {
                              for (c--; l.length && c < i; ) {
                                const y = l.shift();
                                o ? Qn(t, o, () => g(y)) : g(y);
                              }
                              f();
                            } catch (y) {
                              t.error(y);
                            }
                        },
                      ),
                    );
                  };
                return (
                  n.subscribe(
                    Je(t, h, () => {
                      (d = !0), f();
                    }),
                  ),
                  () => {
                    null == a || a();
                  }
                );
              })(i, r, n, e),
            ));
      }
      function lp(n = 1 / 0) {
        return us(Po, n);
      }
      const No = new Me(n => n.complete());
      function cp(n) {
        return n && ie(n.schedule);
      }
      function cc(n) {
        return n[n.length - 1];
      }
      function Lo(n) {
        return cp(cc(n)) ? n.pop() : void 0;
      }
      function up(n, t = 0) {
        return Xe((e, i) => {
          e.subscribe(
            Je(
              i,
              r => Qn(i, n, () => i.next(r), t),
              () => Qn(i, n, () => i.complete(), t),
              r => Qn(i, n, () => i.error(r), t),
            ),
          );
        });
      }
      function dp(n, t = 0) {
        return Xe((e, i) => {
          i.add(n.schedule(() => e.subscribe(i), t));
        });
      }
      function fp(n, t) {
        if (!n) throw new Error('Iterable cannot be null');
        return new Me(e => {
          Qn(e, t, () => {
            const i = n[Symbol.asyncIterator]();
            Qn(
              e,
              t,
              () => {
                i.next().then(r => {
                  r.done ? e.complete() : e.next(r.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      function nr(n, t) {
        return t
          ? (function ax(n, t) {
              if (null != n) {
                if (ep(n))
                  return (function nx(n, t) {
                    return wt(n).pipe(dp(t), up(t));
                  })(n, t);
                if (lc(n))
                  return (function rx(n, t) {
                    return new Me(e => {
                      let i = 0;
                      return t.schedule(function () {
                        i === n.length
                          ? e.complete()
                          : (e.next(n[i++]), e.closed || this.schedule());
                      });
                    });
                  })(n, t);
                if (Jh(n))
                  return (function ix(n, t) {
                    return wt(n).pipe(dp(t), up(t));
                  })(n, t);
                if (tp(n)) return fp(n, t);
                if (rp(n))
                  return (function sx(n, t) {
                    return new Me(e => {
                      let i;
                      return (
                        Qn(e, t, () => {
                          (i = n[ip]()),
                            Qn(
                              e,
                              t,
                              () => {
                                let r, s;
                                try {
                                  ({value: r, done: s} = i.next());
                                } catch (o) {
                                  return void e.error(o);
                                }
                                s ? e.complete() : e.next(r);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => ie(null == i ? void 0 : i.return) && i.return()
                      );
                    });
                  })(n, t);
                if (op(n))
                  return (function ox(n, t) {
                    return fp(sp(n), t);
                  })(n, t);
              }
              throw np(n);
            })(n, t)
          : wt(n);
      }
      function kn(...n) {
        const t = Lo(n),
          e = (function tx(n, t) {
            return 'number' == typeof cc(n) ? n.pop() : t;
          })(n, 1 / 0),
          i = n;
        return i.length ? (1 === i.length ? wt(i[0]) : lp(e)(nr(i, t))) : No;
      }
      function hp(n = {}) {
        const {
          connector: t = () => new de(),
          resetOnError: e = !0,
          resetOnComplete: i = !0,
          resetOnRefCountZero: r = !0,
        } = n;
        return s => {
          let o,
            a,
            l,
            c = 0,
            u = !1,
            d = !1;
          const f = () => {
              null == a || a.unsubscribe(), (a = void 0);
            },
            h = () => {
              f(), (o = l = void 0), (u = d = !1);
            },
            g = () => {
              const m = o;
              h(), null == m || m.unsubscribe();
            };
          return Xe((m, v) => {
            c++, !d && !u && f();
            const y = (l = null != l ? l : t());
            v.add(() => {
              c--, 0 === c && !d && !u && (a = uc(g, r));
            }),
              y.subscribe(v),
              !o &&
                c > 0 &&
                ((o = new cs({
                  next: _ => y.next(_),
                  error: _ => {
                    (d = !0), f(), (a = uc(h, e, _)), y.error(_);
                  },
                  complete: () => {
                    (u = !0), f(), (a = uc(h, i)), y.complete();
                  },
                })),
                wt(m).subscribe(o));
          })(s);
        };
      }
      function uc(n, t, ...e) {
        if (!0 === t) return void n();
        if (!1 === t) return;
        const i = new cs({
          next: () => {
            i.unsubscribe(), n();
          },
        });
        return t(...e).subscribe(i);
      }
      function ge(n) {
        for (let t in n) if (n[t] === ge) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function dc(n, t) {
        for (const e in t)
          t.hasOwnProperty(e) && !n.hasOwnProperty(e) && (n[e] = t[e]);
      }
      function fe(n) {
        if ('string' == typeof n) return n;
        if (Array.isArray(n)) return '[' + n.map(fe).join(', ') + ']';
        if (null == n) return '' + n;
        if (n.overriddenName) return `${n.overriddenName}`;
        if (n.name) return `${n.name}`;
        const t = n.toString();
        if (null == t) return '' + t;
        const e = t.indexOf('\n');
        return -1 === e ? t : t.substring(0, e);
      }
      function fc(n, t) {
        return null == n || '' === n
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? n
          : n + ' ' + t;
      }
      const lx = ge({__forward_ref__: ge});
      function _e(n) {
        return (
          (n.__forward_ref__ = _e),
          (n.toString = function () {
            return fe(this());
          }),
          n
        );
      }
      function K(n) {
        return pp(n) ? n() : n;
      }
      function pp(n) {
        return (
          'function' == typeof n &&
          n.hasOwnProperty(lx) &&
          n.__forward_ref__ === _e
        );
      }
      class T extends Error {
        constructor(t, e) {
          super(
            (function hc(n, t) {
              return `NG0${Math.abs(n)}${t ? ': ' + t : ''}`;
            })(t, e),
          ),
            (this.code = t);
        }
      }
      function G(n) {
        return 'string' == typeof n ? n : null == n ? '' : String(n);
      }
      function et(n) {
        return 'function' == typeof n
          ? n.name || n.toString()
          : 'object' == typeof n && null != n && 'function' == typeof n.type
          ? n.type.name || n.type.toString()
          : G(n);
      }
      function Vo(n, t) {
        const e = t ? ` in ${t}` : '';
        throw new T(-201, `No provider for ${et(n)} found${e}`);
      }
      function Mt(n, t) {
        null == n &&
          (function he(n, t, e, i) {
            throw new Error(
              `ASSERTION ERROR: ${n}` +
                (null == i ? '' : ` [Expected=> ${e} ${i} ${t} <=Actual]`),
            );
          })(t, n, null, '!=');
      }
      function E(n) {
        return {
          token: n.token,
          providedIn: n.providedIn || null,
          factory: n.factory,
          value: void 0,
        };
      }
      function re(n) {
        return {providers: n.providers || [], imports: n.imports || []};
      }
      function pc(n) {
        return gp(n, Bo) || gp(n, _p);
      }
      function gp(n, t) {
        return n.hasOwnProperty(t) ? n[t] : null;
      }
      function mp(n) {
        return n && (n.hasOwnProperty(gc) || n.hasOwnProperty(gx))
          ? n[gc]
          : null;
      }
      const Bo = ge({ɵprov: ge}),
        gc = ge({ɵinj: ge}),
        _p = ge({ngInjectableDef: ge}),
        gx = ge({ngInjectorDef: ge});
      var W = (() => (
        ((W = W || {})[(W.Default = 0)] = 'Default'),
        (W[(W.Host = 1)] = 'Host'),
        (W[(W.Self = 2)] = 'Self'),
        (W[(W.SkipSelf = 4)] = 'SkipSelf'),
        (W[(W.Optional = 8)] = 'Optional'),
        W
      ))();
      let mc;
      function Zn(n) {
        const t = mc;
        return (mc = n), t;
      }
      function yp(n, t, e) {
        const i = pc(n);
        return i && 'root' == i.providedIn
          ? void 0 === i.value
            ? (i.value = i.factory())
            : i.value
          : e & W.Optional
          ? null
          : void 0 !== t
          ? t
          : void Vo(fe(n), 'Injector');
      }
      function Xn(n) {
        return {toString: n}.toString();
      }
      var tn = (() => (
          ((tn = tn || {})[(tn.OnPush = 0)] = 'OnPush'),
          (tn[(tn.Default = 1)] = 'Default'),
          tn
        ))(),
        nn = (() => {
          return (
            ((n = nn || (nn = {}))[(n.Emulated = 0)] = 'Emulated'),
            (n[(n.None = 2)] = 'None'),
            (n[(n.ShadowDom = 3)] = 'ShadowDom'),
            nn
          );
          var n;
        })();
      const _x = 'undefined' != typeof globalThis && globalThis,
        yx = 'undefined' != typeof window && window,
        vx =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        pe = _x || ('undefined' != typeof global && global) || yx || vx,
        ir = {},
        me = [],
        Ho = ge({ɵcmp: ge}),
        _c = ge({ɵdir: ge}),
        yc = ge({ɵpipe: ge}),
        vp = ge({ɵmod: ge}),
        Nn = ge({ɵfac: ge}),
        ds = ge({__NG_ELEMENT_ID__: ge});
      let bx = 0;
      function Jn(n) {
        return Xn(() => {
          const e = {},
            i = {
              type: n.type,
              providersResolver: null,
              decls: n.decls,
              vars: n.vars,
              factory: null,
              template: n.template || null,
              consts: n.consts || null,
              ngContentSelectors: n.ngContentSelectors,
              hostBindings: n.hostBindings || null,
              hostVars: n.hostVars || 0,
              hostAttrs: n.hostAttrs || null,
              contentQueries: n.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: n.exportAs || null,
              onPush: n.changeDetection === tn.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: n.selectors || me,
              viewQuery: n.viewQuery || null,
              features: n.features || null,
              data: n.data || {},
              encapsulation: n.encapsulation || nn.Emulated,
              id: 'c',
              styles: n.styles || me,
              _: null,
              setInput: null,
              schemas: n.schemas || null,
              tView: null,
            },
            r = n.directives,
            s = n.features,
            o = n.pipes;
          return (
            (i.id += bx++),
            (i.inputs = Dp(n.inputs, e)),
            (i.outputs = Dp(n.outputs)),
            s && s.forEach(a => a(i)),
            (i.directiveDefs = r
              ? () => ('function' == typeof r ? r() : r).map(bp)
              : null),
            (i.pipeDefs = o
              ? () => ('function' == typeof o ? o() : o).map(Cp)
              : null),
            i
          );
        });
      }
      function bp(n) {
        return (
          tt(n) ||
          (function ei(n) {
            return n[_c] || null;
          })(n)
        );
      }
      function Cp(n) {
        return (function Di(n) {
          return n[yc] || null;
        })(n);
      }
      const wp = {};
      function ae(n) {
        return Xn(() => {
          const t = {
            type: n.type,
            bootstrap: n.bootstrap || me,
            declarations: n.declarations || me,
            imports: n.imports || me,
            exports: n.exports || me,
            transitiveCompileScopes: null,
            schemas: n.schemas || null,
            id: n.id || null,
          };
          return null != n.id && (wp[n.id] = n.type), t;
        });
      }
      function Dp(n, t) {
        if (null == n) return ir;
        const e = {};
        for (const i in n)
          if (n.hasOwnProperty(i)) {
            let r = n[i],
              s = r;
            Array.isArray(r) && ((s = r[1]), (r = r[0])),
              (e[r] = i),
              t && (t[r] = s);
          }
        return e;
      }
      const w = Jn;
      function tt(n) {
        return n[Ho] || null;
      }
      function Wt(n, t) {
        const e = n[vp] || null;
        if (!e && !0 === t)
          throw new Error(`Type ${fe(n)} does not have '\u0275mod' property.`);
        return e;
      }
      const q = 11;
      function yn(n) {
        return Array.isArray(n) && 'object' == typeof n[1];
      }
      function sn(n) {
        return Array.isArray(n) && !0 === n[1];
      }
      function Cc(n) {
        return 0 != (8 & n.flags);
      }
      function Uo(n) {
        return 2 == (2 & n.flags);
      }
      function zo(n) {
        return 1 == (1 & n.flags);
      }
      function on(n) {
        return null !== n.template;
      }
      function Mx(n) {
        return 0 != (512 & n[2]);
      }
      function Ai(n, t) {
        return n.hasOwnProperty(Nn) ? n[Nn] : null;
      }
      class xp {
        constructor(t, e, i) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = i);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function ht() {
        return Mp;
      }
      function Mp(n) {
        return n.type.prototype.ngOnChanges && (n.setInput = Tx), Ix;
      }
      function Ix() {
        const n = Sp(this),
          t = null == n ? void 0 : n.current;
        if (t) {
          const e = n.previous;
          if (e === ir) n.previous = t;
          else for (let i in t) e[i] = t[i];
          (n.current = null), this.ngOnChanges(t);
        }
      }
      function Tx(n, t, e, i) {
        const r =
            Sp(n) ||
            (function Fx(n, t) {
              return (n[Ap] = t);
            })(n, {previous: ir, current: null}),
          s = r.current || (r.current = {}),
          o = r.previous,
          a = this.declaredInputs[e],
          l = o[a];
        (s[a] = new xp(l && l.currentValue, t, o === ir)), (n[i] = t);
      }
      ht.ngInherit = !0;
      const Ap = '__ngSimpleChanges__';
      function Sp(n) {
        return n[Ap] || null;
      }
      let Mc;
      function Ac() {
        return void 0 !== Mc
          ? Mc
          : 'undefined' != typeof document
          ? document
          : void 0;
      }
      function Re(n) {
        return !!n.listen;
      }
      const Ip = {createRenderer: (n, t) => Ac()};
      function Ve(n) {
        for (; Array.isArray(n); ) n = n[0];
        return n;
      }
      function Wo(n, t) {
        return Ve(t[n]);
      }
      function St(n, t) {
        return Ve(t[n.index]);
      }
      function Sc(n, t) {
        return n.data[t];
      }
      function It(n, t) {
        const e = t[n];
        return yn(e) ? e : e[0];
      }
      function Tp(n) {
        return 4 == (4 & n[2]);
      }
      function Ic(n) {
        return 128 == (128 & n[2]);
      }
      function ti(n, t) {
        return null == t ? null : n[t];
      }
      function Fp(n) {
        n[18] = 0;
      }
      function Tc(n, t) {
        n[5] += t;
        let e = n,
          i = n[3];
        for (
          ;
          null !== i && ((1 === t && 1 === e[5]) || (-1 === t && 0 === e[5]));

        )
          (i[5] += t), (e = i), (i = i[3]);
      }
      const $ = {lFrame: Hp(null), bindingsEnabled: !0};
      function Rp() {
        return $.bindingsEnabled;
      }
      function C() {
        return $.lFrame.lView;
      }
      function ne() {
        return $.lFrame.tView;
      }
      function pt(n) {
        return ($.lFrame.contextLView = n), n[8];
      }
      function ze() {
        let n = kp();
        for (; null !== n && 64 === n.type; ) n = n.parent;
        return n;
      }
      function kp() {
        return $.lFrame.currentTNode;
      }
      function vn(n, t) {
        const e = $.lFrame;
        (e.currentTNode = n), (e.isParent = t);
      }
      function Fc() {
        return $.lFrame.isParent;
      }
      function Oc() {
        $.lFrame.isParent = !1;
      }
      function cr() {
        return $.lFrame.bindingIndex++;
      }
      function Vn(n) {
        const t = $.lFrame,
          e = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + n), e;
      }
      function Kx(n, t) {
        const e = $.lFrame;
        (e.bindingIndex = e.bindingRootIndex = n), Rc(t);
      }
      function Rc(n) {
        $.lFrame.currentDirectiveIndex = n;
      }
      function Lp() {
        return $.lFrame.currentQueryIndex;
      }
      function Pc(n) {
        $.lFrame.currentQueryIndex = n;
      }
      function Qx(n) {
        const t = n[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? n[6] : null;
      }
      function Vp(n, t, e) {
        if (e & W.SkipSelf) {
          let r = t,
            s = n;
          for (
            ;
            !((r = r.parent),
            null !== r ||
              e & W.Host ||
              ((r = Qx(s)), null === r || ((s = s[15]), 10 & r.type)));

          );
          if (null === r) return !1;
          (t = r), (n = s);
        }
        const i = ($.lFrame = Bp());
        return (i.currentTNode = t), (i.lView = n), !0;
      }
      function Ko(n) {
        const t = Bp(),
          e = n[1];
        ($.lFrame = t),
          (t.currentTNode = e.firstChild),
          (t.lView = n),
          (t.tView = e),
          (t.contextLView = n),
          (t.bindingIndex = e.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Bp() {
        const n = $.lFrame,
          t = null === n ? null : n.child;
        return null === t ? Hp(n) : t;
      }
      function Hp(n) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: n,
          child: null,
          inI18n: !1,
        };
        return null !== n && (n.child = t), t;
      }
      function jp() {
        const n = $.lFrame;
        return (
          ($.lFrame = n.parent), (n.currentTNode = null), (n.lView = null), n
        );
      }
      const Gp = jp;
      function Yo() {
        const n = jp();
        (n.isParent = !0),
          (n.tView = null),
          (n.selectedIndex = -1),
          (n.contextLView = null),
          (n.elementDepthCount = 0),
          (n.currentDirectiveIndex = -1),
          (n.currentNamespace = null),
          (n.bindingRootIndex = -1),
          (n.bindingIndex = -1),
          (n.currentQueryIndex = 0);
      }
      function mt() {
        return $.lFrame.selectedIndex;
      }
      function ni(n) {
        $.lFrame.selectedIndex = n;
      }
      function Ae() {
        const n = $.lFrame;
        return Sc(n.tView, n.selectedIndex);
      }
      function Qo(n, t) {
        for (let e = t.directiveStart, i = t.directiveEnd; e < i; e++) {
          const s = n.data[e].type.prototype,
            {
              ngAfterContentInit: o,
              ngAfterContentChecked: a,
              ngAfterViewInit: l,
              ngAfterViewChecked: c,
              ngOnDestroy: u,
            } = s;
          o && (n.contentHooks || (n.contentHooks = [])).push(-e, o),
            a &&
              ((n.contentHooks || (n.contentHooks = [])).push(e, a),
              (n.contentCheckHooks || (n.contentCheckHooks = [])).push(e, a)),
            l && (n.viewHooks || (n.viewHooks = [])).push(-e, l),
            c &&
              ((n.viewHooks || (n.viewHooks = [])).push(e, c),
              (n.viewCheckHooks || (n.viewCheckHooks = [])).push(e, c)),
            null != u && (n.destroyHooks || (n.destroyHooks = [])).push(e, u);
        }
      }
      function Zo(n, t, e) {
        $p(n, t, 3, e);
      }
      function Xo(n, t, e, i) {
        (3 & n[2]) === e && $p(n, t, e, i);
      }
      function Nc(n, t) {
        let e = n[2];
        (3 & e) === t && ((e &= 2047), (e += 1), (n[2] = e));
      }
      function $p(n, t, e, i) {
        const s = null != i ? i : -1,
          o = t.length - 1;
        let a = 0;
        for (let l = void 0 !== i ? 65535 & n[18] : 0; l < o; l++)
          if ('number' == typeof t[l + 1]) {
            if (((a = t[l]), null != i && a >= i)) break;
          } else
            t[l] < 0 && (n[18] += 65536),
              (a < s || -1 == s) &&
                (o0(n, e, t, l), (n[18] = (4294901760 & n[18]) + l + 2)),
              l++;
      }
      function o0(n, t, e, i) {
        const r = e[i] < 0,
          s = e[i + 1],
          a = n[r ? -e[i] : e[i]];
        if (r) {
          if (n[2] >> 11 < n[18] >> 16 && (3 & n[2]) === t) {
            n[2] += 2048;
            try {
              s.call(a);
            } finally {
            }
          }
        } else
          try {
            s.call(a);
          } finally {
          }
      }
      class ms {
        constructor(t, e, i) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = i);
        }
      }
      function Jo(n, t, e) {
        const i = Re(n);
        let r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if ('number' == typeof s) {
            if (0 !== s) break;
            r++;
            const o = e[r++],
              a = e[r++],
              l = e[r++];
            i ? n.setAttribute(t, a, l, o) : t.setAttributeNS(o, a, l);
          } else {
            const o = s,
              a = e[++r];
            Vc(o)
              ? i && n.setProperty(t, o, a)
              : i
              ? n.setAttribute(t, o, a)
              : t.setAttribute(o, a),
              r++;
          }
        }
        return r;
      }
      function Up(n) {
        return 3 === n || 4 === n || 6 === n;
      }
      function Vc(n) {
        return 64 === n.charCodeAt(0);
      }
      function ea(n, t) {
        if (null !== t && 0 !== t.length)
          if (null === n || 0 === n.length) n = t.slice();
          else {
            let e = -1;
            for (let i = 0; i < t.length; i++) {
              const r = t[i];
              'number' == typeof r
                ? (e = r)
                : 0 === e ||
                  zp(n, e, r, null, -1 === e || 2 === e ? t[++i] : null);
            }
          }
        return n;
      }
      function zp(n, t, e, i, r) {
        let s = 0,
          o = n.length;
        if (-1 === t) o = -1;
        else
          for (; s < n.length; ) {
            const a = n[s++];
            if ('number' == typeof a) {
              if (a === t) {
                o = -1;
                break;
              }
              if (a > t) {
                o = s - 1;
                break;
              }
            }
          }
        for (; s < n.length; ) {
          const a = n[s];
          if ('number' == typeof a) break;
          if (a === e) {
            if (null === i) return void (null !== r && (n[s + 1] = r));
            if (i === n[s + 1]) return void (n[s + 2] = r);
          }
          s++, null !== i && s++, null !== r && s++;
        }
        -1 !== o && (n.splice(o, 0, t), (s = o + 1)),
          n.splice(s++, 0, e),
          null !== i && n.splice(s++, 0, i),
          null !== r && n.splice(s++, 0, r);
      }
      function Wp(n) {
        return -1 !== n;
      }
      function ur(n) {
        return 32767 & n;
      }
      function dr(n, t) {
        let e = (function d0(n) {
            return n >> 16;
          })(n),
          i = t;
        for (; e > 0; ) (i = i[15]), e--;
        return i;
      }
      let Bc = !0;
      function ta(n) {
        const t = Bc;
        return (Bc = n), t;
      }
      let f0 = 0;
      function ys(n, t) {
        const e = jc(n, t);
        if (-1 !== e) return e;
        const i = t[1];
        i.firstCreatePass &&
          ((n.injectorIndex = t.length),
          Hc(i.data, n),
          Hc(t, null),
          Hc(i.blueprint, null));
        const r = na(n, t),
          s = n.injectorIndex;
        if (Wp(r)) {
          const o = ur(r),
            a = dr(r, t),
            l = a[1].data;
          for (let c = 0; c < 8; c++) t[s + c] = a[o + c] | l[o + c];
        }
        return (t[s + 8] = r), s;
      }
      function Hc(n, t) {
        n.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function jc(n, t) {
        return -1 === n.injectorIndex ||
          (n.parent && n.parent.injectorIndex === n.injectorIndex) ||
          null === t[n.injectorIndex + 8]
          ? -1
          : n.injectorIndex;
      }
      function na(n, t) {
        if (n.parent && -1 !== n.parent.injectorIndex)
          return n.parent.injectorIndex;
        let e = 0,
          i = null,
          r = t;
        for (; null !== r; ) {
          const s = r[1],
            o = s.type;
          if (((i = 2 === o ? s.declTNode : 1 === o ? r[6] : null), null === i))
            return -1;
          if ((e++, (r = r[15]), -1 !== i.injectorIndex))
            return i.injectorIndex | (e << 16);
        }
        return -1;
      }
      function ia(n, t, e) {
        !(function h0(n, t, e) {
          let i;
          'string' == typeof e
            ? (i = e.charCodeAt(0) || 0)
            : e.hasOwnProperty(ds) && (i = e[ds]),
            null == i && (i = e[ds] = f0++);
          const r = 255 & i;
          t.data[n + (r >> 5)] |= 1 << r;
        })(n, t, e);
      }
      function Yp(n, t, e) {
        if (e & W.Optional) return n;
        Vo(t, 'NodeInjector');
      }
      function Qp(n, t, e, i) {
        if (
          (e & W.Optional && void 0 === i && (i = null),
          0 == (e & (W.Self | W.Host)))
        ) {
          const r = n[9],
            s = Zn(void 0);
          try {
            return r ? r.get(t, i, e & W.Optional) : yp(t, i, e & W.Optional);
          } finally {
            Zn(s);
          }
        }
        return Yp(i, t, e);
      }
      function Zp(n, t, e, i = W.Default, r) {
        if (null !== n) {
          const s = (function _0(n) {
            if ('string' == typeof n) return n.charCodeAt(0) || 0;
            const t = n.hasOwnProperty(ds) ? n[ds] : void 0;
            return 'number' == typeof t ? (t >= 0 ? 255 & t : g0) : t;
          })(e);
          if ('function' == typeof s) {
            if (!Vp(t, n, i)) return i & W.Host ? Yp(r, e, i) : Qp(t, e, i, r);
            try {
              const o = s(i);
              if (null != o || i & W.Optional) return o;
              Vo(e);
            } finally {
              Gp();
            }
          } else if ('number' == typeof s) {
            let o = null,
              a = jc(n, t),
              l = -1,
              c = i & W.Host ? t[16][6] : null;
            for (
              (-1 === a || i & W.SkipSelf) &&
              ((l = -1 === a ? na(n, t) : t[a + 8]),
              -1 !== l && eg(i, !1)
                ? ((o = t[1]), (a = ur(l)), (t = dr(l, t)))
                : (a = -1));
              -1 !== a;

            ) {
              const u = t[1];
              if (Jp(s, a, u.data)) {
                const d = m0(a, t, e, o, i, c);
                if (d !== Xp) return d;
              }
              (l = t[a + 8]),
                -1 !== l && eg(i, t[1].data[a + 8] === c) && Jp(s, a, t)
                  ? ((o = u), (a = ur(l)), (t = dr(l, t)))
                  : (a = -1);
            }
          }
        }
        return Qp(t, e, i, r);
      }
      const Xp = {};
      function g0() {
        return new fr(ze(), C());
      }
      function m0(n, t, e, i, r, s) {
        const o = t[1],
          a = o.data[n + 8],
          u = ra(
            a,
            o,
            e,
            null == i ? Uo(a) && Bc : i != o && 0 != (3 & a.type),
            r & W.Host && s === a,
          );
        return null !== u ? vs(t, o, u, a) : Xp;
      }
      function ra(n, t, e, i, r) {
        const s = n.providerIndexes,
          o = t.data,
          a = 1048575 & s,
          l = n.directiveStart,
          u = s >> 20,
          f = r ? a + u : n.directiveEnd;
        for (let h = i ? a : a + u; h < f; h++) {
          const g = o[h];
          if ((h < l && e === g) || (h >= l && g.type === e)) return h;
        }
        if (r) {
          const h = o[l];
          if (h && on(h) && h.type === e) return l;
        }
        return null;
      }
      function vs(n, t, e, i) {
        let r = n[e];
        const s = t.data;
        if (
          (function a0(n) {
            return n instanceof ms;
          })(r)
        ) {
          const o = r;
          o.resolving &&
            (function cx(n, t) {
              const e = t ? `. Dependency path: ${t.join(' > ')} > ${n}` : '';
              throw new T(
                -200,
                `Circular dependency in DI detected for ${n}${e}`,
              );
            })(et(s[e]));
          const a = ta(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? Zn(o.injectImpl) : null;
          Vp(n, i, W.Default);
          try {
            (r = n[e] = o.factory(void 0, s, n, i)),
              t.firstCreatePass &&
                e >= i.directiveStart &&
                (function s0(n, t, e) {
                  const {
                    ngOnChanges: i,
                    ngOnInit: r,
                    ngDoCheck: s,
                  } = t.type.prototype;
                  if (i) {
                    const o = Mp(t);
                    (e.preOrderHooks || (e.preOrderHooks = [])).push(n, o),
                      (
                        e.preOrderCheckHooks || (e.preOrderCheckHooks = [])
                      ).push(n, o);
                  }
                  r &&
                    (e.preOrderHooks || (e.preOrderHooks = [])).push(0 - n, r),
                    s &&
                      ((e.preOrderHooks || (e.preOrderHooks = [])).push(n, s),
                      (
                        e.preOrderCheckHooks || (e.preOrderCheckHooks = [])
                      ).push(n, s));
                })(e, s[e], t);
          } finally {
            null !== l && Zn(l), ta(a), (o.resolving = !1), Gp();
          }
        }
        return r;
      }
      function Jp(n, t, e) {
        return !!(e[t + (n >> 5)] & (1 << n));
      }
      function eg(n, t) {
        return !(n & W.Self || (n & W.Host && t));
      }
      class fr {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e, i) {
          return Zp(this._tNode, this._lView, t, i, e);
        }
      }
      function k(n) {
        return Xn(() => {
          const t = n.prototype.constructor,
            e = t[Nn] || Gc(t),
            i = Object.prototype;
          let r = Object.getPrototypeOf(n.prototype).constructor;
          for (; r && r !== i; ) {
            const s = r[Nn] || Gc(r);
            if (s && s !== e) return s;
            r = Object.getPrototypeOf(r);
          }
          return s => new s();
        });
      }
      function Gc(n) {
        return pp(n)
          ? () => {
              const t = Gc(K(n));
              return t && t();
            }
          : Ai(n);
      }
      function bs(n) {
        return (function p0(n, t) {
          if ('class' === t) return n.classes;
          if ('style' === t) return n.styles;
          const e = n.attrs;
          if (e) {
            const i = e.length;
            let r = 0;
            for (; r < i; ) {
              const s = e[r];
              if (Up(s)) break;
              if (0 === s) r += 2;
              else if ('number' == typeof s)
                for (r++; r < i && 'string' == typeof e[r]; ) r++;
              else {
                if (s === t) return e[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(ze(), n);
      }
      const pr = '__parameters__';
      function mr(n, t, e) {
        return Xn(() => {
          const i = (function $c(n) {
            return function (...e) {
              if (n) {
                const i = n(...e);
                for (const r in i) this[r] = i[r];
              }
            };
          })(t);
          function r(...s) {
            if (this instanceof r) return i.apply(this, s), this;
            const o = new r(...s);
            return (a.annotation = o), a;
            function a(l, c, u) {
              const d = l.hasOwnProperty(pr)
                ? l[pr]
                : Object.defineProperty(l, pr, {value: []})[pr];
              for (; d.length <= u; ) d.push(null);
              return (d[u] = d[u] || []).push(o), l;
            }
          }
          return (
            e && (r.prototype = Object.create(e.prototype)),
            (r.prototype.ngMetadataName = n),
            (r.annotationCls = r),
            r
          );
        });
      }
      class I {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = E({
                  token: this,
                  providedIn: e.providedIn || 'root',
                  factory: e.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Yt(n, t) {
        void 0 === t && (t = n);
        for (let e = 0; e < n.length; e++) {
          let i = n[e];
          Array.isArray(i)
            ? (t === n && (t = n.slice(0, e)), Yt(i, t))
            : t !== n && t.push(i);
        }
        return t;
      }
      function bn(n, t) {
        n.forEach(e => (Array.isArray(e) ? bn(e, t) : t(e)));
      }
      function ng(n, t, e) {
        t >= n.length ? n.push(e) : n.splice(t, 0, e);
      }
      function sa(n, t) {
        return t >= n.length - 1 ? n.pop() : n.splice(t, 1)[0];
      }
      function Ds(n, t) {
        const e = [];
        for (let i = 0; i < n; i++) e.push(t);
        return e;
      }
      function Tt(n, t, e) {
        let i = _r(n, t);
        return (
          i >= 0
            ? (n[1 | i] = e)
            : ((i = ~i),
              (function C0(n, t, e, i) {
                let r = n.length;
                if (r == t) n.push(e, i);
                else if (1 === r) n.push(i, n[0]), (n[0] = e);
                else {
                  for (r--, n.push(n[r - 1], n[r]); r > t; )
                    (n[r] = n[r - 2]), r--;
                  (n[t] = e), (n[t + 1] = i);
                }
              })(n, i, t, e)),
          i
        );
      }
      function zc(n, t) {
        const e = _r(n, t);
        if (e >= 0) return n[1 | e];
      }
      function _r(n, t) {
        return (function sg(n, t, e) {
          let i = 0,
            r = n.length >> e;
          for (; r !== i; ) {
            const s = i + ((r - i) >> 1),
              o = n[s << e];
            if (t === o) return s << e;
            o > t ? (r = s) : (i = s + 1);
          }
          return ~(r << e);
        })(n, t, 1);
      }
      const Es = {},
        qc = '__NG_DI_FLAG__',
        aa = 'ngTempTokenPath',
        S0 = /\n/gm,
        ag = '__source',
        T0 = ge({provide: String, useValue: ge});
      let xs;
      function lg(n) {
        const t = xs;
        return (xs = n), t;
      }
      function F0(n, t = W.Default) {
        if (void 0 === xs) throw new T(203, '');
        return null === xs
          ? yp(n, void 0, t)
          : xs.get(n, t & W.Optional ? null : void 0, t);
      }
      function b(n, t = W.Default) {
        return (
          (function mx() {
            return mc;
          })() || F0
        )(K(n), t);
      }
      const yr = b;
      function Kc(n) {
        const t = [];
        for (let e = 0; e < n.length; e++) {
          const i = K(n[e]);
          if (Array.isArray(i)) {
            if (0 === i.length) throw new T(900, '');
            let r,
              s = W.Default;
            for (let o = 0; o < i.length; o++) {
              const a = i[o],
                l = O0(a);
              'number' == typeof l
                ? -1 === l
                  ? (r = a.token)
                  : (s |= l)
                : (r = a);
            }
            t.push(b(r, s));
          } else t.push(b(i));
        }
        return t;
      }
      function Ms(n, t) {
        return (n[qc] = t), (n.prototype[qc] = t), n;
      }
      function O0(n) {
        return n[qc];
      }
      const Si = Ms(mr('Optional'), 8),
        As = Ms(mr('SkipSelf'), 4);
      var Ft = (() => (
        ((Ft = Ft || {})[(Ft.Important = 1)] = 'Important'),
        (Ft[(Ft.DashCase = 2)] = 'DashCase'),
        Ft
      ))();
      const mg = '__ngContext__';
      function ot(n, t) {
        n[mg] = t;
      }
      function Xc(n) {
        const t = (function Is(n) {
          return n[mg] || null;
        })(n);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function eu(n, t) {
        return undefined(n, t);
      }
      function Ts(n) {
        const t = n[3];
        return sn(t) ? t[3] : t;
      }
      function tu(n) {
        return Dg(n[13]);
      }
      function nu(n) {
        return Dg(n[4]);
      }
      function Dg(n) {
        for (; null !== n && !sn(n); ) n = n[4];
        return n;
      }
      function br(n, t, e, i, r) {
        if (null != i) {
          let s,
            o = !1;
          sn(i) ? (s = i) : yn(i) && ((o = !0), (i = i[0]));
          const a = Ve(i);
          0 === n && null !== e
            ? null == r
              ? Ig(t, e, a)
              : Ii(t, e, a, r || null, !0)
            : 1 === n && null !== e
            ? Ii(t, e, a, r || null, !0)
            : 2 === n
            ? (function cu(n, t, e) {
                const i = ca(n, t);
                i &&
                  (function cM(n, t, e, i) {
                    Re(n) ? n.removeChild(t, e, i) : t.removeChild(e);
                  })(n, i, t, e);
              })(t, a, o)
            : 3 === n && t.destroyNode(a),
            null != s &&
              (function fM(n, t, e, i, r) {
                const s = e[7];
                s !== Ve(e) && br(t, n, i, s, r);
                for (let a = 10; a < e.length; a++) {
                  const l = e[a];
                  Fs(l[1], l, n, t, i, s);
                }
              })(t, n, s, e, r);
        }
      }
      function ru(n, t, e) {
        if (Re(n)) return n.createElement(t, e);
        {
          const i =
            null !== e
              ? (function Px(n) {
                  const t = n.toLowerCase();
                  return 'svg' === t
                    ? 'http://www.w3.org/2000/svg'
                    : 'math' === t
                    ? 'http://www.w3.org/1998/MathML/'
                    : null;
                })(e)
              : null;
          return null === i ? n.createElement(t) : n.createElementNS(i, t);
        }
      }
      function xg(n, t) {
        const e = n[9],
          i = e.indexOf(t),
          r = t[3];
        1024 & t[2] && ((t[2] &= -1025), Tc(r, -1)), e.splice(i, 1);
      }
      function su(n, t) {
        if (n.length <= 10) return;
        const e = 10 + t,
          i = n[e];
        if (i) {
          const r = i[17];
          null !== r && r !== n && xg(r, i), t > 0 && (n[e - 1][4] = i[4]);
          const s = sa(n, 10 + t);
          !(function tM(n, t) {
            Fs(n, t, t[q], 2, null, null), (t[0] = null), (t[6] = null);
          })(i[1], i);
          const o = s[19];
          null !== o && o.detachView(s[1]),
            (i[3] = null),
            (i[4] = null),
            (i[2] &= -129);
        }
        return i;
      }
      function Mg(n, t) {
        if (!(256 & t[2])) {
          const e = t[q];
          Re(e) && e.destroyNode && Fs(n, t, e, 3, null, null),
            (function rM(n) {
              let t = n[13];
              if (!t) return ou(n[1], n);
              for (; t; ) {
                let e = null;
                if (yn(t)) e = t[13];
                else {
                  const i = t[10];
                  i && (e = i);
                }
                if (!e) {
                  for (; t && !t[4] && t !== n; )
                    yn(t) && ou(t[1], t), (t = t[3]);
                  null === t && (t = n), yn(t) && ou(t[1], t), (e = t && t[4]);
                }
                t = e;
              }
            })(t);
        }
      }
      function ou(n, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function lM(n, t) {
              let e;
              if (null != n && null != (e = n.destroyHooks))
                for (let i = 0; i < e.length; i += 2) {
                  const r = t[e[i]];
                  if (!(r instanceof ms)) {
                    const s = e[i + 1];
                    if (Array.isArray(s))
                      for (let o = 0; o < s.length; o += 2) {
                        const a = r[s[o]],
                          l = s[o + 1];
                        try {
                          l.call(a);
                        } finally {
                        }
                      }
                    else
                      try {
                        s.call(r);
                      } finally {
                      }
                  }
                }
            })(n, t),
            (function aM(n, t) {
              const e = n.cleanup,
                i = t[7];
              let r = -1;
              if (null !== e)
                for (let s = 0; s < e.length - 1; s += 2)
                  if ('string' == typeof e[s]) {
                    const o = e[s + 1],
                      a = 'function' == typeof o ? o(t) : Ve(t[o]),
                      l = i[(r = e[s + 2])],
                      c = e[s + 3];
                    'boolean' == typeof c
                      ? a.removeEventListener(e[s], l, c)
                      : c >= 0
                      ? i[(r = c)]()
                      : i[(r = -c)].unsubscribe(),
                      (s += 2);
                  } else {
                    const o = i[(r = e[s + 1])];
                    e[s].call(o);
                  }
              if (null !== i) {
                for (let s = r + 1; s < i.length; s++) i[s]();
                t[7] = null;
              }
            })(n, t),
            1 === t[1].type && Re(t[q]) && t[q].destroy();
          const e = t[17];
          if (null !== e && sn(t[3])) {
            e !== t[3] && xg(e, t);
            const i = t[19];
            null !== i && i.detachView(n);
          }
        }
      }
      function Ag(n, t, e) {
        return (function Sg(n, t, e) {
          let i = t;
          for (; null !== i && 40 & i.type; ) i = (t = i).parent;
          if (null === i) return e[0];
          if (2 & i.flags) {
            const r = n.data[i.directiveStart].encapsulation;
            if (r === nn.None || r === nn.Emulated) return null;
          }
          return St(i, e);
        })(n, t.parent, e);
      }
      function Ii(n, t, e, i, r) {
        Re(n) ? n.insertBefore(t, e, i, r) : t.insertBefore(e, i, r);
      }
      function Ig(n, t, e) {
        Re(n) ? n.appendChild(t, e) : t.appendChild(e);
      }
      function Tg(n, t, e, i, r) {
        null !== i ? Ii(n, t, e, i, r) : Ig(n, t, e);
      }
      function ca(n, t) {
        return Re(n) ? n.parentNode(t) : t.parentNode;
      }
      function Fg(n, t, e) {
        return Rg(n, t, e);
      }
      let fa,
        ha,
        Rg = function Og(n, t, e) {
          return 40 & n.type ? St(n, e) : null;
        };
      function ua(n, t, e, i) {
        const r = Ag(n, i, t),
          s = t[q],
          a = Fg(i.parent || t[6], i, t);
        if (null != r)
          if (Array.isArray(e))
            for (let l = 0; l < e.length; l++) Tg(s, r, e[l], a, !1);
          else Tg(s, r, e, a, !1);
      }
      function da(n, t) {
        if (null !== t) {
          const e = t.type;
          if (3 & e) return St(t, n);
          if (4 & e) return lu(-1, n[t.index]);
          if (8 & e) {
            const i = t.child;
            if (null !== i) return da(n, i);
            {
              const r = n[t.index];
              return sn(r) ? lu(-1, r) : Ve(r);
            }
          }
          if (32 & e) return eu(t, n)() || Ve(n[t.index]);
          {
            const i = Pg(n, t);
            return null !== i
              ? Array.isArray(i)
                ? i[0]
                : da(Ts(n[16]), i)
              : da(n, t.next);
          }
        }
        return null;
      }
      function Pg(n, t) {
        return null !== t ? n[16][6].projection[t.projection] : null;
      }
      function lu(n, t) {
        const e = 10 + n + 1;
        if (e < t.length) {
          const i = t[e],
            r = i[1].firstChild;
          if (null !== r) return da(i, r);
        }
        return t[7];
      }
      function uu(n, t, e, i, r, s, o) {
        for (; null != e; ) {
          const a = i[e.index],
            l = e.type;
          if (
            (o && 0 === t && (a && ot(Ve(a), i), (e.flags |= 4)),
            64 != (64 & e.flags))
          )
            if (8 & l) uu(n, t, e.child, i, r, s, !1), br(t, n, r, a, s);
            else if (32 & l) {
              const c = eu(e, i);
              let u;
              for (; (u = c()); ) br(t, n, r, u, s);
              br(t, n, r, a, s);
            } else 16 & l ? Ng(n, t, i, e, r, s) : br(t, n, r, a, s);
          e = o ? e.projectionNext : e.next;
        }
      }
      function Fs(n, t, e, i, r, s) {
        uu(e, i, n.firstChild, t, r, s, !1);
      }
      function Ng(n, t, e, i, r, s) {
        const o = e[16],
          l = o[6].projection[i.projection];
        if (Array.isArray(l))
          for (let c = 0; c < l.length; c++) br(t, n, r, l[c], s);
        else uu(n, t, l, o[3], r, s, !0);
      }
      function Lg(n, t, e) {
        Re(n) ? n.setAttribute(t, 'style', e) : (t.style.cssText = e);
      }
      function du(n, t, e) {
        Re(n)
          ? '' === e
            ? n.removeAttribute(t, 'class')
            : n.setAttribute(t, 'class', e)
          : (t.className = e);
      }
      function Ti(n) {
        var t;
        return (
          (null ===
            (t = (function fu() {
              if (void 0 === fa && ((fa = null), pe.trustedTypes))
                try {
                  fa = pe.trustedTypes.createPolicy('angular', {
                    createHTML: n => n,
                    createScript: n => n,
                    createScriptURL: n => n,
                  });
                } catch (n) {}
              return fa;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(n)) || n
        );
      }
      function Vg(n) {
        var t;
        return (
          (null ===
            (t = (function hu() {
              if (void 0 === ha && ((ha = null), pe.trustedTypes))
                try {
                  ha = pe.trustedTypes.createPolicy('angular#unsafe-bypass', {
                    createHTML: n => n,
                    createScript: n => n,
                    createScriptURL: n => n,
                  });
                } catch (n) {}
              return ha;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(n)) || n
        );
      }
      class Fi {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class _M extends Fi {
        getTypeName() {
          return 'HTML';
        }
      }
      class yM extends Fi {
        getTypeName() {
          return 'Style';
        }
      }
      class vM extends Fi {
        getTypeName() {
          return 'Script';
        }
      }
      class bM extends Fi {
        getTypeName() {
          return 'URL';
        }
      }
      class CM extends Fi {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function Ot(n) {
        return n instanceof Fi ? n.changingThisBreaksApplicationSecurity : n;
      }
      function Cn(n, t) {
        const e = jg(n);
        if (null != e && e !== t) {
          if ('ResourceURL' === e && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${e} (see https://g.co/ng/security#xss)`,
          );
        }
        return e === t;
      }
      function jg(n) {
        return (n instanceof Fi && n.getTypeName()) || null;
      }
      class AM {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const e = new window.DOMParser().parseFromString(
              Ti(t),
              'text/html',
            ).body;
            return null === e
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (e.removeChild(e.firstChild), e);
          } catch (e) {
            return null;
          }
        }
      }
      class SM {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert',
              )),
            null == this.inertDocument.body)
          ) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e);
            const i = this.inertDocument.createElement('body');
            e.appendChild(i);
          }
        }
        getInertBodyElement(t) {
          const e = this.inertDocument.createElement('template');
          if ('content' in e) return (e.innerHTML = Ti(t)), e;
          const i = this.inertDocument.createElement('body');
          return (
            (i.innerHTML = Ti(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(i),
            i
          );
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const o = e.item(r).name;
            ('xmlns:ns1' === o || 0 === o.indexOf('ns1:')) &&
              t.removeAttribute(o);
          }
          let i = t.firstChild;
          for (; i; )
            i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i),
              (i = i.nextSibling);
        }
      }
      const TM =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        FM =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Os(n) {
        return (n = String(n)).match(TM) || n.match(FM) ? n : 'unsafe:' + n;
      }
      function wn(n) {
        const t = {};
        for (const e of n.split(',')) t[e] = !0;
        return t;
      }
      function Rs(...n) {
        const t = {};
        for (const e of n)
          for (const i in e) e.hasOwnProperty(i) && (t[i] = !0);
        return t;
      }
      const Ug = wn('area,br,col,hr,img,wbr'),
        zg = wn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Wg = wn('rp,rt'),
        pu = Rs(
          Ug,
          Rs(
            zg,
            wn(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
            ),
          ),
          Rs(
            Wg,
            wn(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
            ),
          ),
          Rs(Wg, zg),
        ),
        gu = wn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        mu = wn('srcset'),
        qg = Rs(
          gu,
          mu,
          wn(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
          ),
          wn(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
          ),
        ),
        OM = wn('script,style,template');
      class RM {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            i = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (i = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              i && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let r = this.checkClobberedElement(e, e.nextSibling);
                if (r) {
                  e = r;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!pu.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !OM.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const i = t.attributes;
          for (let r = 0; r < i.length; r++) {
            const s = i.item(r),
              o = s.name,
              a = o.toLowerCase();
            if (!qg.hasOwnProperty(a)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let l = s.value;
            gu[a] && (l = Os(l)),
              mu[a] &&
                ((n = l),
                (l = (n = String(n))
                  .split(',')
                  .map(t => Os(t.trim()))
                  .join(', '))),
              this.buf.push(' ', o, '="', Kg(l), '"');
          }
          var n;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          pu.hasOwnProperty(e) &&
            !Ug.hasOwnProperty(e) &&
            (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(Kg(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`,
            );
          return e;
        }
      }
      const kM = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        PM = /([^\#-~ |!])/g;
      function Kg(n) {
        return n
          .replace(/&/g, '&amp;')
          .replace(kM, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(PM, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let pa;
      function Yg(n, t) {
        let e = null;
        try {
          pa =
            pa ||
            (function Gg(n) {
              const t = new SM(n);
              return (function IM() {
                try {
                  return !!new window.DOMParser().parseFromString(
                    Ti(''),
                    'text/html',
                  );
                } catch (n) {
                  return !1;
                }
              })()
                ? new AM(t)
                : t;
            })(n);
          let i = t ? String(t) : '';
          e = pa.getInertBodyElement(i);
          let r = 5,
            s = i;
          do {
            if (0 === r)
              throw new Error(
                'Failed to sanitize html because the input is unstable',
              );
            r--, (i = s), (s = e.innerHTML), (e = pa.getInertBodyElement(i));
          } while (i !== s);
          return Ti(new RM().sanitizeChildren(_u(e) || e));
        } finally {
          if (e) {
            const i = _u(e) || e;
            for (; i.firstChild; ) i.removeChild(i.firstChild);
          }
        }
      }
      function _u(n) {
        return 'content' in n &&
          (function NM(n) {
            return (
              n.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === n.nodeName
            );
          })(n)
          ? n.content
          : null;
      }
      var le = (() => (
        ((le = le || {})[(le.NONE = 0)] = 'NONE'),
        (le[(le.HTML = 1)] = 'HTML'),
        (le[(le.STYLE = 2)] = 'STYLE'),
        (le[(le.SCRIPT = 3)] = 'SCRIPT'),
        (le[(le.URL = 4)] = 'URL'),
        (le[(le.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        le
      ))();
      function yu(n) {
        const t = ks();
        return t
          ? Vg(t.sanitize(le.HTML, n) || '')
          : Cn(n, 'HTML')
          ? Vg(Ot(n))
          : Yg(Ac(), G(n));
      }
      function ga(n) {
        const t = ks();
        return t
          ? t.sanitize(le.URL, n) || ''
          : Cn(n, 'URL')
          ? Ot(n)
          : Os(G(n));
      }
      function ks() {
        const n = C();
        return n && n[12];
      }
      function bu(n) {
        return n.ngOriginalError;
      }
      function WM(n, ...t) {
        n.error(...t);
      }
      class ri {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            i = (function zM(n) {
              return (n && n.ngErrorLogger) || WM;
            })(t);
          i(this._console, 'ERROR', t),
            e && i(this._console, 'ORIGINAL ERROR', e);
        }
        _findOriginalError(t) {
          let e = t && bu(t);
          for (; e && bu(e); ) e = bu(e);
          return e || null;
        }
      }
      const JM = (() =>
        (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(pe))();
      function Dn(n) {
        return n instanceof Function ? n() : n;
      }
      function Xg(n, t, e) {
        let i = n.length;
        for (;;) {
          const r = n.indexOf(t, e);
          if (-1 === r) return r;
          if (0 === r || n.charCodeAt(r - 1) <= 32) {
            const s = t.length;
            if (r + s === i || n.charCodeAt(r + s) <= 32) return r;
          }
          e = r + 1;
        }
      }
      const Jg = 'ng-template';
      function iA(n, t, e) {
        let i = 0;
        for (; i < n.length; ) {
          let r = n[i++];
          if (e && 'class' === r) {
            if (((r = n[i]), -1 !== Xg(r.toLowerCase(), t, 0))) return !0;
          } else if (1 === r) {
            for (; i < n.length && 'string' == typeof (r = n[i++]); )
              if (r.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function em(n) {
        return 4 === n.type && n.value !== Jg;
      }
      function rA(n, t, e) {
        return t === (4 !== n.type || e ? n.value : Jg);
      }
      function sA(n, t, e) {
        let i = 4;
        const r = n.attrs || [],
          s = (function lA(n) {
            for (let t = 0; t < n.length; t++) if (Up(n[t])) return t;
            return n.length;
          })(r);
        let o = !1;
        for (let a = 0; a < t.length; a++) {
          const l = t[a];
          if ('number' != typeof l) {
            if (!o)
              if (4 & i) {
                if (
                  ((i = 2 | (1 & i)),
                  ('' !== l && !rA(n, l, e)) || ('' === l && 1 === t.length))
                ) {
                  if (an(i)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & i ? l : t[++a];
                if (8 & i && null !== n.attrs) {
                  if (!iA(n.attrs, c, e)) {
                    if (an(i)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const d = oA(8 & i ? 'class' : l, r, em(n), e);
                if (-1 === d) {
                  if (an(i)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== c) {
                  let f;
                  f = d > s ? '' : r[d + 1].toLowerCase();
                  const h = 8 & i ? f : null;
                  if ((h && -1 !== Xg(h, c, 0)) || (2 & i && c !== f)) {
                    if (an(i)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !an(i) && !an(l)) return !1;
            if (o && an(l)) continue;
            (o = !1), (i = l | (1 & i));
          }
        }
        return an(i) || o;
      }
      function an(n) {
        return 0 == (1 & n);
      }
      function oA(n, t, e, i) {
        if (null === t) return -1;
        let r = 0;
        if (i || !e) {
          let s = !1;
          for (; r < t.length; ) {
            const o = t[r];
            if (o === n) return r;
            if (3 === o || 6 === o) s = !0;
            else {
              if (1 === o || 2 === o) {
                let a = t[++r];
                for (; 'string' == typeof a; ) a = t[++r];
                continue;
              }
              if (4 === o) break;
              if (0 === o) {
                r += 4;
                continue;
              }
            }
            r += s ? 1 : 2;
          }
          return -1;
        }
        return (function cA(n, t) {
          let e = n.indexOf(4);
          if (e > -1)
            for (e++; e < n.length; ) {
              const i = n[e];
              if ('number' == typeof i) return -1;
              if (i === t) return e;
              e++;
            }
          return -1;
        })(t, n);
      }
      function tm(n, t, e = !1) {
        for (let i = 0; i < t.length; i++) if (sA(n, t[i], e)) return !0;
        return !1;
      }
      function uA(n, t) {
        e: for (let e = 0; e < t.length; e++) {
          const i = t[e];
          if (n.length === i.length) {
            for (let r = 0; r < n.length; r++) if (n[r] !== i[r]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function nm(n, t) {
        return n ? ':not(' + t.trim() + ')' : t;
      }
      function dA(n) {
        let t = n[0],
          e = 1,
          i = 2,
          r = '',
          s = !1;
        for (; e < n.length; ) {
          let o = n[e];
          if ('string' == typeof o)
            if (2 & i) {
              const a = n[++e];
              r += '[' + o + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & i ? (r += '.' + o) : 4 & i && (r += ' ' + o);
          else
            '' !== r && !an(o) && ((t += nm(s, r)), (r = '')),
              (i = o),
              (s = s || !an(i));
          e++;
        }
        return '' !== r && (t += nm(s, r)), t;
      }
      const U = {};
      function R(n) {
        im(ne(), C(), mt() + n, !1);
      }
      function im(n, t, e, i) {
        if (!i)
          if (3 == (3 & t[2])) {
            const s = n.preOrderCheckHooks;
            null !== s && Zo(t, s, e);
          } else {
            const s = n.preOrderHooks;
            null !== s && Xo(t, s, 0, e);
          }
        ni(e);
      }
      function ma(n, t) {
        return (n << 17) | (t << 2);
      }
      function ln(n) {
        return (n >> 17) & 32767;
      }
      function Cu(n) {
        return 2 | n;
      }
      function Bn(n) {
        return (131068 & n) >> 2;
      }
      function wu(n, t) {
        return (-131069 & n) | (t << 2);
      }
      function Du(n) {
        return 1 | n;
      }
      function pm(n, t) {
        const e = n.contentQueries;
        if (null !== e)
          for (let i = 0; i < e.length; i += 2) {
            const r = e[i],
              s = e[i + 1];
            if (-1 !== s) {
              const o = n.data[s];
              Pc(r), o.contentQueries(2, t[s], s);
            }
          }
      }
      function Ps(n, t, e, i, r, s, o, a, l, c) {
        const u = t.blueprint.slice();
        return (
          (u[0] = r),
          (u[2] = 140 | i),
          Fp(u),
          (u[3] = u[15] = n),
          (u[8] = e),
          (u[10] = o || (n && n[10])),
          (u[q] = a || (n && n[q])),
          (u[12] = l || (n && n[12]) || null),
          (u[9] = c || (n && n[9]) || null),
          (u[6] = s),
          (u[16] = 2 == t.type ? n[16] : u),
          u
        );
      }
      function wr(n, t, e, i, r) {
        let s = n.data[t];
        if (null === s)
          (s = (function Ou(n, t, e, i, r) {
            const s = kp(),
              o = Fc(),
              l = (n.data[t] = (function IA(n, t, e, i, r, s) {
                return {
                  type: e,
                  index: i,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: r,
                  attrs: s,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, o ? s : s && s.parent, e, t, i, r));
            return (
              null === n.firstChild && (n.firstChild = l),
              null !== s &&
                (o
                  ? null == s.child && null !== l.parent && (s.child = l)
                  : null === s.next && (s.next = l)),
              l
            );
          })(n, t, e, i, r)),
            (function qx() {
              return $.lFrame.inI18n;
            })() && (s.flags |= 64);
        else if (64 & s.type) {
          (s.type = e), (s.value = i), (s.attrs = r);
          const o = (function gs() {
            const n = $.lFrame,
              t = n.currentTNode;
            return n.isParent ? t : t.parent;
          })();
          s.injectorIndex = null === o ? -1 : o.injectorIndex;
        }
        return vn(s, !0), s;
      }
      function Dr(n, t, e, i) {
        if (0 === e) return -1;
        const r = t.length;
        for (let s = 0; s < e; s++)
          t.push(i), n.blueprint.push(i), n.data.push(null);
        return r;
      }
      function Ns(n, t, e) {
        Ko(t);
        try {
          const i = n.viewQuery;
          null !== i && ju(1, i, e);
          const r = n.template;
          null !== r && gm(n, t, r, 1, e),
            n.firstCreatePass && (n.firstCreatePass = !1),
            n.staticContentQueries && pm(n, t),
            n.staticViewQueries && ju(2, n.viewQuery, e);
          const s = n.components;
          null !== s &&
            (function MA(n, t) {
              for (let e = 0; e < t.length; e++) qA(n, t[e]);
            })(t, s);
        } catch (i) {
          throw (
            (n.firstCreatePass &&
              ((n.incompleteFirstPass = !0), (n.firstCreatePass = !1)),
            i)
          );
        } finally {
          (t[2] &= -5), Yo();
        }
      }
      function Er(n, t, e, i) {
        const r = t[2];
        if (256 != (256 & r)) {
          Ko(t);
          try {
            Fp(t),
              (function Pp(n) {
                return ($.lFrame.bindingIndex = n);
              })(n.bindingStartIndex),
              null !== e && gm(n, t, e, 2, i);
            const o = 3 == (3 & r);
            if (o) {
              const c = n.preOrderCheckHooks;
              null !== c && Zo(t, c, null);
            } else {
              const c = n.preOrderHooks;
              null !== c && Xo(t, c, 0, null), Nc(t, 0);
            }
            if (
              ((function zA(n) {
                for (let t = tu(n); null !== t; t = nu(t)) {
                  if (!t[2]) continue;
                  const e = t[9];
                  for (let i = 0; i < e.length; i++) {
                    const r = e[i],
                      s = r[3];
                    0 == (1024 & r[2]) && Tc(s, 1), (r[2] |= 1024);
                  }
                }
              })(t),
              (function UA(n) {
                for (let t = tu(n); null !== t; t = nu(t))
                  for (let e = 10; e < t.length; e++) {
                    const i = t[e],
                      r = i[1];
                    Ic(i) && Er(r, i, r.template, i[8]);
                  }
              })(t),
              null !== n.contentQueries && pm(n, t),
              o)
            ) {
              const c = n.contentCheckHooks;
              null !== c && Zo(t, c);
            } else {
              const c = n.contentHooks;
              null !== c && Xo(t, c, 1), Nc(t, 1);
            }
            !(function EA(n, t) {
              const e = n.hostBindingOpCodes;
              if (null !== e)
                try {
                  for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    if (r < 0) ni(~r);
                    else {
                      const s = r,
                        o = e[++i],
                        a = e[++i];
                      Kx(o, s), a(2, t[s]);
                    }
                  }
                } finally {
                  ni(-1);
                }
            })(n, t);
            const a = n.components;
            null !== a &&
              (function xA(n, t) {
                for (let e = 0; e < t.length; e++) WA(n, t[e]);
              })(t, a);
            const l = n.viewQuery;
            if ((null !== l && ju(2, l, i), o)) {
              const c = n.viewCheckHooks;
              null !== c && Zo(t, c);
            } else {
              const c = n.viewHooks;
              null !== c && Xo(t, c, 2), Nc(t, 2);
            }
            !0 === n.firstUpdatePass && (n.firstUpdatePass = !1),
              (t[2] &= -73),
              1024 & t[2] && ((t[2] &= -1025), Tc(t[3], -1));
          } finally {
            Yo();
          }
        }
      }
      function AA(n, t, e, i) {
        const r = t[10],
          o = Tp(t);
        try {
          !o && r.begin && r.begin(), o && Ns(n, t, i), Er(n, t, e, i);
        } finally {
          !o && r.end && r.end();
        }
      }
      function gm(n, t, e, i, r) {
        const s = mt(),
          o = 2 & i;
        try {
          ni(-1), o && t.length > 20 && im(n, t, 20, !1), e(i, r);
        } finally {
          ni(s);
        }
      }
      function mm(n, t, e) {
        if (Cc(t)) {
          const r = t.directiveEnd;
          for (let s = t.directiveStart; s < r; s++) {
            const o = n.data[s];
            o.contentQueries && o.contentQueries(1, e[s], s);
          }
        }
      }
      function Ru(n, t, e) {
        !Rp() ||
          ((function NA(n, t, e, i) {
            const r = e.directiveStart,
              s = e.directiveEnd;
            n.firstCreatePass || ys(e, t), ot(i, t);
            const o = e.initialInputs;
            for (let a = r; a < s; a++) {
              const l = n.data[a],
                c = on(l);
              c && jA(t, e, l);
              const u = vs(t, n, a, e);
              ot(u, t),
                null !== o && GA(0, a - r, u, l, 0, o),
                c && (It(e.index, t)[8] = u);
            }
          })(n, t, e, St(e, t)),
          128 == (128 & e.flags) &&
            (function LA(n, t, e) {
              const i = e.directiveStart,
                r = e.directiveEnd,
                o = e.index,
                a = (function Yx() {
                  return $.lFrame.currentDirectiveIndex;
                })();
              try {
                ni(o);
                for (let l = i; l < r; l++) {
                  const c = n.data[l],
                    u = t[l];
                  Rc(l),
                    (null !== c.hostBindings ||
                      0 !== c.hostVars ||
                      null !== c.hostAttrs) &&
                      Em(c, u);
                }
              } finally {
                ni(-1), Rc(a);
              }
            })(n, t, e));
      }
      function ku(n, t, e = St) {
        const i = t.localNames;
        if (null !== i) {
          let r = t.index + 1;
          for (let s = 0; s < i.length; s += 2) {
            const o = i[s + 1],
              a = -1 === o ? e(t, n) : n[o];
            n[r++] = a;
          }
        }
      }
      function _m(n) {
        const t = n.tView;
        return null === t || t.incompleteFirstPass
          ? (n.tView = va(
              1,
              null,
              n.template,
              n.decls,
              n.vars,
              n.directiveDefs,
              n.pipeDefs,
              n.viewQuery,
              n.schemas,
              n.consts,
            ))
          : t;
      }
      function va(n, t, e, i, r, s, o, a, l, c) {
        const u = 20 + i,
          d = u + r,
          f = (function SA(n, t) {
            const e = [];
            for (let i = 0; i < t; i++) e.push(i < n ? null : U);
            return e;
          })(u, d),
          h = 'function' == typeof c ? c() : c;
        return (f[1] = {
          type: n,
          blueprint: f,
          template: e,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: f.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: d,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof s ? s() : s,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: h,
          incompleteFirstPass: !1,
        });
      }
      function bm(n, t, e, i) {
        const r = Tm(t);
        null === e
          ? r.push(i)
          : (r.push(e), n.firstCreatePass && Fm(n).push(i, r.length - 1));
      }
      function Cm(n, t, e) {
        for (let i in n)
          if (n.hasOwnProperty(i)) {
            const r = n[i];
            (e = null === e ? {} : e).hasOwnProperty(i)
              ? e[i].push(t, r)
              : (e[i] = [t, r]);
          }
        return e;
      }
      function Rt(n, t, e, i, r, s, o, a) {
        const l = St(t, e);
        let u,
          c = t.inputs;
        !a && null != c && (u = c[i])
          ? (km(n, e, u, i, r),
            Uo(t) &&
              (function OA(n, t) {
                const e = It(t, n);
                16 & e[2] || (e[2] |= 64);
              })(e, t.index))
          : 3 & t.type &&
            ((i = (function FA(n) {
              return 'class' === n
                ? 'className'
                : 'for' === n
                ? 'htmlFor'
                : 'formaction' === n
                ? 'formAction'
                : 'innerHtml' === n
                ? 'innerHTML'
                : 'readonly' === n
                ? 'readOnly'
                : 'tabindex' === n
                ? 'tabIndex'
                : n;
            })(i)),
            (r = null != o ? o(r, t.value || '', i) : r),
            Re(s)
              ? s.setProperty(l, i, r)
              : Vc(i) || (l.setProperty ? l.setProperty(i, r) : (l[i] = r)));
      }
      function Pu(n, t, e, i) {
        let r = !1;
        if (Rp()) {
          const s = (function VA(n, t, e) {
              const i = n.directiveRegistry;
              let r = null;
              if (i)
                for (let s = 0; s < i.length; s++) {
                  const o = i[s];
                  tm(e, o.selectors, !1) &&
                    (r || (r = []),
                    ia(ys(e, t), n, o.type),
                    on(o) ? (xm(n, e), r.unshift(o)) : r.push(o));
                }
              return r;
            })(n, t, e),
            o = null === i ? null : {'': -1};
          if (null !== s) {
            (r = !0), Mm(e, n.data.length, s.length);
            for (let u = 0; u < s.length; u++) {
              const d = s[u];
              d.providersResolver && d.providersResolver(d);
            }
            let a = !1,
              l = !1,
              c = Dr(n, t, s.length, null);
            for (let u = 0; u < s.length; u++) {
              const d = s[u];
              (e.mergedAttrs = ea(e.mergedAttrs, d.hostAttrs)),
                Am(n, e, t, c, d),
                HA(c, d, o),
                null !== d.contentQueries && (e.flags |= 8),
                (null !== d.hostBindings ||
                  null !== d.hostAttrs ||
                  0 !== d.hostVars) &&
                  (e.flags |= 128);
              const f = d.type.prototype;
              !a &&
                (f.ngOnChanges || f.ngOnInit || f.ngDoCheck) &&
                ((n.preOrderHooks || (n.preOrderHooks = [])).push(e.index),
                (a = !0)),
                !l &&
                  (f.ngOnChanges || f.ngDoCheck) &&
                  ((n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                    e.index,
                  ),
                  (l = !0)),
                c++;
            }
            !(function TA(n, t) {
              const i = t.directiveEnd,
                r = n.data,
                s = t.attrs,
                o = [];
              let a = null,
                l = null;
              for (let c = t.directiveStart; c < i; c++) {
                const u = r[c],
                  d = u.inputs,
                  f = null === s || em(t) ? null : $A(d, s);
                o.push(f), (a = Cm(d, c, a)), (l = Cm(u.outputs, c, l));
              }
              null !== a &&
                (a.hasOwnProperty('class') && (t.flags |= 16),
                a.hasOwnProperty('style') && (t.flags |= 32)),
                (t.initialInputs = o),
                (t.inputs = a),
                (t.outputs = l);
            })(n, e);
          }
          o &&
            (function BA(n, t, e) {
              if (t) {
                const i = (n.localNames = []);
                for (let r = 0; r < t.length; r += 2) {
                  const s = e[t[r + 1]];
                  if (null == s) throw new T(-301, !1);
                  i.push(t[r], s);
                }
              }
            })(e, i, o);
        }
        return (e.mergedAttrs = ea(e.mergedAttrs, e.attrs)), r;
      }
      function Dm(n, t, e, i, r, s) {
        const o = s.hostBindings;
        if (o) {
          let a = n.hostBindingOpCodes;
          null === a && (a = n.hostBindingOpCodes = []);
          const l = ~t.index;
          (function PA(n) {
            let t = n.length;
            for (; t > 0; ) {
              const e = n[--t];
              if ('number' == typeof e && e < 0) return e;
            }
            return 0;
          })(a) != l && a.push(l),
            a.push(i, r, o);
        }
      }
      function Em(n, t) {
        null !== n.hostBindings && n.hostBindings(1, t);
      }
      function xm(n, t) {
        (t.flags |= 2), (n.components || (n.components = [])).push(t.index);
      }
      function HA(n, t, e) {
        if (e) {
          if (t.exportAs)
            for (let i = 0; i < t.exportAs.length; i++) e[t.exportAs[i]] = n;
          on(t) && (e[''] = n);
        }
      }
      function Mm(n, t, e) {
        (n.flags |= 1),
          (n.directiveStart = t),
          (n.directiveEnd = t + e),
          (n.providerIndexes = t);
      }
      function Am(n, t, e, i, r) {
        n.data[i] = r;
        const s = r.factory || (r.factory = Ai(r.type)),
          o = new ms(s, on(r), null);
        (n.blueprint[i] = o),
          (e[i] = o),
          Dm(n, t, 0, i, Dr(n, e, r.hostVars, U), r);
      }
      function jA(n, t, e) {
        const i = St(t, n),
          r = _m(e),
          s = n[10],
          o = ba(
            n,
            Ps(
              n,
              r,
              null,
              e.onPush ? 64 : 16,
              i,
              t,
              s,
              s.createRenderer(i, e),
              null,
              null,
            ),
          );
        n[t.index] = o;
      }
      function En(n, t, e, i, r, s) {
        const o = St(n, t);
        !(function Nu(n, t, e, i, r, s, o) {
          if (null == s)
            Re(n) ? n.removeAttribute(t, r, e) : t.removeAttribute(r);
          else {
            const a = null == o ? G(s) : o(s, i || '', r);
            Re(n)
              ? n.setAttribute(t, r, a, e)
              : e
              ? t.setAttributeNS(e, r, a)
              : t.setAttribute(r, a);
          }
        })(t[q], o, s, n.value, e, i, r);
      }
      function GA(n, t, e, i, r, s) {
        const o = s[t];
        if (null !== o) {
          const a = i.setInput;
          for (let l = 0; l < o.length; ) {
            const c = o[l++],
              u = o[l++],
              d = o[l++];
            null !== a ? i.setInput(e, d, c, u) : (e[u] = d);
          }
        }
      }
      function $A(n, t) {
        let e = null,
          i = 0;
        for (; i < t.length; ) {
          const r = t[i];
          if (0 !== r)
            if (5 !== r) {
              if ('number' == typeof r) break;
              n.hasOwnProperty(r) &&
                (null === e && (e = []), e.push(r, n[r], t[i + 1])),
                (i += 2);
            } else i += 2;
          else i += 4;
        }
        return e;
      }
      function Sm(n, t, e, i) {
        return new Array(n, !0, !1, t, null, 0, i, e, null, null);
      }
      function WA(n, t) {
        const e = It(t, n);
        if (Ic(e)) {
          const i = e[1];
          80 & e[2] ? Er(i, e, i.template, e[8]) : e[5] > 0 && Lu(e);
        }
      }
      function Lu(n) {
        for (let i = tu(n); null !== i; i = nu(i))
          for (let r = 10; r < i.length; r++) {
            const s = i[r];
            if (1024 & s[2]) {
              const o = s[1];
              Er(o, s, o.template, s[8]);
            } else s[5] > 0 && Lu(s);
          }
        const e = n[1].components;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const r = It(e[i], n);
            Ic(r) && r[5] > 0 && Lu(r);
          }
      }
      function qA(n, t) {
        const e = It(t, n),
          i = e[1];
        (function KA(n, t) {
          for (let e = t.length; e < n.blueprint.length; e++)
            t.push(n.blueprint[e]);
        })(i, e),
          Ns(i, e, e[8]);
      }
      function ba(n, t) {
        return n[13] ? (n[14][4] = t) : (n[13] = t), (n[14] = t), t;
      }
      function Vu(n) {
        for (; n; ) {
          n[2] |= 64;
          const t = Ts(n);
          if (Mx(n) && !t) return n;
          n = t;
        }
        return null;
      }
      function Im(n) {
        !(function Bu(n) {
          for (let t = 0; t < n.components.length; t++) {
            const e = n.components[t],
              i = Xc(e),
              r = i[1];
            AA(r, i, r.template, e);
          }
        })(n[8]);
      }
      function ju(n, t, e) {
        Pc(0), t(n, e);
      }
      const QA = (() => Promise.resolve(null))();
      function Tm(n) {
        return n[7] || (n[7] = []);
      }
      function Fm(n) {
        return n.cleanup || (n.cleanup = []);
      }
      function Rm(n, t) {
        const e = n[9],
          i = e ? e.get(ri, null) : null;
        i && i.handleError(t);
      }
      function km(n, t, e, i, r) {
        for (let s = 0; s < e.length; ) {
          const o = e[s++],
            a = e[s++],
            l = t[o],
            c = n.data[o];
          null !== c.setInput ? c.setInput(l, r, i, a) : (l[a] = r);
        }
      }
      function Hn(n, t, e) {
        const i = Wo(t, n);
        !(function Eg(n, t, e) {
          Re(n) ? n.setValue(t, e) : (t.textContent = e);
        })(n[q], i, e);
      }
      function Ca(n, t, e) {
        let i = e ? n.styles : null,
          r = e ? n.classes : null,
          s = 0;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const a = t[o];
            'number' == typeof a
              ? (s = a)
              : 1 == s
              ? (r = fc(r, a))
              : 2 == s && (i = fc(i, a + ': ' + t[++o] + ';'));
          }
        e ? (n.styles = i) : (n.stylesWithoutHost = i),
          e ? (n.classes = r) : (n.classesWithoutHost = r);
      }
      const Gu = new I('INJECTOR', -1);
      class Pm {
        get(t, e = Es) {
          if (e === Es) {
            const i = new Error(`NullInjectorError: No provider for ${fe(t)}!`);
            throw ((i.name = 'NullInjectorError'), i);
          }
          return e;
        }
      }
      const $u = new I('Set Injector scope.'),
        Ls = {},
        JA = {};
      let Uu;
      function Nm() {
        return void 0 === Uu && (Uu = new Pm()), Uu;
      }
      function Lm(n, t = null, e = null, i) {
        const r = Vm(n, t, e, i);
        return r._resolveInjectorDefTypes(), r;
      }
      function Vm(n, t = null, e = null, i) {
        return new eS(n, e, t || Nm(), i);
      }
      class eS {
        constructor(t, e, i, r = null) {
          (this.parent = i),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && bn(e, a => this.processProvider(a, t, e)),
            bn([t], a => this.processInjectorType(a, [], s)),
            this.records.set(Gu, xr(void 0, this));
          const o = this.records.get($u);
          (this.scope = null != o ? o.value : null),
            (this.source = r || ('object' == typeof t ? null : fe(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach(t => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = Es, i = W.Default) {
          this.assertNotDestroyed();
          const r = lg(this),
            s = Zn(void 0);
          try {
            if (!(i & W.SkipSelf)) {
              let a = this.records.get(t);
              if (void 0 === a) {
                const l =
                  (function lS(n) {
                    return (
                      'function' == typeof n ||
                      ('object' == typeof n && n instanceof I)
                    );
                  })(t) && pc(t);
                (a = l && this.injectableDefInScope(l) ? xr(zu(t), Ls) : null),
                  this.records.set(t, a);
              }
              if (null != a) return this.hydrate(t, a);
            }
            return (i & W.Self ? Nm() : this.parent).get(
              t,
              (e = i & W.Optional && e === Es ? null : e),
            );
          } catch (o) {
            if ('NullInjectorError' === o.name) {
              if (((o[aa] = o[aa] || []).unshift(fe(t)), r)) throw o;
              return (function R0(n, t, e, i) {
                const r = n[aa];
                throw (
                  (t[ag] && r.unshift(t[ag]),
                  (n.message = (function k0(n, t, e, i = null) {
                    n =
                      n && '\n' === n.charAt(0) && '\u0275' == n.charAt(1)
                        ? n.substr(2)
                        : n;
                    let r = fe(t);
                    if (Array.isArray(t)) r = t.map(fe).join(' -> ');
                    else if ('object' == typeof t) {
                      let s = [];
                      for (let o in t)
                        if (t.hasOwnProperty(o)) {
                          let a = t[o];
                          s.push(
                            o +
                              ':' +
                              ('string' == typeof a
                                ? JSON.stringify(a)
                                : fe(a)),
                          );
                        }
                      r = `{${s.join(', ')}}`;
                    }
                    return `${e}${i ? '(' + i + ')' : ''}[${r}]: ${n.replace(
                      S0,
                      '\n  ',
                    )}`;
                  })('\n' + n.message, r, e, i)),
                  (n.ngTokenPath = r),
                  (n[aa] = null),
                  n)
                );
              })(o, t, 'R3InjectorError', this.source);
            }
            throw o;
          } finally {
            Zn(s), lg(r);
          }
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach(t => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((i, r) => t.push(fe(r))),
            `R3Injector[${t.join(', ')}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new T(205, !1);
        }
        processInjectorType(t, e, i) {
          if (!(t = K(t))) return !1;
          let r = mp(t);
          const s = (null == r && t.ngModule) || void 0,
            o = void 0 === s ? t : s,
            a = -1 !== i.indexOf(o);
          if ((void 0 !== s && (r = mp(s)), null == r)) return !1;
          if (null != r.imports && !a) {
            let u;
            i.push(o);
            try {
              bn(r.imports, d => {
                this.processInjectorType(d, e, i) &&
                  (void 0 === u && (u = []), u.push(d));
              });
            } finally {
            }
            if (void 0 !== u)
              for (let d = 0; d < u.length; d++) {
                const {ngModule: f, providers: h} = u[d];
                bn(h, g => this.processProvider(g, f, h || me));
              }
          }
          this.injectorDefTypes.add(o);
          const l = Ai(o) || (() => new o());
          this.records.set(o, xr(l, Ls));
          const c = r.providers;
          if (null != c && !a) {
            const u = t;
            bn(c, d => this.processProvider(d, u, c));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, i) {
          let r = Mr((t = K(t))) ? t : K(t && t.provide);
          const s = (function nS(n, t, e) {
            return Hm(n) ? xr(void 0, n.useValue) : xr(Bm(n), Ls);
          })(t);
          if (Mr(t) || !0 !== t.multi) this.records.get(r);
          else {
            let o = this.records.get(r);
            o ||
              ((o = xr(void 0, Ls, !0)),
              (o.factory = () => Kc(o.multi)),
              this.records.set(r, o)),
              (r = t),
              o.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          return (
            e.value === Ls && ((e.value = JA), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              (function aS(n) {
                return (
                  null !== n &&
                  'object' == typeof n &&
                  'function' == typeof n.ngOnDestroy
                );
              })(e.value) &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const e = K(t.providedIn);
          return 'string' == typeof e
            ? 'any' === e || e === this.scope
            : this.injectorDefTypes.has(e);
        }
      }
      function zu(n) {
        const t = pc(n),
          e = null !== t ? t.factory : Ai(n);
        if (null !== e) return e;
        if (n instanceof I) throw new T(204, !1);
        if (n instanceof Function)
          return (function tS(n) {
            const t = n.length;
            if (t > 0) throw (Ds(t, '?'), new T(204, !1));
            const e = (function hx(n) {
              const t = n && (n[Bo] || n[_p]);
              if (t) {
                const e = (function px(n) {
                  if (n.hasOwnProperty('name')) return n.name;
                  const t = ('' + n).match(/^function\s*([^\s(]+)/);
                  return null === t ? '' : t[1];
                })(n);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${e}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${e}" class.`,
                  ),
                  t
                );
              }
              return null;
            })(n);
            return null !== e ? () => e.factory(n) : () => new n();
          })(n);
        throw new T(204, !1);
      }
      function Bm(n, t, e) {
        let i;
        if (Mr(n)) {
          const r = K(n);
          return Ai(r) || zu(r);
        }
        if (Hm(n)) i = () => K(n.useValue);
        else if (
          (function rS(n) {
            return !(!n || !n.useFactory);
          })(n)
        )
          i = () => n.useFactory(...Kc(n.deps || []));
        else if (
          (function iS(n) {
            return !(!n || !n.useExisting);
          })(n)
        )
          i = () => b(K(n.useExisting));
        else {
          const r = K(n && (n.useClass || n.provide));
          if (
            !(function oS(n) {
              return !!n.deps;
            })(n)
          )
            return Ai(r) || zu(r);
          i = () => new r(...Kc(n.deps));
        }
        return i;
      }
      function xr(n, t, e = !1) {
        return {factory: n, value: t, multi: e ? [] : void 0};
      }
      function Hm(n) {
        return null !== n && 'object' == typeof n && T0 in n;
      }
      function Mr(n) {
        return 'function' == typeof n;
      }
      let nt = (() => {
        class n {
          static create(e, i) {
            var r;
            if (Array.isArray(e)) return Lm({name: ''}, i, e, '');
            {
              const s = null !== (r = e.name) && void 0 !== r ? r : '';
              return Lm({name: s}, e.parent, e.providers, s);
            }
          }
        }
        return (
          (n.THROW_IF_NOT_FOUND = Es),
          (n.NULL = new Pm()),
          (n.ɵprov = E({token: n, providedIn: 'any', factory: () => b(Gu)})),
          (n.__NG_ELEMENT_ID__ = -1),
          n
        );
      })();
      function mS(n, t) {
        Qo(Xc(n)[1], ze());
      }
      function x(n) {
        let t = (function Xm(n) {
            return Object.getPrototypeOf(n.prototype).constructor;
          })(n.type),
          e = !0;
        const i = [n];
        for (; t; ) {
          let r;
          if (on(n)) r = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new T(903, '');
            r = t.ɵdir;
          }
          if (r) {
            if (e) {
              i.push(r);
              const o = n;
              (o.inputs = Ku(n.inputs)),
                (o.declaredInputs = Ku(n.declaredInputs)),
                (o.outputs = Ku(n.outputs));
              const a = r.hostBindings;
              a && bS(n, a);
              const l = r.viewQuery,
                c = r.contentQueries;
              if (
                (l && yS(n, l),
                c && vS(n, c),
                dc(n.inputs, r.inputs),
                dc(n.declaredInputs, r.declaredInputs),
                dc(n.outputs, r.outputs),
                on(r) && r.data.animation)
              ) {
                const u = n.data;
                u.animation = (u.animation || []).concat(r.data.animation);
              }
            }
            const s = r.features;
            if (s)
              for (let o = 0; o < s.length; o++) {
                const a = s[o];
                a && a.ngInherit && a(n), a === x && (e = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function _S(n) {
          let t = 0,
            e = null;
          for (let i = n.length - 1; i >= 0; i--) {
            const r = n[i];
            (r.hostVars = t += r.hostVars),
              (r.hostAttrs = ea(r.hostAttrs, (e = ea(e, r.hostAttrs))));
          }
        })(i);
      }
      function Ku(n) {
        return n === ir ? {} : n === me ? [] : n;
      }
      function yS(n, t) {
        const e = n.viewQuery;
        n.viewQuery = e
          ? (i, r) => {
              t(i, r), e(i, r);
            }
          : t;
      }
      function vS(n, t) {
        const e = n.contentQueries;
        n.contentQueries = e
          ? (i, r, s) => {
              t(i, r, s), e(i, r, s);
            }
          : t;
      }
      function bS(n, t) {
        const e = n.hostBindings;
        n.hostBindings = e
          ? (i, r) => {
              t(i, r), e(i, r);
            }
          : t;
      }
      let wa = null;
      function Ar() {
        if (!wa) {
          const n = pe.Symbol;
          if (n && n.iterator) wa = n.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const i = t[e];
              'entries' !== i &&
                'size' !== i &&
                Map.prototype[i] === Map.prototype.entries &&
                (wa = i);
            }
          }
        }
        return wa;
      }
      function Vs(n) {
        return (
          !!Yu(n) && (Array.isArray(n) || (!(n instanceof Map) && Ar() in n))
        );
      }
      function Yu(n) {
        return null !== n && ('function' == typeof n || 'object' == typeof n);
      }
      function at(n, t, e) {
        return !Object.is(n[t], e) && ((n[t] = e), !0);
      }
      function it(n, t, e, i) {
        const r = C();
        return at(r, cr(), t) && (ne(), En(Ae(), r, n, t, e, i)), it;
      }
      function Ir(n, t, e, i) {
        return at(n, cr(), e) ? t + G(e) + i : U;
      }
      function Tr(n, t, e, i, r, s) {
        const a = (function Oi(n, t, e, i) {
          const r = at(n, t, e);
          return at(n, t + 1, i) || r;
        })(
          n,
          (function Ln() {
            return $.lFrame.bindingIndex;
          })(),
          e,
          r,
        );
        return Vn(2), a ? t + G(e) + i + G(r) + s : U;
      }
      function H(n, t, e, i, r, s, o, a) {
        const l = C(),
          c = ne(),
          u = n + 20,
          d = c.firstCreatePass
            ? (function AS(n, t, e, i, r, s, o, a, l) {
                const c = t.consts,
                  u = wr(t, n, 4, o || null, ti(c, a));
                Pu(t, e, u, ti(c, l)), Qo(t, u);
                const d = (u.tViews = va(
                  2,
                  u,
                  i,
                  r,
                  s,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  c,
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, u),
                    (d.queries = t.queries.embeddedTView(u))),
                  u
                );
              })(u, c, l, t, e, i, r, s, o)
            : c.data[u];
        vn(d, !1);
        const f = l[q].createComment('');
        ua(c, l, f, d),
          ot(f, l),
          ba(l, (l[u] = Sm(f, l, f, d))),
          zo(d) && Ru(c, l, d),
          null != o && ku(l, d, a);
      }
      function Qu(n) {
        return (function lr(n, t) {
          return n[t];
        })(
          (function Wx() {
            return $.lFrame.contextLView;
          })(),
          20 + n,
        );
      }
      function p(n, t = W.Default) {
        const e = C();
        return null === e ? b(n, t) : Zp(ze(), e, K(n), t);
      }
      function S(n, t, e) {
        const i = C();
        return at(i, cr(), t) && Rt(ne(), Ae(), i, n, t, i[q], e, !1), S;
      }
      function td(n, t, e, i, r) {
        const o = r ? 'class' : 'style';
        km(n, e, t.inputs[o], o, i);
      }
      function z(n, t, e, i) {
        const r = C(),
          s = ne(),
          o = 20 + n,
          a = r[q],
          l = (r[o] = ru(
            a,
            t,
            (function r0() {
              return $.lFrame.currentNamespace;
            })(),
          )),
          c = s.firstCreatePass
            ? (function KS(n, t, e, i, r, s, o) {
                const a = t.consts,
                  c = wr(t, n, 2, r, ti(a, s));
                return (
                  Pu(t, e, c, ti(a, o)),
                  null !== c.attrs && Ca(c, c.attrs, !1),
                  null !== c.mergedAttrs && Ca(c, c.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(o, s, r, 0, t, e, i)
            : s.data[o];
        vn(c, !0);
        const u = c.mergedAttrs;
        null !== u && Jo(a, l, u);
        const d = c.classes;
        null !== d && du(a, l, d);
        const f = c.styles;
        return (
          null !== f && Lg(a, l, f),
          64 != (64 & c.flags) && ua(s, r, l, c),
          0 ===
            (function jx() {
              return $.lFrame.elementDepthCount;
            })() && ot(l, r),
          (function Gx() {
            $.lFrame.elementDepthCount++;
          })(),
          zo(c) && (Ru(s, r, c), mm(s, c, r)),
          null !== i && ku(r, c),
          z
        );
      }
      function Y() {
        let n = ze();
        Fc() ? Oc() : ((n = n.parent), vn(n, !1));
        const t = n;
        !(function $x() {
          $.lFrame.elementDepthCount--;
        })();
        const e = ne();
        return (
          e.firstCreatePass && (Qo(e, n), Cc(n) && e.queries.elementEnd(n)),
          null != t.classesWithoutHost &&
            (function c0(n) {
              return 0 != (16 & n.flags);
            })(t) &&
            td(e, t, C(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function u0(n) {
              return 0 != (32 & n.flags);
            })(t) &&
            td(e, t, C(), t.stylesWithoutHost, !1),
          Y
        );
      }
      function lt(n, t, e, i) {
        return z(n, t, e, i), Y(), lt;
      }
      function ct(n, t, e) {
        const i = C(),
          r = ne(),
          s = n + 20,
          o = r.firstCreatePass
            ? (function YS(n, t, e, i, r) {
                const s = t.consts,
                  o = ti(s, i),
                  a = wr(t, n, 8, 'ng-container', o);
                return (
                  null !== o && Ca(a, o, !0),
                  Pu(t, e, a, ti(s, r)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(s, r, i, t, e)
            : r.data[s];
        vn(o, !0);
        const a = (i[s] = i[q].createComment(''));
        return (
          ua(r, i, a, o),
          ot(a, i),
          zo(o) && (Ru(r, i, o), mm(r, o, i)),
          null != e && ku(i, o),
          ct
        );
      }
      function ut() {
        let n = ze();
        const t = ne();
        return (
          Fc() ? Oc() : ((n = n.parent), vn(n, !1)),
          t.firstCreatePass && (Qo(t, n), Cc(n) && t.queries.elementEnd(n)),
          ut
        );
      }
      function Vr(n, t, e) {
        return ct(n, t, e), ut(), Vr;
      }
      function jn() {
        return C();
      }
      function xa(n) {
        return !!n && 'function' == typeof n.then;
      }
      const b_ = function v_(n) {
        return !!n && 'function' == typeof n.subscribe;
      };
      function ve(n, t, e, i) {
        const r = C(),
          s = ne(),
          o = ze();
        return (
          (function w_(n, t, e, i, r, s, o, a) {
            const l = zo(i),
              u = n.firstCreatePass && Fm(n),
              d = t[8],
              f = Tm(t);
            let h = !0;
            if (3 & i.type || a) {
              const v = St(i, t),
                y = a ? a(v) : v,
                _ = f.length,
                D = a ? O => a(Ve(O[i.index])) : i.index;
              if (Re(e)) {
                let O = null;
                if (
                  (!a &&
                    l &&
                    (O = (function QS(n, t, e, i) {
                      const r = n.cleanup;
                      if (null != r)
                        for (let s = 0; s < r.length - 1; s += 2) {
                          const o = r[s];
                          if (o === e && r[s + 1] === i) {
                            const a = t[7],
                              l = r[s + 2];
                            return a.length > l ? a[l] : null;
                          }
                          'string' == typeof o && (s += 2);
                        }
                      return null;
                    })(n, t, r, i.index)),
                  null !== O)
                )
                  ((O.__ngLastListenerFn__ || O).__ngNextListenerFn__ = s),
                    (O.__ngLastListenerFn__ = s),
                    (h = !1);
                else {
                  s = nd(i, t, d, s, !1);
                  const Z = e.listen(y, r, s);
                  f.push(s, Z), u && u.push(r, D, _, _ + 1);
                }
              } else
                (s = nd(i, t, d, s, !0)),
                  y.addEventListener(r, s, o),
                  f.push(s),
                  u && u.push(r, D, _, o);
            } else s = nd(i, t, d, s, !1);
            const g = i.outputs;
            let m;
            if (h && null !== g && (m = g[r])) {
              const v = m.length;
              if (v)
                for (let y = 0; y < v; y += 2) {
                  const xe = t[m[y]][m[y + 1]].subscribe(s),
                    Te = f.length;
                  f.push(s, xe), u && u.push(r, i.index, Te, -(Te + 1));
                }
            }
          })(s, r, r[q], o, n, t, !!e, i),
          ve
        );
      }
      function D_(n, t, e, i) {
        try {
          return !1 !== e(i);
        } catch (r) {
          return Rm(n, r), !1;
        }
      }
      function nd(n, t, e, i, r) {
        return function s(o) {
          if (o === Function) return i;
          const a = 2 & n.flags ? It(n.index, t) : t;
          0 == (32 & t[2]) && Vu(a);
          let l = D_(t, 0, i, o),
            c = s.__ngNextListenerFn__;
          for (; c; ) (l = D_(t, 0, c, o) && l), (c = c.__ngNextListenerFn__);
          return r && !1 === l && (o.preventDefault(), (o.returnValue = !1)), l;
        };
      }
      function P(n = 1) {
        return (function Zx(n) {
          return ($.lFrame.contextLView = (function Xx(n, t) {
            for (; n > 0; ) (t = t[15]), n--;
            return t;
          })(n, $.lFrame.contextLView))[8];
        })(n);
      }
      function ZS(n, t) {
        let e = null;
        const i = (function aA(n) {
          const t = n.attrs;
          if (null != t) {
            const e = t.indexOf(5);
            if (0 == (1 & e)) return t[e + 1];
          }
          return null;
        })(n);
        for (let r = 0; r < t.length; r++) {
          const s = t[r];
          if ('*' !== s) {
            if (null === i ? tm(n, s, !0) : uA(i, s)) return r;
          } else e = r;
        }
        return e;
      }
      function Hs(n) {
        const t = C()[16][6];
        if (!t.projection) {
          const i = (t.projection = Ds(n ? n.length : 1, null)),
            r = i.slice();
          let s = t.child;
          for (; null !== s; ) {
            const o = n ? ZS(s, n) : 0;
            null !== o &&
              (r[o] ? (r[o].projectionNext = s) : (i[o] = s), (r[o] = s)),
              (s = s.next);
          }
        }
      }
      function kt(n, t = 0, e) {
        const i = C(),
          r = ne(),
          s = wr(r, 20 + n, 16, null, e || null);
        null === s.projection && (s.projection = t),
          Oc(),
          64 != (64 & s.flags) &&
            (function dM(n, t, e) {
              Ng(t[q], 0, t, e, Ag(n, e, t), Fg(e.parent || t[6], e, t));
            })(r, i, s);
      }
      function R_(n, t, e, i, r) {
        const s = n[e + 1],
          o = null === t;
        let a = i ? ln(s) : Bn(s),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const u = n[a + 1];
          eI(n[a], t) && ((l = !0), (n[a + 1] = i ? Du(u) : Cu(u))),
            (a = i ? ln(u) : Bn(u));
        }
        l && (n[e + 1] = i ? Cu(s) : Du(s));
      }
      function eI(n, t) {
        return (
          null === n ||
          null == t ||
          (Array.isArray(n) ? n[1] : n) === t ||
          (!(!Array.isArray(n) || 'string' != typeof t) && _r(n, t) >= 0)
        );
      }
      const qe = {textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0};
      function k_(n) {
        return n.substring(qe.key, qe.keyEnd);
      }
      function P_(n, t) {
        const e = qe.textEnd;
        return e === t
          ? -1
          : ((t = qe.keyEnd =
              (function rI(n, t, e) {
                for (; t < e && n.charCodeAt(t) > 32; ) t++;
                return t;
              })(n, (qe.key = t), e)),
            Br(n, t, e));
      }
      function Br(n, t, e) {
        for (; t < e && n.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function rd(n, t, e) {
        return un(n, t, e, !1), rd;
      }
      function Pt(n, t) {
        return un(n, t, null, !0), Pt;
      }
      function An(n, t) {
        for (
          let e = (function nI(n) {
            return (
              (function L_(n) {
                (qe.key = 0),
                  (qe.keyEnd = 0),
                  (qe.value = 0),
                  (qe.valueEnd = 0),
                  (qe.textEnd = n.length);
              })(n),
              P_(n, Br(n, 0, qe.textEnd))
            );
          })(t);
          e >= 0;
          e = P_(t, e)
        )
          Tt(n, k_(t), !0);
      }
      function un(n, t, e, i) {
        const r = C(),
          s = ne(),
          o = Vn(2);
        s.firstUpdatePass && j_(s, n, o, i),
          t !== U &&
            at(r, o, t) &&
            $_(
              s,
              s.data[mt()],
              r,
              r[q],
              n,
              (r[o + 1] = (function gI(n, t) {
                return (
                  null == n ||
                    ('string' == typeof t
                      ? (n += t)
                      : 'object' == typeof n && (n = fe(Ot(n)))),
                  n
                );
              })(t, e)),
              i,
              o,
            );
      }
      function H_(n, t) {
        return t >= n.expandoStartIndex;
      }
      function j_(n, t, e, i) {
        const r = n.data;
        if (null === r[e + 1]) {
          const s = r[mt()],
            o = H_(n, e);
          z_(s, i) && null === t && !o && (t = !1),
            (t = (function cI(n, t, e, i) {
              const r = (function kc(n) {
                const t = $.lFrame.currentDirectiveIndex;
                return -1 === t ? null : n[t];
              })(n);
              let s = i ? t.residualClasses : t.residualStyles;
              if (null === r)
                0 === (i ? t.classBindings : t.styleBindings) &&
                  ((e = js((e = sd(null, n, t, e, i)), t.attrs, i)),
                  (s = null));
              else {
                const o = t.directiveStylingLast;
                if (-1 === o || n[o] !== r)
                  if (((e = sd(r, n, t, e, i)), null === s)) {
                    let l = (function uI(n, t, e) {
                      const i = e ? t.classBindings : t.styleBindings;
                      if (0 !== Bn(i)) return n[ln(i)];
                    })(n, t, i);
                    void 0 !== l &&
                      Array.isArray(l) &&
                      ((l = sd(null, n, t, l[1], i)),
                      (l = js(l, t.attrs, i)),
                      (function dI(n, t, e, i) {
                        n[ln(e ? t.classBindings : t.styleBindings)] = i;
                      })(n, t, i, l));
                  } else
                    s = (function fI(n, t, e) {
                      let i;
                      const r = t.directiveEnd;
                      for (let s = 1 + t.directiveStylingLast; s < r; s++)
                        i = js(i, n[s].hostAttrs, e);
                      return js(i, t.attrs, e);
                    })(n, t, i);
              }
              return (
                void 0 !== s &&
                  (i ? (t.residualClasses = s) : (t.residualStyles = s)),
                e
              );
            })(r, s, t, i)),
            (function XS(n, t, e, i, r, s) {
              let o = s ? t.classBindings : t.styleBindings,
                a = ln(o),
                l = Bn(o);
              n[i] = e;
              let u,
                c = !1;
              if (Array.isArray(e)) {
                const d = e;
                (u = d[1]), (null === u || _r(d, u) > 0) && (c = !0);
              } else u = e;
              if (r)
                if (0 !== l) {
                  const f = ln(n[a + 1]);
                  (n[i + 1] = ma(f, a)),
                    0 !== f && (n[f + 1] = wu(n[f + 1], i)),
                    (n[a + 1] = (function pA(n, t) {
                      return (131071 & n) | (t << 17);
                    })(n[a + 1], i));
                } else
                  (n[i + 1] = ma(a, 0)),
                    0 !== a && (n[a + 1] = wu(n[a + 1], i)),
                    (a = i);
              else
                (n[i + 1] = ma(l, 0)),
                  0 === a ? (a = i) : (n[l + 1] = wu(n[l + 1], i)),
                  (l = i);
              c && (n[i + 1] = Cu(n[i + 1])),
                R_(n, u, i, !0),
                R_(n, u, i, !1),
                (function JS(n, t, e, i, r) {
                  const s = r ? n.residualClasses : n.residualStyles;
                  null != s &&
                    'string' == typeof t &&
                    _r(s, t) >= 0 &&
                    (e[i + 1] = Du(e[i + 1]));
                })(t, u, n, i, s),
                (o = ma(a, l)),
                s ? (t.classBindings = o) : (t.styleBindings = o);
            })(r, s, t, e, o, i);
        }
      }
      function sd(n, t, e, i, r) {
        let s = null;
        const o = e.directiveEnd;
        let a = e.directiveStylingLast;
        for (
          -1 === a ? (a = e.directiveStart) : a++;
          a < o && ((s = t[a]), (i = js(i, s.hostAttrs, r)), s !== n);

        )
          a++;
        return null !== n && (e.directiveStylingLast = a), i;
      }
      function js(n, t, e) {
        const i = e ? 1 : 2;
        let r = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const o = t[s];
            'number' == typeof o
              ? (r = o)
              : r === i &&
                (Array.isArray(n) || (n = void 0 === n ? [] : ['', n]),
                Tt(n, o, !!e || t[++s]));
          }
        return void 0 === n ? null : n;
      }
      function $_(n, t, e, i, r, s, o, a) {
        if (!(3 & t.type)) return;
        const l = n.data,
          c = l[a + 1];
        Ma(
          (function om(n) {
            return 1 == (1 & n);
          })(c)
            ? U_(l, t, e, r, Bn(c), o)
            : void 0,
        ) ||
          (Ma(s) ||
            ((function sm(n) {
              return 2 == (2 & n);
            })(c) &&
              (s = U_(l, null, e, r, a, o))),
          (function hM(n, t, e, i, r) {
            const s = Re(n);
            if (t)
              r
                ? s
                  ? n.addClass(e, i)
                  : e.classList.add(i)
                : s
                ? n.removeClass(e, i)
                : e.classList.remove(i);
            else {
              let o = -1 === i.indexOf('-') ? void 0 : Ft.DashCase;
              if (null == r)
                s ? n.removeStyle(e, i, o) : e.style.removeProperty(i);
              else {
                const a = 'string' == typeof r && r.endsWith('!important');
                a && ((r = r.slice(0, -10)), (o |= Ft.Important)),
                  s
                    ? n.setStyle(e, i, r, o)
                    : e.style.setProperty(i, r, a ? 'important' : '');
              }
            }
          })(i, o, Wo(mt(), e), r, s));
      }
      function U_(n, t, e, i, r, s) {
        const o = null === t;
        let a;
        for (; r > 0; ) {
          const l = n[r],
            c = Array.isArray(l),
            u = c ? l[1] : l,
            d = null === u;
          let f = e[r + 1];
          f === U && (f = d ? me : void 0);
          let h = d ? zc(f, i) : u === i ? f : void 0;
          if ((c && !Ma(h) && (h = zc(l, i)), Ma(h) && ((a = h), o))) return a;
          const g = n[r + 1];
          r = o ? ln(g) : Bn(g);
        }
        if (null !== t) {
          let l = s ? t.residualClasses : t.residualStyles;
          null != l && (a = zc(l, i));
        }
        return a;
      }
      function Ma(n) {
        return void 0 !== n;
      }
      function z_(n, t) {
        return 0 != (n.flags & (t ? 16 : 32));
      }
      function Nt(n, t = '') {
        const e = C(),
          i = ne(),
          r = n + 20,
          s = i.firstCreatePass ? wr(i, r, 1, t, null) : i.data[r],
          o = (e[r] = (function iu(n, t) {
            return Re(n) ? n.createText(t) : n.createTextNode(t);
          })(e[q], t));
        ua(i, e, o, s), vn(s, !1);
      }
      function Hr(n) {
        return Ri('', n, ''), Hr;
      }
      function Ri(n, t, e) {
        const i = C(),
          r = Ir(i, n, t, e);
        return r !== U && Hn(i, mt(), r), Ri;
      }
      function od(n, t, e, i, r) {
        const s = C(),
          o = Tr(s, n, t, e, i, r);
        return o !== U && Hn(s, mt(), o), od;
      }
      function J_(n, t, e) {
        !(function dn(n, t, e, i) {
          const r = ne(),
            s = Vn(2);
          r.firstUpdatePass && j_(r, null, s, i);
          const o = C();
          if (e !== U && at(o, s, e)) {
            const a = r.data[mt()];
            if (z_(a, i) && !H_(r, s)) {
              let l = i ? a.classesWithoutHost : a.stylesWithoutHost;
              null !== l && (e = fc(l, e || '')), td(r, a, o, e, i);
            } else
              !(function pI(n, t, e, i, r, s, o, a) {
                r === U && (r = me);
                let l = 0,
                  c = 0,
                  u = 0 < r.length ? r[0] : null,
                  d = 0 < s.length ? s[0] : null;
                for (; null !== u || null !== d; ) {
                  const f = l < r.length ? r[l + 1] : void 0,
                    h = c < s.length ? s[c + 1] : void 0;
                  let m,
                    g = null;
                  u === d
                    ? ((l += 2), (c += 2), f !== h && ((g = d), (m = h)))
                    : null === d || (null !== u && u < d)
                    ? ((l += 2), (g = u))
                    : ((c += 2), (g = d), (m = h)),
                    null !== g && $_(n, t, e, i, g, m, o, a),
                    (u = l < r.length ? r[l] : null),
                    (d = c < s.length ? s[c] : null);
                }
              })(
                r,
                a,
                o,
                o[q],
                o[s + 1],
                (o[s + 1] = (function hI(n, t, e) {
                  if (null == e || '' === e) return me;
                  const i = [],
                    r = Ot(e);
                  if (Array.isArray(r))
                    for (let s = 0; s < r.length; s++) n(i, r[s], !0);
                  else if ('object' == typeof r)
                    for (const s in r) r.hasOwnProperty(s) && n(i, s, r[s]);
                  else 'string' == typeof r && t(i, r);
                  return i;
                })(n, t, e)),
                i,
                s,
              );
          }
        })(Tt, An, Ir(C(), n, t, e), !0);
      }
      function Aa(n, t, e) {
        const i = C();
        return at(i, cr(), t) && Rt(ne(), Ae(), i, n, t, i[q], e, !0), Aa;
      }
      const Sa = 'en-US';
      let fy = Sa;
      function cd(n, t, e, i, r) {
        if (((n = K(n)), Array.isArray(n)))
          for (let s = 0; s < n.length; s++) cd(n[s], t, e, i, r);
        else {
          const s = ne(),
            o = C();
          let a = Mr(n) ? n : K(n.provide),
            l = Bm(n);
          const c = ze(),
            u = 1048575 & c.providerIndexes,
            d = c.directiveStart,
            f = c.providerIndexes >> 20;
          if (Mr(n) || !n.multi) {
            const h = new ms(l, r, p),
              g = dd(a, t, r ? u : u + f, d);
            -1 === g
              ? (ia(ys(c, o), s, a),
                ud(s, n, t.length),
                t.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                r && (c.providerIndexes += 1048576),
                e.push(h),
                o.push(h))
              : ((e[g] = h), (o[g] = h));
          } else {
            const h = dd(a, t, u + f, d),
              g = dd(a, t, u, u + f),
              m = h >= 0 && e[h],
              v = g >= 0 && e[g];
            if ((r && !v) || (!r && !m)) {
              ia(ys(c, o), s, a);
              const y = (function RT(n, t, e, i, r) {
                const s = new ms(n, e, p);
                return (
                  (s.multi = []),
                  (s.index = t),
                  (s.componentProviders = 0),
                  Ny(s, r, i && !e),
                  s
                );
              })(r ? OT : FT, e.length, r, i, l);
              !r && v && (e[g].providerFactory = y),
                ud(s, n, t.length, 0),
                t.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                r && (c.providerIndexes += 1048576),
                e.push(y),
                o.push(y);
            } else ud(s, n, h > -1 ? h : g, Ny(e[r ? g : h], l, !r && i));
            !r && i && v && e[g].componentProviders++;
          }
        }
      }
      function ud(n, t, e, i) {
        const r = Mr(t),
          s = (function sS(n) {
            return !!n.useClass;
          })(t);
        if (r || s) {
          const l = (s ? K(t.useClass) : t).prototype.ngOnDestroy;
          if (l) {
            const c = n.destroyHooks || (n.destroyHooks = []);
            if (!r && t.multi) {
              const u = c.indexOf(e);
              -1 === u ? c.push(e, [i, l]) : c[u + 1].push(i, l);
            } else c.push(e, l);
          }
        }
      }
      function Ny(n, t, e) {
        return e && n.componentProviders++, n.multi.push(t) - 1;
      }
      function dd(n, t, e, i) {
        for (let r = e; r < i; r++) if (t[r] === n) return r;
        return -1;
      }
      function FT(n, t, e, i) {
        return fd(this.multi, []);
      }
      function OT(n, t, e, i) {
        const r = this.multi;
        let s;
        if (this.providerFactory) {
          const o = this.providerFactory.componentProviders,
            a = vs(e, e[1], this.providerFactory.index, i);
          (s = a.slice(0, o)), fd(r, s);
          for (let l = o; l < a.length; l++) s.push(a[l]);
        } else (s = []), fd(r, s);
        return s;
      }
      function fd(n, t) {
        for (let e = 0; e < n.length; e++) t.push((0, n[e])());
        return t;
      }
      function ue(n, t = []) {
        return e => {
          e.providersResolver = (i, r) =>
            (function TT(n, t, e) {
              const i = ne();
              if (i.firstCreatePass) {
                const r = on(n);
                cd(e, i.data, i.blueprint, r, !0),
                  cd(t, i.data, i.blueprint, r, !1);
              }
            })(i, r ? r(n) : n, t);
        };
      }
      class Ly {}
      class NT {
        resolveComponentFactory(t) {
          throw (function PT(n) {
            const t = Error(
              `No component factory found for ${fe(
                n,
              )}. Did you add it to @NgModule.entryComponents?`,
            );
            return (t.ngComponent = n), t;
          })(t);
        }
      }
      let Pi = (() => {
        class n {}
        return (n.NULL = new NT()), n;
      })();
      function LT() {
        return $r(ze(), C());
      }
      function $r(n, t) {
        return new j(St(n, t));
      }
      let j = (() => {
        class n {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (n.__NG_ELEMENT_ID__ = LT), n;
      })();
      function VT(n) {
        return n instanceof j ? n.nativeElement : n;
      }
      class Ws {}
      let Gn = (() => {
          class n {}
          return (
            (n.__NG_ELEMENT_ID__ = () =>
              (function HT() {
                const n = C(),
                  e = It(ze().index, n);
                return (function BT(n) {
                  return n[q];
                })(yn(e) ? e : n);
              })()),
            n
          );
        })(),
        jT = (() => {
          class n {}
          return (
            (n.ɵprov = E({token: n, providedIn: 'root', factory: () => null})),
            n
          );
        })();
      class ai {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const GT = new ai('13.3.12'),
        hd = {};
      function Ra(n, t, e, i, r = !1) {
        for (; null !== e; ) {
          const s = t[e.index];
          if ((null !== s && i.push(Ve(s)), sn(s)))
            for (let a = 10; a < s.length; a++) {
              const l = s[a],
                c = l[1].firstChild;
              null !== c && Ra(l[1], l, c, i);
            }
          const o = e.type;
          if (8 & o) Ra(n, t, e.child, i);
          else if (32 & o) {
            const a = eu(e, t);
            let l;
            for (; (l = a()); ) i.push(l);
          } else if (16 & o) {
            const a = Pg(t, e);
            if (Array.isArray(a)) i.push(...a);
            else {
              const l = Ts(t[16]);
              Ra(l[1], l, a, i, !0);
            }
          }
          e = r ? e.projectionNext : e.next;
        }
        return i;
      }
      class qs {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return Ra(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (sn(t)) {
              const e = t[8],
                i = e ? e.indexOf(this) : -1;
              i > -1 && (su(t, i), sa(e, i));
            }
            this._attachedToViewContainer = !1;
          }
          Mg(this._lView[1], this._lView);
        }
        onDestroy(t) {
          bm(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Vu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          !(function Hu(n, t, e) {
            const i = t[10];
            i.begin && i.begin();
            try {
              Er(n, t, n.template, e);
            } catch (r) {
              throw (Rm(t, r), r);
            } finally {
              i.end && i.end();
            }
          })(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new T(902, '');
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function iM(n, t) {
              Fs(n, t, t[q], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new T(902, '');
          this._appRef = t;
        }
      }
      class $T extends qs {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Im(this._view);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class By extends Pi {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = tt(t);
          return new pd(e, this.ngModule);
        }
      }
      function Hy(n) {
        const t = [];
        for (let e in n)
          n.hasOwnProperty(e) && t.push({propName: n[e], templateName: e});
        return t;
      }
      class pd extends Ly {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = (function fA(n) {
              return n.map(dA).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return Hy(this.componentDef.inputs);
        }
        get outputs() {
          return Hy(this.componentDef.outputs);
        }
        create(t, e, i, r) {
          const s = (r = r || this.ngModule)
              ? (function zT(n, t) {
                  return {
                    get: (e, i, r) => {
                      const s = n.get(e, hd, r);
                      return s !== hd || i === hd ? s : t.get(e, i, r);
                    },
                  };
                })(t, r.injector)
              : t,
            o = s.get(Ws, Ip),
            a = s.get(jT, null),
            l = o.createRenderer(null, this.componentDef),
            c = this.componentDef.selectors[0][0] || 'div',
            u = i
              ? (function vm(n, t, e) {
                  if (Re(n)) return n.selectRootElement(t, e === nn.ShadowDom);
                  let i = 'string' == typeof t ? n.querySelector(t) : t;
                  return (i.textContent = ''), i;
                })(l, i, this.componentDef.encapsulation)
              : ru(
                  o.createRenderer(null, this.componentDef),
                  c,
                  (function UT(n) {
                    const t = n.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(c),
                ),
            d = this.componentDef.onPush ? 576 : 528,
            f = (function Zm(n, t) {
              return {
                components: [],
                scheduler: n || JM,
                clean: QA,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            h = va(0, null, null, 1, 0, null, null, null, null, null),
            g = Ps(null, h, f, d, null, null, o, l, a, s);
          let m, v;
          Ko(g);
          try {
            const y = (function Ym(n, t, e, i, r, s) {
              const o = e[1];
              e[20] = n;
              const l = wr(o, 20, 2, '#host', null),
                c = (l.mergedAttrs = t.hostAttrs);
              null !== c &&
                (Ca(l, c, !0),
                null !== n &&
                  (Jo(r, n, c),
                  null !== l.classes && du(r, n, l.classes),
                  null !== l.styles && Lg(r, n, l.styles)));
              const u = i.createRenderer(n, t),
                d = Ps(
                  e,
                  _m(t),
                  null,
                  t.onPush ? 64 : 16,
                  e[20],
                  l,
                  i,
                  u,
                  s || null,
                  null,
                );
              return (
                o.firstCreatePass &&
                  (ia(ys(l, e), o, t.type), xm(o, l), Mm(l, e.length, 1)),
                ba(e, d),
                (e[20] = d)
              );
            })(u, this.componentDef, g, o, l);
            if (u)
              if (i) Jo(l, u, ['ng-version', GT.full]);
              else {
                const {attrs: _, classes: D} = (function hA(n) {
                  const t = [],
                    e = [];
                  let i = 1,
                    r = 2;
                  for (; i < n.length; ) {
                    let s = n[i];
                    if ('string' == typeof s)
                      2 === r
                        ? '' !== s && t.push(s, n[++i])
                        : 8 === r && e.push(s);
                    else {
                      if (!an(r)) break;
                      r = s;
                    }
                    i++;
                  }
                  return {attrs: t, classes: e};
                })(this.componentDef.selectors[0]);
                _ && Jo(l, u, _), D && D.length > 0 && du(l, u, D.join(' '));
              }
            if (((v = Sc(h, 20)), void 0 !== e)) {
              const _ = (v.projection = []);
              for (let D = 0; D < this.ngContentSelectors.length; D++) {
                const O = e[D];
                _.push(null != O ? Array.from(O) : null);
              }
            }
            (m = (function Qm(n, t, e, i, r) {
              const s = e[1],
                o = (function kA(n, t, e) {
                  const i = ze();
                  n.firstCreatePass &&
                    (e.providersResolver && e.providersResolver(e),
                    Am(n, i, t, Dr(n, t, 1, null), e));
                  const r = vs(t, n, i.directiveStart, i);
                  ot(r, t);
                  const s = St(i, t);
                  return s && ot(s, t), r;
                })(s, e, t);
              if (
                (i.components.push(o),
                (n[8] = o),
                r && r.forEach(l => l(o, t)),
                t.contentQueries)
              ) {
                const l = ze();
                t.contentQueries(1, o, l.directiveStart);
              }
              const a = ze();
              return (
                !s.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (ni(a.index),
                  Dm(e[1], a, 0, a.directiveStart, a.directiveEnd, t),
                  Em(t, o)),
                o
              );
            })(y, this.componentDef, g, f, [mS])),
              Ns(h, g, null);
          } finally {
            Yo();
          }
          return new qT(this.componentType, m, $r(v, g), g, v);
        }
      }
      class qT extends class kT {} {
        constructor(t, e, i, r, s) {
          super(),
            (this.location = i),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new $T(r)),
            (this.componentType = t);
        }
        get injector() {
          return new fr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      class Ur {}
      const zr = new Map();
      class $y extends Ur {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new By(this));
          const i = Wt(t);
          (this._bootstrapComponents = Dn(i.bootstrap)),
            (this._r3Injector = Vm(
              t,
              e,
              [
                {provide: Ur, useValue: this},
                {provide: Pi, useValue: this.componentFactoryResolver},
              ],
              fe(t),
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = nt.THROW_IF_NOT_FOUND, i = W.Default) {
          return t === nt || t === Ur || t === Gu
            ? this
            : this._r3Injector.get(t, e, i);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach(e => e()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class gd extends class YT {} {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Wt(t) &&
              (function QT(n) {
                const t = new Set();
                !(function e(i) {
                  const r = Wt(i, !0),
                    s = r.id;
                  null !== s &&
                    ((function jy(n, t, e) {
                      if (t && t !== e)
                        throw new Error(
                          `Duplicate module registered for ${n} - ${fe(
                            t,
                          )} vs ${fe(t.name)}`,
                        );
                    })(s, zr.get(s), i),
                    zr.set(s, i));
                  const o = Dn(r.imports);
                  for (const a of o) t.has(a) || (t.add(a), e(a));
                })(n);
              })(t);
        }
        create(t) {
          return new $y(this.moduleType, t);
        }
      }
      function Ks(n, t, e, i) {
        return (function Uy(n, t, e, i, r, s) {
          const o = t + e;
          return at(n, o, r)
            ? (function xn(n, t, e) {
                return (n[t] = e);
              })(n, o + 1, s ? i.call(s, r) : i(r))
            : (function Ys(n, t) {
                const e = n[t];
                return e === U ? void 0 : e;
              })(n, o + 1);
        })(
          C(),
          (function gt() {
            const n = $.lFrame;
            let t = n.bindingRootIndex;
            return (
              -1 === t && (t = n.bindingRootIndex = n.tView.bindingStartIndex),
              t
            );
          })(),
          n,
          t,
          e,
          i,
        );
      }
      function md(n) {
        return t => {
          setTimeout(n, void 0, t);
        };
      }
      const ce = class hF extends de {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, i) {
          var r, s, o;
          let a = t,
            l = e || (() => null),
            c = i;
          if (t && 'object' == typeof t) {
            const d = t;
            (a = null === (r = d.next) || void 0 === r ? void 0 : r.bind(d)),
              (l = null === (s = d.error) || void 0 === s ? void 0 : s.bind(d)),
              (c =
                null === (o = d.complete) || void 0 === o ? void 0 : o.bind(d));
          }
          this.__isAsync && ((l = md(l)), a && (a = md(a)), c && (c = md(c)));
          const u = super.subscribe({next: a, error: l, complete: c});
          return t instanceof Le && t.add(u), u;
        }
      };
      function pF() {
        return this._results[Ar()]();
      }
      class Zs {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const e = Ar(),
            i = Zs.prototype;
          i[e] || (i[e] = pF);
        }
        get changes() {
          return this._changes || (this._changes = new ce());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, e) {
          const i = this;
          i.dirty = !1;
          const r = Yt(t);
          (this._changesDetected = !(function v0(n, t, e) {
            if (n.length !== t.length) return !1;
            for (let i = 0; i < n.length; i++) {
              let r = n[i],
                s = t[i];
              if ((e && ((r = e(r)), (s = e(s))), s !== r)) return !1;
            }
            return !0;
          })(i._results, r, e)) &&
            ((i._results = r),
            (i.length = r.length),
            (i.last = r[this.length - 1]),
            (i.first = r[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      let Sn = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = _F), n;
      })();
      const gF = Sn,
        mF = class extends gF {
          constructor(t, e, i) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = i);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              i = Ps(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null,
              );
            i[17] = this._declarationLView[this._declarationTContainer.index];
            const s = this._declarationLView[19];
            return (
              null !== s && (i[19] = s.createEmbeddedView(e)),
              Ns(e, i, t),
              new qs(i)
            );
          }
        };
      function _F() {
        return ka(ze(), C());
      }
      function ka(n, t) {
        return 4 & n.type ? new mF(t, n, $r(n, t)) : null;
      }
      let fn = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = yF), n;
      })();
      function yF() {
        return Zy(ze(), C());
      }
      const vF = fn,
        Yy = class extends vF {
          constructor(t, e, i) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = i);
          }
          get element() {
            return $r(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new fr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = na(this._hostTNode, this._hostLView);
            if (Wp(t)) {
              const e = dr(t, this._hostLView),
                i = ur(t);
              return new fr(e[1].data[i + 8], e);
            }
            return new fr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = Qy(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, e, i) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, i), r;
          }
          createComponent(t, e, i, r, s) {
            const o =
              t &&
              !(function ws(n) {
                return 'function' == typeof n;
              })(t);
            let a;
            if (o) a = e;
            else {
              const d = e || {};
              (a = d.index),
                (i = d.injector),
                (r = d.projectableNodes),
                (s = d.ngModuleRef);
            }
            const l = o ? t : new pd(tt(t)),
              c = i || this.parentInjector;
            if (!s && null == l.ngModule) {
              const f = (o ? c : this.parentInjector).get(Ur, null);
              f && (s = f);
            }
            const u = l.create(c, r, void 0, s);
            return this.insert(u.hostView, a), u;
          }
          insert(t, e) {
            const i = t._lView,
              r = i[1];
            if (
              (function Hx(n) {
                return sn(n[3]);
              })(i)
            ) {
              const u = this.indexOf(t);
              if (-1 !== u) this.detach(u);
              else {
                const d = i[3],
                  f = new Yy(d, d[6], d[3]);
                f.detach(f.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              o = this._lContainer;
            !(function sM(n, t, e, i) {
              const r = 10 + i,
                s = e.length;
              i > 0 && (e[r - 1][4] = t),
                i < s - 10
                  ? ((t[4] = e[r]), ng(e, 10 + i, t))
                  : (e.push(t), (t[4] = null)),
                (t[3] = e);
              const o = t[17];
              null !== o &&
                e !== o &&
                (function oM(n, t) {
                  const e = n[9];
                  t[16] !== t[3][3][16] && (n[2] = !0),
                    null === e ? (n[9] = [t]) : e.push(t);
                })(o, t);
              const a = t[19];
              null !== a && a.insertView(n), (t[2] |= 128);
            })(r, i, o, s);
            const a = lu(s, o),
              l = i[q],
              c = ca(l, o[7]);
            return (
              null !== c &&
                (function nM(n, t, e, i, r, s) {
                  (i[0] = r), (i[6] = t), Fs(n, i, e, 1, r, s);
                })(r, o[6], l, i, c, a),
              t.attachToViewContainerRef(),
              ng(_d(o), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = Qy(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              i = su(this._lContainer, e);
            i && (sa(_d(this._lContainer), e), Mg(i[1], i));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              i = su(this._lContainer, e);
            return i && null != sa(_d(this._lContainer), e) ? new qs(i) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function Qy(n) {
        return n[8];
      }
      function _d(n) {
        return n[8] || (n[8] = []);
      }
      function Zy(n, t) {
        let e;
        const i = t[n.index];
        if (sn(i)) e = i;
        else {
          let r;
          if (8 & n.type) r = Ve(i);
          else {
            const s = t[q];
            r = s.createComment('');
            const o = St(n, t);
            Ii(
              s,
              ca(s, o),
              r,
              (function uM(n, t) {
                return Re(n) ? n.nextSibling(t) : t.nextSibling;
              })(s, o),
              !1,
            );
          }
          (t[n.index] = e = Sm(i, t, r, n)), ba(t, e);
        }
        return new Yy(e, n, t);
      }
      class yd {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new yd(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class vd {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const i =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let s = 0; s < i; s++) {
              const o = e.getByIndex(s);
              r.push(this.queries[o.indexInDeclarationView].clone());
            }
            return new vd(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== nv(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Xy {
        constructor(t, e, i = null) {
          (this.predicate = t), (this.flags = e), (this.read = i);
        }
      }
      class bd {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let i = 0; i < this.queries.length; i++)
            this.queries[i].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let i = 0; i < this.length; i++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(i).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = i),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new bd(e) : null;
        }
        template(t, e) {
          for (let i = 0; i < this.queries.length; i++)
            this.queries[i].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Cd {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new Cd(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const e = this._declarationNodeIndex;
            let i = t.parent;
            for (; null !== i && 8 & i.type && i.index !== e; ) i = i.parent;
            return e === (null !== i ? i.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const i = this.metadata.predicate;
          if (Array.isArray(i))
            for (let r = 0; r < i.length; r++) {
              const s = i[r];
              this.matchTNodeWithReadOption(t, e, wF(e, s)),
                this.matchTNodeWithReadOption(t, e, ra(e, t, s, !1, !1));
            }
          else
            i === Sn
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, ra(e, t, i, !1, !1));
        }
        matchTNodeWithReadOption(t, e, i) {
          if (null !== i) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === j || r === fn || (r === Sn && 4 & e.type))
                this.addMatch(e.index, -2);
              else {
                const s = ra(e, t, r, !1, !1);
                null !== s && this.addMatch(e.index, s);
              }
            else this.addMatch(e.index, i);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function wF(n, t) {
        const e = n.localNames;
        if (null !== e)
          for (let i = 0; i < e.length; i += 2) if (e[i] === t) return e[i + 1];
        return null;
      }
      function EF(n, t, e, i) {
        return -1 === e
          ? (function DF(n, t) {
              return 11 & n.type ? $r(n, t) : 4 & n.type ? ka(n, t) : null;
            })(t, n)
          : -2 === e
          ? (function xF(n, t, e) {
              return e === j
                ? $r(t, n)
                : e === Sn
                ? ka(t, n)
                : e === fn
                ? Zy(t, n)
                : void 0;
            })(n, t, i)
          : vs(n, n[1], e, t);
      }
      function Jy(n, t, e, i) {
        const r = t[19].queries[i];
        if (null === r.matches) {
          const s = n.data,
            o = e.matches,
            a = [];
          for (let l = 0; l < o.length; l += 2) {
            const c = o[l];
            a.push(c < 0 ? null : EF(t, s[c], o[l + 1], e.metadata.read));
          }
          r.matches = a;
        }
        return r.matches;
      }
      function wd(n, t, e, i) {
        const r = n.queries.getByIndex(e),
          s = r.matches;
        if (null !== s) {
          const o = Jy(n, t, r, e);
          for (let a = 0; a < s.length; a += 2) {
            const l = s[a];
            if (l > 0) i.push(o[a / 2]);
            else {
              const c = s[a + 1],
                u = t[-l];
              for (let d = 10; d < u.length; d++) {
                const f = u[d];
                f[17] === f[3] && wd(f[1], f, c, i);
              }
              if (null !== u[9]) {
                const d = u[9];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  wd(h[1], h, c, i);
                }
              }
            }
          }
        }
        return i;
      }
      function Be(n) {
        const t = C(),
          e = ne(),
          i = Lp();
        Pc(i + 1);
        const r = nv(e, i);
        if (n.dirty && Tp(t) === (2 == (2 & r.metadata.flags))) {
          if (null === r.matches) n.reset([]);
          else {
            const s = r.crossesNgTemplate ? wd(e, t, i, []) : Jy(e, t, r, i);
            n.reset(s, VT), n.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function li(n, t, e) {
        const i = ne();
        i.firstCreatePass &&
          (tv(i, new Xy(n, t, e), -1),
          2 == (2 & t) && (i.staticViewQueries = !0)),
          ev(i, C(), t);
      }
      function Lt(n, t, e, i) {
        const r = ne();
        if (r.firstCreatePass) {
          const s = ze();
          tv(r, new Xy(t, e, i), s.index),
            (function AF(n, t) {
              const e = n.contentQueries || (n.contentQueries = []);
              t !== (e.length ? e[e.length - 1] : -1) &&
                e.push(n.queries.length - 1, t);
            })(r, n),
            2 == (2 & e) && (r.staticContentQueries = !0);
        }
        ev(r, C(), e);
      }
      function He() {
        return (function MF(n, t) {
          return n[19].queries[t].queryList;
        })(C(), Lp());
      }
      function ev(n, t, e) {
        const i = new Zs(4 == (4 & e));
        bm(n, t, i, i.destroy),
          null === t[19] && (t[19] = new vd()),
          t[19].queries.push(new yd(i));
      }
      function tv(n, t, e) {
        null === n.queries && (n.queries = new bd()),
          n.queries.track(new Cd(t, e));
      }
      function nv(n, t) {
        return n.queries.getByIndex(t);
      }
      function La(...n) {}
      const vv = new I('Application Initializer');
      let Sd = (() => {
        class n {
          constructor(e) {
            (this.appInits = e),
              (this.resolve = La),
              (this.reject = La),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((i, r) => {
                (this.resolve = i), (this.reject = r);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const e = [],
              i = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let r = 0; r < this.appInits.length; r++) {
                const s = this.appInits[r]();
                if (xa(s)) e.push(s);
                else if (b_(s)) {
                  const o = new Promise((a, l) => {
                    s.subscribe({complete: a, error: l});
                  });
                  e.push(o);
                }
              }
            Promise.all(e)
              .then(() => {
                i();
              })
              .catch(r => {
                this.reject(r);
              }),
              0 === e.length && i(),
              (this.initialized = !0);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(vv, 8));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const Js = new I('AppId', {
        providedIn: 'root',
        factory: function bv() {
          return `${Id()}${Id()}${Id()}`;
        },
      });
      function Id() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Cv = new I('Platform Initializer'),
        Vt = new I('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        wv = new I('appBootstrapListener'),
        $n = new I('LocaleId', {
          providedIn: 'root',
          factory: () =>
            yr($n, W.Optional | W.SkipSelf) ||
            (function zF() {
              return (
                ('undefined' != typeof $localize && $localize.locale) || Sa
              );
            })(),
        }),
        YF = (() => Promise.resolve(0))();
      function Td(n) {
        'undefined' == typeof Zone
          ? YF.then(() => {
              n && n.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', n);
      }
      class se {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
          shouldCoalesceRunChangeDetection: i = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ce(!1)),
            (this.onMicrotaskEmpty = new ce(!1)),
            (this.onStable = new ce(!1)),
            (this.onError = new ce(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !i && e),
            (r.shouldCoalesceRunChangeDetection = i),
            (r.lastRequestAnimationFrameId = -1),
            (r.nativeRequestAnimationFrame = (function QF() {
              let n = pe.requestAnimationFrame,
                t = pe.cancelAnimationFrame;
              if ('undefined' != typeof Zone && n && t) {
                const e = n[Zone.__symbol__('OriginalDelegate')];
                e && (n = e);
                const i = t[Zone.__symbol__('OriginalDelegate')];
                i && (t = i);
              }
              return {
                nativeRequestAnimationFrame: n,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function JF(n) {
              const t = () => {
                !(function XF(n) {
                  n.isCheckStableRunning ||
                    -1 !== n.lastRequestAnimationFrameId ||
                    ((n.lastRequestAnimationFrameId =
                      n.nativeRequestAnimationFrame.call(pe, () => {
                        n.fakeTopEventTask ||
                          (n.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (n.lastRequestAnimationFrameId = -1),
                                Od(n),
                                (n.isCheckStableRunning = !0),
                                Fd(n),
                                (n.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {},
                          )),
                          n.fakeTopEventTask.invoke();
                      })),
                    Od(n));
                })(n);
              };
              n._inner = n._inner.fork({
                name: 'angular',
                properties: {isAngularZone: !0},
                onInvokeTask: (e, i, r, s, o, a) => {
                  try {
                    return Dv(n), e.invokeTask(r, s, o, a);
                  } finally {
                    ((n.shouldCoalesceEventChangeDetection &&
                      'eventTask' === s.type) ||
                      n.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Ev(n);
                  }
                },
                onInvoke: (e, i, r, s, o, a, l) => {
                  try {
                    return Dv(n), e.invoke(r, s, o, a, l);
                  } finally {
                    n.shouldCoalesceRunChangeDetection && t(), Ev(n);
                  }
                },
                onHasTask: (e, i, r, s) => {
                  e.hasTask(r, s),
                    i === r &&
                      ('microTask' == s.change
                        ? ((n._hasPendingMicrotasks = s.microTask),
                          Od(n),
                          Fd(n))
                        : 'macroTask' == s.change &&
                          (n.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, i, r, s) => (
                  e.handleError(r, s),
                  n.runOutsideAngular(() => n.onError.emit(s)),
                  !1
                ),
              });
            })(r);
        }
        static isInAngularZone() {
          return (
            'undefined' != typeof Zone &&
            !0 === Zone.current.get('isAngularZone')
          );
        }
        static assertInAngularZone() {
          if (!se.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (se.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, i) {
          return this._inner.run(t, e, i);
        }
        runTask(t, e, i, r) {
          const s = this._inner,
            o = s.scheduleEventTask('NgZoneEvent: ' + r, t, ZF, La, La);
          try {
            return s.runTask(o, e, i);
          } finally {
            s.cancelTask(o);
          }
        }
        runGuarded(t, e, i) {
          return this._inner.runGuarded(t, e, i);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const ZF = {};
      function Fd(n) {
        if (0 == n._nesting && !n.hasPendingMicrotasks && !n.isStable)
          try {
            n._nesting++, n.onMicrotaskEmpty.emit(null);
          } finally {
            if ((n._nesting--, !n.hasPendingMicrotasks))
              try {
                n.runOutsideAngular(() => n.onStable.emit(null));
              } finally {
                n.isStable = !0;
              }
          }
      }
      function Od(n) {
        n.hasPendingMicrotasks = !!(
          n._hasPendingMicrotasks ||
          ((n.shouldCoalesceEventChangeDetection ||
            n.shouldCoalesceRunChangeDetection) &&
            -1 !== n.lastRequestAnimationFrameId)
        );
      }
      function Dv(n) {
        n._nesting++,
          n.isStable && ((n.isStable = !1), n.onUnstable.emit(null));
      }
      function Ev(n) {
        n._nesting--, Fd(n);
      }
      class eO {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ce()),
            (this.onMicrotaskEmpty = new ce()),
            (this.onStable = new ce()),
            (this.onError = new ce());
        }
        run(t, e, i) {
          return t.apply(e, i);
        }
        runGuarded(t, e, i) {
          return t.apply(e, i);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, i, r) {
          return t.apply(e, i);
        }
      }
      let Rd = (() => {
          class n {
            constructor(e) {
              (this._ngZone = e),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                e.run(() => {
                  this.taskTrackingZone =
                    'undefined' == typeof Zone
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      se.assertNotInAngularZone(),
                        Td(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Td(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let e = this._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  i =>
                    !i.updateCb ||
                    !i.updateCb(e) ||
                    (clearTimeout(i.timeoutId), !1),
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(e => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data,
                  }))
                : [];
            }
            addCallback(e, i, r) {
              let s = -1;
              i &&
                i > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    o => o.timeoutId !== s,
                  )),
                    e(this._didWork, this.getPendingTasks());
                }, i)),
                this._callbacks.push({doneCb: e, timeoutId: s, updateCb: r});
            }
            whenStable(e, i, r) {
              if (r && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              this.addCallback(e, i, r), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(e, i, r) {
              return [];
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(se));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        tO = (() => {
          class n {
            constructor() {
              (this._applications = new Map()), kd.addToWindow(this);
            }
            registerApplication(e, i) {
              this._applications.set(e, i);
            }
            unregisterApplication(e) {
              this._applications.delete(e);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(e) {
              return this._applications.get(e) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(e, i = !0) {
              return kd.findTestabilityInTree(this, e, i);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'platform'})),
            n
          );
        })();
      class nO {
        addToWindow(t) {}
        findTestabilityInTree(t, e, i) {
          return null;
        }
      }
      let kd = new nO(),
        Ni = null;
      const xv = new I('AllowMultipleToken'),
        Mv = new I('PlatformOnDestroy');
      function Av(n, t, e = []) {
        const i = `Platform: ${t}`,
          r = new I(i);
        return (s = []) => {
          let o = Pd();
          if (!o || o.injector.get(xv, !1)) {
            const a = [...e, ...s, {provide: r, useValue: !0}];
            n
              ? n(a)
              : (function oO(n) {
                  if (Ni && !Ni.get(xv, !1)) throw new T(400, '');
                  Ni = n;
                  const t = n.get(Sv),
                    e = n.get(Cv, null);
                  e && e.forEach(i => i());
                })(
                  (function lO(n = [], t) {
                    return nt.create({
                      name: t,
                      providers: [
                        {provide: $u, useValue: 'platform'},
                        {provide: Mv, useValue: () => (Ni = null)},
                        ...n,
                      ],
                    });
                  })(a, i),
                );
          }
          return (function aO(n) {
            const t = Pd();
            if (!t) throw new T(401, '');
            return t;
          })();
        };
      }
      function Pd() {
        var n;
        return null !== (n = null == Ni ? void 0 : Ni.get(Sv)) && void 0 !== n
          ? n
          : null;
      }
      let Sv = (() => {
        class n {
          constructor(e) {
            (this._injector = e),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, i) {
            const a = (function cO(n, t) {
                let e;
                return (
                  (e =
                    'noop' === n
                      ? new eO()
                      : ('zone.js' === n ? void 0 : n) ||
                        new se({
                          enableLongStackTrace: !1,
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  e
                );
              })(i ? i.ngZone : void 0, {
                ngZoneEventCoalescing: (i && i.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (i && i.ngZoneRunCoalescing) || !1,
              }),
              l = [{provide: se, useValue: a}];
            return a.run(() => {
              const c = nt.create({
                  providers: l,
                  parent: this.injector,
                  name: e.moduleType.name,
                }),
                u = e.create(c),
                d = u.injector.get(ri, null);
              if (!d) throw new T(402, '');
              return (
                a.runOutsideAngular(() => {
                  const f = a.onError.subscribe({
                    next: h => {
                      d.handleError(h);
                    },
                  });
                  u.onDestroy(() => {
                    Nd(this._modules, u), f.unsubscribe();
                  });
                }),
                (function uO(n, t, e) {
                  try {
                    const i = e();
                    return xa(i)
                      ? i.catch(r => {
                          throw (
                            (t.runOutsideAngular(() => n.handleError(r)), r)
                          );
                        })
                      : i;
                  } catch (i) {
                    throw (t.runOutsideAngular(() => n.handleError(i)), i);
                  }
                })(d, a, () => {
                  const f = u.injector.get(Sd);
                  return (
                    f.runInitializers(),
                    f.donePromise.then(
                      () => (
                        (function BI(n) {
                          Mt(n, 'Expected localeId to be defined'),
                            'string' == typeof n &&
                              (fy = n.toLowerCase().replace(/_/g, '-'));
                        })(u.injector.get($n, Sa) || Sa),
                        this._moduleDoBootstrap(u),
                        u
                      ),
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(e, i = []) {
            const r = Iv({}, i);
            return (function rO(n, t, e) {
              const i = new gd(e);
              return Promise.resolve(i);
            })(0, 0, e).then(s => this.bootstrapModuleFactory(s, r));
          }
          _moduleDoBootstrap(e) {
            const i = e.injector.get(Va);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach(r => i.bootstrap(r));
            else {
              if (!e.instance.ngDoBootstrap) throw new T(403, '');
              e.instance.ngDoBootstrap(i);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new T(404, '');
            this._modules.slice().forEach(i => i.destroy()),
              this._destroyListeners.forEach(i => i());
            const e = this._injector.get(Mv, null);
            null == e || e(), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(nt));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'platform'})),
          n
        );
      })();
      function Iv(n, t) {
        return Array.isArray(t)
          ? t.reduce(Iv, n)
          : Object.assign(Object.assign({}, n), t);
      }
      let Va = (() => {
        class n {
          constructor(e, i, r, s) {
            (this._zone = e),
              (this._injector = i),
              (this._exceptionHandler = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const o = new Me(l => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    l.next(this._stable), l.complete();
                  });
              }),
              a = new Me(l => {
                let c;
                this._zone.runOutsideAngular(() => {
                  c = this._zone.onStable.subscribe(() => {
                    se.assertNotInAngularZone(),
                      Td(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), l.next(!0));
                      });
                  });
                });
                const u = this._zone.onUnstable.subscribe(() => {
                  se.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        l.next(!1);
                      }));
                });
                return () => {
                  c.unsubscribe(), u.unsubscribe();
                };
              });
            this.isStable = kn(o, a.pipe(hp()));
          }
          bootstrap(e, i) {
            if (!this._initStatus.done) throw new T(405, '');
            let r;
            (r =
              e instanceof Ly
                ? e
                : this._injector.get(Pi).resolveComponentFactory(e)),
              this.componentTypes.push(r.componentType);
            const s = (function sO(n) {
                return n.isBoundToModule;
              })(r)
                ? void 0
                : this._injector.get(Ur),
              a = r.create(nt.NULL, [], i || r.selector, s),
              l = a.location.nativeElement,
              c = a.injector.get(Rd, null),
              u = c && a.injector.get(tO);
            return (
              c && u && u.registerApplication(l, c),
              a.onDestroy(() => {
                this.detachView(a.hostView),
                  Nd(this.components, a),
                  u && u.unregisterApplication(l);
              }),
              this._loadComponent(a),
              a
            );
          }
          tick() {
            if (this._runningTick) throw new T(101, '');
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(e),
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(e) {
            const i = e;
            this._views.push(i), i.attachToAppRef(this);
          }
          detachView(e) {
            const i = e;
            Nd(this._views, i), i.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(wv, [])
                .concat(this._bootstrapListeners)
                .forEach(r => r(e));
          }
          ngOnDestroy() {
            this._views.slice().forEach(e => e.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(se), b(nt), b(ri), b(Sd));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      function Nd(n, t) {
        const e = n.indexOf(t);
        e > -1 && n.splice(e, 1);
      }
      let Fv = !0,
        Li = (() => {
          class n {}
          return (n.__NG_ELEMENT_ID__ = hO), n;
        })();
      function hO(n) {
        return (function pO(n, t, e) {
          if (Uo(n) && !e) {
            const i = It(n.index, t);
            return new qs(i, i);
          }
          return 47 & n.type ? new qs(t[16], t) : null;
        })(ze(), C(), 16 == (16 & n));
      }
      class Nv {
        constructor() {}
        supports(t) {
          return Vs(t);
        }
        create(t) {
          return new bO(t);
        }
      }
      const vO = (n, t) => t;
      class bO {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || vO);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            i = this._removalsHead,
            r = 0,
            s = null;
          for (; e || i; ) {
            const o = !i || (e && e.currentIndex < Vv(i, r, s)) ? e : i,
              a = Vv(o, r, s),
              l = o.currentIndex;
            if (o === i) r--, (i = i._nextRemoved);
            else if (((e = e._next), null == o.previousIndex)) r++;
            else {
              s || (s = []);
              const c = a - r,
                u = l - r;
              if (c != u) {
                for (let f = 0; f < c; f++) {
                  const h = f < s.length ? s[f] : (s[f] = 0),
                    g = h + f;
                  u <= g && g < c && (s[f] = h + 1);
                }
                s[o.previousIndex] = u - c;
              }
            }
            a !== l && t(o, a, l);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Vs(t))) throw new T(900, '');
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let r,
            s,
            o,
            e = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++)
              (s = t[a]),
                (o = this._trackByFn(a, s)),
                null !== e && Object.is(e.trackById, o)
                  ? (i && (e = this._verifyReinsertion(e, s, o, a)),
                    Object.is(e.item, s) || this._addIdentityChange(e, s))
                  : ((e = this._mismatch(e, s, o, a)), (i = !0)),
                (e = e._next);
          } else
            (r = 0),
              (function MS(n, t) {
                if (Array.isArray(n))
                  for (let e = 0; e < n.length; e++) t(n[e]);
                else {
                  const e = n[Ar()]();
                  let i;
                  for (; !(i = e.next()).done; ) t(i.value);
                }
              })(t, a => {
                (o = this._trackByFn(r, a)),
                  null !== e && Object.is(e.trackById, o)
                    ? (i && (e = this._verifyReinsertion(e, a, o, r)),
                      Object.is(e.item, a) || this._addIdentityChange(e, a))
                    : ((e = this._mismatch(e, a, o, r)), (i = !0)),
                  (e = e._next),
                  r++;
              }),
              (this.length = r);
          return this._truncate(e), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, i, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(i, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(i, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : (t = this._addAfter(new CO(e, i), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, i, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(i, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, i) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, i),
            this._addToMoves(t, i),
            t
          );
        }
        _moveAfter(t, e, i) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, i),
            this._addToMoves(t, i),
            t
          );
        }
        _addAfter(t, e, i) {
          return (
            this._insertAfter(t, e, i),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, i) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Lv()),
            this._linkedRecords.put(t),
            (t.currentIndex = i),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            i = t._next;
          return (
            null === e ? (this._itHead = i) : (e._next = i),
            null === i ? (this._itTail = e) : (i._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Lv()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class CO {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class wO {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let i;
          for (i = this._head; null !== i; i = i._nextDup)
            if (
              (null === e || e <= i.currentIndex) &&
              Object.is(i.trackById, t)
            )
              return i;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            i = t._nextDup;
          return (
            null === e ? (this._head = i) : (e._nextDup = i),
            null === i ? (this._tail = e) : (i._prevDup = e),
            null === this._head
          );
        }
      }
      class Lv {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let i = this.map.get(e);
          i || ((i = new wO()), this.map.set(e, i)), i.add(t);
        }
        get(t, e) {
          const r = this.map.get(t);
          return r ? r.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Vv(n, t, e) {
        const i = n.previousIndex;
        if (null === i) return i;
        let r = 0;
        return e && i < e.length && (r = e[i]), i + t + r;
      }
      class Bv {
        constructor() {}
        supports(t) {
          return t instanceof Map || Yu(t);
        }
        create() {
          return new DO();
        }
      }
      class DO {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Yu(t))) throw new T(900, '');
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (i, r) => {
              if (e && e.key === r)
                this._maybeAddToChanges(e, i),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const s = this._getOrCreateRecordForKey(r, i);
                e = this._insertBeforeOrAppend(e, s);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let i = e; null !== i; i = i._nextRemoved)
              i === this._mapHead && (this._mapHead = null),
                this._records.delete(i.key),
                (i._nextRemoved = i._next),
                (i.previousValue = i.currentValue),
                (i.currentValue = null),
                (i._prev = null),
                (i._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const i = t._prev;
            return (
              (e._next = t),
              (e._prev = i),
              (t._prev = e),
              i && (i._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const r = this._records.get(t);
            this._maybeAddToChanges(r, e);
            const s = r._prev,
              o = r._next;
            return (
              s && (s._next = o),
              o && (o._prev = s),
              (r._next = null),
              (r._prev = null),
              r
            );
          }
          const i = new EO(t);
          return (
            this._records.set(t, i),
            (i.currentValue = e),
            this._addToAdditions(i),
            i
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach(i => e(t[i], i));
        }
      }
      class EO {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Hv() {
        return new eo([new Nv()]);
      }
      let eo = (() => {
        class n {
          constructor(e) {
            this.factories = e;
          }
          static create(e, i) {
            if (null != i) {
              const r = i.factories.slice();
              e = e.concat(r);
            }
            return new n(e);
          }
          static extend(e) {
            return {
              provide: n,
              useFactory: i => n.create(e, i || Hv()),
              deps: [[n, new As(), new Si()]],
            };
          }
          find(e) {
            const i = this.factories.find(r => r.supports(e));
            if (null != i) return i;
            throw new T(901, '');
          }
        }
        return (n.ɵprov = E({token: n, providedIn: 'root', factory: Hv})), n;
      })();
      function jv() {
        return new Bi([new Bv()]);
      }
      let Bi = (() => {
        class n {
          constructor(e) {
            this.factories = e;
          }
          static create(e, i) {
            if (i) {
              const r = i.factories.slice();
              e = e.concat(r);
            }
            return new n(e);
          }
          static extend(e) {
            return {
              provide: n,
              useFactory: i => n.create(e, i || jv()),
              deps: [[n, new As(), new Si()]],
            };
          }
          find(e) {
            const i = this.factories.find(s => s.supports(e));
            if (i) return i;
            throw new T(901, '');
          }
        }
        return (n.ɵprov = E({token: n, providedIn: 'root', factory: jv})), n;
      })();
      const AO = Av(null, 'core', []);
      let SO = (() => {
          class n {
            constructor(e) {}
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Va));
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({})),
            n
          );
        })(),
        ja = null;
      function In() {
        return ja;
      }
      const ee = new I('DocumentToken');
      let to = (() => {
          class n {
            historyGo(e) {
              throw new Error('Not implemented');
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = E({
              token: n,
              factory: function () {
                return (function OO() {
                  return b(Gv);
                })();
              },
              providedIn: 'platform',
            })),
            n
          );
        })(),
        Gv = (() => {
          class n extends to {
            constructor(e) {
              super(), (this._doc = e), this._init();
            }
            _init() {
              (this.location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return In().getBaseHref(this._doc);
            }
            onPopState(e) {
              const i = In().getGlobalEventTarget(this._doc, 'window');
              return (
                i.addEventListener('popstate', e, !1),
                () => i.removeEventListener('popstate', e)
              );
            }
            onHashChange(e) {
              const i = In().getGlobalEventTarget(this._doc, 'window');
              return (
                i.addEventListener('hashchange', e, !1),
                () => i.removeEventListener('hashchange', e)
              );
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(e) {
              this.location.pathname = e;
            }
            pushState(e, i, r) {
              $v()
                ? this._history.pushState(e, i, r)
                : (this.location.hash = r);
            }
            replaceState(e, i, r) {
              $v()
                ? this._history.replaceState(e, i, r)
                : (this.location.hash = r);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            historyGo(e = 0) {
              this._history.go(e);
            }
            getState() {
              return this._history.state;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee));
            }),
            (n.ɵprov = E({
              token: n,
              factory: function () {
                return (function RO() {
                  return new Gv(b(ee));
                })();
              },
              providedIn: 'platform',
            })),
            n
          );
        })();
      function $v() {
        return !!window.history.pushState;
      }
      function Uv(n, t) {
        if (0 == n.length) return t;
        if (0 == t.length) return n;
        let e = 0;
        return (
          n.endsWith('/') && e++,
          t.startsWith('/') && e++,
          2 == e ? n + t.substring(1) : 1 == e ? n + t : n + '/' + t
        );
      }
      function zv(n) {
        const t = n.match(/#|\?|$/),
          e = (t && t.index) || n.length;
        return n.slice(0, e - ('/' === n[e - 1] ? 1 : 0)) + n.slice(e);
      }
      function Hi(n) {
        return n && '?' !== n[0] ? '?' + n : n;
      }
      let jd = (() => {
        class n {
          historyGo(e) {
            throw new Error('Not implemented');
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = E({
            token: n,
            factory: function () {
              return (function kO(n) {
                const t = b(ee).location;
                return new NO(b(to), (t && t.origin) || '');
              })();
            },
            providedIn: 'root',
          })),
          n
        );
      })();
      const PO = new I('appBaseHref');
      let NO = (() => {
          class n extends jd {
            constructor(e, i) {
              if (
                (super(),
                (this._platformLocation = e),
                (this._removeListenerFns = []),
                null == i && (i = this._platformLocation.getBaseHrefFromDOM()),
                null == i)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.',
                );
              this._baseHref = i;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(e) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(e),
                this._platformLocation.onHashChange(e),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(e) {
              return Uv(this._baseHref, e);
            }
            path(e = !1) {
              const i =
                  this._platformLocation.pathname +
                  Hi(this._platformLocation.search),
                r = this._platformLocation.hash;
              return r && e ? `${i}${r}` : i;
            }
            pushState(e, i, r, s) {
              const o = this.prepareExternalUrl(r + Hi(s));
              this._platformLocation.pushState(e, i, o);
            }
            replaceState(e, i, r, s) {
              const o = this.prepareExternalUrl(r + Hi(s));
              this._platformLocation.replaceState(e, i, o);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(e = 0) {
              var i, r;
              null === (r = (i = this._platformLocation).historyGo) ||
                void 0 === r ||
                r.call(i, e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(to), b(PO, 8));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        Wv = (() => {
          class n {
            constructor(e, i) {
              (this._subject = new ce()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = e);
              const r = this._platformStrategy.getBaseHref();
              (this._platformLocation = i),
                (this._baseHref = zv(qv(r))),
                this._platformStrategy.onPopState(s => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: s.state,
                    type: s.type,
                  });
                });
            }
            path(e = !1) {
              return this.normalize(this._platformStrategy.path(e));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(e, i = '') {
              return this.path() == this.normalize(e + Hi(i));
            }
            normalize(e) {
              return n.stripTrailingSlash(
                (function VO(n, t) {
                  return n && t.startsWith(n) ? t.substring(n.length) : t;
                })(this._baseHref, qv(e)),
              );
            }
            prepareExternalUrl(e) {
              return (
                e && '/' !== e[0] && (e = '/' + e),
                this._platformStrategy.prepareExternalUrl(e)
              );
            }
            go(e, i = '', r = null) {
              this._platformStrategy.pushState(r, '', e, i),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(e + Hi(i)),
                  r,
                );
            }
            replaceState(e, i = '', r = null) {
              this._platformStrategy.replaceState(r, '', e, i),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(e + Hi(i)),
                  r,
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(e = 0) {
              var i, r;
              null === (r = (i = this._platformStrategy).historyGo) ||
                void 0 === r ||
                r.call(i, e);
            }
            onUrlChange(e) {
              this._urlChangeListeners.push(e),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe(i => {
                    this._notifyUrlChangeListeners(i.url, i.state);
                  }));
            }
            _notifyUrlChangeListeners(e = '', i) {
              this._urlChangeListeners.forEach(r => r(e, i));
            }
            subscribe(e, i, r) {
              return this._subject.subscribe({next: e, error: i, complete: r});
            }
          }
          return (
            (n.normalizeQueryParams = Hi),
            (n.joinWithSlash = Uv),
            (n.stripTrailingSlash = zv),
            (n.ɵfac = function (e) {
              return new (e || n)(b(jd), b(to));
            }),
            (n.ɵprov = E({
              token: n,
              factory: function () {
                return (function LO() {
                  return new Wv(b(jd), b(to));
                })();
              },
              providedIn: 'root',
            })),
            n
          );
        })();
      function qv(n) {
        return n.replace(/\/index.html$/, '');
      }
      function nb(n, t) {
        t = encodeURIComponent(t);
        for (const e of n.split(';')) {
          const i = e.indexOf('='),
            [r, s] = -1 == i ? [e, ''] : [e.slice(0, i), e.slice(i + 1)];
          if (r.trim() === t) return decodeURIComponent(s);
        }
        return null;
      }
      let Za = (() => {
        class n {
          constructor(e, i, r, s) {
            (this._iterableDiffers = e),
              (this._keyValueDiffers = i),
              (this._ngEl = r),
              (this._renderer = s),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(e) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                'string' == typeof e ? e.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(e) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof e ? e.split(/\s+/) : e),
              this._rawClass &&
                (Vs(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const e = this._iterableDiffer.diff(this._rawClass);
              e && this._applyIterableChanges(e);
            } else if (this._keyValueDiffer) {
              const e = this._keyValueDiffer.diff(this._rawClass);
              e && this._applyKeyValueChanges(e);
            }
          }
          _applyKeyValueChanges(e) {
            e.forEachAddedItem(i => this._toggleClass(i.key, i.currentValue)),
              e.forEachChangedItem(i =>
                this._toggleClass(i.key, i.currentValue),
              ),
              e.forEachRemovedItem(i => {
                i.previousValue && this._toggleClass(i.key, !1);
              });
          }
          _applyIterableChanges(e) {
            e.forEachAddedItem(i => {
              if ('string' != typeof i.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${fe(
                    i.item,
                  )}`,
                );
              this._toggleClass(i.item, !0);
            }),
              e.forEachRemovedItem(i => this._toggleClass(i.item, !1));
          }
          _applyClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach(i => this._toggleClass(i, !0))
                : Object.keys(e).forEach(i => this._toggleClass(i, !!e[i])));
          }
          _removeClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach(i => this._toggleClass(i, !1))
                : Object.keys(e).forEach(i => this._toggleClass(i, !1)));
          }
          _toggleClass(e, i) {
            (e = e.trim()) &&
              e.split(/\s+/g).forEach(r => {
                i
                  ? this._renderer.addClass(this._ngEl.nativeElement, r)
                  : this._renderer.removeClass(this._ngEl.nativeElement, r);
              });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(eo), p(Bi), p(j), p(Gn));
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [['', 'ngClass', '']],
            inputs: {klass: ['class', 'klass'], ngClass: 'ngClass'},
          })),
          n
        );
      })();
      class wR {
        constructor(t, e, i, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = i),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ib = (() => {
        class n {
          constructor(e, i, r) {
            (this._viewContainer = e),
              (this._template = i),
              (this._differs = r),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(e) {
            (this._ngForOf = e), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(e) {
            this._trackByFn = e;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(e) {
            e && (this._template = e);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const e = this._ngForOf;
              !this._differ &&
                e &&
                (this._differ = this._differs
                  .find(e)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const e = this._differ.diff(this._ngForOf);
              e && this._applyChanges(e);
            }
          }
          _applyChanges(e) {
            const i = this._viewContainer;
            e.forEachOperation((r, s, o) => {
              if (null == r.previousIndex)
                i.createEmbeddedView(
                  this._template,
                  new wR(r.item, this._ngForOf, -1, -1),
                  null === o ? void 0 : o,
                );
              else if (null == o) i.remove(null === s ? void 0 : s);
              else if (null !== s) {
                const a = i.get(s);
                i.move(a, o), rb(a, r);
              }
            });
            for (let r = 0, s = i.length; r < s; r++) {
              const a = i.get(r).context;
              (a.index = r), (a.count = s), (a.ngForOf = this._ngForOf);
            }
            e.forEachIdentityChange(r => {
              rb(i.get(r.currentIndex), r);
            });
          }
          static ngTemplateContextGuard(e, i) {
            return !0;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(fn), p(Sn), p(eo));
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
          })),
          n
        );
      })();
      function rb(n, t) {
        n.context.$implicit = t.item;
      }
      let Xa = (() => {
        class n {
          constructor(e, i) {
            (this._viewContainer = e),
              (this._context = new DR()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = i);
          }
          set ngIf(e) {
            (this._context.$implicit = this._context.ngIf = e),
              this._updateView();
          }
          set ngIfThen(e) {
            sb('ngIfThen', e),
              (this._thenTemplateRef = e),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(e) {
            sb('ngIfElse', e),
              (this._elseTemplateRef = e),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context,
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context,
                  )));
          }
          static ngTemplateContextGuard(e, i) {
            return !0;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(fn), p(Sn));
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [['', 'ngIf', '']],
            inputs: {ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse'},
          })),
          n
        );
      })();
      class DR {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function sb(n, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${n} must be a TemplateRef, but received '${fe(t)}'.`,
          );
      }
      class Zd {
        constructor(t, e) {
          (this._viewContainerRef = t),
            (this._templateRef = e),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(t) {
          t && !this._created
            ? this.create()
            : !t && this._created && this.destroy();
        }
      }
      let ro = (() => {
          class n {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(e) {
              (this._ngSwitch = e),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(e) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(e);
            }
            _matchCase(e) {
              const i = e == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || i),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                i
              );
            }
            _updateDefaultCases(e) {
              if (this._defaultViews && e !== this._defaultUsed) {
                this._defaultUsed = e;
                for (let i = 0; i < this._defaultViews.length; i++)
                  this._defaultViews[i].enforceState(e);
              }
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [['', 'ngSwitch', '']],
              inputs: {ngSwitch: 'ngSwitch'},
            })),
            n
          );
        })(),
        Xd = (() => {
          class n {
            constructor(e, i, r) {
              (this.ngSwitch = r), r._addCase(), (this._view = new Zd(e, i));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase),
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(fn), p(Sn), p(ro, 9));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: {ngSwitchCase: 'ngSwitchCase'},
            })),
            n
          );
        })(),
        ob = (() => {
          class n {
            constructor(e, i, r) {
              r._addDefault(new Zd(e, i));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(fn), p(Sn), p(ro, 9));
            }),
            (n.ɵdir = w({type: n, selectors: [['', 'ngSwitchDefault', '']]})),
            n
          );
        })(),
        lb = (() => {
          class n {
            constructor(e) {
              (this._viewContainerRef = e),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(e) {
              if (e.ngTemplateOutlet) {
                const i = this._viewContainerRef;
                this._viewRef && i.remove(i.indexOf(this._viewRef)),
                  (this._viewRef = this.ngTemplateOutlet
                    ? i.createEmbeddedView(
                        this.ngTemplateOutlet,
                        this.ngTemplateOutletContext,
                      )
                    : null);
              } else
                this._viewRef &&
                  e.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(fn));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: {
                ngTemplateOutletContext: 'ngTemplateOutletContext',
                ngTemplateOutlet: 'ngTemplateOutlet',
              },
              features: [ht],
            })),
            n
          );
        })(),
        so = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({})),
            n
          );
        })();
      const ub = 'browser';
      function ci(n) {
        return n === ub;
      }
      function qr(n) {
        return 'server' === n;
      }
      class fb {}
      class nf extends class QR extends class FO {} {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      } {
        static makeCurrent() {
          !(function TO(n) {
            ja || (ja = n);
          })(new nf());
        }
        onAndCancel(t, e, i) {
          return (
            t.addEventListener(e, i, !1),
            () => {
              t.removeEventListener(e, i, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e
            ? window
            : 'document' === e
            ? t
            : 'body' === e
            ? t.body
            : null;
        }
        getBaseHref(t) {
          const e = (function ZR() {
            return (
              (oo = oo || document.querySelector('base')),
              oo ? oo.getAttribute('href') : null
            );
          })();
          return null == e
            ? null
            : (function XR(n) {
                (Ja = Ja || document.createElement('a')),
                  Ja.setAttribute('href', n);
                const t = Ja.pathname;
                return '/' === t.charAt(0) ? t : `/${t}`;
              })(e);
        }
        resetBaseElement() {
          oo = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return nb(document.cookie, t);
        }
      }
      let Ja,
        oo = null;
      const hb = new I('TRANSITION_ID'),
        ek = [
          {
            provide: vv,
            useFactory: function JR(n, t, e) {
              return () => {
                e.get(Sd).donePromise.then(() => {
                  const i = In(),
                    r = t.querySelectorAll(`style[ng-transition="${n}"]`);
                  for (let s = 0; s < r.length; s++) i.remove(r[s]);
                });
              };
            },
            deps: [hb, ee, nt],
            multi: !0,
          },
        ];
      class rf {
        static init() {
          !(function iO(n) {
            kd = n;
          })(new rf());
        }
        addToWindow(t) {
          (pe.getAngularTestability = (i, r = !0) => {
            const s = t.findTestabilityInTree(i, r);
            if (null == s)
              throw new Error('Could not find testability for element.');
            return s;
          }),
            (pe.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (pe.getAllAngularRootElements = () => t.getAllRootElements()),
            pe.frameworkStabilizers || (pe.frameworkStabilizers = []),
            pe.frameworkStabilizers.push(i => {
              const r = pe.getAllAngularTestabilities();
              let s = r.length,
                o = !1;
              const a = function (l) {
                (o = o || l), s--, 0 == s && i(o);
              };
              r.forEach(function (l) {
                l.whenStable(a);
              });
            });
        }
        findTestabilityInTree(t, e, i) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : i
            ? In().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      let tk = (() => {
        class n {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      const el = new I('EventManagerPlugins');
      let tl = (() => {
        class n {
          constructor(e, i) {
            (this._zone = i),
              (this._eventNameToPlugin = new Map()),
              e.forEach(r => (r.manager = this)),
              (this._plugins = e.slice().reverse());
          }
          addEventListener(e, i, r) {
            return this._findPluginFor(i).addEventListener(e, i, r);
          }
          addGlobalEventListener(e, i, r) {
            return this._findPluginFor(i).addGlobalEventListener(e, i, r);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(e) {
            const i = this._eventNameToPlugin.get(e);
            if (i) return i;
            const r = this._plugins;
            for (let s = 0; s < r.length; s++) {
              const o = r[s];
              if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o;
            }
            throw new Error(`No event manager plugin found for event ${e}`);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(el), b(se));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      class pb {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, i) {
          const r = In().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, i);
        }
      }
      let gb = (() => {
          class n {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(e) {
              const i = new Set();
              e.forEach(r => {
                this._stylesSet.has(r) || (this._stylesSet.add(r), i.add(r));
              }),
                this.onStylesAdded(i);
            }
            onStylesAdded(e) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        ao = (() => {
          class n extends gb {
            constructor(e) {
              super(),
                (this._doc = e),
                (this._hostNodes = new Map()),
                this._hostNodes.set(e.head, []);
            }
            _addStylesToHost(e, i, r) {
              e.forEach(s => {
                const o = this._doc.createElement('style');
                (o.textContent = s), r.push(i.appendChild(o));
              });
            }
            addHost(e) {
              const i = [];
              this._addStylesToHost(this._stylesSet, e, i),
                this._hostNodes.set(e, i);
            }
            removeHost(e) {
              const i = this._hostNodes.get(e);
              i && i.forEach(mb), this._hostNodes.delete(e);
            }
            onStylesAdded(e) {
              this._hostNodes.forEach((i, r) => {
                this._addStylesToHost(e, r, i);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach(e => e.forEach(mb));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })();
      function mb(n) {
        In().remove(n);
      }
      const sf = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        af = /%COMP%/g;
      function nl(n, t, e) {
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          Array.isArray(r) ? nl(n, r, e) : ((r = r.replace(af, n)), e.push(r));
        }
        return e;
      }
      function vb(n) {
        return t => {
          if ('__ngUnwrap__' === t) return n;
          !1 === n(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let il = (() => {
        class n {
          constructor(e, i, r) {
            (this.eventManager = e),
              (this.sharedStylesHost = i),
              (this.appId = r),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new lf(e));
          }
          createRenderer(e, i) {
            if (!e || !i) return this.defaultRenderer;
            switch (i.encapsulation) {
              case nn.Emulated: {
                let r = this.rendererByCompId.get(i.id);
                return (
                  r ||
                    ((r = new ak(
                      this.eventManager,
                      this.sharedStylesHost,
                      i,
                      this.appId,
                    )),
                    this.rendererByCompId.set(i.id, r)),
                  r.applyToHost(e),
                  r
                );
              }
              case 1:
              case nn.ShadowDom:
                return new lk(this.eventManager, this.sharedStylesHost, e, i);
              default:
                if (!this.rendererByCompId.has(i.id)) {
                  const r = nl(i.id, i.styles, []);
                  this.sharedStylesHost.addStyles(r),
                    this.rendererByCompId.set(i.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(tl), b(ao), b(Js));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      class lf {
        constructor(t) {
          (this.eventManager = t),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(sf[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, i) {
          t && t.insertBefore(e, i);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let i = 'string' == typeof t ? document.querySelector(t) : t;
          if (!i)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (i.textContent = ''), i;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, i, r) {
          if (r) {
            e = r + ':' + e;
            const s = sf[r];
            s ? t.setAttributeNS(s, e, i) : t.setAttribute(e, i);
          } else t.setAttribute(e, i);
        }
        removeAttribute(t, e, i) {
          if (i) {
            const r = sf[i];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${i}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, i, r) {
          r & (Ft.DashCase | Ft.Important)
            ? t.style.setProperty(e, i, r & Ft.Important ? 'important' : '')
            : (t.style[e] = i);
        }
        removeStyle(t, e, i) {
          i & Ft.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, i) {
          t[e] = i;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, i) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, vb(i))
            : this.eventManager.addEventListener(t, e, vb(i));
        }
      }
      class ak extends lf {
        constructor(t, e, i, r) {
          super(t), (this.component = i);
          const s = nl(r + '-' + i.id, i.styles, []);
          e.addStyles(s),
            (this.contentAttr = (function rk(n) {
              return '_ngcontent-%COMP%'.replace(af, n);
            })(r + '-' + i.id)),
            (this.hostAttr = (function sk(n) {
              return '_nghost-%COMP%'.replace(af, n);
            })(r + '-' + i.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const i = super.createElement(t, e);
          return super.setAttribute(i, this.contentAttr, ''), i;
        }
      }
      class lk extends lf {
        constructor(t, e, i, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = i),
            (this.shadowRoot = i.attachShadow({mode: 'open'})),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = nl(r.id, r.styles, []);
          for (let o = 0; o < s.length; o++) {
            const a = document.createElement('style');
            (a.textContent = s[o]), this.shadowRoot.appendChild(a);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, i) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, i);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t)),
          );
        }
      }
      let ck = (() => {
        class n extends pb {
          constructor(e) {
            super(e);
          }
          supports(e) {
            return !0;
          }
          addEventListener(e, i, r) {
            return (
              e.addEventListener(i, r, !1),
              () => this.removeEventListener(e, i, r)
            );
          }
          removeEventListener(e, i, r) {
            return e.removeEventListener(i, r);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      const Cb = ['alt', 'control', 'meta', 'shift'],
        dk = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        wb = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        fk = {
          alt: n => n.altKey,
          control: n => n.ctrlKey,
          meta: n => n.metaKey,
          shift: n => n.shiftKey,
        };
      let hk = (() => {
        class n extends pb {
          constructor(e) {
            super(e);
          }
          supports(e) {
            return null != n.parseEventName(e);
          }
          addEventListener(e, i, r) {
            const s = n.parseEventName(i),
              o = n.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => In().onAndCancel(e, s.domEventName, o));
          }
          static parseEventName(e) {
            const i = e.toLowerCase().split('.'),
              r = i.shift();
            if (0 === i.length || ('keydown' !== r && 'keyup' !== r))
              return null;
            const s = n._normalizeKey(i.pop());
            let o = '';
            if (
              (Cb.forEach(l => {
                const c = i.indexOf(l);
                c > -1 && (i.splice(c, 1), (o += l + '.'));
              }),
              (o += s),
              0 != i.length || 0 === s.length)
            )
              return null;
            const a = {};
            return (a.domEventName = r), (a.fullKey = o), a;
          }
          static getEventFullKey(e) {
            let i = '',
              r = (function pk(n) {
                let t = n.key;
                if (null == t) {
                  if (((t = n.keyIdentifier), null == t)) return 'Unidentified';
                  t.startsWith('U+') &&
                    ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                    3 === n.location && wb.hasOwnProperty(t) && (t = wb[t]));
                }
                return dk[t] || t;
              })(e);
            return (
              (r = r.toLowerCase()),
              ' ' === r ? (r = 'space') : '.' === r && (r = 'dot'),
              Cb.forEach(s => {
                s != r && fk[s](e) && (i += s + '.');
              }),
              (i += r),
              i
            );
          }
          static eventCallback(e, i, r) {
            return s => {
              n.getEventFullKey(s) === e && r.runGuarded(() => i(s));
            };
          }
          static _normalizeKey(e) {
            return 'esc' === e ? 'escape' : e;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      const yk = Av(AO, 'browser', [
          {provide: Vt, useValue: ub},
          {
            provide: Cv,
            useValue: function gk() {
              nf.makeCurrent(), rf.init();
            },
            multi: !0,
          },
          {
            provide: ee,
            useFactory: function _k() {
              return (
                (function Nx(n) {
                  Mc = n;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        vk = [
          {provide: $u, useValue: 'root'},
          {
            provide: ri,
            useFactory: function mk() {
              return new ri();
            },
            deps: [],
          },
          {provide: el, useClass: ck, multi: !0, deps: [ee, se, Vt]},
          {provide: el, useClass: hk, multi: !0, deps: [ee]},
          {provide: il, useClass: il, deps: [tl, ao, Js]},
          {provide: Ws, useExisting: il},
          {provide: gb, useExisting: ao},
          {provide: ao, useClass: ao, deps: [ee]},
          {provide: Rd, useClass: Rd, deps: [se]},
          {provide: tl, useClass: tl, deps: [el, se]},
          {provide: fb, useClass: tk, deps: []},
        ];
      let Db = (() => {
        class n {
          constructor(e) {
            if (e)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.',
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: n,
              providers: [
                {provide: Js, useValue: e.appId},
                {provide: hb, useExisting: Js},
                ek,
              ],
            };
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(n, 12));
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({providers: vk, imports: [so, SO]})),
          n
        );
      })();
      'undefined' != typeof window && window;
      let rl = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = E({
              token: n,
              factory: function (e) {
                let i = null;
                return (i = e ? new (e || n)() : b(Mb)), i;
              },
              providedIn: 'root',
            })),
            n
          );
        })(),
        Mb = (() => {
          class n extends rl {
            constructor(e) {
              super(), (this._doc = e);
            }
            sanitize(e, i) {
              if (null == i) return null;
              switch (e) {
                case le.NONE:
                  return i;
                case le.HTML:
                  return Cn(i, 'HTML')
                    ? Ot(i)
                    : Yg(this._doc, String(i)).toString();
                case le.STYLE:
                  return Cn(i, 'Style') ? Ot(i) : i;
                case le.SCRIPT:
                  if (Cn(i, 'Script')) return Ot(i);
                  throw new Error('unsafe value used in a script context');
                case le.URL:
                  return jg(i), Cn(i, 'URL') ? Ot(i) : Os(String(i));
                case le.RESOURCE_URL:
                  if (Cn(i, 'ResourceURL')) return Ot(i);
                  throw new Error(
                    'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)',
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`,
                  );
              }
            }
            bypassSecurityTrustHtml(e) {
              return (function wM(n) {
                return new _M(n);
              })(e);
            }
            bypassSecurityTrustStyle(e) {
              return (function DM(n) {
                return new yM(n);
              })(e);
            }
            bypassSecurityTrustScript(e) {
              return (function EM(n) {
                return new vM(n);
              })(e);
            }
            bypassSecurityTrustUrl(e) {
              return (function xM(n) {
                return new bM(n);
              })(e);
            }
            bypassSecurityTrustResourceUrl(e) {
              return (function MM(n) {
                return new CM(n);
              })(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee));
            }),
            (n.ɵprov = E({
              token: n,
              factory: function (e) {
                let i = null;
                return (
                  (i = e
                    ? new e()
                    : (function Ik(n) {
                        return new Mb(n.get(ee));
                      })(b(nt))),
                  i
                );
              },
              providedIn: 'root',
            })),
            n
          );
        })();
      function ji(...n) {
        return nr(n, Lo(n));
      }
      function di(n, t) {
        return Xe((e, i) => {
          let r = 0;
          e.subscribe(Je(i, s => n.call(t, s, r++) && i.next(s)));
        });
      }
      class Ab {}
      class Sb {}
      class zn {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split('\n').forEach(e => {
                            const i = e.indexOf(':');
                            if (i > 0) {
                              const r = e.slice(0, i),
                                s = r.toLowerCase(),
                                o = e.slice(i + 1).trim();
                              this.maybeSetNormalizedName(r, s),
                                this.headers.has(s)
                                  ? this.headers.get(s).push(o)
                                  : this.headers.set(s, [o]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach(e => {
                            let i = t[e];
                            const r = e.toLowerCase();
                            'string' == typeof i && (i = [i]),
                              i.length > 0 &&
                                (this.headers.set(r, i),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({name: t, value: e, op: 'a'});
        }
        set(t, e) {
          return this.clone({name: t, value: e, op: 's'});
        }
        delete(t, e) {
          return this.clone({name: t, value: e, op: 'd'});
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof zn
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach(t => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new zn();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof zn
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              let i = t.value;
              if (('string' == typeof i && (i = [i]), 0 === i.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ('a' === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...i), this.headers.set(e, r);
              break;
            case 'd':
              const s = t.value;
              if (s) {
                let o = this.headers.get(e);
                if (!o) return;
                (o = o.filter(a => -1 === s.indexOf(a))),
                  0 === o.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, o);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(e =>
              t(this.normalizedNames.get(e), this.headers.get(e)),
            );
        }
      }
      class Fk {
        encodeKey(t) {
          return Ib(t);
        }
        encodeValue(t) {
          return Ib(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      const Rk = /%(\d[a-f0-9])/gi,
        kk = {
          40: '@',
          '3A': ':',
          24: '$',
          '2C': ',',
          '3B': ';',
          '2B': '+',
          '3D': '=',
          '3F': '?',
          '2F': '/',
        };
      function Ib(n) {
        return encodeURIComponent(n).replace(Rk, (t, e) => {
          var i;
          return null !== (i = kk[e]) && void 0 !== i ? i : t;
        });
      }
      function Tb(n) {
        return `${n}`;
      }
      class fi {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new Fk()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function Ok(n, t) {
              const e = new Map();
              return (
                n.length > 0 &&
                  n
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach(r => {
                      const s = r.indexOf('='),
                        [o, a] =
                          -1 == s
                            ? [t.decodeKey(r), '']
                            : [
                                t.decodeKey(r.slice(0, s)),
                                t.decodeValue(r.slice(s + 1)),
                              ],
                        l = e.get(o) || [];
                      l.push(a), e.set(o, l);
                    }),
                e
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach(e => {
                  const i = t.fromObject[e];
                  this.map.set(e, Array.isArray(i) ? i : [i]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({param: t, value: e, op: 'a'});
        }
        appendAll(t) {
          const e = [];
          return (
            Object.keys(t).forEach(i => {
              const r = t[i];
              Array.isArray(r)
                ? r.forEach(s => {
                    e.push({param: i, value: s, op: 'a'});
                  })
                : e.push({param: i, value: r, op: 'a'});
            }),
            this.clone(e)
          );
        }
        set(t, e) {
          return this.clone({param: t, value: e, op: 's'});
        }
        delete(t, e) {
          return this.clone({param: t, value: e, op: 'd'});
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(t => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map(i => e + '=' + this.encoder.encodeValue(i))
                  .join('&');
              })
              .filter(t => '' !== t)
              .join('&')
          );
        }
        clone(t) {
          const e = new fi({encoder: this.encoder});
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat(t)),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach(t => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach(t => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e =
                      ('a' === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(Tb(t.value)), this.map.set(t.param, e);
                    break;
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let i = this.map.get(t.param) || [];
                      const r = i.indexOf(Tb(t.value));
                      -1 !== r && i.splice(r, 1),
                        i.length > 0
                          ? this.map.set(t.param, i)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class Pk {
        constructor() {
          this.map = new Map();
        }
        set(t, e) {
          return this.map.set(t, e), this;
        }
        get(t) {
          return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
          );
        }
        delete(t) {
          return this.map.delete(t), this;
        }
        has(t) {
          return this.map.has(t);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Fb(n) {
        return 'undefined' != typeof ArrayBuffer && n instanceof ArrayBuffer;
      }
      function Ob(n) {
        return 'undefined' != typeof Blob && n instanceof Blob;
      }
      function Rb(n) {
        return 'undefined' != typeof FormData && n instanceof FormData;
      }
      class lo {
        constructor(t, e, i, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function Nk(n) {
              switch (n) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== i ? i : null), (s = r))
              : (s = i),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.context && (this.context = s.context),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new zn()),
            this.context || (this.context = new Pk()),
            this.params)
          ) {
            const o = this.params.toString();
            if (0 === o.length) this.urlWithParams = e;
            else {
              const a = e.indexOf('?');
              this.urlWithParams =
                e + (-1 === a ? '?' : a < e.length - 1 ? '&' : '') + o;
            }
          } else (this.params = new fi()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Fb(this.body) ||
              Ob(this.body) ||
              Rb(this.body) ||
              (function Lk(n) {
                return (
                  'undefined' != typeof URLSearchParams &&
                  n instanceof URLSearchParams
                );
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof fi
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Rb(this.body)
            ? null
            : Ob(this.body)
            ? this.body.type || null
            : Fb(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof fi
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(t = {}) {
          var e;
          const i = t.method || this.method,
            r = t.url || this.url,
            s = t.responseType || this.responseType,
            o = void 0 !== t.body ? t.body : this.body,
            a =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            l =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let c = t.headers || this.headers,
            u = t.params || this.params;
          const d = null !== (e = t.context) && void 0 !== e ? e : this.context;
          return (
            void 0 !== t.setHeaders &&
              (c = Object.keys(t.setHeaders).reduce(
                (f, h) => f.set(h, t.setHeaders[h]),
                c,
              )),
            t.setParams &&
              (u = Object.keys(t.setParams).reduce(
                (f, h) => f.set(h, t.setParams[h]),
                u,
              )),
            new lo(i, r, o, {
              params: u,
              headers: c,
              context: d,
              reportProgress: l,
              responseType: s,
              withCredentials: a,
            })
          );
        }
      }
      var $e = (() => (
        (($e = $e || {})[($e.Sent = 0)] = 'Sent'),
        ($e[($e.UploadProgress = 1)] = 'UploadProgress'),
        ($e[($e.ResponseHeader = 2)] = 'ResponseHeader'),
        ($e[($e.DownloadProgress = 3)] = 'DownloadProgress'),
        ($e[($e.Response = 4)] = 'Response'),
        ($e[($e.User = 5)] = 'User'),
        $e
      ))();
      class uf {
        constructor(t, e = 200, i = 'OK') {
          (this.headers = t.headers || new zn()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || i),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class df extends uf {
        constructor(t = {}) {
          super(t), (this.type = $e.ResponseHeader);
        }
        clone(t = {}) {
          return new df({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class sl extends uf {
        constructor(t = {}) {
          super(t),
            (this.type = $e.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new sl({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class kb extends uf {
        constructor(t) {
          super(t, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || '(unknown url)'}`
                : `Http failure response for ${t.url || '(unknown url)'}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function ff(n, t) {
        return {
          body: t,
          headers: n.headers,
          context: n.context,
          observe: n.observe,
          params: n.params,
          reportProgress: n.reportProgress,
          responseType: n.responseType,
          withCredentials: n.withCredentials,
        };
      }
      let hf = (() => {
        class n {
          constructor(e) {
            this.handler = e;
          }
          request(e, i, r = {}) {
            let s;
            if (e instanceof lo) s = e;
            else {
              let l, c;
              (l = r.headers instanceof zn ? r.headers : new zn(r.headers)),
                r.params &&
                  (c =
                    r.params instanceof fi
                      ? r.params
                      : new fi({fromObject: r.params})),
                (s = new lo(e, i, void 0 !== r.body ? r.body : null, {
                  headers: l,
                  context: r.context,
                  params: c,
                  reportProgress: r.reportProgress,
                  responseType: r.responseType || 'json',
                  withCredentials: r.withCredentials,
                }));
            }
            const o = ji(s).pipe(
              (function Tk(n, t) {
                return ie(t) ? us(n, t, 1) : us(n, 1);
              })(l => this.handler.handle(l)),
            );
            if (e instanceof lo || 'events' === r.observe) return o;
            const a = o.pipe(di(l => l instanceof sl));
            switch (r.observe || 'body') {
              case 'body':
                switch (s.responseType) {
                  case 'arraybuffer':
                    return a.pipe(
                      rt(l => {
                        if (null !== l.body && !(l.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return l.body;
                      }),
                    );
                  case 'blob':
                    return a.pipe(
                      rt(l => {
                        if (null !== l.body && !(l.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return l.body;
                      }),
                    );
                  case 'text':
                    return a.pipe(
                      rt(l => {
                        if (null !== l.body && 'string' != typeof l.body)
                          throw new Error('Response is not a string.');
                        return l.body;
                      }),
                    );
                  default:
                    return a.pipe(rt(l => l.body));
                }
              case 'response':
                return a;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${r.observe}}`,
                );
            }
          }
          delete(e, i = {}) {
            return this.request('DELETE', e, i);
          }
          get(e, i = {}) {
            return this.request('GET', e, i);
          }
          head(e, i = {}) {
            return this.request('HEAD', e, i);
          }
          jsonp(e, i) {
            return this.request('JSONP', e, {
              params: new fi().append(i, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(e, i = {}) {
            return this.request('OPTIONS', e, i);
          }
          patch(e, i, r = {}) {
            return this.request('PATCH', e, ff(r, i));
          }
          post(e, i, r = {}) {
            return this.request('POST', e, ff(r, i));
          }
          put(e, i, r = {}) {
            return this.request('PUT', e, ff(r, i));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Ab));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      class Pb {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const Nb = new I('HTTP_INTERCEPTORS');
      let Vk = (() => {
        class n {
          intercept(e, i) {
            return i.handle(e);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      const Bk = /^\)\]\}',?\n/;
      let Lb = (() => {
        class n {
          constructor(e) {
            this.xhrFactory = e;
          }
          handle(e) {
            if ('JSONP' === e.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.',
              );
            return new Me(i => {
              const r = this.xhrFactory.build();
              if (
                (r.open(e.method, e.urlWithParams),
                e.withCredentials && (r.withCredentials = !0),
                e.headers.forEach((h, g) => r.setRequestHeader(h, g.join(','))),
                e.headers.has('Accept') ||
                  r.setRequestHeader(
                    'Accept',
                    'application/json, text/plain, */*',
                  ),
                !e.headers.has('Content-Type'))
              ) {
                const h = e.detectContentTypeHeader();
                null !== h && r.setRequestHeader('Content-Type', h);
              }
              if (e.responseType) {
                const h = e.responseType.toLowerCase();
                r.responseType = 'json' !== h ? h : 'text';
              }
              const s = e.serializeBody();
              let o = null;
              const a = () => {
                  if (null !== o) return o;
                  const h = r.statusText || 'OK',
                    g = new zn(r.getAllResponseHeaders()),
                    m =
                      (function Hk(n) {
                        return 'responseURL' in n && n.responseURL
                          ? n.responseURL
                          : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
                          ? n.getResponseHeader('X-Request-URL')
                          : null;
                      })(r) || e.url;
                  return (
                    (o = new df({
                      headers: g,
                      status: r.status,
                      statusText: h,
                      url: m,
                    })),
                    o
                  );
                },
                l = () => {
                  let {headers: h, status: g, statusText: m, url: v} = a(),
                    y = null;
                  204 !== g &&
                    (y = void 0 === r.response ? r.responseText : r.response),
                    0 === g && (g = y ? 200 : 0);
                  let _ = g >= 200 && g < 300;
                  if ('json' === e.responseType && 'string' == typeof y) {
                    const D = y;
                    y = y.replace(Bk, '');
                    try {
                      y = '' !== y ? JSON.parse(y) : null;
                    } catch (O) {
                      (y = D), _ && ((_ = !1), (y = {error: O, text: y}));
                    }
                  }
                  _
                    ? (i.next(
                        new sl({
                          body: y,
                          headers: h,
                          status: g,
                          statusText: m,
                          url: v || void 0,
                        }),
                      ),
                      i.complete())
                    : i.error(
                        new kb({
                          error: y,
                          headers: h,
                          status: g,
                          statusText: m,
                          url: v || void 0,
                        }),
                      );
                },
                c = h => {
                  const {url: g} = a(),
                    m = new kb({
                      error: h,
                      status: r.status || 0,
                      statusText: r.statusText || 'Unknown Error',
                      url: g || void 0,
                    });
                  i.error(m);
                };
              let u = !1;
              const d = h => {
                  u || (i.next(a()), (u = !0));
                  let g = {type: $e.DownloadProgress, loaded: h.loaded};
                  h.lengthComputable && (g.total = h.total),
                    'text' === e.responseType &&
                      !!r.responseText &&
                      (g.partialText = r.responseText),
                    i.next(g);
                },
                f = h => {
                  let g = {type: $e.UploadProgress, loaded: h.loaded};
                  h.lengthComputable && (g.total = h.total), i.next(g);
                };
              return (
                r.addEventListener('load', l),
                r.addEventListener('error', c),
                r.addEventListener('timeout', c),
                r.addEventListener('abort', c),
                e.reportProgress &&
                  (r.addEventListener('progress', d),
                  null !== s &&
                    r.upload &&
                    r.upload.addEventListener('progress', f)),
                r.send(s),
                i.next({type: $e.Sent}),
                () => {
                  r.removeEventListener('error', c),
                    r.removeEventListener('abort', c),
                    r.removeEventListener('load', l),
                    r.removeEventListener('timeout', c),
                    e.reportProgress &&
                      (r.removeEventListener('progress', d),
                      null !== s &&
                        r.upload &&
                        r.upload.removeEventListener('progress', f)),
                    r.readyState !== r.DONE && r.abort();
                }
              );
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(fb));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      const pf = new I('XSRF_COOKIE_NAME'),
        gf = new I('XSRF_HEADER_NAME');
      class Vb {}
      let jk = (() => {
          class n {
            constructor(e, i, r) {
              (this.doc = e),
                (this.platform = i),
                (this.cookieName = r),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const e = this.doc.cookie || '';
              return (
                e !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = nb(e, this.cookieName)),
                  (this.lastCookieString = e)),
                this.lastToken
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee), b(Vt), b(pf));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        mf = (() => {
          class n {
            constructor(e, i) {
              (this.tokenService = e), (this.headerName = i);
            }
            intercept(e, i) {
              const r = e.url.toLowerCase();
              if (
                'GET' === e.method ||
                'HEAD' === e.method ||
                r.startsWith('http://') ||
                r.startsWith('https://')
              )
                return i.handle(e);
              const s = this.tokenService.getToken();
              return (
                null !== s &&
                  !e.headers.has(this.headerName) &&
                  (e = e.clone({headers: e.headers.set(this.headerName, s)})),
                i.handle(e)
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Vb), b(gf));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        Gk = (() => {
          class n {
            constructor(e, i) {
              (this.backend = e), (this.injector = i), (this.chain = null);
            }
            handle(e) {
              if (null === this.chain) {
                const i = this.injector.get(Nb, []);
                this.chain = i.reduceRight(
                  (r, s) => new Pb(r, s),
                  this.backend,
                );
              }
              return this.chain.handle(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Sb), b(nt));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        $k = (() => {
          class n {
            static disable() {
              return {ngModule: n, providers: [{provide: mf, useClass: Vk}]};
            }
            static withOptions(e = {}) {
              return {
                ngModule: n,
                providers: [
                  e.cookieName ? {provide: pf, useValue: e.cookieName} : [],
                  e.headerName ? {provide: gf, useValue: e.headerName} : [],
                ],
              };
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({
              providers: [
                mf,
                {provide: Nb, useExisting: mf, multi: !0},
                {provide: Vb, useClass: jk},
                {provide: pf, useValue: 'XSRF-TOKEN'},
                {provide: gf, useValue: 'X-XSRF-TOKEN'},
              ],
            })),
            n
          );
        })(),
        Uk = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({
              providers: [
                hf,
                {provide: Ab, useClass: Gk},
                Lb,
                {provide: Sb, useExisting: Lb},
              ],
              imports: [
                [
                  $k.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                  }),
                ],
              ],
            })),
            n
          );
        })();
      class zk extends de {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return !e.closed && t.next(this._value), e;
        }
        getValue() {
          const {hasError: t, thrownError: e, _value: i} = this;
          if (t) throw e;
          return this._throwIfClosed(), i;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      function Bb(n) {
        for (let t in n) {
          let e = n[t] || '';
          switch (t) {
            case 'display':
              n.display =
                'flex' === e
                  ? ['-webkit-flex', 'flex']
                  : 'inline-flex' === e
                  ? ['-webkit-inline-flex', 'inline-flex']
                  : e;
              break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
              n['-webkit-' + t] = e;
              break;
            case 'flex-direction':
              (e = e || 'row'),
                (n['-webkit-flex-direction'] = e),
                (n['flex-direction'] = e);
              break;
            case 'order':
              n.order = n['-webkit-' + t] = isNaN(+e) ? '0' : e;
          }
        }
        return n;
      }
      const _f = 'inline',
        ol = ['row', 'column', 'row-reverse', 'column-reverse'];
      function Hb(n) {
        let [t, e, i] = jb(n);
        return (function qk(n, t = null, e = !1) {
          return {
            display: e ? 'inline-flex' : 'flex',
            'box-sizing': 'border-box',
            'flex-direction': n,
            'flex-wrap': t || null,
          };
        })(t, e, i);
      }
      function jb(n) {
        var t;
        n =
          null !== (t = null == n ? void 0 : n.toLowerCase()) && void 0 !== t
            ? t
            : '';
        let [e, i, r] = n.split(' ');
        return (
          ol.find(s => s === e) || (e = ol[0]),
          i === _f && ((i = r !== _f ? r : ''), (r = _f)),
          [e, Wk(i), !!r]
        );
      }
      function co(n) {
        let [t] = jb(n);
        return t.indexOf('row') > -1;
      }
      function Wk(n) {
        if (n)
          switch (n.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              n = 'wrap-reverse';
              break;
            case 'no':
            case 'none':
            case 'nowrap':
              n = 'nowrap';
              break;
            default:
              n = 'wrap';
          }
        return n;
      }
      function Wn(n, ...t) {
        if (null == n)
          throw TypeError('Cannot convert undefined or null to object');
        for (let e of t)
          if (null != e) for (let i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
        return n;
      }
      function Kr(n, t, e) {
        const i = ie(n) || t || e ? {next: n, error: t, complete: e} : n;
        return i
          ? Xe((r, s) => {
              var o;
              null === (o = i.subscribe) || void 0 === o || o.call(i);
              let a = !0;
              r.subscribe(
                Je(
                  s,
                  l => {
                    var c;
                    null === (c = i.next) || void 0 === c || c.call(i, l),
                      s.next(l);
                  },
                  () => {
                    var l;
                    (a = !1),
                      null === (l = i.complete) || void 0 === l || l.call(i),
                      s.complete();
                  },
                  l => {
                    var c;
                    (a = !1),
                      null === (c = i.error) || void 0 === c || c.call(i, l),
                      s.error(l);
                  },
                  () => {
                    var l, c;
                    a &&
                      (null === (l = i.unsubscribe) ||
                        void 0 === l ||
                        l.call(i)),
                      null === (c = i.finalize) || void 0 === c || c.call(i);
                  },
                ),
              );
            })
          : Po;
      }
      const Yk = {
          provide: wv,
          useFactory: function Kk(n, t) {
            return () => {
              if (ci(t)) {
                const e = Array.from(n.querySelectorAll(`[class*=${Gb}]`)),
                  i = /\bflex-layout-.+?\b/g;
                e.forEach(r => {
                  r.classList.contains(`${Gb}ssr`) && r.parentNode
                    ? r.parentNode.removeChild(r)
                    : r.className.replace(i, '');
                });
              }
            };
          },
          deps: [ee, Vt],
          multi: !0,
        },
        Gb = 'flex-layout-';
      let yf = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({providers: [Yk]})),
          n
        );
      })();
      class Gi {
        constructor(t = !1, e = 'all', i = '', r = '', s = 0) {
          (this.matches = t),
            (this.mediaQuery = e),
            (this.mqAlias = i),
            (this.suffix = r),
            (this.priority = s),
            (this.property = '');
        }
        clone() {
          return new Gi(
            this.matches,
            this.mediaQuery,
            this.mqAlias,
            this.suffix,
          );
        }
      }
      let Qk = (() => {
        class n {
          constructor() {
            this.stylesheet = new Map();
          }
          addStyleToElement(e, i, r) {
            const s = this.stylesheet.get(e);
            s ? s.set(i, r) : this.stylesheet.set(e, new Map([[i, r]]));
          }
          clearStyles() {
            this.stylesheet.clear();
          }
          getStyleForElement(e, i) {
            const r = this.stylesheet.get(e);
            let s = '';
            if (r) {
              const o = r.get(i);
              ('number' == typeof o || 'string' == typeof o) && (s = o + '');
            }
            return s;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const vf = {
          addFlexToParent: !0,
          addOrientationBps: !1,
          disableDefaultBps: !1,
          disableVendorPrefixes: !1,
          serverLoaded: !1,
          useColumnBasisZero: !0,
          printWithBreakpoints: [],
          mediaTriggerAutoRestore: !0,
          ssrObserveBreakpoints: [],
          multiplier: void 0,
          defaultUnit: 'px',
          detectLayoutDisplay: !1,
        },
        gn = new I('Flex Layout token, config options for the library', {
          providedIn: 'root',
          factory: () => vf,
        }),
        Yr = new I('FlexLayoutServerLoaded', {
          providedIn: 'root',
          factory: () => !1,
        }),
        bf = new I(
          'Flex Layout token, collect all breakpoints into one provider',
          {providedIn: 'root', factory: () => null},
        );
      function $b(n, t) {
        return (
          (n = n ? n.clone() : new Gi()),
          t &&
            ((n.mqAlias = t.alias),
            (n.mediaQuery = t.mediaQuery),
            (n.suffix = t.suffix),
            (n.priority = t.priority)),
          n
        );
      }
      class Pe {
        constructor() {
          this.shouldCache = !0;
        }
        sideEffect(t, e, i) {}
      }
      let Ce = (() => {
        class n {
          constructor(e, i, r, s) {
            (this._serverStylesheet = e),
              (this._serverModuleLoaded = i),
              (this._platformId = r),
              (this.layoutConfig = s);
          }
          applyStyleToElement(e, i, r = null) {
            let s = {};
            'string' == typeof i && ((s[i] = r), (i = s)),
              (s = this.layoutConfig.disableVendorPrefixes ? i : Bb(i)),
              this._applyMultiValueStyleToElement(s, e);
          }
          applyStyleToElements(e, i = []) {
            const r = this.layoutConfig.disableVendorPrefixes ? e : Bb(e);
            i.forEach(s => {
              this._applyMultiValueStyleToElement(r, s);
            });
          }
          getFlowDirection(e) {
            const i = 'flex-direction';
            let r = this.lookupStyle(e, i);
            return [
              r || 'row',
              this.lookupInlineStyle(e, i) ||
              (qr(this._platformId) && this._serverModuleLoaded)
                ? r
                : '',
            ];
          }
          hasWrap(e) {
            return 'wrap' === this.lookupStyle(e, 'flex-wrap');
          }
          lookupAttributeValue(e, i) {
            var r;
            return null !== (r = e.getAttribute(i)) && void 0 !== r ? r : '';
          }
          lookupInlineStyle(e, i) {
            return ci(this._platformId)
              ? e.style.getPropertyValue(i)
              : (function Zk(n, t) {
                  var e;
                  return null !== (e = Ub(n)[t]) && void 0 !== e ? e : '';
                })(e, i);
          }
          lookupStyle(e, i, r = !1) {
            let s = '';
            return (
              e &&
                ((s = this.lookupInlineStyle(e, i)) ||
                  (ci(this._platformId)
                    ? r || (s = getComputedStyle(e).getPropertyValue(i))
                    : this._serverModuleLoaded &&
                      (s = this._serverStylesheet.getStyleForElement(e, i)))),
              s ? s.trim() : ''
            );
          }
          _applyMultiValueStyleToElement(e, i) {
            Object.keys(e)
              .sort()
              .forEach(r => {
                const s = e[r],
                  o = Array.isArray(s) ? s : [s];
                o.sort();
                for (let a of o)
                  (a = a ? a + '' : ''),
                    ci(this._platformId) || !this._serverModuleLoaded
                      ? ci(this._platformId)
                        ? i.style.setProperty(r, a)
                        : Xk(i, r, a)
                      : this._serverStylesheet.addStyleToElement(i, r, a);
              });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Qk), b(Yr), b(Vt), b(gn));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      function Xk(n, t, e) {
        t = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const i = Ub(n);
        (i[t] = null != e ? e : ''),
          (function Jk(n, t) {
            let e = '';
            for (const i in t) t[i] && (e += `${i}:${t[i]};`);
            n.setAttribute('style', e);
          })(n, i);
      }
      function Ub(n) {
        const t = {},
          e = n.getAttribute('style');
        if (e) {
          const i = e.split(/;+/g);
          for (let r = 0; r < i.length; r++) {
            const s = i[r].trim();
            if (s.length > 0) {
              const o = s.indexOf(':');
              if (-1 === o) throw new Error(`Invalid CSS style: ${s}`);
              t[s.substr(0, o).trim()] = s.substr(o + 1).trim();
            }
          }
        }
        return t;
      }
      function uo(n, t) {
        return ((t && t.priority) || 0) - ((n && n.priority) || 0);
      }
      function eP(n, t) {
        return (n.priority || 0) - (t.priority || 0);
      }
      let Cf = (() => {
        class n {
          constructor(e, i, r) {
            (this._zone = e),
              (this._platformId = i),
              (this._document = r),
              (this.source = new zk(new Gi(!0))),
              (this.registry = new Map()),
              (this.pendingRemoveListenerFns = []),
              (this._observable$ = this.source.asObservable());
          }
          get activations() {
            const e = [];
            return (
              this.registry.forEach((i, r) => {
                i.matches && e.push(r);
              }),
              e
            );
          }
          isActive(e) {
            var i;
            const r = this.registry.get(e);
            return null !== (i = null == r ? void 0 : r.matches) && void 0 !== i
              ? i
              : this.registerQuery(e).some(s => s.matches);
          }
          observe(e, i = !1) {
            if (e && e.length) {
              const r = this._observable$.pipe(
                di(o => !i || e.indexOf(o.mediaQuery) > -1),
              );
              return kn(
                new Me(o => {
                  const a = this.registerQuery(e);
                  if (a.length) {
                    const l = a.pop();
                    a.forEach(c => {
                      o.next(c);
                    }),
                      this.source.next(l);
                  }
                  o.complete();
                }),
                r,
              );
            }
            return this._observable$;
          }
          registerQuery(e) {
            const i = Array.isArray(e) ? e : [e],
              r = [];
            return (
              (function tP(n, t) {
                const e = n.filter(i => !zb[i]);
                if (e.length > 0) {
                  const i = e.join(', ');
                  try {
                    const r = t.createElement('style');
                    r.setAttribute('type', 'text/css'),
                      r.styleSheet ||
                        r.appendChild(
                          t.createTextNode(
                            `\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${i} {.fx-query-test{ }}\n`,
                          ),
                        ),
                      t.head.appendChild(r),
                      e.forEach(s => (zb[s] = r));
                  } catch (r) {
                    console.error(r);
                  }
                }
              })(i, this._document),
              i.forEach(s => {
                const o = l => {
                  this._zone.run(() => this.source.next(new Gi(l.matches, s)));
                };
                let a = this.registry.get(s);
                a ||
                  ((a = this.buildMQL(s)),
                  a.addListener(o),
                  this.pendingRemoveListenerFns.push(() => a.removeListener(o)),
                  this.registry.set(s, a)),
                  a.matches && r.push(new Gi(!0, s));
              }),
              r
            );
          }
          ngOnDestroy() {
            let e;
            for (; (e = this.pendingRemoveListenerFns.pop()); ) e();
          }
          buildMQL(e) {
            return (function nP(n, t) {
              return t && window.matchMedia('all').addListener
                ? window.matchMedia(n)
                : {
                    matches: 'all' === n || '' === n,
                    media: n,
                    addListener: () => {},
                    removeListener: () => {},
                    onchange: null,
                    addEventListener() {},
                    removeEventListener() {},
                    dispatchEvent: () => !1,
                  };
            })(e, ci(this._platformId));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(se), b(Vt), b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const zb = {},
        iP = [
          {
            alias: 'xs',
            mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
            priority: 1e3,
          },
          {
            alias: 'sm',
            mediaQuery:
              'screen and (min-width: 600px) and (max-width: 959.98px)',
            priority: 900,
          },
          {
            alias: 'md',
            mediaQuery:
              'screen and (min-width: 960px) and (max-width: 1279.98px)',
            priority: 800,
          },
          {
            alias: 'lg',
            mediaQuery:
              'screen and (min-width: 1280px) and (max-width: 1919.98px)',
            priority: 700,
          },
          {
            alias: 'xl',
            mediaQuery:
              'screen and (min-width: 1920px) and (max-width: 4999.98px)',
            priority: 600,
          },
          {
            alias: 'lt-sm',
            overlapping: !0,
            mediaQuery: 'screen and (max-width: 599.98px)',
            priority: 950,
          },
          {
            alias: 'lt-md',
            overlapping: !0,
            mediaQuery: 'screen and (max-width: 959.98px)',
            priority: 850,
          },
          {
            alias: 'lt-lg',
            overlapping: !0,
            mediaQuery: 'screen and (max-width: 1279.98px)',
            priority: 750,
          },
          {
            alias: 'lt-xl',
            overlapping: !0,
            priority: 650,
            mediaQuery: 'screen and (max-width: 1919.98px)',
          },
          {
            alias: 'gt-xs',
            overlapping: !0,
            mediaQuery: 'screen and (min-width: 600px)',
            priority: -950,
          },
          {
            alias: 'gt-sm',
            overlapping: !0,
            mediaQuery: 'screen and (min-width: 960px)',
            priority: -850,
          },
          {
            alias: 'gt-md',
            overlapping: !0,
            mediaQuery: 'screen and (min-width: 1280px)',
            priority: -750,
          },
          {
            alias: 'gt-lg',
            overlapping: !0,
            mediaQuery: 'screen and (min-width: 1920px)',
            priority: -650,
          },
        ],
        Wb = '(orientation: portrait) and (max-width: 599.98px)',
        qb = '(orientation: landscape) and (max-width: 959.98px)',
        Kb =
          '(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)',
        Yb =
          '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)',
        Qb = '(orientation: portrait) and (min-width: 840px)',
        Zb = '(orientation: landscape) and (min-width: 1280px)',
        qn = {
          HANDSET: `${Wb}, ${qb}`,
          TABLET: `${Kb} , ${Yb}`,
          WEB: `${Qb}, ${Zb} `,
          HANDSET_PORTRAIT: `${Wb}`,
          TABLET_PORTRAIT: `${Kb} `,
          WEB_PORTRAIT: `${Qb}`,
          HANDSET_LANDSCAPE: `${qb}`,
          TABLET_LANDSCAPE: `${Yb}`,
          WEB_LANDSCAPE: `${Zb}`,
        },
        rP = [
          {alias: 'handset', priority: 2e3, mediaQuery: qn.HANDSET},
          {
            alias: 'handset.landscape',
            priority: 2e3,
            mediaQuery: qn.HANDSET_LANDSCAPE,
          },
          {
            alias: 'handset.portrait',
            priority: 2e3,
            mediaQuery: qn.HANDSET_PORTRAIT,
          },
          {alias: 'tablet', priority: 2100, mediaQuery: qn.TABLET},
          {
            alias: 'tablet.landscape',
            priority: 2100,
            mediaQuery: qn.TABLET_LANDSCAPE,
          },
          {
            alias: 'tablet.portrait',
            priority: 2100,
            mediaQuery: qn.TABLET_PORTRAIT,
          },
          {alias: 'web', priority: 2200, mediaQuery: qn.WEB, overlapping: !0},
          {
            alias: 'web.landscape',
            priority: 2200,
            mediaQuery: qn.WEB_LANDSCAPE,
            overlapping: !0,
          },
          {
            alias: 'web.portrait',
            priority: 2200,
            mediaQuery: qn.WEB_PORTRAIT,
            overlapping: !0,
          },
        ],
        sP = /(\.|-|_)/g;
      function oP(n) {
        let t = n.length > 0 ? n.charAt(0) : '',
          e = n.length > 1 ? n.slice(1) : '';
        return t.toUpperCase() + e;
      }
      const uP = new I('Token (@angular/flex-layout) Breakpoints', {
        providedIn: 'root',
        factory: () => {
          const n = yr(bf),
            t = yr(gn),
            e = [].concat.apply(
              [],
              (n || []).map(r => (Array.isArray(r) ? r : [r])),
            );
          return (function cP(n, t = []) {
            const e = {};
            return (
              n.forEach(i => {
                e[i.alias] = i;
              }),
              t.forEach(i => {
                e[i.alias] ? Wn(e[i.alias], i) : (e[i.alias] = i);
              }),
              (function lP(n) {
                return (
                  n.forEach(t => {
                    t.suffix ||
                      ((t.suffix = (function aP(n) {
                        return n.replace(sP, '|').split('|').map(oP).join('');
                      })(t.alias)),
                      (t.overlapping = !!t.overlapping));
                  }),
                  n
                );
              })(Object.keys(e).map(i => e[i]))
            );
          })(
            (t.disableDefaultBps ? [] : iP).concat(
              t.addOrientationBps ? rP : [],
            ),
            e,
          );
        },
      });
      let wf = (() => {
        class n {
          constructor(e) {
            (this.findByMap = new Map()), (this.items = [...e].sort(eP));
          }
          findByAlias(e) {
            return e ? this.findWithPredicate(e, i => i.alias === e) : null;
          }
          findByQuery(e) {
            return this.findWithPredicate(e, i => i.mediaQuery === e);
          }
          get overlappings() {
            return this.items.filter(e => e.overlapping);
          }
          get aliases() {
            return this.items.map(e => e.alias);
          }
          get suffixes() {
            return this.items.map(e => {
              var i;
              return null !== (i = null == e ? void 0 : e.suffix) &&
                void 0 !== i
                ? i
                : '';
            });
          }
          findWithPredicate(e, i) {
            var r;
            let s = this.findByMap.get(e);
            return (
              s ||
                ((s =
                  null !== (r = this.items.find(i)) && void 0 !== r ? r : null),
                this.findByMap.set(e, s)),
              null != s ? s : null
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(uP));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const Qr = 'print',
        dP = {alias: Qr, mediaQuery: Qr, priority: 1e3};
      let fP = (() => {
        class n {
          constructor(e, i, r) {
            (this.breakpoints = e),
              (this.layoutConfig = i),
              (this._document = r),
              (this.registeredBeforeAfterPrintHooks = !1),
              (this.isPrintingBeforeAfterEvent = !1),
              (this.beforePrintEventListeners = []),
              (this.afterPrintEventListeners = []),
              (this.formerActivations = null),
              (this.isPrinting = !1),
              (this.queue = new hP()),
              (this.deactivations = []);
          }
          withPrintQuery(e) {
            return [...e, Qr];
          }
          isPrintEvent(e) {
            return e.mediaQuery.startsWith(Qr);
          }
          get printAlias() {
            var e;
            return [
              ...(null !== (e = this.layoutConfig.printWithBreakpoints) &&
              void 0 !== e
                ? e
                : []),
            ];
          }
          get printBreakPoints() {
            return this.printAlias
              .map(e => this.breakpoints.findByAlias(e))
              .filter(e => null !== e);
          }
          getEventBreakpoints({mediaQuery: e}) {
            const i = this.breakpoints.findByQuery(e);
            return (
              i ? [...this.printBreakPoints, i] : this.printBreakPoints
            ).sort(uo);
          }
          updateEvent(e) {
            var i;
            let r = this.breakpoints.findByQuery(e.mediaQuery);
            return (
              this.isPrintEvent(e) &&
                ((r = this.getEventBreakpoints(e)[0]),
                (e.mediaQuery =
                  null !== (i = null == r ? void 0 : r.mediaQuery) &&
                  void 0 !== i
                    ? i
                    : '')),
              $b(e, r)
            );
          }
          registerBeforeAfterPrintHooks(e) {
            if (
              !this._document.defaultView ||
              this.registeredBeforeAfterPrintHooks
            )
              return;
            this.registeredBeforeAfterPrintHooks = !0;
            const i = () => {
                this.isPrinting ||
                  ((this.isPrintingBeforeAfterEvent = !0),
                  this.startPrinting(
                    e,
                    this.getEventBreakpoints(new Gi(!0, Qr)),
                  ),
                  e.updateStyles());
              },
              r = () => {
                (this.isPrintingBeforeAfterEvent = !1),
                  this.isPrinting && (this.stopPrinting(e), e.updateStyles());
              };
            this._document.defaultView.addEventListener('beforeprint', i),
              this._document.defaultView.addEventListener('afterprint', r),
              this.beforePrintEventListeners.push(i),
              this.afterPrintEventListeners.push(r);
          }
          interceptEvents(e) {
            return i => {
              this.isPrintEvent(i)
                ? i.matches && !this.isPrinting
                  ? (this.startPrinting(e, this.getEventBreakpoints(i)),
                    e.updateStyles())
                  : !i.matches &&
                    this.isPrinting &&
                    !this.isPrintingBeforeAfterEvent &&
                    (this.stopPrinting(e), e.updateStyles())
                : this.collectActivations(e, i);
            };
          }
          blockPropagation() {
            return e => !(this.isPrinting || this.isPrintEvent(e));
          }
          startPrinting(e, i) {
            (this.isPrinting = !0),
              (this.formerActivations = e.activatedBreakpoints),
              (e.activatedBreakpoints = this.queue.addPrintBreakpoints(i));
          }
          stopPrinting(e) {
            (e.activatedBreakpoints = this.deactivations),
              (this.deactivations = []),
              (this.formerActivations = null),
              this.queue.clear(),
              (this.isPrinting = !1);
          }
          collectActivations(e, i) {
            if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
              if (!this.isPrintingBeforeAfterEvent)
                return void (this.deactivations = []);
              if (!i.matches) {
                const r = this.breakpoints.findByQuery(i.mediaQuery);
                if (r) {
                  const s =
                      this.formerActivations &&
                      this.formerActivations.includes(r),
                    o =
                      !this.formerActivations &&
                      e.activatedBreakpoints.includes(r);
                  (s || o) &&
                    (this.deactivations.push(r), this.deactivations.sort(uo));
                }
              }
            }
          }
          ngOnDestroy() {
            this._document.defaultView &&
              (this.beforePrintEventListeners.forEach(e =>
                this._document.defaultView.removeEventListener(
                  'beforeprint',
                  e,
                ),
              ),
              this.afterPrintEventListeners.forEach(e =>
                this._document.defaultView.removeEventListener('afterprint', e),
              ));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(wf), b(gn), b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      class hP {
        constructor() {
          this.printBreakpoints = [];
        }
        addPrintBreakpoints(t) {
          return (
            t.push(dP),
            t.sort(uo),
            t.forEach(e => this.addBreakpoint(e)),
            this.printBreakpoints
          );
        }
        addBreakpoint(t) {
          t &&
            void 0 ===
              this.printBreakpoints.find(i => i.mediaQuery === t.mediaQuery) &&
            (this.printBreakpoints = (function pP(n) {
              var t;
              return (
                null !==
                  (t = null == n ? void 0 : n.mediaQuery.startsWith(Qr)) &&
                void 0 !== t &&
                t
              );
            })(t)
              ? [t, ...this.printBreakpoints]
              : [...this.printBreakpoints, t]);
        }
        clear() {
          this.printBreakpoints = [];
        }
      }
      let Ee = (() => {
        class n {
          constructor(e, i, r) {
            (this.matchMedia = e),
              (this.breakpoints = i),
              (this.hook = r),
              (this._useFallbacks = !0),
              (this._activatedBreakpoints = []),
              (this.elementMap = new Map()),
              (this.elementKeyMap = new WeakMap()),
              (this.watcherMap = new WeakMap()),
              (this.updateMap = new WeakMap()),
              (this.clearMap = new WeakMap()),
              (this.subject = new de()),
              this.observeActivations();
          }
          get activatedAlias() {
            var e, i;
            return null !==
              (i =
                null === (e = this.activatedBreakpoints[0]) || void 0 === e
                  ? void 0
                  : e.alias) && void 0 !== i
              ? i
              : '';
          }
          set activatedBreakpoints(e) {
            this._activatedBreakpoints = [...e];
          }
          get activatedBreakpoints() {
            return [...this._activatedBreakpoints];
          }
          set useFallbacks(e) {
            this._useFallbacks = e;
          }
          onMediaChange(e) {
            const i = this.findByQuery(e.mediaQuery);
            if (i) {
              e = $b(e, i);
              const r = this.activatedBreakpoints.indexOf(i);
              e.matches && -1 === r
                ? (this._activatedBreakpoints.push(i),
                  this._activatedBreakpoints.sort(uo),
                  this.updateStyles())
                : !e.matches &&
                  -1 !== r &&
                  (this._activatedBreakpoints.splice(r, 1),
                  this._activatedBreakpoints.sort(uo),
                  this.updateStyles());
            }
          }
          init(e, i, r, s, o = []) {
            Xb(this.updateMap, e, i, r),
              Xb(this.clearMap, e, i, s),
              this.buildElementKeyMap(e, i),
              this.watchExtraTriggers(e, i, o);
          }
          getValue(e, i, r) {
            const s = this.elementMap.get(e);
            if (s) {
              const o = void 0 !== r ? s.get(r) : this.getActivatedValues(s, i);
              if (o) return o.get(i);
            }
          }
          hasValue(e, i) {
            const r = this.elementMap.get(e);
            if (r) {
              const s = this.getActivatedValues(r, i);
              if (s) return void 0 !== s.get(i) || !1;
            }
            return !1;
          }
          setValue(e, i, r, s) {
            var o;
            let a = this.elementMap.get(e);
            if (a) {
              const c = (
                null !== (o = a.get(s)) && void 0 !== o ? o : new Map()
              ).set(i, r);
              a.set(s, c), this.elementMap.set(e, a);
            } else
              (a = new Map().set(s, new Map().set(i, r))),
                this.elementMap.set(e, a);
            const l = this.getValue(e, i);
            void 0 !== l && this.updateElement(e, i, l);
          }
          trackValue(e, i) {
            return this.subject
              .asObservable()
              .pipe(di(r => r.element === e && r.key === i));
          }
          updateStyles() {
            this.elementMap.forEach((e, i) => {
              const r = new Set(this.elementKeyMap.get(i));
              let s = this.getActivatedValues(e);
              s &&
                s.forEach((o, a) => {
                  this.updateElement(i, a, o), r.delete(a);
                }),
                r.forEach(o => {
                  if (((s = this.getActivatedValues(e, o)), s)) {
                    const a = s.get(o);
                    this.updateElement(i, o, a);
                  } else this.clearElement(i, o);
                });
            });
          }
          clearElement(e, i) {
            const r = this.clearMap.get(e);
            if (r) {
              const s = r.get(i);
              s && (s(), this.subject.next({element: e, key: i, value: ''}));
            }
          }
          updateElement(e, i, r) {
            const s = this.updateMap.get(e);
            if (s) {
              const o = s.get(i);
              o && (o(r), this.subject.next({element: e, key: i, value: r}));
            }
          }
          releaseElement(e) {
            const i = this.watcherMap.get(e);
            i && (i.forEach(s => s.unsubscribe()), this.watcherMap.delete(e));
            const r = this.elementMap.get(e);
            r && (r.forEach((s, o) => r.delete(o)), this.elementMap.delete(e));
          }
          triggerUpdate(e, i) {
            const r = this.elementMap.get(e);
            if (r) {
              const s = this.getActivatedValues(r, i);
              s &&
                (i
                  ? this.updateElement(e, i, s.get(i))
                  : s.forEach((o, a) => this.updateElement(e, a, o)));
            }
          }
          buildElementKeyMap(e, i) {
            let r = this.elementKeyMap.get(e);
            r || ((r = new Set()), this.elementKeyMap.set(e, r)), r.add(i);
          }
          watchExtraTriggers(e, i, r) {
            if (r && r.length) {
              let s = this.watcherMap.get(e);
              if (
                (s || ((s = new Map()), this.watcherMap.set(e, s)), !s.get(i))
              ) {
                const a = kn(...r).subscribe(() => {
                  const l = this.getValue(e, i);
                  this.updateElement(e, i, l);
                });
                s.set(i, a);
              }
            }
          }
          findByQuery(e) {
            return this.breakpoints.findByQuery(e);
          }
          getActivatedValues(e, i) {
            for (let s = 0; s < this.activatedBreakpoints.length; s++) {
              const a = e.get(this.activatedBreakpoints[s].alias);
              if (a && (void 0 === i || (a.has(i) && null != a.get(i))))
                return a;
            }
            if (!this._useFallbacks) return;
            const r = e.get('');
            return void 0 === i || (r && r.has(i)) ? r : void 0;
          }
          observeActivations() {
            const e = this.breakpoints.items.map(i => i.mediaQuery);
            this.hook.registerBeforeAfterPrintHooks(this),
              this.matchMedia
                .observe(this.hook.withPrintQuery(e))
                .pipe(
                  Kr(this.hook.interceptEvents(this)),
                  di(this.hook.blockPropagation()),
                )
                .subscribe(this.onMediaChange.bind(this));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Cf), b(wf), b(fP));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      function Xb(n, t, e, i) {
        var r;
        if (void 0 !== i) {
          const s = null !== (r = n.get(t)) && void 0 !== r ? r : new Map();
          s.set(e, i), n.set(t, s);
        }
      }
      let Ie = (() => {
        class n {
          constructor(e, i, r, s) {
            (this.elementRef = e),
              (this.styleBuilder = i),
              (this.styler = r),
              (this.marshal = s),
              (this.DIRECTIVE_KEY = ''),
              (this.inputs = []),
              (this.mru = {}),
              (this.destroySubject = new de()),
              (this.styleCache = new Map());
          }
          get parentElement() {
            return this.elementRef.nativeElement.parentElement;
          }
          get nativeElement() {
            return this.elementRef.nativeElement;
          }
          get activatedValue() {
            return this.marshal.getValue(
              this.nativeElement,
              this.DIRECTIVE_KEY,
            );
          }
          set activatedValue(e) {
            this.marshal.setValue(
              this.nativeElement,
              this.DIRECTIVE_KEY,
              e,
              this.marshal.activatedAlias,
            );
          }
          ngOnChanges(e) {
            Object.keys(e).forEach(i => {
              if (-1 !== this.inputs.indexOf(i)) {
                const r = i.split('.').slice(1).join('.');
                this.setValue(e[i].currentValue, r);
              }
            });
          }
          ngOnDestroy() {
            this.destroySubject.next(),
              this.destroySubject.complete(),
              this.marshal.releaseElement(this.nativeElement);
          }
          init(e = []) {
            this.marshal.init(
              this.elementRef.nativeElement,
              this.DIRECTIVE_KEY,
              this.updateWithValue.bind(this),
              this.clearStyles.bind(this),
              e,
            );
          }
          addStyles(e, i) {
            const r = this.styleBuilder,
              s = r.shouldCache;
            let o = this.styleCache.get(e);
            (!o || !s) &&
              ((o = r.buildStyles(e, i)), s && this.styleCache.set(e, o)),
              (this.mru = Object.assign({}, o)),
              this.applyStyleToElement(o),
              r.sideEffect(e, o, i);
          }
          clearStyles() {
            Object.keys(this.mru).forEach(e => {
              this.mru[e] = '';
            }),
              this.applyStyleToElement(this.mru),
              (this.mru = {}),
              (this.currentValue = void 0);
          }
          triggerUpdate() {
            this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
          }
          getFlexFlowDirection(e, i = !1) {
            if (e) {
              const [r, s] = this.styler.getFlowDirection(e);
              if (!s && i) {
                const o = Hb(r);
                this.styler.applyStyleToElements(o, [e]);
              }
              return r.trim();
            }
            return 'row';
          }
          hasWrap(e) {
            return this.styler.hasWrap(e);
          }
          applyStyleToElement(e, i, r = this.nativeElement) {
            this.styler.applyStyleToElement(r, e, i);
          }
          setValue(e, i) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, e, i);
          }
          updateWithValue(e) {
            this.currentValue !== e &&
              (this.addStyles(e), (this.currentValue = e));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(j), p(Pe), p(Ce), p(Ee));
          }),
          (n.ɵdir = w({type: n, features: [ht]})),
          n
        );
      })();
      function we(n) {
        return null != n && 'false' != `${n}`;
      }
      function Df(n, t = 0) {
        return (function _P(n) {
          return !isNaN(parseFloat(n)) && !isNaN(Number(n));
        })(n)
          ? Number(n)
          : t;
      }
      function nC(n) {
        return Array.isArray(n) ? n : [n];
      }
      function Ue(n) {
        return null == n ? '' : 'string' == typeof n ? n : `${n}px`;
      }
      function Zr(n) {
        return n instanceof j ? n.nativeElement : n;
      }
      function Qe(n) {
        return Xe((t, e) => {
          wt(n).subscribe(Je(e, () => e.complete(), tc)),
            !e.closed && t.subscribe(e);
        });
      }
      let lC = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({imports: [[yf]]})),
          n
        );
      })();
      const NP = new I('cdk-dir-doc', {
          providedIn: 'root',
          factory: function LP() {
            return yr(ee);
          },
        }),
        VP =
          /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      let Xr = (() => {
          class n {
            constructor(e) {
              if (((this.value = 'ltr'), (this.change = new ce()), e)) {
                const r = e.documentElement ? e.documentElement.dir : null;
                this.value = (function BP(n) {
                  const t = (null == n ? void 0 : n.toLowerCase()) || '';
                  return 'auto' === t &&
                    'undefined' != typeof navigator &&
                    (null == navigator ? void 0 : navigator.language)
                    ? VP.test(navigator.language)
                      ? 'rtl'
                      : 'ltr'
                    : 'rtl' === t
                    ? 'rtl'
                    : 'ltr';
                })((e.body ? e.body.dir : null) || r || 'ltr');
              }
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(NP, 8));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        Jr = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({})),
            n
          );
        })(),
        HP = (() => {
          class n extends Pe {
            buildStyles(e, {display: i}) {
              const r = Hb(e);
              return Object.assign(Object.assign({}, r), {
                display: 'none' === i ? i : r.display,
              });
            }
          }
          return (
            (n.ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = k(n)))(i || n);
              };
            })()),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })();
      const jP = [
        'fxLayout',
        'fxLayout.xs',
        'fxLayout.sm',
        'fxLayout.md',
        'fxLayout.lg',
        'fxLayout.xl',
        'fxLayout.lt-sm',
        'fxLayout.lt-md',
        'fxLayout.lt-lg',
        'fxLayout.lt-xl',
        'fxLayout.gt-xs',
        'fxLayout.gt-sm',
        'fxLayout.gt-md',
        'fxLayout.gt-lg',
      ];
      let GP = (() => {
          class n extends Ie {
            constructor(e, i, r, s, o) {
              super(e, r, i, s),
                (this._config = o),
                (this.DIRECTIVE_KEY = 'layout'),
                this.init();
            }
            updateWithValue(e) {
              var i;
              const s = this._config.detectLayoutDisplay
                ? this.styler.lookupStyle(this.nativeElement, 'display')
                : '';
              (this.styleCache =
                null !== (i = uC.get(s)) && void 0 !== i ? i : new Map()),
                uC.set(s, this.styleCache),
                this.currentValue !== e &&
                  (this.addStyles(e, {display: s}), (this.currentValue = e));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(j), p(Ce), p(HP), p(Ee), p(gn));
            }),
            (n.ɵdir = w({type: n, features: [x]})),
            n
          );
        })(),
        cC = (() => {
          class n extends GP {
            constructor() {
              super(...arguments), (this.inputs = jP);
            }
          }
          return (
            (n.ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = k(n)))(i || n);
              };
            })()),
            (n.ɵdir = w({
              type: n,
              selectors: [
                ['', 'fxLayout', ''],
                ['', 'fxLayout.xs', ''],
                ['', 'fxLayout.sm', ''],
                ['', 'fxLayout.md', ''],
                ['', 'fxLayout.lg', ''],
                ['', 'fxLayout.xl', ''],
                ['', 'fxLayout.lt-sm', ''],
                ['', 'fxLayout.lt-md', ''],
                ['', 'fxLayout.lt-lg', ''],
                ['', 'fxLayout.lt-xl', ''],
                ['', 'fxLayout.gt-xs', ''],
                ['', 'fxLayout.gt-sm', ''],
                ['', 'fxLayout.gt-md', ''],
                ['', 'fxLayout.gt-lg', ''],
              ],
              inputs: {
                fxLayout: 'fxLayout',
                'fxLayout.xs': 'fxLayout.xs',
                'fxLayout.sm': 'fxLayout.sm',
                'fxLayout.md': 'fxLayout.md',
                'fxLayout.lg': 'fxLayout.lg',
                'fxLayout.xl': 'fxLayout.xl',
                'fxLayout.lt-sm': 'fxLayout.lt-sm',
                'fxLayout.lt-md': 'fxLayout.lt-md',
                'fxLayout.lt-lg': 'fxLayout.lt-lg',
                'fxLayout.lt-xl': 'fxLayout.lt-xl',
                'fxLayout.gt-xs': 'fxLayout.gt-xs',
                'fxLayout.gt-sm': 'fxLayout.gt-sm',
                'fxLayout.gt-md': 'fxLayout.gt-md',
                'fxLayout.gt-lg': 'fxLayout.gt-lg',
              },
              features: [x],
            })),
            n
          );
        })();
      const uC = new Map();
      let F1 = (() => {
        class n extends Pe {
          buildStyles(e, i) {
            const r = {},
              [s, o] = e.split(' ');
            switch (s) {
              case 'center':
                r['justify-content'] = 'center';
                break;
              case 'space-around':
                r['justify-content'] = 'space-around';
                break;
              case 'space-between':
                r['justify-content'] = 'space-between';
                break;
              case 'space-evenly':
                r['justify-content'] = 'space-evenly';
                break;
              case 'end':
              case 'flex-end':
                r['justify-content'] = 'flex-end';
                break;
              default:
                r['justify-content'] = 'flex-start';
            }
            switch (o) {
              case 'start':
              case 'flex-start':
                r['align-items'] = r['align-content'] = 'flex-start';
                break;
              case 'center':
                r['align-items'] = r['align-content'] = 'center';
                break;
              case 'end':
              case 'flex-end':
                r['align-items'] = r['align-content'] = 'flex-end';
                break;
              case 'space-between':
                (r['align-content'] = 'space-between'),
                  (r['align-items'] = 'stretch');
                break;
              case 'space-around':
                (r['align-content'] = 'space-around'),
                  (r['align-items'] = 'stretch');
                break;
              case 'baseline':
                (r['align-content'] = 'stretch'),
                  (r['align-items'] = 'baseline');
                break;
              default:
                r['align-items'] = r['align-content'] = 'stretch';
            }
            return Wn(r, {
              display: i.inline ? 'inline-flex' : 'flex',
              'flex-direction': i.layout,
              'box-sizing': 'border-box',
              'max-width':
                'stretch' === o ? (co(i.layout) ? null : '100%') : null,
              'max-height': 'stretch' === o && co(i.layout) ? '100%' : null,
            });
          }
        }
        return (
          (n.ɵfac = (function () {
            let t;
            return function (i) {
              return (t || (t = k(n)))(i || n);
            };
          })()),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const O1 = [
        'fxLayoutAlign',
        'fxLayoutAlign.xs',
        'fxLayoutAlign.sm',
        'fxLayoutAlign.md',
        'fxLayoutAlign.lg',
        'fxLayoutAlign.xl',
        'fxLayoutAlign.lt-sm',
        'fxLayoutAlign.lt-md',
        'fxLayoutAlign.lt-lg',
        'fxLayoutAlign.lt-xl',
        'fxLayoutAlign.gt-xs',
        'fxLayoutAlign.gt-sm',
        'fxLayoutAlign.gt-md',
        'fxLayoutAlign.gt-lg',
      ];
      let R1 = (() => {
          class n extends Ie {
            constructor(e, i, r, s) {
              super(e, r, i, s),
                (this.DIRECTIVE_KEY = 'layout-align'),
                (this.layout = 'row'),
                (this.inline = !1),
                this.init(),
                this.marshal
                  .trackValue(this.nativeElement, 'layout')
                  .pipe(Qe(this.destroySubject))
                  .subscribe(this.onLayoutChange.bind(this));
            }
            updateWithValue(e) {
              const i = this.layout || 'row',
                r = this.inline;
              'row' === i && r
                ? (this.styleCache = V1)
                : 'row' !== i || r
                ? 'row-reverse' === i && r
                  ? (this.styleCache = H1)
                  : 'row-reverse' !== i || r
                  ? 'column' === i && r
                    ? (this.styleCache = B1)
                    : 'column' !== i || r
                    ? 'column-reverse' === i && r
                      ? (this.styleCache = j1)
                      : 'column-reverse' === i && !r && (this.styleCache = L1)
                    : (this.styleCache = P1)
                  : (this.styleCache = N1)
                : (this.styleCache = k1),
                this.addStyles(e, {layout: i, inline: r});
            }
            onLayoutChange(e) {
              const i = e.value.split(' ');
              (this.layout = i[0]),
                (this.inline = e.value.includes('inline')),
                ol.find(r => r === this.layout) || (this.layout = 'row'),
                this.triggerUpdate();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(j), p(Ce), p(F1), p(Ee));
            }),
            (n.ɵdir = w({type: n, features: [x]})),
            n
          );
        })(),
        hC = (() => {
          class n extends R1 {
            constructor() {
              super(...arguments), (this.inputs = O1);
            }
          }
          return (
            (n.ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = k(n)))(i || n);
              };
            })()),
            (n.ɵdir = w({
              type: n,
              selectors: [
                ['', 'fxLayoutAlign', ''],
                ['', 'fxLayoutAlign.xs', ''],
                ['', 'fxLayoutAlign.sm', ''],
                ['', 'fxLayoutAlign.md', ''],
                ['', 'fxLayoutAlign.lg', ''],
                ['', 'fxLayoutAlign.xl', ''],
                ['', 'fxLayoutAlign.lt-sm', ''],
                ['', 'fxLayoutAlign.lt-md', ''],
                ['', 'fxLayoutAlign.lt-lg', ''],
                ['', 'fxLayoutAlign.lt-xl', ''],
                ['', 'fxLayoutAlign.gt-xs', ''],
                ['', 'fxLayoutAlign.gt-sm', ''],
                ['', 'fxLayoutAlign.gt-md', ''],
                ['', 'fxLayoutAlign.gt-lg', ''],
              ],
              inputs: {
                fxLayoutAlign: 'fxLayoutAlign',
                'fxLayoutAlign.xs': 'fxLayoutAlign.xs',
                'fxLayoutAlign.sm': 'fxLayoutAlign.sm',
                'fxLayoutAlign.md': 'fxLayoutAlign.md',
                'fxLayoutAlign.lg': 'fxLayoutAlign.lg',
                'fxLayoutAlign.xl': 'fxLayoutAlign.xl',
                'fxLayoutAlign.lt-sm': 'fxLayoutAlign.lt-sm',
                'fxLayoutAlign.lt-md': 'fxLayoutAlign.lt-md',
                'fxLayoutAlign.lt-lg': 'fxLayoutAlign.lt-lg',
                'fxLayoutAlign.lt-xl': 'fxLayoutAlign.lt-xl',
                'fxLayoutAlign.gt-xs': 'fxLayoutAlign.gt-xs',
                'fxLayoutAlign.gt-sm': 'fxLayoutAlign.gt-sm',
                'fxLayoutAlign.gt-md': 'fxLayoutAlign.gt-md',
                'fxLayoutAlign.gt-lg': 'fxLayoutAlign.gt-lg',
              },
              features: [x],
            })),
            n
          );
        })();
      const k1 = new Map(),
        P1 = new Map(),
        N1 = new Map(),
        L1 = new Map(),
        V1 = new Map(),
        B1 = new Map(),
        H1 = new Map(),
        j1 = new Map();
      let pC = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[yf, Jr]]})),
            n
          );
        })(),
        wC = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[yf]]})),
            n
          );
        })(),
        cL = (() => {
          class n {
            constructor(e, i) {
              qr(i) &&
                !e &&
                console.warn(
                  'Warning: Flex Layout loaded on the server without FlexLayoutServerModule',
                );
            }
            static withConfig(e, i = []) {
              return {
                ngModule: n,
                providers: e.serverLoaded
                  ? [
                      {
                        provide: gn,
                        useValue: Object.assign(Object.assign({}, vf), e),
                      },
                      {provide: bf, useValue: i, multi: !0},
                      {provide: Yr, useValue: !0},
                    ]
                  : [
                      {
                        provide: gn,
                        useValue: Object.assign(Object.assign({}, vf), e),
                      },
                      {provide: bf, useValue: i, multi: !0},
                    ],
              };
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Yr), b(Vt));
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[pC, lC, wC], pC, lC, wC]})),
            n
          );
        })();
      const {isArray: uL} = Array,
        {getPrototypeOf: dL, prototype: fL, keys: hL} = Object;
      const {isArray: mL} = Array;
      function DC(n) {
        return rt(t =>
          (function _L(n, t) {
            return mL(t) ? n(...t) : n(t);
          })(n, t),
        );
      }
      function yL(n, t) {
        return n.reduce((e, i, r) => ((e[i] = t[r]), e), {});
      }
      function EC(...n) {
        const t = (function ex(n) {
            return ie(cc(n)) ? n.pop() : void 0;
          })(n),
          {args: e, keys: i} = (function pL(n) {
            if (1 === n.length) {
              const t = n[0];
              if (uL(t)) return {args: t, keys: null};
              if (
                (function gL(n) {
                  return n && 'object' == typeof n && dL(n) === fL;
                })(t)
              ) {
                const e = hL(t);
                return {args: e.map(i => t[i]), keys: e};
              }
            }
            return {args: n, keys: null};
          })(n),
          r = new Me(s => {
            const {length: o} = e;
            if (!o) return void s.complete();
            const a = new Array(o);
            let l = o,
              c = o;
            for (let u = 0; u < o; u++) {
              let d = !1;
              wt(e[u]).subscribe(
                Je(
                  s,
                  f => {
                    d || ((d = !0), c--), (a[u] = f);
                  },
                  () => l--,
                  void 0,
                  () => {
                    (!l || !d) && (c || s.next(i ? yL(i, a) : a), s.complete());
                  },
                ),
              );
            }
          });
        return t ? r.pipe(DC(t)) : r;
      }
      let xC = (() => {
          class n {
            constructor(e, i) {
              (this._renderer = e),
                (this._elementRef = i),
                (this.onChange = r => {}),
                (this.onTouched = () => {});
            }
            setProperty(e, i) {
              this._renderer.setProperty(this._elementRef.nativeElement, e, i);
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            registerOnChange(e) {
              this.onChange = e;
            }
            setDisabledState(e) {
              this.setProperty('disabled', e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(Gn), p(j));
            }),
            (n.ɵdir = w({type: n})),
            n
          );
        })(),
        $i = (() => {
          class n extends xC {}
          return (
            (n.ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = k(n)))(i || n);
              };
            })()),
            (n.ɵdir = w({type: n, features: [x]})),
            n
          );
        })();
      const mn = new I('NgValueAccessor'),
        bL = {provide: mn, useExisting: _e(() => cl), multi: !0},
        wL = new I('CompositionEventMode');
      let cl = (() => {
        class n extends xC {
          constructor(e, i, r) {
            super(e, i),
              (this._compositionMode = r),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function CL() {
                  const n = In() ? In().getUserAgent() : '';
                  return /android (\d+)/.test(n.toLowerCase());
                })());
          }
          writeValue(e) {
            this.setProperty('value', null == e ? '' : e);
          }
          _handleInput(e) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(e);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(e) {
            (this._composing = !1), this._compositionMode && this.onChange(e);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(Gn), p(j), p(wL, 8));
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (e, i) {
              1 & e &&
                ve('input', function (s) {
                  return i._handleInput(s.target.value);
                })('blur', function () {
                  return i.onTouched();
                })('compositionstart', function () {
                  return i._compositionStart();
                })('compositionend', function (s) {
                  return i._compositionEnd(s.target.value);
                });
            },
            features: [ue([bL]), x],
          })),
          n
        );
      })();
      function hi(n) {
        return null == n || 0 === n.length;
      }
      function AC(n) {
        return null != n && 'number' == typeof n.length;
      }
      const dt = new I('NgValidators'),
        pi = new I('NgAsyncValidators'),
        DL =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class SC {
        static min(t) {
          return (function IC(n) {
            return t => {
              if (hi(t.value) || hi(n)) return null;
              const e = parseFloat(t.value);
              return !isNaN(e) && e < n
                ? {min: {min: n, actual: t.value}}
                : null;
            };
          })(t);
        }
        static max(t) {
          return (function TC(n) {
            return t => {
              if (hi(t.value) || hi(n)) return null;
              const e = parseFloat(t.value);
              return !isNaN(e) && e > n
                ? {max: {max: n, actual: t.value}}
                : null;
            };
          })(t);
        }
        static required(t) {
          return (function FC(n) {
            return hi(n.value) ? {required: !0} : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function OC(n) {
            return !0 === n.value ? null : {required: !0};
          })(t);
        }
        static email(t) {
          return (function RC(n) {
            return hi(n.value) || DL.test(n.value) ? null : {email: !0};
          })(t);
        }
        static minLength(t) {
          return (function kC(n) {
            return t =>
              hi(t.value) || !AC(t.value)
                ? null
                : t.value.length < n
                ? {minlength: {requiredLength: n, actualLength: t.value.length}}
                : null;
          })(t);
        }
        static maxLength(t) {
          return (function PC(n) {
            return t =>
              AC(t.value) && t.value.length > n
                ? {maxlength: {requiredLength: n, actualLength: t.value.length}}
                : null;
          })(t);
        }
        static pattern(t) {
          return (function NC(n) {
            if (!n) return ul;
            let t, e;
            return (
              'string' == typeof n
                ? ((e = ''),
                  '^' !== n.charAt(0) && (e += '^'),
                  (e += n),
                  '$' !== n.charAt(n.length - 1) && (e += '$'),
                  (t = new RegExp(e)))
                : ((e = n.toString()), (t = n)),
              i => {
                if (hi(i.value)) return null;
                const r = i.value;
                return t.test(r)
                  ? null
                  : {pattern: {requiredPattern: e, actualValue: r}};
              }
            );
          })(t);
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          return GC(t);
        }
        static composeAsync(t) {
          return $C(t);
        }
      }
      function ul(n) {
        return null;
      }
      function LC(n) {
        return null != n;
      }
      function VC(n) {
        const t = xa(n) ? nr(n) : n;
        return b_(t), t;
      }
      function BC(n) {
        let t = {};
        return (
          n.forEach(e => {
            t = null != e ? Object.assign(Object.assign({}, t), e) : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function HC(n, t) {
        return t.map(e => e(n));
      }
      function jC(n) {
        return n.map(t =>
          (function EL(n) {
            return !n.validate;
          })(t)
            ? t
            : e => t.validate(e),
        );
      }
      function GC(n) {
        if (!n) return null;
        const t = n.filter(LC);
        return 0 == t.length
          ? null
          : function (e) {
              return BC(HC(e, t));
            };
      }
      function xf(n) {
        return null != n ? GC(jC(n)) : null;
      }
      function $C(n) {
        if (!n) return null;
        const t = n.filter(LC);
        return 0 == t.length
          ? null
          : function (e) {
              return EC(HC(e, t).map(VC)).pipe(rt(BC));
            };
      }
      function Mf(n) {
        return null != n ? $C(jC(n)) : null;
      }
      function UC(n, t) {
        return null === n ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
      }
      function zC(n) {
        return n._rawValidators;
      }
      function WC(n) {
        return n._rawAsyncValidators;
      }
      function Af(n) {
        return n ? (Array.isArray(n) ? n : [n]) : [];
      }
      function dl(n, t) {
        return Array.isArray(n) ? n.includes(t) : n === t;
      }
      function qC(n, t) {
        const e = Af(t);
        return (
          Af(n).forEach(r => {
            dl(e, r) || e.push(r);
          }),
          e
        );
      }
      function KC(n, t) {
        return Af(t).filter(e => !dl(n, e));
      }
      class YC {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(t) {
          (this._rawValidators = t || []),
            (this._composedValidatorFn = xf(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = Mf(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(t) {
          this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(t => t()),
            (this._onDestroyCallbacks = []);
        }
        reset(t) {
          this.control && this.control.reset(t);
        }
        hasError(t, e) {
          return !!this.control && this.control.hasError(t, e);
        }
        getError(t, e) {
          return this.control ? this.control.getError(t, e) : null;
        }
      }
      class Tn extends YC {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class bt extends YC {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      let ZC = (() => {
        class n extends class QC {
          constructor(t) {
            this._cd = t;
          }
          is(t) {
            var e, i, r;
            return 'submitted' === t
              ? !!(null === (e = this._cd) || void 0 === e
                  ? void 0
                  : e.submitted)
              : !!(null ===
                  (r =
                    null === (i = this._cd) || void 0 === i
                      ? void 0
                      : i.control) || void 0 === r
                  ? void 0
                  : r[t]);
          }
        } {
          constructor(e) {
            super(e);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(Tn, 2));
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [
              ['', 'formControlName', ''],
              ['', 'ngModel', ''],
              ['', 'formControl', ''],
            ],
            hostVars: 14,
            hostBindings: function (e, i) {
              2 & e &&
                Pt('ng-untouched', i.is('untouched'))(
                  'ng-touched',
                  i.is('touched'),
                )('ng-pristine', i.is('pristine'))('ng-dirty', i.is('dirty'))(
                  'ng-valid',
                  i.is('valid'),
                )('ng-invalid', i.is('invalid'))('ng-pending', i.is('pending'));
            },
            features: [x],
          })),
          n
        );
      })();
      function fo(n, t) {
        Tf(n, t),
          t.valueAccessor.writeValue(n.value),
          (function RL(n, t) {
            t.valueAccessor.registerOnChange(e => {
              (n._pendingValue = e),
                (n._pendingChange = !0),
                (n._pendingDirty = !0),
                'change' === n.updateOn && JC(n, t);
            });
          })(n, t),
          (function PL(n, t) {
            const e = (i, r) => {
              t.valueAccessor.writeValue(i), r && t.viewToModelUpdate(i);
            };
            n.registerOnChange(e),
              t._registerOnDestroy(() => {
                n._unregisterOnChange(e);
              });
          })(n, t),
          (function kL(n, t) {
            t.valueAccessor.registerOnTouched(() => {
              (n._pendingTouched = !0),
                'blur' === n.updateOn && n._pendingChange && JC(n, t),
                'submit' !== n.updateOn && n.markAsTouched();
            });
          })(n, t),
          (function OL(n, t) {
            if (t.valueAccessor.setDisabledState) {
              const e = i => {
                t.valueAccessor.setDisabledState(i);
              };
              n.registerOnDisabledChange(e),
                t._registerOnDestroy(() => {
                  n._unregisterOnDisabledChange(e);
                });
            }
          })(n, t);
      }
      function pl(n, t, e = !0) {
        const i = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(i),
          t.valueAccessor.registerOnTouched(i)),
          ml(n, t),
          n &&
            (t._invokeOnDestroyCallbacks(),
            n._registerOnCollectionChange(() => {}));
      }
      function gl(n, t) {
        n.forEach(e => {
          e.registerOnValidatorChange && e.registerOnValidatorChange(t);
        });
      }
      function Tf(n, t) {
        const e = zC(n);
        null !== t.validator
          ? n.setValidators(UC(e, t.validator))
          : 'function' == typeof e && n.setValidators([e]);
        const i = WC(n);
        null !== t.asyncValidator
          ? n.setAsyncValidators(UC(i, t.asyncValidator))
          : 'function' == typeof i && n.setAsyncValidators([i]);
        const r = () => n.updateValueAndValidity();
        gl(t._rawValidators, r), gl(t._rawAsyncValidators, r);
      }
      function ml(n, t) {
        let e = !1;
        if (null !== n) {
          if (null !== t.validator) {
            const r = zC(n);
            if (Array.isArray(r) && r.length > 0) {
              const s = r.filter(o => o !== t.validator);
              s.length !== r.length && ((e = !0), n.setValidators(s));
            }
          }
          if (null !== t.asyncValidator) {
            const r = WC(n);
            if (Array.isArray(r) && r.length > 0) {
              const s = r.filter(o => o !== t.asyncValidator);
              s.length !== r.length && ((e = !0), n.setAsyncValidators(s));
            }
          }
        }
        const i = () => {};
        return gl(t._rawValidators, i), gl(t._rawAsyncValidators, i), e;
      }
      function JC(n, t) {
        n._pendingDirty && n.markAsDirty(),
          n.setValue(n._pendingValue, {emitModelToViewChange: !1}),
          t.viewToModelUpdate(n._pendingValue),
          (n._pendingChange = !1);
      }
      function ew(n, t) {
        Tf(n, t);
      }
      function nw(n, t) {
        n._syncPendingControls(),
          t.forEach(e => {
            const i = e.control;
            'submit' === i.updateOn &&
              i._pendingChange &&
              (e.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
          });
      }
      function Rf(n, t) {
        const e = n.indexOf(t);
        e > -1 && n.splice(e, 1);
      }
      const ho = 'VALID',
        _l = 'INVALID',
        es = 'PENDING',
        po = 'DISABLED';
      function Pf(n) {
        return (yl(n) ? n.validators : n) || null;
      }
      function iw(n) {
        return Array.isArray(n) ? xf(n) : n || null;
      }
      function Nf(n, t) {
        return (yl(t) ? t.asyncValidators : n) || null;
      }
      function rw(n) {
        return Array.isArray(n) ? Mf(n) : n || null;
      }
      function yl(n) {
        return null != n && !Array.isArray(n) && 'object' == typeof n;
      }
      const sw = n => n instanceof cw,
        Lf = n => n instanceof Bf;
      function ow(n) {
        return sw(n) ? n.value : n.getRawValue();
      }
      function aw(n, t) {
        const e = Lf(n),
          i = n.controls;
        if (!(e ? Object.keys(i) : i).length) throw new T(1e3, '');
        if (!i[t]) throw new T(1001, '');
      }
      function lw(n, t) {
        Lf(n),
          n._forEachChild((i, r) => {
            if (void 0 === t[r]) throw new T(1002, '');
          });
      }
      class Vf {
        constructor(t, e) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = iw(this._rawValidators)),
            (this._composedAsyncValidatorFn = rw(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === ho;
        }
        get invalid() {
          return this.status === _l;
        }
        get pending() {
          return this.status == es;
        }
        get disabled() {
          return this.status === po;
        }
        get enabled() {
          return this.status !== po;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = iw(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = rw(t));
        }
        addValidators(t) {
          this.setValidators(qC(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(qC(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(KC(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(KC(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return dl(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return dl(this._rawAsyncValidators, t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({onlySelf: !0}),
            this._forEachChild(t => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(e => {
              e.markAsUntouched({onlySelf: !0});
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(e => {
              e.markAsPristine({onlySelf: !0});
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = es),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = po),
            (this.errors = null),
            this._forEachChild(i => {
              i.disable(Object.assign(Object.assign({}, t), {onlySelf: !0}));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), {skipPristineCheck: e}),
            ),
            this._onDisabledChange.forEach(i => i(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = ho),
            this._forEachChild(i => {
              i.enable(Object.assign(Object.assign({}, t), {onlySelf: !0}));
            }),
            this.updateValueAndValidity({onlySelf: !0, emitEvent: t.emitEvent}),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), {skipPristineCheck: e}),
            ),
            this._onDisabledChange.forEach(i => i(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === ho || this.status === es) &&
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = {emitEvent: !0}) {
          this._forEachChild(e => e._updateTreeValidity(t)),
            this.updateValueAndValidity({onlySelf: !0, emitEvent: t.emitEvent});
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? po : ho;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = es), (this._hasOwnPendingAsyncValidator = !0);
            const e = VC(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe(i => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(i, {emitEvent: t});
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function BL(n, t, e) {
            if (
              null == t ||
              (Array.isArray(t) || (t = t.split(e)),
              Array.isArray(t) && 0 === t.length)
            )
              return null;
            let i = n;
            return (
              t.forEach(r => {
                i = Lf(i)
                  ? i.controls.hasOwnProperty(r)
                    ? i.controls[r]
                    : null
                  : ((n => n instanceof jL)(i) && i.at(r)) || null;
              }),
              i
            );
          })(this, t, '.');
        }
        getError(t, e) {
          const i = e ? this.get(e) : this;
          return i && i.errors ? i.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new ce()), (this.statusChanges = new ce());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? po
            : this.errors
            ? _l
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(es)
            ? es
            : this._anyControlsHaveStatus(_l)
            ? _l
            : ho;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls(e => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls(t => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(t => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            'object' == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            'value' in t &&
            'disabled' in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          yl(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class cw extends Vf {
        constructor(t = null, e, i) {
          super(Pf(e), Nf(i, e)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            yl(e) &&
              e.initialValueIsDefault &&
              (this.defaultValue = this._isBoxedValue(t) ? t.value : t);
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach(i =>
                i(this.value, !1 !== e.emitViewToModelChange),
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = this.defaultValue, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          Rf(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          Rf(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({onlySelf: !0, emitEvent: !1})
                : this.enable({onlySelf: !0, emitEvent: !1}))
            : (this.value = this._pendingValue = t);
        }
      }
      class Bf extends Vf {
        constructor(t, e, i) {
          super(Pf(e), Nf(i, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e, i = {}) {
          this.registerControl(t, e),
            this.updateValueAndValidity({emitEvent: i.emitEvent}),
            this._onCollectionChange();
        }
        removeControl(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({emitEvent: e.emitEvent}),
            this._onCollectionChange();
        }
        setControl(t, e, i = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity({emitEvent: i.emitEvent}),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          lw(this, t),
            Object.keys(t).forEach(i => {
              aw(this, i),
                this.controls[i].setValue(t[i], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (Object.keys(t).forEach(i => {
              this.controls[i] &&
                this.controls[i].patchValue(t[i], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = {}, e = {}) {
          this._forEachChild((i, r) => {
            i.reset(t[r], {onlySelf: !0, emitEvent: e.emitEvent});
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, e, i) => ((t[i] = ow(e)), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (e, i) => !!i._syncPendingControls() || e,
          );
          return t && this.updateValueAndValidity({onlySelf: !0}), t;
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(e => {
            const i = this.controls[e];
            i && t(i, e);
          });
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const i = this.controls[e];
            if (this.contains(e) && t(i)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, i) => ((e.enabled || this.disabled) && (t[i] = e.value), t),
          );
        }
        _reduceChildren(t, e) {
          let i = t;
          return (
            this._forEachChild((r, s) => {
              i = e(i, r, s);
            }),
            i
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
      }
      class jL extends Vf {
        constructor(t, e, i) {
          super(Pf(e), Nf(i, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(t) {
          return this.controls[t];
        }
        push(t, e = {}) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity({emitEvent: e.emitEvent}),
            this._onCollectionChange();
        }
        insert(t, e, i = {}) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity({emitEvent: i.emitEvent});
        }
        removeAt(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity({emitEvent: e.emitEvent});
        }
        setControl(t, e, i = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity({emitEvent: i.emitEvent}),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          lw(this, t),
            t.forEach((i, r) => {
              aw(this, r),
                this.at(r).setValue(i, {onlySelf: !0, emitEvent: e.emitEvent});
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (t.forEach((i, r) => {
              this.at(r) &&
                this.at(r).patchValue(i, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = [], e = {}) {
          this._forEachChild((i, r) => {
            i.reset(t[r], {onlySelf: !0, emitEvent: e.emitEvent});
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map(t => ow(t));
        }
        clear(t = {}) {
          this.controls.length < 1 ||
            (this._forEachChild(e => e._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({emitEvent: t.emitEvent}));
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (e, i) => !!i._syncPendingControls() || e,
            !1,
          );
          return t && this.updateValueAndValidity({onlySelf: !0}), t;
        }
        _forEachChild(t) {
          this.controls.forEach((e, i) => {
            t(e, i);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(t => t.enabled || this.disabled)
            .map(t => t.value);
        }
        _anyControls(t) {
          return this.controls.some(e => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild(t => this._registerControl(t));
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const GL = {provide: bt, useExisting: _e(() => mo)},
        go = (() => Promise.resolve(null))();
      let mo = (() => {
        class n extends bt {
          constructor(e, i) {
            super(),
              (this.submitted = !1),
              (this._directives = new Set()),
              (this.ngSubmit = new ce()),
              (this.form = new Bf({}, xf(e), Mf(i)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(e) {
            go.then(() => {
              const i = this._findContainer(e.path);
              (e.control = i.registerControl(e.name, e.control)),
                fo(e.control, e),
                e.control.updateValueAndValidity({emitEvent: !1}),
                this._directives.add(e);
            });
          }
          getControl(e) {
            return this.form.get(e.path);
          }
          removeControl(e) {
            go.then(() => {
              const i = this._findContainer(e.path);
              i && i.removeControl(e.name), this._directives.delete(e);
            });
          }
          addFormGroup(e) {
            go.then(() => {
              const i = this._findContainer(e.path),
                r = new Bf({});
              ew(r, e),
                i.registerControl(e.name, r),
                r.updateValueAndValidity({emitEvent: !1});
            });
          }
          removeFormGroup(e) {
            go.then(() => {
              const i = this._findContainer(e.path);
              i && i.removeControl(e.name);
            });
          }
          getFormGroup(e) {
            return this.form.get(e.path);
          }
          updateModel(e, i) {
            go.then(() => {
              this.form.get(e.path).setValue(i);
            });
          }
          setValue(e) {
            this.control.setValue(e);
          }
          onSubmit(e) {
            return (
              (this.submitted = !0),
              nw(this.form, this._directives),
              this.ngSubmit.emit(e),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(e) {
            this.form.reset(e), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(e) {
            return e.pop(), e.length ? this.form.get(e) : this.form;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(dt, 10), p(pi, 10));
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [
              ['form', 3, 'ngNoForm', '', 3, 'formGroup', ''],
              ['ng-form'],
              ['', 'ngForm', ''],
            ],
            hostBindings: function (e, i) {
              1 & e &&
                ve('submit', function (s) {
                  return i.onSubmit(s);
                })('reset', function () {
                  return i.onReset();
                });
            },
            inputs: {options: ['ngFormOptions', 'options']},
            outputs: {ngSubmit: 'ngSubmit'},
            exportAs: ['ngForm'],
            features: [ue([GL]), x],
          })),
          n
        );
      })();
      const UL = {provide: Tn, useExisting: _e(() => Hf)},
        fw = (() => Promise.resolve(null))();
      let Hf = (() => {
          class n extends Tn {
            constructor(e, i, r, s, o) {
              super(),
                (this._changeDetectorRef = o),
                (this.control = new cw()),
                (this._registered = !1),
                (this.update = new ce()),
                (this._parent = e),
                this._setValidators(i),
                this._setAsyncValidators(r),
                (this.valueAccessor = (function Of(n, t) {
                  if (!t) return null;
                  let e, i, r;
                  return (
                    Array.isArray(t),
                    t.forEach(s => {
                      s.constructor === cl
                        ? (e = s)
                        : (function VL(n) {
                            return Object.getPrototypeOf(n.constructor) === $i;
                          })(s)
                        ? (i = s)
                        : (r = s);
                    }),
                    r || i || e || null
                  );
                })(0, s));
            }
            ngOnChanges(e) {
              if ((this._checkForErrors(), !this._registered || 'name' in e)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const i = e.name.previousValue;
                  this.formDirective.removeControl({
                    name: i,
                    path: this._getPath(i),
                  });
                }
                this._setUpControl();
              }
              'isDisabled' in e && this._updateDisabled(e),
                (function Ff(n, t) {
                  if (!n.hasOwnProperty('model')) return !1;
                  const e = n.model;
                  return !!e.isFirstChange() || !Object.is(t, e.currentValue);
                })(e, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(e) {
              (this.viewModel = e), this.update.emit(e);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              fo(this.control, this),
                this.control.updateValueAndValidity({emitEvent: !1});
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(e) {
              fw.then(() => {
                var i;
                this.control.setValue(e, {emitViewToModelChange: !1}),
                  null === (i = this._changeDetectorRef) ||
                    void 0 === i ||
                    i.markForCheck();
              });
            }
            _updateDisabled(e) {
              const i = e.isDisabled.currentValue,
                r = '' === i || (i && 'false' !== i);
              fw.then(() => {
                var s;
                r && !this.control.disabled
                  ? this.control.disable()
                  : !r && this.control.disabled && this.control.enable(),
                  null === (s = this._changeDetectorRef) ||
                    void 0 === s ||
                    s.markForCheck();
              });
            }
            _getPath(e) {
              return this._parent
                ? (function hl(n, t) {
                    return [...t.path, n];
                  })(e, this._parent)
                : [e];
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                p(bt, 9),
                p(dt, 10),
                p(pi, 10),
                p(mn, 10),
                p(Li, 8),
              );
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [
                [
                  '',
                  'ngModel',
                  '',
                  3,
                  'formControlName',
                  '',
                  3,
                  'formControl',
                  '',
                ],
              ],
              inputs: {
                name: 'name',
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
                options: ['ngModelOptions', 'options'],
              },
              outputs: {update: 'ngModelChange'},
              exportAs: ['ngModel'],
              features: [ue([UL]), x, ht],
            })),
            n
          );
        })(),
        pw = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({})),
            n
          );
        })();
      const ZL = {provide: bt, useExisting: _e(() => _o)};
      let _o = (() => {
          class n extends bt {
            constructor(e, i) {
              super(),
                (this.validators = e),
                (this.asyncValidators = i),
                (this.submitted = !1),
                (this._onCollectionChange = () => this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new ce()),
                this._setValidators(e),
                this._setAsyncValidators(i);
            }
            ngOnChanges(e) {
              this._checkFormPresent(),
                e.hasOwnProperty('form') &&
                  (this._updateValidators(),
                  this._updateDomValue(),
                  this._updateRegistrations(),
                  (this._oldForm = this.form));
            }
            ngOnDestroy() {
              this.form &&
                (ml(this.form, this),
                this.form._onCollectionChange === this._onCollectionChange &&
                  this.form._registerOnCollectionChange(() => {}));
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            addControl(e) {
              const i = this.form.get(e.path);
              return (
                fo(i, e),
                i.updateValueAndValidity({emitEvent: !1}),
                this.directives.push(e),
                i
              );
            }
            getControl(e) {
              return this.form.get(e.path);
            }
            removeControl(e) {
              pl(e.control || null, e, !1), Rf(this.directives, e);
            }
            addFormGroup(e) {
              this._setUpFormContainer(e);
            }
            removeFormGroup(e) {
              this._cleanUpFormContainer(e);
            }
            getFormGroup(e) {
              return this.form.get(e.path);
            }
            addFormArray(e) {
              this._setUpFormContainer(e);
            }
            removeFormArray(e) {
              this._cleanUpFormContainer(e);
            }
            getFormArray(e) {
              return this.form.get(e.path);
            }
            updateModel(e, i) {
              this.form.get(e.path).setValue(i);
            }
            onSubmit(e) {
              return (
                (this.submitted = !0),
                nw(this.form, this.directives),
                this.ngSubmit.emit(e),
                !1
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(e) {
              this.form.reset(e), (this.submitted = !1);
            }
            _updateDomValue() {
              this.directives.forEach(e => {
                const i = e.control,
                  r = this.form.get(e.path);
                i !== r &&
                  (pl(i || null, e), sw(r) && (fo(r, e), (e.control = r)));
              }),
                this.form._updateTreeValidity({emitEvent: !1});
            }
            _setUpFormContainer(e) {
              const i = this.form.get(e.path);
              ew(i, e), i.updateValueAndValidity({emitEvent: !1});
            }
            _cleanUpFormContainer(e) {
              if (this.form) {
                const i = this.form.get(e.path);
                i &&
                  (function NL(n, t) {
                    return ml(n, t);
                  })(i, e) &&
                  i.updateValueAndValidity({emitEvent: !1});
              }
            }
            _updateRegistrations() {
              this.form._registerOnCollectionChange(this._onCollectionChange),
                this._oldForm &&
                  this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
              Tf(this.form, this), this._oldForm && ml(this._oldForm, this);
            }
            _checkFormPresent() {}
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(dt, 10), p(pi, 10));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (e, i) {
                1 & e &&
                  ve('submit', function (s) {
                    return i.onSubmit(s);
                  })('reset', function () {
                    return i.onReset();
                  });
              },
              inputs: {form: ['formGroup', 'form']},
              outputs: {ngSubmit: 'ngSubmit'},
              exportAs: ['ngForm'],
              features: [ue([ZL]), x, ht],
            })),
            n
          );
        })(),
        mV = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[pw]]})),
            n
          );
        })(),
        _V = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [mV]})),
            n
          );
        })();
      class yV extends Le {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      const vl = {
        setInterval(n, t, ...e) {
          const {delegate: i} = vl;
          return (null == i ? void 0 : i.setInterval)
            ? i.setInterval(n, t, ...e)
            : setInterval(n, t, ...e);
        },
        clearInterval(n) {
          const {delegate: t} = vl;
          return ((null == t ? void 0 : t.clearInterval) || clearInterval)(n);
        },
        delegate: void 0,
      };
      class Wf extends yV {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          var i;
          if (this.closed) return this;
          this.state = t;
          const r = this.id,
            s = this.scheduler;
          return (
            null != r && (this.id = this.recycleAsyncId(s, r, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id =
              null !== (i = this.id) && void 0 !== i
                ? i
                : this.requestAsyncId(s, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, i = 0) {
          return vl.setInterval(t.flush.bind(t, this), i);
        }
        recycleAsyncId(t, e, i = 0) {
          if (null != i && this.delay === i && !1 === this.pending) return e;
          null != e && vl.clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const i = this._execute(t, e);
          if (i) return i;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let r,
            i = !1;
          try {
            this.work(t);
          } catch (s) {
            (i = !0),
              (r = s || new Error('Scheduled action threw falsy error'));
          }
          if (i) return this.unsubscribe(), r;
        }
        unsubscribe() {
          if (!this.closed) {
            const {id: t, scheduler: e} = this,
              {actions: i} = e;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              tr(i, this),
              null != t && (this.id = this.recycleAsyncId(e, t, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
      const qf = {now: () => (qf.delegate || Date).now(), delegate: void 0};
      class yo {
        constructor(t, e = yo.now) {
          (this.schedulerActionCtor = t), (this.now = e);
        }
        schedule(t, e = 0, i) {
          return new this.schedulerActionCtor(this, t).schedule(i, e);
        }
      }
      yo.now = qf.now;
      class Kf extends yo {
        constructor(t, e = yo.now) {
          super(t, e), (this.actions = []), (this._active = !1);
        }
        flush(t) {
          const {actions: e} = this;
          if (this._active) return void e.push(t);
          let i;
          this._active = !0;
          do {
            if ((i = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this._active = !1), i)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw i;
          }
        }
      }
      const Yf = new Kf(Wf),
        vV = Yf;
      function Qf(n, t = Yf) {
        return Xe((e, i) => {
          let r = null,
            s = null,
            o = null;
          const a = () => {
            if (r) {
              r.unsubscribe(), (r = null);
              const c = s;
              (s = null), i.next(c);
            }
          };
          function l() {
            const c = o + n,
              u = t.now();
            if (u < c) return (r = this.schedule(void 0, c - u)), void i.add(r);
            a();
          }
          e.subscribe(
            Je(
              i,
              c => {
                (s = c), (o = t.now()), r || ((r = t.schedule(l, n)), i.add(r));
              },
              () => {
                a(), i.complete();
              },
              void 0,
              () => {
                s = r = null;
              },
            ),
          );
        });
      }
      let Zf,
        Ow = (() => {
          class n {
            create(e) {
              return 'undefined' == typeof MutationObserver
                ? null
                : new MutationObserver(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        bV = (() => {
          class n {
            constructor(e) {
              (this._mutationObserverFactory = e),
                (this._observedElements = new Map());
            }
            ngOnDestroy() {
              this._observedElements.forEach((e, i) =>
                this._cleanupObserver(i),
              );
            }
            observe(e) {
              const i = Zr(e);
              return new Me(r => {
                const o = this._observeElement(i).subscribe(r);
                return () => {
                  o.unsubscribe(), this._unobserveElement(i);
                };
              });
            }
            _observeElement(e) {
              if (this._observedElements.has(e))
                this._observedElements.get(e).count++;
              else {
                const i = new de(),
                  r = this._mutationObserverFactory.create(s => i.next(s));
                r &&
                  r.observe(e, {characterData: !0, childList: !0, subtree: !0}),
                  this._observedElements.set(e, {
                    observer: r,
                    stream: i,
                    count: 1,
                  });
              }
              return this._observedElements.get(e).stream;
            }
            _unobserveElement(e) {
              this._observedElements.has(e) &&
                (this._observedElements.get(e).count--,
                this._observedElements.get(e).count ||
                  this._cleanupObserver(e));
            }
            _cleanupObserver(e) {
              if (this._observedElements.has(e)) {
                const {observer: i, stream: r} = this._observedElements.get(e);
                i && i.disconnect(),
                  r.complete(),
                  this._observedElements.delete(e);
              }
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Ow));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        CV = (() => {
          class n {
            constructor(e, i, r) {
              (this._contentObserver = e),
                (this._elementRef = i),
                (this._ngZone = r),
                (this.event = new ce()),
                (this._disabled = !1),
                (this._currentSubscription = null);
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(e) {
              (this._disabled = we(e)),
                this._disabled ? this._unsubscribe() : this._subscribe();
            }
            get debounce() {
              return this._debounce;
            }
            set debounce(e) {
              (this._debounce = Df(e)), this._subscribe();
            }
            ngAfterContentInit() {
              !this._currentSubscription && !this.disabled && this._subscribe();
            }
            ngOnDestroy() {
              this._unsubscribe();
            }
            _subscribe() {
              this._unsubscribe();
              const e = this._contentObserver.observe(this._elementRef);
              this._ngZone.runOutsideAngular(() => {
                this._currentSubscription = (
                  this.debounce ? e.pipe(Qf(this.debounce)) : e
                ).subscribe(this.event);
              });
            }
            _unsubscribe() {
              var e;
              null === (e = this._currentSubscription) ||
                void 0 === e ||
                e.unsubscribe();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(bV), p(j), p(se));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [['', 'cdkObserveContent', '']],
              inputs: {
                disabled: ['cdkObserveContentDisabled', 'disabled'],
                debounce: 'debounce',
              },
              outputs: {event: 'cdkObserveContent'},
              exportAs: ['cdkObserveContent'],
            })),
            n
          );
        })(),
        wV = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({providers: [Ow]})),
            n
          );
        })();
      try {
        Zf = 'undefined' != typeof Intl && Intl.v8BreakIterator;
      } catch (n) {
        Zf = !1;
      }
      let ts,
        Fn = (() => {
          class n {
            constructor(e) {
              (this._platformId = e),
                (this.isBrowser = this._platformId
                  ? ci(this._platformId)
                  : 'object' == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !Zf) &&
                  'undefined' != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !('MSStream' in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Vt));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })();
      const kw = [
        'color',
        'button',
        'checkbox',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ];
      function Pw() {
        if (ts) return ts;
        if ('object' != typeof document || !document)
          return (ts = new Set(kw)), ts;
        let n = document.createElement('input');
        return (
          (ts = new Set(
            kw.filter(t => (n.setAttribute('type', t), n.type === t)),
          )),
          ts
        );
      }
      let vo, zi;
      function bl(n) {
        return (function DV() {
          if (null == vo && 'undefined' != typeof window)
            try {
              window.addEventListener(
                'test',
                null,
                Object.defineProperty({}, 'passive', {get: () => (vo = !0)}),
              );
            } finally {
              vo = vo || !1;
            }
          return vo;
        })()
          ? n
          : !!n.capture;
      }
      function EV() {
        if (null == zi) {
          if (
            'object' != typeof document ||
            !document ||
            'function' != typeof Element ||
            !Element
          )
            return (zi = !1), zi;
          if ('scrollBehavior' in document.documentElement.style) zi = !0;
          else {
            const n = Element.prototype.scrollTo;
            zi = !!n && !/\{\s*\[native code\]\s*\}/.test(n.toString());
          }
        }
        return zi;
      }
      function Nw(n) {
        return n.composedPath ? n.composedPath()[0] : n.target;
      }
      function Jf() {
        return (
          ('undefined' != typeof __karma__ && !!__karma__) ||
          ('undefined' != typeof jasmine && !!jasmine) ||
          ('undefined' != typeof jest && !!jest) ||
          ('undefined' != typeof Mocha && !!Mocha)
        );
      }
      function bo(n, ...t) {
        return t.length
          ? t.some(e => n[e])
          : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
      }
      class jV extends class HV {
        constructor(t) {
          (this._items = t),
            (this._activeItemIndex = -1),
            (this._activeItem = null),
            (this._wrap = !1),
            (this._letterKeyStream = new de()),
            (this._typeaheadSubscription = Le.EMPTY),
            (this._vertical = !0),
            (this._allowedModifierKeys = []),
            (this._homeAndEnd = !1),
            (this._skipPredicateFn = e => e.disabled),
            (this._pressedLetters = []),
            (this.tabOut = new de()),
            (this.change = new de()),
            t instanceof Zs &&
              t.changes.subscribe(e => {
                if (this._activeItem) {
                  const r = e.toArray().indexOf(this._activeItem);
                  r > -1 &&
                    r !== this._activeItemIndex &&
                    (this._activeItemIndex = r);
                }
              });
        }
        skipPredicate(t) {
          return (this._skipPredicateFn = t), this;
        }
        withWrap(t = !0) {
          return (this._wrap = t), this;
        }
        withVerticalOrientation(t = !0) {
          return (this._vertical = t), this;
        }
        withHorizontalOrientation(t) {
          return (this._horizontal = t), this;
        }
        withAllowedModifierKeys(t) {
          return (this._allowedModifierKeys = t), this;
        }
        withTypeAhead(t = 200) {
          return (
            this._typeaheadSubscription.unsubscribe(),
            (this._typeaheadSubscription = this._letterKeyStream
              .pipe(
                Kr(e => this._pressedLetters.push(e)),
                Qf(t),
                di(() => this._pressedLetters.length > 0),
                rt(() => this._pressedLetters.join('')),
              )
              .subscribe(e => {
                const i = this._getItemsArray();
                for (let r = 1; r < i.length + 1; r++) {
                  const s = (this._activeItemIndex + r) % i.length,
                    o = i[s];
                  if (
                    !this._skipPredicateFn(o) &&
                    0 === o.getLabel().toUpperCase().trim().indexOf(e)
                  ) {
                    this.setActiveItem(s);
                    break;
                  }
                }
                this._pressedLetters = [];
              })),
            this
          );
        }
        withHomeAndEnd(t = !0) {
          return (this._homeAndEnd = t), this;
        }
        setActiveItem(t) {
          const e = this._activeItem;
          this.updateActiveItem(t),
            this._activeItem !== e && this.change.next(this._activeItemIndex);
        }
        onKeydown(t) {
          const e = t.keyCode,
            r = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(
              s => !t[s] || this._allowedModifierKeys.indexOf(s) > -1,
            );
          switch (e) {
            case 9:
              return void this.tabOut.next();
            case 40:
              if (this._vertical && r) {
                this.setNextItemActive();
                break;
              }
              return;
            case 38:
              if (this._vertical && r) {
                this.setPreviousItemActive();
                break;
              }
              return;
            case 39:
              if (this._horizontal && r) {
                'rtl' === this._horizontal
                  ? this.setPreviousItemActive()
                  : this.setNextItemActive();
                break;
              }
              return;
            case 37:
              if (this._horizontal && r) {
                'rtl' === this._horizontal
                  ? this.setNextItemActive()
                  : this.setPreviousItemActive();
                break;
              }
              return;
            case 36:
              if (this._homeAndEnd && r) {
                this.setFirstItemActive();
                break;
              }
              return;
            case 35:
              if (this._homeAndEnd && r) {
                this.setLastItemActive();
                break;
              }
              return;
            default:
              return void (
                (r || bo(t, 'shiftKey')) &&
                (t.key && 1 === t.key.length
                  ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
                  : ((e >= 65 && e <= 90) || (e >= 48 && e <= 57)) &&
                    this._letterKeyStream.next(String.fromCharCode(e)))
              );
          }
          (this._pressedLetters = []), t.preventDefault();
        }
        get activeItemIndex() {
          return this._activeItemIndex;
        }
        get activeItem() {
          return this._activeItem;
        }
        isTyping() {
          return this._pressedLetters.length > 0;
        }
        setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        setNextItemActive() {
          this._activeItemIndex < 0
            ? this.setFirstItemActive()
            : this._setActiveItemByDelta(1);
        }
        setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap
            ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
        }
        updateActiveItem(t) {
          const e = this._getItemsArray(),
            i = 'number' == typeof t ? t : e.indexOf(t),
            r = e[i];
          (this._activeItem = null == r ? null : r),
            (this._activeItemIndex = i);
        }
        _setActiveItemByDelta(t) {
          this._wrap
            ? this._setActiveInWrapMode(t)
            : this._setActiveInDefaultMode(t);
        }
        _setActiveInWrapMode(t) {
          const e = this._getItemsArray();
          for (let i = 1; i <= e.length; i++) {
            const r = (this._activeItemIndex + t * i + e.length) % e.length;
            if (!this._skipPredicateFn(e[r])) return void this.setActiveItem(r);
          }
        }
        _setActiveInDefaultMode(t) {
          this._setActiveItemByIndex(this._activeItemIndex + t, t);
        }
        _setActiveItemByIndex(t, e) {
          const i = this._getItemsArray();
          if (i[t]) {
            for (; this._skipPredicateFn(i[t]); ) if (!i[(t += e)]) return;
            this.setActiveItem(t);
          }
        }
        _getItemsArray() {
          return this._items instanceof Zs
            ? this._items.toArray()
            : this._items;
        }
      } {
        setActiveItem(t) {
          this.activeItem && this.activeItem.setInactiveStyles(),
            super.setActiveItem(t),
            this.activeItem && this.activeItem.setActiveStyles();
        }
      }
      const YV = new I('liveAnnouncerElement', {
          providedIn: 'root',
          factory: function QV() {
            return null;
          },
        }),
        ZV = new I('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      let XV = (() => {
        class n {
          constructor(e, i, r, s) {
            (this._ngZone = i),
              (this._defaultOptions = s),
              (this._document = r),
              (this._liveElement = e || this._createLiveElement());
          }
          announce(e, ...i) {
            const r = this._defaultOptions;
            let s, o;
            return (
              1 === i.length && 'number' == typeof i[0]
                ? (o = i[0])
                : ([s, o] = i),
              this.clear(),
              clearTimeout(this._previousTimeout),
              s || (s = r && r.politeness ? r.politeness : 'polite'),
              null == o && r && (o = r.duration),
              this._liveElement.setAttribute('aria-live', s),
              this._ngZone.runOutsideAngular(
                () => (
                  this._currentPromise ||
                    (this._currentPromise = new Promise(
                      a => (this._currentResolve = a),
                    )),
                  clearTimeout(this._previousTimeout),
                  (this._previousTimeout = setTimeout(() => {
                    (this._liveElement.textContent = e),
                      'number' == typeof o &&
                        (this._previousTimeout = setTimeout(
                          () => this.clear(),
                          o,
                        )),
                      this._currentResolve(),
                      (this._currentPromise = this._currentResolve = void 0);
                  }, 100)),
                  this._currentPromise
                ),
              )
            );
          }
          clear() {
            this._liveElement && (this._liveElement.textContent = '');
          }
          ngOnDestroy() {
            var e, i;
            clearTimeout(this._previousTimeout),
              null === (e = this._liveElement) || void 0 === e || e.remove(),
              (this._liveElement = null),
              null === (i = this._currentResolve) ||
                void 0 === i ||
                i.call(this),
              (this._currentPromise = this._currentResolve = void 0);
          }
          _createLiveElement() {
            const e = 'cdk-live-announcer-element',
              i = this._document.getElementsByClassName(e),
              r = this._document.createElement('div');
            for (let s = 0; s < i.length; s++) i[s].remove();
            return (
              r.classList.add(e),
              r.classList.add('cdk-visually-hidden'),
              r.setAttribute('aria-atomic', 'true'),
              r.setAttribute('aria-live', 'polite'),
              this._document.body.appendChild(r),
              r
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(YV, 8), b(se), b(ee), b(ZV, 8));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const $w = 'cdk-high-contrast-black-on-white',
        Uw = 'cdk-high-contrast-white-on-black',
        rh = 'cdk-high-contrast-active';
      let JV = (() => {
        class n {
          constructor(e, i) {
            (this._platform = e), (this._document = i);
          }
          getHighContrastMode() {
            if (!this._platform.isBrowser) return 0;
            const e = this._document.createElement('div');
            (e.style.backgroundColor = 'rgb(1,2,3)'),
              (e.style.position = 'absolute'),
              this._document.body.appendChild(e);
            const i = this._document.defaultView || window,
              r = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
              s = ((r && r.backgroundColor) || '').replace(/ /g, '');
            switch ((e.remove(), s)) {
              case 'rgb(0,0,0)':
                return 2;
              case 'rgb(255,255,255)':
                return 1;
            }
            return 0;
          }
          _applyBodyHighContrastModeCssClasses() {
            if (
              !this._hasCheckedHighContrastMode &&
              this._platform.isBrowser &&
              this._document.body
            ) {
              const e = this._document.body.classList;
              e.remove(rh),
                e.remove($w),
                e.remove(Uw),
                (this._hasCheckedHighContrastMode = !0);
              const i = this.getHighContrastMode();
              1 === i
                ? (e.add(rh), e.add($w))
                : 2 === i && (e.add(rh), e.add(Uw));
            }
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Fn), b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      class zw {}
      const Kn = '*';
      function sh(n, t) {
        return {type: 7, name: n, definitions: t, options: {}};
      }
      function oh(n, t = null) {
        return {type: 4, styles: t, timings: n};
      }
      function Ww(n, t = null) {
        return {type: 2, steps: n, options: t};
      }
      function gi(n) {
        return {type: 6, styles: n, offset: null};
      }
      function wl(n, t, e) {
        return {type: 0, name: n, styles: t, options: e};
      }
      function Dl(n, t, e = null) {
        return {type: 1, expr: n, animation: t, options: e};
      }
      function tB(n = null) {
        return {type: 9, options: n};
      }
      function nB(n, t, e = null) {
        return {type: 11, selector: n, animation: t, options: e};
      }
      function qw(n) {
        Promise.resolve(null).then(n);
      }
      class Co {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(t => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          qw(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach(t => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach(t => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this._started = !1;
        }
        setPosition(t) {
          this._position = this.totalTime ? t * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(i => i()), (e.length = 0);
        }
      }
      class Kw {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            i = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? qw(() => this._onFinish())
            : this.players.forEach(o => {
                o.onDone(() => {
                  ++e == s && this._onFinish();
                }),
                  o.onDestroy(() => {
                    ++i == s && this._onDestroy();
                  }),
                  o.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (o, a) => Math.max(o, a.totalTime),
              0,
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(t => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach(t => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach(t => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach(t => t.play());
        }
        pause() {
          this.players.forEach(t => t.pause());
        }
        restart() {
          this.players.forEach(t => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach(t => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach(t => t.destroy()),
            this._onDestroyFns.forEach(t => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach(t => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach(i => {
            const r = i.totalTime ? Math.min(1, e / i.totalTime) : 1;
            i.setPosition(r);
          });
        }
        getPosition() {
          const t = this.players.reduce(
            (e, i) => (null === e || i.totalTime > e.totalTime ? i : e),
            null,
          );
          return null != t ? t.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach(t => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(i => i()), (e.length = 0);
        }
      }
      const te = !1;
      function Yw(n) {
        return new T(3e3, te);
      }
      function NB() {
        return 'undefined' != typeof window && void 0 !== window.document;
      }
      function lh() {
        return (
          'undefined' != typeof process &&
          '[object process]' === {}.toString.call(process)
        );
      }
      function mi(n) {
        switch (n.length) {
          case 0:
            return new Co();
          case 1:
            return n[0];
          default:
            return new Kw(n);
        }
      }
      function Qw(n, t, e, i, r = {}, s = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (i.forEach(u => {
            const d = u.offset,
              f = d == l,
              h = (f && c) || {};
            Object.keys(u).forEach(g => {
              let m = g,
                v = u[g];
              if ('offset' !== g)
                switch (((m = t.normalizePropertyName(m, o)), v)) {
                  case '!':
                    v = r[g];
                    break;
                  case Kn:
                    v = s[g];
                    break;
                  default:
                    v = t.normalizeStyleValue(g, m, v, o);
                }
              h[m] = v;
            }),
              f || a.push(h),
              (c = h),
              (l = d);
          }),
          o.length)
        )
          throw (function xB(n) {
            return new T(3502, te);
          })();
        return a;
      }
      function ch(n, t, e, i) {
        switch (t) {
          case 'start':
            n.onStart(() => i(e && uh(e, 'start', n)));
            break;
          case 'done':
            n.onDone(() => i(e && uh(e, 'done', n)));
            break;
          case 'destroy':
            n.onDestroy(() => i(e && uh(e, 'destroy', n)));
        }
      }
      function uh(n, t, e) {
        const i = e.totalTime,
          s = dh(
            n.element,
            n.triggerName,
            n.fromState,
            n.toState,
            t || n.phaseName,
            null == i ? n.totalTime : i,
            !!e.disabled,
          ),
          o = n._data;
        return null != o && (s._data = o), s;
      }
      function dh(n, t, e, i, r = '', s = 0, o) {
        return {
          element: n,
          triggerName: t,
          fromState: e,
          toState: i,
          phaseName: r,
          totalTime: s,
          disabled: !!o,
        };
      }
      function Bt(n, t, e) {
        let i;
        return (
          n instanceof Map
            ? ((i = n.get(t)), i || n.set(t, (i = e)))
            : ((i = n[t]), i || (i = n[t] = e)),
          i
        );
      }
      function Zw(n) {
        const t = n.indexOf(':');
        return [n.substring(1, t), n.substr(t + 1)];
      }
      let fh = (n, t) => !1,
        Xw = (n, t, e) => [],
        Jw = null;
      function hh(n) {
        const t = n.parentNode || n.host;
        return t === Jw ? null : t;
      }
      (lh() || 'undefined' != typeof Element) &&
        (NB()
          ? ((Jw = (() => document.documentElement)()),
            (fh = (n, t) => {
              for (; t; ) {
                if (t === n) return !0;
                t = hh(t);
              }
              return !1;
            }))
          : (fh = (n, t) => n.contains(t)),
        (Xw = (n, t, e) => {
          if (e) return Array.from(n.querySelectorAll(t));
          const i = n.querySelector(t);
          return i ? [i] : [];
        }));
      let Wi = null,
        eD = !1;
      function tD(n) {
        Wi ||
          ((Wi =
            (function VB() {
              return 'undefined' != typeof document ? document.body : null;
            })() || {}),
          (eD = !!Wi.style && 'WebkitAppearance' in Wi.style));
        let t = !0;
        return (
          Wi.style &&
            !(function LB(n) {
              return 'ebkit' == n.substring(1, 6);
            })(n) &&
            ((t = n in Wi.style),
            !t &&
              eD &&
              (t =
                'Webkit' + n.charAt(0).toUpperCase() + n.substr(1) in
                Wi.style)),
          t
        );
      }
      const nD = fh,
        iD = Xw;
      let rD = (() => {
          class n {
            validateStyleProperty(e) {
              return tD(e);
            }
            matchesElement(e, i) {
              return !1;
            }
            containsElement(e, i) {
              return nD(e, i);
            }
            getParentElement(e) {
              return hh(e);
            }
            query(e, i, r) {
              return iD(e, i, r);
            }
            computeStyle(e, i, r) {
              return r || '';
            }
            animate(e, i, r, s, o, a = [], l) {
              return new Co(r, s);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })(),
        ph = (() => {
          class n {}
          return (n.NOOP = new rD()), n;
        })();
      const gh = 'ng-enter',
        xl = 'ng-leave',
        Ml = 'ng-trigger',
        Al = '.ng-trigger',
        oD = 'ng-animating',
        mh = '.ng-animating';
      function qi(n) {
        if ('number' == typeof n) return n;
        const t = n.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : _h(parseFloat(t[1]), t[2]);
      }
      function _h(n, t) {
        return 's' === t ? 1e3 * n : n;
      }
      function Sl(n, t, e) {
        return n.hasOwnProperty('duration')
          ? n
          : (function jB(n, t, e) {
              let r,
                s = 0,
                o = '';
              if ('string' == typeof n) {
                const a = n.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
                );
                if (null === a)
                  return t.push(Yw()), {duration: 0, delay: 0, easing: ''};
                r = _h(parseFloat(a[1]), a[2]);
                const l = a[3];
                null != l && (s = _h(parseFloat(l), a[4]));
                const c = a[5];
                c && (o = c);
              } else r = n;
              if (!e) {
                let a = !1,
                  l = t.length;
                r < 0 &&
                  (t.push(
                    (function iB() {
                      return new T(3100, te);
                    })(),
                  ),
                  (a = !0)),
                  s < 0 &&
                    (t.push(
                      (function rB() {
                        return new T(3101, te);
                      })(),
                    ),
                    (a = !0)),
                  a && t.splice(l, 0, Yw());
              }
              return {duration: r, delay: s, easing: o};
            })(n, t, e);
      }
      function ns(n, t = {}) {
        return (
          Object.keys(n).forEach(e => {
            t[e] = n[e];
          }),
          t
        );
      }
      function _i(n, t, e = {}) {
        if (t) for (let i in n) e[i] = n[i];
        else ns(n, e);
        return e;
      }
      function lD(n, t, e) {
        return e ? t + ':' + e + ';' : '';
      }
      function cD(n) {
        let t = '';
        for (let e = 0; e < n.style.length; e++) {
          const i = n.style.item(e);
          t += lD(0, i, n.style.getPropertyValue(i));
        }
        for (const e in n.style)
          n.style.hasOwnProperty(e) &&
            !e.startsWith('_') &&
            (t += lD(0, UB(e), n.style[e]));
        n.setAttribute('style', t);
      }
      function On(n, t, e) {
        n.style &&
          (Object.keys(t).forEach(i => {
            const r = vh(i);
            e && !e.hasOwnProperty(i) && (e[i] = n.style[r]),
              (n.style[r] = t[i]);
          }),
          lh() && cD(n));
      }
      function Ki(n, t) {
        n.style &&
          (Object.keys(t).forEach(e => {
            const i = vh(e);
            n.style[i] = '';
          }),
          lh() && cD(n));
      }
      function wo(n) {
        return Array.isArray(n) ? (1 == n.length ? n[0] : Ww(n)) : n;
      }
      const yh = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function uD(n) {
        let t = [];
        if ('string' == typeof n) {
          let e;
          for (; (e = yh.exec(n)); ) t.push(e[1]);
          yh.lastIndex = 0;
        }
        return t;
      }
      function Il(n, t, e) {
        const i = n.toString(),
          r = i.replace(yh, (s, o) => {
            let a = t[o];
            return (
              t.hasOwnProperty(o) ||
                (e.push(
                  (function oB(n) {
                    return new T(3003, te);
                  })(),
                ),
                (a = '')),
              a.toString()
            );
          });
        return r == i ? n : r;
      }
      function Tl(n) {
        const t = [];
        let e = n.next();
        for (; !e.done; ) t.push(e.value), (e = n.next());
        return t;
      }
      const $B = /-+([a-z0-9])/g;
      function vh(n) {
        return n.replace($B, (...t) => t[1].toUpperCase());
      }
      function UB(n) {
        return n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      }
      function Ht(n, t, e) {
        switch (t.type) {
          case 7:
            return n.visitTrigger(t, e);
          case 0:
            return n.visitState(t, e);
          case 1:
            return n.visitTransition(t, e);
          case 2:
            return n.visitSequence(t, e);
          case 3:
            return n.visitGroup(t, e);
          case 4:
            return n.visitAnimate(t, e);
          case 5:
            return n.visitKeyframes(t, e);
          case 6:
            return n.visitStyle(t, e);
          case 8:
            return n.visitReference(t, e);
          case 9:
            return n.visitAnimateChild(t, e);
          case 10:
            return n.visitAnimateRef(t, e);
          case 11:
            return n.visitQuery(t, e);
          case 12:
            return n.visitStagger(t, e);
          default:
            throw (function aB(n) {
              return new T(3004, te);
            })();
        }
      }
      function dD(n, t) {
        return window.getComputedStyle(n)[t];
      }
      function QB(n, t) {
        const e = [];
        return (
          'string' == typeof n
            ? n.split(/\s*,\s*/).forEach(i =>
                (function ZB(n, t, e) {
                  if (':' == n[0]) {
                    const l = (function XB(n, t) {
                      switch (n) {
                        case ':enter':
                          return 'void => *';
                        case ':leave':
                          return '* => void';
                        case ':increment':
                          return (e, i) => parseFloat(i) > parseFloat(e);
                        case ':decrement':
                          return (e, i) => parseFloat(i) < parseFloat(e);
                        default:
                          return (
                            t.push(
                              (function CB(n) {
                                return new T(3016, te);
                              })(),
                            ),
                            '* => *'
                          );
                      }
                    })(n, e);
                    if ('function' == typeof l) return void t.push(l);
                    n = l;
                  }
                  const i = n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == i || i.length < 4)
                    return (
                      e.push(
                        (function bB(n) {
                          return new T(3015, te);
                        })(),
                      ),
                      t
                    );
                  const r = i[1],
                    s = i[2],
                    o = i[3];
                  t.push(fD(r, o));
                  '<' == s[0] && !('*' == r && '*' == o) && t.push(fD(o, r));
                })(i, e, t),
              )
            : e.push(n),
          e
        );
      }
      const kl = new Set(['true', '1']),
        Pl = new Set(['false', '0']);
      function fD(n, t) {
        const e = kl.has(n) || Pl.has(n),
          i = kl.has(t) || Pl.has(t);
        return (r, s) => {
          let o = '*' == n || n == r,
            a = '*' == t || t == s;
          return (
            !o && e && 'boolean' == typeof r && (o = r ? kl.has(n) : Pl.has(n)),
            !a && i && 'boolean' == typeof s && (a = s ? kl.has(t) : Pl.has(t)),
            o && a
          );
        };
      }
      const JB = new RegExp('s*:selfs*,?', 'g');
      function bh(n, t, e, i) {
        return new e2(n).build(t, e, i);
      }
      class e2 {
        constructor(t) {
          this._driver = t;
        }
        build(t, e, i) {
          const r = new r2(e);
          this._resetContextStyleTimingState(r);
          const s = Ht(this, wo(t), r);
          return (
            r.unsupportedCSSPropertiesFound.size &&
              r.unsupportedCSSPropertiesFound.keys(),
            s
          );
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ''),
            (t.collectedStyles = {}),
            (t.collectedStyles[''] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let i = (e.queryCount = 0),
            r = (e.depCount = 0);
          const s = [],
            o = [];
          return (
            '@' == t.name.charAt(0) &&
              e.errors.push(
                (function cB() {
                  return new T(3006, te);
                })(),
              ),
            t.definitions.forEach(a => {
              if ((this._resetContextStyleTimingState(e), 0 == a.type)) {
                const l = a,
                  c = l.name;
                c
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach(u => {
                    (l.name = u), s.push(this.visitState(l, e));
                  }),
                  (l.name = c);
              } else if (1 == a.type) {
                const l = this.visitTransition(a, e);
                (i += l.queryCount), (r += l.depCount), o.push(l);
              } else
                e.errors.push(
                  (function uB() {
                    return new T(3007, te);
                  })(),
                );
            }),
            {
              type: 7,
              name: t.name,
              states: s,
              transitions: o,
              queryCount: i,
              depCount: r,
              options: null,
            }
          );
        }
        visitState(t, e) {
          const i = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null;
          if (i.containsDynamicStyles) {
            const s = new Set(),
              o = r || {};
            i.styles.forEach(a => {
              if (Nl(a)) {
                const l = a;
                Object.keys(l).forEach(c => {
                  uD(l[c]).forEach(u => {
                    o.hasOwnProperty(u) || s.add(u);
                  });
                });
              }
            }),
              s.size &&
                (Tl(s.values()),
                e.errors.push(
                  (function dB(n, t) {
                    return new T(3008, te);
                  })(),
                ));
          }
          return {
            type: 0,
            name: t.name,
            style: i,
            options: r ? {params: r} : null,
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const i = Ht(this, wo(t.animation), e);
          return {
            type: 1,
            matchers: QB(t.expr, e.errors),
            animation: i,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: Yi(t.options),
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map(i => Ht(this, i, e)),
            options: Yi(t.options),
          };
        }
        visitGroup(t, e) {
          const i = e.currentTime;
          let r = 0;
          const s = t.steps.map(o => {
            e.currentTime = i;
            const a = Ht(this, o, e);
            return (r = Math.max(r, e.currentTime)), a;
          });
          return (
            (e.currentTime = r), {type: 3, steps: s, options: Yi(t.options)}
          );
        }
        visitAnimate(t, e) {
          const i = (function o2(n, t) {
            if (n.hasOwnProperty('duration')) return n;
            if ('number' == typeof n) return Ch(Sl(n, t).duration, 0, '');
            const e = n;
            if (
              e.split(/\s+/).some(s => '{' == s.charAt(0) && '{' == s.charAt(1))
            ) {
              const s = Ch(0, 0, '');
              return (s.dynamic = !0), (s.strValue = e), s;
            }
            const r = Sl(e, t);
            return Ch(r.duration, r.delay, r.easing);
          })(t.timings, e.errors);
          e.currentAnimateTimings = i;
          let r,
            s = t.styles ? t.styles : gi({});
          if (5 == s.type) r = this.visitKeyframes(s, e);
          else {
            let o = t.styles,
              a = !1;
            if (!o) {
              a = !0;
              const c = {};
              i.easing && (c.easing = i.easing), (o = gi(c));
            }
            e.currentTime += i.duration + i.delay;
            const l = this.visitStyle(o, e);
            (l.isEmptyStep = a), (r = l);
          }
          return (
            (e.currentAnimateTimings = null),
            {type: 4, timings: i, style: r, options: null}
          );
        }
        visitStyle(t, e) {
          const i = this._makeStyleAst(t, e);
          return this._validateStyleAst(i, e), i;
        }
        _makeStyleAst(t, e) {
          const i = [];
          Array.isArray(t.styles)
            ? t.styles.forEach(o => {
                'string' == typeof o
                  ? o == Kn
                    ? i.push(o)
                    : e.errors.push(
                        (function fB(n) {
                          return new T(3002, te);
                        })(),
                      )
                  : i.push(o);
              })
            : i.push(t.styles);
          let r = !1,
            s = null;
          return (
            i.forEach(o => {
              if (Nl(o)) {
                const a = o,
                  l = a.easing;
                if ((l && ((s = l), delete a.easing), !r))
                  for (let c in a)
                    if (a[c].toString().indexOf('{{') >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: i,
              easing: s,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null,
            }
          );
        }
        _validateStyleAst(t, e) {
          const i = e.currentAnimateTimings;
          let r = e.currentTime,
            s = e.currentTime;
          i && s > 0 && (s -= i.duration + i.delay),
            t.styles.forEach(o => {
              'string' != typeof o &&
                Object.keys(o).forEach(a => {
                  if (!this._driver.validateStyleProperty(a))
                    return (
                      delete o[a], void e.unsupportedCSSPropertiesFound.add(a)
                    );
                  const l = e.collectedStyles[e.currentQuerySelector],
                    c = l[a];
                  let u = !0;
                  c &&
                    (s != r &&
                      s >= c.startTime &&
                      r <= c.endTime &&
                      (e.errors.push(
                        (function hB(n, t, e, i, r) {
                          return new T(3010, te);
                        })(),
                      ),
                      (u = !1)),
                    (s = c.startTime)),
                    u && (l[a] = {startTime: s, endTime: r}),
                    e.options &&
                      (function GB(n, t, e) {
                        const i = t.params || {},
                          r = uD(n);
                        r.length &&
                          r.forEach(s => {
                            i.hasOwnProperty(s) ||
                              e.push(
                                (function sB(n) {
                                  return new T(3001, te);
                                })(),
                              );
                          });
                      })(o[a], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const i = {type: 5, styles: [], options: null};
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                (function pB() {
                  return new T(3011, te);
                })(),
              ),
              i
            );
          let s = 0;
          const o = [];
          let a = !1,
            l = !1,
            c = 0;
          const u = t.steps.map(y => {
            const _ = this._makeStyleAst(y, e);
            let D =
                null != _.offset
                  ? _.offset
                  : (function s2(n) {
                      if ('string' == typeof n) return null;
                      let t = null;
                      if (Array.isArray(n))
                        n.forEach(e => {
                          if (Nl(e) && e.hasOwnProperty('offset')) {
                            const i = e;
                            (t = parseFloat(i.offset)), delete i.offset;
                          }
                        });
                      else if (Nl(n) && n.hasOwnProperty('offset')) {
                        const e = n;
                        (t = parseFloat(e.offset)), delete e.offset;
                      }
                      return t;
                    })(_.styles),
              O = 0;
            return (
              null != D && (s++, (O = _.offset = D)),
              (l = l || O < 0 || O > 1),
              (a = a || O < c),
              (c = O),
              o.push(O),
              _
            );
          });
          l &&
            e.errors.push(
              (function gB() {
                return new T(3012, te);
              })(),
            ),
            a &&
              e.errors.push(
                (function mB() {
                  return new T(3200, te);
                })(),
              );
          const d = t.steps.length;
          let f = 0;
          s > 0 && s < d
            ? e.errors.push(
                (function _B() {
                  return new T(3202, te);
                })(),
              )
            : 0 == s && (f = 1 / (d - 1));
          const h = d - 1,
            g = e.currentTime,
            m = e.currentAnimateTimings,
            v = m.duration;
          return (
            u.forEach((y, _) => {
              const D = f > 0 ? (_ == h ? 1 : f * _) : o[_],
                O = D * v;
              (e.currentTime = g + m.delay + O),
                (m.duration = O),
                this._validateStyleAst(y, e),
                (y.offset = D),
                i.styles.push(y);
            }),
            i
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: Ht(this, wo(t.animation), e),
            options: Yi(t.options),
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, {type: 9, options: Yi(t.options)};
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: Yi(t.options),
          };
        }
        visitQuery(t, e) {
          const i = e.currentQuerySelector,
            r = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [s, o] = (function t2(n) {
            const t = !!n.split(/\s*,\s*/).find(e => ':self' == e);
            return (
              t && (n = n.replace(JB, '')),
              (n = n
                .replace(/@\*/g, Al)
                .replace(/@\w+/g, e => Al + '-' + e.substr(1))
                .replace(/:animating/g, mh)),
              [n, t]
            );
          })(t.selector);
          (e.currentQuerySelector = i.length ? i + ' ' + s : s),
            Bt(e.collectedStyles, e.currentQuerySelector, {});
          const a = Ht(this, wo(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = i),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: o,
              animation: a,
              originalSelector: t.selector,
              options: Yi(t.options),
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push(
              (function yB() {
                return new T(3013, te);
              })(),
            );
          const i =
            'full' === t.timings
              ? {duration: 0, delay: 0, easing: 'full'}
              : Sl(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: Ht(this, wo(t.animation), e),
            timings: i,
            options: null,
          };
        }
      }
      class r2 {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null),
            (this.unsupportedCSSPropertiesFound = new Set());
        }
      }
      function Nl(n) {
        return !Array.isArray(n) && 'object' == typeof n;
      }
      function Yi(n) {
        return (
          n
            ? (n = ns(n)).params &&
              (n.params = (function n2(n) {
                return n ? ns(n) : null;
              })(n.params))
            : (n = {}),
          n
        );
      }
      function Ch(n, t, e) {
        return {duration: n, delay: t, easing: e};
      }
      function wh(n, t, e, i, r, s, o = null, a = !1) {
        return {
          type: 1,
          element: n,
          keyframes: t,
          preStyleProps: e,
          postStyleProps: i,
          duration: r,
          delay: s,
          totalTime: r + s,
          easing: o,
          subTimeline: a,
        };
      }
      class Ll {
        constructor() {
          this._map = new Map();
        }
        get(t) {
          return this._map.get(t) || [];
        }
        append(t, e) {
          let i = this._map.get(t);
          i || this._map.set(t, (i = [])), i.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const c2 = new RegExp(':enter', 'g'),
        d2 = new RegExp(':leave', 'g');
      function Dh(n, t, e, i, r, s = {}, o = {}, a, l, c = []) {
        return new f2().buildKeyframes(n, t, e, i, r, s, o, a, l, c);
      }
      class f2 {
        buildKeyframes(t, e, i, r, s, o, a, l, c, u = []) {
          c = c || new Ll();
          const d = new Eh(t, e, c, r, s, u, []);
          (d.options = l),
            d.currentTimeline.setStyles([o], null, d.errors, l),
            Ht(this, i, d);
          const f = d.timelines.filter(h => h.containsAnimation());
          if (Object.keys(a).length) {
            let h;
            for (let g = f.length - 1; g >= 0; g--) {
              const m = f[g];
              if (m.element === e) {
                h = m;
                break;
              }
            }
            h &&
              !h.allowOnlyTimelineStyles() &&
              h.setStyles([a], null, d.errors, l);
          }
          return f.length
            ? f.map(h => h.buildKeyframes())
            : [wh(e, [], [], [], 0, 0, '', !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const i = e.subInstructions.get(e.element);
          if (i) {
            const r = e.createSubContext(t.options),
              s = e.currentTimeline.currentTime,
              o = this._visitSubInstructions(i, r, r.options);
            s != o && e.transformIntoNewTimeline(o);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const i = e.createSubContext(t.options);
          i.transformIntoNewTimeline(),
            this.visitReference(t.animation, i),
            e.transformIntoNewTimeline(i.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, i) {
          let s = e.currentTimeline.currentTime;
          const o = null != i.duration ? qi(i.duration) : null,
            a = null != i.delay ? qi(i.delay) : null;
          return (
            0 !== o &&
              t.forEach(l => {
                const c = e.appendInstructionToTimeline(l, o, a);
                s = Math.max(s, c.duration + c.delay);
              }),
            s
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            Ht(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const i = e.subContextCount;
          let r = e;
          const s = t.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = e.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = Vl));
            const o = qi(s.delay);
            r.delayNextStep(o);
          }
          t.steps.length &&
            (t.steps.forEach(o => Ht(this, o, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > i && r.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const i = [];
          let r = e.currentTimeline.currentTime;
          const s = t.options && t.options.delay ? qi(t.options.delay) : 0;
          t.steps.forEach(o => {
            const a = e.createSubContext(t.options);
            s && a.delayNextStep(s),
              Ht(this, o, a),
              (r = Math.max(r, a.currentTimeline.currentTime)),
              i.push(a.currentTimeline);
          }),
            i.forEach(o => e.currentTimeline.mergeTimelineCollectedStyles(o)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const i = t.strValue;
            return Sl(e.params ? Il(i, e.params, e.errors) : i, e.errors);
          }
          return {duration: t.duration, delay: t.delay, easing: t.easing};
        }
        visitAnimate(t, e) {
          const i = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline;
          i.delay && (e.incrementTime(i.delay), r.snapshotCurrentStyles());
          const s = t.style;
          5 == s.type
            ? this.visitKeyframes(s, e)
            : (e.incrementTime(i.duration),
              this.visitStyle(s, e),
              r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const i = e.currentTimeline,
            r = e.currentAnimateTimings;
          !r && i.getCurrentStyleProperties().length && i.forwardFrame();
          const s = (r && r.easing) || t.easing;
          t.isEmptyStep
            ? i.applyEmptyStep(s)
            : i.setStyles(t.styles, s, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const i = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            s = i.duration,
            a = e.createSubContext().currentTimeline;
          (a.easing = i.easing),
            t.styles.forEach(l => {
              a.forwardTime((l.offset || 0) * s),
                a.setStyles(l.styles, l.easing, e.errors, e.options),
                a.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(a),
            e.transformIntoNewTimeline(r + s),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const i = e.currentTimeline.currentTime,
            r = t.options || {},
            s = r.delay ? qi(r.delay) : 0;
          s &&
            (6 === e.previousNode.type ||
              (0 == i &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = Vl));
          let o = i;
          const a = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!r.optional,
            e.errors,
          );
          e.currentQueryTotal = a.length;
          let l = null;
          a.forEach((c, u) => {
            e.currentQueryIndex = u;
            const d = e.createSubContext(t.options, c);
            s && d.delayNextStep(s),
              c === e.element && (l = d.currentTimeline),
              Ht(this, t.animation, d),
              d.currentTimeline.applyStylesToKeyframe(),
              (o = Math.max(o, d.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(o),
            l &&
              (e.currentTimeline.mergeTimelineCollectedStyles(l),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const i = e.parentContext,
            r = e.currentTimeline,
            s = t.timings,
            o = Math.abs(s.duration),
            a = o * (e.currentQueryTotal - 1);
          let l = o * e.currentQueryIndex;
          switch (s.duration < 0 ? 'reverse' : s.easing) {
            case 'reverse':
              l = a - l;
              break;
            case 'full':
              l = i.currentStaggerTime;
          }
          const u = e.currentTimeline;
          l && u.delayNextStep(l);
          const d = u.currentTime;
          Ht(this, t.animation, e),
            (e.previousNode = t),
            (i.currentStaggerTime =
              r.currentTime - d + (r.startTime - i.currentTimeline.startTime));
        }
      }
      const Vl = {};
      class Eh {
        constructor(t, e, i, r, s, o, a, l) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = i),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = o),
            (this.timelines = a),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Vl),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = l || new Bl(this._driver, e, 0)),
            a.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const i = t;
          let r = this.options;
          null != i.duration && (r.duration = qi(i.duration)),
            null != i.delay && (r.delay = qi(i.delay));
          const s = i.params;
          if (s) {
            let o = r.params;
            o || (o = this.options.params = {}),
              Object.keys(s).forEach(a => {
                (!e || !o.hasOwnProperty(a)) &&
                  (o[a] = Il(s[a], o, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const i = (t.params = {});
              Object.keys(e).forEach(r => {
                i[r] = e[r];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, i) {
          const r = e || this.element,
            s = new Eh(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, i || 0),
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(t),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = Vl),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, i) {
          const r = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != i ? i : 0) +
                t.delay,
              easing: '',
            },
            s = new h2(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe,
            );
          return this.timelines.push(s), r;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, i, r, s, o) {
          let a = [];
          if ((r && a.push(this.element), t.length > 0)) {
            t = (t = t.replace(c2, '.' + this._enterClassName)).replace(
              d2,
              '.' + this._leaveClassName,
            );
            let c = this._driver.query(this.element, t, 1 != i);
            0 !== i &&
              (c = i < 0 ? c.slice(c.length + i, c.length) : c.slice(0, i)),
              a.push(...c);
          }
          return (
            !s &&
              0 == a.length &&
              o.push(
                (function vB(n) {
                  return new T(3014, te);
                })(),
              ),
            a
          );
        }
      }
      class Bl {
        constructor(t, e, i, r) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = i),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(e)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles,
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new Bl(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup,
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = {time: this.currentTime, value: e});
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach(e => {
              (this._backFill[e] = this._globalTimelineStyles[e] || Kn),
                (this._currentKeyframe[e] = Kn);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, i, r) {
          e && (this._previousKeyframe.easing = e);
          const s = (r && r.params) || {},
            o = (function p2(n, t) {
              const e = {};
              let i;
              return (
                n.forEach(r => {
                  '*' === r
                    ? ((i = i || Object.keys(t)),
                      i.forEach(s => {
                        e[s] = Kn;
                      }))
                    : _i(r, !1, e);
                }),
                e
              );
            })(t, this._globalTimelineStyles);
          Object.keys(o).forEach(a => {
            const l = Il(o[a], s, i);
            (this._pendingStyles[a] = l),
              this._localTimelineStyles.hasOwnProperty(a) ||
                (this._backFill[a] = this._globalTimelineStyles.hasOwnProperty(
                  a,
                )
                  ? this._globalTimelineStyles[a]
                  : Kn),
              this._updateStyle(a, l);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach(i => {
              this._currentKeyframe[i] = t[i];
            }),
            Object.keys(this._localTimelineStyles).forEach(i => {
              this._currentKeyframe.hasOwnProperty(i) ||
                (this._currentKeyframe[i] = this._localTimelineStyles[i]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach(t => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach(e => {
            const i = this._styleSummary[e],
              r = t._styleSummary[e];
            (!i || r.time > i.time) && this._updateStyle(e, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            i = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((a, l) => {
            const c = _i(a, !0);
            Object.keys(c).forEach(u => {
              const d = c[u];
              '!' == d ? t.add(u) : d == Kn && e.add(u);
            }),
              i || (c.offset = l / this.duration),
              r.push(c);
          });
          const s = t.size ? Tl(t.values()) : [],
            o = e.size ? Tl(e.values()) : [];
          if (i) {
            const a = r[0],
              l = ns(a);
            (a.offset = 0), (l.offset = 1), (r = [a, l]);
          }
          return wh(
            this.element,
            r,
            s,
            o,
            this.duration,
            this.startTime,
            this.easing,
            !1,
          );
        }
      }
      class h2 extends Bl {
        constructor(t, e, i, r, s, o, a = !1) {
          super(t, e, o.delay),
            (this.keyframes = i),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = a),
            (this.timings = {
              duration: o.duration,
              delay: o.delay,
              easing: o.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            {delay: e, duration: i, easing: r} = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const s = [],
              o = i + e,
              a = e / o,
              l = _i(t[0], !1);
            (l.offset = 0), s.push(l);
            const c = _i(t[0], !1);
            (c.offset = gD(a)), s.push(c);
            const u = t.length - 1;
            for (let d = 1; d <= u; d++) {
              let f = _i(t[d], !1);
              (f.offset = gD((e + f.offset * i) / o)), s.push(f);
            }
            (i = o), (e = 0), (r = ''), (t = s);
          }
          return wh(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            i,
            e,
            r,
            !0,
          );
        }
      }
      function gD(n, t = 3) {
        const e = Math.pow(10, t - 1);
        return Math.round(n * e) / e;
      }
      class xh {}
      class g2 extends xh {
        normalizePropertyName(t, e) {
          return vh(t);
        }
        normalizeStyleValue(t, e, i, r) {
          let s = '';
          const o = i.toString().trim();
          if (m2[e] && 0 !== i && '0' !== i)
            if ('number' == typeof i) s = 'px';
            else {
              const a = i.match(/^[+-]?[\d\.]+([a-z]*)$/);
              a &&
                0 == a[1].length &&
                r.push(
                  (function lB(n, t) {
                    return new T(3005, te);
                  })(),
                );
            }
          return o + s;
        }
      }
      const m2 = (() =>
        (function _2(n) {
          const t = {};
          return n.forEach(e => (t[e] = !0)), t;
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ',',
          ),
        ))();
      function mD(n, t, e, i, r, s, o, a, l, c, u, d, f) {
        return {
          type: 0,
          element: n,
          triggerName: t,
          isRemovalTransition: r,
          fromState: e,
          fromStyles: s,
          toState: i,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: d,
          errors: f,
        };
      }
      const Mh = {};
      class _D {
        constructor(t, e, i) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = i);
        }
        match(t, e, i, r) {
          return (function y2(n, t, e, i, r) {
            return n.some(s => s(t, e, i, r));
          })(this.ast.matchers, t, e, i, r);
        }
        buildStyles(t, e, i) {
          const r = this._stateStyles['*'],
            s = this._stateStyles[t],
            o = r ? r.buildStyles(e, i) : {};
          return s ? s.buildStyles(e, i) : o;
        }
        build(t, e, i, r, s, o, a, l, c, u) {
          const d = [],
            f = (this.ast.options && this.ast.options.params) || Mh,
            g = this.buildStyles(i, (a && a.params) || Mh, d),
            m = (l && l.params) || Mh,
            v = this.buildStyles(r, m, d),
            y = new Set(),
            _ = new Map(),
            D = new Map(),
            O = 'void' === r,
            Z = {params: Object.assign(Object.assign({}, f), m)},
            xe = u ? [] : Dh(t, e, this.ast.animation, s, o, g, v, Z, c, d);
          let Te = 0;
          if (
            (xe.forEach($t => {
              Te = Math.max($t.duration + $t.delay, Te);
            }),
            d.length)
          )
            return mD(e, this._triggerName, i, r, O, g, v, [], [], _, D, Te, d);
          xe.forEach($t => {
            const Ut = $t.element,
              os = Bt(_, Ut, {});
            $t.preStyleProps.forEach(_n => (os[_n] = !0));
            const Yn = Bt(D, Ut, {});
            $t.postStyleProps.forEach(_n => (Yn[_n] = !0)),
              Ut !== e && y.add(Ut);
          });
          const Gt = Tl(y.values());
          return mD(e, this._triggerName, i, r, O, g, v, xe, Gt, _, D, Te);
        }
      }
      class v2 {
        constructor(t, e, i) {
          (this.styles = t), (this.defaultParams = e), (this.normalizer = i);
        }
        buildStyles(t, e) {
          const i = {},
            r = ns(this.defaultParams);
          return (
            Object.keys(t).forEach(s => {
              const o = t[s];
              null != o && (r[s] = o);
            }),
            this.styles.styles.forEach(s => {
              if ('string' != typeof s) {
                const o = s;
                Object.keys(o).forEach(a => {
                  let l = o[a];
                  l.length > 1 && (l = Il(l, r, e));
                  const c = this.normalizer.normalizePropertyName(a, e);
                  (l = this.normalizer.normalizeStyleValue(a, c, l, e)),
                    (i[c] = l);
                });
              }
            }),
            i
          );
        }
      }
      class C2 {
        constructor(t, e, i) {
          (this.name = t),
            (this.ast = e),
            (this._normalizer = i),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach(r => {
              this.states[r.name] = new v2(
                r.style,
                (r.options && r.options.params) || {},
                i,
              );
            }),
            yD(this.states, 'true', '1'),
            yD(this.states, 'false', '0'),
            e.transitions.forEach(r => {
              this.transitionFactories.push(new _D(t, r, this.states));
            }),
            (this.fallbackTransition = (function w2(n, t, e) {
              return new _D(
                n,
                {
                  type: 1,
                  animation: {type: 2, steps: [], options: null},
                  matchers: [(o, a) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                t,
              );
            })(t, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, i, r) {
          return (
            this.transitionFactories.find(o => o.match(t, e, i, r)) || null
          );
        }
        matchStyles(t, e, i) {
          return this.fallbackTransition.buildStyles(t, e, i);
        }
      }
      function yD(n, t, e) {
        n.hasOwnProperty(t)
          ? n.hasOwnProperty(e) || (n[e] = n[t])
          : n.hasOwnProperty(e) && (n[t] = n[e]);
      }
      const D2 = new Ll();
      class E2 {
        constructor(t, e, i) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = i),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const i = [],
            s = bh(this._driver, e, i, []);
          if (i.length)
            throw (function MB(n) {
              return new T(3503, te);
            })();
          this._animations[t] = s;
        }
        _buildPlayer(t, e, i) {
          const r = t.element,
            s = Qw(0, this._normalizer, 0, t.keyframes, e, i);
          return this._driver.animate(
            r,
            s,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0,
          );
        }
        create(t, e, i = {}) {
          const r = [],
            s = this._animations[t];
          let o;
          const a = new Map();
          if (
            (s
              ? ((o = Dh(this._driver, e, s, gh, xl, {}, {}, i, D2, r)),
                o.forEach(u => {
                  const d = Bt(a, u.element, {});
                  u.postStyleProps.forEach(f => (d[f] = null));
                }))
              : (r.push(
                  (function AB() {
                    return new T(3300, te);
                  })(),
                ),
                (o = [])),
            r.length)
          )
            throw (function SB(n) {
              return new T(3504, te);
            })();
          a.forEach((u, d) => {
            Object.keys(u).forEach(f => {
              u[f] = this._driver.computeStyle(d, f, Kn);
            });
          });
          const c = mi(
            o.map(u => {
              const d = a.get(u.element);
              return this._buildPlayer(u, {}, d);
            }),
          );
          return (
            (this._playersById[t] = c),
            c.onDestroy(() => this.destroy(t)),
            this.players.push(c),
            c
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const i = this.players.indexOf(e);
          i >= 0 && this.players.splice(i, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw (function IB(n) {
              return new T(3301, te);
            })();
          return e;
        }
        listen(t, e, i, r) {
          const s = dh(e, '', '', '');
          return ch(this._getPlayer(t), i, s, r), () => {};
        }
        command(t, e, i, r) {
          if ('register' == i) return void this.register(t, r[0]);
          if ('create' == i) return void this.create(t, e, r[0] || {});
          const s = this._getPlayer(t);
          switch (i) {
            case 'play':
              s.play();
              break;
            case 'pause':
              s.pause();
              break;
            case 'reset':
              s.reset();
              break;
            case 'restart':
              s.restart();
              break;
            case 'finish':
              s.finish();
              break;
            case 'init':
              s.init();
              break;
            case 'setPosition':
              s.setPosition(parseFloat(r[0]));
              break;
            case 'destroy':
              this.destroy(t);
          }
        }
      }
      const vD = 'ng-animate-queued',
        Ah = 'ng-animate-disabled',
        I2 = [],
        bD = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        T2 = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Jt = '__ng_removed';
      class Sh {
        constructor(t, e = '') {
          this.namespaceId = e;
          const i = t && t.hasOwnProperty('value');
          if (
            ((this.value = (function k2(n) {
              return null != n ? n : null;
            })(i ? t.value : t)),
            i)
          ) {
            const s = ns(t);
            delete s.value, (this.options = s);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const i = this.options.params;
            Object.keys(e).forEach(r => {
              null == i[r] && (i[r] = e[r]);
            });
          }
        }
      }
      const Do = 'void',
        Ih = new Sh(Do);
      class F2 {
        constructor(t, e, i) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = i),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + t),
            en(e, this._hostClassName);
        }
        listen(t, e, i, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw (function TB(n, t) {
              return new T(3302, te);
            })();
          if (null == i || 0 == i.length)
            throw (function FB(n) {
              return new T(3303, te);
            })();
          if (
            !(function P2(n) {
              return 'start' == n || 'done' == n;
            })(i)
          )
            throw (function OB(n, t) {
              return new T(3400, te);
            })();
          const s = Bt(this._elementListeners, t, []),
            o = {name: e, phase: i, callback: r};
          s.push(o);
          const a = Bt(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (en(t, Ml), en(t, Ml + '-' + e), (a[e] = Ih)),
            () => {
              this._engine.afterFlush(() => {
                const l = s.indexOf(o);
                l >= 0 && s.splice(l, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw (function RB(n) {
              return new T(3401, te);
            })();
          return e;
        }
        trigger(t, e, i, r = !0) {
          const s = this._getTrigger(e),
            o = new Th(this.id, e, t);
          let a = this._engine.statesByElement.get(t);
          a ||
            (en(t, Ml),
            en(t, Ml + '-' + e),
            this._engine.statesByElement.set(t, (a = {})));
          let l = a[e];
          const c = new Sh(i, this.id);
          if (
            (!(i && i.hasOwnProperty('value')) &&
              l &&
              c.absorbOptions(l.options),
            (a[e] = c),
            l || (l = Ih),
            c.value !== Do && l.value === c.value)
          ) {
            if (
              !(function V2(n, t) {
                const e = Object.keys(n),
                  i = Object.keys(t);
                if (e.length != i.length) return !1;
                for (let r = 0; r < e.length; r++) {
                  const s = e[r];
                  if (!t.hasOwnProperty(s) || n[s] !== t[s]) return !1;
                }
                return !0;
              })(l.params, c.params)
            ) {
              const m = [],
                v = s.matchStyles(l.value, l.params, m),
                y = s.matchStyles(c.value, c.params, m);
              m.length
                ? this._engine.reportError(m)
                : this._engine.afterFlush(() => {
                    Ki(t, v), On(t, y);
                  });
            }
            return;
          }
          const f = Bt(this._engine.playersByElement, t, []);
          f.forEach(m => {
            m.namespaceId == this.id &&
              m.triggerName == e &&
              m.queued &&
              m.destroy();
          });
          let h = s.matchTransition(l.value, c.value, t, c.params),
            g = !1;
          if (!h) {
            if (!r) return;
            (h = s.fallbackTransition), (g = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: h,
              fromState: l,
              toState: c,
              player: o,
              isFallbackTransition: g,
            }),
            g ||
              (en(t, vD),
              o.onStart(() => {
                is(t, vD);
              })),
            o.onDone(() => {
              let m = this.players.indexOf(o);
              m >= 0 && this.players.splice(m, 1);
              const v = this._engine.playersByElement.get(t);
              if (v) {
                let y = v.indexOf(o);
                y >= 0 && v.splice(y, 1);
              }
            }),
            this.players.push(o),
            f.push(o),
            o
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, i) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, i) => {
              this._elementListeners.set(
                i,
                e.filter(r => r.name != t),
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach(i => i.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const i = this._engine.driver.query(t, Al, !0);
          i.forEach(r => {
            if (r[Jt]) return;
            const s = this._engine.fetchNamespacesByElement(r);
            s.size
              ? s.forEach(o => o.triggerLeaveAnimation(r, e, !1, !0))
              : this.clearElementCache(r);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              i.forEach(r => this.clearElementCache(r)),
            );
        }
        triggerLeaveAnimation(t, e, i, r) {
          const s = this._engine.statesByElement.get(t),
            o = new Map();
          if (s) {
            const a = [];
            if (
              (Object.keys(s).forEach(l => {
                if ((o.set(l, s[l].value), this._triggers[l])) {
                  const c = this.trigger(t, l, Do, r);
                  c && a.push(c);
                }
              }),
              a.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e, o),
                i && mi(a).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t),
            i = this._engine.statesByElement.get(t);
          if (e && i) {
            const r = new Set();
            e.forEach(s => {
              const o = s.name;
              if (r.has(o)) return;
              r.add(o);
              const l = this._triggers[o].fallbackTransition,
                c = i[o] || Ih,
                u = new Sh(Do),
                d = new Th(this.id, o, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: o,
                  transition: l,
                  fromState: c,
                  toState: u,
                  player: d,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(t, e) {
          const i = this._engine;
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let r = !1;
          if (i.totalAnimations) {
            const s = i.players.length ? i.playersByQueriedElement.get(t) : [];
            if (s && s.length) r = !0;
            else {
              let o = t;
              for (; (o = o.parentNode); )
                if (i.statesByElement.get(o)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r))
            i.markElementAsRemoved(this.id, t, !1, e);
          else {
            const s = t[Jt];
            (!s || s === bD) &&
              (i.afterFlush(() => this.clearElementCache(t)),
              i.destroyInnerAnimations(t),
              i._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          en(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach(i => {
              const r = i.player;
              if (r.destroyed) return;
              const s = i.element,
                o = this._elementListeners.get(s);
              o &&
                o.forEach(a => {
                  if (a.name == i.triggerName) {
                    const l = dh(
                      s,
                      i.triggerName,
                      i.fromState.value,
                      i.toState.value,
                    );
                    (l._data = t), ch(i.player, a.phase, l, a.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : e.push(i);
            }),
            (this._queue = []),
            e.sort((i, r) => {
              const s = i.transition.ast.depCount,
                o = r.transition.ast.depCount;
              return 0 == s || 0 == o
                ? s - o
                : this._engine.driver.containsElement(i.element, r.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach(e => e.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find(i => i.element === t) || e),
            e
          );
        }
      }
      class O2 {
        constructor(t, e, i) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = i),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (r, s) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach(e => {
              e.players.forEach(i => {
                i.queued && t.push(i);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const i = new F2(t, e, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, e)
              ? this._balanceNamespaceList(i, e)
              : (this.newHostElements.set(e, i), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = i)
          );
        }
        _balanceNamespaceList(t, e) {
          const i = this._namespaceList,
            r = this.namespacesByHostElement,
            s = i.length - 1;
          if (s >= 0) {
            let o = !1;
            if (void 0 !== this.driver.getParentElement) {
              let a = this.driver.getParentElement(e);
              for (; a; ) {
                const l = r.get(a);
                if (l) {
                  const c = i.indexOf(l);
                  i.splice(c + 1, 0, t), (o = !0);
                  break;
                }
                a = this.driver.getParentElement(a);
              }
            } else
              for (let a = s; a >= 0; a--)
                if (this.driver.containsElement(i[a].hostElement, e)) {
                  i.splice(a + 1, 0, t), (o = !0);
                  break;
                }
            o || i.unshift(t);
          } else i.push(t);
          return r.set(e, t), t;
        }
        register(t, e) {
          let i = this._namespaceLookup[t];
          return i || (i = this.createNamespace(t, e)), i;
        }
        registerTrigger(t, e, i) {
          let r = this._namespaceLookup[t];
          r && r.register(e, i) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const i = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(i.hostElement),
              delete this._namespaceLookup[t];
            const r = this._namespaceList.indexOf(i);
            r >= 0 && this._namespaceList.splice(r, 1);
          }),
            this.afterFlushAnimationsDone(() => i.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            i = this.statesByElement.get(t);
          if (i) {
            const r = Object.keys(i);
            for (let s = 0; s < r.length; s++) {
              const o = i[r[s]].namespaceId;
              if (o) {
                const a = this._fetchNamespace(o);
                a && e.add(a);
              }
            }
          }
          return e;
        }
        trigger(t, e, i, r) {
          if (Hl(e)) {
            const s = this._fetchNamespace(t);
            if (s) return s.trigger(e, i, r), !0;
          }
          return !1;
        }
        insertNode(t, e, i, r) {
          if (!Hl(e)) return;
          const s = e[Jt];
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const o = this.collectedLeaveElements.indexOf(e);
            o >= 0 && this.collectedLeaveElements.splice(o, 1);
          }
          if (t) {
            const o = this._fetchNamespace(t);
            o && o.insertNode(e, i);
          }
          r && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), en(t, Ah))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), is(t, Ah));
        }
        removeNode(t, e, i, r) {
          if (Hl(e)) {
            const s = t ? this._fetchNamespace(t) : null;
            if (
              (s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r),
              i)
            ) {
              const o = this.namespacesByHostElement.get(e);
              o && o.id !== t && o.removeNode(e, r);
            }
          } else this._onRemovalComplete(e, r);
        }
        markElementAsRemoved(t, e, i, r, s) {
          this.collectedLeaveElements.push(e),
            (e[Jt] = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: i,
              removedBeforeQueried: !1,
              previousTriggersValues: s,
            });
        }
        listen(t, e, i, r, s) {
          return Hl(e) ? this._fetchNamespace(t).listen(e, i, r, s) : () => {};
        }
        _buildInstruction(t, e, i, r, s) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            i,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            s,
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, Al, !0);
          e.forEach(i => this.destroyActiveAnimationsForElement(i)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, mh, !0)),
              e.forEach(i => this.finishActiveQueriedAnimationOnElement(i)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach(i => {
              i.queued ? (i.markedForDestroy = !0) : i.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach(i => i.finish());
        }
        whenRenderingDone() {
          return new Promise(t => {
            if (this.players.length) return mi(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          var e;
          const i = t[Jt];
          if (i && i.setForRemoval) {
            if (((t[Jt] = bD), i.namespaceId)) {
              this.destroyInnerAnimations(t);
              const r = this._fetchNamespace(i.namespaceId);
              r && r.clearElementCache(t);
            }
            this._onRemovalComplete(t, i.setForRemoval);
          }
          (null === (e = t.classList) || void 0 === e
            ? void 0
            : e.contains(Ah)) && this.markElementAsDisabled(t, !1),
            this.driver.query(t, '.ng-animate-disabled', !0).forEach(r => {
              this.markElementAsDisabled(r, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((i, r) =>
                this._balanceNamespaceList(i, r),
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let i = 0; i < this.collectedEnterElements.length; i++)
              en(this.collectedEnterElements[i], 'ng-star-inserted');
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const i = [];
            try {
              e = this._flushAnimations(i, t);
            } finally {
              for (let r = 0; r < i.length; r++) i[r]();
            }
          } else
            for (let i = 0; i < this.collectedLeaveElements.length; i++)
              this.processLeaveNode(this.collectedLeaveElements[i]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach(i => i()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const i = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? mi(e).onDone(() => {
                    i.forEach(r => r());
                  })
                : i.forEach(r => r());
          }
        }
        reportError(t) {
          throw (function kB(n) {
            return new T(3402, te);
          })();
        }
        _flushAnimations(t, e) {
          const i = new Ll(),
            r = [],
            s = new Map(),
            o = [],
            a = new Map(),
            l = new Map(),
            c = new Map(),
            u = new Set();
          this.disabledNodes.forEach(F => {
            u.add(F);
            const N = this.driver.query(F, '.ng-animate-queued', !0);
            for (let B = 0; B < N.length; B++) u.add(N[B]);
          });
          const d = this.bodyNode,
            f = Array.from(this.statesByElement.keys()),
            h = DD(f, this.collectedEnterElements),
            g = new Map();
          let m = 0;
          h.forEach((F, N) => {
            const B = gh + m++;
            g.set(N, B), F.forEach(oe => en(oe, B));
          });
          const v = [],
            y = new Set(),
            _ = new Set();
          for (let F = 0; F < this.collectedLeaveElements.length; F++) {
            const N = this.collectedLeaveElements[F],
              B = N[Jt];
            B &&
              B.setForRemoval &&
              (v.push(N),
              y.add(N),
              B.hasAnimation
                ? this.driver
                    .query(N, '.ng-star-inserted', !0)
                    .forEach(oe => y.add(oe))
                : _.add(N));
          }
          const D = new Map(),
            O = DD(f, Array.from(y));
          O.forEach((F, N) => {
            const B = xl + m++;
            D.set(N, B), F.forEach(oe => en(oe, B));
          }),
            t.push(() => {
              h.forEach((F, N) => {
                const B = g.get(N);
                F.forEach(oe => is(oe, B));
              }),
                O.forEach((F, N) => {
                  const B = D.get(N);
                  F.forEach(oe => is(oe, B));
                }),
                v.forEach(F => {
                  this.processLeaveNode(F);
                });
            });
          const Z = [],
            xe = [];
          for (let F = this._namespaceList.length - 1; F >= 0; F--)
            this._namespaceList[F].drainQueuedTransitions(e).forEach(B => {
              const oe = B.player,
                Ze = B.element;
              if ((Z.push(oe), this.collectedEnterElements.length)) {
                const Ct = Ze[Jt];
                if (Ct && Ct.setForMove) {
                  if (
                    Ct.previousTriggersValues &&
                    Ct.previousTriggersValues.has(B.triggerName)
                  ) {
                    const Ji = Ct.previousTriggersValues.get(B.triggerName),
                      vi = this.statesByElement.get(B.element);
                    vi && vi[B.triggerName] && (vi[B.triggerName].value = Ji);
                  }
                  return void oe.destroy();
                }
              }
              const Rn = !d || !this.driver.containsElement(d, Ze),
                zt = D.get(Ze),
                yi = g.get(Ze),
                Fe = this._buildInstruction(B, i, yi, zt, Rn);
              if (Fe.errors && Fe.errors.length) return void xe.push(Fe);
              if (Rn)
                return (
                  oe.onStart(() => Ki(Ze, Fe.fromStyles)),
                  oe.onDestroy(() => On(Ze, Fe.toStyles)),
                  void r.push(oe)
                );
              if (B.isFallbackTransition)
                return (
                  oe.onStart(() => Ki(Ze, Fe.fromStyles)),
                  oe.onDestroy(() => On(Ze, Fe.toStyles)),
                  void r.push(oe)
                );
              const ME = [];
              Fe.timelines.forEach(Ct => {
                (Ct.stretchStartingKeyframe = !0),
                  this.disabledNodes.has(Ct.element) || ME.push(Ct);
              }),
                (Fe.timelines = ME),
                i.append(Ze, Fe.timelines),
                o.push({instruction: Fe, player: oe, element: Ze}),
                Fe.queriedElements.forEach(Ct => Bt(a, Ct, []).push(oe)),
                Fe.preStyleProps.forEach((Ct, Ji) => {
                  const vi = Object.keys(Ct);
                  if (vi.length) {
                    let er = l.get(Ji);
                    er || l.set(Ji, (er = new Set())),
                      vi.forEach(Gh => er.add(Gh));
                  }
                }),
                Fe.postStyleProps.forEach((Ct, Ji) => {
                  const vi = Object.keys(Ct);
                  let er = c.get(Ji);
                  er || c.set(Ji, (er = new Set())),
                    vi.forEach(Gh => er.add(Gh));
                });
            });
          if (xe.length) {
            const F = [];
            xe.forEach(N => {
              F.push(
                (function PB(n, t) {
                  return new T(3505, te);
                })(),
              );
            }),
              Z.forEach(N => N.destroy()),
              this.reportError(F);
          }
          const Te = new Map(),
            Gt = new Map();
          o.forEach(F => {
            const N = F.element;
            i.has(N) &&
              (Gt.set(N, N),
              this._beforeAnimationBuild(
                F.player.namespaceId,
                F.instruction,
                Te,
              ));
          }),
            r.forEach(F => {
              const N = F.element;
              this._getPreviousPlayers(
                N,
                !1,
                F.namespaceId,
                F.triggerName,
                null,
              ).forEach(oe => {
                Bt(Te, N, []).push(oe), oe.destroy();
              });
            });
          const $t = v.filter(F => xD(F, l, c)),
            Ut = new Map();
          wD(Ut, this.driver, _, c, Kn).forEach(F => {
            xD(F, l, c) && $t.push(F);
          });
          const Yn = new Map();
          h.forEach((F, N) => {
            wD(Yn, this.driver, new Set(F), l, '!');
          }),
            $t.forEach(F => {
              const N = Ut.get(F),
                B = Yn.get(F);
              Ut.set(F, Object.assign(Object.assign({}, N), B));
            });
          const _n = [],
            as = [],
            ls = {};
          o.forEach(F => {
            const {element: N, player: B, instruction: oe} = F;
            if (i.has(N)) {
              if (u.has(N))
                return (
                  B.onDestroy(() => On(N, oe.toStyles)),
                  (B.disabled = !0),
                  B.overrideTotalTime(oe.totalTime),
                  void r.push(B)
                );
              let Ze = ls;
              if (Gt.size > 1) {
                let zt = N;
                const yi = [];
                for (; (zt = zt.parentNode); ) {
                  const Fe = Gt.get(zt);
                  if (Fe) {
                    Ze = Fe;
                    break;
                  }
                  yi.push(zt);
                }
                yi.forEach(Fe => Gt.set(Fe, Ze));
              }
              const Rn = this._buildAnimation(B.namespaceId, oe, Te, s, Yn, Ut);
              if ((B.setRealPlayer(Rn), Ze === ls)) _n.push(B);
              else {
                const zt = this.playersByElement.get(Ze);
                zt && zt.length && (B.parentPlayer = mi(zt)), r.push(B);
              }
            } else
              Ki(N, oe.fromStyles),
                B.onDestroy(() => On(N, oe.toStyles)),
                as.push(B),
                u.has(N) && r.push(B);
          }),
            as.forEach(F => {
              const N = s.get(F.element);
              if (N && N.length) {
                const B = mi(N);
                F.setRealPlayer(B);
              }
            }),
            r.forEach(F => {
              F.parentPlayer ? F.syncPlayerEvents(F.parentPlayer) : F.destroy();
            });
          for (let F = 0; F < v.length; F++) {
            const N = v[F],
              B = N[Jt];
            if ((is(N, xl), B && B.hasAnimation)) continue;
            let oe = [];
            if (a.size) {
              let Rn = a.get(N);
              Rn && Rn.length && oe.push(...Rn);
              let zt = this.driver.query(N, mh, !0);
              for (let yi = 0; yi < zt.length; yi++) {
                let Fe = a.get(zt[yi]);
                Fe && Fe.length && oe.push(...Fe);
              }
            }
            const Ze = oe.filter(Rn => !Rn.destroyed);
            Ze.length ? N2(this, N, Ze) : this.processLeaveNode(N);
          }
          return (
            (v.length = 0),
            _n.forEach(F => {
              this.players.push(F),
                F.onDone(() => {
                  F.destroy();
                  const N = this.players.indexOf(F);
                  this.players.splice(N, 1);
                }),
                F.play();
            }),
            _n
          );
        }
        elementContainsData(t, e) {
          let i = !1;
          const r = e[Jt];
          return (
            r && r.setForRemoval && (i = !0),
            this.playersByElement.has(e) && (i = !0),
            this.playersByQueriedElement.has(e) && (i = !0),
            this.statesByElement.has(e) && (i = !0),
            this._fetchNamespace(t).elementContainsData(e) || i
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, i, r, s) {
          let o = [];
          if (e) {
            const a = this.playersByQueriedElement.get(t);
            a && (o = a);
          } else {
            const a = this.playersByElement.get(t);
            if (a) {
              const l = !s || s == Do;
              a.forEach(c => {
                c.queued || (!l && c.triggerName != r) || o.push(c);
              });
            }
          }
          return (
            (i || r) &&
              (o = o.filter(
                a => !((i && i != a.namespaceId) || (r && r != a.triggerName)),
              )),
            o
          );
        }
        _beforeAnimationBuild(t, e, i) {
          const s = e.element,
            o = e.isRemovalTransition ? void 0 : t,
            a = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const l of e.timelines) {
            const c = l.element,
              u = c !== s,
              d = Bt(i, c, []);
            this._getPreviousPlayers(c, u, o, a, e.toState).forEach(h => {
              const g = h.getRealPlayer();
              g.beforeDestroy && g.beforeDestroy(), h.destroy(), d.push(h);
            });
          }
          Ki(s, e.fromStyles);
        }
        _buildAnimation(t, e, i, r, s, o) {
          const a = e.triggerName,
            l = e.element,
            c = [],
            u = new Set(),
            d = new Set(),
            f = e.timelines.map(g => {
              const m = g.element;
              u.add(m);
              const v = m[Jt];
              if (v && v.removedBeforeQueried)
                return new Co(g.duration, g.delay);
              const y = m !== l,
                _ = (function L2(n) {
                  const t = [];
                  return ED(n, t), t;
                })((i.get(m) || I2).map(Te => Te.getRealPlayer())).filter(
                  Te => !!Te.element && Te.element === m,
                ),
                D = s.get(m),
                O = o.get(m),
                Z = Qw(0, this._normalizer, 0, g.keyframes, D, O),
                xe = this._buildPlayer(g, Z, _);
              if ((g.subTimeline && r && d.add(m), y)) {
                const Te = new Th(t, a, m);
                Te.setRealPlayer(xe), c.push(Te);
              }
              return xe;
            });
          c.forEach(g => {
            Bt(this.playersByQueriedElement, g.element, []).push(g),
              g.onDone(() =>
                (function R2(n, t, e) {
                  let i;
                  if (n instanceof Map) {
                    if (((i = n.get(t)), i)) {
                      if (i.length) {
                        const r = i.indexOf(e);
                        i.splice(r, 1);
                      }
                      0 == i.length && n.delete(t);
                    }
                  } else if (((i = n[t]), i)) {
                    if (i.length) {
                      const r = i.indexOf(e);
                      i.splice(r, 1);
                    }
                    0 == i.length && delete n[t];
                  }
                  return i;
                })(this.playersByQueriedElement, g.element, g),
              );
          }),
            u.forEach(g => en(g, oD));
          const h = mi(f);
          return (
            h.onDestroy(() => {
              u.forEach(g => is(g, oD)), On(l, e.toStyles);
            }),
            d.forEach(g => {
              Bt(r, g, []).push(h);
            }),
            h
          );
        }
        _buildPlayer(t, e, i) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                i,
              )
            : new Co(t.duration, t.delay);
        }
      }
      class Th {
        constructor(t, e, i) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = i),
            (this._player = new Co()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach(e => {
              this._queuedCallbacks[e].forEach(i => ch(t, e, void 0, i));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback('start')),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          Bt(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent('done', t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent('start', t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent('destroy', t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function Hl(n) {
        return n && 1 === n.nodeType;
      }
      function CD(n, t) {
        const e = n.style.display;
        return (n.style.display = null != t ? t : 'none'), e;
      }
      function wD(n, t, e, i, r) {
        const s = [];
        e.forEach(l => s.push(CD(l)));
        const o = [];
        i.forEach((l, c) => {
          const u = {};
          l.forEach(d => {
            const f = (u[d] = t.computeStyle(c, d, r));
            (!f || 0 == f.length) && ((c[Jt] = T2), o.push(c));
          }),
            n.set(c, u);
        });
        let a = 0;
        return e.forEach(l => CD(l, s[a++])), o;
      }
      function DD(n, t) {
        const e = new Map();
        if ((n.forEach(a => e.set(a, [])), 0 == t.length)) return e;
        const r = new Set(t),
          s = new Map();
        function o(a) {
          if (!a) return 1;
          let l = s.get(a);
          if (l) return l;
          const c = a.parentNode;
          return (l = e.has(c) ? c : r.has(c) ? 1 : o(c)), s.set(a, l), l;
        }
        return (
          t.forEach(a => {
            const l = o(a);
            1 !== l && e.get(l).push(a);
          }),
          e
        );
      }
      function en(n, t) {
        var e;
        null === (e = n.classList) || void 0 === e || e.add(t);
      }
      function is(n, t) {
        var e;
        null === (e = n.classList) || void 0 === e || e.remove(t);
      }
      function N2(n, t, e) {
        mi(e).onDone(() => n.processLeaveNode(t));
      }
      function ED(n, t) {
        for (let e = 0; e < n.length; e++) {
          const i = n[e];
          i instanceof Kw ? ED(i.players, t) : t.push(i);
        }
      }
      function xD(n, t, e) {
        const i = e.get(n);
        if (!i) return !1;
        let r = t.get(n);
        return r ? i.forEach(s => r.add(s)) : t.set(n, i), e.delete(n), !0;
      }
      class jl {
        constructor(t, e, i) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = i),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (r, s) => {}),
            (this._transitionEngine = new O2(t, e, i)),
            (this._timelineEngine = new E2(t, e, i)),
            (this._transitionEngine.onRemovalComplete = (r, s) =>
              this.onRemovalComplete(r, s));
        }
        registerTrigger(t, e, i, r, s) {
          const o = t + '-' + r;
          let a = this._triggerCache[o];
          if (!a) {
            const l = [],
              u = bh(this._driver, s, l, []);
            if (l.length)
              throw (function EB(n, t) {
                return new T(3404, te);
              })();
            (a = (function b2(n, t, e) {
              return new C2(n, t, e);
            })(r, u, this._normalizer)),
              (this._triggerCache[o] = a);
          }
          this._transitionEngine.registerTrigger(e, r, a);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, i, r) {
          this._transitionEngine.insertNode(t, e, i, r);
        }
        onRemove(t, e, i, r) {
          this._transitionEngine.removeNode(t, e, r || !1, i);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, i, r) {
          if ('@' == i.charAt(0)) {
            const [s, o] = Zw(i);
            this._timelineEngine.command(s, e, o, r);
          } else this._transitionEngine.trigger(t, e, i, r);
        }
        listen(t, e, i, r, s) {
          if ('@' == i.charAt(0)) {
            const [o, a] = Zw(i);
            return this._timelineEngine.listen(o, e, a, s);
          }
          return this._transitionEngine.listen(t, e, i, r, s);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players,
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      let H2 = (() => {
        class n {
          constructor(e, i, r) {
            (this._element = e),
              (this._startStyles = i),
              (this._endStyles = r),
              (this._state = 0);
            let s = n.initialStylesByElement.get(e);
            s || n.initialStylesByElement.set(e, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                On(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (On(this._element, this._initialStyles),
                this._endStyles &&
                  (On(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (n.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (Ki(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (Ki(this._element, this._endStyles),
                  (this._endStyles = null)),
                On(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (n.initialStylesByElement = new WeakMap()), n;
      })();
      function Fh(n) {
        let t = null;
        const e = Object.keys(n);
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          j2(r) && ((t = t || {}), (t[r] = n[r]));
        }
        return t;
      }
      function j2(n) {
        return 'display' === n || 'position' === n;
      }
      class MD {
        constructor(t, e, i, r) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = i),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = i.duration),
            (this._delay = i.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(t => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options,
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, i) {
          return t.animate(e, i);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach(t => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach(t => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = t * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          if (this.hasStarted()) {
            const e = this._finalKeyframe;
            Object.keys(e).forEach(i => {
              'offset' != i &&
                (t[i] = this._finished ? e[i] : dD(this.element, i));
            });
          }
          this.currentSnapshot = t;
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(i => i()), (e.length = 0);
        }
      }
      class G2 {
        validateStyleProperty(t) {
          return tD(t);
        }
        matchesElement(t, e) {
          return !1;
        }
        containsElement(t, e) {
          return nD(t, e);
        }
        getParentElement(t) {
          return hh(t);
        }
        query(t, e, i) {
          return iD(t, e, i);
        }
        computeStyle(t, e, i) {
          return window.getComputedStyle(t)[e];
        }
        animate(t, e, i, r, s, o = []) {
          const l = {duration: i, delay: r, fill: 0 == r ? 'both' : 'forwards'};
          s && (l.easing = s);
          const c = {},
            u = o.filter(f => f instanceof MD);
          (function zB(n, t) {
            return 0 === n || 0 === t;
          })(i, r) &&
            u.forEach(f => {
              let h = f.currentSnapshot;
              Object.keys(h).forEach(g => (c[g] = h[g]));
            }),
            (e = (function WB(n, t, e) {
              const i = Object.keys(e);
              if (i.length && t.length) {
                let s = t[0],
                  o = [];
                if (
                  (i.forEach(a => {
                    s.hasOwnProperty(a) || o.push(a), (s[a] = e[a]);
                  }),
                  o.length)
                )
                  for (var r = 1; r < t.length; r++) {
                    let a = t[r];
                    o.forEach(function (l) {
                      a[l] = dD(n, l);
                    });
                  }
              }
              return t;
            })(t, (e = e.map(f => _i(f, !1))), c));
          const d = (function B2(n, t) {
            let e = null,
              i = null;
            return (
              Array.isArray(t) && t.length
                ? ((e = Fh(t[0])), t.length > 1 && (i = Fh(t[t.length - 1])))
                : t && (e = Fh(t)),
              e || i ? new H2(n, e, i) : null
            );
          })(t, e);
          return new MD(t, e, l, d);
        }
      }
      let $2 = (() => {
        class n extends zw {
          constructor(e, i) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = e.createRenderer(i.body, {
                id: '0',
                encapsulation: nn.None,
                styles: [],
                data: {animation: []},
              }));
          }
          build(e) {
            const i = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const r = Array.isArray(e) ? Ww(e) : e;
            return (
              AD(this._renderer, null, i, 'register', [r]),
              new U2(i, this._renderer)
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Ws), b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      class U2 extends class eB {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new z2(this._id, t, e || {}, this._renderer);
        }
      }
      class z2 {
        constructor(t, e, i, r) {
          (this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', i);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return AD(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen('done', t);
        }
        onStart(t) {
          this._listen('start', t);
        }
        onDestroy(t) {
          this._listen('destroy', t);
        }
        init() {
          this._command('init');
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command('play'), (this._started = !0);
        }
        pause() {
          this._command('pause');
        }
        restart() {
          this._command('restart');
        }
        finish() {
          this._command('finish');
        }
        destroy() {
          this._command('destroy');
        }
        reset() {
          this._command('reset'), (this._started = !1);
        }
        setPosition(t) {
          this._command('setPosition', t);
        }
        getPosition() {
          var t, e;
          return null !==
            (e =
              null === (t = this._renderer.engine.players[+this.id]) ||
              void 0 === t
                ? void 0
                : t.getPosition()) && void 0 !== e
            ? e
            : 0;
        }
      }
      function AD(n, t, e, i, r) {
        return n.setProperty(t, `@@${e}:${i}`, r);
      }
      const SD = '@.disabled';
      let W2 = (() => {
        class n {
          constructor(e, i, r) {
            (this.delegate = e),
              (this.engine = i),
              (this._zone = r),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (i.onRemovalComplete = (s, o) => {
                const a = null == o ? void 0 : o.parentNode(s);
                a && o.removeChild(a, s);
              });
          }
          createRenderer(e, i) {
            const s = this.delegate.createRenderer(e, i);
            if (!(e && i && i.data && i.data.animation)) {
              let u = this._rendererCache.get(s);
              return (
                u ||
                  ((u = new ID('', s, this.engine)),
                  this._rendererCache.set(s, u)),
                u
              );
            }
            const o = i.id,
              a = i.id + '-' + this._currentId;
            this._currentId++, this.engine.register(a, e);
            const l = u => {
              Array.isArray(u)
                ? u.forEach(l)
                : this.engine.registerTrigger(o, a, e, u.name, u);
            };
            return i.data.animation.forEach(l), new q2(this, a, s, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(e, i, r) {
            e >= 0 && e < this._microtaskId
              ? this._zone.run(() => i(r))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach(s => {
                        const [o, a] = s;
                        o(a);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([i, r]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Ws), b(jl), b(se));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      class ID {
        constructor(t, e, i) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = i),
            (this.destroyNode = this.delegate.destroyNode
              ? r => e.destroyNode(r)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, i, r = !0) {
          this.delegate.insertBefore(t, e, i),
            this.engine.onInsert(this.namespaceId, e, t, r);
        }
        removeChild(t, e, i) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, i);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, i, r) {
          this.delegate.setAttribute(t, e, i, r);
        }
        removeAttribute(t, e, i) {
          this.delegate.removeAttribute(t, e, i);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, i, r) {
          this.delegate.setStyle(t, e, i, r);
        }
        removeStyle(t, e, i) {
          this.delegate.removeStyle(t, e, i);
        }
        setProperty(t, e, i) {
          '@' == e.charAt(0) && e == SD
            ? this.disableAnimations(t, !!i)
            : this.delegate.setProperty(t, e, i);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, i) {
          return this.delegate.listen(t, e, i);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class q2 extends ID {
        constructor(t, e, i, r) {
          super(e, i, r), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, i) {
          '@' == e.charAt(0)
            ? '.' == e.charAt(1) && e == SD
              ? this.disableAnimations(t, (i = void 0 === i || !!i))
              : this.engine.process(this.namespaceId, t, e.substr(1), i)
            : this.delegate.setProperty(t, e, i);
        }
        listen(t, e, i) {
          if ('@' == e.charAt(0)) {
            const r = (function K2(n) {
              switch (n) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return n;
              }
            })(t);
            let s = e.substr(1),
              o = '';
            return (
              '@' != s.charAt(0) &&
                ([s, o] = (function Y2(n) {
                  const t = n.indexOf('.');
                  return [n.substring(0, t), n.substr(t + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, o, a => {
                this.factory.scheduleListenerCallback(a._data || -1, i, a);
              })
            );
          }
          return this.delegate.listen(t, e, i);
        }
      }
      let Q2 = (() => {
        class n extends jl {
          constructor(e, i, r) {
            super(e.body, i, r);
          }
          ngOnDestroy() {
            this.flush();
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(ee), b(ph), b(xh));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac})),
          n
        );
      })();
      const Eo = new I('AnimationModuleType'),
        TD = [
          {provide: zw, useClass: $2},
          {
            provide: xh,
            useFactory: function Z2() {
              return new g2();
            },
          },
          {provide: jl, useClass: Q2},
          {
            provide: Ws,
            useFactory: function X2(n, t, e) {
              return new W2(n, t, e);
            },
            deps: [il, jl, se],
          },
        ],
        FD = [
          {provide: ph, useFactory: () => new G2()},
          {provide: Eo, useValue: 'BrowserAnimations'},
          ...TD,
        ],
        J2 = [
          {provide: ph, useClass: rD},
          {provide: Eo, useValue: 'NoopAnimations'},
          ...TD,
        ];
      let eH = (() => {
        class n {
          static withConfig(e) {
            return {ngModule: n, providers: e.disableAnimations ? J2 : FD};
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({providers: FD, imports: [Db]})),
          n
        );
      })();
      function tH(n, t) {
        if ((1 & n && lt(0, 'mat-pseudo-checkbox', 4), 2 & n)) {
          const e = P();
          S('state', e.selected ? 'checked' : 'unchecked')(
            'disabled',
            e.disabled,
          );
        }
      }
      function nH(n, t) {
        if ((1 & n && (z(0, 'span', 5), Nt(1), Y()), 2 & n)) {
          const e = P();
          R(1), Ri('(', e.group.label, ')');
        }
      }
      const iH = ['*'],
        sH = new I('mat-sanity-checks', {
          providedIn: 'root',
          factory: function rH() {
            return !0;
          },
        });
      let jt = (() => {
        class n {
          constructor(e, i, r) {
            (this._sanityChecks = i),
              (this._document = r),
              (this._hasDoneGlobalChecks = !1),
              e._applyBodyHighContrastModeCssClasses(),
              this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
          }
          _checkIsEnabled(e) {
            return (
              !Jf() &&
              ('boolean' == typeof this._sanityChecks
                ? this._sanityChecks
                : !!this._sanityChecks[e])
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(JV), b(sH, 8), b(ee));
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({imports: [[Jr], Jr]})),
          n
        );
      })();
      function oH(n) {
        return class extends n {
          constructor(...t) {
            super(...t), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(t) {
            this._disabled = we(t);
          }
        };
      }
      function RD(n, t) {
        return class extends n {
          constructor(...e) {
            super(...e), (this.defaultColor = t), (this.color = t);
          }
          get color() {
            return this._color;
          }
          set color(e) {
            const i = e || this.defaultColor;
            i !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  `mat-${this._color}`,
                ),
              i && this._elementRef.nativeElement.classList.add(`mat-${i}`),
              (this._color = i));
          }
        };
      }
      function aH(n) {
        return class extends n {
          constructor(...t) {
            super(...t), (this._disableRipple = !1);
          }
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(t) {
            this._disableRipple = we(t);
          }
        };
      }
      function lH(n, t = 0) {
        return class extends n {
          constructor(...e) {
            super(...e), (this._tabIndex = t), (this.defaultTabIndex = t);
          }
          get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
          }
          set tabIndex(e) {
            this._tabIndex = null != e ? Df(e) : this.defaultTabIndex;
          }
        };
      }
      function kD(n) {
        return class extends n {
          constructor(...t) {
            super(...t), (this.stateChanges = new de()), (this.errorState = !1);
          }
          updateErrorState() {
            const t = this.errorState,
              s = (
                this.errorStateMatcher || this._defaultErrorStateMatcher
              ).isErrorState(
                this.ngControl ? this.ngControl.control : null,
                this._parentFormGroup || this._parentForm,
              );
            s !== t && ((this.errorState = s), this.stateChanges.next());
          }
        };
      }
      let Oh = (() => {
        class n {
          isErrorState(e, i) {
            return !!(e && e.invalid && (e.touched || (i && i.submitted)));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      class uH {
        constructor(t, e, i) {
          (this._renderer = t),
            (this.element = e),
            (this.config = i),
            (this.state = 3);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const PD = {enterDuration: 225, exitDuration: 150},
        Rh = bl({passive: !0}),
        ND = ['mousedown', 'touchstart'],
        LD = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      class fH {
        constructor(t, e, i, r) {
          (this._target = t),
            (this._ngZone = e),
            (this._isPointerDown = !1),
            (this._activeRipples = new Set()),
            (this._pointerUpEventsRegistered = !1),
            r.isBrowser && (this._containerElement = Zr(i));
        }
        fadeInRipple(t, e, i = {}) {
          const r = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            s = Object.assign(Object.assign({}, PD), i.animation);
          i.centered &&
            ((t = r.left + r.width / 2), (e = r.top + r.height / 2));
          const o =
              i.radius ||
              (function pH(n, t, e) {
                const i = Math.max(Math.abs(n - e.left), Math.abs(n - e.right)),
                  r = Math.max(Math.abs(t - e.top), Math.abs(t - e.bottom));
                return Math.sqrt(i * i + r * r);
              })(t, e, r),
            a = t - r.left,
            l = e - r.top,
            c = s.enterDuration,
            u = document.createElement('div');
          u.classList.add('mat-ripple-element'),
            (u.style.left = a - o + 'px'),
            (u.style.top = l - o + 'px'),
            (u.style.height = 2 * o + 'px'),
            (u.style.width = 2 * o + 'px'),
            null != i.color && (u.style.backgroundColor = i.color),
            (u.style.transitionDuration = `${c}ms`),
            this._containerElement.appendChild(u),
            (function hH(n) {
              window.getComputedStyle(n).getPropertyValue('opacity');
            })(u),
            (u.style.transform = 'scale(1)');
          const d = new uH(this, u, i);
          return (
            (d.state = 0),
            this._activeRipples.add(d),
            i.persistent || (this._mostRecentTransientRipple = d),
            this._runTimeoutOutsideZone(() => {
              const f = d === this._mostRecentTransientRipple;
              (d.state = 1),
                !i.persistent && (!f || !this._isPointerDown) && d.fadeOut();
            }, c),
            d
          );
        }
        fadeOutRipple(t) {
          const e = this._activeRipples.delete(t);
          if (
            (t === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !e)
          )
            return;
          const i = t.element,
            r = Object.assign(Object.assign({}, PD), t.config.animation);
          (i.style.transitionDuration = `${r.exitDuration}ms`),
            (i.style.opacity = '0'),
            (t.state = 2),
            this._runTimeoutOutsideZone(() => {
              (t.state = 3), i.remove();
            }, r.exitDuration);
        }
        fadeOutAll() {
          this._activeRipples.forEach(t => t.fadeOut());
        }
        fadeOutAllNonPersistent() {
          this._activeRipples.forEach(t => {
            t.config.persistent || t.fadeOut();
          });
        }
        setupTriggerEvents(t) {
          const e = Zr(t);
          !e ||
            e === this._triggerElement ||
            (this._removeTriggerEvents(),
            (this._triggerElement = e),
            this._registerEvents(ND));
        }
        handleEvent(t) {
          'mousedown' === t.type
            ? this._onMousedown(t)
            : 'touchstart' === t.type
            ? this._onTouchStart(t)
            : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._registerEvents(LD),
              (this._pointerUpEventsRegistered = !0));
        }
        _onMousedown(t) {
          const e = (function qV(n) {
              return 0 === n.buttons || (0 === n.offsetX && 0 === n.offsetY);
            })(t),
            i =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800;
          !this._target.rippleDisabled &&
            !e &&
            !i &&
            ((this._isPointerDown = !0),
            this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
        }
        _onTouchStart(t) {
          if (
            !this._target.rippleDisabled &&
            !(function KV(n) {
              const t =
                (n.touches && n.touches[0]) ||
                (n.changedTouches && n.changedTouches[0]);
              return !(
                !t ||
                -1 !== t.identifier ||
                (null != t.radiusX && 1 !== t.radiusX) ||
                (null != t.radiusY && 1 !== t.radiusY)
              );
            })(t)
          ) {
            (this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0);
            const e = t.changedTouches;
            for (let i = 0; i < e.length; i++)
              this.fadeInRipple(
                e[i].clientX,
                e[i].clientY,
                this._target.rippleConfig,
              );
          }
        }
        _onPointerUp() {
          !this._isPointerDown ||
            ((this._isPointerDown = !1),
            this._activeRipples.forEach(t => {
              !t.config.persistent &&
                (1 === t.state ||
                  (t.config.terminateOnPointerUp && 0 === t.state)) &&
                t.fadeOut();
            }));
        }
        _runTimeoutOutsideZone(t, e = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(t, e));
        }
        _registerEvents(t) {
          this._ngZone.runOutsideAngular(() => {
            t.forEach(e => {
              this._triggerElement.addEventListener(e, this, Rh);
            });
          });
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            (ND.forEach(t => {
              this._triggerElement.removeEventListener(t, this, Rh);
            }),
            this._pointerUpEventsRegistered &&
              LD.forEach(t => {
                this._triggerElement.removeEventListener(t, this, Rh);
              }));
        }
      }
      const gH = new I('mat-ripple-global-options');
      let mH = (() => {
          class n {
            constructor(e, i, r, s, o) {
              (this._elementRef = e),
                (this._animationMode = o),
                (this.radius = 0),
                (this._disabled = !1),
                (this._isInitialized = !1),
                (this._globalOptions = s || {}),
                (this._rippleRenderer = new fH(this, i, e, r));
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(e) {
              e && this.fadeOutAllNonPersistent(),
                (this._disabled = e),
                this._setupTriggerEventsIfEnabled();
            }
            get trigger() {
              return this._trigger || this._elementRef.nativeElement;
            }
            set trigger(e) {
              (this._trigger = e), this._setupTriggerEventsIfEnabled();
            }
            ngOnInit() {
              (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
            }
            ngOnDestroy() {
              this._rippleRenderer._removeTriggerEvents();
            }
            fadeOutAll() {
              this._rippleRenderer.fadeOutAll();
            }
            fadeOutAllNonPersistent() {
              this._rippleRenderer.fadeOutAllNonPersistent();
            }
            get rippleConfig() {
              return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: Object.assign(
                  Object.assign(
                    Object.assign({}, this._globalOptions.animation),
                    'NoopAnimations' === this._animationMode
                      ? {enterDuration: 0, exitDuration: 0}
                      : {},
                  ),
                  this.animation,
                ),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
              };
            }
            get rippleDisabled() {
              return this.disabled || !!this._globalOptions.disabled;
            }
            _setupTriggerEventsIfEnabled() {
              !this.disabled &&
                this._isInitialized &&
                this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
            launch(e, i = 0, r) {
              return 'number' == typeof e
                ? this._rippleRenderer.fadeInRipple(
                    e,
                    i,
                    Object.assign(Object.assign({}, this.rippleConfig), r),
                  )
                : this._rippleRenderer.fadeInRipple(
                    0,
                    0,
                    Object.assign(Object.assign({}, this.rippleConfig), e),
                  );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(j), p(se), p(Fn), p(gH, 8), p(Eo, 8));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [
                ['', 'mat-ripple', ''],
                ['', 'matRipple', ''],
              ],
              hostAttrs: [1, 'mat-ripple'],
              hostVars: 2,
              hostBindings: function (e, i) {
                2 & e && Pt('mat-ripple-unbounded', i.unbounded);
              },
              inputs: {
                color: ['matRippleColor', 'color'],
                unbounded: ['matRippleUnbounded', 'unbounded'],
                centered: ['matRippleCentered', 'centered'],
                radius: ['matRippleRadius', 'radius'],
                animation: ['matRippleAnimation', 'animation'],
                disabled: ['matRippleDisabled', 'disabled'],
                trigger: ['matRippleTrigger', 'trigger'],
              },
              exportAs: ['matRipple'],
            })),
            n
          );
        })(),
        VD = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[jt], jt]})),
            n
          );
        })(),
        _H = (() => {
          class n {
            constructor(e) {
              (this._animationMode = e),
                (this.state = 'unchecked'),
                (this.disabled = !1);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(Eo, 8));
            }),
            (n.ɵcmp = Jn({
              type: n,
              selectors: [['mat-pseudo-checkbox']],
              hostAttrs: [1, 'mat-pseudo-checkbox'],
              hostVars: 8,
              hostBindings: function (e, i) {
                2 & e &&
                  Pt(
                    'mat-pseudo-checkbox-indeterminate',
                    'indeterminate' === i.state,
                  )('mat-pseudo-checkbox-checked', 'checked' === i.state)(
                    'mat-pseudo-checkbox-disabled',
                    i.disabled,
                  )(
                    '_mat-animation-noopable',
                    'NoopAnimations' === i._animationMode,
                  );
              },
              inputs: {state: 'state', disabled: 'disabled'},
              decls: 0,
              vars: 0,
              template: function (e, i) {},
              styles: [
                '.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        yH = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[jt]]})),
            n
          );
        })();
      const BD = new I('MAT_OPTION_PARENT_COMPONENT'),
        HD = new I('MatOptgroup');
      let vH = 0;
      class bH {
        constructor(t, e = !1) {
          (this.source = t), (this.isUserInput = e);
        }
      }
      let CH = (() => {
          class n {
            constructor(e, i, r, s) {
              (this._element = e),
                (this._changeDetectorRef = i),
                (this._parent = r),
                (this.group = s),
                (this._selected = !1),
                (this._active = !1),
                (this._disabled = !1),
                (this._mostRecentViewValue = ''),
                (this.id = 'mat-option-' + vH++),
                (this.onSelectionChange = new ce()),
                (this._stateChanges = new de());
            }
            get multiple() {
              return this._parent && this._parent.multiple;
            }
            get selected() {
              return this._selected;
            }
            get disabled() {
              return (this.group && this.group.disabled) || this._disabled;
            }
            set disabled(e) {
              this._disabled = we(e);
            }
            get disableRipple() {
              return !(!this._parent || !this._parent.disableRipple);
            }
            get active() {
              return this._active;
            }
            get viewValue() {
              return (this._getHostElement().textContent || '').trim();
            }
            select() {
              this._selected ||
                ((this._selected = !0),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent());
            }
            deselect() {
              this._selected &&
                ((this._selected = !1),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent());
            }
            focus(e, i) {
              const r = this._getHostElement();
              'function' == typeof r.focus && r.focus(i);
            }
            setActiveStyles() {
              this._active ||
                ((this._active = !0), this._changeDetectorRef.markForCheck());
            }
            setInactiveStyles() {
              this._active &&
                ((this._active = !1), this._changeDetectorRef.markForCheck());
            }
            getLabel() {
              return this.viewValue;
            }
            _handleKeydown(e) {
              (13 === e.keyCode || 32 === e.keyCode) &&
                !bo(e) &&
                (this._selectViaInteraction(), e.preventDefault());
            }
            _selectViaInteraction() {
              this.disabled ||
                ((this._selected = !this.multiple || !this._selected),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent(!0));
            }
            _getAriaSelected() {
              return this.selected || (!this.multiple && null);
            }
            _getTabIndex() {
              return this.disabled ? '-1' : '0';
            }
            _getHostElement() {
              return this._element.nativeElement;
            }
            ngAfterViewChecked() {
              if (this._selected) {
                const e = this.viewValue;
                e !== this._mostRecentViewValue &&
                  ((this._mostRecentViewValue = e), this._stateChanges.next());
              }
            }
            ngOnDestroy() {
              this._stateChanges.complete();
            }
            _emitSelectionChangeEvent(e = !1) {
              this.onSelectionChange.emit(new bH(this, e));
            }
          }
          return (
            (n.ɵfac = function (e) {
              !(function y_() {
                throw new Error('invalid');
              })();
            }),
            (n.ɵdir = w({
              type: n,
              inputs: {value: 'value', id: 'id', disabled: 'disabled'},
              outputs: {onSelectionChange: 'onSelectionChange'},
            })),
            n
          );
        })(),
        jD = (() => {
          class n extends CH {
            constructor(e, i, r, s) {
              super(e, i, r, s);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(j), p(Li), p(BD, 8), p(HD, 8));
            }),
            (n.ɵcmp = Jn({
              type: n,
              selectors: [['mat-option']],
              hostAttrs: [
                'role',
                'option',
                1,
                'mat-option',
                'mat-focus-indicator',
              ],
              hostVars: 12,
              hostBindings: function (e, i) {
                1 & e &&
                  ve('click', function () {
                    return i._selectViaInteraction();
                  })('keydown', function (s) {
                    return i._handleKeydown(s);
                  }),
                  2 & e &&
                    (Aa('id', i.id),
                    it('tabindex', i._getTabIndex())(
                      'aria-selected',
                      i._getAriaSelected(),
                    )('aria-disabled', i.disabled.toString()),
                    Pt('mat-selected', i.selected)(
                      'mat-option-multiple',
                      i.multiple,
                    )('mat-active', i.active)(
                      'mat-option-disabled',
                      i.disabled,
                    ));
              },
              exportAs: ['matOption'],
              features: [x],
              ngContentSelectors: iH,
              decls: 5,
              vars: 4,
              consts: [
                [
                  'class',
                  'mat-option-pseudo-checkbox',
                  3,
                  'state',
                  'disabled',
                  4,
                  'ngIf',
                ],
                [1, 'mat-option-text'],
                ['class', 'cdk-visually-hidden', 4, 'ngIf'],
                [
                  'mat-ripple',
                  '',
                  1,
                  'mat-option-ripple',
                  3,
                  'matRippleTrigger',
                  'matRippleDisabled',
                ],
                [1, 'mat-option-pseudo-checkbox', 3, 'state', 'disabled'],
                [1, 'cdk-visually-hidden'],
              ],
              template: function (e, i) {
                1 & e &&
                  (Hs(),
                  H(0, tH, 1, 2, 'mat-pseudo-checkbox', 0),
                  z(1, 'span', 1),
                  kt(2),
                  Y(),
                  H(3, nH, 2, 1, 'span', 2),
                  lt(4, 'div', 3)),
                  2 & e &&
                    (S('ngIf', i.multiple),
                    R(3),
                    S('ngIf', i.group && i.group._inert),
                    R(1),
                    S('matRippleTrigger', i._getHostElement())(
                      'matRippleDisabled',
                      i.disabled || i.disableRipple,
                    ));
              },
              directives: [_H, Xa, mH],
              styles: [
                '.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })();
      function GD(n, t, e) {
        if (e.length) {
          let i = t.toArray(),
            r = e.toArray(),
            s = 0;
          for (let o = 0; o < n + 1; o++)
            i[o].group && i[o].group === r[s] && s++;
          return s;
        }
        return 0;
      }
      let $D = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({imports: [[VD, so, jt, yH]]})),
          n
        );
      })();
      const DH = ['addListener', 'removeListener'],
        EH = ['addEventListener', 'removeEventListener'],
        xH = ['on', 'off'];
      function $l(n, t, e, i) {
        if ((ie(e) && ((i = e), (e = void 0)), i))
          return $l(n, t, e).pipe(DC(i));
        const [r, s] = (function SH(n) {
          return ie(n.addEventListener) && ie(n.removeEventListener);
        })(n)
          ? EH.map(o => a => n[o](t, a, e))
          : (function MH(n) {
              return ie(n.addListener) && ie(n.removeListener);
            })(n)
          ? DH.map(UD(n, t))
          : (function AH(n) {
              return ie(n.on) && ie(n.off);
            })(n)
          ? xH.map(UD(n, t))
          : [];
        if (!r && lc(n)) return us(o => $l(o, t, e))(wt(n));
        if (!r) throw new TypeError('Invalid event target');
        return new Me(o => {
          const a = (...l) => o.next(1 < l.length ? l : l[0]);
          return r(a), () => s(a);
        });
      }
      function UD(n, t) {
        return e => i => n[e](t, i);
      }
      function zD(...n) {
        return (function IH() {
          return lp(1);
        })()(nr(n, Lo(n)));
      }
      function Mo(...n) {
        const t = Lo(n);
        return Xe((e, i) => {
          (t ? zD(n, e, t) : zD(n, e)).subscribe(i);
        });
      }
      function rs(n) {
        return n <= 0
          ? () => No
          : Xe((t, e) => {
              let i = 0;
              t.subscribe(
                Je(e, r => {
                  ++i <= n && (e.next(r), n <= i && e.complete());
                }),
              );
            });
      }
      const TH = ['connectionContainer'],
        FH = ['inputContainer'],
        OH = ['label'];
      function RH(n, t) {
        1 & n &&
          (ct(0),
          z(1, 'div', 14),
          lt(2, 'div', 15)(3, 'div', 16)(4, 'div', 17),
          Y(),
          z(5, 'div', 18),
          lt(6, 'div', 15)(7, 'div', 16)(8, 'div', 17),
          Y(),
          ut());
      }
      function kH(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'div', 19),
            ve('cdkObserveContent', function () {
              return pt(e), P().updateOutlineGap();
            }),
            kt(1, 1),
            Y();
        }
        2 & n && S('cdkObserveContentDisabled', 'outline' != P().appearance);
      }
      function PH(n, t) {
        if (
          (1 & n && (ct(0), kt(1, 2), z(2, 'span'), Nt(3), Y(), ut()), 2 & n)
        ) {
          const e = P(2);
          R(3), Hr(e._control.placeholder);
        }
      }
      function NH(n, t) {
        1 & n && kt(0, 3, ['*ngSwitchCase', 'true']);
      }
      function LH(n, t) {
        1 & n && (z(0, 'span', 23), Nt(1, ' *'), Y());
      }
      function VH(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'label', 20, 21),
            ve('cdkObserveContent', function () {
              return pt(e), P().updateOutlineGap();
            }),
            H(2, PH, 4, 1, 'ng-container', 12),
            H(3, NH, 1, 0, 'ng-content', 12),
            H(4, LH, 2, 0, 'span', 22),
            Y();
        }
        if (2 & n) {
          const e = P();
          Pt('mat-empty', e._control.empty && !e._shouldAlwaysFloat())(
            'mat-form-field-empty',
            e._control.empty && !e._shouldAlwaysFloat(),
          )('mat-accent', 'accent' == e.color)('mat-warn', 'warn' == e.color),
            S('cdkObserveContentDisabled', 'outline' != e.appearance)(
              'id',
              e._labelId,
            )('ngSwitch', e._hasLabel()),
            it('for', e._control.id)('aria-owns', e._control.id),
            R(2),
            S('ngSwitchCase', !1),
            R(1),
            S('ngSwitchCase', !0),
            R(1),
            S(
              'ngIf',
              !e.hideRequiredMarker &&
                e._control.required &&
                !e._control.disabled,
            );
        }
      }
      function BH(n, t) {
        1 & n && (z(0, 'div', 24), kt(1, 4), Y());
      }
      function HH(n, t) {
        if ((1 & n && (z(0, 'div', 25), lt(1, 'span', 26), Y()), 2 & n)) {
          const e = P();
          R(1),
            Pt('mat-accent', 'accent' == e.color)(
              'mat-warn',
              'warn' == e.color,
            );
        }
      }
      function jH(n, t) {
        1 & n && (z(0, 'div'), kt(1, 5), Y()),
          2 & n && S('@transitionMessages', P()._subscriptAnimationState);
      }
      function GH(n, t) {
        if ((1 & n && (z(0, 'div', 30), Nt(1), Y()), 2 & n)) {
          const e = P(2);
          S('id', e._hintLabelId), R(1), Hr(e.hintLabel);
        }
      }
      function $H(n, t) {
        if (
          (1 & n &&
            (z(0, 'div', 27),
            H(1, GH, 2, 2, 'div', 28),
            kt(2, 6),
            lt(3, 'div', 29),
            kt(4, 7),
            Y()),
          2 & n)
        ) {
          const e = P();
          S('@transitionMessages', e._subscriptAnimationState),
            R(1),
            S('ngIf', e.hintLabel);
        }
      }
      const UH = [
          '*',
          [['', 'matPrefix', '']],
          [['mat-placeholder']],
          [['mat-label']],
          [['', 'matSuffix', '']],
          [['mat-error']],
          [['mat-hint', 3, 'align', 'end']],
          [['mat-hint', 'align', 'end']],
        ],
        zH = [
          '*',
          '[matPrefix]',
          'mat-placeholder',
          'mat-label',
          '[matSuffix]',
          'mat-error',
          "mat-hint:not([align='end'])",
          "mat-hint[align='end']",
        ],
        WH = new I('MatError'),
        qH = {
          transitionMessages: sh('transitionMessages', [
            wl('enter', gi({opacity: 1, transform: 'translateY(0%)'})),
            Dl('void => enter', [
              gi({opacity: 0, transform: 'translateY(-5px)'}),
              oh('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
            ]),
          ]),
        };
      let Ul = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵdir = w({type: n})),
          n
        );
      })();
      const KH = new I('MatHint');
      let WD = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵdir = w({type: n, selectors: [['mat-label']]})),
            n
          );
        })(),
        YH = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵdir = w({type: n, selectors: [['mat-placeholder']]})),
            n
          );
        })();
      const qD = new I('MatPrefix');
      let QH = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵdir = w({
            type: n,
            selectors: [['', 'matPrefix', '']],
            features: [ue([{provide: qD, useExisting: n}])],
          })),
          n
        );
      })();
      const KD = new I('MatSuffix');
      let ZH = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [['', 'matSuffix', '']],
              features: [ue([{provide: KD, useExisting: n}])],
            })),
            n
          );
        })(),
        YD = 0;
      const JH = RD(
          class {
            constructor(n) {
              this._elementRef = n;
            }
          },
          'primary',
        ),
        ej = new I('MAT_FORM_FIELD_DEFAULT_OPTIONS'),
        kh = new I('MatFormField');
      let tj = (() => {
          class n extends JH {
            constructor(e, i, r, s, o, a, l) {
              super(e),
                (this._changeDetectorRef = i),
                (this._dir = r),
                (this._defaults = s),
                (this._platform = o),
                (this._ngZone = a),
                (this._outlineGapCalculationNeededImmediately = !1),
                (this._outlineGapCalculationNeededOnStable = !1),
                (this._destroyed = new de()),
                (this._showAlwaysAnimate = !1),
                (this._subscriptAnimationState = ''),
                (this._hintLabel = ''),
                (this._hintLabelId = 'mat-hint-' + YD++),
                (this._labelId = 'mat-form-field-label-' + YD++),
                (this.floatLabel = this._getDefaultFloatLabelState()),
                (this._animationsEnabled = 'NoopAnimations' !== l),
                (this.appearance = s && s.appearance ? s.appearance : 'legacy'),
                (this._hideRequiredMarker =
                  !(!s || null == s.hideRequiredMarker) &&
                  s.hideRequiredMarker);
            }
            get appearance() {
              return this._appearance;
            }
            set appearance(e) {
              const i = this._appearance;
              (this._appearance =
                e || (this._defaults && this._defaults.appearance) || 'legacy'),
                'outline' === this._appearance &&
                  i !== e &&
                  (this._outlineGapCalculationNeededOnStable = !0);
            }
            get hideRequiredMarker() {
              return this._hideRequiredMarker;
            }
            set hideRequiredMarker(e) {
              this._hideRequiredMarker = we(e);
            }
            _shouldAlwaysFloat() {
              return 'always' === this.floatLabel && !this._showAlwaysAnimate;
            }
            _canLabelFloat() {
              return 'never' !== this.floatLabel;
            }
            get hintLabel() {
              return this._hintLabel;
            }
            set hintLabel(e) {
              (this._hintLabel = e), this._processHints();
            }
            get floatLabel() {
              return 'legacy' !== this.appearance &&
                'never' === this._floatLabel
                ? 'auto'
                : this._floatLabel;
            }
            set floatLabel(e) {
              e !== this._floatLabel &&
                ((this._floatLabel = e || this._getDefaultFloatLabelState()),
                this._changeDetectorRef.markForCheck());
            }
            get _control() {
              return (
                this._explicitFormFieldControl ||
                this._controlNonStatic ||
                this._controlStatic
              );
            }
            set _control(e) {
              this._explicitFormFieldControl = e;
            }
            getLabelId() {
              return this._hasFloatingLabel() ? this._labelId : null;
            }
            getConnectedOverlayOrigin() {
              return this._connectionContainerRef || this._elementRef;
            }
            ngAfterContentInit() {
              this._validateControlChild();
              const e = this._control;
              e.controlType &&
                this._elementRef.nativeElement.classList.add(
                  `mat-form-field-type-${e.controlType}`,
                ),
                e.stateChanges.pipe(Mo(null)).subscribe(() => {
                  this._validatePlaceholders(),
                    this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                e.ngControl &&
                  e.ngControl.valueChanges &&
                  e.ngControl.valueChanges
                    .pipe(Qe(this._destroyed))
                    .subscribe(() => this._changeDetectorRef.markForCheck()),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable
                    .pipe(Qe(this._destroyed))
                    .subscribe(() => {
                      this._outlineGapCalculationNeededOnStable &&
                        this.updateOutlineGap();
                    });
                }),
                kn(
                  this._prefixChildren.changes,
                  this._suffixChildren.changes,
                ).subscribe(() => {
                  (this._outlineGapCalculationNeededOnStable = !0),
                    this._changeDetectorRef.markForCheck();
                }),
                this._hintChildren.changes.pipe(Mo(null)).subscribe(() => {
                  this._processHints(), this._changeDetectorRef.markForCheck();
                }),
                this._errorChildren.changes.pipe(Mo(null)).subscribe(() => {
                  this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                this._dir &&
                  this._dir.change.pipe(Qe(this._destroyed)).subscribe(() => {
                    'function' == typeof requestAnimationFrame
                      ? this._ngZone.runOutsideAngular(() => {
                          requestAnimationFrame(() => this.updateOutlineGap());
                        })
                      : this.updateOutlineGap();
                  });
            }
            ngAfterContentChecked() {
              this._validateControlChild(),
                this._outlineGapCalculationNeededImmediately &&
                  this.updateOutlineGap();
            }
            ngAfterViewInit() {
              (this._subscriptAnimationState = 'enter'),
                this._changeDetectorRef.detectChanges();
            }
            ngOnDestroy() {
              this._destroyed.next(), this._destroyed.complete();
            }
            _shouldForward(e) {
              const i = this._control ? this._control.ngControl : null;
              return i && i[e];
            }
            _hasPlaceholder() {
              return !!(
                (this._control && this._control.placeholder) ||
                this._placeholderChild
              );
            }
            _hasLabel() {
              return !(!this._labelChildNonStatic && !this._labelChildStatic);
            }
            _shouldLabelFloat() {
              return (
                this._canLabelFloat() &&
                ((this._control && this._control.shouldLabelFloat) ||
                  this._shouldAlwaysFloat())
              );
            }
            _hideControlPlaceholder() {
              return (
                ('legacy' === this.appearance && !this._hasLabel()) ||
                (this._hasLabel() && !this._shouldLabelFloat())
              );
            }
            _hasFloatingLabel() {
              return (
                this._hasLabel() ||
                ('legacy' === this.appearance && this._hasPlaceholder())
              );
            }
            _getDisplayedMessages() {
              return this._errorChildren &&
                this._errorChildren.length > 0 &&
                this._control.errorState
                ? 'error'
                : 'hint';
            }
            _animateAndLockLabel() {
              this._hasFloatingLabel() &&
                this._canLabelFloat() &&
                (this._animationsEnabled &&
                  this._label &&
                  ((this._showAlwaysAnimate = !0),
                  $l(this._label.nativeElement, 'transitionend')
                    .pipe(rs(1))
                    .subscribe(() => {
                      this._showAlwaysAnimate = !1;
                    })),
                (this.floatLabel = 'always'),
                this._changeDetectorRef.markForCheck());
            }
            _validatePlaceholders() {}
            _processHints() {
              this._validateHints(), this._syncDescribedByIds();
            }
            _validateHints() {}
            _getDefaultFloatLabelState() {
              return (this._defaults && this._defaults.floatLabel) || 'auto';
            }
            _syncDescribedByIds() {
              if (this._control) {
                let e = [];
                if (
                  (this._control.userAriaDescribedBy &&
                    'string' == typeof this._control.userAriaDescribedBy &&
                    e.push(...this._control.userAriaDescribedBy.split(' ')),
                  'hint' === this._getDisplayedMessages())
                ) {
                  const i = this._hintChildren
                      ? this._hintChildren.find(s => 'start' === s.align)
                      : null,
                    r = this._hintChildren
                      ? this._hintChildren.find(s => 'end' === s.align)
                      : null;
                  i
                    ? e.push(i.id)
                    : this._hintLabel && e.push(this._hintLabelId),
                    r && e.push(r.id);
                } else
                  this._errorChildren &&
                    e.push(...this._errorChildren.map(i => i.id));
                this._control.setDescribedByIds(e);
              }
            }
            _validateControlChild() {}
            updateOutlineGap() {
              const e = this._label ? this._label.nativeElement : null,
                i = this._connectionContainerRef.nativeElement,
                r = '.mat-form-field-outline-start',
                s = '.mat-form-field-outline-gap';
              if ('outline' !== this.appearance || !this._platform.isBrowser)
                return;
              if (!e || !e.children.length || !e.textContent.trim()) {
                const u = i.querySelectorAll(`${r}, ${s}`);
                for (let d = 0; d < u.length; d++) u[d].style.width = '0';
                return;
              }
              if (!this._isAttachedToDOM())
                return void (this._outlineGapCalculationNeededImmediately = !0);
              let o = 0,
                a = 0;
              const l = i.querySelectorAll(r),
                c = i.querySelectorAll(s);
              if (this._label && this._label.nativeElement.children.length) {
                const u = i.getBoundingClientRect();
                if (0 === u.width && 0 === u.height)
                  return (
                    (this._outlineGapCalculationNeededOnStable = !0),
                    void (this._outlineGapCalculationNeededImmediately = !1)
                  );
                const d = this._getStartEnd(u),
                  f = e.children,
                  h = this._getStartEnd(f[0].getBoundingClientRect());
                let g = 0;
                for (let m = 0; m < f.length; m++) g += f[m].offsetWidth;
                (o = Math.abs(h - d) - 5), (a = g > 0 ? 0.75 * g + 10 : 0);
              }
              for (let u = 0; u < l.length; u++) l[u].style.width = `${o}px`;
              for (let u = 0; u < c.length; u++) c[u].style.width = `${a}px`;
              this._outlineGapCalculationNeededOnStable =
                this._outlineGapCalculationNeededImmediately = !1;
            }
            _getStartEnd(e) {
              return this._dir && 'rtl' === this._dir.value ? e.right : e.left;
            }
            _isAttachedToDOM() {
              const e = this._elementRef.nativeElement;
              if (e.getRootNode) {
                const i = e.getRootNode();
                return i && i !== e;
              }
              return document.documentElement.contains(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                p(j),
                p(Li),
                p(Xr, 8),
                p(ej, 8),
                p(Fn),
                p(se),
                p(Eo, 8),
              );
            }),
            (n.ɵcmp = Jn({
              type: n,
              selectors: [['mat-form-field']],
              contentQueries: function (e, i, r) {
                if (
                  (1 & e &&
                    (Lt(r, Ul, 5),
                    Lt(r, Ul, 7),
                    Lt(r, WD, 5),
                    Lt(r, WD, 7),
                    Lt(r, YH, 5),
                    Lt(r, WH, 5),
                    Lt(r, KH, 5),
                    Lt(r, qD, 5),
                    Lt(r, KD, 5)),
                  2 & e)
                ) {
                  let s;
                  Be((s = He())) && (i._controlNonStatic = s.first),
                    Be((s = He())) && (i._controlStatic = s.first),
                    Be((s = He())) && (i._labelChildNonStatic = s.first),
                    Be((s = He())) && (i._labelChildStatic = s.first),
                    Be((s = He())) && (i._placeholderChild = s.first),
                    Be((s = He())) && (i._errorChildren = s),
                    Be((s = He())) && (i._hintChildren = s),
                    Be((s = He())) && (i._prefixChildren = s),
                    Be((s = He())) && (i._suffixChildren = s);
                }
              },
              viewQuery: function (e, i) {
                if ((1 & e && (li(TH, 7), li(FH, 5), li(OH, 5)), 2 & e)) {
                  let r;
                  Be((r = He())) && (i._connectionContainerRef = r.first),
                    Be((r = He())) && (i._inputContainerRef = r.first),
                    Be((r = He())) && (i._label = r.first);
                }
              },
              hostAttrs: [1, 'mat-form-field'],
              hostVars: 40,
              hostBindings: function (e, i) {
                2 & e &&
                  Pt(
                    'mat-form-field-appearance-standard',
                    'standard' == i.appearance,
                  )('mat-form-field-appearance-fill', 'fill' == i.appearance)(
                    'mat-form-field-appearance-outline',
                    'outline' == i.appearance,
                  )(
                    'mat-form-field-appearance-legacy',
                    'legacy' == i.appearance,
                  )('mat-form-field-invalid', i._control.errorState)(
                    'mat-form-field-can-float',
                    i._canLabelFloat(),
                  )('mat-form-field-should-float', i._shouldLabelFloat())(
                    'mat-form-field-has-label',
                    i._hasFloatingLabel(),
                  )(
                    'mat-form-field-hide-placeholder',
                    i._hideControlPlaceholder(),
                  )('mat-form-field-disabled', i._control.disabled)(
                    'mat-form-field-autofilled',
                    i._control.autofilled,
                  )('mat-focused', i._control.focused)(
                    'ng-untouched',
                    i._shouldForward('untouched'),
                  )('ng-touched', i._shouldForward('touched'))(
                    'ng-pristine',
                    i._shouldForward('pristine'),
                  )('ng-dirty', i._shouldForward('dirty'))(
                    'ng-valid',
                    i._shouldForward('valid'),
                  )('ng-invalid', i._shouldForward('invalid'))(
                    'ng-pending',
                    i._shouldForward('pending'),
                  )('_mat-animation-noopable', !i._animationsEnabled);
              },
              inputs: {
                color: 'color',
                appearance: 'appearance',
                hideRequiredMarker: 'hideRequiredMarker',
                hintLabel: 'hintLabel',
                floatLabel: 'floatLabel',
              },
              exportAs: ['matFormField'],
              features: [ue([{provide: kh, useExisting: n}]), x],
              ngContentSelectors: zH,
              decls: 15,
              vars: 8,
              consts: [
                [1, 'mat-form-field-wrapper'],
                [1, 'mat-form-field-flex', 3, 'click'],
                ['connectionContainer', ''],
                [4, 'ngIf'],
                [
                  'class',
                  'mat-form-field-prefix',
                  3,
                  'cdkObserveContentDisabled',
                  'cdkObserveContent',
                  4,
                  'ngIf',
                ],
                [1, 'mat-form-field-infix'],
                ['inputContainer', ''],
                [1, 'mat-form-field-label-wrapper'],
                [
                  'class',
                  'mat-form-field-label',
                  3,
                  'cdkObserveContentDisabled',
                  'id',
                  'mat-empty',
                  'mat-form-field-empty',
                  'mat-accent',
                  'mat-warn',
                  'ngSwitch',
                  'cdkObserveContent',
                  4,
                  'ngIf',
                ],
                ['class', 'mat-form-field-suffix', 4, 'ngIf'],
                ['class', 'mat-form-field-underline', 4, 'ngIf'],
                [1, 'mat-form-field-subscript-wrapper', 3, 'ngSwitch'],
                [4, 'ngSwitchCase'],
                ['class', 'mat-form-field-hint-wrapper', 4, 'ngSwitchCase'],
                [1, 'mat-form-field-outline'],
                [1, 'mat-form-field-outline-start'],
                [1, 'mat-form-field-outline-gap'],
                [1, 'mat-form-field-outline-end'],
                [1, 'mat-form-field-outline', 'mat-form-field-outline-thick'],
                [
                  1,
                  'mat-form-field-prefix',
                  3,
                  'cdkObserveContentDisabled',
                  'cdkObserveContent',
                ],
                [
                  1,
                  'mat-form-field-label',
                  3,
                  'cdkObserveContentDisabled',
                  'id',
                  'ngSwitch',
                  'cdkObserveContent',
                ],
                ['label', ''],
                [
                  'class',
                  'mat-placeholder-required mat-form-field-required-marker',
                  'aria-hidden',
                  'true',
                  4,
                  'ngIf',
                ],
                [
                  'aria-hidden',
                  'true',
                  1,
                  'mat-placeholder-required',
                  'mat-form-field-required-marker',
                ],
                [1, 'mat-form-field-suffix'],
                [1, 'mat-form-field-underline'],
                [1, 'mat-form-field-ripple'],
                [1, 'mat-form-field-hint-wrapper'],
                ['class', 'mat-hint', 3, 'id', 4, 'ngIf'],
                [1, 'mat-form-field-hint-spacer'],
                [1, 'mat-hint', 3, 'id'],
              ],
              template: function (e, i) {
                1 & e &&
                  (Hs(UH),
                  z(0, 'div', 0)(1, 'div', 1, 2),
                  ve('click', function (s) {
                    return (
                      i._control.onContainerClick &&
                      i._control.onContainerClick(s)
                    );
                  }),
                  H(3, RH, 9, 0, 'ng-container', 3),
                  H(4, kH, 2, 1, 'div', 4),
                  z(5, 'div', 5, 6),
                  kt(7),
                  z(8, 'span', 7),
                  H(9, VH, 5, 16, 'label', 8),
                  Y()(),
                  H(10, BH, 2, 0, 'div', 9),
                  Y(),
                  H(11, HH, 2, 4, 'div', 10),
                  z(12, 'div', 11),
                  H(13, jH, 2, 1, 'div', 12),
                  H(14, $H, 5, 2, 'div', 13),
                  Y()()),
                  2 & e &&
                    (R(3),
                    S('ngIf', 'outline' == i.appearance),
                    R(1),
                    S('ngIf', i._prefixChildren.length),
                    R(5),
                    S('ngIf', i._hasFloatingLabel()),
                    R(1),
                    S('ngIf', i._suffixChildren.length),
                    R(1),
                    S('ngIf', 'outline' != i.appearance),
                    R(1),
                    S('ngSwitch', i._getDisplayedMessages()),
                    R(1),
                    S('ngSwitchCase', 'error'),
                    R(1),
                    S('ngSwitchCase', 'hint'));
              },
              directives: [Xa, CV, ro, Xd],
              styles: [
                '.mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n',
                '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n',
                '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n',
                '.mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n',
                '.mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n',
                '.mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n',
              ],
              encapsulation: 2,
              data: {animation: [qH.transitionMessages]},
              changeDetection: 0,
            })),
            n
          );
        })(),
        zl = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[so, jt, wV], jt]})),
            n
          );
        })();
      function ZD(n) {
        return Xe((t, e) => {
          let s,
            i = null,
            r = !1;
          (i = t.subscribe(
            Je(e, void 0, void 0, o => {
              (s = wt(n(o, ZD(n)(t)))),
                i ? (i.unsubscribe(), (i = null), s.subscribe(e)) : (r = !0);
            }),
          )),
            r && (i.unsubscribe(), (i = null), s.subscribe(e));
        });
      }
      const rj = ['*'];
      let Wl;
      function Ao(n) {
        var t;
        return (
          (null ===
            (t = (function sj() {
              if (
                void 0 === Wl &&
                ((Wl = null), 'undefined' != typeof window)
              ) {
                const n = window;
                void 0 !== n.trustedTypes &&
                  (Wl = n.trustedTypes.createPolicy('angular#components', {
                    createHTML: t => t,
                  }));
              }
              return Wl;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(n)) || n
        );
      }
      function XD(n) {
        return Error(`Unable to find icon with the name "${n}"`);
      }
      function JD(n) {
        return Error(
          `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`,
        );
      }
      function eE(n) {
        return Error(
          `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`,
        );
      }
      class Qi {
        constructor(t, e, i) {
          (this.url = t), (this.svgText = e), (this.options = i);
        }
      }
      let ql = (() => {
        class n {
          constructor(e, i, r, s) {
            (this._httpClient = e),
              (this._sanitizer = i),
              (this._errorHandler = s),
              (this._svgIconConfigs = new Map()),
              (this._iconSetConfigs = new Map()),
              (this._cachedIconsByUrl = new Map()),
              (this._inProgressUrlFetches = new Map()),
              (this._fontCssClassesByAlias = new Map()),
              (this._resolvers = []),
              (this._defaultFontSetClass = 'material-icons'),
              (this._document = r);
          }
          addSvgIcon(e, i, r) {
            return this.addSvgIconInNamespace('', e, i, r);
          }
          addSvgIconLiteral(e, i, r) {
            return this.addSvgIconLiteralInNamespace('', e, i, r);
          }
          addSvgIconInNamespace(e, i, r, s) {
            return this._addSvgIconConfig(e, i, new Qi(r, null, s));
          }
          addSvgIconResolver(e) {
            return this._resolvers.push(e), this;
          }
          addSvgIconLiteralInNamespace(e, i, r, s) {
            const o = this._sanitizer.sanitize(le.HTML, r);
            if (!o) throw eE(r);
            const a = Ao(o);
            return this._addSvgIconConfig(e, i, new Qi('', a, s));
          }
          addSvgIconSet(e, i) {
            return this.addSvgIconSetInNamespace('', e, i);
          }
          addSvgIconSetLiteral(e, i) {
            return this.addSvgIconSetLiteralInNamespace('', e, i);
          }
          addSvgIconSetInNamespace(e, i, r) {
            return this._addSvgIconSetConfig(e, new Qi(i, null, r));
          }
          addSvgIconSetLiteralInNamespace(e, i, r) {
            const s = this._sanitizer.sanitize(le.HTML, i);
            if (!s) throw eE(i);
            const o = Ao(s);
            return this._addSvgIconSetConfig(e, new Qi('', o, r));
          }
          registerFontClassAlias(e, i = e) {
            return this._fontCssClassesByAlias.set(e, i), this;
          }
          classNameForFontAlias(e) {
            return this._fontCssClassesByAlias.get(e) || e;
          }
          setDefaultFontSetClass(e) {
            return (this._defaultFontSetClass = e), this;
          }
          getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          getSvgIconFromUrl(e) {
            const i = this._sanitizer.sanitize(le.RESOURCE_URL, e);
            if (!i) throw JD(e);
            const r = this._cachedIconsByUrl.get(i);
            return r
              ? ji(Kl(r))
              : this._loadSvgIconFromConfig(new Qi(e, null)).pipe(
                  Kr(s => this._cachedIconsByUrl.set(i, s)),
                  rt(s => Kl(s)),
                );
          }
          getNamedSvgIcon(e, i = '') {
            const r = tE(i, e);
            let s = this._svgIconConfigs.get(r);
            if (s) return this._getSvgFromConfig(s);
            if (((s = this._getIconConfigFromResolvers(i, e)), s))
              return this._svgIconConfigs.set(r, s), this._getSvgFromConfig(s);
            const o = this._iconSetConfigs.get(i);
            return o
              ? this._getSvgFromIconSetConfigs(e, o)
              : (function nj(n, t) {
                  const e = ie(n) ? n : () => n,
                    i = r => r.error(e());
                  return new Me(t ? r => t.schedule(i, 0, r) : i);
                })(XD(r));
          }
          ngOnDestroy() {
            (this._resolvers = []),
              this._svgIconConfigs.clear(),
              this._iconSetConfigs.clear(),
              this._cachedIconsByUrl.clear();
          }
          _getSvgFromConfig(e) {
            return e.svgText
              ? ji(Kl(this._svgElementFromConfig(e)))
              : this._loadSvgIconFromConfig(e).pipe(rt(i => Kl(i)));
          }
          _getSvgFromIconSetConfigs(e, i) {
            const r = this._extractIconWithNameFromAnySet(e, i);
            return r
              ? ji(r)
              : EC(
                  i
                    .filter(o => !o.svgText)
                    .map(o =>
                      this._loadSvgIconSetFromConfig(o).pipe(
                        ZD(a => {
                          const c = `Loading icon set URL: ${this._sanitizer.sanitize(
                            le.RESOURCE_URL,
                            o.url,
                          )} failed: ${a.message}`;
                          return (
                            this._errorHandler.handleError(new Error(c)),
                            ji(null)
                          );
                        }),
                      ),
                    ),
                ).pipe(
                  rt(() => {
                    const o = this._extractIconWithNameFromAnySet(e, i);
                    if (!o) throw XD(e);
                    return o;
                  }),
                );
          }
          _extractIconWithNameFromAnySet(e, i) {
            for (let r = i.length - 1; r >= 0; r--) {
              const s = i[r];
              if (s.svgText && s.svgText.toString().indexOf(e) > -1) {
                const o = this._svgElementFromConfig(s),
                  a = this._extractSvgIconFromSet(o, e, s.options);
                if (a) return a;
              }
            }
            return null;
          }
          _loadSvgIconFromConfig(e) {
            return this._fetchIcon(e).pipe(
              Kr(i => (e.svgText = i)),
              rt(() => this._svgElementFromConfig(e)),
            );
          }
          _loadSvgIconSetFromConfig(e) {
            return e.svgText
              ? ji(null)
              : this._fetchIcon(e).pipe(Kr(i => (e.svgText = i)));
          }
          _extractSvgIconFromSet(e, i, r) {
            const s = e.querySelector(`[id="${i}"]`);
            if (!s) return null;
            const o = s.cloneNode(!0);
            if ((o.removeAttribute('id'), 'svg' === o.nodeName.toLowerCase()))
              return this._setSvgAttributes(o, r);
            if ('symbol' === o.nodeName.toLowerCase())
              return this._setSvgAttributes(this._toSvgElement(o), r);
            const a = this._svgElementFromString(Ao('<svg></svg>'));
            return a.appendChild(o), this._setSvgAttributes(a, r);
          }
          _svgElementFromString(e) {
            const i = this._document.createElement('DIV');
            i.innerHTML = e;
            const r = i.querySelector('svg');
            if (!r) throw Error('<svg> tag not found');
            return r;
          }
          _toSvgElement(e) {
            const i = this._svgElementFromString(Ao('<svg></svg>')),
              r = e.attributes;
            for (let s = 0; s < r.length; s++) {
              const {name: o, value: a} = r[s];
              'id' !== o && i.setAttribute(o, a);
            }
            for (let s = 0; s < e.childNodes.length; s++)
              e.childNodes[s].nodeType === this._document.ELEMENT_NODE &&
                i.appendChild(e.childNodes[s].cloneNode(!0));
            return i;
          }
          _setSvgAttributes(e, i) {
            return (
              e.setAttribute('fit', ''),
              e.setAttribute('height', '100%'),
              e.setAttribute('width', '100%'),
              e.setAttribute('preserveAspectRatio', 'xMidYMid meet'),
              e.setAttribute('focusable', 'false'),
              i && i.viewBox && e.setAttribute('viewBox', i.viewBox),
              e
            );
          }
          _fetchIcon(e) {
            var i;
            const {url: r, options: s} = e,
              o =
                null !== (i = null == s ? void 0 : s.withCredentials) &&
                void 0 !== i &&
                i;
            if (!this._httpClient)
              throw (function oj() {
                return Error(
                  'Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.',
                );
              })();
            if (null == r) throw Error(`Cannot fetch icon from URL "${r}".`);
            const a = this._sanitizer.sanitize(le.RESOURCE_URL, r);
            if (!a) throw JD(r);
            const l = this._inProgressUrlFetches.get(a);
            if (l) return l;
            const c = this._httpClient
              .get(a, {responseType: 'text', withCredentials: o})
              .pipe(
                rt(u => Ao(u)),
                (function ij(n) {
                  return Xe((t, e) => {
                    try {
                      t.subscribe(e);
                    } finally {
                      e.add(n);
                    }
                  });
                })(() => this._inProgressUrlFetches.delete(a)),
                hp(),
              );
            return this._inProgressUrlFetches.set(a, c), c;
          }
          _addSvgIconConfig(e, i, r) {
            return this._svgIconConfigs.set(tE(e, i), r), this;
          }
          _addSvgIconSetConfig(e, i) {
            const r = this._iconSetConfigs.get(e);
            return r ? r.push(i) : this._iconSetConfigs.set(e, [i]), this;
          }
          _svgElementFromConfig(e) {
            if (!e.svgElement) {
              const i = this._svgElementFromString(e.svgText);
              this._setSvgAttributes(i, e.options), (e.svgElement = i);
            }
            return e.svgElement;
          }
          _getIconConfigFromResolvers(e, i) {
            for (let r = 0; r < this._resolvers.length; r++) {
              const s = this._resolvers[r](i, e);
              if (s)
                return lj(s) ? new Qi(s.url, null, s.options) : new Qi(s, null);
            }
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(hf, 8), b(rl), b(ee, 8), b(ri));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      function Kl(n) {
        return n.cloneNode(!0);
      }
      function tE(n, t) {
        return n + ':' + t;
      }
      function lj(n) {
        return !(!n.url || !n.options);
      }
      const cj = RD(
          class {
            constructor(n) {
              this._elementRef = n;
            }
          },
        ),
        uj = new I('mat-icon-location', {
          providedIn: 'root',
          factory: function dj() {
            const n = yr(ee),
              t = n ? n.location : null;
            return {getPathname: () => (t ? t.pathname + t.search : '')};
          },
        }),
        nE = [
          'clip-path',
          'color-profile',
          'src',
          'cursor',
          'fill',
          'filter',
          'marker',
          'marker-start',
          'marker-mid',
          'marker-end',
          'mask',
          'stroke',
        ],
        fj = nE.map(n => `[${n}]`).join(', '),
        hj = /^url\(['"]?#(.*?)['"]?\)$/;
      let pj = (() => {
          class n extends cj {
            constructor(e, i, r, s, o) {
              super(e),
                (this._iconRegistry = i),
                (this._location = s),
                (this._errorHandler = o),
                (this._inline = !1),
                (this._currentIconFetch = Le.EMPTY),
                r || e.nativeElement.setAttribute('aria-hidden', 'true');
            }
            get inline() {
              return this._inline;
            }
            set inline(e) {
              this._inline = we(e);
            }
            get svgIcon() {
              return this._svgIcon;
            }
            set svgIcon(e) {
              e !== this._svgIcon &&
                (e
                  ? this._updateSvgIcon(e)
                  : this._svgIcon && this._clearSvgElement(),
                (this._svgIcon = e));
            }
            get fontSet() {
              return this._fontSet;
            }
            set fontSet(e) {
              const i = this._cleanupFontValue(e);
              i !== this._fontSet &&
                ((this._fontSet = i), this._updateFontIconClasses());
            }
            get fontIcon() {
              return this._fontIcon;
            }
            set fontIcon(e) {
              const i = this._cleanupFontValue(e);
              i !== this._fontIcon &&
                ((this._fontIcon = i), this._updateFontIconClasses());
            }
            _splitIconName(e) {
              if (!e) return ['', ''];
              const i = e.split(':');
              switch (i.length) {
                case 1:
                  return ['', i[0]];
                case 2:
                  return i;
                default:
                  throw Error(`Invalid icon name: "${e}"`);
              }
            }
            ngOnInit() {
              this._updateFontIconClasses();
            }
            ngAfterViewChecked() {
              const e = this._elementsWithExternalReferences;
              if (e && e.size) {
                const i = this._location.getPathname();
                i !== this._previousPath &&
                  ((this._previousPath = i), this._prependPathToReferences(i));
              }
            }
            ngOnDestroy() {
              this._currentIconFetch.unsubscribe(),
                this._elementsWithExternalReferences &&
                  this._elementsWithExternalReferences.clear();
            }
            _usingFontIcon() {
              return !this.svgIcon;
            }
            _setSvgElement(e) {
              this._clearSvgElement();
              const i = this._location.getPathname();
              (this._previousPath = i),
                this._cacheChildrenWithExternalReferences(e),
                this._prependPathToReferences(i),
                this._elementRef.nativeElement.appendChild(e);
            }
            _clearSvgElement() {
              const e = this._elementRef.nativeElement;
              let i = e.childNodes.length;
              for (
                this._elementsWithExternalReferences &&
                this._elementsWithExternalReferences.clear();
                i--;

              ) {
                const r = e.childNodes[i];
                (1 !== r.nodeType || 'svg' === r.nodeName.toLowerCase()) &&
                  r.remove();
              }
            }
            _updateFontIconClasses() {
              if (!this._usingFontIcon()) return;
              const e = this._elementRef.nativeElement,
                i = this.fontSet
                  ? this._iconRegistry.classNameForFontAlias(this.fontSet)
                  : this._iconRegistry.getDefaultFontSetClass();
              i != this._previousFontSetClass &&
                (this._previousFontSetClass &&
                  e.classList.remove(this._previousFontSetClass),
                i && e.classList.add(i),
                (this._previousFontSetClass = i)),
                this.fontIcon != this._previousFontIconClass &&
                  (this._previousFontIconClass &&
                    e.classList.remove(this._previousFontIconClass),
                  this.fontIcon && e.classList.add(this.fontIcon),
                  (this._previousFontIconClass = this.fontIcon));
            }
            _cleanupFontValue(e) {
              return 'string' == typeof e ? e.trim().split(' ')[0] : e;
            }
            _prependPathToReferences(e) {
              const i = this._elementsWithExternalReferences;
              i &&
                i.forEach((r, s) => {
                  r.forEach(o => {
                    s.setAttribute(o.name, `url('${e}#${o.value}')`);
                  });
                });
            }
            _cacheChildrenWithExternalReferences(e) {
              const i = e.querySelectorAll(fj),
                r = (this._elementsWithExternalReferences =
                  this._elementsWithExternalReferences || new Map());
              for (let s = 0; s < i.length; s++)
                nE.forEach(o => {
                  const a = i[s],
                    l = a.getAttribute(o),
                    c = l ? l.match(hj) : null;
                  if (c) {
                    let u = r.get(a);
                    u || ((u = []), r.set(a, u)),
                      u.push({name: o, value: c[1]});
                  }
                });
            }
            _updateSvgIcon(e) {
              if (
                ((this._svgNamespace = null),
                (this._svgName = null),
                this._currentIconFetch.unsubscribe(),
                e)
              ) {
                const [i, r] = this._splitIconName(e);
                i && (this._svgNamespace = i),
                  r && (this._svgName = r),
                  (this._currentIconFetch = this._iconRegistry
                    .getNamedSvgIcon(r, i)
                    .pipe(rs(1))
                    .subscribe(
                      s => this._setSvgElement(s),
                      s => {
                        this._errorHandler.handleError(
                          new Error(
                            `Error retrieving icon ${i}:${r}! ${s.message}`,
                          ),
                        );
                      },
                    ));
              }
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(j), p(ql), bs('aria-hidden'), p(uj), p(ri));
            }),
            (n.ɵcmp = Jn({
              type: n,
              selectors: [['mat-icon']],
              hostAttrs: ['role', 'img', 1, 'mat-icon', 'notranslate'],
              hostVars: 7,
              hostBindings: function (e, i) {
                2 & e &&
                  (it(
                    'data-mat-icon-type',
                    i._usingFontIcon() ? 'font' : 'svg',
                  )('data-mat-icon-name', i._svgName || i.fontIcon)(
                    'data-mat-icon-namespace',
                    i._svgNamespace || i.fontSet,
                  ),
                  Pt('mat-icon-inline', i.inline)(
                    'mat-icon-no-color',
                    'primary' !== i.color &&
                      'accent' !== i.color &&
                      'warn' !== i.color,
                  ));
              },
              inputs: {
                color: 'color',
                inline: 'inline',
                svgIcon: 'svgIcon',
                fontSet: 'fontSet',
                fontIcon: 'fontIcon',
              },
              exportAs: ['matIcon'],
              features: [x],
              ngContentSelectors: rj,
              decls: 1,
              vars: 0,
              template: function (e, i) {
                1 & e && (Hs(), kt(0));
              },
              styles: [
                '.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        gj = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[jt], jt]})),
            n
          );
        })();
      const iE = bl({passive: !0});
      let mj = (() => {
          class n {
            constructor(e, i) {
              (this._platform = e),
                (this._ngZone = i),
                (this._monitoredElements = new Map());
            }
            monitor(e) {
              if (!this._platform.isBrowser) return No;
              const i = Zr(e),
                r = this._monitoredElements.get(i);
              if (r) return r.subject;
              const s = new de(),
                o = 'cdk-text-field-autofilled',
                a = l => {
                  'cdk-text-field-autofill-start' !== l.animationName ||
                  i.classList.contains(o)
                    ? 'cdk-text-field-autofill-end' === l.animationName &&
                      i.classList.contains(o) &&
                      (i.classList.remove(o),
                      this._ngZone.run(() =>
                        s.next({target: l.target, isAutofilled: !1}),
                      ))
                    : (i.classList.add(o),
                      this._ngZone.run(() =>
                        s.next({target: l.target, isAutofilled: !0}),
                      ));
                };
              return (
                this._ngZone.runOutsideAngular(() => {
                  i.addEventListener('animationstart', a, iE),
                    i.classList.add('cdk-text-field-autofill-monitored');
                }),
                this._monitoredElements.set(i, {
                  subject: s,
                  unlisten: () => {
                    i.removeEventListener('animationstart', a, iE);
                  },
                }),
                s
              );
            }
            stopMonitoring(e) {
              const i = Zr(e),
                r = this._monitoredElements.get(i);
              r &&
                (r.unlisten(),
                r.subject.complete(),
                i.classList.remove('cdk-text-field-autofill-monitored'),
                i.classList.remove('cdk-text-field-autofilled'),
                this._monitoredElements.delete(i));
            }
            ngOnDestroy() {
              this._monitoredElements.forEach((e, i) => this.stopMonitoring(i));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Fn), b(se));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        rE = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({})),
            n
          );
        })();
      const _j = new I('MAT_INPUT_VALUE_ACCESSOR'),
        yj = [
          'button',
          'checkbox',
          'file',
          'hidden',
          'image',
          'radio',
          'range',
          'reset',
          'submit',
        ];
      let vj = 0;
      const bj = kD(
        class {
          constructor(n, t, e, i) {
            (this._defaultErrorStateMatcher = n),
              (this._parentForm = t),
              (this._parentFormGroup = e),
              (this.ngControl = i);
          }
        },
      );
      let Cj = (() => {
          class n extends bj {
            constructor(e, i, r, s, o, a, l, c, u, d) {
              super(a, s, o, r),
                (this._elementRef = e),
                (this._platform = i),
                (this._autofillMonitor = c),
                (this._formField = d),
                (this._uid = 'mat-input-' + vj++),
                (this.focused = !1),
                (this.stateChanges = new de()),
                (this.controlType = 'mat-input'),
                (this.autofilled = !1),
                (this._disabled = !1),
                (this._type = 'text'),
                (this._readonly = !1),
                (this._neverEmptyInputTypes = [
                  'date',
                  'datetime',
                  'datetime-local',
                  'month',
                  'time',
                  'week',
                ].filter(g => Pw().has(g))),
                (this._iOSKeyupListener = g => {
                  const m = g.target;
                  !m.value &&
                    0 === m.selectionStart &&
                    0 === m.selectionEnd &&
                    (m.setSelectionRange(1, 1), m.setSelectionRange(0, 0));
                });
              const f = this._elementRef.nativeElement,
                h = f.nodeName.toLowerCase();
              (this._inputValueAccessor = l || f),
                (this._previousNativeValue = this.value),
                (this.id = this.id),
                i.IOS &&
                  u.runOutsideAngular(() => {
                    e.nativeElement.addEventListener(
                      'keyup',
                      this._iOSKeyupListener,
                    );
                  }),
                (this._isServer = !this._platform.isBrowser),
                (this._isNativeSelect = 'select' === h),
                (this._isTextarea = 'textarea' === h),
                (this._isInFormField = !!d),
                this._isNativeSelect &&
                  (this.controlType = f.multiple
                    ? 'mat-native-select-multiple'
                    : 'mat-native-select');
            }
            get disabled() {
              return this.ngControl && null !== this.ngControl.disabled
                ? this.ngControl.disabled
                : this._disabled;
            }
            set disabled(e) {
              (this._disabled = we(e)),
                this.focused && ((this.focused = !1), this.stateChanges.next());
            }
            get id() {
              return this._id;
            }
            set id(e) {
              this._id = e || this._uid;
            }
            get required() {
              var e, i, r, s;
              return (
                null !==
                  (s =
                    null !== (e = this._required) && void 0 !== e
                      ? e
                      : null ===
                          (r =
                            null === (i = this.ngControl) || void 0 === i
                              ? void 0
                              : i.control) || void 0 === r
                      ? void 0
                      : r.hasValidator(SC.required)) &&
                void 0 !== s &&
                s
              );
            }
            set required(e) {
              this._required = we(e);
            }
            get type() {
              return this._type;
            }
            set type(e) {
              (this._type = e || 'text'),
                this._validateType(),
                !this._isTextarea &&
                  Pw().has(this._type) &&
                  (this._elementRef.nativeElement.type = this._type);
            }
            get value() {
              return this._inputValueAccessor.value;
            }
            set value(e) {
              e !== this.value &&
                ((this._inputValueAccessor.value = e),
                this.stateChanges.next());
            }
            get readonly() {
              return this._readonly;
            }
            set readonly(e) {
              this._readonly = we(e);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                this._autofillMonitor
                  .monitor(this._elementRef.nativeElement)
                  .subscribe(e => {
                    (this.autofilled = e.isAutofilled),
                      this.stateChanges.next();
                  });
            }
            ngOnChanges() {
              this.stateChanges.next();
            }
            ngOnDestroy() {
              this.stateChanges.complete(),
                this._platform.isBrowser &&
                  this._autofillMonitor.stopMonitoring(
                    this._elementRef.nativeElement,
                  ),
                this._platform.IOS &&
                  this._elementRef.nativeElement.removeEventListener(
                    'keyup',
                    this._iOSKeyupListener,
                  );
            }
            ngDoCheck() {
              this.ngControl && this.updateErrorState(),
                this._dirtyCheckNativeValue(),
                this._dirtyCheckPlaceholder();
            }
            focus(e) {
              this._elementRef.nativeElement.focus(e);
            }
            _focusChanged(e) {
              e !== this.focused &&
                ((this.focused = e), this.stateChanges.next());
            }
            _onInput() {}
            _dirtyCheckPlaceholder() {
              var e, i;
              const r = (
                null ===
                  (i =
                    null === (e = this._formField) || void 0 === e
                      ? void 0
                      : e._hideControlPlaceholder) || void 0 === i
                  ? void 0
                  : i.call(e)
              )
                ? null
                : this.placeholder;
              if (r !== this._previousPlaceholder) {
                const s = this._elementRef.nativeElement;
                (this._previousPlaceholder = r),
                  r
                    ? s.setAttribute('placeholder', r)
                    : s.removeAttribute('placeholder');
              }
            }
            _dirtyCheckNativeValue() {
              const e = this._elementRef.nativeElement.value;
              this._previousNativeValue !== e &&
                ((this._previousNativeValue = e), this.stateChanges.next());
            }
            _validateType() {
              yj.indexOf(this._type);
            }
            _isNeverEmpty() {
              return this._neverEmptyInputTypes.indexOf(this._type) > -1;
            }
            _isBadInput() {
              let e = this._elementRef.nativeElement.validity;
              return e && e.badInput;
            }
            get empty() {
              return !(
                this._isNeverEmpty() ||
                this._elementRef.nativeElement.value ||
                this._isBadInput() ||
                this.autofilled
              );
            }
            get shouldLabelFloat() {
              if (this._isNativeSelect) {
                const e = this._elementRef.nativeElement,
                  i = e.options[0];
                return (
                  this.focused ||
                  e.multiple ||
                  !this.empty ||
                  !!(e.selectedIndex > -1 && i && i.label)
                );
              }
              return this.focused || !this.empty;
            }
            setDescribedByIds(e) {
              e.length
                ? this._elementRef.nativeElement.setAttribute(
                    'aria-describedby',
                    e.join(' '),
                  )
                : this._elementRef.nativeElement.removeAttribute(
                    'aria-describedby',
                  );
            }
            onContainerClick() {
              this.focused || this.focus();
            }
            _isInlineSelect() {
              const e = this._elementRef.nativeElement;
              return this._isNativeSelect && (e.multiple || e.size > 1);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                p(j),
                p(Fn),
                p(Tn, 10),
                p(mo, 8),
                p(_o, 8),
                p(Oh),
                p(_j, 10),
                p(mj),
                p(se),
                p(kh, 8),
              );
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [
                ['input', 'matInput', ''],
                ['textarea', 'matInput', ''],
                ['select', 'matNativeControl', ''],
                ['input', 'matNativeControl', ''],
                ['textarea', 'matNativeControl', ''],
              ],
              hostAttrs: [
                1,
                'mat-input-element',
                'mat-form-field-autofill-control',
              ],
              hostVars: 12,
              hostBindings: function (e, i) {
                1 & e &&
                  ve('focus', function () {
                    return i._focusChanged(!0);
                  })('blur', function () {
                    return i._focusChanged(!1);
                  })('input', function () {
                    return i._onInput();
                  }),
                  2 & e &&
                    (Aa('disabled', i.disabled)('required', i.required),
                    it('id', i.id)('data-placeholder', i.placeholder)(
                      'name',
                      i.name || null,
                    )('readonly', (i.readonly && !i._isNativeSelect) || null)(
                      'aria-invalid',
                      i.empty && i.required ? null : i.errorState,
                    )('aria-required', i.required),
                    Pt('mat-input-server', i._isServer)(
                      'mat-native-select-inline',
                      i._isInlineSelect(),
                    ));
              },
              inputs: {
                disabled: 'disabled',
                id: 'id',
                placeholder: 'placeholder',
                name: 'name',
                required: 'required',
                type: 'type',
                errorStateMatcher: 'errorStateMatcher',
                userAriaDescribedBy: [
                  'aria-describedby',
                  'userAriaDescribedBy',
                ],
                value: 'value',
                readonly: 'readonly',
              },
              exportAs: ['matInput'],
              features: [ue([{provide: Ul, useExisting: n}]), x, ht],
            })),
            n
          );
        })(),
        wj = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({providers: [Oh], imports: [[rE, zl, jt], rE, zl]})),
            n
          );
        })();
      const So = {
        schedule(n) {
          let t = requestAnimationFrame,
            e = cancelAnimationFrame;
          const {delegate: i} = So;
          i && ((t = i.requestAnimationFrame), (e = i.cancelAnimationFrame));
          const r = t(s => {
            (e = void 0), n(s);
          });
          return new Le(() => (null == e ? void 0 : e(r)));
        },
        requestAnimationFrame(...n) {
          const {delegate: t} = So;
          return (
            (null == t ? void 0 : t.requestAnimationFrame) ||
            requestAnimationFrame
          )(...n);
        },
        cancelAnimationFrame(...n) {
          const {delegate: t} = So;
          return (
            (null == t ? void 0 : t.cancelAnimationFrame) ||
            cancelAnimationFrame
          )(...n);
        },
        delegate: void 0,
      };
      new (class Ej extends Kf {
        flush(t) {
          this._active = !0;
          const e = this._scheduled;
          this._scheduled = void 0;
          const {actions: i} = this;
          let r;
          t = t || i.shift();
          do {
            if ((r = t.execute(t.state, t.delay))) break;
          } while ((t = i[0]) && t.id === e && i.shift());
          if (((this._active = !1), r)) {
            for (; (t = i[0]) && t.id === e && i.shift(); ) t.unsubscribe();
            throw r;
          }
        }
      })(
        class Dj extends Wf {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          requestAsyncId(t, e, i = 0) {
            return null !== i && i > 0
              ? super.requestAsyncId(t, e, i)
              : (t.actions.push(this),
                t._scheduled ||
                  (t._scheduled = So.requestAnimationFrame(() =>
                    t.flush(void 0),
                  )));
          }
          recycleAsyncId(t, e, i = 0) {
            var r;
            if (null != i ? i > 0 : this.delay > 0)
              return super.recycleAsyncId(t, e, i);
            const {actions: s} = t;
            null != e &&
              (null === (r = s[s.length - 1]) || void 0 === r
                ? void 0
                : r.id) !== e &&
              (So.cancelAnimationFrame(e), (t._scheduled = void 0));
          }
        },
      );
      let Ph,
        Mj = 1;
      const Yl = {};
      function sE(n) {
        return n in Yl && (delete Yl[n], !0);
      }
      const Aj = {
          setImmediate(n) {
            const t = Mj++;
            return (
              (Yl[t] = !0),
              Ph || (Ph = Promise.resolve()),
              Ph.then(() => sE(t) && n()),
              t
            );
          },
          clearImmediate(n) {
            sE(n);
          },
        },
        {setImmediate: Sj, clearImmediate: Ij} = Aj,
        Ql = {
          setImmediate(...n) {
            const {delegate: t} = Ql;
            return ((null == t ? void 0 : t.setImmediate) || Sj)(...n);
          },
          clearImmediate(n) {
            const {delegate: t} = Ql;
            return ((null == t ? void 0 : t.clearImmediate) || Ij)(n);
          },
          delegate: void 0,
        };
      new (class Fj extends Kf {
        flush(t) {
          this._active = !0;
          const e = this._scheduled;
          this._scheduled = void 0;
          const {actions: i} = this;
          let r;
          t = t || i.shift();
          do {
            if ((r = t.execute(t.state, t.delay))) break;
          } while ((t = i[0]) && t.id === e && i.shift());
          if (((this._active = !1), r)) {
            for (; (t = i[0]) && t.id === e && i.shift(); ) t.unsubscribe();
            throw r;
          }
        }
      })(
        class Tj extends Wf {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          requestAsyncId(t, e, i = 0) {
            return null !== i && i > 0
              ? super.requestAsyncId(t, e, i)
              : (t.actions.push(this),
                t._scheduled ||
                  (t._scheduled = Ql.setImmediate(t.flush.bind(t, void 0))));
          }
          recycleAsyncId(t, e, i = 0) {
            var r;
            if (null != i ? i > 0 : this.delay > 0)
              return super.recycleAsyncId(t, e, i);
            const {actions: s} = t;
            null != e &&
              (null === (r = s[s.length - 1]) || void 0 === r
                ? void 0
                : r.id) !== e &&
              (Ql.clearImmediate(e), (t._scheduled = void 0));
          }
        },
      );
      function oE(n, t = Yf) {
        return (function Rj(n) {
          return Xe((t, e) => {
            let i = !1,
              r = null,
              s = null,
              o = !1;
            const a = () => {
                if ((null == s || s.unsubscribe(), (s = null), i)) {
                  i = !1;
                  const c = r;
                  (r = null), e.next(c);
                }
                o && e.complete();
              },
              l = () => {
                (s = null), o && e.complete();
              };
            t.subscribe(
              Je(
                e,
                c => {
                  (i = !0), (r = c), s || wt(n(c)).subscribe((s = Je(e, a, l)));
                },
                () => {
                  (o = !0), (!i || !s || s.closed) && e.complete();
                },
              ),
            );
          });
        })(() =>
          (function Pj(n = 0, t, e = vV) {
            let i = -1;
            return (
              null != t && (cp(t) ? (e = t) : (i = t)),
              new Me(r => {
                let s = (function kj(n) {
                  return n instanceof Date && !isNaN(n);
                })(n)
                  ? +n - e.now()
                  : n;
                s < 0 && (s = 0);
                let o = 0;
                return e.schedule(function () {
                  r.closed ||
                    (r.next(o++),
                    0 <= i ? this.schedule(void 0, i) : r.complete());
                }, s);
              })
            );
          })(n, t),
        );
      }
      let Lj = (() => {
          class n {
            constructor(e, i, r) {
              (this._ngZone = e),
                (this._platform = i),
                (this._scrolled = new de()),
                (this._globalSubscription = null),
                (this._scrolledCount = 0),
                (this.scrollContainers = new Map()),
                (this._document = r);
            }
            register(e) {
              this.scrollContainers.has(e) ||
                this.scrollContainers.set(
                  e,
                  e.elementScrolled().subscribe(() => this._scrolled.next(e)),
                );
            }
            deregister(e) {
              const i = this.scrollContainers.get(e);
              i && (i.unsubscribe(), this.scrollContainers.delete(e));
            }
            scrolled(e = 20) {
              return this._platform.isBrowser
                ? new Me(i => {
                    this._globalSubscription || this._addGlobalListener();
                    const r =
                      e > 0
                        ? this._scrolled.pipe(oE(e)).subscribe(i)
                        : this._scrolled.subscribe(i);
                    return (
                      this._scrolledCount++,
                      () => {
                        r.unsubscribe(),
                          this._scrolledCount--,
                          this._scrolledCount || this._removeGlobalListener();
                      }
                    );
                  })
                : ji();
            }
            ngOnDestroy() {
              this._removeGlobalListener(),
                this.scrollContainers.forEach((e, i) => this.deregister(i)),
                this._scrolled.complete();
            }
            ancestorScrolled(e, i) {
              const r = this.getAncestorScrollContainers(e);
              return this.scrolled(i).pipe(di(s => !s || r.indexOf(s) > -1));
            }
            getAncestorScrollContainers(e) {
              const i = [];
              return (
                this.scrollContainers.forEach((r, s) => {
                  this._scrollableContainsElement(s, e) && i.push(s);
                }),
                i
              );
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _scrollableContainsElement(e, i) {
              let r = Zr(i),
                s = e.getElementRef().nativeElement;
              do {
                if (r == s) return !0;
              } while ((r = r.parentElement));
              return !1;
            }
            _addGlobalListener() {
              this._globalSubscription = this._ngZone.runOutsideAngular(() =>
                $l(this._getWindow().document, 'scroll').subscribe(() =>
                  this._scrolled.next(),
                ),
              );
            }
            _removeGlobalListener() {
              this._globalSubscription &&
                (this._globalSubscription.unsubscribe(),
                (this._globalSubscription = null));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(se), b(Fn), b(ee, 8));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        Nh = (() => {
          class n {
            constructor(e, i, r) {
              (this._platform = e),
                (this._change = new de()),
                (this._changeListener = s => {
                  this._change.next(s);
                }),
                (this._document = r),
                i.runOutsideAngular(() => {
                  if (e.isBrowser) {
                    const s = this._getWindow();
                    s.addEventListener('resize', this._changeListener),
                      s.addEventListener(
                        'orientationchange',
                        this._changeListener,
                      );
                  }
                  this.change().subscribe(() => (this._viewportSize = null));
                });
            }
            ngOnDestroy() {
              if (this._platform.isBrowser) {
                const e = this._getWindow();
                e.removeEventListener('resize', this._changeListener),
                  e.removeEventListener(
                    'orientationchange',
                    this._changeListener,
                  );
              }
              this._change.complete();
            }
            getViewportSize() {
              this._viewportSize || this._updateViewportSize();
              const e = {
                width: this._viewportSize.width,
                height: this._viewportSize.height,
              };
              return this._platform.isBrowser || (this._viewportSize = null), e;
            }
            getViewportRect() {
              const e = this.getViewportScrollPosition(),
                {width: i, height: r} = this.getViewportSize();
              return {
                top: e.top,
                left: e.left,
                bottom: e.top + r,
                right: e.left + i,
                height: r,
                width: i,
              };
            }
            getViewportScrollPosition() {
              if (!this._platform.isBrowser) return {top: 0, left: 0};
              const e = this._document,
                i = this._getWindow(),
                r = e.documentElement,
                s = r.getBoundingClientRect();
              return {
                top:
                  -s.top || e.body.scrollTop || i.scrollY || r.scrollTop || 0,
                left:
                  -s.left ||
                  e.body.scrollLeft ||
                  i.scrollX ||
                  r.scrollLeft ||
                  0,
              };
            }
            change(e = 20) {
              return e > 0 ? this._change.pipe(oE(e)) : this._change;
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _updateViewportSize() {
              const e = this._getWindow();
              this._viewportSize = this._platform.isBrowser
                ? {width: e.innerWidth, height: e.innerHeight}
                : {width: 0, height: 0};
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Fn), b(se), b(ee, 8));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        Lh = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({})),
            n
          );
        })(),
        aE = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[Jr, Lh], Jr, Lh]})),
            n
          );
        })();
      class Vh {
        attach(t) {
          return (this._attachedHost = t), t.attach(this);
        }
        detach() {
          let t = this._attachedHost;
          null != t && ((this._attachedHost = null), t.detach());
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class Bj extends Vh {
        constructor(t, e, i, r) {
          super(),
            (this.component = t),
            (this.viewContainerRef = e),
            (this.injector = i),
            (this.componentFactoryResolver = r);
        }
      }
      class lE extends Vh {
        constructor(t, e, i) {
          super(),
            (this.templateRef = t),
            (this.viewContainerRef = e),
            (this.context = i);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(t, e = this.context) {
          return (this.context = e), super.attach(t);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class Hj extends Vh {
        constructor(t) {
          super(), (this.element = t instanceof j ? t.nativeElement : t);
        }
      }
      class Gj extends class jj {
        constructor() {
          (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(t) {
          return t instanceof Bj
            ? ((this._attachedPortal = t), this.attachComponentPortal(t))
            : t instanceof lE
            ? ((this._attachedPortal = t), this.attachTemplatePortal(t))
            : this.attachDomPortal && t instanceof Hj
            ? ((this._attachedPortal = t), this.attachDomPortal(t))
            : void 0;
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      } {
        constructor(t, e, i, r, s) {
          super(),
            (this.outletElement = t),
            (this._componentFactoryResolver = e),
            (this._appRef = i),
            (this._defaultInjector = r),
            (this.attachDomPortal = o => {
              const a = o.element,
                l = this._document.createComment('dom-portal');
              a.parentNode.insertBefore(l, a),
                this.outletElement.appendChild(a),
                (this._attachedPortal = o),
                super.setDisposeFn(() => {
                  l.parentNode && l.parentNode.replaceChild(a, l);
                });
            }),
            (this._document = s);
        }
        attachComponentPortal(t) {
          const i = (
            t.componentFactoryResolver || this._componentFactoryResolver
          ).resolveComponentFactory(t.component);
          let r;
          return (
            t.viewContainerRef
              ? ((r = t.viewContainerRef.createComponent(
                  i,
                  t.viewContainerRef.length,
                  t.injector || t.viewContainerRef.injector,
                )),
                this.setDisposeFn(() => r.destroy()))
              : ((r = i.create(t.injector || this._defaultInjector || nt.NULL)),
                this._appRef.attachView(r.hostView),
                this.setDisposeFn(() => {
                  this._appRef.viewCount > 0 &&
                    this._appRef.detachView(r.hostView),
                    r.destroy();
                })),
            this.outletElement.appendChild(this._getComponentRootNode(r)),
            (this._attachedPortal = t),
            r
          );
        }
        attachTemplatePortal(t) {
          let e = t.viewContainerRef,
            i = e.createEmbeddedView(t.templateRef, t.context);
          return (
            i.rootNodes.forEach(r => this.outletElement.appendChild(r)),
            i.detectChanges(),
            this.setDisposeFn(() => {
              let r = e.indexOf(i);
              -1 !== r && e.remove(r);
            }),
            (this._attachedPortal = t),
            i
          );
        }
        dispose() {
          super.dispose(), this.outletElement.remove();
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      let $j = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({})),
          n
        );
      })();
      const cE = EV();
      class zj {
        constructor(t, e) {
          (this._viewportRuler = t),
            (this._previousHTMLStyles = {top: '', left: ''}),
            (this._isEnabled = !1),
            (this._document = e);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const t = this._document.documentElement;
            (this._previousScrollPosition =
              this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = t.style.left || ''),
              (this._previousHTMLStyles.top = t.style.top || ''),
              (t.style.left = Ue(-this._previousScrollPosition.left)),
              (t.style.top = Ue(-this._previousScrollPosition.top)),
              t.classList.add('cdk-global-scrollblock'),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const t = this._document.documentElement,
              i = t.style,
              r = this._document.body.style,
              s = i.scrollBehavior || '',
              o = r.scrollBehavior || '';
            (this._isEnabled = !1),
              (i.left = this._previousHTMLStyles.left),
              (i.top = this._previousHTMLStyles.top),
              t.classList.remove('cdk-global-scrollblock'),
              cE && (i.scrollBehavior = r.scrollBehavior = 'auto'),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top,
              ),
              cE && ((i.scrollBehavior = s), (r.scrollBehavior = o));
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              'cdk-global-scrollblock',
            ) ||
            this._isEnabled
          )
            return !1;
          const e = this._document.body,
            i = this._viewportRuler.getViewportSize();
          return e.scrollHeight > i.height || e.scrollWidth > i.width;
        }
      }
      class Wj {
        constructor(t, e, i, r) {
          (this._scrollDispatcher = t),
            (this._ngZone = e),
            (this._viewportRuler = i),
            (this._config = r),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(t) {
          this._overlayRef = t;
        }
        enable() {
          if (this._scrollSubscription) return;
          const t = this._scrollDispatcher.scrolled(0);
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition =
                this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = t.subscribe(() => {
                const e = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(e - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = t.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class uE {
        enable() {}
        disable() {}
        attach() {}
      }
      function Bh(n, t) {
        return t.some(
          e =>
            n.bottom < e.top ||
            n.top > e.bottom ||
            n.right < e.left ||
            n.left > e.right,
        );
      }
      function dE(n, t) {
        return t.some(
          e =>
            n.top < e.top ||
            n.bottom > e.bottom ||
            n.left < e.left ||
            n.right > e.right,
        );
      }
      class qj {
        constructor(t, e, i, r) {
          (this._scrollDispatcher = t),
            (this._viewportRuler = e),
            (this._ngZone = i),
            (this._config = r),
            (this._scrollSubscription = null);
        }
        attach(t) {
          this._overlayRef = t;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const e =
                      this._overlayRef.overlayElement.getBoundingClientRect(),
                    {width: i, height: r} =
                      this._viewportRuler.getViewportSize();
                  Bh(e, [
                    {width: i, height: r, bottom: r, right: i, top: 0, left: 0},
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let Kj = (() => {
        class n {
          constructor(e, i, r, s) {
            (this._scrollDispatcher = e),
              (this._viewportRuler = i),
              (this._ngZone = r),
              (this.noop = () => new uE()),
              (this.close = o =>
                new Wj(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  o,
                )),
              (this.block = () => new zj(this._viewportRuler, this._document)),
              (this.reposition = o =>
                new qj(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  o,
                )),
              (this._document = s);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(Lj), b(Nh), b(se), b(ee));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      class fE {
        constructor(t) {
          if (
            ((this.scrollStrategy = new uE()),
            (this.panelClass = ''),
            (this.hasBackdrop = !1),
            (this.backdropClass = 'cdk-overlay-dark-backdrop'),
            (this.disposeOnNavigation = !1),
            t)
          ) {
            const e = Object.keys(t);
            for (const i of e) void 0 !== t[i] && (this[i] = t[i]);
          }
        }
      }
      class Yj {
        constructor(t, e) {
          (this.connectionPair = t), (this.scrollableViewProperties = e);
        }
      }
      class Qj {
        constructor(t, e, i, r, s, o, a, l, c) {
          (this._portalOutlet = t),
            (this._host = e),
            (this._pane = i),
            (this._config = r),
            (this._ngZone = s),
            (this._keyboardDispatcher = o),
            (this._document = a),
            (this._location = l),
            (this._outsideClickDispatcher = c),
            (this._backdropElement = null),
            (this._backdropClick = new de()),
            (this._attachments = new de()),
            (this._detachments = new de()),
            (this._locationChanges = Le.EMPTY),
            (this._backdropClickHandler = u => this._backdropClick.next(u)),
            (this._backdropTransitionendHandler = u => {
              this._disposeBackdrop(u.target);
            }),
            (this._keydownEvents = new de()),
            (this._outsidePointerEvents = new de()),
            r.scrollStrategy &&
              ((this._scrollStrategy = r.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = r.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(t) {
          !this._host.parentElement &&
            this._previousHostParent &&
            this._previousHostParent.appendChild(this._host);
          const e = this._portalOutlet.attach(t);
          return (
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe(rs(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose(),
              )),
            this._outsideClickDispatcher.add(this),
            e
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const t = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher.remove(this),
            t
          );
        }
        dispose() {
          var t;
          const e = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this._disposeBackdrop(this._backdropElement),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher.remove(this),
            null === (t = this._host) || void 0 === t || t.remove(),
            (this._previousHostParent = this._pane = this._host = null),
            e && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(t) {
          t !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = t),
            this.hasAttached() && (t.attach(this), this.updatePosition()));
        }
        updateSize(t) {
          (this._config = Object.assign(Object.assign({}, this._config), t)),
            this._updateElementSize();
        }
        setDirection(t) {
          (this._config = Object.assign(Object.assign({}, this._config), {
            direction: t,
          })),
            this._updateElementDirection();
        }
        addPanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !0);
        }
        removePanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !1);
        }
        getDirection() {
          const t = this._config.direction;
          return t ? ('string' == typeof t ? t : t.value) : 'ltr';
        }
        updateScrollStrategy(t) {
          t !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = t),
            this.hasAttached() && (t.attach(this), t.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const t = this._pane.style;
          (t.width = Ue(this._config.width)),
            (t.height = Ue(this._config.height)),
            (t.minWidth = Ue(this._config.minWidth)),
            (t.minHeight = Ue(this._config.minHeight)),
            (t.maxWidth = Ue(this._config.maxWidth)),
            (t.maxHeight = Ue(this._config.maxHeight));
        }
        _togglePointerEvents(t) {
          this._pane.style.pointerEvents = t ? '' : 'none';
        }
        _attachBackdrop() {
          const t = 'cdk-overlay-backdrop-showing';
          (this._backdropElement = this._document.createElement('div')),
            this._backdropElement.classList.add('cdk-overlay-backdrop'),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0,
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host,
            ),
            this._backdropElement.addEventListener(
              'click',
              this._backdropClickHandler,
            ),
            'undefined' != typeof requestAnimationFrame
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(t);
                  });
                })
              : this._backdropElement.classList.add(t);
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          const t = this._backdropElement;
          !t ||
            (t.classList.remove('cdk-overlay-backdrop-showing'),
            this._ngZone.runOutsideAngular(() => {
              t.addEventListener(
                'transitionend',
                this._backdropTransitionendHandler,
              );
            }),
            (t.style.pointerEvents = 'none'),
            (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
              setTimeout(() => {
                this._disposeBackdrop(t);
              }, 500),
            )));
        }
        _toggleClasses(t, e, i) {
          const r = nC(e || []).filter(s => !!s);
          r.length && (i ? t.classList.add(...r) : t.classList.remove(...r));
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const t = this._ngZone.onStable
              .pipe(Qe(kn(this._attachments, this._detachments)))
              .subscribe(() => {
                (!this._pane ||
                  !this._host ||
                  0 === this._pane.children.length) &&
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1,
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._host.remove()),
                  t.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const t = this._scrollStrategy;
          t && (t.disable(), t.detach && t.detach());
        }
        _disposeBackdrop(t) {
          t &&
            (t.removeEventListener('click', this._backdropClickHandler),
            t.removeEventListener(
              'transitionend',
              this._backdropTransitionendHandler,
            ),
            t.remove(),
            this._backdropElement === t && (this._backdropElement = null)),
            this._backdropTimeout &&
              (clearTimeout(this._backdropTimeout),
              (this._backdropTimeout = void 0));
        }
      }
      let hE = (() => {
        class n {
          constructor(e, i) {
            (this._platform = i), (this._document = e);
          }
          ngOnDestroy() {
            var e;
            null === (e = this._containerElement) || void 0 === e || e.remove();
          }
          getContainerElement() {
            return (
              this._containerElement || this._createContainer(),
              this._containerElement
            );
          }
          _createContainer() {
            const e = 'cdk-overlay-container';
            if (this._platform.isBrowser || Jf()) {
              const r = this._document.querySelectorAll(
                `.${e}[platform="server"], .${e}[platform="test"]`,
              );
              for (let s = 0; s < r.length; s++) r[s].remove();
            }
            const i = this._document.createElement('div');
            i.classList.add(e),
              Jf()
                ? i.setAttribute('platform', 'test')
                : this._platform.isBrowser ||
                  i.setAttribute('platform', 'server'),
              this._document.body.appendChild(i),
              (this._containerElement = i);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(ee), b(Fn));
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const pE = 'cdk-overlay-connected-position-bounding-box',
        Zj = /([A-Za-z%]+)$/;
      class Xj {
        constructor(t, e, i, r, s) {
          (this._viewportRuler = e),
            (this._document = i),
            (this._platform = r),
            (this._overlayContainer = s),
            (this._lastBoundingBoxSize = {width: 0, height: 0}),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new de()),
            (this._resizeSubscription = Le.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(t);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(t) {
          this._validatePositions(),
            t.hostElement.classList.add(pE),
            (this._overlayRef = t),
            (this._boundingBox = t.hostElement),
            (this._pane = t.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect()),
            (this._containerRect = this._overlayContainer
              .getContainerElement()
              .getBoundingClientRect());
          const t = this._originRect,
            e = this._overlayRect,
            i = this._viewportRect,
            r = this._containerRect,
            s = [];
          let o;
          for (let a of this._preferredPositions) {
            let l = this._getOriginPoint(t, r, a),
              c = this._getOverlayPoint(l, e, a),
              u = this._getOverlayFit(c, e, i, a);
            if (u.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(a, l);
            this._canFitWithFlexibleDimensions(u, c, i)
              ? s.push({
                  position: a,
                  origin: l,
                  overlayRect: e,
                  boundingBoxRect: this._calculateBoundingBoxRect(l, a),
                })
              : (!o || o.overlayFit.visibleArea < u.visibleArea) &&
                (o = {
                  overlayFit: u,
                  overlayPoint: c,
                  originPoint: l,
                  position: a,
                  overlayRect: e,
                });
          }
          if (s.length) {
            let a = null,
              l = -1;
            for (const c of s) {
              const u =
                c.boundingBoxRect.width *
                c.boundingBoxRect.height *
                (c.position.weight || 1);
              u > l && ((l = u), (a = c));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(a.position, a.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(o.position, o.originPoint)
            );
          this._applyPosition(o.position, o.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              Zi(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(pE),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          const t = this._lastPosition;
          if (t) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect()),
              (this._containerRect = this._overlayContainer
                .getContainerElement()
                .getBoundingClientRect());
            const e = this._getOriginPoint(
              this._originRect,
              this._containerRect,
              t,
            );
            this._applyPosition(t, e);
          } else this.apply();
        }
        withScrollableContainers(t) {
          return (this._scrollables = t), this;
        }
        withPositions(t) {
          return (
            (this._preferredPositions = t),
            -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(t) {
          return (this._viewportMargin = t), this;
        }
        withFlexibleDimensions(t = !0) {
          return (this._hasFlexibleDimensions = t), this;
        }
        withGrowAfterOpen(t = !0) {
          return (this._growAfterOpen = t), this;
        }
        withPush(t = !0) {
          return (this._canPush = t), this;
        }
        withLockedPosition(t = !0) {
          return (this._positionLocked = t), this;
        }
        setOrigin(t) {
          return (this._origin = t), this;
        }
        withDefaultOffsetX(t) {
          return (this._offsetX = t), this;
        }
        withDefaultOffsetY(t) {
          return (this._offsetY = t), this;
        }
        withTransformOriginOn(t) {
          return (this._transformOriginSelector = t), this;
        }
        _getOriginPoint(t, e, i) {
          let r, s;
          if ('center' == i.originX) r = t.left + t.width / 2;
          else {
            const o = this._isRtl() ? t.right : t.left,
              a = this._isRtl() ? t.left : t.right;
            r = 'start' == i.originX ? o : a;
          }
          return (
            e.left < 0 && (r -= e.left),
            (s =
              'center' == i.originY
                ? t.top + t.height / 2
                : 'top' == i.originY
                ? t.top
                : t.bottom),
            e.top < 0 && (s -= e.top),
            {x: r, y: s}
          );
        }
        _getOverlayPoint(t, e, i) {
          let r, s;
          return (
            (r =
              'center' == i.overlayX
                ? -e.width / 2
                : 'start' === i.overlayX
                ? this._isRtl()
                  ? -e.width
                  : 0
                : this._isRtl()
                ? 0
                : -e.width),
            (s =
              'center' == i.overlayY
                ? -e.height / 2
                : 'top' == i.overlayY
                ? 0
                : -e.height),
            {x: t.x + r, y: t.y + s}
          );
        }
        _getOverlayFit(t, e, i, r) {
          const s = mE(e);
          let {x: o, y: a} = t,
            l = this._getOffset(r, 'x'),
            c = this._getOffset(r, 'y');
          l && (o += l), c && (a += c);
          let f = 0 - a,
            h = a + s.height - i.height,
            g = this._subtractOverflows(s.width, 0 - o, o + s.width - i.width),
            m = this._subtractOverflows(s.height, f, h),
            v = g * m;
          return {
            visibleArea: v,
            isCompletelyWithinViewport: s.width * s.height === v,
            fitsInViewportVertically: m === s.height,
            fitsInViewportHorizontally: g == s.width,
          };
        }
        _canFitWithFlexibleDimensions(t, e, i) {
          if (this._hasFlexibleDimensions) {
            const r = i.bottom - e.y,
              s = i.right - e.x,
              o = gE(this._overlayRef.getConfig().minHeight),
              a = gE(this._overlayRef.getConfig().minWidth),
              c = t.fitsInViewportHorizontally || (null != a && a <= s);
            return (t.fitsInViewportVertically || (null != o && o <= r)) && c;
          }
          return !1;
        }
        _pushOverlayOnScreen(t, e, i) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: t.x + this._previousPushAmount.x,
              y: t.y + this._previousPushAmount.y,
            };
          const r = mE(e),
            s = this._viewportRect,
            o = Math.max(t.x + r.width - s.width, 0),
            a = Math.max(t.y + r.height - s.height, 0),
            l = Math.max(s.top - i.top - t.y, 0),
            c = Math.max(s.left - i.left - t.x, 0);
          let u = 0,
            d = 0;
          return (
            (u =
              r.width <= s.width
                ? c || -o
                : t.x < this._viewportMargin
                ? s.left - i.left - t.x
                : 0),
            (d =
              r.height <= s.height
                ? l || -a
                : t.y < this._viewportMargin
                ? s.top - i.top - t.y
                : 0),
            (this._previousPushAmount = {x: u, y: d}),
            {x: t.x + u, y: t.y + d}
          );
        }
        _applyPosition(t, e) {
          if (
            (this._setTransformOrigin(t),
            this._setOverlayElementStyles(e, t),
            this._setBoundingBoxStyles(e, t),
            t.panelClass && this._addPanelClasses(t.panelClass),
            (this._lastPosition = t),
            this._positionChanges.observers.length)
          ) {
            const i = this._getScrollVisibility(),
              r = new Yj(t, i);
            this._positionChanges.next(r);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(t) {
          if (!this._transformOriginSelector) return;
          const e = this._boundingBox.querySelectorAll(
            this._transformOriginSelector,
          );
          let i,
            r = t.overlayY;
          i =
            'center' === t.overlayX
              ? 'center'
              : this._isRtl()
              ? 'start' === t.overlayX
                ? 'right'
                : 'left'
              : 'start' === t.overlayX
              ? 'left'
              : 'right';
          for (let s = 0; s < e.length; s++)
            e[s].style.transformOrigin = `${i} ${r}`;
        }
        _calculateBoundingBoxRect(t, e) {
          const i = this._viewportRect,
            r = this._isRtl();
          let s, o, a, u, d, f;
          if ('top' === e.overlayY)
            (o = t.y), (s = i.height - o + this._viewportMargin);
          else if ('bottom' === e.overlayY)
            (a = i.height - t.y + 2 * this._viewportMargin),
              (s = i.height - a + this._viewportMargin);
          else {
            const h = Math.min(i.bottom - t.y + i.top, t.y),
              g = this._lastBoundingBoxSize.height;
            (s = 2 * h),
              (o = t.y - h),
              s > g &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (o = t.y - g / 2);
          }
          if (('end' === e.overlayX && !r) || ('start' === e.overlayX && r))
            (f = i.width - t.x + this._viewportMargin),
              (u = t.x - this._viewportMargin);
          else if (
            ('start' === e.overlayX && !r) ||
            ('end' === e.overlayX && r)
          )
            (d = t.x), (u = i.right - t.x);
          else {
            const h = Math.min(i.right - t.x + i.left, t.x),
              g = this._lastBoundingBoxSize.width;
            (u = 2 * h),
              (d = t.x - h),
              u > g &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (d = t.x - g / 2);
          }
          return {top: o, left: d, bottom: a, right: f, width: u, height: s};
        }
        _setBoundingBoxStyles(t, e) {
          const i = this._calculateBoundingBoxRect(t, e);
          !this._isInitialRender &&
            !this._growAfterOpen &&
            ((i.height = Math.min(i.height, this._lastBoundingBoxSize.height)),
            (i.width = Math.min(i.width, this._lastBoundingBoxSize.width)));
          const r = {};
          if (this._hasExactPosition())
            (r.top = r.left = '0'),
              (r.bottom = r.right = r.maxHeight = r.maxWidth = ''),
              (r.width = r.height = '100%');
          else {
            const s = this._overlayRef.getConfig().maxHeight,
              o = this._overlayRef.getConfig().maxWidth;
            (r.height = Ue(i.height)),
              (r.top = Ue(i.top)),
              (r.bottom = Ue(i.bottom)),
              (r.width = Ue(i.width)),
              (r.left = Ue(i.left)),
              (r.right = Ue(i.right)),
              (r.alignItems =
                'center' === e.overlayX
                  ? 'center'
                  : 'end' === e.overlayX
                  ? 'flex-end'
                  : 'flex-start'),
              (r.justifyContent =
                'center' === e.overlayY
                  ? 'center'
                  : 'bottom' === e.overlayY
                  ? 'flex-end'
                  : 'flex-start'),
              s && (r.maxHeight = Ue(s)),
              o && (r.maxWidth = Ue(o));
          }
          (this._lastBoundingBoxSize = i), Zi(this._boundingBox.style, r);
        }
        _resetBoundingBoxStyles() {
          Zi(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
          });
        }
        _resetOverlayElementStyles() {
          Zi(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
          });
        }
        _setOverlayElementStyles(t, e) {
          const i = {},
            r = this._hasExactPosition(),
            s = this._hasFlexibleDimensions,
            o = this._overlayRef.getConfig();
          if (r) {
            const u = this._viewportRuler.getViewportScrollPosition();
            Zi(i, this._getExactOverlayY(e, t, u)),
              Zi(i, this._getExactOverlayX(e, t, u));
          } else i.position = 'static';
          let a = '',
            l = this._getOffset(e, 'x'),
            c = this._getOffset(e, 'y');
          l && (a += `translateX(${l}px) `),
            c && (a += `translateY(${c}px)`),
            (i.transform = a.trim()),
            o.maxHeight &&
              (r ? (i.maxHeight = Ue(o.maxHeight)) : s && (i.maxHeight = '')),
            o.maxWidth &&
              (r ? (i.maxWidth = Ue(o.maxWidth)) : s && (i.maxWidth = '')),
            Zi(this._pane.style, i);
        }
        _getExactOverlayY(t, e, i) {
          let r = {top: '', bottom: ''},
            s = this._getOverlayPoint(e, this._overlayRect, t);
          return (
            this._isPushed &&
              (s = this._pushOverlayOnScreen(s, this._overlayRect, i)),
            'bottom' === t.overlayY
              ? (r.bottom =
                  this._document.documentElement.clientHeight -
                  (s.y + this._overlayRect.height) +
                  'px')
              : (r.top = Ue(s.y)),
            r
          );
        }
        _getExactOverlayX(t, e, i) {
          let o,
            r = {left: '', right: ''},
            s = this._getOverlayPoint(e, this._overlayRect, t);
          return (
            this._isPushed &&
              (s = this._pushOverlayOnScreen(s, this._overlayRect, i)),
            (o = this._isRtl()
              ? 'end' === t.overlayX
                ? 'left'
                : 'right'
              : 'end' === t.overlayX
              ? 'right'
              : 'left'),
            'right' === o
              ? (r.right =
                  this._document.documentElement.clientWidth -
                  (s.x + this._overlayRect.width) +
                  'px')
              : (r.left = Ue(s.x)),
            r
          );
        }
        _getScrollVisibility() {
          const t = this._getOriginRect(),
            e = this._pane.getBoundingClientRect(),
            i = this._scrollables.map(r =>
              r.getElementRef().nativeElement.getBoundingClientRect(),
            );
          return {
            isOriginClipped: dE(t, i),
            isOriginOutsideView: Bh(t, i),
            isOverlayClipped: dE(e, i),
            isOverlayOutsideView: Bh(e, i),
          };
        }
        _subtractOverflows(t, ...e) {
          return e.reduce((i, r) => i - Math.max(r, 0), t);
        }
        _getNarrowedViewportRect() {
          const t = this._document.documentElement.clientWidth,
            e = this._document.documentElement.clientHeight,
            i = this._viewportRuler.getViewportScrollPosition();
          return {
            top: i.top + this._viewportMargin,
            left: i.left + this._viewportMargin,
            right: i.left + t - this._viewportMargin,
            bottom: i.top + e - this._viewportMargin,
            width: t - 2 * this._viewportMargin,
            height: e - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return 'rtl' === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(t, e) {
          return 'x' === e
            ? null == t.offsetX
              ? this._offsetX
              : t.offsetX
            : null == t.offsetY
            ? this._offsetY
            : t.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(t) {
          this._pane &&
            nC(t).forEach(e => {
              '' !== e &&
                -1 === this._appliedPanelClasses.indexOf(e) &&
                (this._appliedPanelClasses.push(e),
                this._pane.classList.add(e));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach(t => {
              this._pane.classList.remove(t);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const t = this._origin;
          if (t instanceof j) return t.nativeElement.getBoundingClientRect();
          if (t instanceof Element) return t.getBoundingClientRect();
          const e = t.width || 0,
            i = t.height || 0;
          return {
            top: t.y,
            bottom: t.y + i,
            left: t.x,
            right: t.x + e,
            height: i,
            width: e,
          };
        }
      }
      function Zi(n, t) {
        for (let e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
        return n;
      }
      function gE(n) {
        if ('number' != typeof n && null != n) {
          const [t, e] = n.split(Zj);
          return e && 'px' !== e ? null : parseFloat(t);
        }
        return n || null;
      }
      function mE(n) {
        return {
          top: Math.floor(n.top),
          right: Math.floor(n.right),
          bottom: Math.floor(n.bottom),
          left: Math.floor(n.left),
          width: Math.floor(n.width),
          height: Math.floor(n.height),
        };
      }
      const _E = 'cdk-global-overlay-wrapper';
      class Jj {
        constructor() {
          (this._cssPosition = 'static'),
            (this._topOffset = ''),
            (this._bottomOffset = ''),
            (this._leftOffset = ''),
            (this._rightOffset = ''),
            (this._alignItems = ''),
            (this._justifyContent = ''),
            (this._width = ''),
            (this._height = '');
        }
        attach(t) {
          const e = t.getConfig();
          (this._overlayRef = t),
            this._width && !e.width && t.updateSize({width: this._width}),
            this._height && !e.height && t.updateSize({height: this._height}),
            t.hostElement.classList.add(_E),
            (this._isDisposed = !1);
        }
        top(t = '') {
          return (
            (this._bottomOffset = ''),
            (this._topOffset = t),
            (this._alignItems = 'flex-start'),
            this
          );
        }
        left(t = '') {
          return (
            (this._rightOffset = ''),
            (this._leftOffset = t),
            (this._justifyContent = 'flex-start'),
            this
          );
        }
        bottom(t = '') {
          return (
            (this._topOffset = ''),
            (this._bottomOffset = t),
            (this._alignItems = 'flex-end'),
            this
          );
        }
        right(t = '') {
          return (
            (this._leftOffset = ''),
            (this._rightOffset = t),
            (this._justifyContent = 'flex-end'),
            this
          );
        }
        width(t = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({width: t})
              : (this._width = t),
            this
          );
        }
        height(t = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({height: t})
              : (this._height = t),
            this
          );
        }
        centerHorizontally(t = '') {
          return this.left(t), (this._justifyContent = 'center'), this;
        }
        centerVertically(t = '') {
          return this.top(t), (this._alignItems = 'center'), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement.style,
            i = this._overlayRef.getConfig(),
            {width: r, height: s, maxWidth: o, maxHeight: a} = i,
            l = !(
              ('100%' !== r && '100vw' !== r) ||
              (o && '100%' !== o && '100vw' !== o)
            ),
            c = !(
              ('100%' !== s && '100vh' !== s) ||
              (a && '100%' !== a && '100vh' !== a)
            );
          (t.position = this._cssPosition),
            (t.marginLeft = l ? '0' : this._leftOffset),
            (t.marginTop = c ? '0' : this._topOffset),
            (t.marginBottom = this._bottomOffset),
            (t.marginRight = this._rightOffset),
            l
              ? (e.justifyContent = 'flex-start')
              : 'center' === this._justifyContent
              ? (e.justifyContent = 'center')
              : 'rtl' === this._overlayRef.getConfig().direction
              ? 'flex-start' === this._justifyContent
                ? (e.justifyContent = 'flex-end')
                : 'flex-end' === this._justifyContent &&
                  (e.justifyContent = 'flex-start')
              : (e.justifyContent = this._justifyContent),
            (e.alignItems = c ? 'flex-start' : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement,
            i = e.style;
          e.classList.remove(_E),
            (i.justifyContent =
              i.alignItems =
              t.marginTop =
              t.marginBottom =
              t.marginLeft =
              t.marginRight =
              t.position =
                ''),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let eG = (() => {
          class n {
            constructor(e, i, r, s) {
              (this._viewportRuler = e),
                (this._document = i),
                (this._platform = r),
                (this._overlayContainer = s);
            }
            global() {
              return new Jj();
            }
            flexibleConnectedTo(e) {
              return new Xj(
                e,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer,
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(Nh), b(ee), b(Fn), b(hE));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        yE = (() => {
          class n {
            constructor(e) {
              (this._attachedOverlays = []), (this._document = e);
            }
            ngOnDestroy() {
              this.detach();
            }
            add(e) {
              this.remove(e), this._attachedOverlays.push(e);
            }
            remove(e) {
              const i = this._attachedOverlays.indexOf(e);
              i > -1 && this._attachedOverlays.splice(i, 1),
                0 === this._attachedOverlays.length && this.detach();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        tG = (() => {
          class n extends yE {
            constructor(e, i) {
              super(e),
                (this._ngZone = i),
                (this._keydownListener = r => {
                  const s = this._attachedOverlays;
                  for (let o = s.length - 1; o > -1; o--)
                    if (s[o]._keydownEvents.observers.length > 0) {
                      const a = s[o]._keydownEvents;
                      this._ngZone
                        ? this._ngZone.run(() => a.next(r))
                        : a.next(r);
                      break;
                    }
                });
            }
            add(e) {
              super.add(e),
                this._isAttached ||
                  (this._ngZone
                    ? this._ngZone.runOutsideAngular(() =>
                        this._document.body.addEventListener(
                          'keydown',
                          this._keydownListener,
                        ),
                      )
                    : this._document.body.addEventListener(
                        'keydown',
                        this._keydownListener,
                      ),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  'keydown',
                  this._keydownListener,
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee), b(se, 8));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        nG = (() => {
          class n extends yE {
            constructor(e, i, r) {
              super(e),
                (this._platform = i),
                (this._ngZone = r),
                (this._cursorStyleIsSet = !1),
                (this._pointerDownListener = s => {
                  this._pointerDownEventTarget = Nw(s);
                }),
                (this._clickListener = s => {
                  const o = Nw(s),
                    a =
                      'click' === s.type && this._pointerDownEventTarget
                        ? this._pointerDownEventTarget
                        : o;
                  this._pointerDownEventTarget = null;
                  const l = this._attachedOverlays.slice();
                  for (let c = l.length - 1; c > -1; c--) {
                    const u = l[c];
                    if (
                      u._outsidePointerEvents.observers.length < 1 ||
                      !u.hasAttached()
                    )
                      continue;
                    if (
                      u.overlayElement.contains(o) ||
                      u.overlayElement.contains(a)
                    )
                      break;
                    const d = u._outsidePointerEvents;
                    this._ngZone
                      ? this._ngZone.run(() => d.next(s))
                      : d.next(s);
                  }
                });
            }
            add(e) {
              if ((super.add(e), !this._isAttached)) {
                const i = this._document.body;
                this._ngZone
                  ? this._ngZone.runOutsideAngular(() =>
                      this._addEventListeners(i),
                    )
                  : this._addEventListeners(i),
                  this._platform.IOS &&
                    !this._cursorStyleIsSet &&
                    ((this._cursorOriginalValue = i.style.cursor),
                    (i.style.cursor = 'pointer'),
                    (this._cursorStyleIsSet = !0)),
                  (this._isAttached = !0);
              }
            }
            detach() {
              if (this._isAttached) {
                const e = this._document.body;
                e.removeEventListener(
                  'pointerdown',
                  this._pointerDownListener,
                  !0,
                ),
                  e.removeEventListener('click', this._clickListener, !0),
                  e.removeEventListener('auxclick', this._clickListener, !0),
                  e.removeEventListener('contextmenu', this._clickListener, !0),
                  this._platform.IOS &&
                    this._cursorStyleIsSet &&
                    ((e.style.cursor = this._cursorOriginalValue),
                    (this._cursorStyleIsSet = !1)),
                  (this._isAttached = !1);
              }
            }
            _addEventListeners(e) {
              e.addEventListener('pointerdown', this._pointerDownListener, !0),
                e.addEventListener('click', this._clickListener, !0),
                e.addEventListener('auxclick', this._clickListener, !0),
                e.addEventListener('contextmenu', this._clickListener, !0);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(b(ee), b(Fn), b(se, 8));
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
            n
          );
        })(),
        iG = 0,
        Zl = (() => {
          class n {
            constructor(e, i, r, s, o, a, l, c, u, d, f) {
              (this.scrollStrategies = e),
                (this._overlayContainer = i),
                (this._componentFactoryResolver = r),
                (this._positionBuilder = s),
                (this._keyboardDispatcher = o),
                (this._injector = a),
                (this._ngZone = l),
                (this._document = c),
                (this._directionality = u),
                (this._location = d),
                (this._outsideClickDispatcher = f);
            }
            create(e) {
              const i = this._createHostElement(),
                r = this._createPaneElement(i),
                s = this._createPortalOutlet(r),
                o = new fE(e);
              return (
                (o.direction = o.direction || this._directionality.value),
                new Qj(
                  s,
                  i,
                  r,
                  o,
                  this._ngZone,
                  this._keyboardDispatcher,
                  this._document,
                  this._location,
                  this._outsideClickDispatcher,
                )
              );
            }
            position() {
              return this._positionBuilder;
            }
            _createPaneElement(e) {
              const i = this._document.createElement('div');
              return (
                (i.id = 'cdk-overlay-' + iG++),
                i.classList.add('cdk-overlay-pane'),
                e.appendChild(i),
                i
              );
            }
            _createHostElement() {
              const e = this._document.createElement('div');
              return (
                this._overlayContainer.getContainerElement().appendChild(e), e
              );
            }
            _createPortalOutlet(e) {
              return (
                this._appRef || (this._appRef = this._injector.get(Va)),
                new Gj(
                  e,
                  this._componentFactoryResolver,
                  this._appRef,
                  this._injector,
                  this._document,
                )
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                b(Kj),
                b(hE),
                b(Pi),
                b(eG),
                b(tG),
                b(nt),
                b(se),
                b(ee),
                b(Xr),
                b(Wv),
                b(nG),
              );
            }),
            (n.ɵprov = E({token: n, factory: n.ɵfac})),
            n
          );
        })();
      const rG = [
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom'},
          {originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top'},
        ],
        vE = new I('cdk-connected-overlay-scroll-strategy');
      let bE = (() => {
          class n {
            constructor(e) {
              this.elementRef = e;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(j));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [
                ['', 'cdk-overlay-origin', ''],
                ['', 'overlay-origin', ''],
                ['', 'cdkOverlayOrigin', ''],
              ],
              exportAs: ['cdkOverlayOrigin'],
            })),
            n
          );
        })(),
        CE = (() => {
          class n {
            constructor(e, i, r, s, o) {
              (this._overlay = e),
                (this._dir = o),
                (this._hasBackdrop = !1),
                (this._lockPosition = !1),
                (this._growAfterOpen = !1),
                (this._flexibleDimensions = !1),
                (this._push = !1),
                (this._backdropSubscription = Le.EMPTY),
                (this._attachSubscription = Le.EMPTY),
                (this._detachSubscription = Le.EMPTY),
                (this._positionSubscription = Le.EMPTY),
                (this.viewportMargin = 0),
                (this.open = !1),
                (this.disableClose = !1),
                (this.backdropClick = new ce()),
                (this.positionChange = new ce()),
                (this.attach = new ce()),
                (this.detach = new ce()),
                (this.overlayKeydown = new ce()),
                (this.overlayOutsideClick = new ce()),
                (this._templatePortal = new lE(i, r)),
                (this._scrollStrategyFactory = s),
                (this.scrollStrategy = this._scrollStrategyFactory());
            }
            get offsetX() {
              return this._offsetX;
            }
            set offsetX(e) {
              (this._offsetX = e),
                this._position && this._updatePositionStrategy(this._position);
            }
            get offsetY() {
              return this._offsetY;
            }
            set offsetY(e) {
              (this._offsetY = e),
                this._position && this._updatePositionStrategy(this._position);
            }
            get hasBackdrop() {
              return this._hasBackdrop;
            }
            set hasBackdrop(e) {
              this._hasBackdrop = we(e);
            }
            get lockPosition() {
              return this._lockPosition;
            }
            set lockPosition(e) {
              this._lockPosition = we(e);
            }
            get flexibleDimensions() {
              return this._flexibleDimensions;
            }
            set flexibleDimensions(e) {
              this._flexibleDimensions = we(e);
            }
            get growAfterOpen() {
              return this._growAfterOpen;
            }
            set growAfterOpen(e) {
              this._growAfterOpen = we(e);
            }
            get push() {
              return this._push;
            }
            set push(e) {
              this._push = we(e);
            }
            get overlayRef() {
              return this._overlayRef;
            }
            get dir() {
              return this._dir ? this._dir.value : 'ltr';
            }
            ngOnDestroy() {
              this._attachSubscription.unsubscribe(),
                this._detachSubscription.unsubscribe(),
                this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe(),
                this._overlayRef && this._overlayRef.dispose();
            }
            ngOnChanges(e) {
              this._position &&
                (this._updatePositionStrategy(this._position),
                this._overlayRef.updateSize({
                  width: this.width,
                  minWidth: this.minWidth,
                  height: this.height,
                  minHeight: this.minHeight,
                }),
                e.origin && this.open && this._position.apply()),
                e.open &&
                  (this.open ? this._attachOverlay() : this._detachOverlay());
            }
            _createOverlay() {
              (!this.positions || !this.positions.length) &&
                (this.positions = rG);
              const e = (this._overlayRef = this._overlay.create(
                this._buildConfig(),
              ));
              (this._attachSubscription = e
                .attachments()
                .subscribe(() => this.attach.emit())),
                (this._detachSubscription = e
                  .detachments()
                  .subscribe(() => this.detach.emit())),
                e.keydownEvents().subscribe(i => {
                  this.overlayKeydown.next(i),
                    27 === i.keyCode &&
                      !this.disableClose &&
                      !bo(i) &&
                      (i.preventDefault(), this._detachOverlay());
                }),
                this._overlayRef.outsidePointerEvents().subscribe(i => {
                  this.overlayOutsideClick.next(i);
                });
            }
            _buildConfig() {
              const e = (this._position =
                  this.positionStrategy || this._createPositionStrategy()),
                i = new fE({
                  direction: this._dir,
                  positionStrategy: e,
                  scrollStrategy: this.scrollStrategy,
                  hasBackdrop: this.hasBackdrop,
                });
              return (
                (this.width || 0 === this.width) && (i.width = this.width),
                (this.height || 0 === this.height) && (i.height = this.height),
                (this.minWidth || 0 === this.minWidth) &&
                  (i.minWidth = this.minWidth),
                (this.minHeight || 0 === this.minHeight) &&
                  (i.minHeight = this.minHeight),
                this.backdropClass && (i.backdropClass = this.backdropClass),
                this.panelClass && (i.panelClass = this.panelClass),
                i
              );
            }
            _updatePositionStrategy(e) {
              const i = this.positions.map(r => ({
                originX: r.originX,
                originY: r.originY,
                overlayX: r.overlayX,
                overlayY: r.overlayY,
                offsetX: r.offsetX || this.offsetX,
                offsetY: r.offsetY || this.offsetY,
                panelClass: r.panelClass || void 0,
              }));
              return e
                .setOrigin(this._getFlexibleConnectedPositionStrategyOrigin())
                .withPositions(i)
                .withFlexibleDimensions(this.flexibleDimensions)
                .withPush(this.push)
                .withGrowAfterOpen(this.growAfterOpen)
                .withViewportMargin(this.viewportMargin)
                .withLockedPosition(this.lockPosition)
                .withTransformOriginOn(this.transformOriginSelector);
            }
            _createPositionStrategy() {
              const e = this._overlay
                .position()
                .flexibleConnectedTo(
                  this._getFlexibleConnectedPositionStrategyOrigin(),
                );
              return this._updatePositionStrategy(e), e;
            }
            _getFlexibleConnectedPositionStrategyOrigin() {
              return this.origin instanceof bE
                ? this.origin.elementRef
                : this.origin;
            }
            _attachOverlay() {
              this._overlayRef
                ? (this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop)
                : this._createOverlay(),
                this._overlayRef.hasAttached() ||
                  this._overlayRef.attach(this._templatePortal),
                this.hasBackdrop
                  ? (this._backdropSubscription = this._overlayRef
                      .backdropClick()
                      .subscribe(e => {
                        this.backdropClick.emit(e);
                      }))
                  : this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe(),
                this.positionChange.observers.length > 0 &&
                  (this._positionSubscription = this._position.positionChanges
                    .pipe(
                      (function Uj(n, t = !1) {
                        return Xe((e, i) => {
                          let r = 0;
                          e.subscribe(
                            Je(i, s => {
                              const o = n(s, r++);
                              (o || t) && i.next(s), !o && i.complete();
                            }),
                          );
                        });
                      })(() => this.positionChange.observers.length > 0),
                    )
                    .subscribe(e => {
                      this.positionChange.emit(e),
                        0 === this.positionChange.observers.length &&
                          this._positionSubscription.unsubscribe();
                    }));
            }
            _detachOverlay() {
              this._overlayRef && this._overlayRef.detach(),
                this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(p(Zl), p(Sn), p(fn), p(vE), p(Xr, 8));
            }),
            (n.ɵdir = w({
              type: n,
              selectors: [
                ['', 'cdk-connected-overlay', ''],
                ['', 'connected-overlay', ''],
                ['', 'cdkConnectedOverlay', ''],
              ],
              inputs: {
                origin: ['cdkConnectedOverlayOrigin', 'origin'],
                positions: ['cdkConnectedOverlayPositions', 'positions'],
                positionStrategy: [
                  'cdkConnectedOverlayPositionStrategy',
                  'positionStrategy',
                ],
                offsetX: ['cdkConnectedOverlayOffsetX', 'offsetX'],
                offsetY: ['cdkConnectedOverlayOffsetY', 'offsetY'],
                width: ['cdkConnectedOverlayWidth', 'width'],
                height: ['cdkConnectedOverlayHeight', 'height'],
                minWidth: ['cdkConnectedOverlayMinWidth', 'minWidth'],
                minHeight: ['cdkConnectedOverlayMinHeight', 'minHeight'],
                backdropClass: [
                  'cdkConnectedOverlayBackdropClass',
                  'backdropClass',
                ],
                panelClass: ['cdkConnectedOverlayPanelClass', 'panelClass'],
                viewportMargin: [
                  'cdkConnectedOverlayViewportMargin',
                  'viewportMargin',
                ],
                scrollStrategy: [
                  'cdkConnectedOverlayScrollStrategy',
                  'scrollStrategy',
                ],
                open: ['cdkConnectedOverlayOpen', 'open'],
                disableClose: [
                  'cdkConnectedOverlayDisableClose',
                  'disableClose',
                ],
                transformOriginSelector: [
                  'cdkConnectedOverlayTransformOriginOn',
                  'transformOriginSelector',
                ],
                hasBackdrop: ['cdkConnectedOverlayHasBackdrop', 'hasBackdrop'],
                lockPosition: [
                  'cdkConnectedOverlayLockPosition',
                  'lockPosition',
                ],
                flexibleDimensions: [
                  'cdkConnectedOverlayFlexibleDimensions',
                  'flexibleDimensions',
                ],
                growAfterOpen: [
                  'cdkConnectedOverlayGrowAfterOpen',
                  'growAfterOpen',
                ],
                push: ['cdkConnectedOverlayPush', 'push'],
              },
              outputs: {
                backdropClick: 'backdropClick',
                positionChange: 'positionChange',
                attach: 'attach',
                detach: 'detach',
                overlayKeydown: 'overlayKeydown',
                overlayOutsideClick: 'overlayOutsideClick',
              },
              exportAs: ['cdkConnectedOverlay'],
              features: [ht],
            })),
            n
          );
        })();
      const oG = {
        provide: vE,
        deps: [Zl],
        useFactory: function sG(n) {
          return () => n.scrollStrategies.reposition();
        },
      };
      let aG = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({providers: [Zl, oG], imports: [[Jr, $j, aE], aE]})),
          n
        );
      })();
      class lG {
        constructor(t = !1, e, i = !0) {
          (this._multiple = t),
            (this._emitChanges = i),
            (this._selection = new Set()),
            (this._deselectedToEmit = []),
            (this._selectedToEmit = []),
            (this.changed = new de()),
            e &&
              e.length &&
              (t
                ? e.forEach(r => this._markSelected(r))
                : this._markSelected(e[0]),
              (this._selectedToEmit.length = 0));
        }
        get selected() {
          return (
            this._selected ||
              (this._selected = Array.from(this._selection.values())),
            this._selected
          );
        }
        select(...t) {
          this._verifyValueAssignment(t),
            t.forEach(e => this._markSelected(e)),
            this._emitChangeEvent();
        }
        deselect(...t) {
          this._verifyValueAssignment(t),
            t.forEach(e => this._unmarkSelected(e)),
            this._emitChangeEvent();
        }
        toggle(t) {
          this.isSelected(t) ? this.deselect(t) : this.select(t);
        }
        clear() {
          this._unmarkAll(), this._emitChangeEvent();
        }
        isSelected(t) {
          return this._selection.has(t);
        }
        isEmpty() {
          return 0 === this._selection.size;
        }
        hasValue() {
          return !this.isEmpty();
        }
        sort(t) {
          this._multiple && this.selected && this._selected.sort(t);
        }
        isMultipleSelection() {
          return this._multiple;
        }
        _emitChangeEvent() {
          (this._selected = null),
            (this._selectedToEmit.length || this._deselectedToEmit.length) &&
              (this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit,
              }),
              (this._deselectedToEmit = []),
              (this._selectedToEmit = []));
        }
        _markSelected(t) {
          this.isSelected(t) ||
            (this._multiple || this._unmarkAll(),
            this._selection.add(t),
            this._emitChanges && this._selectedToEmit.push(t));
        }
        _unmarkSelected(t) {
          this.isSelected(t) &&
            (this._selection.delete(t),
            this._emitChanges && this._deselectedToEmit.push(t));
        }
        _unmarkAll() {
          this.isEmpty() ||
            this._selection.forEach(t => this._unmarkSelected(t));
        }
        _verifyValueAssignment(t) {}
      }
      function Hh(n, t) {
        return Xe((e, i) => {
          let r = null,
            s = 0,
            o = !1;
          const a = () => o && !r && i.complete();
          e.subscribe(
            Je(
              i,
              l => {
                null == r || r.unsubscribe();
                let c = 0;
                const u = s++;
                wt(n(l, u)).subscribe(
                  (r = Je(
                    i,
                    d => i.next(t ? t(l, d, u, c++) : d),
                    () => {
                      (r = null), a();
                    },
                  )),
                );
              },
              () => {
                (o = !0), a();
              },
            ),
          );
        });
      }
      function dG(n, t) {
        return n === t;
      }
      const fG = ['trigger'],
        hG = ['panel'];
      function pG(n, t) {
        if ((1 & n && (z(0, 'span', 8), Nt(1), Y()), 2 & n)) {
          const e = P();
          R(1), Hr(e.placeholder);
        }
      }
      function gG(n, t) {
        if ((1 & n && (z(0, 'span', 12), Nt(1), Y()), 2 & n)) {
          const e = P(2);
          R(1), Hr(e.triggerValue);
        }
      }
      function mG(n, t) {
        1 & n && kt(0, 0, ['*ngSwitchCase', 'true']);
      }
      function _G(n, t) {
        1 & n &&
          (z(0, 'span', 9),
          H(1, gG, 2, 1, 'span', 10),
          H(2, mG, 1, 0, 'ng-content', 11),
          Y()),
          2 & n &&
            (S('ngSwitch', !!P().customTrigger), R(2), S('ngSwitchCase', !0));
      }
      function yG(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'div', 13)(1, 'div', 14, 15),
            ve('@transformPanel.done', function (r) {
              return pt(e), P()._panelDoneAnimatingStream.next(r.toState);
            })('keydown', function (r) {
              return pt(e), P()._handleKeydown(r);
            }),
            kt(3, 1),
            Y()();
        }
        if (2 & n) {
          const e = P();
          S('@transformPanelWrap', void 0),
            R(1),
            J_('mat-select-panel ', e._getPanelTheme(), ''),
            rd('transform-origin', e._transformOrigin)(
              'font-size',
              e._triggerFontSize,
              'px',
            ),
            S('ngClass', e.panelClass)(
              '@transformPanel',
              e.multiple ? 'showing-multiple' : 'showing',
            ),
            it('id', e.id + '-panel')('aria-multiselectable', e.multiple)(
              'aria-label',
              e.ariaLabel || null,
            )('aria-labelledby', e._getPanelAriaLabelledby());
        }
      }
      const vG = [[['mat-select-trigger']], '*'],
        bG = ['mat-select-trigger', '*'],
        wE = {
          transformPanelWrap: sh('transformPanelWrap', [
            Dl('* => void', nB('@transformPanel', [tB()], {optional: !0})),
          ]),
          transformPanel: sh('transformPanel', [
            wl(
              'void',
              gi({transform: 'scaleY(0.8)', minWidth: '100%', opacity: 0}),
            ),
            wl(
              'showing',
              gi({
                opacity: 1,
                minWidth: 'calc(100% + 32px)',
                transform: 'scaleY(1)',
              }),
            ),
            wl(
              'showing-multiple',
              gi({
                opacity: 1,
                minWidth: 'calc(100% + 64px)',
                transform: 'scaleY(1)',
              }),
            ),
            Dl('void => *', oh('120ms cubic-bezier(0, 0, 0.2, 1)')),
            Dl('* => void', oh('100ms 25ms linear', gi({opacity: 0}))),
          ]),
        };
      let DE = 0;
      const xE = new I('mat-select-scroll-strategy'),
        EG = new I('MAT_SELECT_CONFIG'),
        xG = {
          provide: xE,
          deps: [Zl],
          useFactory: function DG(n) {
            return () => n.scrollStrategies.reposition();
          },
        };
      class MG {
        constructor(t, e) {
          (this.source = t), (this.value = e);
        }
      }
      const AG = aH(
          lH(
            oH(
              kD(
                class {
                  constructor(n, t, e, i, r) {
                    (this._elementRef = n),
                      (this._defaultErrorStateMatcher = t),
                      (this._parentForm = e),
                      (this._parentFormGroup = i),
                      (this.ngControl = r);
                  }
                },
              ),
            ),
          ),
        ),
        SG = new I('MatSelectTrigger');
      let IG = (() => {
          class n extends AG {
            constructor(e, i, r, s, o, a, l, c, u, d, f, h, g, m) {
              var v, y, _;
              super(o, s, l, c, d),
                (this._viewportRuler = e),
                (this._changeDetectorRef = i),
                (this._ngZone = r),
                (this._dir = a),
                (this._parentFormField = u),
                (this._liveAnnouncer = g),
                (this._defaultOptions = m),
                (this._panelOpen = !1),
                (this._compareWith = (D, O) => D === O),
                (this._uid = 'mat-select-' + DE++),
                (this._triggerAriaLabelledBy = null),
                (this._destroy = new de()),
                (this._onChange = () => {}),
                (this._onTouched = () => {}),
                (this._valueId = 'mat-select-value-' + DE++),
                (this._panelDoneAnimatingStream = new de()),
                (this._overlayPanelClass =
                  (null === (v = this._defaultOptions) || void 0 === v
                    ? void 0
                    : v.overlayPanelClass) || ''),
                (this._focused = !1),
                (this.controlType = 'mat-select'),
                (this._multiple = !1),
                (this._disableOptionCentering =
                  null !==
                    (_ =
                      null === (y = this._defaultOptions) || void 0 === y
                        ? void 0
                        : y.disableOptionCentering) &&
                  void 0 !== _ &&
                  _),
                (this.ariaLabel = ''),
                (this.optionSelectionChanges = (function cG(n) {
                  return new Me(t => {
                    wt(n()).subscribe(t);
                  });
                })(() => {
                  const D = this.options;
                  return D
                    ? D.changes.pipe(
                        Mo(D),
                        Hh(() => kn(...D.map(O => O.onSelectionChange))),
                      )
                    : this._ngZone.onStable.pipe(
                        rs(1),
                        Hh(() => this.optionSelectionChanges),
                      );
                })),
                (this.openedChange = new ce()),
                (this._openedStream = this.openedChange.pipe(
                  di(D => D),
                  rt(() => {}),
                )),
                (this._closedStream = this.openedChange.pipe(
                  di(D => !D),
                  rt(() => {}),
                )),
                (this.selectionChange = new ce()),
                (this.valueChange = new ce()),
                this.ngControl && (this.ngControl.valueAccessor = this),
                null != (null == m ? void 0 : m.typeaheadDebounceInterval) &&
                  (this._typeaheadDebounceInterval =
                    m.typeaheadDebounceInterval),
                (this._scrollStrategyFactory = h),
                (this._scrollStrategy = this._scrollStrategyFactory()),
                (this.tabIndex = parseInt(f) || 0),
                (this.id = this.id);
            }
            get focused() {
              return this._focused || this._panelOpen;
            }
            get placeholder() {
              return this._placeholder;
            }
            set placeholder(e) {
              (this._placeholder = e), this.stateChanges.next();
            }
            get required() {
              var e, i, r, s;
              return (
                null !==
                  (s =
                    null !== (e = this._required) && void 0 !== e
                      ? e
                      : null ===
                          (r =
                            null === (i = this.ngControl) || void 0 === i
                              ? void 0
                              : i.control) || void 0 === r
                      ? void 0
                      : r.hasValidator(SC.required)) &&
                void 0 !== s &&
                s
              );
            }
            set required(e) {
              (this._required = we(e)), this.stateChanges.next();
            }
            get multiple() {
              return this._multiple;
            }
            set multiple(e) {
              this._multiple = we(e);
            }
            get disableOptionCentering() {
              return this._disableOptionCentering;
            }
            set disableOptionCentering(e) {
              this._disableOptionCentering = we(e);
            }
            get compareWith() {
              return this._compareWith;
            }
            set compareWith(e) {
              (this._compareWith = e),
                this._selectionModel && this._initializeSelection();
            }
            get value() {
              return this._value;
            }
            set value(e) {
              this._assignValue(e) && this._onChange(e);
            }
            get typeaheadDebounceInterval() {
              return this._typeaheadDebounceInterval;
            }
            set typeaheadDebounceInterval(e) {
              this._typeaheadDebounceInterval = Df(e);
            }
            get id() {
              return this._id;
            }
            set id(e) {
              (this._id = e || this._uid), this.stateChanges.next();
            }
            ngOnInit() {
              (this._selectionModel = new lG(this.multiple)),
                this.stateChanges.next(),
                this._panelDoneAnimatingStream
                  .pipe(
                    (function uG(n, t = Po) {
                      return (
                        (n = null != n ? n : dG),
                        Xe((e, i) => {
                          let r,
                            s = !0;
                          e.subscribe(
                            Je(i, o => {
                              const a = t(o);
                              (s || !n(r, a)) && ((s = !1), (r = a), i.next(o));
                            }),
                          );
                        })
                      );
                    })(),
                    Qe(this._destroy),
                  )
                  .subscribe(() => this._panelDoneAnimating(this.panelOpen));
            }
            ngAfterContentInit() {
              this._initKeyManager(),
                this._selectionModel.changed
                  .pipe(Qe(this._destroy))
                  .subscribe(e => {
                    e.added.forEach(i => i.select()),
                      e.removed.forEach(i => i.deselect());
                  }),
                this.options.changes
                  .pipe(Mo(null), Qe(this._destroy))
                  .subscribe(() => {
                    this._resetOptions(), this._initializeSelection();
                  });
            }
            ngDoCheck() {
              const e = this._getTriggerAriaLabelledby(),
                i = this.ngControl;
              if (e !== this._triggerAriaLabelledBy) {
                const r = this._elementRef.nativeElement;
                (this._triggerAriaLabelledBy = e),
                  e
                    ? r.setAttribute('aria-labelledby', e)
                    : r.removeAttribute('aria-labelledby');
              }
              i &&
                (this._previousControl !== i.control &&
                  (void 0 !== this._previousControl &&
                    null !== i.disabled &&
                    i.disabled !== this.disabled &&
                    (this.disabled = i.disabled),
                  (this._previousControl = i.control)),
                this.updateErrorState());
            }
            ngOnChanges(e) {
              e.disabled && this.stateChanges.next(),
                e.typeaheadDebounceInterval &&
                  this._keyManager &&
                  this._keyManager.withTypeAhead(
                    this._typeaheadDebounceInterval,
                  );
            }
            ngOnDestroy() {
              this._destroy.next(),
                this._destroy.complete(),
                this.stateChanges.complete();
            }
            toggle() {
              this.panelOpen ? this.close() : this.open();
            }
            open() {
              this._canOpen() &&
                ((this._panelOpen = !0),
                this._keyManager.withHorizontalOrientation(null),
                this._highlightCorrectOption(),
                this._changeDetectorRef.markForCheck());
            }
            close() {
              this._panelOpen &&
                ((this._panelOpen = !1),
                this._keyManager.withHorizontalOrientation(
                  this._isRtl() ? 'rtl' : 'ltr',
                ),
                this._changeDetectorRef.markForCheck(),
                this._onTouched());
            }
            writeValue(e) {
              this._assignValue(e);
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              (this.disabled = e),
                this._changeDetectorRef.markForCheck(),
                this.stateChanges.next();
            }
            get panelOpen() {
              return this._panelOpen;
            }
            get selected() {
              var e, i;
              return this.multiple
                ? (null === (e = this._selectionModel) || void 0 === e
                    ? void 0
                    : e.selected) || []
                : null === (i = this._selectionModel) || void 0 === i
                ? void 0
                : i.selected[0];
            }
            get triggerValue() {
              if (this.empty) return '';
              if (this._multiple) {
                const e = this._selectionModel.selected.map(i => i.viewValue);
                return this._isRtl() && e.reverse(), e.join(', ');
              }
              return this._selectionModel.selected[0].viewValue;
            }
            _isRtl() {
              return !!this._dir && 'rtl' === this._dir.value;
            }
            _handleKeydown(e) {
              this.disabled ||
                (this.panelOpen
                  ? this._handleOpenKeydown(e)
                  : this._handleClosedKeydown(e));
            }
            _handleClosedKeydown(e) {
              const i = e.keyCode,
                r = 40 === i || 38 === i || 37 === i || 39 === i,
                s = 13 === i || 32 === i,
                o = this._keyManager;
              if (
                (!o.isTyping() && s && !bo(e)) ||
                ((this.multiple || e.altKey) && r)
              )
                e.preventDefault(), this.open();
              else if (!this.multiple) {
                const a = this.selected;
                o.onKeydown(e);
                const l = this.selected;
                l && a !== l && this._liveAnnouncer.announce(l.viewValue, 1e4);
              }
            }
            _handleOpenKeydown(e) {
              const i = this._keyManager,
                r = e.keyCode,
                s = 40 === r || 38 === r,
                o = i.isTyping();
              if (s && e.altKey) e.preventDefault(), this.close();
              else if (o || (13 !== r && 32 !== r) || !i.activeItem || bo(e))
                if (!o && this._multiple && 65 === r && e.ctrlKey) {
                  e.preventDefault();
                  const a = this.options.some(l => !l.disabled && !l.selected);
                  this.options.forEach(l => {
                    l.disabled || (a ? l.select() : l.deselect());
                  });
                } else {
                  const a = i.activeItemIndex;
                  i.onKeydown(e),
                    this._multiple &&
                      s &&
                      e.shiftKey &&
                      i.activeItem &&
                      i.activeItemIndex !== a &&
                      i.activeItem._selectViaInteraction();
                }
              else e.preventDefault(), i.activeItem._selectViaInteraction();
            }
            _onFocus() {
              this.disabled || ((this._focused = !0), this.stateChanges.next());
            }
            _onBlur() {
              (this._focused = !1),
                !this.disabled &&
                  !this.panelOpen &&
                  (this._onTouched(),
                  this._changeDetectorRef.markForCheck(),
                  this.stateChanges.next());
            }
            _onAttached() {
              this._overlayDir.positionChange.pipe(rs(1)).subscribe(() => {
                this._changeDetectorRef.detectChanges(),
                  this._positioningSettled();
              });
            }
            _getPanelTheme() {
              return this._parentFormField
                ? `mat-${this._parentFormField.color}`
                : '';
            }
            get empty() {
              return !this._selectionModel || this._selectionModel.isEmpty();
            }
            _initializeSelection() {
              Promise.resolve().then(() => {
                this.ngControl && (this._value = this.ngControl.value),
                  this._setSelectionByValue(this._value),
                  this.stateChanges.next();
              });
            }
            _setSelectionByValue(e) {
              if (
                (this._selectionModel.selected.forEach(i =>
                  i.setInactiveStyles(),
                ),
                this._selectionModel.clear(),
                this.multiple && e)
              )
                Array.isArray(e),
                  e.forEach(i => this._selectOptionByValue(i)),
                  this._sortValues();
              else {
                const i = this._selectOptionByValue(e);
                i
                  ? this._keyManager.updateActiveItem(i)
                  : this.panelOpen || this._keyManager.updateActiveItem(-1);
              }
              this._changeDetectorRef.markForCheck();
            }
            _selectOptionByValue(e) {
              const i = this.options.find(r => {
                if (this._selectionModel.isSelected(r)) return !1;
                try {
                  return null != r.value && this._compareWith(r.value, e);
                } catch (s) {
                  return !1;
                }
              });
              return i && this._selectionModel.select(i), i;
            }
            _assignValue(e) {
              return (
                !!(e !== this._value || (this._multiple && Array.isArray(e))) &&
                (this.options && this._setSelectionByValue(e),
                (this._value = e),
                !0)
              );
            }
            _initKeyManager() {
              (this._keyManager = new jV(this.options)
                .withTypeAhead(this._typeaheadDebounceInterval)
                .withVerticalOrientation()
                .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
                .withHomeAndEnd()
                .withAllowedModifierKeys(['shiftKey'])),
                this._keyManager.tabOut
                  .pipe(Qe(this._destroy))
                  .subscribe(() => {
                    this.panelOpen &&
                      (!this.multiple &&
                        this._keyManager.activeItem &&
                        this._keyManager.activeItem._selectViaInteraction(),
                      this.focus(),
                      this.close());
                  }),
                this._keyManager.change
                  .pipe(Qe(this._destroy))
                  .subscribe(() => {
                    this._panelOpen && this.panel
                      ? this._scrollOptionIntoView(
                          this._keyManager.activeItemIndex || 0,
                        )
                      : !this._panelOpen &&
                        !this.multiple &&
                        this._keyManager.activeItem &&
                        this._keyManager.activeItem._selectViaInteraction();
                  });
            }
            _resetOptions() {
              const e = kn(this.options.changes, this._destroy);
              this.optionSelectionChanges.pipe(Qe(e)).subscribe(i => {
                this._onSelect(i.source, i.isUserInput),
                  i.isUserInput &&
                    !this.multiple &&
                    this._panelOpen &&
                    (this.close(), this.focus());
              }),
                kn(...this.options.map(i => i._stateChanges))
                  .pipe(Qe(e))
                  .subscribe(() => {
                    this._changeDetectorRef.markForCheck(),
                      this.stateChanges.next();
                  });
            }
            _onSelect(e, i) {
              const r = this._selectionModel.isSelected(e);
              null != e.value || this._multiple
                ? (r !== e.selected &&
                    (e.selected
                      ? this._selectionModel.select(e)
                      : this._selectionModel.deselect(e)),
                  i && this._keyManager.setActiveItem(e),
                  this.multiple && (this._sortValues(), i && this.focus()))
                : (e.deselect(),
                  this._selectionModel.clear(),
                  null != this.value && this._propagateChanges(e.value)),
                r !== this._selectionModel.isSelected(e) &&
                  this._propagateChanges(),
                this.stateChanges.next();
            }
            _sortValues() {
              if (this.multiple) {
                const e = this.options.toArray();
                this._selectionModel.sort((i, r) =>
                  this.sortComparator
                    ? this.sortComparator(i, r, e)
                    : e.indexOf(i) - e.indexOf(r),
                ),
                  this.stateChanges.next();
              }
            }
            _propagateChanges(e) {
              let i = null;
              (i = this.multiple
                ? this.selected.map(r => r.value)
                : this.selected
                ? this.selected.value
                : e),
                (this._value = i),
                this.valueChange.emit(i),
                this._onChange(i),
                this.selectionChange.emit(this._getChangeEvent(i)),
                this._changeDetectorRef.markForCheck();
            }
            _highlightCorrectOption() {
              this._keyManager &&
                (this.empty
                  ? this._keyManager.setFirstItemActive()
                  : this._keyManager.setActiveItem(
                      this._selectionModel.selected[0],
                    ));
            }
            _canOpen() {
              var e;
              return (
                !this._panelOpen &&
                !this.disabled &&
                (null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.length) > 0
              );
            }
            focus(e) {
              this._elementRef.nativeElement.focus(e);
            }
            _getPanelAriaLabelledby() {
              var e;
              if (this.ariaLabel) return null;
              const i =
                null === (e = this._parentFormField) || void 0 === e
                  ? void 0
                  : e.getLabelId();
              return this.ariaLabelledby
                ? (i ? i + ' ' : '') + this.ariaLabelledby
                : i;
            }
            _getAriaActiveDescendant() {
              return this.panelOpen &&
                this._keyManager &&
                this._keyManager.activeItem
                ? this._keyManager.activeItem.id
                : null;
            }
            _getTriggerAriaLabelledby() {
              var e;
              if (this.ariaLabel) return null;
              const i =
                null === (e = this._parentFormField) || void 0 === e
                  ? void 0
                  : e.getLabelId();
              let r = (i ? i + ' ' : '') + this._valueId;
              return this.ariaLabelledby && (r += ' ' + this.ariaLabelledby), r;
            }
            _panelDoneAnimating(e) {
              this.openedChange.emit(e);
            }
            setDescribedByIds(e) {
              this._ariaDescribedby = e.join(' ');
            }
            onContainerClick() {
              this.focus(), this.open();
            }
            get shouldLabelFloat() {
              return (
                this._panelOpen ||
                !this.empty ||
                (this._focused && !!this._placeholder)
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                p(Nh),
                p(Li),
                p(se),
                p(Oh),
                p(j),
                p(Xr, 8),
                p(mo, 8),
                p(_o, 8),
                p(kh, 8),
                p(Tn, 10),
                bs('tabindex'),
                p(xE),
                p(XV),
                p(EG, 8),
              );
            }),
            (n.ɵdir = w({
              type: n,
              viewQuery: function (e, i) {
                if ((1 & e && (li(fG, 5), li(hG, 5), li(CE, 5)), 2 & e)) {
                  let r;
                  Be((r = He())) && (i.trigger = r.first),
                    Be((r = He())) && (i.panel = r.first),
                    Be((r = He())) && (i._overlayDir = r.first);
                }
              },
              inputs: {
                panelClass: 'panelClass',
                placeholder: 'placeholder',
                required: 'required',
                multiple: 'multiple',
                disableOptionCentering: 'disableOptionCentering',
                compareWith: 'compareWith',
                value: 'value',
                ariaLabel: ['aria-label', 'ariaLabel'],
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                errorStateMatcher: 'errorStateMatcher',
                typeaheadDebounceInterval: 'typeaheadDebounceInterval',
                sortComparator: 'sortComparator',
                id: 'id',
              },
              outputs: {
                openedChange: 'openedChange',
                _openedStream: 'opened',
                _closedStream: 'closed',
                selectionChange: 'selectionChange',
                valueChange: 'valueChange',
              },
              features: [x, ht],
            })),
            n
          );
        })(),
        TG = (() => {
          class n extends IG {
            constructor() {
              super(...arguments),
                (this._scrollTop = 0),
                (this._triggerFontSize = 0),
                (this._transformOrigin = 'top'),
                (this._offsetY = 0),
                (this._positions = [
                  {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top',
                  },
                  {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom',
                  },
                ]);
            }
            _calculateOverlayScroll(e, i, r) {
              const s = this._getItemHeight();
              return Math.min(Math.max(0, s * e - i + s / 2), r);
            }
            ngOnInit() {
              super.ngOnInit(),
                this._viewportRuler
                  .change()
                  .pipe(Qe(this._destroy))
                  .subscribe(() => {
                    this.panelOpen &&
                      ((this._triggerRect =
                        this.trigger.nativeElement.getBoundingClientRect()),
                      this._changeDetectorRef.markForCheck());
                  });
            }
            open() {
              super._canOpen() &&
                (super.open(),
                (this._triggerRect =
                  this.trigger.nativeElement.getBoundingClientRect()),
                (this._triggerFontSize = parseInt(
                  getComputedStyle(this.trigger.nativeElement).fontSize || '0',
                )),
                this._calculateOverlayPosition(),
                this._ngZone.onStable.pipe(rs(1)).subscribe(() => {
                  this._triggerFontSize &&
                    this._overlayDir.overlayRef &&
                    this._overlayDir.overlayRef.overlayElement &&
                    (this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`);
                }));
            }
            _scrollOptionIntoView(e) {
              const i = GD(e, this.options, this.optionGroups),
                r = this._getItemHeight();
              this.panel.nativeElement.scrollTop =
                0 === e && 1 === i
                  ? 0
                  : (function wH(n, t, e, i) {
                      return n < e
                        ? n
                        : n + t > e + i
                        ? Math.max(0, n - i + t)
                        : e;
                    })((e + i) * r, r, this.panel.nativeElement.scrollTop, 256);
            }
            _positioningSettled() {
              this._calculateOverlayOffsetX(),
                (this.panel.nativeElement.scrollTop = this._scrollTop);
            }
            _panelDoneAnimating(e) {
              this.panelOpen
                ? (this._scrollTop = 0)
                : ((this._overlayDir.offsetX = 0),
                  this._changeDetectorRef.markForCheck()),
                super._panelDoneAnimating(e);
            }
            _getChangeEvent(e) {
              return new MG(this, e);
            }
            _calculateOverlayOffsetX() {
              const e =
                  this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),
                i = this._viewportRuler.getViewportSize(),
                r = this._isRtl(),
                s = this.multiple ? 56 : 32;
              let o;
              if (this.multiple) o = 40;
              else if (this.disableOptionCentering) o = 16;
              else {
                let c = this._selectionModel.selected[0] || this.options.first;
                o = c && c.group ? 32 : 16;
              }
              r || (o *= -1);
              const a = 0 - (e.left + o - (r ? s : 0)),
                l = e.right + o - i.width + (r ? 0 : s);
              a > 0 ? (o += a + 8) : l > 0 && (o -= l + 8),
                (this._overlayDir.offsetX = Math.round(o)),
                this._overlayDir.overlayRef.updatePosition();
            }
            _calculateOverlayOffsetY(e, i, r) {
              const s = this._getItemHeight(),
                o = (s - this._triggerRect.height) / 2,
                a = Math.floor(256 / s);
              let l;
              return this.disableOptionCentering
                ? 0
                : ((l =
                    0 === this._scrollTop
                      ? e * s
                      : this._scrollTop === r
                      ? (e - (this._getItemCount() - a)) * s +
                        (s - ((this._getItemCount() * s - 256) % s))
                      : i - s / 2),
                  Math.round(-1 * l - o));
            }
            _checkOverlayWithinViewport(e) {
              const i = this._getItemHeight(),
                r = this._viewportRuler.getViewportSize(),
                s = this._triggerRect.top - 8,
                o = r.height - this._triggerRect.bottom - 8,
                a = Math.abs(this._offsetY),
                c =
                  Math.min(this._getItemCount() * i, 256) -
                  a -
                  this._triggerRect.height;
              c > o
                ? this._adjustPanelUp(c, o)
                : a > s
                ? this._adjustPanelDown(a, s, e)
                : (this._transformOrigin = this._getOriginBasedOnOption());
            }
            _adjustPanelUp(e, i) {
              const r = Math.round(e - i);
              (this._scrollTop -= r),
                (this._offsetY -= r),
                (this._transformOrigin = this._getOriginBasedOnOption()),
                this._scrollTop <= 0 &&
                  ((this._scrollTop = 0),
                  (this._offsetY = 0),
                  (this._transformOrigin = '50% bottom 0px'));
            }
            _adjustPanelDown(e, i, r) {
              const s = Math.round(e - i);
              if (
                ((this._scrollTop += s),
                (this._offsetY += s),
                (this._transformOrigin = this._getOriginBasedOnOption()),
                this._scrollTop >= r)
              )
                return (
                  (this._scrollTop = r),
                  (this._offsetY = 0),
                  void (this._transformOrigin = '50% top 0px')
                );
            }
            _calculateOverlayPosition() {
              const e = this._getItemHeight(),
                i = this._getItemCount(),
                r = Math.min(i * e, 256),
                o = i * e - r;
              let a;
              (a = this.empty
                ? 0
                : Math.max(
                    this.options
                      .toArray()
                      .indexOf(this._selectionModel.selected[0]),
                    0,
                  )),
                (a += GD(a, this.options, this.optionGroups));
              const l = r / 2;
              (this._scrollTop = this._calculateOverlayScroll(a, l, o)),
                (this._offsetY = this._calculateOverlayOffsetY(a, l, o)),
                this._checkOverlayWithinViewport(o);
            }
            _getOriginBasedOnOption() {
              const e = this._getItemHeight(),
                i = (e - this._triggerRect.height) / 2;
              return `50% ${Math.abs(this._offsetY) - i + e / 2}px 0px`;
            }
            _getItemHeight() {
              return 3 * this._triggerFontSize;
            }
            _getItemCount() {
              return this.options.length + this.optionGroups.length;
            }
          }
          return (
            (n.ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = k(n)))(i || n);
              };
            })()),
            (n.ɵcmp = Jn({
              type: n,
              selectors: [['mat-select']],
              contentQueries: function (e, i, r) {
                if (
                  (1 & e && (Lt(r, SG, 5), Lt(r, jD, 5), Lt(r, HD, 5)), 2 & e)
                ) {
                  let s;
                  Be((s = He())) && (i.customTrigger = s.first),
                    Be((s = He())) && (i.options = s),
                    Be((s = He())) && (i.optionGroups = s);
                }
              },
              hostAttrs: [
                'role',
                'combobox',
                'aria-autocomplete',
                'none',
                'aria-haspopup',
                'true',
                1,
                'mat-select',
              ],
              hostVars: 20,
              hostBindings: function (e, i) {
                1 & e &&
                  ve('keydown', function (s) {
                    return i._handleKeydown(s);
                  })('focus', function () {
                    return i._onFocus();
                  })('blur', function () {
                    return i._onBlur();
                  }),
                  2 & e &&
                    (it('id', i.id)('tabindex', i.tabIndex)(
                      'aria-controls',
                      i.panelOpen ? i.id + '-panel' : null,
                    )('aria-expanded', i.panelOpen)(
                      'aria-label',
                      i.ariaLabel || null,
                    )('aria-required', i.required.toString())(
                      'aria-disabled',
                      i.disabled.toString(),
                    )('aria-invalid', i.errorState)(
                      'aria-describedby',
                      i._ariaDescribedby || null,
                    )('aria-activedescendant', i._getAriaActiveDescendant()),
                    Pt('mat-select-disabled', i.disabled)(
                      'mat-select-invalid',
                      i.errorState,
                    )('mat-select-required', i.required)(
                      'mat-select-empty',
                      i.empty,
                    )('mat-select-multiple', i.multiple));
              },
              inputs: {
                disabled: 'disabled',
                disableRipple: 'disableRipple',
                tabIndex: 'tabIndex',
              },
              exportAs: ['matSelect'],
              features: [
                ue([
                  {provide: Ul, useExisting: n},
                  {provide: BD, useExisting: n},
                ]),
                x,
              ],
              ngContentSelectors: bG,
              decls: 9,
              vars: 12,
              consts: [
                ['cdk-overlay-origin', '', 1, 'mat-select-trigger', 3, 'click'],
                ['origin', 'cdkOverlayOrigin', 'trigger', ''],
                [1, 'mat-select-value', 3, 'ngSwitch'],
                [
                  'class',
                  'mat-select-placeholder mat-select-min-line',
                  4,
                  'ngSwitchCase',
                ],
                [
                  'class',
                  'mat-select-value-text',
                  3,
                  'ngSwitch',
                  4,
                  'ngSwitchCase',
                ],
                [1, 'mat-select-arrow-wrapper'],
                [1, 'mat-select-arrow'],
                [
                  'cdk-connected-overlay',
                  '',
                  'cdkConnectedOverlayLockPosition',
                  '',
                  'cdkConnectedOverlayHasBackdrop',
                  '',
                  'cdkConnectedOverlayBackdropClass',
                  'cdk-overlay-transparent-backdrop',
                  3,
                  'cdkConnectedOverlayPanelClass',
                  'cdkConnectedOverlayScrollStrategy',
                  'cdkConnectedOverlayOrigin',
                  'cdkConnectedOverlayOpen',
                  'cdkConnectedOverlayPositions',
                  'cdkConnectedOverlayMinWidth',
                  'cdkConnectedOverlayOffsetY',
                  'backdropClick',
                  'attach',
                  'detach',
                ],
                [1, 'mat-select-placeholder', 'mat-select-min-line'],
                [1, 'mat-select-value-text', 3, 'ngSwitch'],
                ['class', 'mat-select-min-line', 4, 'ngSwitchDefault'],
                [4, 'ngSwitchCase'],
                [1, 'mat-select-min-line'],
                [1, 'mat-select-panel-wrap'],
                ['role', 'listbox', 'tabindex', '-1', 3, 'ngClass', 'keydown'],
                ['panel', ''],
              ],
              template: function (e, i) {
                if (
                  (1 & e &&
                    (Hs(vG),
                    z(0, 'div', 0, 1),
                    ve('click', function () {
                      return i.toggle();
                    }),
                    z(3, 'div', 2),
                    H(4, pG, 2, 1, 'span', 3),
                    H(5, _G, 3, 2, 'span', 4),
                    Y(),
                    z(6, 'div', 5),
                    lt(7, 'div', 6),
                    Y()(),
                    H(8, yG, 4, 14, 'ng-template', 7),
                    ve('backdropClick', function () {
                      return i.close();
                    })('attach', function () {
                      return i._onAttached();
                    })('detach', function () {
                      return i.close();
                    })),
                  2 & e)
                ) {
                  const r = Qu(1);
                  it('aria-owns', i.panelOpen ? i.id + '-panel' : null),
                    R(3),
                    S('ngSwitch', i.empty),
                    it('id', i._valueId),
                    R(1),
                    S('ngSwitchCase', !0),
                    R(1),
                    S('ngSwitchCase', !1),
                    R(3),
                    S('cdkConnectedOverlayPanelClass', i._overlayPanelClass)(
                      'cdkConnectedOverlayScrollStrategy',
                      i._scrollStrategy,
                    )('cdkConnectedOverlayOrigin', r)(
                      'cdkConnectedOverlayOpen',
                      i.panelOpen,
                    )('cdkConnectedOverlayPositions', i._positions)(
                      'cdkConnectedOverlayMinWidth',
                      null == i._triggerRect ? null : i._triggerRect.width,
                    )('cdkConnectedOverlayOffsetY', i._offsetY);
                }
              },
              directives: [bE, ro, Xd, ob, CE, Za],
              styles: [
                '.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}\n',
              ],
              encapsulation: 2,
              data: {animation: [wE.transformPanelWrap, wE.transformPanel]},
              changeDetection: 0,
            })),
            n
          );
        })(),
        FG = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({
              providers: [xG],
              imports: [[so, aG, $D, jt], Lh, zl, $D, jt],
            })),
            n
          );
        })(),
        OG = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = ae({type: n})),
            (n.ɵinj = re({imports: [[VD, jt], jt]})),
            n
          );
        })();
      class RG extends de {
        constructor(t = 1 / 0, e = 1 / 0, i = qf) {
          super(),
            (this._bufferSize = t),
            (this._windowTime = e),
            (this._timestampProvider = i),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = e === 1 / 0),
            (this._bufferSize = Math.max(1, t)),
            (this._windowTime = Math.max(1, e));
        }
        next(t) {
          const {
            isStopped: e,
            _buffer: i,
            _infiniteTimeWindow: r,
            _timestampProvider: s,
            _windowTime: o,
          } = this;
          e || (i.push(t), !r && i.push(s.now() + o)),
            this._trimBuffer(),
            super.next(t);
        }
        _subscribe(t) {
          this._throwIfClosed(), this._trimBuffer();
          const e = this._innerSubscribe(t),
            {_infiniteTimeWindow: i, _buffer: r} = this,
            s = r.slice();
          for (let o = 0; o < s.length && !t.closed; o += i ? 1 : 2)
            t.next(s[o]);
          return this._checkFinalizedStatuses(t), e;
        }
        _trimBuffer() {
          const {
              _bufferSize: t,
              _timestampProvider: e,
              _buffer: i,
              _infiniteTimeWindow: r,
            } = this,
            s = (r ? 1 : 2) * t;
          if ((t < 1 / 0 && s < i.length && i.splice(0, i.length - s), !r)) {
            const o = e.now();
            let a = 0;
            for (let l = 1; l < i.length && i[l] <= o; l += 2) a = l;
            a && i.splice(0, a + 1);
          }
        }
      }
      const Jl = {
        schedule(n, t) {
          const e = setTimeout(n, t);
          return () => clearTimeout(e);
        },
        scheduleBeforeRender(n) {
          if ('undefined' == typeof window) return Jl.schedule(n, 0);
          if (void 0 === window.requestAnimationFrame)
            return Jl.schedule(n, 16);
          const t = window.requestAnimationFrame(n);
          return () => window.cancelAnimationFrame(t);
        },
      };
      let jh;
      function GG(n, t, e) {
        let i = e;
        return (
          (function PG(n) {
            return !!n && n.nodeType === Node.ELEMENT_NODE;
          })(n) &&
            t.some(
              (r, s) =>
                !(
                  '*' === r ||
                  !(function LG(n, t) {
                    if (!jh) {
                      const e = Element.prototype;
                      jh =
                        e.matches ||
                        e.matchesSelector ||
                        e.mozMatchesSelector ||
                        e.msMatchesSelector ||
                        e.oMatchesSelector ||
                        e.webkitMatchesSelector;
                    }
                    return n.nodeType === Node.ELEMENT_NODE && jh.call(n, t);
                  })(n, r) ||
                  ((i = s), 0)
                ),
            ),
          i
        );
      }
      class UG {
        constructor(t, e) {
          this.componentFactory = e.get(Pi).resolveComponentFactory(t);
        }
        create(t) {
          return new zG(this.componentFactory, t);
        }
      }
      class zG {
        constructor(t, e) {
          (this.componentFactory = t),
            (this.injector = e),
            (this.eventEmitters = new RG(1)),
            (this.events = this.eventEmitters.pipe(Hh(i => kn(...i)))),
            (this.componentRef = null),
            (this.viewChangeDetectorRef = null),
            (this.inputChanges = null),
            (this.hasInputChanges = !1),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.unchangedInputs = new Set(
              this.componentFactory.inputs.map(({propName: i}) => i),
            )),
            (this.ngZone = this.injector.get(se)),
            (this.elementZone =
              'undefined' == typeof Zone
                ? null
                : this.ngZone.run(() => Zone.current));
        }
        connect(t) {
          this.runInZone(() => {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            null === this.componentRef && this.initializeComponent(t);
          });
        }
        disconnect() {
          this.runInZone(() => {
            null === this.componentRef ||
              null !== this.scheduledDestroyFn ||
              (this.scheduledDestroyFn = Jl.schedule(() => {
                null !== this.componentRef &&
                  (this.componentRef.destroy(),
                  (this.componentRef = null),
                  (this.viewChangeDetectorRef = null));
              }, 10));
          });
        }
        getInputValue(t) {
          return this.runInZone(() =>
            null === this.componentRef
              ? this.initialInputValues.get(t)
              : this.componentRef.instance[t],
          );
        }
        setInputValue(t, e) {
          this.runInZone(() => {
            null !== this.componentRef
              ? ((function VG(n, t) {
                  return n === t || (n != n && t != t);
                })(e, this.getInputValue(t)) &&
                  (void 0 !== e || !this.unchangedInputs.has(t))) ||
                (this.recordInputChange(t, e),
                this.unchangedInputs.delete(t),
                (this.hasInputChanges = !0),
                (this.componentRef.instance[t] = e),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(t, e);
          });
        }
        initializeComponent(t) {
          const e = nt.create({providers: [], parent: this.injector}),
            i = (function jG(n, t) {
              const e = n.childNodes,
                i = t.map(() => []);
              let r = -1;
              t.some((s, o) => '*' === s && ((r = o), !0));
              for (let s = 0, o = e.length; s < o; ++s) {
                const a = e[s],
                  l = GG(a, t, r);
                -1 !== l && i[l].push(a);
              }
              return i;
            })(t, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(e, i, t)),
            (this.viewChangeDetectorRef = this.componentRef.injector.get(Li)),
            (this.implementsOnChanges = (function NG(n) {
              return 'function' == typeof n;
            })(this.componentRef.instance.ngOnChanges)),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(Va).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({propName: t}) => {
            this.initialInputValues.has(t) &&
              this.setInputValue(t, this.initialInputValues.get(t));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(t) {
          const e = this.componentFactory.outputs.map(
            ({propName: i, templateName: r}) =>
              t.instance[i].pipe(rt(o => ({name: r, value: o}))),
          );
          this.eventEmitters.next(e);
        }
        callNgOnChanges(t) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const e = this.inputChanges;
          (this.inputChanges = null), t.instance.ngOnChanges(e);
        }
        markViewForCheck(t) {
          this.hasInputChanges &&
            ((this.hasInputChanges = !1), t.markForCheck());
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = Jl.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(t, e) {
          if (!this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const i = this.inputChanges[t];
          if (i) return void (i.currentValue = e);
          const r = this.unchangedInputs.has(t),
            s = r ? void 0 : this.getInputValue(t);
          this.inputChanges[t] = new xp(s, e, r);
        }
        detectChanges() {
          null !== this.componentRef &&
            (this.callNgOnChanges(this.componentRef),
            this.markViewForCheck(this.viewChangeDetectorRef),
            this.componentRef.changeDetectorRef.detectChanges());
        }
        runInZone(t) {
          return this.elementZone && Zone.current !== this.elementZone
            ? this.ngZone.run(t)
            : t();
        }
      }
      class WG extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      const YG = new I('Search_Service_Token'),
        XG = [];
      let n$ = (() => {
        class n {
          adapt(e) {
            const i = e.recentSearchApiRequestWithPromise;
            return Object.assign(
              {
                searchApiRequest: (r, s) =>
                  nr(e.searchApiRequestWithPromise(r, s)),
              },
              i && {recentSearchApiRequest: () => nr(i())},
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = E({token: n, factory: n.ɵfac, providedIn: 'root'})),
          n
        );
      })();
      const i$ = ['searchInput'];
      function r$(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'mat-icon', 14),
            ve('click', function () {
              return pt(e), P(3).resetInput();
            }),
            Y();
        }
        2 & n && S('className', P(3).config.crossIconClass);
      }
      function s$(n, t) {
        if ((1 & n && (z(0, 'mat-option', 15), Nt(1), Y()), 2 & n)) {
          const e = t.$implicit;
          S('value', e.name), R(1), Ri(' ', e.displayName, ' ');
        }
      }
      function o$(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'div', 4)(1, 'mat-form-field', 5)(2, 'input', 6, 7),
            ve('focus', function () {
              return pt(e), P(2).showSuggestions();
            })('blur', function () {
              return pt(e), P(2).hideSuggestions();
            })('ngModelChange', function (r) {
              return pt(e), (P(2).searchBoxInput = r);
            })('keyup', function (r) {
              return pt(e), P(2).hitSearchApi(r);
            })('ngModelChange', function () {
              pt(e);
              const r = P(2);
              return r.onChange(r.searchBoxInput);
            }),
            Y(),
            lt(4, 'mat-icon', 8),
            H(5, r$, 1, 1, 'mat-icon', 9),
            Y(),
            z(6, 'mat-form-field', 10),
            lt(7, 'mat-icon', 11),
            z(8, 'mat-select', 12),
            ve('selectionChange', function (r) {
              return pt(e), P(2).setCategory(r.value);
            }),
            H(9, s$, 2, 2, 'mat-option', 13),
            Y()()();
        }
        if (2 & n) {
          const e = Qu(3),
            i = P(2);
          R(2),
            S(
              'placeholder',
              i.config.placeholderFunction
                ? i.config.placeholderFunction(e.value, i.category)
                : i.config.placeholder || 'Search',
            )('ngModel', i.searchBoxInput)('disabled', i.disabled),
            R(2),
            S('className', i.config.searchIconClass),
            R(1),
            S('ngIf', i.searchBoxInput),
            R(2),
            S('className', i.config.dropDownButtonIconClass),
            R(1),
            S('value', i.category),
            R(1),
            S('ngForOf', i.config.models);
        }
      }
      function a$(n, t) {
        if ((1 & n && (ct(0), H(1, o$, 10, 8, 'div', 3), ut()), 2 & n)) {
          const e = P();
          R(1), S('ngIf', e.config);
        }
      }
      function l$(n, t) {
        1 & n && (ct(0), Nt(1, ' searching... '), ut());
      }
      function c$(n, t) {
        if ((1 & n && (ct(0), Nt(1), ut()), 2 & n)) {
          const e = P(4);
          R(1), Ri(' ', e.config.noResultMessage, ' ');
        }
      }
      function u$(n, t) {
        if (
          (1 & n &&
            (z(0, 'span', 18),
            H(1, l$, 2, 0, 'ng-container', 0),
            H(2, c$, 2, 1, 'ng-container', 0),
            Y()),
          2 & n)
        ) {
          const e = P(3);
          R(1), S('ngIf', e.searching), R(1), S('ngIf', !e.searching);
        }
      }
      function d$(n, t) {
        if ((1 & n && lt(0, 'img', 24), 2 & n)) {
          const e = P().$implicit;
          S('src', e.model.imageUrl, ga)('alt', e.model.displayName);
        }
      }
      function f$(n, t) {
        1 & n && Vr(0);
      }
      const ec = function (n) {
        return {$implicit: n};
      };
      function h$(n, t) {
        if (
          (1 & n && (ct(0), H(1, f$, 1, 0, 'ng-container', 27), ut()), 2 & n)
        ) {
          const e = P().$implicit,
            i = P(5);
          R(1),
            S('ngTemplateOutlet', i.subtitleTemplate)(
              'ngTemplateOutletContext',
              Ks(2, ec, e),
            );
        }
      }
      function p$(n, t) {
        if ((1 & n && lt(0, 'p', 28), 2 & n)) {
          const e = P().$implicit,
            i = P(5);
          S(
            'innerHTML',
            i.boldString(e[i.config.displayPropertyName], i.searchBoxInput),
            yu,
          );
        }
      }
      function g$(n, t) {
        1 & n && Vr(0);
      }
      function m$(n, t) {
        if (
          (1 & n && (ct(0), H(1, g$, 1, 0, 'ng-container', 27), ut()), 2 & n)
        ) {
          const e = P().$implicit,
            i = P(5);
          R(1),
            S('ngTemplateOutlet', i.titleTemplate)(
              'ngTemplateOutletContext',
              Ks(2, ec, e),
            );
        }
      }
      function _$(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'li', 25),
            ve('mousedown', function (r) {
              const o = pt(e).$implicit;
              return P(5).populateValue(o, r);
            }),
            H(1, h$, 2, 4, 'ng-container', 0),
            H(2, p$, 1, 1, 'p', 26),
            H(3, m$, 2, 4, 'ng-container', 0),
            Y();
        }
        if (2 & n) {
          const e = P(5);
          R(1),
            S('ngIf', e.subtitleTemplate),
            R(1),
            S('ngIf', !e.titleTemplate),
            R(1),
            S('ngIf', e.titleTemplate);
        }
      }
      function y$(n, t) {
        if (
          (1 & n &&
            (z(0, 'div', 20)(1, 'h3', 21),
            H(2, d$, 1, 2, 'img', 22),
            Nt(3),
            Y(),
            z(4, 'ul'),
            H(5, _$, 4, 3, 'li', 23),
            Y()()),
          2 & n)
        ) {
          const e = t.$implicit;
          R(2),
            S('ngIf', e.model.imageUrl),
            R(1),
            od(' ', e.model.displayName, ' (', e.items.length, ') '),
            R(2),
            S('ngForOf', e.items);
        }
      }
      function v$(n, t) {
        if ((1 & n && (ct(0), H(1, y$, 6, 4, 'div', 19), ut()), 2 & n)) {
          const e = P(3);
          R(1), S('ngForOf', e.getModelsWithSuggestions());
        }
      }
      function b$(n, t) {
        if ((1 & n && lt(0, 'img', 32), 2 & n)) {
          const e = P().$implicit;
          S('src', P(4).fetchModelImageUrlFromSuggestion(e), ga);
        }
      }
      function C$(n, t) {
        1 & n && Vr(0);
      }
      function w$(n, t) {
        if (
          (1 & n && (ct(0), H(1, C$, 1, 0, 'ng-container', 27), ut()), 2 & n)
        ) {
          const e = P().$implicit,
            i = P(4);
          R(1),
            S('ngTemplateOutlet', i.subtitleTemplate)(
              'ngTemplateOutletContext',
              Ks(2, ec, e),
            );
        }
      }
      function D$(n, t) {
        if ((1 & n && lt(0, 'p', 28), 2 & n)) {
          const e = P().$implicit,
            i = P(4);
          S(
            'innerHTML',
            i.boldString(e[i.config.displayPropertyName], i.searchBoxInput),
            yu,
          );
        }
      }
      function E$(n, t) {
        1 & n && Vr(0);
      }
      function x$(n, t) {
        if (
          (1 & n && (ct(0), H(1, E$, 1, 0, 'ng-container', 27), ut()), 2 & n)
        ) {
          const e = P().$implicit,
            i = P(4);
          R(1),
            S('ngTemplateOutlet', i.titleTemplate)(
              'ngTemplateOutletContext',
              Ks(2, ec, e),
            );
        }
      }
      function M$(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'li', 30),
            ve('mousedown', function (r) {
              const o = pt(e).$implicit;
              return P(4).populateValue(o, r);
            }),
            H(1, b$, 1, 1, 'img', 31),
            H(2, w$, 2, 4, 'ng-container', 0),
            H(3, D$, 1, 1, 'p', 26),
            H(4, x$, 2, 4, 'ng-container', 0),
            Y();
        }
        if (2 & n) {
          const e = t.$implicit,
            i = P(4);
          R(1),
            S(
              'ngIf',
              !i.titleTemplate && i.fetchModelImageUrlFromSuggestion(e),
            ),
            R(1),
            S('ngIf', i.subtitleTemplate),
            R(1),
            S('ngIf', !i.titleTemplate),
            R(1),
            S('ngIf', i.titleTemplate);
        }
      }
      function A$(n, t) {
        if (
          (1 & n &&
            (ct(0),
            z(1, 'div', 20)(2, 'ul'),
            H(3, M$, 5, 4, 'li', 29),
            Y()(),
            ut()),
          2 & n)
        ) {
          const e = P(3);
          R(3), S('ngForOf', e.suggestions);
        }
      }
      function S$(n, t) {
        if (
          (1 & n &&
            (ct(0),
            H(1, u$, 3, 2, 'span', 17),
            H(2, v$, 2, 1, 'ng-container', 0),
            H(3, A$, 4, 1, 'ng-container', 0),
            ut()),
          2 & n)
        ) {
          const e = P(2);
          R(1),
            S('ngIf', 0 === e.suggestions.length),
            R(1),
            S('ngIf', e.config.categorizeResults && e.suggestions.length),
            R(1),
            S('ngIf', !e.config.categorizeResults);
        }
      }
      function I$(n, t) {
        if (1 & n) {
          const e = jn();
          z(0, 'li', 25),
            ve('mousedown', function (r) {
              const o = pt(e).$implicit;
              return P(3).populateValueRecentSearch(o, r);
            }),
            lt(1, 'mat-icon', 8),
            z(2, 'span'),
            Nt(3),
            Y()();
        }
        if (2 & n) {
          const e = t.$implicit,
            i = P(3);
          R(1),
            S('className', i.config.recentSearchIconClass),
            R(2),
            Ri('\xa0', e.match, '');
        }
      }
      function T$(n, t) {
        if (
          (1 & n &&
            (ct(0),
            z(1, 'div', 33)(2, 'h3', 21),
            Nt(3, 'Recent Searches'),
            Y(),
            z(4, 'ul'),
            H(5, I$, 4, 2, 'li', 23),
            Y()(),
            ut()),
          2 & n)
        ) {
          const e = P(2);
          R(5), S('ngForOf', e.recentSearches);
        }
      }
      function F$(n, t) {
        if (
          (1 & n &&
            (z(0, 'div', 16),
            H(1, S$, 4, 3, 'ng-container', 0),
            H(2, T$, 6, 1, 'ng-container', 0),
            Y()),
          2 & n)
        ) {
          const e = P();
          R(1),
            S('ngIf', e.searchBoxInput),
            R(1),
            S(
              'ngIf',
              !e.config.hideRecentSearch && e.recentSearches.length > 0,
            );
        }
      }
      const Xi = 'All';
      let O$ = (() => {
        class n {
          constructor(e, i, r, s) {
            (this.searchService = e),
              (this.platformId = i),
              (this.cdr = r),
              (this.promiseAdapter = s),
              (this.searchBoxInput = ''),
              (this.suggestionsDisplay = !1),
              (this.categoryDisplay = !1),
              (this.searching = !1),
              (this.suggestions = []),
              (this.recentSearches = []),
              (this.category = Xi),
              (this.searchRequest$ = new de()),
              (this.customAllLabel = Xi),
              (this.showOnlySearchResultOverlay = !1),
              (this.customSearchEvent = {
                searchValue: '',
                modelName: this.customAllLabel,
              }),
              (this.clicked = new ce()),
              (this.searched = new ce()),
              (this.onChange = () => {}),
              (this.onTouched = () => {}),
              (this.disabled = !1);
          }
          get config() {
            return this._config;
          }
          set config(e) {
            (this._config = e),
              e && e.models
                ? e.models.unshift({name: Xi, displayName: Xi})
                : e && !e.models && (e.models = [{name: Xi, displayName: Xi}]);
          }
          set searchProvider(e) {
            (function KG(n) {
              return !!n.searchApiRequestWithPromise;
            })(e) && (e = this.promiseAdapter.adapt(e)),
              (this.searchService = e);
          }
          get searchProvider() {
            return this.searchService;
          }
          ngOnInit() {
            this.searchRequest$
              .pipe(
                Kr(e => (this.suggestions = [])),
                Qf(1e3),
              )
              .subscribe(e => {
                this.searched.emit({
                  event: e.event,
                  keyword: e.input,
                  category: this.category,
                }),
                  this.getSuggestions(e),
                  this.cdr.markForCheck();
              });
          }
          writeValue(e) {
            this.searchBoxInput = e;
          }
          registerOnChange(e) {
            this.onChange = e;
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this.disabled = e;
          }
          getSuggestions(e) {
            var i, r, s, o, a;
            if (((e.input = e.input.trim()), !e.input.length)) return;
            const l = null !== (i = this.config.order) && void 0 !== i ? i : XG;
            let c = '';
            l.forEach(f => (c = `${c}${f} `));
            let u =
              null === (r = this.config.saveInRecents) || void 0 === r || r;
            this.config.saveInRecents &&
              this.config.saveInRecentsOnlyOnEnter &&
              (u =
                !e.event ||
                (e.event instanceof KeyboardEvent && 'Enter' === e.event.key));
            const d = {
              match: e.input,
              sources: this._categoryToSourceName(this.category),
              limit: null !== (s = this.config.limit) && void 0 !== s ? s : 20,
              limitByType:
                null !== (o = this.config.limitByType) && void 0 !== o && o,
              order: c,
              offset: null !== (a = this.config.offset) && void 0 !== a ? a : 0,
            };
            (this.searching = !0),
              this.cdr.markForCheck(),
              this.searchService.searchApiRequest(d, u).subscribe(
                f => {
                  (this.suggestions = f),
                    (this.searching = !1),
                    this.cdr.markForCheck();
                },
                f => {
                  (this.suggestions = []),
                    (this.searching = !1),
                    this.cdr.markForCheck();
                },
              );
          }
          getRecentSearches() {
            !this.config.hideRecentSearch &&
              this.searchService.recentSearchApiRequest &&
              this.searchService.recentSearchApiRequest().subscribe(
                e => {
                  (this.recentSearches = e), this.cdr.markForCheck();
                },
                e => {
                  (this.recentSearches = []), this.cdr.markForCheck();
                },
              );
          }
          hitSearchApi(e) {
            if (!this.searchBoxInput)
              return (this.suggestions = []), void this.getRecentSearches();
            this.config.searchOnlyOnEnter
              ? (!e || (e instanceof KeyboardEvent && 'Enter' === e.key)) &&
                this.getSuggestions({input: this.searchBoxInput, event: e})
              : e
              ? this.searchRequest$.next({input: this.searchBoxInput, event: e})
              : this.getSuggestions({input: this.searchBoxInput, event: e});
          }
          populateValue(e, i) {
            (this.searchBoxInput = e[this.config.displayPropertyName]),
              (this.suggestionsDisplay = !1),
              this.onChange(this.searchBoxInput),
              this.getSuggestions({input: this.searchBoxInput, event: i}),
              this.clicked.emit({item: e, event: i});
          }
          populateValueRecentSearch(e, i) {
            i.stopPropagation(),
              i.preventDefault(),
              (this.searchBoxInput = e.match),
              (this.suggestionsDisplay = !1),
              this.onChange(this.searchBoxInput),
              this.getSuggestions({input: this.searchBoxInput, event: i}),
              this.focusInput(),
              this.showSuggestions();
          }
          fetchModelImageUrlFromSuggestion(e) {
            const i = e.source;
            let r;
            return (
              this.config.models.forEach(s => {
                s.name === i && s.imageUrl && (r = s.imageUrl);
              }),
              r
            );
          }
          boldString(e, i) {
            const r = new RegExp(`(${i})`, 'gi');
            return e.replace(r, '<b>$1</b>');
          }
          hideSuggestions() {
            (this.suggestionsDisplay = !1), this.onTouched();
          }
          showSuggestions() {
            (this.suggestionsDisplay = !0), this.getRecentSearches();
          }
          focusInput() {
            ci(this.platformId) &&
              !this.showOnlySearchResultOverlay &&
              this.searchInputElement.nativeElement.focus();
          }
          setCategory(e) {
            (this.category = e),
              (this.categoryDisplay = !1),
              this.searchBoxInput &&
                (this.hitSearchApi(),
                this.focusInput(),
                this.showSuggestions());
          }
          showCategory() {
            this.categoryDisplay = !this.categoryDisplay;
          }
          hideCategory() {
            this.categoryDisplay = !1;
          }
          resetInput() {
            (this.searchBoxInput = ''),
              (this.suggestions = []),
              (this.suggestionsDisplay = !0),
              this.focusInput(),
              this.onChange(this.searchBoxInput),
              this.getRecentSearches();
          }
          ngOnDestroy() {
            this.searchRequest$.unsubscribe();
          }
          _categoryToSourceName(e) {
            return [Xi, this.customAllLabel].includes(e) ? [] : [e];
          }
          getModelFromModelName(e) {
            return this.config.models.find(i => i.name === e);
          }
          getModelsWithSuggestions() {
            const e = [],
              i = [];
            return (
              this.suggestions.forEach(r => {
                if (i.indexOf(r.source) >= 0)
                  e.every(
                    s => s.model.name !== r.source || (s.items.push(r), !1),
                  );
                else {
                  const s = this.getModelFromModelName(r.source);
                  e.push({model: s, items: [r]}), i.push(r.source);
                }
              }),
              e
            );
          }
          ngOnChanges(e) {
            var i, r, s, o;
            e.customSearchEvent &&
              (this._isCustomSearchEventChange(e, 'searchValue') &&
                ((this.searchBoxInput =
                  null !==
                    (r =
                      null === (i = this.customSearchEvent) || void 0 === i
                        ? void 0
                        : i.searchValue) && void 0 !== r
                    ? r
                    : ''),
                this.searchOnCustomEventValueChange(this.searchBoxInput)),
              this._isCustomSearchEventChange(e, 'modelName') &&
                (null === (s = this.customSearchEvent) || void 0 === s
                  ? void 0
                  : s.modelName) &&
                this.setCategory(
                  null === (o = this.customSearchEvent) || void 0 === o
                    ? void 0
                    : o.modelName,
                ));
          }
          searchOnCustomEventValueChange(e) {
            (null == e ? void 0 : e.length)
              ? (this.showSuggestions(), this.hitSearchApi())
              : this.hideSuggestions();
          }
          _isCustomSearchEventChange(e, i) {
            var r, s, o;
            return (
              !(null === (r = e.customSearchEvent) || void 0 === r
                ? void 0
                : r.previousValue) ||
              (null === (s = e.customSearchEvent) || void 0 === s
                ? void 0
                : s.previousValue[i]) !==
                (null === (o = e.customSearchEvent) || void 0 === o
                  ? void 0
                  : o.currentValue[i])
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(p(YG, 8), p(Vt), p(Li), p(n$));
          }),
          (n.ɵcmp = Jn({
            type: n,
            selectors: [['sourceloop-search']],
            viewQuery: function (e, i) {
              if ((1 & e && li(i$, 5), 2 & e)) {
                let r;
                Be((r = He())) && (i.searchInputElement = r.first);
              }
            },
            inputs: {
              config: 'config',
              searchProvider: 'searchProvider',
              titleTemplate: 'titleTemplate',
              subtitleTemplate: 'subtitleTemplate',
              customAllLabel: 'customAllLabel',
              showOnlySearchResultOverlay: 'showOnlySearchResultOverlay',
              customSearchEvent: 'customSearchEvent',
            },
            outputs: {clicked: 'clicked', searched: 'searched'},
            features: [ue([{provide: mn, useExisting: n, multi: !0}]), ht],
            decls: 3,
            vars: 2,
            consts: [
              [4, 'ngIf'],
              [1, 'search-container'],
              ['class', 'search-popup', 4, 'ngIf'],
              [
                'fxLayout',
                '',
                'fxLayoutAlign',
                'start center',
                'class',
                'toolbar-search',
                4,
                'ngIf',
              ],
              [
                'fxLayout',
                '',
                'fxLayoutAlign',
                'start center',
                1,
                'toolbar-search',
              ],
              ['appearance', 'outline', 1, 'toolbar-search-input'],
              [
                'matInput',
                '',
                'autocomplete',
                'off',
                'type',
                'text',
                'name',
                'searchInput',
                'placeholder',
                'Search',
                3,
                'placeholder',
                'ngModel',
                'disabled',
                'focus',
                'blur',
                'ngModelChange',
                'keyup',
              ],
              ['searchInput', ''],
              ['matPrefix', '', 3, 'className'],
              ['matSuffix', '', 3, 'className', 'click', 4, 'ngIf'],
              ['appearance', 'outline', 1, 'toolbar-search-select'],
              ['matSuffix', '', 3, 'className'],
              ['panelClass', 'search-select', 3, 'value', 'selectionChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              ['matSuffix', '', 3, 'className', 'click'],
              [3, 'value'],
              [1, 'search-popup'],
              ['class', 'search-message', 4, 'ngIf'],
              [1, 'search-message'],
              ['class', 'search-result', 4, 'ngFor', 'ngForOf'],
              [1, 'search-result'],
              [1, 'suggestions-heading'],
              [3, 'src', 'alt', 4, 'ngIf'],
              ['class', 'suggestions', 3, 'mousedown', 4, 'ngFor', 'ngForOf'],
              [3, 'src', 'alt'],
              [1, 'suggestions', 3, 'mousedown'],
              ['style', 'display: inline', 3, 'innerHTML', 4, 'ngIf'],
              [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              [2, 'display', 'inline', 3, 'innerHTML'],
              [3, 'mousedown', 4, 'ngFor', 'ngForOf'],
              [3, 'mousedown'],
              [
                'class',
                'suggestions-categorize-false',
                'style',
                'margin-right: 5px',
                'alt',
                'Img',
                3,
                'src',
                4,
                'ngIf',
              ],
              [
                'alt',
                'Img',
                1,
                'suggestions-categorize-false',
                2,
                'margin-right',
                '5px',
                3,
                'src',
              ],
              [1, 'recent-searches'],
            ],
            template: function (e, i) {
              1 & e &&
                (H(0, a$, 2, 1, 'ng-container', 0),
                z(1, 'div', 1),
                H(2, F$, 3, 2, 'div', 2),
                Y()),
                2 & e &&
                  (S('ngIf', !i.showOnlySearchResultOverlay),
                  R(2),
                  S(
                    'ngIf',
                    i.suggestionsDisplay &&
                      (i.recentSearches.length || i.suggestions.length),
                  ));
            },
            directives: [
              Xa,
              cC,
              hC,
              tj,
              Cj,
              cl,
              ZC,
              Hf,
              pj,
              QH,
              ZH,
              TG,
              ib,
              jD,
              lb,
            ],
            styles: [
              '[_nghost-%COMP%]     .mat-form-field-wrapper{padding:0}[_nghost-%COMP%]     .mat-form-field-wrapper .mat-form-field-prefix{margin-right:12px}.toolbar-search-input[_ngcontent-%COMP%]{width:86%}.toolbar-search-input[_ngcontent-%COMP%]     input{margin:0}.toolbar-search-input[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-outline:first-child .mat-form-field-outline-start{border-color:transparent}.toolbar-search-input[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-outline:first-child .mat-form-field-outline-end{border:none;border-radius:0}.icomoon.Search[_ngcontent-%COMP%], .icomoon.close[_ngcontent-%COMP%]{height:1rem;width:1rem;font-size:1rem;color:#33333380;padding-bottom:4px}.icomoon.close[_ngcontent-%COMP%]{cursor:pointer}.toolbar-search-select[_ngcontent-%COMP%]{width:14%}.toolbar-search-select[_ngcontent-%COMP%]     .mat-select-arrow{opacity:0}.toolbar-search-select[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{display:inline-block;width:1px}.toolbar-search-select[_ngcontent-%COMP%]     .mat-select-value-text{font-size:9px}.toolbar-search-select[_ngcontent-%COMP%]     .mat-form-field-suffix .mat-icon{width:12px;font-size:14px}.toolbar-search-select[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-outline:first-child .mat-form-field-outline-start{border-color:transparent;border-radius:0}.toolbar-search-select[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-outline:first-child .mat-form-field-outline-end{border:none}.toolbar-search-select[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-infix{-webkit-padding-before:.7em}.toolbar-search[_ngcontent-%COMP%]{width:515px;background-color:#f7f7f7;border-radius:0 0 4px 4px}.toolbar-search[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex{height:39px;align-items:center}.toolbar-search[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:0}.toolbar-search[_ngcontent-%COMP%]     .mat-form-field-infix{height:auto}.search-container[_ngcontent-%COMP%]{position:relative;width:515px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]{padding:0 15px 15px;margin:0;max-height:80vh;overflow-x:hidden;overflow-y:auto;position:absolute;top:100%;left:0;right:0;z-index:9999;background-color:#fff;box-shadow:0 5px 4px #0003;border-radius:0 0 4px 4px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:0;border-top:1px solid #ebebeb;margin:0;position:sticky;top:0;padding:0 0 15px;z-index:1}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-message[_ngcontent-%COMP%]{display:inline-block;width:100%;text-align:center;font-size:16px;padding-top:12px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-item-info[_ngcontent-%COMP%]{color:#91263b;text-align:center;font-size:12px;margin-bottom:15px;padding-top:12px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;font-size:1rem;font-weight:400;line-height:1.5;color:#333}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.suggestions[_ngcontent-%COMP%]{font-size:15px;line-height:36px;padding:0 15px 0 44px;align-items:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.suggestions[_ngcontent-%COMP%]:hover{background-color:#fee8e8}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.suggestions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:5px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.suggestions-categorize-false[_ngcontent-%COMP%]:hover{background-color:#fee8e8}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]{padding:10px 0 0;margin:0 -15px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-result.no-categorize-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;padding:0;margin:0 0 10px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-result.no-categorize-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:15px;line-height:36px;padding:0 15px 0 31px;display:flex;align-items:center;cursor:pointer}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-result.no-categorize-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#fee8e8}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .search-result.no-categorize-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;margin-right:9px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .suggestions-heading[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px;font-weight:400;margin:0 0 10px 17px;display:flex;align-items:center;position:relative}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .suggestions-heading[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]{position:absolute;right:20px;color:#d1d1d1;font-size:12px;cursor:pointer;text-decoration:none}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .suggestions-heading[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{text-decoration:underline}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .suggestions-heading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;margin-right:9px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]{padding:10px 0 0;margin:0 -15px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:inline-block;width:100%}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.suggestions[_ngcontent-%COMP%]{display:flex}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.suggestions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]{display:flex}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]   .suggestions-heading[_ngcontent-%COMP%]{margin-left:30px}.search-container[_ngcontent-%COMP%]   .search-popup[_ngcontent-%COMP%]   .recent-searches[_ngcontent-%COMP%]   li.suggestions[_ngcontent-%COMP%]{padding-left:31px}  .search-select.mat-select-panel{margin-top:30px;margin-left:10px}  .search-select .mat-option-text{display:contents}  .toolbar-search .mat-form-field-infix{font-size:14px}  .toolbar-search input{line-height:14px}  .toolbar-search .mat-form-field-outline:first-child .mat-form-field-outline-start,   .toolbar-search .mat-form-field-outline:first-child .mat-form-field-outline-end{background-color:#f1f3f4}  .toolbar-search:hover .toolbar-search-input.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-start{border-width:1px;border-color:#a53159}  .toolbar-search:hover .toolbar-search-input.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-end{border:1px solid #a53159;border-left-style:none;border-right-style:none;border-top-right-radius:0;border-bottom-right-radius:0}  .toolbar-search:hover .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-start{border-radius:0;border-color:transparent;background-color:#a53159}  .toolbar-search:hover .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-end{border-width:1px;border-color:#a53159;background-color:#a53159}  .toolbar-search:hover .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .mat-select{color:#fff}  .toolbar-search:hover .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .icomoon.arrow_down{color:#fff}  .toolbar-search:focus-within .toolbar-search-input.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-start{border-width:2px;border-color:#90003b}  .toolbar-search:focus-within .toolbar-search-input.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-end{border:2px solid #90003b;border-left-style:none;border-right-style:none;border-top-right-radius:0;border-bottom-right-radius:0}  .toolbar-search:focus-within .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-start{border-radius:0;border-color:transparent;background-color:#90003b}  .toolbar-search:focus-within .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .mat-form-field-outline .mat-form-field-outline-end{border-width:2px;border-color:#90003b;background-color:#90003b}  .toolbar-search:focus-within .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .mat-select{color:#fff}  .toolbar-search:focus-within .toolbar-search-select.mat-form-field:not(.mat-form-field-disabled) .icomoon.arrow_down{color:#fff}  .toolbar-search .mat-select-arrow{opacity:0}',
            ],
          })),
          n
        );
      })();
      class R$ {
        constructor(t) {
          (function k$(n) {
            if (
              !1 === n.categorizeResults &&
              (!1 === n.hideCategorizeButton ||
                void 0 === n.hideCategorizeButton)
            )
              throw new Error(
                'You must provide hideCategorizeButton:true as categorizeResults is false',
              );
            if (!1 === n.saveInRecents && !0 === n.saveInRecentsOnlyOnEnter)
              throw new Error(
                'You must provide saveInRecents:true for saveInRecentsOnlyOnEnter:true',
              );
          })(t),
            (this.displayPropertyName = t.displayPropertyName),
            (this.models = t.models),
            (this.limit = t.limit),
            (this.limitByType = t.limitByType),
            (this.order = t.order),
            (this.offset = t.offset),
            (this.saveInRecents = t.saveInRecents);
          const e = (function P$(n) {
            var t, e;
            return {
              placeholder:
                null !== (t = n.placeholder) && void 0 !== t ? t : 'Search',
              noResultMessage:
                null !== (e = n.noResultMessage) && void 0 !== e
                  ? e
                  : 'No result found',
              placeholderFunction: n.placeholderFunction,
            };
          })(t);
          (this.noResultMessage = e.noResultMessage),
            (this.placeholder = e.placeholder),
            (this.placeholderFunction = e.placeholderFunction);
          const i = (function N$(n) {
            var t, e, i, r, s;
            return {
              categorizeResults:
                null === (t = n.categorizeResults) || void 0 === t || t,
              hideRecentSearch:
                null !== (e = n.hideRecentSearch) && void 0 !== e && e,
              hideCategorizeButton:
                null !== (i = n.hideCategorizeButton) && void 0 !== i && i,
              saveInRecentsOnlyOnEnter:
                null !== (r = n.saveInRecentsOnlyOnEnter) && void 0 !== r && r,
              searchOnlyOnEnter:
                null !== (s = n.searchOnlyOnEnter) && void 0 !== s && s,
            };
          })(t);
          (this.categorizeResults = i.categorizeResults),
            (this.hideRecentSearch = i.hideRecentSearch),
            (this.hideCategorizeButton = i.hideCategorizeButton),
            (this.saveInRecentsOnlyOnEnter = i.saveInRecentsOnlyOnEnter),
            (this.searchOnlyOnEnter = i.searchOnlyOnEnter);
          const r = (function L$(n) {
            var t, e, i, r;
            return {
              searchIconClass:
                null !== (t = n.searchIconClass) && void 0 !== t
                  ? t
                  : 'icomoon Search',
              crossIconClass:
                null !== (e = n.crossIconClass) && void 0 !== e
                  ? e
                  : 'icomoon close',
              dropDownButtonIconClass:
                null !== (i = n.dropDownButtonIconClass) && void 0 !== i
                  ? i
                  : 'icomoon arrow_down',
              recentSearchIconClass:
                null !== (r = n.recentSearchIconClass) && void 0 !== r
                  ? r
                  : 'icomoon Search',
            };
          })(t);
          (this.searchIconClass = r.searchIconClass),
            (this.crossIconClass = r.crossIconClass),
            (this.dropDownButtonIconClass = r.dropDownButtonIconClass),
            (this.recentSearchIconClass = r.recentSearchIconClass);
        }
      }
      let V$ = (() => {
        class n {
          constructor(e) {
            this.injector = e;
          }
          ngDoBootstrap() {
            const e = (function qG(n, t) {
              const e = (function HG(n, t) {
                  return t.get(Pi).resolveComponentFactory(n).inputs;
                })(n, t.injector),
                i = t.strategyFactory || new UG(n, t.injector),
                r = (function BG(n) {
                  const t = {};
                  return (
                    n.forEach(({propName: e, templateName: i}) => {
                      t[
                        (function kG(n) {
                          return n.replace(
                            /[A-Z]/g,
                            t => `-${t.toLowerCase()}`,
                          );
                        })(i)
                      ] = e;
                    }),
                    t
                  );
                })(e);
              class s extends WG {
                constructor(a) {
                  super(), (this.injector = a);
                }
                get ngElementStrategy() {
                  if (!this._ngElementStrategy) {
                    const a = (this._ngElementStrategy = i.create(
                      this.injector || t.injector,
                    ));
                    e.forEach(({propName: l}) => {
                      if (!this.hasOwnProperty(l)) return;
                      const c = this[l];
                      delete this[l], a.setInputValue(l, c);
                    });
                  }
                  return this._ngElementStrategy;
                }
                attributeChangedCallback(a, l, c, u) {
                  this.ngElementStrategy.setInputValue(r[a], c);
                }
                connectedCallback() {
                  let a = !1;
                  this.ngElementStrategy.events &&
                    (this.subscribeToEvents(), (a = !0)),
                    this.ngElementStrategy.connect(this),
                    a || this.subscribeToEvents();
                }
                disconnectedCallback() {
                  this._ngElementStrategy &&
                    this._ngElementStrategy.disconnect(),
                    this.ngElementEventsSubscription &&
                      (this.ngElementEventsSubscription.unsubscribe(),
                      (this.ngElementEventsSubscription = null));
                }
                subscribeToEvents() {
                  this.ngElementEventsSubscription =
                    this.ngElementStrategy.events.subscribe(a => {
                      const l = new CustomEvent(a.name, {detail: a.value});
                      this.dispatchEvent(l);
                    });
                }
              }
              return (
                (s.observedAttributes = Object.keys(r)),
                e.forEach(({propName: o}) => {
                  Object.defineProperty(s.prototype, o, {
                    get() {
                      return this.ngElementStrategy.getInputValue(o);
                    },
                    set(a) {
                      this.ngElementStrategy.setInputValue(o, a);
                    },
                    configurable: !0,
                    enumerable: !0,
                  });
                }),
                s
              );
            })(O$, {injector: this.injector});
            customElements.define('sourceloop-search-element', e),
              Object.assign(window, {SearchConfiguration: R$});
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(b(nt));
          }),
          (n.ɵmod = ae({type: n})),
          (n.ɵinj = re({
            imports: [[Db, eH, so, _V, Uk, FG, zl, gj, wj, OG, cL]],
          })),
          n
        );
      })();
      (function fO() {
        Fv = !1;
      })(),
        yk()
          .bootstrapModule(V$)
          .catch(n => console.error(n));
    },
  },
  ie => {
    ie((ie.s = 312));
  },
]);
