require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[524],{

/***/ 2721:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2901);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9874);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _stores_user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9206);
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(729);








var App = /*#__PURE__*/function (_Component) {
  function App() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, App);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, App, arguments);
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(App, _Component);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _useUserStore$getStat = _stores_user_store__WEBPACK_IMPORTED_MODULE_1__/* .useUserStore */ .k.getState(),
        loadFromStorage = _useUserStore$getStat.loadFromStorage,
        isLoggedIn = _useUserStore$getStat.isLoggedIn;
      loadFromStorage();

      // 如果已登录，连接WebSocket
      _stores_user_store__WEBPACK_IMPORTED_MODULE_1__/* .useUserStore */ .k.subscribe(function (state) {
        if (state.isLoggedIn && state.currentFamily) {
          (0,_services_socket__WEBPACK_IMPORTED_MODULE_2__/* .connectSocket */ .cH)();
        } else {
          (0,_services_socket__WEBPACK_IMPORTED_MODULE_2__/* .disconnectSocket */ .G1)();
        }
      });
      if (isLoggedIn) {
        (0,_services_socket__WEBPACK_IMPORTED_MODULE_2__/* .connectSocket */ .cH)();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0,_services_socket__WEBPACK_IMPORTED_MODULE_2__/* .disconnectSocket */ .G1)();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__.A = (App);

/***/ }),

/***/ 1291:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ND: function() { return /* binding */ createReactApp; }
/* harmony export */ });
/* unused harmony exports connectReactPage, createH5NativeComponentConfig, createNativeComponentConfig, createNativePageConfig, setReconciler, useAddToFavorites, useDidHide, useDidShow, useError, useLaunch, useLoad, useOptionMenuClick, usePageNotFound, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useSaveExitState, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, useUnhandledRejection, useUnload */
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4467);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3453);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2901);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9874);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5501);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9394);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7842);









var reactMeta = {
  PageContext: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ,
  R: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ
};
var HOOKS_APP_ID = 'taro-app';
function isClassComponent(R, component) {
  var _a;
  var prototype = component.prototype;
  // For React Redux
  if ((_a = component.displayName) === null || _a === void 0 ? void 0 : _a.includes('Connect')) return false;
  return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(component.render) || !!(prototype === null || prototype === void 0 ? void 0 : prototype.isReactComponent) || prototype instanceof R.Component // compat for some others react-like library
;
}
function ensureIsArray(item) {
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(item)) {
    return item;
  } else {
    return item ? [item] : [];
  }
}
/**
 * set writable, enumerable to true
 */
function setDefaultDescriptor(obj) {
  obj.writable = true;
  obj.enumerable = true;
  return obj;
}
/**
 * 设置入口的路由参数
 * @param options 小程序传入的参数
 */
function setRouterParams(options) {
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router = Object.assign({
    params: options === null || options === void 0 ? void 0 : options.query
  }, options);
}
var createTaroHook = function createTaroHook(lifecycle) {
  return function (fn) {
    var React = reactMeta.R,
      PageContext = reactMeta.PageContext;
    var id = React.useContext(PageContext) || HOOKS_APP_ID;
    var instRef = React.useRef();
    // hold fn ref and keep up to date
    var fnRef = React.useRef(fn);
    if (fnRef.current !== fn) fnRef.current = fn;
    React.useLayoutEffect(function () {
      var inst = instRef.current = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(id);
      var first = false;
      if (!inst) {
        first = true;
        instRef.current = Object.create(null);
        inst = instRef.current;
      }
      // callback is immutable but inner function is up to date
      var callback = function callback() {
        return fnRef.current.apply(fnRef, arguments);
      };
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(inst[lifecycle])) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else {
        inst[lifecycle] = [].concat((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(inst[lifecycle] || []), [callback]);
      }
      if (first) {
        (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(inst, id);
      }
      return function () {
        var inst = instRef.current;
        if (!inst) return;
        var list = inst[lifecycle];
        if (list === callback) {
          inst[lifecycle] = undefined;
        } else if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(list)) {
          inst[lifecycle] = list.filter(function (item) {
            return item !== callback;
          });
        }
        instRef.current = undefined;
      };
    }, []);
  };
};
/** LifeCycle */
var useDidHide = createTaroHook('componentDidHide');
var useDidShow = createTaroHook('componentDidShow');
/** App */
var useError = createTaroHook('onError');
var useUnhandledRejection = createTaroHook('onUnhandledRejection');
var useLaunch = createTaroHook('onLaunch');
var usePageNotFound = createTaroHook('onPageNotFound');
/** Page */
var useLoad = createTaroHook('onLoad');
var usePageScroll = createTaroHook('onPageScroll');
var usePullDownRefresh = createTaroHook('onPullDownRefresh');
var usePullIntercept = createTaroHook('onPullIntercept');
var useReachBottom = createTaroHook('onReachBottom');
var useResize = createTaroHook('onResize');
var useUnload = createTaroHook('onUnload');
/** Mini-Program */
var useAddToFavorites = createTaroHook('onAddToFavorites');
var useOptionMenuClick = createTaroHook('onOptionMenuClick');
var useSaveExitState = createTaroHook('onSaveExitState');
var useShareAppMessage = createTaroHook('onShareAppMessage');
var useShareTimeline = createTaroHook('onShareTimeline');
var useTitleClick = createTaroHook('onTitleClick');
/** Router */
var useReady = createTaroHook('onReady');
var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var React = reactMeta.R;
  return dynamic ? _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router : React.useMemo(function () {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.router;
  }, []);
};
var useTabItemTap = createTaroHook('onTabItemTap');
var useScope = function useScope() {
  return undefined;
};
var taroHooks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useAddToFavorites: useAddToFavorites,
  useDidHide: useDidHide,
  useDidShow: useDidShow,
  useError: useError,
  useLaunch: useLaunch,
  useLoad: useLoad,
  useOptionMenuClick: useOptionMenuClick,
  usePageNotFound: usePageNotFound,
  usePageScroll: usePageScroll,
  usePullDownRefresh: usePullDownRefresh,
  usePullIntercept: usePullIntercept,
  useReachBottom: useReachBottom,
  useReady: useReady,
  useResize: useResize,
  useRouter: useRouter,
  useSaveExitState: useSaveExitState,
  useScope: useScope,
  useShareAppMessage: useShareAppMessage,
  useShareTimeline: useShareTimeline,
  useTabItemTap: useTabItemTap,
  useTitleClick: useTitleClick,
  useUnhandledRejection: useUnhandledRejection,
  useUnload: useUnload
});
var h$1;
var ReactDOM$1;
var Fragment;
var pageKeyId = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.incrementId)();
function setReconciler(ReactDOM) {
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.tap('getLifecycle', function (instance, lifecycle) {
    lifecycle = lifecycle.replace(/^on(Show|Hide)$/, 'componentDid$1');
    return instance[lifecycle];
  });
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.tap('modifyMpEvent', function (event) {
    // Note: ohos 上事件没有设置 type 类型 setter 方法导致报错
    Object.defineProperty(event, 'type', {
      value: event.type.replace(/-/g, '')
    });
  });
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.tap('batchedEventUpdates', function (cb) {
    ReactDOM.unstable_batchedUpdates(cb);
  });
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.tap('mergePageInstance', function (prev, next) {
    if (!prev || !next) return;
    // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
    // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
    if ('constructor' in prev) return;
    Object.keys(prev).forEach(function (item) {
      var prevList = prev[item];
      var nextList = ensureIsArray(next[item]);
      next[item] = nextList.concat(prevList);
    });
  });
  if (false) {}
}
function connectReactPage(R, id) {
  return function (Page) {
    // eslint-disable-next-line dot-notation
    var isReactComponent = isClassComponent(R, Page);
    var inject = function inject(node) {
      return node && (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(node, id);
    };
    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject,
      // 兼容 react-redux 7.20.1+
      reactReduxForwardedRef: inject
    };
    if (reactMeta.PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ) {
      reactMeta.PageContext = R.createContext('');
    }
    return /*#__PURE__*/function (_R$Component) {
      function PageWrapper() {
        var _this;
        (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, PageWrapper);
        _this = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, PageWrapper, arguments);
        _this.state = {
          hasError: false
        };
        return _this;
      }
      (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(PageWrapper, _R$Component);
      return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(PageWrapper, [{
        key: "componentDidCatch",
        value:
        // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        function componentDidCatch(error, info) {
          if (false) {}
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h$1(reactMeta.PageContext.Provider, {
            value: id
          }, h$1(Page, Object.assign(Object.assign({}, this.props), refs)));
          if (false) {} else {
            return h$1('root', {
              id: id
            }, children);
          }
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
          var _a, _b;
          (_b = (_a = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error.message + error.stack);
          return {
            hasError: true
          };
        }
      }]);
    }(R.Component);
  };
}
/**
 * 桥接小程序 App 构造器和 React 渲染流程
 * @param App 用户编写的入口组件
 * @param react 框架
 * @param dom 框架渲染器
 * @param config 入口组件配置 app.config.js 的内容
 * @returns 传递给 App 构造器的对象 obj ：App(obj)
 */
function createReactApp(App, react, dom, config) {
  if (false) {}
  reactMeta.R = react;
  h$1 = react.createElement;
  ReactDOM$1 = dom;
  Fragment = react.Fragment;
  var appInstanceRef = react.createRef();
  var isReactComponent = isClassComponent(react, App);
  var appWrapper;
  var appWrapperResolver;
  var appWrapperPromise = new Promise(function (resolve) {
    return appWrapperResolver = resolve;
  });
  setReconciler(ReactDOM$1);
  function getAppInstance() {
    return appInstanceRef.current;
  }
  function waitAppWrapper(cb) {
    /**
     * 当同个事件触发多次时，waitAppWrapper 会出现同步和异步任务的执行顺序问题，
     * 导致某些场景下 onShow 会优于 onLaunch 执行
     */
    appWrapperPromise.then(function () {
      return cb();
    });
    // appWrapper ? cb() : appWrapperPromise.then(() => cb())
  }
  function renderReactRoot() {
    var _a, _b;
    var appId = (config === null || config === void 0 ? void 0 : config.appId) || 'app';
    var container = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById(appId);
    if (container == null) {
      var appContainer = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.getElementById(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.CONTAINER);
      container = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.document.createElement(appId);
      container.id = appId;
      appContainer === null || appContainer === void 0 ? void 0 : appContainer.appendChild(container);
    }
    if ((react.version || '').startsWith('18')) {
      var root = ReactDOM$1.createRoot(container);
      (_a = root.render) === null || _a === void 0 ? void 0 : _a.call(root, h$1(AppWrapper));
    } else {
      // eslint-disable-next-line react/no-deprecated
      (_b = ReactDOM$1.render) === null || _b === void 0 ? void 0 : _b.call(ReactDOM$1, h$1(AppWrapper), container);
    }
  }
  var AppWrapper = /*#__PURE__*/function (_react$Component) {
    function AppWrapper(props) {
      var _this2;
      (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, AppWrapper);
      _this2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, AppWrapper, [props]);
      // run createElement() inside the render function to make sure that owner is right
      _this2.pages = [];
      _this2.elements = [];
      appWrapper = _this2;
      appWrapperResolver(_this2);
      return _this2;
    }
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(AppWrapper, _react$Component);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(AppWrapper, [{
      key: "mount",
      value: function mount(pageComponent, id, cb) {
        var pageWrapper = connectReactPage(react, id)(pageComponent);
        var key = id + pageKeyId();
        var page = function page() {
          return h$1(pageWrapper, {
            key: key,
            tid: id
          });
        };
        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        var elements = this.elements;
        var idx = elements.findIndex(function (item) {
          return item.props.tid === id;
        });
        elements.splice(idx, 1);
        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        var pages = this.pages,
          elements = this.elements;
        while (pages.length > 0) {
          var page = pages.pop();
          elements.push(page());
        }
        var props = null;
        if (isReactComponent) {
          props = {
            ref: appInstanceRef
          };
        }
        return h$1(App, props,  false ? 0 : elements.slice());
      }
    }]);
  }(react.Component);
  if (true) {
    renderReactRoot();
  }
  var _hooks$call$app = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getMiniLifecycleImpl').app, 3),
    ONLAUNCH = _hooks$call$app[0],
    ONSHOW = _hooks$call$app[1],
    ONHIDE = _hooks$call$app[2];
  var appObj = Object.create({
    render: function render(cb) {
      appWrapper.forceUpdate(cb);
    },
    mount: function mount(component, id, cb) {
      if (appWrapper) {
        appWrapper.mount(component, id, cb);
      } else {
        appWrapperPromise.then(function (appWrapper) {
          return appWrapper.mount(component, id, cb);
        });
      }
    },
    unmount: function unmount(id, cb) {
      if (appWrapper) {
        appWrapper.unmount(id, cb);
      } else {
        appWrapperPromise.then(function (appWrapper) {
          return appWrapper.unmount(id, cb);
        });
      }
    }
  }, (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({
    config: setDefaultDescriptor({
      configurable: true,
      value: config
    })
  }, ONLAUNCH, setDefaultDescriptor({
    value: function value(options) {
      var _this3 = this;
      setRouterParams(options);
      if (false) {}
      var onLaunch = function onLaunch() {
        var _a;
        // 用户编写的入口组件实例
        var app = getAppInstance();
        _this3.$app = app;
        if (app) {
          // 把 App Class 上挂载的额外属性同步到全局 app 对象中
          if (app.taroGlobalData) {
            var globalData = app.taroGlobalData;
            var keys = Object.keys(globalData);
            var descriptors = Object.getOwnPropertyDescriptors(globalData);
            keys.forEach(function (key) {
              Object.defineProperty(_this3, key, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return globalData[key];
                },
                set: function set(value) {
                  globalData[key] = value;
                }
              });
            });
            Object.defineProperties(_this3, descriptors);
          }
          (_a = app.onLaunch) === null || _a === void 0 ? void 0 : _a.call(app, options);
        }
        triggerAppHook('onLaunch', options);
      };
      waitAppWrapper(onLaunch);
    }
  })), ONSHOW, setDefaultDescriptor({
    value: function value(options) {
      setRouterParams(options);
      var onShow = function onShow() {
        var _a;
        /**
        * trigger lifecycle
        */
        var app = getAppInstance();
        // class component, componentDidShow
        (_a = app === null || app === void 0 ? void 0 : app.componentDidShow) === null || _a === void 0 ? void 0 : _a.call(app, options);
        // functional component, useDidShow
        triggerAppHook('onShow', options);
      };
      waitAppWrapper(onShow);
    }
  })), ONHIDE, setDefaultDescriptor({
    value: function value() {
      var onHide = function onHide() {
        var _a;
        /**
         * trigger lifecycle
         */
        var app = getAppInstance();
        // class component, componentDidHide
        (_a = app === null || app === void 0 ? void 0 : app.componentDidHide) === null || _a === void 0 ? void 0 : _a.call(app);
        // functional component, useDidHide
        triggerAppHook('onHide');
      };
      waitAppWrapper(onHide);
    }
  })), "onError", setDefaultDescriptor({
    value: function value(error) {
      var onError = function onError() {
        var _a;
        var app = getAppInstance();
        (_a = app === null || app === void 0 ? void 0 : app.onError) === null || _a === void 0 ? void 0 : _a.call(app, error);
        triggerAppHook('onError', error);
        if (false) {}
      };
      waitAppWrapper(onError);
    }
  })), "onUnhandledRejection", setDefaultDescriptor({
    value: function value(res) {
      var onUnhandledRejection = function onUnhandledRejection() {
        var _a;
        var app = getAppInstance();
        (_a = app === null || app === void 0 ? void 0 : app.onUnhandledRejection) === null || _a === void 0 ? void 0 : _a.call(app, res);
        triggerAppHook('onUnhandledRejection', res);
      };
      waitAppWrapper(onUnhandledRejection);
    }
  })), "onPageNotFound", setDefaultDescriptor({
    value: function value(res) {
      var onPageNotFound = function onPageNotFound() {
        var _a;
        var app = getAppInstance();
        (_a = app === null || app === void 0 ? void 0 : app.onPageNotFound) === null || _a === void 0 ? void 0 : _a.call(app, res);
        triggerAppHook('onPageNotFound', res);
      };
      waitAppWrapper(onPageNotFound);
    }
  })));
  function triggerAppHook(lifecycle) {
    for (var _len = arguments.length, option = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      option[_key - 1] = arguments[_key];
    }
    var instance = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(HOOKS_APP_ID);
    if (instance) {
      var app = getAppInstance();
      var func = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getLifecycle', instance, lifecycle);
      if (Array.isArray(func)) {
        func.forEach(function (cb) {
          return cb.apply(app, option);
        });
      }
    }
  }
  _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.Current.app = appObj;
  return appObj;
}
var getNativeCompId = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.incrementId)();
var h;
var ReactDOM;
var nativeComponentApp;
function initNativeComponentEntry(params) {
  var _a;
  var R = params.R,
    ReactDOM = params.ReactDOM,
    cb = params.cb,
    _params$isDefaultEntr = params.isDefaultEntryDom,
    isDefaultEntryDom = _params$isDefaultEntr === void 0 ? true : _params$isDefaultEntr;
  var NativeComponentWrapper = /*#__PURE__*/function (_R$Component2) {
    function NativeComponentWrapper() {
      var _this4;
      _classCallCheck(this, NativeComponentWrapper);
      _this4 = _callSuper(this, NativeComponentWrapper, arguments);
      _this4.root = R.createRef();
      _this4.ctx = _this4.props.getCtx();
      return _this4;
    }
    _inherits(NativeComponentWrapper, _R$Component2);
    return _createClass(NativeComponentWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ctx.component = this;
        var rootElement = this.root.current;
        rootElement.ctx = this.ctx;
        rootElement.performUpdate(true);
      }
    }, {
      key: "render",
      value: function render() {
        return h('root', {
          ref: this.root,
          id: this.props.compId
        }, this.props.renderComponent(this.ctx));
      }
    }]);
  }(R.Component);
  var Entry = /*#__PURE__*/function (_R$Component3) {
    function Entry() {
      var _this5;
      _classCallCheck(this, Entry);
      _this5 = _callSuper(this, Entry, arguments);
      _this5.state = {
        components: []
      };
      return _this5;
    }
    _inherits(Entry, _R$Component3);
    return _createClass(Entry, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (isDefaultEntryDom) {
          Current.app = this;
        } else {
          nativeComponentApp = this;
        }
        cb && cb();
      }
    }, {
      key: "mount",
      value: function mount(Component, compId, getCtx, cb) {
        var isReactComponent = isClassComponent(R, Component);
        var inject = function inject(node) {
          return node && injectPageInstance(node, compId);
        };
        var refs = isReactComponent ? {
          ref: inject
        } : {
          forwardedRef: inject,
          reactReduxForwardedRef: inject
        };
        if (reactMeta.PageContext === EMPTY_OBJ) {
          reactMeta.PageContext = R.createContext('');
        }
        var item = {
          compId: compId,
          element: h(NativeComponentWrapper, {
            key: compId,
            compId: compId,
            getCtx: getCtx,
            renderComponent: function renderComponent(ctx) {
              return h(reactMeta.PageContext.Provider, {
                value: compId
              }, h(Component, Object.assign(Object.assign(Object.assign({}, (ctx.data || (ctx.data = {})).props), refs), {
                $scope: ctx
              })));
            }
          })
        };
        this.setState({
          components: [].concat(_toConsumableArray(this.state.components), [item])
        }, function () {
          return cb && cb();
        });
      }
    }, {
      key: "unmount",
      value: function unmount(compId, cb) {
        var components = this.state.components;
        var index = components.findIndex(function (item) {
          return item.compId === compId;
        });
        var next = [].concat(_toConsumableArray(components.slice(0, index)), _toConsumableArray(components.slice(index + 1)));
        this.setState({
          components: next
        }, function () {
          removePageInstance(compId);
          cb && cb();
        });
      }
    }, {
      key: "render",
      value: function render() {
        var components = this.state.components;
        return components.map(function (_ref) {
          var element = _ref.element;
          return element;
        });
      }
    }]);
  }(R.Component);
  setReconciler(ReactDOM);
  var app = document.getElementById('app');
  if (!isDefaultEntryDom && !nativeComponentApp) {
    // create
    var nativeApp = document.createElement('nativeComponent');
    // insert
    (_a = app === null || app === void 0 ? void 0 : app.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(nativeApp);
    app = nativeApp;
  }
  ReactDOM.render(h(Entry, {}), app);
}
function createNativePageConfig(Component, pageName, data, react, reactdom, pageConfig) {
  reactMeta.R = react;
  h = react.createElement;
  ReactDOM = reactdom;
  setReconciler(ReactDOM);
  var _hooks$call$page = _slicedToArray(hooks.call('getMiniLifecycleImpl').page, 7),
    ONLOAD = _hooks$call$page[0],
    ONUNLOAD = _hooks$call$page[1],
    ONREADY = _hooks$call$page[2],
    ONSHOW = _hooks$call$page[3],
    ONHIDE = _hooks$call$page[4],
    LIFECYCLES = _hooks$call$page[5],
    SIDE_EFFECT_LIFECYCLES = _hooks$call$page[6];
  var unmounting = false;
  var prepareMountList = [];
  var pageElement = null;
  var loadResolver;
  var hasLoaded;
  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(getNativeCompId());
  function setCurrentRouter(page) {
    var router = page.route || page.__route__ || page.$taroPath;
    Current.router = {
      params: page.$taroParams,
      path: addLeadingSlash(router),
      $taroPath: page.$taroPath,
      onReady: getOnReadyEventKey(id),
      onShow: getOnShowEventKey(id),
      onHide: getOnHideEventKey(id)
    };
    if (!isUndefined(page.exitState)) {
      Current.router.exitState = page.exitState;
    }
  }
  var pageObj = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    options: pageConfig
  }, ONLOAD, function () {
    var _this6 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 ? arguments[1] : undefined;
    hasLoaded = new Promise(function (resolve) {
      loadResolver = resolve;
    });
    Current.page = this;
    this.config = pageConfig || {};
    // this.$taroPath 是页面唯一标识
    var uniqueOptions = Object.assign({}, options, {
      $taroTimestamp: Date.now()
    });
    var $taroPath = this.$taroPath = getPath(id, uniqueOptions);
    // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
    if (this.$taroParams == null) {
      this.$taroParams = uniqueOptions;
    }
    setCurrentRouter(this);
    window.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
    var mountCallback = function mountCallback() {
      pageElement = document.getElementById($taroPath);
      ensure(pageElement !== null, '没有找到页面实例。');
      safeExecute($taroPath, ONLOAD, _this6.$taroParams);
      loadResolver();
      pageElement.ctx = _this6;
      pageElement.performUpdate(true, cb);
    };
    var mount = function mount() {
      if (!Current.app) {
        initNativeComponentEntry({
          R: react,
          ReactDOM: ReactDOM,
          cb: function cb() {
            Current.app.mount(Component, $taroPath, function () {
              return _this6;
            }, mountCallback);
          }
        });
      } else {
        Current.app.mount(Component, $taroPath, function () {
          return _this6;
        }, mountCallback);
      }
    };
    if (unmounting) {
      prepareMountList.push(mount);
    } else {
      mount();
    }
  }), ONUNLOAD, function () {
    var $taroPath = this.$taroPath;
    // 销毁当前页面的上下文信息
    window.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
    // 触发onUnload生命周期
    safeExecute($taroPath, ONUNLOAD);
    resetCurrent();
    unmounting = true;
    Current.app.unmount($taroPath, function () {
      unmounting = false;
      removePageInstance($taroPath);
      if (pageElement) {
        pageElement.ctx = null;
        pageElement = null;
      }
      if (prepareMountList.length) {
        prepareMountList.forEach(function (fn) {
          return fn();
        });
        prepareMountList = [];
      }
    });
  }), ONREADY, function () {
    var _this7 = this;
    hasLoaded.then(function () {
      // 触发生命周期
      safeExecute(_this7.$taroPath, ON_READY);
      // 通过事件触发子组件的生命周期
      requestAnimationFrame(function () {
        return eventCenter.trigger(getOnReadyEventKey(id));
      });
      _this7.onReady.called = true;
    });
  }), ONSHOW, function () {
    var _this8 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    hasLoaded.then(function () {
      // 设置 Current 的 page 和 router
      Current.page = _this8;
      setCurrentRouter(_this8);
      // 恢复上下文信息
      window.trigger(CONTEXT_ACTIONS.RECOVER, _this8.$taroPath);
      // 触发生命周期
      safeExecute(_this8.$taroPath, ON_SHOW, options);
      // 通过事件触发子组件的生命周期
      requestAnimationFrame(function () {
        return eventCenter.trigger(getOnShowEventKey(id));
      });
    });
  }), ONHIDE, function () {
    // 缓存当前页面上下文信息
    window.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
    // 设置 Current 的 page 和 router
    if (Current.page === this) {
      Current.page = null;
      Current.router = null;
    }
    // 触发生命周期
    safeExecute(this.$taroPath, ON_HIDE);
    // 通过事件触发子组件的生命周期
    eventCenter.trigger(getOnHideEventKey(id));
  });
  function resetCurrent() {
    // 小程序插件页面卸载之后返回到宿主页面时，需重置Current页面和路由。否则引发插件组件二次加载异常 fix:#11991
    Current.page = null;
    Current.router = null;
  }
  LIFECYCLES.forEach(function (lifecycle) {
    pageObj[lifecycle] = function () {
      return safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(Array.prototype.slice.call(arguments)));
    };
  });
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  SIDE_EFFECT_LIFECYCLES.forEach(function (lifecycle) {
    var _a;
    if (Component[lifecycle] || ((_a = Component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) || Component[lifecycle.replace(/^on/, 'enable')]) {
      pageObj[lifecycle] = function () {
        var _a;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
        if (target === null || target === void 0 ? void 0 : target.id) {
          var _id = target.id;
          var element = document.getElementById(_id);
          if (element) {
            target.dataset = element.dataset;
          }
        }
        return safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(args));
      };
    }
  });
  pageObj.eh = eventHandler;
  if (!isUndefined(data)) {
    pageObj.data = data;
  }
  hooks.call('modifyPageObject', pageObj);
  return pageObj;
}
function createH5NativeComponentConfig(Component, react, reactdom) {
  reactMeta.R = react;
  h = react.createElement;
  ReactDOM = reactdom;
  setReconciler(ReactDOM);
  return Component;
}
function createNativeComponentConfig(Component, react, reactdom, componentConfig) {
  var _a, _b;
  reactMeta.R = react;
  h = react.createElement;
  ReactDOM = reactdom;
  setReconciler(ReactDOM);
  var isNewBlended = componentConfig.isNewBlended;
  var componentObj = {
    options: componentConfig,
    properties: {
      props: {
        type: null,
        value: null,
        observer: function observer(_newVal, oldVal) {
          var _a, _b, _c, _d;
          if (false) { var inst; }
          oldVal && ((_d = this.component) === null || _d === void 0 ? void 0 : _d.forceUpdate());
        }
      }
    },
    created: function created() {
      var _a, _b;
      if (false) { var inst; }
      var app = isNewBlended ? nativeComponentApp : Current.app;
      if (!app) {
        initNativeComponentEntry({
          R: react,
          ReactDOM: ReactDOM,
          isDefaultEntryDom: !isNewBlended
        });
      }
    },
    attached: function attached() {
      var _this9 = this;
      var compId = this.compId = getNativeCompId();
      setCurrent(compId);
      this.config = componentConfig;
      var app = isNewBlended ? nativeComponentApp : Current.app;
      app.mount(Component, compId, function () {
        return _this9;
      }, function () {
        var instance = getPageInstance(compId);
        if (instance && instance.node) {
          var el = document.getElementById(instance.node.uid);
          if (el) {
            el.ctx = _this9;
          }
        }
      });
    },
    ready: function ready() {
      safeExecute(this.compId, 'onReady');
    },
    detached: function detached() {
      resetCurrent();
      var app = isNewBlended ? nativeComponentApp : Current.app;
      app.unmount(this.compId);
    },
    pageLifetimes: {
      show: function show(options) {
        safeExecute(this.compId, 'onShow', options);
      },
      hide: function hide() {
        safeExecute(this.compId, 'onHide');
      }
    },
    methods: {
      eh: eventHandler,
      onLoad: function onLoad(options) {
        safeExecute(this.compId, 'onLoad', options);
      },
      onUnload: function onUnload() {
        safeExecute(this.compId, 'onUnload');
      }
    }
  };
  function resetCurrent() {
    // 小程序插件页面卸载之后返回到宿主页面时，需重置Current页面和路由。否则引发插件组件二次加载异常 fix:#11991
    Current.page = null;
    Current.router = null;
  }
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  if (Component.onShareAppMessage || ((_a = Component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || Component.enableShareAppMessage) {
    componentObj.methods.onShareAppMessage = function (options) {
      var target = options === null || options === void 0 ? void 0 : options.target;
      if (target) {
        var id = target.id;
        var element = document.getElementById(id);
        if (element) {
          target.dataset = element.dataset;
        }
      }
      return safeExecute(this.compId, 'onShareAppMessage', options);
    };
  }
  if (Component.onShareTimeline || ((_b = Component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || Component.enableShareTimeline) {
    componentObj.methods.onShareTimeline = function () {
      return safeExecute(this.compId, 'onShareTimeline');
    };
  }
  if (false) {}
  return componentObj;
}
function setCurrent(compId) {
  if (!getCurrentPages || typeof getCurrentPages !== 'function') return;
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  if (Current.page === currentPage) return;
  Current.page = currentPage;
  var route = currentPage.route || currentPage.__route__;
  var router = {
    params: currentPage.options || {},
    path: addLeadingSlash(route),
    $taroPath: compId,
    onReady: '',
    onHide: '',
    onShow: ''
  };
  Current.router = router;
  if (!currentPage.options) {
    // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
    Object.defineProperty(currentPage, 'options', {
      enumerable: true,
      configurable: true,
      get: function get() {
        return this._optionsValue;
      },
      set: function set(value) {
        router.params = value;
        this._optionsValue = value;
      }
    });
  }
}
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.tap('initNativeApi', function (taro) {
  for (var hook in taroHooks) {
    taro[hook] = taroHooks[hook];
  }
});
if (false) { var oldDiffedHook, oldVNodeHook, options; }


/***/ }),

/***/ 6882:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4467);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);


var needPromiseApis = new Set(['addFileToFavorites', 'addVideoToFavorites', 'authPrivateMessage', 'checkIsAddedToMyMiniProgram', 'chooseContact', 'cropImage', 'disableAlertBeforeUnload', 'editImage', 'enableAlertBeforeUnload', 'getBackgroundFetchData', 'getChannelsLiveInfo', 'getChannelsLiveNoticeInfo', 'getFuzzyLocation', 'getGroupEnterInfo', 'getLocalIPAddress', 'getShareInfo', 'getUserProfile', 'getWeRunData', 'join1v1Chat', 'openChannelsActivity', 'openChannelsEvent', 'openChannelsLive', 'openChannelsUserProfile', 'openCustomerServiceChat', 'openVideoEditor', 'saveFileToDisk', 'scanItem', 'setEnable1v1Chat', 'setWindowSize', 'sendBizRedPacket', 'startFacialRecognitionVerify']);
function initNativeApi(taro) {
  (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .processApis */ .qZ)(taro, wx, {
    needPromiseApis: needPromiseApis,
    modifyApis: function modifyApis(apis) {
      // fix https://github.com/NervJS/taro/issues/9899
      apis.delete('lanDebug');
    },
    transformMeta: function transformMeta(api, options) {
      var _a;
      if (api === 'showShareMenu') {
        options.menus = (_a = options.showShareItems) === null || _a === void 0 ? void 0 : _a.map(function (item) {
          return item === 'wechatFriends' ? 'shareAppMessage' : item === 'wechatMoment' ? 'shareTimeline' : item;
        });
      }
      return {
        key: api,
        options: options
      };
    }
  });
  taro.cloud = wx.cloud;
  taro.getTabBar = function (pageCtx) {
    var _a;
    if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === 'function') {
      return (_a = pageCtx.getTabBar()) === null || _a === void 0 ? void 0 : _a.$taroInstances;
    }
  };
  taro.getRenderer = function () {
    var _a, _b, _c;
    return (_c = (_b = (_a = taro.getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.renderer) !== null && _c !== void 0 ? _c : 'webview';
  };
}
var _true = 'true';
var _false = 'false';
var _empty = '';
var _zero = '0';
var components = {
  // ======== 调整属性 ========
  Progress: {
    'border-radius': _zero,
    'font-size': '16',
    duration: '30',
    bindActiveEnd: _empty
  },
  RichText: {
    space: _empty,
    'user-select': _false
  },
  Text: {
    'user-select': _false,
    overflow: 'visible',
    'max-lines': ''
  },
  Map: {
    polygons: '[]',
    subkey: _empty,
    rotate: _zero,
    skew: _zero,
    'max-scale': '20',
    'min-scale': '3',
    'enable-3D': _false,
    'show-compass': _false,
    'show-scale': _false,
    'enable-overlooking': _false,
    'enable-auto-max-overlooking': _false,
    'enable-zoom': _true,
    'enable-scroll': _true,
    'enable-rotate': _false,
    'enable-satellite': _false,
    'enable-traffic': _false,
    'enable-poi': _true,
    'enable-building': _true,
    setting: '[]',
    bindLabelTap: _empty,
    bindRegionChange: _empty,
    bindPoiTap: _empty,
    bindPolylineTap: _empty,
    bindAbilitySuccess: _empty,
    bindAbilityFailed: _empty,
    bindAuthSuccess: _empty,
    bindInterpolatePoint: _empty,
    bindError: _empty,
    bindAnchorPointTap: _empty
  },
  Button: {
    lang: 'en',
    'session-from': _empty,
    'send-message-title': _empty,
    'send-message-path': _empty,
    'send-message-img': _empty,
    'app-parameter': _empty,
    'show-message-card': _false,
    'business-id': _empty,
    bindGetUserInfo: _empty,
    bindContact: _empty,
    bindGetPhoneNumber: _empty,
    bindGetRealTimePhoneNumber: _empty,
    bindChooseAvatar: _empty,
    bindError: _empty,
    bindOpenSetting: _empty,
    bindLaunchApp: _empty,
    bindAgreePrivacyAuthorization: _empty
  },
  Form: {
    'report-submit-timeout': _zero
  },
  Input: {
    'always-embed': _false,
    'adjust-position': _true,
    'hold-keyboard': _false,
    'safe-password-cert-path': '',
    'safe-password-length': '',
    'safe-password-time-stamp': '',
    'safe-password-nonce': '',
    'safe-password-salt': '',
    'safe-password-custom-hash': '',
    'auto-fill': _empty,
    bindKeyboardHeightChange: _empty,
    bindNicknameReview: _empty
  },
  Picker: {
    'header-text': _empty,
    level: 'region'
  },
  PickerView: {
    'immediate-change': _false,
    bindPickStart: _empty,
    bindPickEnd: _empty
  },
  Slider: {
    color: "'#e9e9e9'",
    'selected-color': "'#1aad19'"
  },
  Textarea: {
    'show-confirm-bar': _true,
    'adjust-position': _true,
    'hold-keyboard': _false,
    'disable-default-padding': _false,
    'confirm-type': "'return'",
    'confirm-hold': _false,
    bindKeyboardHeightChange: _empty
  },
  ScrollView: {
    'enable-flex': _false,
    'scroll-anchoring': _false,
    enhanced: _false,
    'using-sticky': _false,
    'paging-enabled': _false,
    'enable-passive': _false,
    'refresher-enabled': _false,
    'refresher-threshold': '45',
    'refresher-default-style': "'black'",
    'refresher-background': "'#FFF'",
    'refresher-triggered': _false,
    bounces: _true,
    'show-scrollbar': _true,
    'fast-deceleration': _false,
    type: "'list'",
    reverse: _false,
    clip: _true,
    'enable-back-to-top': _false,
    'cache-extent': _empty,
    'min-drag-distance': '18',
    'scroll-into-view-within-extent': _false,
    'scroll-into-view-alignment': "'start'",
    padding: '[0,0,0,0]',
    'refresher-two-level-enabled': _false,
    'refresher-two-level-triggered': _false,
    'refresher-two-level-threshold': '150',
    'refresher-two-level-close-threshold': '80',
    'refresher-two-level-scroll-enabled': _false,
    'refresher-ballistic-refresh-enabled': _false,
    'refresher-two-level-pinned': _false,
    bindDragStart: _empty,
    bindDragging: _empty,
    bindDragEnd: _empty,
    bindRefresherPulling: _empty,
    bindRefresherRefresh: _empty,
    bindRefresherRestore: _empty,
    bindRefresherAbort: _empty,
    bindScrollStart: _empty,
    bindScrollEnd: _empty,
    bindRefresherWillRefresh: _empty,
    bindRefresherStatusChange: _empty
  },
  StickySection: {
    'push-pinned-header': _true,
    padding: '[0, 0, 0, 0]'
  },
  GridView: {
    type: "'aligned'",
    'cross-axis-count': '2',
    'max-cross-axis-extent': _zero,
    'main-axis-gap': _zero,
    'cross-axis-gap': _zero,
    padding: '[0, 0, 0, 0]'
  },
  GridBuilder: {
    type: "'aligned'",
    list: '[]',
    'cross-axis-count': '2',
    'max-cross-axis-extent': _zero,
    'main-axis-gap': _zero,
    'cross-axis-gap': _zero,
    padding: '[0, 0, 0, 0]',
    bindItemBuild: _empty,
    bindItemDispose: _empty
  },
  ListView: {
    padding: '[0, 0, 0, 0]'
  },
  ListBuilder: {
    list: '[]',
    type: 'static',
    padding: '[0, 0, 0, 0]',
    'child-count': _empty,
    'child-height': _empty,
    bindItemBuild: _empty,
    bindItemDispose: _empty
  },
  StickyHeader: {
    'offset-top': '0',
    padding: '[0, 0, 0, 0]'
  },
  Swiper: {
    'snap-to-edge': _false,
    'easing-function': "'default'"
  },
  SwiperItem: {
    'skip-hidden-item-layout': _false
  },
  Navigator: {
    target: "'self'",
    'app-id': _empty,
    path: _empty,
    'extra-data': _empty,
    version: "'version'"
  },
  Camera: {
    mode: "'normal'",
    resolution: "'medium'",
    'frame-size': "'medium'",
    bindInitDone: _empty,
    bindScanCode: _empty
  },
  Image: {
    webp: _false,
    'show-menu-by-longpress': _false
  },
  LivePlayer: {
    mode: "'live'",
    'sound-mode': "'speaker'",
    'auto-pause-if-navigate': _true,
    'auto-pause-if-open-native': _true,
    'picture-in-picture-mode': '[]',
    'enable-auto-rotation': _false,
    'referrer-policy': "'no-referrer'",
    'enable-casting': _false,
    bindstatechange: _empty,
    bindfullscreenchange: _empty,
    bindnetstatus: _empty,
    bindAudioVolumeNotify: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty
  },
  Video: {
    title: _empty,
    'play-btn-position': "'bottom'",
    'enable-play-gesture': _false,
    'auto-pause-if-navigate': _true,
    'auto-pause-if-open-native': _true,
    'vslide-gesture': _false,
    'vslide-gesture-in-fullscreen': _true,
    'show-bottom-progress': _true,
    'ad-unit-id': _empty,
    'poster-for-crawler': _empty,
    'show-casting-button': _false,
    'picture-in-picture-mode': '[]',
    // picture-in-picture-show-progress 属性先注释掉的原因如下：
    // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
    // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
    // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
    // 'picture-in-picture-show-progress': 'false',
    'enable-auto-rotation': _false,
    'show-screen-lock-button': _false,
    'show-snapshot-button': _false,
    'show-background-playback-button': _false,
    'background-poster': _empty,
    'referrer-policy': "'no-referrer'",
    'is-drm': _false,
    'is-live': _false,
    'provision-url': _empty,
    'certificate-url': _empty,
    'license-url': _empty,
    'preferred-peak-bit-rate': _empty,
    bindProgress: _empty,
    bindLoadedMetadata: _empty,
    bindControlsToggle: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindSeekComplete: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty,
    bindAdLoad: _empty,
    bindAdError: _empty,
    bindAdClose: _empty,
    bindAdPlay: _empty
  },
  Canvas: {
    type: _empty
  },
  Ad: {
    'ad-type': "'banner'",
    'ad-theme': "'white'"
  },
  CoverView: {
    'marker-id': _empty,
    slot: _empty
  },
  // ======== 额外组件 ========
  Editor: {
    'read-only': _false,
    placeholder: _empty,
    'show-img-size': _false,
    'show-img-toolbar': _false,
    'show-img-resize': _false,
    focus: _false,
    bindReady: _empty,
    bindFocus: _empty,
    bindBlur: _empty,
    bindInput: _empty,
    bindStatusChange: _empty,
    name: _empty
  },
  MatchMedia: {
    'min-width': _empty,
    'max-width': _empty,
    width: _empty,
    'min-height': _empty,
    'max-height': _empty,
    height: _empty,
    orientation: _empty
  },
  FunctionalPageNavigator: {
    version: "'release'",
    name: _empty,
    args: _empty,
    bindSuccess: _empty,
    bindFail: _empty,
    bindCancel: _empty
  },
  LivePusher: {
    url: _empty,
    mode: "'RTC'",
    autopush: _false,
    muted: _false,
    'enable-camera': _true,
    'auto-focus': _true,
    orientation: "'vertical'",
    beauty: _zero,
    whiteness: _zero,
    aspect: "'9:16'",
    'min-bitrate': '200',
    'max-bitrate': '1000',
    'audio-quality': "'high'",
    'waiting-image': _empty,
    'waiting-image-hash': _empty,
    zoom: _false,
    'device-position': "'front'",
    'background-mute': _false,
    mirror: _false,
    'remote-mirror': _false,
    'local-mirror': _false,
    'audio-reverb-type': _zero,
    'enable-mic': _true,
    'enable-agc': _false,
    'enable-ans': _false,
    'audio-volume-type': "'voicecall'",
    'video-width': '360',
    'video-height': '640',
    'beauty-style': "'smooth'",
    filter: "'standard'",
    'picture-in-picture-mode': '[]',
    animation: _empty,
    bindStateChange: _empty,
    bindNetStatus: _empty,
    bindBgmStart: _empty,
    bindBgmProgress: _empty,
    bindBgmComplete: _empty,
    bindAudioVolumeNotify: _empty
  },
  OfficialAccount: {
    bindLoad: _empty,
    bindError: _empty
  },
  OpenData: {
    type: _empty,
    'open-gid': _empty,
    lang: "'en'",
    'default-text': _empty,
    'default-avatar': _empty,
    bindError: _empty
  },
  NavigationBar: {
    title: _empty,
    loading: _false,
    'front-color': "'#000000'",
    'background-color': _empty,
    'color-animation-duration': _zero,
    'color-animation-timing-func': "'linear'"
  },
  PageMeta: {
    'background-text-style': _empty,
    'background-color': _empty,
    'background-color-top': _empty,
    'background-color-bottom': _empty,
    'root-background-color': _empty,
    'scroll-top': "''",
    'scroll-duration': '300',
    'page-style': "''",
    'root-font-size': "''",
    'page-orientation': "''",
    bindResize: _empty,
    bindScroll: _empty,
    bindScrollDone: _empty
  },
  VoipRoom: {
    openid: _empty,
    mode: "'camera'",
    'device-position': "'front'",
    bindError: _empty
  },
  AdCustom: {
    'unit-id': _empty,
    'ad-intervals': _empty,
    bindLoad: _empty,
    bindError: _empty
  },
  PageContainer: {
    show: _false,
    duration: '300',
    'z-index': '100',
    overlay: _true,
    position: "'bottom'",
    round: _false,
    'close-on-slide-down': _false,
    'overlay-style': _empty,
    'custom-style': _empty,
    bindBeforeEnter: _empty,
    bindEnter: _empty,
    bindAfterEnter: _empty,
    bindBeforeLeave: _empty,
    bindLeave: _empty,
    bindAfterLeave: _empty,
    bindClickOverlay: _empty
  },
  ShareElement: {
    mapkey: _empty,
    transform: _false,
    duration: '300',
    'easing-function': "'ease-out'"
  },
  KeyboardAccessory: {},
  RootPortal: {
    enable: _true
  },
  ChannelLive: {
    'feed-id': _empty,
    'finder-user-name': _empty
  },
  ChannelVideo: {
    'feed-id': _empty,
    'finder-user-name': _empty,
    'feed-token': _empty,
    autoplay: _false,
    loop: _false,
    muted: _false,
    'object-fit': "'contain'",
    bindError: _empty
  },
  Snapshot: {
    mode: "'view'"
  },
  Span: {},
  OpenContainer: {
    transitionType: "'fade'",
    transitionDuration: '300',
    closedColor: "'white'",
    closedElevation: _zero,
    closeBorderRadius: _zero,
    middleColor: _empty,
    openColor: "'white'",
    openElevation: _zero,
    openBorderRadius: _zero
  },
  DraggableSheet: {
    initialChildSize: '0.5',
    minChildSize: '0.25',
    maxChildSize: '1.0',
    snap: _false,
    snapSizes: '[]'
  },
  NestedScrollHeader: {},
  NestedScrollBody: {}
};
var hostConfig = {
  initNativeApi: initNativeApi,
  getMiniLifecycle: function getMiniLifecycle(config) {
    var methods = config.page[5];
    if (methods.indexOf('onSaveExitState') === -1) {
      methods.push('onSaveExitState');
    }
    return config;
  },
  transferHydrateData: function transferHydrateData(data, element, componentsAlias) {
    var _a;
    if (element.isTransferElement) {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      data["nn" /* Shortcuts.NodeName */] = element.dataName;
      page.setData((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(data.nn), data));
      return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
        sid: element.sid
      }, "v" /* Shortcuts.Text */, ''), "nn" /* Shortcuts.NodeName */, ((_a = componentsAlias['#text']) === null || _a === void 0 ? void 0 : _a._num) || '8');
    }
  }
};
(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .mergeReconciler */ .ZG)(hostConfig);
(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .mergeInternalComponents */ .IQ)(components);

/***/ }),

/***/ 7260:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: function() { return /* binding */ index; }
/* harmony export */ });
/* unused harmony exports createPortal, createRoot, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates */
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2901);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4467);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3453);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2284);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1186);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7842);
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4845);
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reconciler_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(772);









var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
var SyncLane = 1;
var InputContinuousLane = 4;
var DefaultLane = 16;
var DiscreteEventPriority = SyncLane;
var ContinuousEventPriority = InputContinuousLane;
var DefaultEventPriority = DefaultLane;
function getEventPriority(domEventName) {
  switch (domEventName) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'input':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'reset':
    case 'resize':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'change':
    case 'blur':
    case 'focus':
    case 'select':
    case 'selectstart':
      return DiscreteEventPriority;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'pointerenter':
    case 'pointerleave':
      return ContinuousEventPriority;
    default:
      return DefaultEventPriority;
  }
}
var randomKey = Math.random().toString(36).slice(2);
var internalPropsKey = '__reactProps$' + randomKey;
var internalInstanceKey = '__reactFiber$' + randomKey;
var internalContainerInstanceKey = '__reactContainer$' + randomKey;
// const internalEventHandlersKey = '__reactEvents$' + randomKey
// const internalEventHandlerListenersKey = '__reactListeners$' + randomKey
// const internalEventHandlesSetKey = '__reactHandles$' + randomKey

var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostComponent = 5;
var HostText = 6;
var SuspenseComponent = 13;

/**
 * 给 TaroElement 绑定 react fiber、react props 等属性
 * 提供 fiber -> element、element -> fiber、element -> props 的方法
*/
function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}
function markContainerAsRoot(hostRoot, node) {
  node[internalContainerInstanceKey] = hostRoot;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode(node) {
  var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
  if (inst) {
    if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) {
      return inst;
    } else {
      return null;
    }
  }
  return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance(inst) {
  if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber this, is just the state node right now. We assume it will be
    // a host component or host text.
    return inst.stateNode;
  }
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function updateFiberProps(node, props) {
  node[internalPropsKey] = props;
}

// 从 props 中，更新 input 组件的 value 值
function updateInputWrapper(element, oldValue, props) {
  var node = element;
  var checked = props.checked;
  if (checked != null) {
    console.warn('updateCheck 未实现', node);
    return;
  }
  updateWrapper(element, oldValue, props);
  updateNamedCousins(element, props);
}
// react 中原本处理 type=radio 的逻辑，这里留个空，暂时不处理
function updateNamedCousins(rootNode, props) {
  var name = props.name;
  if (props.type === 'radio' && name != null) {
    console.warn('radio updateNamedCousins 未实现', rootNode, props);
  }
}
function getToStringValue(value) {
  var isEmptyType = typeof value === 'function' || (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value) === 'symbol';
  return isEmptyType ? '' : value;
}
function toString(value) {
  return '' + value;
}
function updateWrapper(element, oldValue, props) {
  var node = element;
  var value = getToStringValue(props.value);
  var type = props.type;
  setNodeValue(node, oldValue, value, type);
}
// oldValue 为 event.detail.value，value 为 fiber.props.value
// 如果 oldValue 和 value 不相等，代表受控组件需要更新
// 更新的原则为，fiber.props.value 永远为用户所需要的值，因此 node.value = toString(value)
function setNodeValue(node, oldValue, value) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'string';
  if (value != null) {
    if (type === 'number') {
      if (value === 0 && node.value === '' ||
      // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      oldValue != value) {
        node.value = toString(value);
      }
    } else if (oldValue !== toString(value)) {
      node.value = toString(value);
    }
  } else if (type === 'submit' || type === 'reset') {
    // Submit/reset inputs need the attribute removed completely to avoid
    // blank-text buttons.
    node.removeAttribute('value');
  }
}
// 判断当前 TaroElement 是否为 supportedInputTypes input 或 textarea
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  if (nodeName === 'input') {
    var type = elem.type;
    return !type || !!supportedInputTypes[type];
  }
  if (nodeName === 'textarea') {
    return true;
  }
  return false;
}
var ReactDOMTextareaRestoreControlledState = updateWrapper;
var ReactDOMInputRestoreControlledState = updateInputWrapper;
function isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
}
function getTracker(node) {
  return node._valueTracker;
}
function detachTracker(node) {
  node._valueTracker = null;
}
// 之所以单独创建一个 tacker，是为了统一监听不同 type 的 input 值
// 比如 type=checkbox 或者 type=radio，就需要监听 checked，而不是 value
// 虽然目前还未实现 checkbox 和 radio 的 finishEventHandle，但后续不好说，所以先统一和 react 一样的写法
// 需要特别注意的是，tracker 初始化时的值为 node 的初始值，但后续会变更为事件的 detail.value 值
function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? 'checked' : 'value';
  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
  var currentValue = '' + node[valueField];
  if (node.hasOwnProperty(valueField) || typeof descriptor === 'undefined' || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
    return;
  }
  var _get = descriptor.get,
    _set = descriptor.set;
  Object.defineProperty(node, valueField, {
    configurable: true,
    enumerable: descriptor.enumerable,
    get: function get() {
      return _get.call(this);
    },
    set: function set(value) {
      currentValue = '' + value;
      _set.call(this, value);
    }
  });
  var tracker = {
    getValue: function getValue() {
      return currentValue;
    },
    setValue: function setValue(value) {
      currentValue = '' + value;
    },
    stopTracking: function stopTracking() {
      detachTracker(node);
      delete node[valueField];
    }
  };
  return tracker;
}
function track(node) {
  if (getTracker(node)) {
    return;
  }
  node._valueTracker = trackValueOnNode(node);
}
function updateValueIfChanged(node, nextValue) {
  if (!node) {
    return false;
  }
  var tracker = getTracker(node);
  if (!tracker) {
    return true;
  }
  var lastValue = tracker.getValue();
  if (nextValue !== lastValue) {
    tracker.setValue(nextValue);
    return true;
  }
  return false;
}
function isEventName(s) {
  return s[0] === 'o' && s[1] === 'n';
}
var IS_NON_DIMENSIONAL = /aspect|acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function updateProps(dom, oldProps, newProps) {
  var updatePayload = getUpdatePayload(dom, oldProps, newProps);
  if (updatePayload) {
    updatePropsByPayload(dom, oldProps, updatePayload);
  }
}
function updatePropsByPayload(dom, oldProps, updatePayload) {
  for (var i = 0; i < updatePayload.length; i += 2) {
    // key, value 成对出现
    var key = updatePayload[i];
    var newProp = updatePayload[i + 1];
    var oldProp = oldProps[key];
    setProperty(dom, key, newProp, oldProp);
  }
}
function getUpdatePayload(dom, oldProps, newProps) {
  var i;
  var updatePayload = null;
  for (i in oldProps) {
    if (!(i in newProps)) {
      (updatePayload = updatePayload || []).push(i, null);
    }
  }
  var isFormElement = dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_3__.FormElement;
  for (i in newProps) {
    if (oldProps[i] !== newProps[i] || isFormElement && i === 'value') {
      (updatePayload = updatePayload || []).push(i, newProps[i]);
    }
  }
  return updatePayload;
}
// function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }
function setEvent(dom, name, value, oldValue) {
  var isCapture = name.endsWith('Capture');
  var eventName = name.toLowerCase().slice(2);
  if (isCapture) {
    eventName = eventName.slice(0, -7);
  }
  var compName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .ZH)((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .toCamelCase */ .Cb)(dom.tagName.toLowerCase()));
  if (eventName === 'click' && compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .internalComponents */ .YN) {
    eventName = 'tap';
  }
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .Tn)(value)) {
    if (oldValue) {
      dom.removeEventListener(eventName, oldValue, false);
      dom.addEventListener(eventName, value, {
        isCapture: isCapture,
        sideEffect: false
      });
    } else {
      dom.addEventListener(eventName, value, isCapture);
    }
  } else {
    dom.removeEventListener(eventName, oldValue);
  }
}
function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value.toString());
    // css variables need not further judgment
    return;
  }
  style[key] = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .Et)(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + 'px' : value == null ? '' : value;
}
function setProperty(dom, name, value, oldValue) {
  var _a, _b;
  name = name === 'className' ? 'class' : name;
  if (name === 'key' || name === 'children' || name === 'ref') ;else if (name === 'style') {
    var style = dom.style;
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isString */ .Kg)(value)) {
      style.cssText = value;
    } else {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isString */ .Kg)(oldValue)) {
        style.cssText = '';
        oldValue = null;
      }
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isObject */ .Gv)(oldValue)) {
        for (var i in oldValue) {
          if (!(value && i in value)) {
            setStyle(style, i, '');
          }
        }
      }
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isObject */ .Gv)(value)) {
        for (var _i in value) {
          if (!oldValue || value[_i] !== oldValue[_i]) {
            setStyle(style, _i, value[_i]);
          }
        }
      }
    }
  } else if (isEventName(name)) {
    setEvent(dom, name, value, oldValue);
  } else if (name === 'dangerouslySetInnerHTML') {
    var newHtml = (_a = value === null || value === void 0 ? void 0 : value.__html) !== null && _a !== void 0 ? _a : '';
    var oldHtml = (_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__html) !== null && _b !== void 0 ? _b : '';
    if (newHtml || oldHtml) {
      if (oldHtml !== newHtml) {
        dom.innerHTML = newHtml;
      }
    }
  } else if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .Tn)(value)) {
    if (value == null) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}

/* eslint-disable @typescript-eslint/indent */
var hostConfig = {
  // below keys order by {React ReactFiberHostConfig.custom.js}, convenient for comparing each other.
  // -------------------
  // required by @types/react-reconciler
  // -------------------
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext(parentHostContext) {
    return parentHostContext;
  },
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  createInstance: function createInstance(type, props, _rootContainerInstance, _hostContext, internalInstanceHandle) {
    var element = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_3__.document.createElement(type);
    precacheFiberNode(internalInstanceHandle, element);
    updateFiberProps(element, props);
    return element;
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: function finalizeInitialChildren(dom, type, props) {
    var newProps = props;
    if (dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_3__.FormElement) {
      var _ref = ['switch', 'checkbox', 'radio'].includes(type) ? ['checked', 'defaultChecked'] : ['value', 'defaultValue'],
        _ref2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ref, 2),
        defaultName = _ref2[0],
        defaultKey = _ref2[1];
      if (props.hasOwnProperty(defaultKey)) {
        newProps = Object.assign(Object.assign({}, newProps), (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({}, defaultName, props[defaultKey]));
        delete newProps[defaultKey];
      }
    }
    updateProps(dom, {}, newProps); // 提前执行更新属性操作，Taro 在 Page 初始化后会立即从 dom 读取必要信息
    if (type === 'input' || type === 'textarea') {
      track(dom);
    }
    return false;
  },
  prepareUpdate: function prepareUpdate(instance, _, oldProps, newProps) {
    return getUpdatePayload(instance, oldProps, newProps);
  },
  shouldSetTextContent: function shouldSetTextContent() {
    return false;
  },
  createTextInstance: function createTextInstance(text, _rootContainerInstance, _hostContext, internalInstanceHandle) {
    var textNode = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_3__.document.createTextNode(text);
    precacheFiberNode(internalInstanceHandle, textNode);
    return textNode;
  },
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  getInstanceFromNode: function getInstanceFromNode() {
    return null;
  },
  beforeActiveInstanceBlur: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  afterActiveInstanceBlur: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  preparePortalMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  prepareScopeUpdate: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  getInstanceFromScope: function getInstanceFromScope() {
    return null;
  },
  getCurrentEventPriority: function getCurrentEventPriority() {
    return react_reconciler_constants__WEBPACK_IMPORTED_MODULE_1__.DefaultEventPriority;
  },
  detachDeletedInstance: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  // -------------------
  //      Microtasks
  //     (optional)
  // -------------------
  supportsMicrotasks: true,
  scheduleMicrotask: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isUndefined */ .b0)(Promise) ? setTimeout : function (callback) {
    return Promise.resolve(null).then(callback).catch(function (error) {
      setTimeout(function () {
        throw error;
      });
    });
  },
  // -------------------
  //      Mutation
  //     (required if supportsMutation is true)
  // -------------------
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
    textInst.nodeValue = newText;
  },
  commitMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  commitUpdate: function commitUpdate(dom, updatePayload, _, oldProps, newProps) {
    updatePropsByPayload(dom, oldProps, updatePayload);
    updateFiberProps(dom, newProps);
  },
  insertBefore: function insertBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    parent.removeChild(child);
  },
  resetTextContent: _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .lQ,
  hideInstance: function hideInstance(instance) {
    var style = instance.style;
    style.setProperty('display', 'none');
  },
  hideTextInstance: function hideTextInstance(textInstance) {
    textInstance.nodeValue = '';
  },
  unhideInstance: function unhideInstance(instance, props) {
    var styleProp = props.style;
    var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
    display = display == null || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isBoolean */ .Lm)(display) || display === '' ? '' : ('' + display).trim();
    // eslint-disable-next-line dot-notation
    instance.style['display'] = display;
  },
  unhideTextInstance: function unhideTextInstance(textInstance, text) {
    textInstance.nodeValue = text;
  },
  clearContainer: function clearContainer(element) {
    if (element.childNodes.length > 0) {
      element.textContent = '';
    }
  }
};
var TaroReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_0___default()(hostConfig);
if (false) { var foundDevTools; }
var restoreQueue = null;
// 对比 TaroElement tracker 下的 value 和事件下的 value，判断 element 的值是否存在更改
function getTargetInstForInputOrChangeEvent(e, node) {
  var _a, _b;
  var targetInst = getInstanceFromNode(node);
  var domEventName = e.type;
  if (!targetInst || !isTextInputElement(node)) return;
  if (domEventName === 'input' || domEventName === 'change') {
    var nextValue = toString((_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value);
    return getInstIfValueChanged(targetInst, nextValue);
  }
}
function getInstIfValueChanged(targetInst, nextValue) {
  var targetNode = getNodeFromInstance(targetInst);
  if (!targetNode) return false;
  if (updateValueIfChanged(targetNode, nextValue)) {
    return targetInst;
  }
}
// 把 target 塞入更新队列中
function enqueueStateRestore(target) {
  if (restoreQueue) {
    restoreQueue.push(target);
  } else {
    restoreQueue = [target];
  }
}
// 判断是否需要恢复 target（input、textarea） 的状态
function needsStateRestore() {
  return restoreQueue !== null;
}
function finishEventHandler() {
  var controlledComponentsHavePendingUpdates = needsStateRestore();
  if (controlledComponentsHavePendingUpdates) {
    TaroReconciler.flushSync();
    restoreStateIfNeeded();
  }
}
// 遍历 restoreQueue、restoreTarget，恢复其状态
function restoreStateIfNeeded() {
  if (!restoreQueue) {
    return;
  }
  var queuedTargets = restoreQueue;
  restoreQueue = null;
  for (var i = 0; i < queuedTargets.length; i++) {
    restoreStateOfTarget(queuedTargets[i]);
  }
}
function restoreImpl(domElement, tag, oldValue, props) {
  switch (tag) {
    case 'input':
      ReactDOMInputRestoreControlledState(domElement, oldValue, props);
      break;
    case 'textarea':
      ReactDOMTextareaRestoreControlledState(domElement, oldValue, props);
      break;
  }
}
function restoreStateOfTarget(item) {
  var internalInstance = getInstanceFromNode(item.target);
  if (!internalInstance) return;
  var stateNode = internalInstance.stateNode,
    type = internalInstance.type;
  if (stateNode) {
    var props = getFiberCurrentPropsFromNode(stateNode);
    restoreImpl(stateNode, type, item.value, props);
  }
}
var ContainerMap = new WeakMap();
var Root = /*#__PURE__*/function () {
  function Root(renderer, domContainer, options) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(this, Root);
    this.renderer = renderer;
    this.initInternalRoot(renderer, domContainer, options);
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(Root, [{
    key: "initInternalRoot",
    value: function initInternalRoot(renderer, domContainer, options) {
      // Since react-reconciler v0.27, createContainer need more parameters
      // @see:https://github.com/facebook/react/blob/0b974418c9a56f6c560298560265dcf4b65784bc/packages/react-reconciler/src/ReactFiberReconciler.js#L248
      var containerInfo = domContainer;
      if (options) {
        var tag = 1; // ConcurrentRoot
        var concurrentUpdatesByDefaultOverride = false;
        var isStrictMode = false;
        var identifierPrefix = '';
        var onRecoverableError = function onRecoverableError(error) {
          return console.error(error);
        };
        var transitionCallbacks = null;
        if (options.unstable_strictMode === true) {
          isStrictMode = true;
        }
        if (options.identifierPrefix !== undefined) {
          identifierPrefix = options.identifierPrefix;
        }
        if (options.onRecoverableError !== undefined) {
          onRecoverableError = options.onRecoverableError;
        }
        if (options.unstable_transitionCallbacks !== undefined) {
          transitionCallbacks = options.unstable_transitionCallbacks;
        }
        this.internalRoot = renderer.createContainer(containerInfo, tag, null,
        // hydrationCallbacks
        isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks);
      } else {
        var _tag = 0; // LegacyRoot
        this.internalRoot = renderer.createContainer(containerInfo, _tag, null,
        // hydrationCallbacks
        false,
        // isStrictMode
        false,
        // concurrentUpdatesByDefaultOverride,
        '',
        // identifierPrefix
        function () {},
        // onRecoverableError, this isn't reachable because onRecoverableError isn't called in the legacy API.
        null // transitionCallbacks
        );
      }
    }
  }, {
    key: "render",
    value: function render(children, cb) {
      var renderer = this.renderer,
        internalRoot = this.internalRoot;
      renderer.updateContainer(children, internalRoot, null, cb);
      return renderer.getPublicRootInstance(internalRoot);
    }
  }, {
    key: "unmount",
    value: function unmount(cb) {
      this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
  }]);
}();
function render(element, domContainer, cb) {
  var oldRoot = ContainerMap.get(domContainer);
  if (oldRoot != null) {
    return oldRoot.render(element, cb);
  }
  var root = new Root(TaroReconciler, domContainer);
  ContainerMap.set(domContainer, root);
  return root.render(element, cb);
}
function createRoot(domContainer) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _a;
  var oldRoot = ContainerMap.get(domContainer);
  if (oldRoot != null) {
    return oldRoot;
  }
  // options should be an object
  var root = new Root(TaroReconciler, domContainer, options);
  ContainerMap.set(domContainer, root);
  markContainerAsRoot((_a = root === null || root === void 0 ? void 0 : root.internalRoot) === null || _a === void 0 ? void 0 : _a.current, domContainer);
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .hooks */ .JL.tap('dispatchTaroEvent', function (e, node) {
    var eventPriority = getEventPriority(e.type);
    TaroReconciler.runWithPriority(eventPriority, function () {
      node.dispatchEvent(e);
    });
  });
  // 对比 event.detail.value 和 node.tracker.value，判断 value 值是否有变动，存在变动则塞入队列中
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .hooks */ .JL.tap('modifyTaroEvent', function (e, node) {
    var _a, _b;
    var inst = getTargetInstForInputOrChangeEvent(e, node);
    if (!inst) return;
    // 这里塞入的是 event.detail.value，也就是事件的值，在受控组件中，你可以理解为需要被变更的值
    // 后续会在 finishEventHandler 中，使用最新的 fiber.props.value 来与其比较
    // 如果不一致，则表示需要更新，会执行 node.value = fiber.props.value 的更新操作
    var nextValue = (_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value;
    enqueueStateRestore({
      target: node,
      value: nextValue
    });
  });
  return root;
}
var isInsideEventHandler = false;
// 重新包裹 batchedUpdates，使其可以在触发事件后执行 finishEventHandler
var unstable_batchedUpdates = function unstable_batchedUpdates(fn, a) {
  if (isInsideEventHandler) {
    return fn(a);
  }
  isInsideEventHandler = true;
  try {
    return TaroReconciler.batchedUpdates(fn, a);
  } finally {
    isInsideEventHandler = false;
    finishEventHandler();
  }
};
function unmountComponentAtNode(dom) {
  (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .ensure */ .D8)(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
  var root = ContainerMap.get(dom);
  if (!root) return false;
  unstable_batchedUpdates(function () {
    root.unmount(function () {
      ContainerMap.delete(dom);
    });
  }, null);
  return true;
}
function findDOMNode(comp) {
  if (comp == null) {
    return null;
  }
  var nodeType = comp.nodeType;
  if (nodeType === 1 || nodeType === 3) {
    return comp;
  }
  return TaroReconciler.findHostInstance(comp);
}
var portalType = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .Tn)(Symbol) && Symbol.for ? Symbol.for('react.portal') : 0xeaca;
function createPortal(children, containerInfo, key) {
  return {
    $$typeof: portalType,
    key: key == null ? null : String(key),
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}
var index = {
  render: render,
  createRoot: createRoot,
  unstable_batchedUpdates: unstable_batchedUpdates,
  unmountComponentAtNode: unmountComponentAtNode,
  findDOMNode: findDOMNode,
  createPortal: createPortal
};


/***/ }),

/***/ 7842:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ A; },
/* harmony export */   APP: function() { return /* binding */ APP; },
/* harmony export */   BEHAVIORS: function() { return /* binding */ BEHAVIORS; },
/* harmony export */   BODY: function() { return /* binding */ BODY; },
/* harmony export */   CATCHMOVE: function() { return /* binding */ CATCHMOVE; },
/* harmony export */   CATCH_VIEW: function() { return /* binding */ CATCH_VIEW; },
/* harmony export */   CHANGE: function() { return /* binding */ CHANGE; },
/* harmony export */   CLASS: function() { return /* binding */ CLASS; },
/* harmony export */   COMMENT: function() { return /* binding */ COMMENT; },
/* harmony export */   COMPILE_MODE: function() { return /* binding */ COMPILE_MODE; },
/* harmony export */   CONFIRM: function() { return /* binding */ CONFIRM; },
/* harmony export */   CONTAINER: function() { return /* binding */ CONTAINER; },
/* harmony export */   CONTEXT_ACTIONS: function() { return /* binding */ CONTEXT_ACTIONS; },
/* harmony export */   CURRENT_TARGET: function() { return /* binding */ CURRENT_TARGET; },
/* harmony export */   CUSTOM_WRAPPER: function() { return /* binding */ CUSTOM_WRAPPER; },
/* harmony export */   Current: function() { return /* binding */ Current; },
/* harmony export */   DATASET: function() { return /* binding */ DATASET; },
/* harmony export */   DATE: function() { return /* binding */ DATE; },
/* harmony export */   DOCUMENT_ELEMENT_NAME: function() { return /* binding */ DOCUMENT_ELEMENT_NAME; },
/* harmony export */   DOCUMENT_FRAGMENT: function() { return /* binding */ DOCUMENT_FRAGMENT; },
/* harmony export */   EVENT_CALLBACK_RESULT: function() { return /* binding */ EVENT_CALLBACK_RESULT; },
/* harmony export */   EXTERNAL_CLASSES: function() { return /* binding */ EXTERNAL_CLASSES; },
/* harmony export */   Events: function() { return /* reexport safe */ _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.sV; },
/* harmony export */   FOCUS: function() { return /* binding */ FOCUS; },
/* harmony export */   FormElement: function() { return /* binding */ FormElement; },
/* harmony export */   HEAD: function() { return /* binding */ HEAD; },
/* harmony export */   HOOKS_APP_ID: function() { return /* binding */ HOOKS_APP_ID; },
/* harmony export */   HTML: function() { return /* binding */ HTML; },
/* harmony export */   History: function() { return /* binding */ History; },
/* harmony export */   ID: function() { return /* binding */ ID; },
/* harmony export */   INPUT: function() { return /* binding */ INPUT; },
/* harmony export */   KEY_CODE: function() { return /* binding */ KEY_CODE; },
/* harmony export */   Location: function() { return /* binding */ Location; },
/* harmony export */   MutationObserver: function() { return /* binding */ MutationObserver$1; },
/* harmony export */   OBJECT: function() { return /* binding */ OBJECT; },
/* harmony export */   ON_HIDE: function() { return /* binding */ ON_HIDE; },
/* harmony export */   ON_LOAD: function() { return /* binding */ ON_LOAD; },
/* harmony export */   ON_READY: function() { return /* binding */ ON_READY; },
/* harmony export */   ON_SHOW: function() { return /* binding */ ON_SHOW; },
/* harmony export */   OPTIONS: function() { return /* binding */ OPTIONS; },
/* harmony export */   PAGE_INIT: function() { return /* binding */ PAGE_INIT; },
/* harmony export */   PROPERTY_THRESHOLD: function() { return /* binding */ PROPERTY_THRESHOLD; },
/* harmony export */   PROPS: function() { return /* binding */ PROPS; },
/* harmony export */   PURE_VIEW: function() { return /* binding */ PURE_VIEW; },
/* harmony export */   ROOT_STR: function() { return /* binding */ ROOT_STR; },
/* harmony export */   SET_DATA: function() { return /* binding */ SET_DATA; },
/* harmony export */   SET_TIMEOUT: function() { return /* binding */ SET_TIMEOUT; },
/* harmony export */   STATIC_VIEW: function() { return /* binding */ STATIC_VIEW; },
/* harmony export */   STYLE: function() { return /* binding */ STYLE; },
/* harmony export */   SVGElement: function() { return /* binding */ SVGElement; },
/* harmony export */   Style: function() { return /* binding */ Style; },
/* harmony export */   TARGET: function() { return /* binding */ TARGET; },
/* harmony export */   TARO_RUNTIME: function() { return /* binding */ TARO_RUNTIME; },
/* harmony export */   TIME_STAMP: function() { return /* binding */ TIME_STAMP; },
/* harmony export */   TOUCHMOVE: function() { return /* binding */ TOUCHMOVE; },
/* harmony export */   TYPE: function() { return /* binding */ TYPE; },
/* harmony export */   TaroElement: function() { return /* binding */ TaroElement; },
/* harmony export */   TaroEvent: function() { return /* binding */ TaroEvent; },
/* harmony export */   TaroNode: function() { return /* binding */ TaroNode; },
/* harmony export */   TaroRootElement: function() { return /* binding */ TaroRootElement; },
/* harmony export */   TaroText: function() { return /* binding */ TaroText; },
/* harmony export */   UID: function() { return /* binding */ UID; },
/* harmony export */   URL: function() { return /* binding */ URL; },
/* harmony export */   URLSearchParams: function() { return /* binding */ URLSearchParams; },
/* harmony export */   VALUE: function() { return /* binding */ VALUE; },
/* harmony export */   VIEW: function() { return /* binding */ VIEW; },
/* harmony export */   addLeadingSlash: function() { return /* binding */ addLeadingSlash; },
/* harmony export */   cancelAnimationFrame: function() { return /* binding */ _caf; },
/* harmony export */   createComponentConfig: function() { return /* binding */ createComponentConfig; },
/* harmony export */   createEvent: function() { return /* binding */ createEvent; },
/* harmony export */   createPageConfig: function() { return /* binding */ createPageConfig; },
/* harmony export */   createRecursiveComponentConfig: function() { return /* binding */ createRecursiveComponentConfig; },
/* harmony export */   document: function() { return /* binding */ document$1; },
/* harmony export */   env: function() { return /* binding */ env; },
/* harmony export */   eventCenter: function() { return /* binding */ eventCenter; },
/* harmony export */   eventHandler: function() { return /* binding */ eventHandler; },
/* harmony export */   eventSource: function() { return /* binding */ eventSource; },
/* harmony export */   getComputedStyle: function() { return /* binding */ getComputedStyle; },
/* harmony export */   getCurrentInstance: function() { return /* binding */ getCurrentInstance; },
/* harmony export */   getCurrentPage: function() { return /* binding */ getCurrentPage; },
/* harmony export */   getHomePage: function() { return /* binding */ getHomePage; },
/* harmony export */   getOnHideEventKey: function() { return /* binding */ getOnHideEventKey; },
/* harmony export */   getOnReadyEventKey: function() { return /* binding */ getOnReadyEventKey; },
/* harmony export */   getOnShowEventKey: function() { return /* binding */ getOnShowEventKey; },
/* harmony export */   getPageInstance: function() { return /* binding */ getPageInstance; },
/* harmony export */   getPath: function() { return /* binding */ getPath; },
/* harmony export */   handlePolyfill: function() { return /* binding */ handlePolyfill; },
/* harmony export */   hasBasename: function() { return /* binding */ hasBasename; },
/* harmony export */   history: function() { return /* binding */ history; },
/* harmony export */   hooks: function() { return /* reexport safe */ _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.JL; },
/* harmony export */   hydrate: function() { return /* binding */ hydrate; },
/* harmony export */   incrementId: function() { return /* binding */ incrementId; },
/* harmony export */   injectPageInstance: function() { return /* binding */ injectPageInstance; },
/* harmony export */   isHasExtractProp: function() { return /* binding */ isHasExtractProp; },
/* harmony export */   location: function() { return /* binding */ location; },
/* harmony export */   navigator: function() { return /* binding */ nav; },
/* harmony export */   nextTick: function() { return /* binding */ nextTick; },
/* harmony export */   now: function() { return /* binding */ now; },
/* harmony export */   options: function() { return /* binding */ options; },
/* harmony export */   parseUrl: function() { return /* binding */ parseUrl; },
/* harmony export */   removePageInstance: function() { return /* binding */ removePageInstance; },
/* harmony export */   requestAnimationFrame: function() { return /* binding */ _raf; },
/* harmony export */   safeExecute: function() { return /* binding */ safeExecute; },
/* harmony export */   stringify: function() { return /* binding */ stringify; },
/* harmony export */   stripBasename: function() { return /* binding */ stripBasename; },
/* harmony export */   stripSuffix: function() { return /* binding */ stripSuffix; },
/* harmony export */   stripTrailing: function() { return /* binding */ stripTrailing; },
/* harmony export */   window: function() { return /* binding */ window$1; }
/* harmony export */ });
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3453);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5499);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4559);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3145);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7695);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4467);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9874);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5501);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5579);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9394);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2901);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1635);
/* provided dependency */ var requestAnimationFrame = __webpack_require__(7842)["requestAnimationFrame"];
/* provided dependency */ var cancelAnimationFrame = __webpack_require__(7842)["cancelAnimationFrame"];
/* provided dependency */ var window = __webpack_require__(7842)["window"];
/* provided dependency */ var MutationObserver = __webpack_require__(7842)["MutationObserver"];

















var PROPERTY_THRESHOLD = 2046;
var TARO_RUNTIME = 'Taro runtime';
var HOOKS_APP_ID = 'taro-app';
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';
var ROOT_STR = 'root';
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var APP = 'app';
var CONTAINER = 'container';
var DOCUMENT_ELEMENT_NAME = '#document';
var DOCUMENT_FRAGMENT = 'document-fragment';
var ID = 'id';
var UID = 'uid';
var CLASS = 'class';
var STYLE = 'style';
var FOCUS = 'focus';
var VIEW = 'view';
var STATIC_VIEW = 'static-view';
var PURE_VIEW = 'pure-view';
var PROPS = 'props';
var DATASET = 'dataset';
var OBJECT = 'object';
var VALUE = 'value';
var INPUT = 'input';
var CHANGE = 'change';
var CUSTOM_WRAPPER = 'custom-wrapper';
var TARGET = 'target';
var CURRENT_TARGET = 'currentTarget';
var TYPE = 'type';
var CONFIRM = 'confirm';
var TIME_STAMP = 'timeStamp';
var KEY_CODE = 'keyCode';
var TOUCHMOVE = 'touchmove';
var DATE = 'Date';
var SET_TIMEOUT = 'setTimeout';
var COMPILE_MODE = 'compileMode';
var CATCHMOVE = 'catchMove';
var CATCH_VIEW = 'catch-view';
var COMMENT = 'comment';
var ON_LOAD = 'onLoad';
var ON_READY = 'onReady';
var ON_SHOW = 'onShow';
var ON_HIDE = 'onHide';
var OPTIONS = 'options';
var EXTERNAL_CLASSES = 'externalClasses';
var EVENT_CALLBACK_RESULT = 'e_result';
var BEHAVIORS = 'behaviors';
var A = 'a';
/**
 * 页面上下文切换时的行为
 */
var CONTEXT_ACTIONS;
(function (CONTEXT_ACTIONS) {
  CONTEXT_ACTIONS["INIT"] = "0";
  CONTEXT_ACTIONS["RESTORE"] = "1";
  CONTEXT_ACTIONS["RECOVER"] = "2";
  CONTEXT_ACTIONS["DESTORY"] = "3";
})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));
var observers = [];
/**
 * The MutationObserver provides the ability
 * to watch for changes being made to the DOM tree.
 * It will invoke a specified callback function
 * when DOM changes occur.
 * @see https://dom.spec.whatwg.org/#mutationobserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
var MutationObserverImpl = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function MutationObserverImpl(callback) {
    _classCallCheck(this, MutationObserverImpl);
    this.records = [];
    this.callback = callback;
  }
  /**
   * Configures the MutationObserver
   * to begin receiving notifications
   * through its callback function
   * when DOM changes matching the given options occur.
   *
   * Options matching is to be implemented.
   */
  return _createClass(MutationObserverImpl, [{
    key: "observe",
    value: function observe(target, options) {
      this.disconnect();
      this.target = target;
      this.options = options || {};
      observers.push(this);
    }
    /**
     * Stop the MutationObserver instance
     * from receiving further notifications
     * until and unless observe() is called again.
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.target = null;
      var index = observers.indexOf(this);
      if (index >= 0) {
        observers.splice(index, 1);
      }
    }
    /**
     * Removes all pending notifications
     * from the MutationObserver's notification queue
     * and returns them in a new Array of MutationRecord objects.
     */
  }, {
    key: "takeRecords",
    value: function takeRecords() {
      return this.records.splice(0, this.records.length);
    }
  }]);
}()));
/** Match two TaroNodes by sid. */
var sidMatches = function sidMatches(observerTarget, target) {
  return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
var isConcerned = function isConcerned(record, options) {
  var characterData = options.characterData,
    characterDataOldValue = options.characterDataOldValue,
    attributes = options.attributes,
    attributeOldValue = options.attributeOldValue,
    childList = options.childList;
  switch (record.type) {
    case "characterData" /* MutationRecordType.CHARACTER_DATA */:
      if (characterData) {
        if (!characterDataOldValue) record.oldValue = null;
        return true;
      }
      return false;
    case "attributes" /* MutationRecordType.ATTRIBUTES */:
      if (attributes) {
        if (!attributeOldValue) record.oldValue = null;
        return true;
      }
      return false;
    case "childList" /* MutationRecordType.CHILD_LIST */:
      if (childList) {
        return true;
      }
      return false;
  }
};
var pendingMuatations = false;
function logMutation(observer, record) {
  observer.records.push(record);
  if (!pendingMuatations) {
    pendingMuatations = true;
    Promise.resolve().then(function () {
      pendingMuatations = false;
      observers.forEach(function (observer) {
        return observer.callback(observer.takeRecords());
      });
    });
  }
}
function recordMutation(record) {
  observers.forEach(function (observer) {
    var options = observer.options;
    for (var t = record.target; t; t = t.parentNode) {
      if (sidMatches(observer.target, t) && isConcerned(record, options)) {
        logMutation(observer, record);
        break;
      }
      if (!options.subtree) break;
    }
  });
}
var MutationObserver$1 = /*#__PURE__*/function () {
  function MutationObserver(callback) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, MutationObserver);
    if (false) {} else {
      if (false) {}
      this.core = {
        observe: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .lQ,
        disconnect: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .lQ,
        takeRecords: _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .lQ
      };
    }
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(MutationObserver, [{
    key: "observe",
    value: function observe() {
      var _this$core;
      (_this$core = this.core).observe.apply(_this$core, arguments);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.core.disconnect();
    }
  }, {
    key: "takeRecords",
    value: function takeRecords() {
      return this.core.takeRecords();
    }
  }], [{
    key: "record",
    value: function record(_record) {
      recordMutation(_record);
    }
  }]);
}();
function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments.length > 2 ? arguments[2] : undefined;
  var lastTime = 0;
  var deferTimer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = scope || this;
    var now = Date.now();
    if (now - lastTime > threshold) {
      fn.apply(this, args);
      lastTime = now;
    } else {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        lastTime = now;
        fn.apply(context, args);
      }, threshold);
    }
  };
}
var incrementId = function incrementId() {
  var chatCodes = [];
  // A-Z
  for (var i = 65; i <= 90; i++) {
    chatCodes.push(i);
  }
  // a-z
  for (var _i = 97; _i <= 122; _i++) {
    chatCodes.push(_i);
  }
  var chatCodesLen = chatCodes.length - 1;
  var list = [0, 0];
  return function () {
    var target = list.map(function (item) {
      return chatCodes[item];
    });
    var res = String.fromCharCode.apply(String, (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(target));
    var tailIdx = list.length - 1;
    list[tailIdx]++;
    while (list[tailIdx] > chatCodesLen) {
      list[tailIdx] = 0;
      tailIdx = tailIdx - 1;
      if (tailIdx < 0) {
        list.push(0);
        break;
      }
      list[tailIdx]++;
    }
    return res;
  };
};
function isElement(node) {
  return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
}
function isText(node) {
  return node.nodeType === 3 /* NodeType.TEXT_NODE */;
}
function isComment(node) {
  return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
  var res = Object.keys(el.props).find(function (prop) {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
  });
  return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
  var _a;
  while (node = (node === null || node === void 0 ? void 0 : node.parentElement) || null) {
    if (!node || node.nodeName === ROOT_STR || node.nodeName === 'root-portal') {
      return false;
    } else if ((_a = node.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
      return true;
    }
  }
  return false;
}
function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return "st" /* Shortcuts.Style */;
    case ID:
      return UID;
    case CLASS:
      return "cl" /* Shortcuts.Class */;
    default:
      return key;
  }
}
var customWrapperCache = new Map();
function _extend(ctor, methodName, options) {
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(options)) {
    options = {
      value: options
    };
  }
  Object.defineProperty(ctor.prototype, methodName, Object.assign({
    configurable: true,
    enumerable: true
  }, options));
}
var componentsAlias$1;
function getComponentsAlias() {
  if (!componentsAlias$1) {
    componentsAlias$1 = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .getComponentsAlias */ .dg)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .internalComponents */ .YN);
  }
  return componentsAlias$1;
}
var ClassList = /*#__PURE__*/function () {
  function ClassList(className, el) {
    var _this = this;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, ClassList);
    this.tokenList = [];
    this.el = el;
    className.trim().split(/\s+/).forEach(function (token) {
      return _this.tokenList.push(token);
    });
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(ClassList, [{
    key: "value",
    get: function get() {
      return this.toString();
    }
  }, {
    key: "length",
    get: function get() {
      return this.tokenList.length;
    }
  }, {
    key: "add",
    value: function add() {
      var index = 0;
      var updated = false;
      var tokens = arguments;
      var length = tokens.length;
      var tokenList = this.tokenList;
      do {
        var token = tokens[index];
        if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
          tokenList.push(token);
          updated = true;
        }
      } while (++index < length);
      if (updated) {
        this._update();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var i = 0;
      var updated = false;
      var tokens = arguments;
      var length = tokens.length;
      var tokenList = this.tokenList;
      do {
        var token = tokens[i] + '';
        if (!this.checkTokenIsValid(token)) continue;
        var index = tokenList.indexOf(token);
        if (~tokenList.indexOf(token)) {
          tokenList.splice(index, 1);
          updated = true;
        }
      } while (++i < length);
      if (updated) {
        this._update();
      }
    }
  }, {
    key: "contains",
    value: function contains(token) {
      if (!this.checkTokenIsValid(token)) return false;
      return !!~this.tokenList.indexOf(token);
    }
  }, {
    key: "toggle",
    value: function toggle(token, force) {
      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';
      if (method) {
        // @ts-ignore
        this[method](token);
      }
      if (force === true || force === false) {
        return force;
      } else {
        return !result;
      }
    }
  }, {
    key: "replace",
    value: function replace(token, replacement_token) {
      if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token)) return;
      var index = this.tokenList.indexOf(token);
      if (~index) {
        this.tokenList.splice(index, 1, replacement_token);
        this._update();
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.tokenList.filter(function (v) {
        return v !== '';
      }).join(' ');
    }
  }, {
    key: "checkTokenIsValid",
    value: function checkTokenIsValid(token) {
      if (token === '' || /\s/.test(token)) return false;
      return true;
    }
  }, {
    key: "_update",
    value: function _update() {
      this.el.className = this.value;
    }
  }]);
}();
var EventSource = /*#__PURE__*/function (_Map) {
  function EventSource() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, EventSource);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, EventSource, arguments);
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(EventSource, _Map);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(EventSource, [{
    key: "removeNode",
    value: function removeNode(child) {
      var sid = child.sid,
        uid = child.uid;
      this.delete(sid);
      if (uid !== sid && uid) this.delete(uid);
    }
  }, {
    key: "removeNodeTree",
    value: function removeNodeTree(child) {
      var _this2 = this;
      this.removeNode(child);
      var childNodes = child.childNodes;
      childNodes.forEach(function (node) {
        return _this2.removeNodeTree(node);
      });
    }
  }]);
}(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(Map));
var eventSource = new EventSource();
var env = {
  window:  false ? 0 : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ,
  document:  false ? 0 : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ
};
var SPECIAL_NODES;
var componentsAlias;
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
  var _a;
  // 初始化 componentsAlias
  componentsAlias || (componentsAlias = getComponentsAlias());
  // 初始化 SPECIAL_NODES
  SPECIAL_NODES || (SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getSpecialNodes'));
  var nodeName = node.nodeName;
  var compileModeName = null;
  if (isText(node)) {
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({
      sid: node.sid
    }, "v" /* Shortcuts.Text */, node.nodeValue), "nn" /* Shortcuts.NodeName */, ((_a = componentsAlias[nodeName]) === null || _a === void 0 ? void 0 : _a._num) || '8');
  }
  var data = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({}, "nn" /* Shortcuts.NodeName */, nodeName), "sid", node.sid);
  if (node.uid !== node.sid) {
    data.uid = node.uid;
  }
  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data["nn" /* Shortcuts.NodeName */] = "static-".concat(nodeName);
    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data["nn" /* Shortcuts.NodeName */] = PURE_VIEW;
    }
  }
  var props = node.props;
  for (var prop in props) {
    var propInCamelCase = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(prop);
    if (!prop.startsWith('data-') &&
    // 在 node.dataset 的数据
    prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE && propInCamelCase !== COMPILE_MODE) {
      data[propInCamelCase] = props[prop];
    }
    if ( true && nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data["nn" /* Shortcuts.NodeName */] = CATCH_VIEW;
    }
    if (propInCamelCase === COMPILE_MODE) {
      compileModeName = props[prop];
    }
  }
  // Children
  data["cn" /* Shortcuts.Childnodes */] = node.childNodes.filter(function (node) {
    return !isComment(node);
  }).map(hydrate);
  if (node.className !== '') {
    data["cl" /* Shortcuts.Class */] = node.className;
  }
  var cssText = node.cssText;
  if (cssText !== '' && nodeName !== 'swiper-item') {
    data["st" /* Shortcuts.Style */] = cssText;
  }
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyHydrateData', data, node);
  var nn = data["nn" /* Shortcuts.NodeName */];
  var componentAlias = componentsAlias[nn];
  if (componentAlias) {
    data["nn" /* Shortcuts.NodeName */] = componentAlias._num;
    for (var _prop in data) {
      if (_prop in componentAlias) {
        data[componentAlias[_prop]] = data[_prop];
        delete data[_prop];
      }
    }
  }
  if (compileModeName !== null) {
    data["nn" /* Shortcuts.NodeName */] = compileModeName;
  }
  var resData = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('transferHydrateData', data, node, componentAlias);
  return resData || data;
}
var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroEventTarget);
    this.__handlers = {};
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      type = type.toLowerCase();
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('onAddEvent', type, handler, options, this);
      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.addEventListener('begin', handler, options);
        this.addEventListener('end', handler, options);
        return;
      }
      var isCapture = Boolean(options);
      var isOnce = false;
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }
      if (isOnce) {
        var _wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element
          this.removeEventListener(type, _wrapper);
        };
        this.addEventListener(type, _wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }
       false && 0;
      // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
      // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
      // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
      // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
      var oldHandler = handler;
      handler = function handler() {
        return oldHandler.apply(this, arguments); // this 指向 Element
      };
      handler.oldHandler = oldHandler;
      var handlers = this.__handlers[type];
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();
      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.removeEventListener('begin', handler);
        this.removeEventListener('end', handler);
        return;
      }
      if (!handler) {
        return;
      }
      var handlers = this.__handlers[type];
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(handlers)) {
        return;
      }
      var index = handlers.findIndex(function (item) {
        if (item === handler || item.oldHandler === handler) return true;
      });
       false && 0;
      handlers.splice(index, 1);
    }
  }, {
    key: "isAnyEventBinded",
    value: function isAnyEventBinded() {
      var handlers = this.__handlers;
      var isAnyEventBinded = Object.keys(handlers).find(function (key) {
        return handlers[key].length;
      });
      return Boolean(isAnyEventBinded);
    }
  }]);
}();
var CHILDNODES = "cn" /* Shortcuts.Childnodes */;
var nodeId = incrementId();
var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  function TaroNode() {
    var _this3;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroNode);
    _this3 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroNode);
    _this3.parentNode = null;
    _this3.childNodes = [];
    _this3.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };
    _this3.uid = '_' + nodeId(); // dom 节点 id，开发者可修改
    _this3.sid = _this3.uid; // dom 节点全局唯一 id，不可被修改
    eventSource.set(_this3.sid, _this3);
    return _this3;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroNode, _TaroEventTarget);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroNode, [{
    key: "updateChildNodes",
    value: function updateChildNodes(isClean) {
      var _this4 = this;
      var cleanChildNodes = function cleanChildNodes() {
        return [];
      };
      var rerenderChildNodes = function rerenderChildNodes() {
        var childNodes = _this4.childNodes.filter(function (node) {
          return !isComment(node);
        });
        return childNodes.map(hydrate);
      };
      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(CHILDNODES),
        value: isClean ? cleanChildNodes : rerenderChildNodes
      });
    }
  }, {
    key: "updateSingleChild",
    value: function updateSingleChild(index) {
      var _this5 = this;
      this.childNodes.forEach(function (child, childIndex) {
        if (isComment(child)) return;
        if (index && childIndex < index) return;
        _this5.enqueueUpdate({
          path: child._path,
          value: _this5.hydrate(child)
        });
      });
    }
  }, {
    key: "_root",
    get: function get() {
      var _a;
      return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(refChild) {
      var index = this.childNodes.indexOf(refChild);
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .ensure */ .D8)(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "_path",
    get: function get() {
      var parentNode = this.parentNode;
      if (parentNode) {
        // 计算路径时，先过滤掉 comment 节点
        var list = parentNode.childNodes.filter(function (node) {
          return !isComment(node);
        });
        var indexOfNode = list.indexOf(this);
        var index = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getPathIndex', indexOfNode);
        return "".concat(parentNode._path, ".").concat(CHILDNODES, ".").concat(index);
      }
      return '';
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
  }, {
    key: "parentElement",
    get: function get() {
      var parentNode = this.parentNode;
      if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
        return parentNode;
      }
      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var childNodes = this.childNodes;
      return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    // eslint-disable-next-line accessor-pairs
  }, {
    key: "textContent",
    set: function set(text) {
      var removedNodes = this.childNodes.slice();
      var addedNodes = [];
      // Handle old children' data structure & ref
      while (this.firstChild) {
        this.removeChild(this.firstChild, {
          doUpdate: false
        });
      }
      if (text === '') {
        this.updateChildNodes(true);
      } else {
        var newText = env.document.createTextNode(text);
        addedNodes.push(newText);
        this.appendChild(newText);
        this.updateChildNodes();
      }
      // @Todo: appendChild 会多触发一次
      MutationObserver$1.record({
        type: "childList" /* MutationRecordType.CHILD_LIST */,
        target: this,
        removedNodes: removedNodes,
        addedNodes: addedNodes
      });
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
     * @scenario
     * [A,B,C]
     *   1. insert D before C, D has no parent
     *   2. insert D before C, D has the same parent of C
     *   3. insert D before C, D has the different parent of C
     */
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this6 = this;
      if (newChild.nodeName === DOCUMENT_FRAGMENT) {
        newChild.childNodes.reduceRight(function (previousValue, currentValue) {
          _this6.insertBefore(currentValue, previousValue);
          return currentValue;
        }, refChild);
        return newChild;
      }
      // Parent release newChild
      //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
      //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
      newChild.remove({
        cleanRef: false
      });
      var index = 0;
      // Data structure
      newChild.parentNode = this;
      if (refChild) {
        // insertBefore & replaceChild
        index = this.findIndex(refChild);
        this.childNodes.splice(index, 0, newChild);
      } else {
        // appendChild
        this.childNodes.push(newChild);
      }
      var childNodesLength = this.childNodes.length;
      // Serialization
      if (this._root) {
        if (!refChild) {
          // appendChild
          var isOnlyChild = childNodesLength === 1;
          if (isOnlyChild) {
            this.updateChildNodes();
          } else {
            this.enqueueUpdate({
              path: newChild._path,
              value: this.hydrate(newChild)
            });
          }
        } else if (isReplace) {
          // replaceChild
          this.enqueueUpdate({
            path: newChild._path,
            value: this.hydrate(newChild)
          });
        } else {
          // insertBefore 有两种更新模式
          // 比方说有 A B C 三个节点，现在要在 C 前插入 D
          // 1. 插入 D，然后更新整个父节点的 childNodes 数组
          // setData({ cn: [A, B, D, C] })
          // 2. 插入 D，然后更新 D 以及 D 之后每个节点的数据
          // setData ({
          //   cn.[2]: D,
          //   cn.[3]: C,
          // })
          // 由于微信解析 ’cn.[2]‘ 这些路径的时候也需要消耗时间，
          // 所以根据 insertBefore 插入的位置来做不同的处理
          var mark = childNodesLength * 2 / 3;
          if (mark > index) {
            // 如果 insertBefore 的位置在 childNodes 的 2/3 前，则为了避免解析路径消耗过多的时间，采用第一种方式
            this.updateChildNodes();
          } else {
            // 如果 insertBefore 的位置在 childNodes 的 2/3 之后，则采用第二种方式，避免 childNodes 的全量更新
            this.updateSingleChild(index);
          }
        }
      }
      MutationObserver$1.record({
        type: "childList" /* MutationRecordType.CHILD_LIST */,
        target: this,
        addedNodes: [newChild],
        removedNodes: isReplace ? [refChild] /** replaceChild */ : [],
        nextSibling: isReplace ? refChild.nextSibling /** replaceChild */ : refChild || null,
        previousSibling: newChild.previousSibling
      });
      return newChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @scenario
     * [A,B,C]
     *   1. append C, C has no parent
     *   2. append C, C has the same parent of B
     *   3. append C, C has the different parent of B
     */
  }, {
    key: "appendChild",
    value: function appendChild(newChild) {
      return this.insertBefore(newChild);
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     * @scenario
     * [A,B,C]
     *   1. replace B with C, C has no parent
     *   2. replace B with C, C has no parent, C has the same parent of B
     *   3. replace B with C, C has no parent, C has the different parent of B
     */
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode !== this) return;
      // Insert the newChild
      this.insertBefore(newChild, oldChild, true);
      // Destroy the oldChild
      //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
      //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
      oldChild.remove({
        doUpdate: false
      });
      return oldChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
     * @scenario
     * [A,B,C]
     *   1. remove A or B
     *   2. remove C
     */
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cleanRef = options.cleanRef,
        doUpdate = options.doUpdate;
      if (cleanRef !== false && doUpdate !== false) {
        // appendChild/replaceChild/insertBefore 不应该触发
        // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
        MutationObserver$1.record({
          type: "childList" /* MutationRecordType.CHILD_LIST */,
          target: this,
          removedNodes: [child],
          nextSibling: child.nextSibling,
          previousSibling: child.previousSibling
        });
      }
      // Data Structure
      var index = this.findIndex(child);
      this.childNodes.splice(index, 1);
      child.parentNode = null;
      // Set eventSource
      if (cleanRef !== false) {
        eventSource.removeNodeTree(child);
      }
      // Serialization
      if (this._root && doUpdate !== false) {
        this.updateChildNodes();
      }
      return child;
    }
  }, {
    key: "remove",
    value: function remove(options) {
      var _a;
      (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      var _a;
      (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
  }, {
    key: "ownerDocument",
    get: function get() {
      return env.document;
    }
  }], [{
    key: "extend",
    value: function extend(methodName, options) {
      _extend(TaroNode, methodName, options);
    }
  }]);
}(TaroEventTarget);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
var WEBKIT = 'webkit';
var styleProperties = ['all', 'appearance', 'blockOverflow', 'blockSize', 'bottom', 'clear', 'contain', 'content', 'continue', 'cursor', 'direction', 'display', 'filter', 'float', 'gap', 'height', 'inset', 'isolation', 'left', 'letterSpacing', 'lightingColor', 'markerSide', 'mixBlendMode', 'opacity', 'order', 'position', 'quotes', 'resize', 'right', 'rowGap', 'tabSize', 'tableLayout', 'top', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'zIndex', 'pointerEvents', 'aspectRatio'
/** 非常用 style */
// 'azimuth',
// 'backfaceVisibility',
// 'baselineShift',
// 'captionSide',
// 'chains',
// 'dominantBaseline',
// 'elevation',
// 'emptyCells',
// 'forcedColorAdjust',
// 'glyphOrientationVertical',
// 'hangingPunctuation',
// 'hyphenateCharacter',
// 'hyphens',
// 'imageOrientation',
// 'imageResolution',
// 'orphans',
// 'playDuring',
// 'pointerEvents',
// 'regionFragment',
// 'richness',
// 'running',
// 'scrollBehavior',
// 'speechRate',
// 'stress',
// 'stringSet',
// 'unicodeBidi',
// 'willChange',
// 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach(function (item) {
    styleProperties.push(prefix + item);
    if (prefix === WEBKIT) {
      styleProperties.push('Webkit' + item);
    }
  });
}
var color = 'Color';
var style = 'Style';
var width = 'Width';
var image = 'Image';
var size = 'Size';
var color_style_width = [color, style, width];
var fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
var fitlength_fitwidth_image_radius = [].concat(fitlength_fitwidth_image, ['Radius']);
var color_style_width_fitlength_fitwidth_image = [].concat(color_style_width, fitlength_fitwidth_image);
var endRadius_startRadius = ['EndRadius', 'StartRadius'];
var bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
var end_start = ['End', 'Start'];
var content_items_self = ['Content', 'Items', 'Self'];
var blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
var after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [].concat(color_style_width, ['Offset']));
combine('border', [].concat(color_style_width, ['Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']));
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [].concat(bottom_left_right_top, ['Trim']));
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [].concat(after_before, end_start, ['Anchor', 'Distance', 'Path', 'Position', 'Rotate']));
combine('perspective', ['Origin']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [].concat(after_before, ['Inside']), true);
combine('wrap', [].concat(after_before, ['Flow', 'Inside', 'Through']), true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [].concat(blockSize_height_inlineSize_width, ['Lines']), true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
combine(WEBKIT, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);
function recordCss(obj) {
  MutationObserver$1.record({
    type: "attributes" /* MutationRecordType.ATTRIBUTES */,
    target: obj._element,
    attributeName: 'style',
    oldValue: obj.cssText
  });
}
function enqueueUpdate(obj) {
  var element = obj._element;
  if (element._root) {
    element.enqueueUpdate({
      path: "".concat(element._path, ".", "st" /* Shortcuts.Style */),
      value: obj.cssText
    });
  }
}
function setStyle(newVal, styleKey) {
   false && 0;
  var old = this[styleKey];
  if (old === newVal) return;
  !this._pending && recordCss(this);
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .kZ)(newVal) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(newVal) || newVal === '') {
    this._usedStyleProp.delete(styleKey);
    delete this._value[styleKey];
  } else {
    this._usedStyleProp.add(styleKey);
    this._value[styleKey] = newVal;
  }
  !this._pending && enqueueUpdate(this);
}
function initStyle(ctor, styleProperties) {
  var properties = {};
  var _loop = function _loop() {
      var styleKey = styleProperties[i];
      if (ctor[styleKey]) return {
        v: void 0
      };
      properties[styleKey] = {
        get: function get() {
          var val = this._value[styleKey];
          return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .kZ)(val) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(val) ? '' : val;
        },
        set: function set(newVal) {
          setStyle.call(this, newVal, styleKey);
        }
      };
    },
    _ret;
  for (var i = 0; i < styleProperties.length; i++) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}
var Style = /*#__PURE__*/function () {
  function Style(element) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, Style);
    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this7 = this;
      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this7._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this7, newVal, styleKey);
        }
      });
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this8 = this;
      if (!this._usedStyleProp.size) return '';
      var texts = [];
      this._usedStyleProp.forEach(function (key) {
        var val = _this8[key];
        if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .kZ)(val) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(val)) return;
        var styleName = isCssVariable(key) ? key : (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toDashed */ .Lj)(key);
        if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
          styleName = "-".concat(styleName);
        }
        texts.push("".concat(styleName, ": ").concat(val, ";"));
      });
      return texts.join(' ');
    },
    set: function set(str) {
      var _this9 = this;
      this._pending = true;
      recordCss(this);
      this._usedStyleProp.forEach(function (prop) {
        _this9.removeProperty(prop);
      });
      if (str === '' || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(str) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .kZ)(str)) {
        this._pending = false;
        enqueueUpdate(this);
        return;
      }
      var rules = str.split(';');
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();
        if (rule === '') {
          continue;
        }
        // 可能存在 'background: url(http:x/y/z)' 的情况
        var _rule$split = rule.split(':'),
          _rule$split2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(_rule$split),
          propName = _rule$split2[0],
          valList = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_rule$split2).slice(1);
        var val = valList.join(':');
        if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(val)) {
          continue;
        }
        this.setProperty(propName.trim(), val.trim());
      }
      this._pending = false;
      enqueueUpdate(this);
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        // 支持 webkit 属性或 css 变量
        this.setCssVariables(propertyName);
      } else {
        propertyName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(propertyName);
      }
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .kZ)(value) || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(value)) {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(propertyName);
      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }
      var value = this[propertyName];
      this[propertyName] = undefined;
      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(propertyName);
      var value = this[propertyName];
      if (!value) {
        return '';
      }
      return value;
    }
  }]);
}();
initStyle(Style, styleProperties);
_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.tap('injectNewStyleProperties', function (newStyleProperties) {
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(newStyleProperties)) {
    initStyle(Style, newStyleProperties);
  } else {
    if (typeof newStyleProperties !== 'string') return;
    initStyle(Style, [newStyleProperties]);
  }
});
function returnTrue() {
  return true;
}
function treeToArray(root, predict) {
  var array = [];
  var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  var object = root;
  while (object) {
    if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
      array.push(object);
    }
    object = following(object, root);
  }
  return array;
}
function following(el, root) {
  var firstChild = el.firstChild;
  var isElmentTypeValid = el.nodeType === 1 /* NodeType.ELEMENT_NODE */ || el.nodeType === 9 /* NodeType.DOCUMENT_NODE */;
  // 如果当前 el 不是 element 或 document 元素，则可以直接不递归他的子元素了
  if (firstChild && isElmentTypeValid) {
    return firstChild;
  }
  var current = el;
  do {
    if (current === root) {
      return null;
    }
    var nextSibling = current.nextSibling;
    if (nextSibling) {
      return nextSibling;
    }
    current = current.parentElement;
  } while (current);
  return null;
}
var TaroElement = /*#__PURE__*/function (_TaroNode) {
  function TaroElement() {
    var _this0;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroElement);
    _this0 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroElement);
    _this0.props = {};
    _this0.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ;
    _this0.nodeType = 1 /* NodeType.ELEMENT_NODE */;
    _this0.style = new Style(_this0);
    _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('patchElement', _this0);
    return _this0;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroElement, _TaroNode);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroElement, [{
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this;
      // eslint-disable-next-line no-cond-assign
      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(listeners)) {
          continue;
        }
        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute(ID);
    },
    set: function set(val) {
      this.setAttribute(ID, val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute(CLASS) || '';
    },
    set: function set(val) {
      this.setAttribute(CLASS, val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute(STYLE) || '';
    }
  }, {
    key: "classList",
    get: function get() {
      return new ClassList(this.className, this);
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var props = this.props;
      var propKeys = Object.keys(props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (key) {
        return {
          name: key,
          value: props[key]
        };
      });
      return attrs.concat(style ? {
        name: STYLE,
        value: style
      } : []);
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';
      var childNodes = this.childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        text += childNodes[i].textContent;
      }
      return text;
    },
    set: function set(text) {
      (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropSet_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(TaroElement, "textContent", text, this, 1, 1);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    get: function get() {
      return function () {
        this.setAttribute(FOCUS, true);
      };
    }
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    ,
    set: function set(value) {
      this.setAttribute(FOCUS, value);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute(FOCUS, false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
       false && 0;
      var isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
      if (qualifiedName !== STYLE) {
        MutationObserver$1.record({
          target: this,
          type: "attributes" /* MutationRecordType.ATTRIBUTES */,
          attributeName: qualifiedName,
          oldValue: this.getAttribute(qualifiedName)
        });
      }
      switch (qualifiedName) {
        case STYLE:
          this.style.cssText = value;
          break;
        case ID:
          if (this.uid !== this.sid) {
            // eventSource[sid] 永远保留，直到组件卸载
            // eventSource[uid] 可变
            eventSource.delete(this.uid);
          }
          value = String(value);
          this.props[qualifiedName] = this.uid = value;
          eventSource.set(value, this);
          break;
        default:
          this.props[qualifiedName] = value;
          if (qualifiedName.startsWith('data-')) {
            if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ) {
              this.dataset = Object.create(null);
            }
            this.dataset[(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(qualifiedName.replace(/^data-/, ''))] = value;
          }
          break;
      }
      // Serialization
      if (!this._root) return;
      var componentsAlias = getComponentsAlias();
      var _alias = componentsAlias[this.nodeName];
      var viewAlias = componentsAlias[VIEW]._num;
      var staticViewAlias = componentsAlias[STATIC_VIEW]._num;
      var catchViewAlias = componentsAlias[CATCH_VIEW]._num;
      var _path = this._path;
      qualifiedName = shortcutAttr(qualifiedName);
      var qualifiedNameInCamelCase = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(qualifiedName);
      var payload = {
        path: "".concat(_path, ".").concat(qualifiedNameInCamelCase),
        value: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(value) ? function () {
          return value;
        } : value
      };
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
      if (_alias) {
        var qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
        payload.path = "".concat(_path, ".").concat((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(qualifiedNameAlias));
      }
      this.enqueueUpdate(payload);
      if (this.nodeName === VIEW) {
        if (qualifiedNameInCamelCase === CATCHMOVE) {
          // catchMove = true: catch-view
          // catchMove = false: view or static-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: value ? catchViewAlias : this.isAnyEventBinded() ? viewAlias : staticViewAlias
          });
        } else if (isPureView && isHasExtractProp(this)) {
          // pure-view => static-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: staticViewAlias
          });
        }
      }
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      var isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
      MutationObserver$1.record({
        target: this,
        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
        attributeName: qualifiedName,
        oldValue: this.getAttribute(qualifiedName)
      });
      if (qualifiedName === STYLE) {
        this.style.cssText = '';
      } else {
        var isInterrupt = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('onRemoveAttribute', this, qualifiedName);
        if (isInterrupt) {
          return;
        }
        if (!this.props.hasOwnProperty(qualifiedName)) {
          return;
        }
        delete this.props[qualifiedName];
      }
      // Serialization
      if (!this._root) return;
      var componentsAlias = getComponentsAlias();
      var _alias = componentsAlias[this.nodeName];
      var viewAlias = componentsAlias[VIEW]._num;
      var staticViewAlias = componentsAlias[STATIC_VIEW]._num;
      var pureViewAlias = componentsAlias[PURE_VIEW]._num;
      var _path = this._path;
      qualifiedName = shortcutAttr(qualifiedName);
      var qualifiedNameInCamelCase = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(qualifiedName);
      var payload = {
        path: "".concat(_path, ".").concat(qualifiedNameInCamelCase),
        value: ''
      };
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
      if (_alias) {
        var qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
        payload.path = "".concat(_path, ".").concat((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(qualifiedNameAlias));
      }
      this.enqueueUpdate(payload);
      if (this.nodeName === VIEW) {
        if (qualifiedNameInCamelCase === CATCHMOVE) {
          // catch-view => view or static-view or pure-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: this.isAnyEventBinded() ? viewAlias : isHasExtractProp(this) ? staticViewAlias : pureViewAlias
          });
        } else if (isStaticView && !isHasExtractProp(this)) {
          // static-view => pure-view
          this.enqueueUpdate({
            path: "".concat(_path, ".", "nn" /* Shortcuts.NodeName */),
            value: pureViewAlias
          });
        }
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this1 = this;
      return treeToArray(this, function (el) {
        return el.nodeName === tagName || tagName === '*' && _this1 !== el;
      });
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      var classNames = className.trim().split(/\s+/);
      return treeToArray(this, function (el) {
        var classList = el.classList;
        return classNames.every(function (c) {
          return classList.contains(c);
        });
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(listeners)) {
        return false;
      }
      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;
        if (listener._stop) {
          listener._stop = false;
        } else {
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyDispatchEvent', event, this);
          result = listener.call(this, event);
        }
        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(result) && event.mpEvent) {
          var res = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyTaroEventReturn', this, event, result);
          if (res) {
            event.mpEvent[EVENT_CALLBACK_RESULT] = result;
          }
        }
        if (event._end && event._stop) {
          break;
        }
      }
      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }
      return listeners != null;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      var name = this.nodeName;
      var SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getSpecialNodes');
      var sideEffect = true;
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(options) && options.sideEffect === false) {
        sideEffect = false;
        delete options.sideEffect;
      }
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyAddEventListener', this, sideEffect, getComponentsAlias);
      if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        var _componentsAlias = getComponentsAlias();
        var alias = _componentsAlias[name]._num;
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn" /* Shortcuts.NodeName */),
          value: alias
        });
      }
      (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(TaroElement, "addEventListener", this, 3)([type, handler, options]);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      var sideEffect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(TaroElement, "removeEventListener", this, 3)([type, handler]);
      var name = this.nodeName;
      var SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getSpecialNodes');
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyRemoveEventListener', this, sideEffect, getComponentsAlias);
      if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        var _componentsAlias2 = getComponentsAlias();
        var value = isHasExtractProp(this) ? "static-".concat(name) : "pure-".concat(name);
        var valueAlias = _componentsAlias2[value]._num;
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn" /* Shortcuts.NodeName */),
          value: valueAlias
        });
      }
    }
  }], [{
    key: "extend",
    value: function extend(methodName, options) {
      _extend(TaroElement, methodName, options);
    }
  }]);
}(TaroNode);
var options = {
  prerender: true,
  debug: false
};
function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}
function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;
  for (var i = start; i < end; i++) {
    var _char = str.charAt(i);
    if (_char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}
function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}
function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}
var whitespace = /\s/;
function isWhitespaceChar(_char2) {
  return whitespace.test(_char2);
}
var equalSign = /=/;
function isEqualSignChar(_char3) {
  return equalSign.test(_char3);
}
function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();
  if (options.html.skipElements.has(name)) {
    return true;
  }
  return false;
}
var alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);
    if (textEnd === -1) {
      return textEnd;
    }
    var _char4 = str.charAt(textEnd + 1);
    if (_char4 === '/' || _char4 === '!' || alphanumeric.test(_char4)) {
      return textEnd;
    }
    index = textEnd + 1;
  }
}
function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  var len = html.length;
  // backwrad
  for (var i = cursor - 1; i > wordBegin; i--) {
    var _char5 = html.charAt(i);
    if (!isWhitespaceChar(_char5)) {
      if (isEqualSignChar(_char5)) return false;
      break;
    }
  }
  // forward
  for (var _i2 = cursor + 1; _i2 < len; _i2++) {
    var _char6 = html.charAt(_i2);
    if (!isWhitespaceChar(_char6)) {
      if (isEqualSignChar(_char6)) return false;
      return true;
    }
  }
}
var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, Scaner);
    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
        position = this.position;
      var len = html.length;
      while (position.index < len) {
        var start = position.index;
        this.scanText();
        if (position.index === start) {
          var _isComment = html.startsWith('!--', start + 1);
          if (_isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();
            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }
      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
        position = this.position;
      var textEnd = findTextEnd(html, position.index);
      if (textEnd === position.index) {
        return;
      }
      if (textEnd === -1) {
        textEnd = html.length;
      }
      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
        position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length
      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length
      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }
      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
        position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
        position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
        position = this.position;
      var len = html.length;
      var start = position.index;
      while (start < len) {
        var _char7 = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(_char7) || _char7 === '/' || _char7 === '>');
        if (isTagChar) break;
        start++;
      }
      var end = start + 1;
      while (end < len) {
        var _char8 = html.charAt(end);
        var _isTagChar = !(isWhitespaceChar(_char8) || _char8 === '/' || _char8 === '>');
        if (!_isTagChar) break;
        end++;
      }
      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
        position = this.position,
        tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote
      var wordBegin = cursor; // index of word start
      var words = []; // "key", "key=value", "key='value'", etc
      var len = html.length;
      while (cursor < len) {
        var _char9 = html.charAt(cursor);
        if (quote) {
          var isQuoteEnd = _char9 === quote;
          if (isQuoteEnd) {
            quote = null;
          }
          cursor++;
          continue;
        }
        var isTagEnd = _char9 === '/' || _char9 === '>';
        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }
          break;
        }
        if (isWordEnd(cursor, wordBegin, html)) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }
          wordBegin = cursor + 1;
          cursor++;
          continue;
        }
        var isQuoteStart = _char9 === '\'' || _char9 === '"';
        if (isQuoteStart) {
          quote = _char9;
          cursor++;
          continue;
        }
        cursor++;
      }
      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';
      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');
        if (isNotPair) {
          var secondWord = words[i + 1];
          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }
            var thirdWord = words[i + 2];
            i += 1;
            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;
              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }
        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];
          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord2 = word + _secondWord;
            tokens.push({
              type: type,
              content: _newWord2
            });
            i += 1;
            continue;
          }
          var _newWord3 = word.slice(0, -1);
          tokens.push({
            type: type,
            content: _newWord3
          });
          continue;
        }
        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
        position = this.position;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;
      while (position.index < len) {
        var nextTag = html.indexOf('</', position.index);
        if (nextTag === -1) {
          this.scanText();
          break;
        }
        jumpPosition(position, html, nextTag);
        var name = this.scanTag();
        if (safeTagName === name.toLowerCase()) {
          break;
        }
      }
    }
  }]);
}();
function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";
  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }
  return str;
}
var LEFT_BRACKET = '{';
var RIGHT_BRACKET = '}';
var CLASS_SELECTOR = '.';
var ID_SELECTOR = '#';
var CHILD_COMBINATOR = '>';
var GENERAL_SIBLING_COMBINATOR = '~';
var ADJACENT_SIBLING_COMBINATOR = '+';
var StyleTagParser = /*#__PURE__*/function () {
  function StyleTagParser() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, StyleTagParser);
    this.styles = [];
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(StyleTagParser, [{
    key: "extractStyle",
    value: function extractStyle(src) {
      var _this10 = this;
      var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
      var html = src;
      // let html = src.replace(/\n/g, '')
      html = html.replace(REG_STYLE, function (_, $1) {
        var style = $1.trim();
        _this10.stringToSelector(style);
        return '';
      });
      return html.trim();
    }
  }, {
    key: "stringToSelector",
    value: function stringToSelector(style) {
      var _this11 = this;
      var lb = style.indexOf(LEFT_BRACKET);
      var _loop2 = function _loop2() {
        var rb = style.indexOf(RIGHT_BRACKET);
        var selectors = style.slice(0, lb).trim();
        var content = style.slice(lb + 1, rb);
        content = content.replace(/:(.*);/g, function (_, $1) {
          var t = $1.trim().replace(/ +/g, '+++');
          return ":".concat(t, ";");
        });
        content = content.replace(/ /g, '');
        content = content.replace(/\+\+\+/g, ' ');
        if (!/;$/.test(content)) {
          content += ';';
        }
        selectors.split(',').forEach(function (src) {
          var selectorList = _this11.parseSelector(src);
          _this11.styles.push({
            content: content,
            selectorList: selectorList
          });
        });
        style = style.slice(rb + 1);
        lb = style.indexOf(LEFT_BRACKET);
      };
      while (lb > -1) {
        _loop2();
      }
      // console.log('res this.styles: ', this.styles)
    }
  }, {
    key: "parseSelector",
    value: function parseSelector(src) {
      var list = src.trim().replace(/ *([>~+]) */g, ' $1').replace(/ +/g, ' ').replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]').split(' ');
      var selectors = list.map(function (item) {
        var firstChar = item.charAt(0);
        var selector = {
          isChild: firstChar === CHILD_COMBINATOR,
          isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
          isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
          tag: null,
          id: null,
          class: [],
          attrs: []
        };
        item = item.replace(/^[>~+]/, '');
        // 属性选择器
        item = item.replace(/\[(.+?)\]/g, function (_, $1) {
          var _$1$split = $1.split('='),
            _$1$split2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_$1$split, 2),
            key = _$1$split2[0],
            value = _$1$split2[1];
          var all = $1.indexOf('=') === -1;
          var attr = {
            all: all,
            key: key,
            value: all ? null : value
          };
          selector.attrs.push(attr);
          return '';
        });
        item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
          if ($1[0] === ID_SELECTOR) {
            // id 选择器
            selector.id = $1.substr(1);
          } else if ($1[0] === CLASS_SELECTOR) {
            // class 选择器
            selector.class.push($1.substr(1));
          }
          return '';
        });
        // 标签选择器
        if (item !== '') {
          selector.tag = item;
        }
        return selector;
      });
      return selectors;
    }
  }, {
    key: "matchStyle",
    value: function matchStyle(tagName, el, list) {
      var _this12 = this;
      var res = sortStyles(this.styles).reduce(function (str, _ref2, i) {
        var content = _ref2.content,
          selectorList = _ref2.selectorList;
        var idx = list[i];
        var selector = selectorList[idx];
        var nextSelector = selectorList[idx + 1];
        if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
          selector = nextSelector;
          idx += 1;
          list[i] += 1;
        }
        var isMatch = _this12.matchCurrent(tagName, el, selector);
        if (isMatch && selector.isGeneralSibling) {
          var prev = getPreviousElement(el);
          while (prev) {
            if (prev.h5tagName && _this12.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
              isMatch = true;
              break;
            }
            prev = getPreviousElement(prev);
            isMatch = false;
          }
        }
        if (isMatch && selector.isAdjacentSibling) {
          var _prev = getPreviousElement(el);
          if (!_prev || !_prev.h5tagName) {
            isMatch = false;
          } else {
            var isSiblingMatch = _this12.matchCurrent(_prev.h5tagName, _prev, selectorList[idx - 1]);
            if (!isSiblingMatch) {
              isMatch = false;
            }
          }
        }
        if (isMatch) {
          if (idx === selectorList.length - 1) {
            return str + content;
          } else if (idx < selectorList.length - 1) {
            list[i] += 1;
          }
        } else {
          // 直接子代组合器: >
          if (selector.isChild && idx > 0) {
            list[i] -= 1;
            if (_this12.matchCurrent(tagName, el, selectorList[list[i]])) {
              list[i] += 1;
            }
          }
        }
        return str;
      }, '');
      return res;
    }
  }, {
    key: "matchCurrent",
    value: function matchCurrent(tagName, el, selector) {
      // 标签选择器
      if (selector.tag && selector.tag !== tagName) return false;
      // id 选择器
      if (selector.id && selector.id !== el.id) return false;
      // class 选择器
      if (selector.class.length) {
        var classList = el.className.split(' ');
        for (var i = 0; i < selector.class.length; i++) {
          var cls = selector.class[i];
          if (classList.indexOf(cls) === -1) {
            return false;
          }
        }
      }
      // 属性选择器
      if (selector.attrs.length) {
        for (var _i3 = 0; _i3 < selector.attrs.length; _i3++) {
          var _selector$attrs$_i = selector.attrs[_i3],
            all = _selector$attrs$_i.all,
            key = _selector$attrs$_i.key,
            value = _selector$attrs$_i.value;
          if (all && !el.hasAttribute(key)) {
            return false;
          } else {
            var attr = el.getAttribute(key);
            if (attr !== unquote(value || '')) {
              return false;
            }
          }
        }
      }
      return true;
    }
  }]);
}();
function getPreviousElement(el) {
  var parent = el.parentElement;
  if (!parent) return null;
  var prev = el.previousSibling;
  if (!prev) return null;
  if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
}
// 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
function sortStyles(styles) {
  return styles.sort(function (s1, s2) {
    var hundreds1 = getHundredsWeight(s1.selectorList);
    var hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2) return hundreds1 - hundreds2;
    var tens1 = getTensWeight(s1.selectorList);
    var tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2) return tens1 - tens2;
    var ones1 = getOnesWeight(s1.selectorList);
    var ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}
function getHundredsWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.id ? 1 : 0);
  }, 0);
}
function getTensWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + cur.class.length + cur.attrs.length;
  }, 0);
}
function getOnesWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.tag ? 1 : 0);
  }, 0);
}
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
};
var specialElements = new Map([['a', {
  mapName: function mapName(props) {
    if (props.as && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(props.as)) return props.as.toLowerCase();
    return !props.href || (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(props.href) && /^javascript/.test(props.href) ? 'view' : 'navigator';
  }
}]]);
var getSpecialElementMapping = function getSpecialElementMapping(tag) {
  var expectsLowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  tag = expectsLowerCase ? tag.toLowerCase() : tag;
  return specialElements.get(tag);
};
var internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .internalComponents */ .YN).map(function (i) {
  return i.toLowerCase();
}).join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
var isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
var isInlineElements = makeMap('i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);
// specialElements
var isSpecialElements = makeMap('a', true);
var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};
function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];
  if (tagParents) {
    var currentIndex = stack.length - 1;
    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;
      if (parentTagName === tagName) {
        break;
      }
      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }
      currentIndex--;
    }
  }
  return false;
}
/**
 * 将属性数组转换为属性对象
 * @param attributes 字符串数组，包含属性信息
 * @returns 属性对象，键为属性名，值为属性值或true
 */
function attributesArray2Props(attributes) {
  var props = {};
  for (var i = 0; i < attributes.length; i++) {
    var attr = attributes[i];
    var _splitEqual = splitEqual(attr),
      _splitEqual2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_splitEqual, 2),
      key = _splitEqual2[0],
      value = _splitEqual2[1];
    props[key] = value == null ? true : unquote(value);
  }
  return props;
}
function getTagName(tag, attributes) {
  if (options.html.renderHTMLTag) {
    return tag;
  }
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  } else if (isSpecialElements(tag)) {
    // if it's special tag, the real tag is determined by the config mapping
    var mapping = getSpecialElementMapping(tag);
    var props = attributesArray2Props(attributes);
    if (mapping) {
      return mapping.mapName(props);
    }
  }
  return 'view';
}
function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  var key = str.slice(0, idx).trim();
  var value = str.slice(idx + sep.length).trim();
  return [key, value];
}
function format(children, document, styleOptions, parent) {
  return children.filter(function (child) {
    // 过滤注释和空文本节点
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }
    return true;
  }).map(function (child) {
    // 文本节点
    if (child.type === 'text') {
      var text = document.createTextNode(child.content);
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(options.html.transformText)) {
        text = options.html.transformText(text, child);
      }
      parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
      return text;
    }
    // img标签,把width和height写入style,删除原有的width、height和style属性
    if (child.tagName === 'img') {
      var styleText = '';
      var toBeRemovedIndexs = [];
      for (var i = 0; i < child.attributes.length; i++) {
        var attr = child.attributes[i];
        var _splitEqual3 = splitEqual(attr),
          _splitEqual4 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_splitEqual3, 2),
          key = _splitEqual4[0],
          value = _splitEqual4[1];
        if (key === 'width' || key === 'height') {
          styleText += "".concat(key, ":").concat(value, ";");
          toBeRemovedIndexs.push(i);
        } else if (key === 'style') {
          styleText = "".concat(styleText).concat(value, ";");
          toBeRemovedIndexs.push(i);
        }
      }
      child.attributes = child.attributes.filter(function (_, index) {
        return !toBeRemovedIndexs.includes(index);
      });
      child.attributes.push("style=".concat(styleText.replace(/['"]/g, '')));
    }
    var el = document.createElement(getTagName(child.tagName, child.attributes));
    el.h5tagName = child.tagName;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
    if (!options.html.renderHTMLTag) {
      el.className = "h5-".concat(child.tagName);
    }
    for (var _i4 = 0; _i4 < child.attributes.length; _i4++) {
      var _attr = child.attributes[_i4];
      var _splitEqual5 = splitEqual(_attr),
        _splitEqual6 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_splitEqual5, 2),
        _key2 = _splitEqual6[0],
        _value = _splitEqual6[1];
      if (_key2 === 'class') {
        el.className += ' ' + unquote(_value);
      } else if (_key2[0] === 'o' && _key2[1] === 'n') {
        continue;
      } else {
        el.setAttribute(_key2, _value == null ? true : unquote(_value));
      }
    }
    var styleTagParser = styleOptions.styleTagParser,
      descendantList = styleOptions.descendantList;
    var list = descendantList.slice();
    var style = styleTagParser.matchStyle(child.tagName, el, list);
    el.setAttribute('style', style + el.style.cssText);
    // console.log('style, ', style)
    format(child.children, document, {
      styleTagParser: styleTagParser,
      descendantList: list
    }, el);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }
    return el;
  });
}
function parser(html, document) {
  var styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children, document, {
    styleTagParser: styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0)
  });
}
function parse(state) {
  var tokens = state.tokens,
    stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;
  while (cursor < len) {
    var token = tokens[cursor];
    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }
    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();
    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;
      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }
      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }
      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }
    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;
    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }
    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;
      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }
        currentIndex = currentIndex - 1;
      }
    }
    var attributes = [];
    var attrToken = void 0;
    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }
    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }
  state.cursor = cursor;
}
options.html = {
  skipElements: new Set(['style', 'script']),
  voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
  closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup']),
  renderHTMLTag: false
};
function setInnerHTML(element, html) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  var children = parser(html, element.ownerDocument);
  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}
function getBoundingClientRectImpl() {
  var _this13 = this;
  if (!options.miniGlobal) return Promise.resolve(null);
  return new Promise(function (resolve) {
    var query = options.miniGlobal.createSelectorQuery();
    query.select("#".concat(_this13.uid)).boundingClientRect(function (res) {
      resolve(res);
    }).exec();
  });
}
function getTemplateContent(ctx) {
  if (ctx.nodeName === 'template') {
    var _document = ctx.ownerDocument;
    var content = _document.createElement(DOCUMENT_FRAGMENT);
    content.childNodes = ctx.childNodes;
    ctx.childNodes = [content];
    content.parentNode = ctx;
    content.childNodes.forEach(function (nodes) {
      nodes.parentNode = content;
    });
    return content;
  }
}

/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */
function insertAdjacentHTML(position, html) {
  var _a, _b;
  var parsedNodes = parser(html, this.ownerDocument);
  for (var i = 0; i < parsedNodes.length; i++) {
    var n = parsedNodes[i];
    switch (position) {
      case 'beforebegin':
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
        break;
      case 'afterbegin':
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }
        break;
      case 'beforeend':
        this.appendChild(n);
        break;
      case 'afterend':
        (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
        break;
    }
  }
}
function cloneNode() {
  var isDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var document = this.ownerDocument;
  var newNode;
  if (this.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
    newNode = document.createElement(this.nodeName);
  } else if (this.nodeType === 3 /* NodeType.TEXT_NODE */) {
    newNode = document.createTextNode('');
  }
  for (var key in this) {
    var value = this[key];
    // eslint-disable-next-line valid-typeof
    if ([PROPS, DATASET].includes(key) && _typeof(value) === OBJECT) {
      newNode[key] = Object.assign({}, value);
    } else if (key === '_value') {
      newNode[key] = value;
    } else if (key === STYLE) {
      newNode.style._value = Object.assign({}, value._value);
      newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
    }
  }
  if (isDeep) {
    newNode.childNodes = this.childNodes.map(function (node) {
      return node.cloneNode(true);
    });
  }
  return newNode;
}
function contains(node) {
  var isContains = false;
  this.childNodes.some(function (childNode) {
    var uid = childNode.uid;
    if (uid === node.uid || uid === node.id || childNode.contains(node)) {
      isContains = true;
      return true;
    }
  });
  return isContains;
}
if (true) {
  if (true) {
    TaroNode.extend('innerHTML', {
      set: function set(html) {
        setInnerHTML.call(this, this, html);
      },
      get: function get() {
        return '';
      }
    });
    if (false) {}
  }
  if (false) {}
  if (false) {}
  if (false) {}
  if (false) {}
}

// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroEvent);
    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
    this.button = 0;
    // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp
    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var _a, _b, _c, _d, _e;
      var cacheTarget = this.cacheTarget;
      if (!cacheTarget) {
        var target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
        var currentEle = env.document.getElementById(((_b = target.dataset) === null || _b === void 0 ? void 0 : _b.sid) || target.id || null);
        // Note：优先判断冒泡场景alipay的targetDataset的sid, 不然冒泡场景target属性吐出不对，其余拿取当前绑定id
        var element = env.document.getElementById(((_c = target.targetDataset) === null || _c === void 0 ? void 0 : _c.sid) || ((_d = target.dataset) === null || _d === void 0 ? void 0 : _d.sid) || target.id || null);
        target.dataset = Object.assign(Object.assign({}, currentEle !== null ? currentEle.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ), element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ);
        for (var key in (_e = this.mpEvent) === null || _e === void 0 ? void 0 : _e.detail) {
          target[key] = this.mpEvent.detail[key];
        }
        this.cacheTarget = target;
        return target;
      } else {
        return cacheTarget;
      }
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var cacheCurrentTarget = this.cacheCurrentTarget;
      if (!cacheCurrentTarget) {
        var doc = env.document;
        var currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
        var element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
        var targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
        if (element === null || element && element === targetElement) {
          this.cacheCurrentTarget = this.target;
          return this.target;
        }
        currentTarget.dataset = element.dataset;
        for (var key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
          currentTarget[key] = this.mpEvent.detail[key];
        }
        this.cacheCurrentTarget = currentTarget;
        return currentTarget;
      } else {
        return cacheCurrentTarget;
      }
    }
  }]);
}();
function createEvent(event, node) {
  if (typeof event === 'string') {
    // For Vue3 using document.createEvent
    return new TaroEvent(event, {
      bubbles: true,
      cancelable: true
    });
  }
  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);
  for (var key in event) {
    if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }
  if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
    // eslint-disable-next-line dot-notation
    domEv[KEY_CODE] = 13;
  }
  return domEv;
}
var eventsBatch = {};
function getEventCBResult(event) {
  var result = event[EVENT_CALLBACK_RESULT];
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(result)) {
    delete event[EVENT_CALLBACK_RESULT];
  }
  return result;
}
// 小程序的事件代理回调函数
function eventHandler(event) {
  var _a, _b;
  // Note: ohos 上事件没有设置 type、detail 类型 setter 方法，且部分事件（例如 load 等）缺失 target 导致事件错误
  event.type === undefined && Object.defineProperty(event, 'type', {
    value: event._type // ohos only
  });
  event.detail === undefined && Object.defineProperty(event, 'detail', {
    value: event._detail || Object.assign({}, event) // ohos only
  });
  event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyMpEventImpl', event);
  var currentTarget = event.currentTarget;
  var id = ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid /** sid */) || currentTarget.id /** uid */ || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || '';
  var node = env.document.getElementById(id);
  if (node) {
    var dispatch = function dispatch() {
      var e = createEvent(event, node);
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyTaroEvent', e, node);
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('dispatchTaroEvent', e, node);
      _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('dispatchTaroEventFinish', e, node);
    };
    if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.isExist('batchedEventUpdates')) {
      var type = event.type;
      if (!_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('isBubbleEvents', type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
        // 最上层组件统一 batchUpdate
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('batchedEventUpdates', function () {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach(function (fn) {
              return fn();
            });
            delete eventsBatch[type];
          }
          dispatch();
        });
        return getEventCBResult(event);
      } else {
        // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
      return getEventCBResult(event);
    }
  }
}
var FormElement = /*#__PURE__*/function (_TaroElement) {
  function FormElement() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, FormElement);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, FormElement, arguments);
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(FormElement, _TaroElement);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(FormElement, [{
    key: "type",
    get: function get() {
      var _a;
      return (_a = this.props[TYPE]) !== null && _a !== void 0 ? _a : '';
    },
    set: function set(val) {
      this.setAttribute(TYPE, val);
    }
  }, {
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props[VALUE];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute(VALUE, val);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (event.mpEvent) {
        var val = event.mpEvent.detail.value;
        if (event.type === CHANGE) {
          this.props.value = val;
        } else if (event.type === INPUT) {
          // Web 规范中表单组件的 value 应该跟着输入改变
          // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
          // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
          this.value = val;
        }
      }
      return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(FormElement, "dispatchEvent", this, 3)([event]);
    }
  }]);
}(TaroElement);
var Performance = /*#__PURE__*/function () {
  function Performance() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, Performance);
    this.recorder = new Map();
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }
      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }
      var now = Date.now();
      var prev = this.recorder.get(id);
      this.recorder.delete(id);
      var time = now - prev;
      // eslint-disable-next-line no-console
      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);
}();
var perf = new Performance();
function findCustomWrapper(root, dataPathArr) {
  // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
  var list = dataPathArr.slice(1);
  var currentData = root;
  var customWrapper;
  var splitedPath = '';
  list.some(function (item, i) {
    var key = item
    // '[0]' => '0'
    .replace(/^\[(.+)\]$/, '$1')
    // 'cn' => 'childNodes'
    .replace(/\bcn\b/g, 'childNodes');
    currentData = currentData[key];
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(currentData)) {
      currentData = currentData.filter(function (el) {
        return !isComment(el);
      });
    }
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(currentData)) return true;
    if (currentData.nodeName === CUSTOM_WRAPPER) {
      var res = customWrapperCache.get(currentData.sid);
      if (res) {
        customWrapper = res;
        splitedPath = dataPathArr.slice(i + 2).join('.');
      }
    }
  });
  if (customWrapper) {
    return {
      customWrapper: customWrapper,
      splitedPath: splitedPath
    };
  }
}
var TaroRootElement = /*#__PURE__*/function (_TaroElement2) {
  function TaroRootElement() {
    var _this14;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroRootElement);
    _this14 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroRootElement);
    _this14.updatePayloads = [];
    _this14.updateCallbacks = [];
    _this14.pendingUpdate = false;
    _this14.ctx = null;
    _this14.nodeName = ROOT_STR;
    _this14.tagName = ROOT_STR.toUpperCase();
    return _this14;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroRootElement, _TaroElement2);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroRootElement, [{
    key: "_path",
    get: function get() {
      return ROOT_STR;
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);
      if (!this.pendingUpdate && this.ctx) {
        this.performUpdate();
      }
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this15 = this;
      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('proxyToRaw', this.ctx);
      setTimeout(function () {
        var setDataMark = "".concat(SET_DATA, " \u5F00\u59CB\u65F6\u95F4\u6233 ").concat(Date.now());
        perf.start(setDataMark);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);
        while (_this15.updatePayloads.length > 0) {
          var _this15$updatePayload = _this15.updatePayloads.shift(),
            path = _this15$updatePayload.path,
            value = _this15$updatePayload.value;
          if (path.endsWith("cn" /* Shortcuts.Childnodes */)) {
            resetPaths.add(path);
          }
          data[path] = value;
        }
        var _loop3 = function _loop3(_path2) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path2.includes(p) && _path2 !== p) {
              delete data[_path2];
            }
          });
          var value = data[_path2];
          if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(value)) {
            data[_path2] = value();
          }
        };
        for (var _path2 in data) {
          _loop3(_path2);
        }
        // 预渲染
        if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(prerender)) return prerender(data);
        // 正常渲染
        _this15.pendingUpdate = false;
        var normalUpdate = {};
        var customWrapperMap = new Map();
        if (initRender) {
          // 初次渲染，使用页面级别的 setData
          normalUpdate = data;
        } else {
          // 更新渲染，区分 CustomWrapper 与页面级别的 setData
          for (var p in data) {
            var dataPathArr = p.split('.');
            var found = findCustomWrapper(_this15, dataPathArr);
            if (found) {
              // 此项数据使用 CustomWrapper 去更新
              var customWrapper = found.customWrapper,
                splitedPath = found.splitedPath;
              // 合并同一个 customWrapper 的相关更新到一次 setData 中
              customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, customWrapperMap.get(customWrapper) || {}), (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({}, "i.".concat(splitedPath), data[p])));
            } else {
              // 此项数据使用页面去更新
              normalUpdate[p] = data[p];
            }
          }
        }
        var customWrapperCount = customWrapperMap.size;
        var isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
        var updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
        var executeTime = 0;
        var cb = function cb() {
          if (++executeTime === updateArrLen) {
            perf.stop(setDataMark);
            _this15.flushUpdateCallback();
            initRender && perf.stop(PAGE_INIT);
          }
        };
        // custom-wrapper setData
        if (customWrapperCount) {
          customWrapperMap.forEach(function (data, ctx) {
            if (false) {}
            ctx.setData(data, cb);
          });
        }
        // page setData
        if (isNeedNormalUpdate) {
          if (false) {}
          ctx.setData(normalUpdate, cb);
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallback",
    value: function enqueueUpdateCallback(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      var updateCallbacks = this.updateCallbacks;
      if (!updateCallbacks.length) return;
      var copies = updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }]);
}(TaroElement);
var TaroText = /*#__PURE__*/function (_TaroNode2) {
  function TaroText(value) {
    var _this16;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroText);
    _this16 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroText);
    _this16.nodeType = 3 /* NodeType.TEXT_NODE */;
    _this16.nodeName = '#text';
    _this16._value = value;
    return _this16;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroText, _TaroNode2);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroText, [{
    key: "textContent",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      MutationObserver$1.record({
        target: this,
        type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
        oldValue: this._value
      });
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v" /* Shortcuts.Text */),
        value: text
      });
    }
  }, {
    key: "nodeValue",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this.textContent = text;
    }
  }, {
    key: "data",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this.textContent = text;
    }
  }]);
}(TaroNode);
var _dict, _a;
var findReg = /[!'()~]|%20|%00/g;
var plusReg = /\+/g;
var replaceCharMap = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+',
  '%00': '\x00'
};
function replacer(match) {
  return replaceCharMap[match];
}
function appendTo(dict, name, value) {
  var res = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(value) ? value.join(',') : value;
  if (name in dict) dict[name].push(res);else dict[name] = [res];
}
function addEach(value, key) {
  appendTo(this, key, value);
}
function decode(str) {
  return decodeURIComponent(str.replace(plusReg, ' '));
}
function encode(str) {
  return encodeURIComponent(str).replace(findReg, replacer);
}
var URLSearchParams =  false ? 0 : (_a = /*#__PURE__*/function () {
  function _a(query) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, _a);
    _dict.set(this, Object.create(null));
    query !== null && query !== void 0 ? query : query = '';
    var dict = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f");
    if (typeof query === 'string') {
      if (query.charAt(0) === '?') {
        query = query.slice(1);
      }
      for (var pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
        var value = pairs[i];
        var index = value.indexOf('=');
        // 针对不规范的 url 参数做容错处理，如：word=你%好
        try {
          if (index > -1) {
            appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
          } else if (value.length) {
            appendTo(dict, decode(value), '');
          }
        } catch (err) {
          if (false) {}
        }
      }
    } else {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(query)) {
        for (var _i5 = 0, _length = query.length; _i5 < _length; _i5++) {
          var _value2 = query[_i5];
          appendTo(dict, _value2[0], _value2[1]);
        }
      } else if (query.forEach) {
        query.forEach(addEach, dict);
      } else {
        for (var key in query) {
          appendTo(dict, key, query[key]);
        }
      }
    }
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_a, [{
    key: "append",
    value: function append(name, value) {
      appendTo((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f"), name, value);
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      delete (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f")[name];
    }
  }, {
    key: "get",
    value: function get(name) {
      var dict = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f");
      return name in dict ? dict[name][0] : null;
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var dict = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f");
      return name in dict ? dict[name].slice(0) : [];
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f");
    }
  }, {
    key: "keys",
    value: function keys() {
      return Object.keys((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f"));
    }
  }, {
    key: "set",
    value: function set(name, value) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f")[name] = ['' + value];
    }
  }, {
    key: "forEach",
    value: function forEach(callback, thisArg) {
      var dict = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f");
      Object.getOwnPropertyNames(dict).forEach(function (name) {
        dict[name].forEach(function (value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {};
    }
  }, {
    key: "toString",
    value: function toString() {
      var dict = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _dict, "f");
      var query = [];
      for (var key in dict) {
        var name = encode(key);
        for (var i = 0, value = dict[key]; i < value.length; i++) {
          query.push(name + '=' + encode(value[i]));
        }
      }
      return query.join('&');
    }
  }]);
}(), _dict = new WeakMap(), _a);
var _TaroURL_hash, _TaroURL_hostname, _TaroURL_pathname, _TaroURL_port, _TaroURL_protocol, _TaroURL_search;
var TaroURL = /*#__PURE__*/function () {
  function TaroURL(url, base) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroURL);
    /* private property */
    _TaroURL_hash.set(this, '');
    _TaroURL_hostname.set(this, '');
    _TaroURL_pathname.set(this, '');
    _TaroURL_port.set(this, '');
    _TaroURL_protocol.set(this, '');
    _TaroURL_search.set(this, void 0);
    if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(url)) url = String(url);
    var parseResult = parseUrlBase(url, base);
    var hash = parseResult.hash,
      hostname = parseResult.hostname,
      pathname = parseResult.pathname,
      port = parseResult.port,
      protocol = parseResult.protocol,
      search = parseResult.search;
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_hash, hash, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_hostname, hostname, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_pathname, pathname || '/', "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_port, port, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_protocol, protocol, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_search, new URLSearchParams(search), "f");
  }
  /* public property */
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroURL, [{
    key: "protocol",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_protocol, "f");
    },
    set: function set(val) {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val) && (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_protocol, val.trim(), "f");
    }
  }, {
    key: "host",
    get: function get() {
      return this.hostname + (this.port ? ':' + this.port : '');
    },
    set: function set(val) {
      if (val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) {
        val = val.trim();
        var _parseUrl = parseUrl("//".concat(val)),
          hostname = _parseUrl.hostname,
          port = _parseUrl.port;
        this.hostname = hostname;
        this.port = port;
      }
    }
  }, {
    key: "hostname",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_hostname, "f");
    },
    set: function set(val) {
      val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val) && (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_hostname, val.trim(), "f");
    }
  }, {
    key: "port",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_port, "f");
    },
    set: function set(val) {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val) && (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_port, val.trim(), "f");
    }
  }, {
    key: "pathname",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_pathname, "f");
    },
    set: function set(val) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) {
        val = val.trim();
        var HEAD_REG = /^(\/|\.\/|\.\.\/)/;
        var temp = val;
        while (HEAD_REG.test(temp)) {
          temp = temp.replace(HEAD_REG, '');
        }
        if (temp) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_pathname, '/' + temp, "f");else (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_pathname, '/', "f");
      }
    }
  }, {
    key: "search",
    get: function get() {
      var val = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_search, "f").toString();
      return val.length === 0 || val.startsWith('?') ? val : "?".concat(val);
    },
    set: function set(val) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) {
        val = val.trim();
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_search, new URLSearchParams(val), "f");
      }
    }
  }, {
    key: "hash",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_hash, "f");
    },
    set: function set(val) {
      if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) {
        val = val.trim();
        if (val) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_hash, val.startsWith('#') ? val : "#".concat(val), "f");else (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroURL_hash, '', "f");
      }
    }
  }, {
    key: "href",
    get: function get() {
      return "".concat(this.protocol, "//").concat(this.host).concat(this.pathname).concat(this.search).concat(this.hash);
    },
    set: function set(val) {
      if (val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) {
        val = val.trim();
        var _parseUrl2 = parseUrl(val),
          protocol = _parseUrl2.protocol,
          hostname = _parseUrl2.hostname,
          port = _parseUrl2.port,
          hash = _parseUrl2.hash,
          search = _parseUrl2.search,
          pathname = _parseUrl2.pathname;
        this.protocol = protocol;
        this.hostname = hostname;
        this.pathname = pathname;
        this.port = port;
        this.hash = hash;
        this.search = search;
      }
    }
  }, {
    key: "origin",
    get: function get() {
      return "".concat(this.protocol, "//").concat(this.host);
    },
    set: function set(val) {
      if (val && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) {
        val = val.trim();
        var _parseUrl3 = parseUrl(val),
          protocol = _parseUrl3.protocol,
          hostname = _parseUrl3.hostname,
          port = _parseUrl3.port;
        this.protocol = protocol;
        this.hostname = hostname;
        this.port = port;
      }
    }
  }, {
    key: "searchParams",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroURL_search, "f");
    }
    // public method
  }, {
    key: "toString",
    value: function toString() {
      return this.href;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
    // convenient for deconstructor
  }, {
    key: "_toRaw",
    value: function _toRaw() {
      return {
        protocol: this.protocol,
        port: this.port,
        host: this.host,
        hostname: this.hostname,
        pathname: this.pathname,
        hash: this.hash,
        search: this.search,
        origin: this.origin,
        href: this.href
      };
    }
  }], [{
    key: "createObjectURL",
    value: function createObjectURL() {
      throw new Error('Oops, not support URL.createObjectURL() in miniprogram.');
    }
  }, {
    key: "revokeObjectURL",
    value: function revokeObjectURL() {
      throw new Error('Oops, not support URL.revokeObjectURL() in miniprogram.');
    }
  }]);
}();
_TaroURL_hash = new WeakMap(), _TaroURL_hostname = new WeakMap(), _TaroURL_pathname = new WeakMap(), _TaroURL_port = new WeakMap(), _TaroURL_protocol = new WeakMap(), _TaroURL_search = new WeakMap();
var URL =  false ? 0 : TaroURL;
function parseUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var result = {
    href: '',
    origin: '',
    protocol: '',
    hostname: '',
    host: '',
    port: '',
    pathname: '',
    search: '',
    hash: ''
  };
  if (!url || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(url)) return result;
  url = url.trim();
  var PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  var matches = url.match(PATTERN);
  if (!matches) return result;
  // TODO: username & password ?
  result.protocol = matches[1] || 'https:';
  result.hostname = matches[6] || 'taro.com';
  result.port = matches[8] || '';
  result.pathname = matches[9] || '/';
  result.search = matches[10] || '';
  result.hash = matches[12] || '';
  result.href = url;
  result.origin = result.protocol + '//' + result.hostname;
  result.host = result.hostname + (result.port ? ":".concat(result.port) : '');
  return result;
}
function parseUrlBase(url, base) {
  var VALID_URL = /^(https?:)\/\//i;
  var fullUrl = '';
  var parsedBase = null;
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(base)) {
    base = String(base).trim();
    if (!VALID_URL.test(base)) throw new TypeError("Failed to construct 'URL': Invalid base URL");
    parsedBase = parseUrl(base);
  }
  url = String(url).trim();
  if (VALID_URL.test(url)) {
    fullUrl = url;
  } else if (parsedBase) {
    if (url) {
      if (url.startsWith('//')) {
        fullUrl = parsedBase.protocol + url;
      } else {
        fullUrl = parsedBase.origin + (url.startsWith('/') ? url : "/".concat(url));
      }
    } else {
      fullUrl = parsedBase.href;
    }
  } else {
    throw new TypeError("Failed to construct 'URL': Invalid URL");
  }
  return parseUrl(fullUrl);
}
var AnchorElement = /*#__PURE__*/function (_TaroElement3) {
  function AnchorElement() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, AnchorElement);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, AnchorElement, arguments);
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(AnchorElement, _TaroElement3);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(AnchorElement, [{
    key: "href",
    get: function get() {
      var _a;
      return (_a = this.props["href" /* AnchorElementAttrs.HREF */]) !== null && _a !== void 0 ? _a : '';
    },
    set: function set(val) {
      this.setAttribute("href" /* AnchorElementAttrs.HREF */, val);
    }
  }, {
    key: "protocol",
    get: function get() {
      var _a;
      return (_a = this.props["protocol" /* AnchorElementAttrs.PROTOCOL */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "host",
    get: function get() {
      var _a;
      return (_a = this.props["host" /* AnchorElementAttrs.HOST */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "search",
    get: function get() {
      var _a;
      return (_a = this.props["search" /* AnchorElementAttrs.SEARCH */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "hash",
    get: function get() {
      var _a;
      return (_a = this.props["hash" /* AnchorElementAttrs.HASH */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "hostname",
    get: function get() {
      var _a;
      return (_a = this.props["hostname" /* AnchorElementAttrs.HOSTNAME */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "port",
    get: function get() {
      var _a;
      return (_a = this.props["port" /* AnchorElementAttrs.PORT */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "pathname",
    get: function get() {
      var _a;
      return (_a = this.props["pathname" /* AnchorElementAttrs.PATHNAME */]) !== null && _a !== void 0 ? _a : '';
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      if (qualifiedName === "href" /* AnchorElementAttrs.HREF */) {
        var willSetAttr = parseUrl(value);
        for (var k in willSetAttr) {
          (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(AnchorElement, "setAttribute", this, 3)([k, willSetAttr[k]]);
        }
      } else {
        (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(AnchorElement, "setAttribute", this, 3)([qualifiedName, value]);
      }
    }
  }]);
}(TaroElement);
var TransferElement = /*#__PURE__*/function (_TaroElement4) {
  function TransferElement(dataName) {
    var _this17;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TransferElement);
    _this17 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TransferElement);
    _this17.dataName = dataName;
    _this17.isTransferElement = true;
    return _this17;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TransferElement, _TaroElement4);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TransferElement, [{
    key: "_path",
    get: function get() {
      return this.dataName;
    }
  }]);
}(TaroElement);
var TaroDocument = /*#__PURE__*/function (_TaroElement5) {
  function TaroDocument() {
    var _this18;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroDocument);
    _this18 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroDocument);
    _this18.createEvent = createEvent;
    _this18.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
    _this18.nodeName = DOCUMENT_ELEMENT_NAME;
    return _this18;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroDocument, _TaroElement5);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      var nodeName = type.toLowerCase();
      var element;
      switch (true) {
        case nodeName === ROOT_STR:
          element = new TaroRootElement();
          return element;
        case _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .controlledComponent */ .Ig.has(nodeName):
          element = new FormElement();
          break;
        case nodeName === A:
          element = new AnchorElement();
          break;
        case nodeName === 'page-meta':
        case nodeName === 'navigation-bar':
          element = new TransferElement((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .toCamelCase */ .Cb)(nodeName));
          break;
        default:
          element = new TaroElement();
          break;
      }
      element.nodeName = nodeName;
      element.tagName = type.toUpperCase();
      return element;
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
  }, {
    key: "createElementNS",
    value: function createElementNS(_svgNS, type) {
      return this.createElement(type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(el) ? null : el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(query) {
      // 为了 Vue3 的乞丐版实现
      if (/^#/.test(query)) {
        return this.getElementById(query.slice(1));
      }
      return null;
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll() {
      // fake hack
      return [];
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
  }, {
    key: "createComment",
    value: function createComment() {
      var textnode = new TaroText('');
      textnode.nodeName = COMMENT;
      return textnode;
    }
  }, {
    key: "defaultView",
    get: function get() {
      return env.window;
    }
  }]);
}(TaroElement);
function createDocument() {
  /**
     * <document>
     *   <html>
     *     <head></head>
     *     <body>
     *       <container>
     *         <app id="app" />
     *       </container>
     *     </body>
     *   </html>
     * </document>
     */
  var doc = new TaroDocument();
  var documentCreateElement = doc.createElement.bind(doc);
  var html = documentCreateElement(HTML);
  var head = documentCreateElement(HEAD);
  var body = documentCreateElement(BODY);
  var app = documentCreateElement(APP);
  app.id = APP;
  var container = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
  doc.appendChild(html);
  html.appendChild(head);
  html.appendChild(body);
  body.appendChild(container);
  container.appendChild(app);
  doc.documentElement = html;
  doc.head = head;
  doc.body = body;
  return doc;
}
var document$1 =  false ? 0 : env.document = createDocument();
var getComputedStyle =  false ? 0 : function (element) {
  return element.style;
};
var eventCenter = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getEventCenter', _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .Events */ .sV);

/**
 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
 */
var RuntimeCache = /*#__PURE__*/function () {
  function RuntimeCache(name) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, RuntimeCache);
    this.cache = new Map();
    this.name = name;
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(RuntimeCache, [{
    key: "has",
    value: function has(identifier) {
      return this.cache.has(identifier);
    }
  }, {
    key: "set",
    value: function set(identifier, ctx) {
      if (identifier && ctx) {
        this.cache.set(identifier, ctx);
      }
    }
  }, {
    key: "get",
    value: function get(identifier) {
      if (this.has(identifier)) return this.cache.get(identifier);
    }
  }, {
    key: "delete",
    value: function _delete(identifier) {
      this.cache.delete(identifier);
    }
  }]);
}();
var _TaroHistory_instances, _TaroHistory_location, _TaroHistory_stack, _TaroHistory_cur, _TaroHistory_window, _TaroHistory_reset;
var cache$1 = new RuntimeCache('history');
var TaroHistory = /*#__PURE__*/function (_Events) {
  function TaroHistory(location, options) {
    var _this19;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroHistory);
    _this19 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroHistory);
    _TaroHistory_instances.add(_this19);
    /* private property */
    _TaroHistory_location.set(_this19, void 0);
    _TaroHistory_stack.set(_this19, []);
    _TaroHistory_cur.set(_this19, 0);
    _TaroHistory_window.set(_this19, void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_window, options.window, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_location, location, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_location, "f").on('__record_history__', function (href) {
      var _a;
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_cur, (_a = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_cur, "f"), _a++, _a), "f");
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_stack, (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_stack, "f").slice(0, (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_cur, "f")), "f");
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_stack, "f").push({
        state: null,
        title: '',
        url: href
      });
    }, null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_location, "f").on('__reset_history__', function (href) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_instances, "m", _TaroHistory_reset).call(_this19, href);
    }, null);
    // 切换上下文行为
    _this19.on(CONTEXT_ACTIONS.INIT, function () {
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_instances, "m", _TaroHistory_reset).call(_this19);
    }, null);
    _this19.on(CONTEXT_ACTIONS.RESTORE, function (pageId) {
      cache$1.set(pageId, {
        location: (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_location, "f"),
        stack: (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_stack, "f").slice(),
        cur: (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_cur, "f")
      });
    }, null);
    _this19.on(CONTEXT_ACTIONS.RECOVER, function (pageId) {
      if (cache$1.has(pageId)) {
        var ctx = cache$1.get(pageId);
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_location, ctx.location, "f");
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_stack, ctx.stack, "f");
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this19, _TaroHistory_cur, ctx.cur, "f");
      }
    }, null);
    _this19.on(CONTEXT_ACTIONS.DESTORY, function (pageId) {
      cache$1.delete(pageId);
    }, null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this19, _TaroHistory_instances, "m", _TaroHistory_reset).call(_this19);
    return _this19;
  }
  /* public property */
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroHistory, _Events);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroHistory, [{
    key: "length",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f").length;
    }
  }, {
    key: "state",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f")[(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_cur, "f")].state;
    }
    /* public method */
  }, {
    key: "go",
    value: function go(delta) {
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .Et)(delta) || isNaN(delta)) return;
      var targetIdx = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_cur, "f") + delta;
      targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroHistory_cur, targetIdx, "f");
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f")[(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_cur, "f")].url);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_window, "f").trigger('popstate', (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f")[(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_cur, "f")]);
    }
  }, {
    key: "back",
    value: function back() {
      this.go(-1);
    }
  }, {
    key: "forward",
    value: function forward() {
      this.go(1);
    }
  }, {
    key: "pushState",
    value: function pushState(state, title, url) {
      if (!url || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(url)) return;
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroHistory_stack, (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f").slice(0, (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_cur, "f") + 1), "f");
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f").push({
        state: state,
        title: title,
        url: url
      });
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroHistory_cur, this.length - 1, "f");
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
    }
  }, {
    key: "replaceState",
    value: function replaceState(state, title, url) {
      if (!url || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(url)) return;
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_stack, "f")[(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_cur, "f")] = {
        state: state,
        title: title,
        url: url
      };
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
    }
    // For debug
  }, {
    key: "cache",
    get: function get() {
      return cache$1;
    }
  }]);
}(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .Events */ .sV);
_TaroHistory_location = new WeakMap(), _TaroHistory_stack = new WeakMap(), _TaroHistory_cur = new WeakMap(), _TaroHistory_window = new WeakMap(), _TaroHistory_instances = new WeakSet(), _TaroHistory_reset = function _TaroHistory_reset() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroHistory_stack, [{
    state: null,
    title: '',
    url: href || (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroHistory_location, "f").href
  }], "f");
  (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroHistory_cur, 0, "f");
};
var History =  false ? 0 : TaroHistory;
var Current = {
  app: null,
  router: null,
  page: null
};
var getCurrentInstance = function getCurrentInstance() {
  return Current;
};
var _TaroLocation_instances, _TaroLocation_url, _TaroLocation_noCheckUrl, _TaroLocation_window, _TaroLocation_reset, _TaroLocation_getPreValue, _TaroLocation_rollBack, _TaroLocation_recordHistory, _TaroLocation_checkUrlChange;
var INIT_URL = 'https://taro.com';
var cache = new RuntimeCache('location');
var TaroLocation = /*#__PURE__*/function (_Events2) {
  function TaroLocation(options) {
    var _this20;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroLocation);
    _this20 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroLocation);
    _TaroLocation_instances.add(_this20);
    /* private property */
    _TaroLocation_url.set(_this20, new URL(INIT_URL));
    _TaroLocation_noCheckUrl.set(_this20, false);
    _TaroLocation_window.set(_this20, void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this20, _TaroLocation_window, options.window, "f");
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_instances, "m", _TaroLocation_reset).call(_this20);
    _this20.on('__set_href_without_history__', function (href) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this20, _TaroLocation_noCheckUrl, true, "f");
      var lastHash = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_url, "f").hash;
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_url, "f").href = generateFullUrl(href);
      if (lastHash !== (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_url, "f").hash) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_window, "f").trigger('hashchange');
      }
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this20, _TaroLocation_noCheckUrl, false, "f");
    }, null);
    // 切换上下文行为
    _this20.on(CONTEXT_ACTIONS.INIT, function () {
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_instances, "m", _TaroLocation_reset).call(_this20);
    }, null);
    _this20.on(CONTEXT_ACTIONS.RESTORE, function (pageId) {
      cache.set(pageId, {
        lastHref: _this20.href
      });
    }, null);
    _this20.on(CONTEXT_ACTIONS.RECOVER, function (pageId) {
      // 数据恢复时，不需要执行跳转
      if (cache.has(pageId)) {
        var ctx = cache.get(pageId);
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this20, _TaroLocation_noCheckUrl, true, "f");
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(_this20, _TaroLocation_url, "f").href = ctx.lastHref;
        (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(_this20, _TaroLocation_noCheckUrl, false, "f");
      }
    }, null);
    _this20.on(CONTEXT_ACTIONS.DESTORY, function (pageId) {
      cache.delete(pageId);
    }, null);
    return _this20;
  }
  /* public property */
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroLocation, _Events2);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroLocation, [{
    key: "protocol",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").protocol;
    },
    set: function set(val) {
      var REG = /^(http|https):$/i;
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val) || !REG.test(val.trim())) return;
      val = val.trim();
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").protocol = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "host",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").host;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) return;
      val = val.trim();
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").host = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "hostname",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").hostname;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) return;
      val = val.trim();
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").hostname = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "port",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").port;
    },
    set: function set(val) {
      var xVal = Number(val = val.trim());
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .Et)(xVal) || xVal <= 0) return;
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").port = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "pathname",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").pathname;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) return;
      val = val.trim();
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").pathname = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "search",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").search;
    },
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) return;
      val = val.trim();
      val = val.startsWith('?') ? val : "?".concat(val);
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").search = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "hash",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").hash;
    }
    // 小程序的navigateTo存在截断hash字符串的问题
    ,
    set: function set(val) {
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val)) return;
      val = val.trim();
      val = val.startsWith('#') ? val : "#".concat(val);
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").hash = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "href",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").href;
    },
    set: function set(val) {
      var REG = /^(http:|https:)?\/\/.+/;
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val) || !REG.test(val = val.trim())) return;
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").href = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
  }, {
    key: "origin",
    get: function get() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").origin;
    },
    set: function set(val) {
      var REG = /^(http:|https:)?\/\/.+/;
      if (!val || !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(val) || !REG.test(val = val.trim())) return;
      var preValue = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
      (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").origin = val;
      if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue)) (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    /* public method */
  }, {
    key: "assign",
    value: function assign() {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .warn */ .R8)(true, '小程序环境中调用location.assign()无效.');
    }
  }, {
    key: "reload",
    value: function reload() {
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .warn */ .R8)(true, '小程序环境中调用location.reload()无效.');
    }
  }, {
    key: "replace",
    value: function replace(url) {
      this.trigger('__set_href_without_history__', url);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.href;
    }
    // For debug
  }, {
    key: "cache",
    get: function get() {
      return cache;
    }
  }]);
}(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .Events */ .sV);
_TaroLocation_url = new WeakMap(), _TaroLocation_noCheckUrl = new WeakMap(), _TaroLocation_window = new WeakMap(), _TaroLocation_instances = new WeakSet(), _TaroLocation_reset = function _TaroLocation_reset() {
  var Current = getCurrentInstance();
  var router = Current.router;
  if (router) {
    var path = router.path,
      params = router.params;
    var searchArr = Object.keys(params).map(function (key) {
      return "".concat(key, "=").concat(params[key]);
    });
    var searchStr = searchArr.length > 0 ? '?' + searchArr.join('&') : '';
    var url = "".concat(INIT_URL).concat(path.startsWith('/') ? path : '/' + path).concat(searchStr);
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldSet */ .GG)(this, _TaroLocation_url, new URL(url), "f");
    this.trigger('__reset_history__', this.href);
  }
}, _TaroLocation_getPreValue = function _TaroLocation_getPreValue() {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f")._toRaw();
}, _TaroLocation_rollBack = function _TaroLocation_rollBack(href) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f").href = href;
}, _TaroLocation_recordHistory = function _TaroLocation_recordHistory() {
  this.trigger('__record_history__', this.href);
}, _TaroLocation_checkUrlChange = function _TaroLocation_checkUrlChange(preValue) {
  if ((0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_noCheckUrl, "f")) {
    return false;
  }
  var _classPrivateFieldGe = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_url, "f")._toRaw(),
    protocol = _classPrivateFieldGe.protocol,
    hostname = _classPrivateFieldGe.hostname,
    port = _classPrivateFieldGe.port,
    pathname = _classPrivateFieldGe.pathname,
    search = _classPrivateFieldGe.search,
    hash = _classPrivateFieldGe.hash;
  // 跨域三要素不允许修改
  if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
    return false;
  }
  // pathname
  if (pathname !== preValue.pathname) {
    return true;
  }
  // search
  if (search !== preValue.search) {
    return true;
  }
  // hashchange
  if (hash !== preValue.hash) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_window, "f").trigger('hashchange');
    return true;
  }
  (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__classPrivateFieldGet */ .gn)(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
  return false;
};
var Location =  false ? 0 : TaroLocation;
function generateFullUrl() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var origin = INIT_URL;
  if (/^[/?#]/.test(val)) {
    return origin + val;
  }
  return val;
}
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var msg = '(' + machine + '; ' + arch + ') ' + engine;
var nav =  false ? 0 : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 ' + msg,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 ' + msg,
  vendor: 'Joyent',
  vendorSub: ''
};

// https://github.com/myrne/performance-now
var now;
(function () {
  var loadTime;
  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    loadTime = Date.now();
    now = function now() {
      return Date.now() - loadTime;
    };
  } else {
    loadTime = new Date().getTime();
    now = function now() {
      return new Date().getTime() - loadTime;
    };
  }
})();
var lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
var _raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();
  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var _caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : function (seed) {
  // fix https://github.com/NervJS/taro/issues/7749
  clearTimeout(seed);
};
var TaroWindow = /*#__PURE__*/function (_Events3) {
  function TaroWindow() {
    var _this21;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TaroWindow);
    _this21 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, TaroWindow);
    _this21.navigator = nav;
    _this21.requestAnimationFrame = _raf;
    _this21.cancelAnimationFrame = _caf;
    _this21.getComputedStyle = getComputedStyle;
    var globalProperties = [].concat((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(Object.getOwnPropertyNames(__webpack_require__.g || {})), (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(Object.getOwnPropertySymbols(__webpack_require__.g || {})));
    globalProperties.forEach(function (property) {
      if (property === 'atob' || property === 'document') return;
      if (!Object.prototype.hasOwnProperty.call(_this21, property)) {
        // 防止小程序环境下，window 上的某些 get 属性在赋值时报错
        try {
          _this21[property] = __webpack_require__.g[property];
        } catch (e) {
          if (false) {}
        }
      }
    });
    _this21.Date || (_this21.Date = Date);
    // 应用启动时，提供给需要读取历史信息的库使用
    _this21.location = new Location({
      window: _this21
    });
    // @ts-ignore
    _this21.history = new History(_this21.location, {
      window: _this21
    });
    _this21.initEvent();
    return _this21;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TaroWindow, _Events3);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TaroWindow, [{
    key: "initEvent",
    value: function initEvent() {
      var _location = this.location;
      var _history = this.history;
      this.on(CONTEXT_ACTIONS.INIT, function (pageId) {
        // 页面onload，为该页面建立新的上下文信息
        _location.trigger(CONTEXT_ACTIONS.INIT, pageId);
      }, null);
      this.on(CONTEXT_ACTIONS.RECOVER, function (pageId) {
        // 页面onshow，恢复当前页面的上下文信息
        _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
        _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
      }, null);
      this.on(CONTEXT_ACTIONS.RESTORE, function (pageId) {
        // 页面onhide，缓存当前页面的上下文信息
        _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
        _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
      }, null);
      this.on(CONTEXT_ACTIONS.DESTORY, function (pageId) {
        // 页面onunload，清除当前页面的上下文信息
        _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
        _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
      }, null);
    }
  }, {
    key: "document",
    get: function get() {
      return env.document;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(event, callback) {
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(event)) return;
      this.on(event, callback, null);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(event, callback) {
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(event)) return;
      this.off(event, callback, null);
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout.toString = function () {
        return _setTimeout.toString();
      };
      return setTimeout;
    }(function () {
      return setTimeout.apply(void 0, arguments);
    })
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };
      return clearTimeout;
    }(function () {
      return clearTimeout.apply(void 0, arguments);
    })
  }]);
}(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .Events */ .sV);
var window$1 =  false ? 0 : env.window = new TaroWindow();
var location = window$1.location;
var history = window$1.history;

// for Vue3
var SVGElement = /*#__PURE__*/function (_TaroElement6) {
  function SVGElement() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, SVGElement);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this, SVGElement, arguments);
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(SVGElement, _TaroElement6);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(SVGElement);
}(TaroElement); // export const removeLeadingSlash = (str = '') => str.replace(/^\.?\//, '')
// export const removeTrailingSearch = (str = '') => str.replace(/\?[\s\S]*$/, '')
var addLeadingSlash = function addLeadingSlash() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return url.charAt(0) === '/' ? url : '/' + url;
};
var hasBasename = function hasBasename() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path) || path === prefix;
};
var stripBasename = function stripBasename() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return hasBasename(path, prefix) ? path.substring(prefix.length) : path;
};
var stripTrailing = function stripTrailing() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/[?#][\s\S]*$/, '');
};
var stripSuffix = function stripSuffix() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
};
var getHomePage = function getHomePage() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var basename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var customRoutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var entryPagePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var _a;
  var routePath = addLeadingSlash(stripBasename(path, basename));
  var alias = ((_a = Object.entries(customRoutes).find(function (_ref3) {
    var _ref4 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_ref3, 1),
      key = _ref4[0];
    return key === routePath;
  })) === null || _a === void 0 ? void 0 : _a[1]) || routePath;
  return entryPagePath || (typeof alias === 'string' ? alias : alias[0]) || basename;
};
var getCurrentPage = function getCurrentPage() {
  var routerMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hash';
  var basename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var pagePath = routerMode === 'hash' ? location.hash.slice(1).split('?')[0] : location.pathname;
  return addLeadingSlash(stripBasename(pagePath, basename));
};

/* eslint-disable dot-notation */
var instances = new Map();
var pageId = incrementId();
function injectPageInstance(inst, id) {
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('mergePageInstance', instances.get(id), inst);
  instances.set(id, inst);
}
function getPageInstance(id) {
  return instances.get(id);
}
function removePageInstance(id) {
  instances.delete(id);
}
function safeExecute(path, lifecycle) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key3 = 2; _key3 < _len2; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }
  var instance = instances.get(path);
  if (instance == null) {
    return;
  }
  var func = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getLifecycle', instance, lifecycle);
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(func)) {
    var res = func.map(function (fn) {
      return fn.apply(instance, args);
    });
    return res[0];
  }
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(func)) {
    return;
  }
  return func.apply(instance, args);
}
function stringify(obj) {
  if (obj == null) {
    return '';
  }
  var path = Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
  return path === '' ? path : '?' + path;
}
function getPath(id, options) {
  var idx = id.indexOf('?');
  if (false) {} else {
    return "".concat(idx > -1 ? id.substring(0, idx) : id).concat(stringify(options));
  }
}
function getOnReadyEventKey(path) {
  return path + '.' + ON_READY;
}
function getOnShowEventKey(path) {
  return path + '.' + ON_SHOW;
}
function getOnHideEventKey(path) {
  return path + '.' + ON_HIDE;
}
function createPageConfig(component, pageName, data, pageConfig) {
  // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId());
  var _hooks$call$page = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getMiniLifecycleImpl').page, 7),
    ONLOAD = _hooks$call$page[0],
    ONUNLOAD = _hooks$call$page[1],
    ONREADY = _hooks$call$page[2],
    ONSHOW = _hooks$call$page[3],
    ONHIDE = _hooks$call$page[4],
    LIFECYCLES = _hooks$call$page[5],
    SIDE_EFFECT_LIFECYCLES = _hooks$call$page[6];
  var pageElement = null;
  var unmounting = false;
  var prepareMountList = [];
  function setCurrentRouter(page) {
    var router =  false ? 0 : page.route || page.__route__ || page.$taroPath;
    Current.router = {
      params: page.$taroParams,
      path: addLeadingSlash(router),
      $taroPath: page.$taroPath,
      onReady: getOnReadyEventKey(id),
      onShow: getOnShowEventKey(id),
      onHide: getOnHideEventKey(id)
    };
    if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(page.exitState)) {
      Current.router.exitState = page.exitState;
    }
  }
  var loadResolver;
  var hasLoaded;
  var config = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({}, ONLOAD, function () {
    var _this22 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments.length > 1 ? arguments[1] : undefined;
    hasLoaded = new Promise(function (resolve) {
      loadResolver = resolve;
    });
    perf.start(PAGE_INIT);
    Current.page = this;
    this.config = pageConfig || {};
    // this.$taroPath 是页面唯一标识
    var uniqueOptions = Object.assign({}, options, {
      $taroTimestamp: Date.now()
    });
    var $taroPath = this.$taroPath = getPath(id, uniqueOptions);
    if (false) {}
    // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
    if (this.$taroParams == null) {
      this.$taroParams = uniqueOptions;
    }
    setCurrentRouter(this);
    // 初始化当前页面的上下文信息
    if (true) {
      window$1.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
    }
    var mount = function mount() {
      Current.app.mount(component, $taroPath, function () {
        pageElement = env.document.getElementById($taroPath);
        (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .ensure */ .D8)(pageElement !== null, '没有找到页面实例。');
        safeExecute($taroPath, ON_LOAD, _this22.$taroParams);
        loadResolver();
        if (true) {
          pageElement.ctx = _this22;
          pageElement.performUpdate(true, cb);
        } else {}
      });
    };
    if (unmounting) {
      prepareMountList.push(mount);
    } else {
      mount();
    }
  }), ONUNLOAD, function () {
    var $taroPath = this.$taroPath;
    // 销毁当前页面的上下文信息
    if (true) {
      window$1.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
    }
    // 触发onUnload生命周期
    safeExecute($taroPath, ONUNLOAD);
    unmounting = true;
    Current.app.unmount($taroPath, function () {
      unmounting = false;
      instances.delete($taroPath);
      if (pageElement) {
        pageElement.ctx = null;
        pageElement = null;
      }
      if (prepareMountList.length) {
        prepareMountList.forEach(function (fn) {
          return fn();
        });
        prepareMountList = [];
      }
    });
  }), ONREADY, function () {
    var _this23 = this;
    hasLoaded.then(function () {
      // 触发生命周期
      safeExecute(_this23.$taroPath, ON_READY);
      // 通过事件触发子组件的生命周期
      _raf(function () {
        return eventCenter.trigger(getOnReadyEventKey(id));
      });
      _this23.onReady.called = true;
    });
  }), ONSHOW, function () {
    var _this24 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    hasLoaded.then(function () {
      // 设置 Current 的 page 和 router
      Current.page = _this24;
      setCurrentRouter(_this24);
      // 恢复上下文信息
      if (true) {
        window$1.trigger(CONTEXT_ACTIONS.RECOVER, _this24.$taroPath);
      }
      // 触发生命周期
      safeExecute(_this24.$taroPath, ON_SHOW, options);
      // 通过事件触发子组件的生命周期
      _raf(function () {
        return eventCenter.trigger(getOnShowEventKey(id));
      });
    });
  }), ONHIDE, function () {
    // 缓存当前页面上下文信息
    if (true) {
      window$1.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
    }
    // 设置 Current 的 page 和 router
    if (Current.page === this) {
      Current.page = null;
      Current.router = null;
    }
    // 触发生命周期
    safeExecute(this.$taroPath, ON_HIDE);
    // 通过事件触发子组件的生命周期
    eventCenter.trigger(getOnHideEventKey(id));
  });
  if (false) {}
  LIFECYCLES.forEach(function (lifecycle) {
    var isDefer = false;
    lifecycle = lifecycle.replace(/^defer:/, function () {
      isDefer = true;
      return '';
    });
    config[lifecycle] = function () {
      var _arguments = arguments,
        _this25 = this;
      var exec = function exec() {
        return safeExecute.apply(void 0, [_this25.$taroPath, lifecycle].concat((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_arguments)));
      };
      if (isDefer) {
        hasLoaded.then(exec);
      } else {
        return exec();
      }
    };
  });
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  SIDE_EFFECT_LIFECYCLES.forEach(function (lifecycle) {
    var _a;
    if (component[lifecycle] || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) || component[lifecycle.replace(/^on/, 'enable')] || (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, 'enable')])) {
      config[lifecycle] = function () {
        var _a;
        for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
          args[_key4] = arguments[_key4];
        }
        var target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
        if (target === null || target === void 0 ? void 0 : target.id) {
          var _id = target.id;
          var element = env.document.getElementById(_id);
          if (element) {
            target.dataset = element.dataset;
          }
        }
        return safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(args));
      };
    }
  });
  config.eh = eventHandler;
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(data)) {
    config.data = data;
  }
  _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyPageObject', config);
  return config;
}
function createComponentConfig(component, componentName, data) {
  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var _hooks$call$component = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getMiniLifecycleImpl').component, 2),
    ATTACHED = _hooks$call$component[0],
    DETACHED = _hooks$call$component[1];
  var config = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({}, ATTACHED, function () {
    var _this26 = this;
    var _a;
    perf.start(PAGE_INIT);
    this.pageIdCache = ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId();
    var path = getPath(id, {
      id: this.pageIdCache
    });
    Current.app.mount(component, path, function () {
      componentElement = env.document.getElementById(path);
      (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .ensure */ .D8)(componentElement !== null, '没有找到组件实例。');
      _this26.$taroInstances = instances.get(path);
      safeExecute(path, ON_LOAD);
      if (true) {
        componentElement.ctx = _this26;
        componentElement.performUpdate(true);
      }
    });
  }), DETACHED, function () {
    var path = getPath(id, {
      id: this.pageIdCache
    });
    Current.app.unmount(path, function () {
      instances.delete(path);
      if (componentElement) {
        componentElement.ctx = null;
      }
    });
  }), "methods", {
    eh: eventHandler
  });
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(data)) {
    config.data = data;
  }
  [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(function (key) {
    var _a;
    config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ;
  });
  return config;
}
function createRecursiveComponentConfig(componentName) {
  var isCustomWrapper = componentName === CUSTOM_WRAPPER;
  var _hooks$call$component2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('getMiniLifecycleImpl').component, 2),
    ATTACHED = _hooks$call$component2[0],
    DETACHED = _hooks$call$component2[1];
  var lifeCycles = isCustomWrapper ? (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({}, ATTACHED, function () {
    var _a, _b;
    var componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(componentId)) {
      customWrapperCache.set(componentId, this);
      var el = env.document.getElementById(componentId);
      if (el) {
        el.ctx = this;
      }
    }
  }), DETACHED, function () {
    var _a, _b;
    var componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
    if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(componentId)) {
      customWrapperCache.delete(componentId);
      var el = env.document.getElementById(componentId);
      if (el) {
        el.ctx = null;
      }
    }
  }) : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_OBJ */ .MZ;
  return _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .hooks */ .JL.call('modifyRecursiveComponentConfig', Object.assign({
    properties: {
      i: {
        type: Object,
        value: (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({}, "nn" /* Shortcuts.NodeName */, (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .getComponentsAlias */ .dg)(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .internalComponents */ .YN)[VIEW]._num)
      },
      l: {
        type: String,
        value: ''
      }
    },
    options: {
      addGlobalClass: true,
      virtualHost: !isCustomWrapper
    },
    methods: {
      eh: eventHandler
    }
  }, lifeCycles), {
    isCustomWrapper: isCustomWrapper
  });
}
var TIMEOUT = 100;
var nextTick = function nextTick(cb, ctx) {
  var beginTime = Date.now();
  var router = Current.router;
  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };
  if (router === null) return timerFunc();
  var path = router.$taroPath;
  /**
   * 三种情况
   *   1. 调用 nextTick 时，pendingUpdate 已经从 true 变为 false（即已更新完成），那么需要光等 100ms
   *   2. 调用 nextTick 时，pendingUpdate 为 true，那么刚好可以搭上便车
   *   3. 调用 nextTick 时，pendingUpdate 还是 false，框架仍未启动更新逻辑，这时最多轮询 100ms，等待 pendingUpdate 变为 true。
   */
  function next() {
    var _a, _b, _c;
    var pageElement = env.document.getElementById(path);
    if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
      if (false) {} else {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else if (Date.now() - beginTime > TIMEOUT) {
      timerFunc();
    } else {
      setTimeout(function () {
        return next();
      }, 20);
    }
  }
  next();
};
function handleArrayFindPolyfill() {
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(Array.prototype.find)) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(predicate)) {
          throw new TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          k++;
        }
        return undefined;
      }
    });
  }
}
function handleArrayIncludesPolyfill() {
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(Array.prototype.includes)) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
          return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
          if (o[k] === searchElement) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }
}

/* eslint-disable eqeqeq */
function handleIntersectionObserverPolyfill() {
  // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      // Minimal polyfill for Edge 15's lack of `isIntersecting`
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }
  } else {
    handleIntersectionObserverObjectPolyfill();
  }
}
function handleIntersectionObserverObjectPolyfill() {
  var document = window.document;
  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect;
    // Calculates the intersection ratio.
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    // Sets intersection ratio.
    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
  function IntersectionObserver(callback) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!isFunction(callback)) {
      throw new Error('callback must be a function');
    }
    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    }
    // Binds and throttles `this._checkForIntersections`.
    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
    // Private properties.
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    // Public properties.
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }
  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
  IntersectionObserver.prototype.POLL_INTERVAL = null;
  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) return;
    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }
    this._registerInstance();
    this._observationTargets.push({
      element: target,
      entry: null
    });
    this._monitorIntersections();
    this._checkForIntersections();
  };
  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });
    if (!this._observationTargets.length) {
      this._unmonitorIntersections();
      this._unregisterInstance();
    }
  };
  /**
   * Stops observing all target elements for intersection changes.
   */
  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];
    this._unmonitorIntersections();
    this._unregisterInstance();
  };
  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };
  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (!isNumber(t) || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };
  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    });
    // Handles shorthand.
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */
  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true;
      // If a poll interval is set, use polling instead of listening to
      // resize and scroll events or DOM mutations.
      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);
        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);
          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @private
   */
  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);
      if (this._domObserver) {
        this._domObserver.disconnect();
        this._domObserver = null;
      }
    }
  };
  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect,
        intersectionRatio: -1,
        isIntersecting: false
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display === 'none') return;
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
      // If the parent isn't displayed, an intersection can't happen.
      if (parentComputedStyle.display === 'none') return;
      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }
      // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) break;
      }
      parent = getParentNode(parent);
    }
    return intersectionRect;
  };
  /**
  * Returns the root rect after being expanded by the rootMargin value.
  * @return {Object} The expanded root rect.
  * @private
  */
  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };
  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */
  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit === 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
    // Ignore unchanged ratios
    if (oldRatio === newRatio) return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];
      // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };
  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
  IntersectionObserver.prototype._registerInstance = function () {};
  /**
  * Removes the instance from the global IntersectionObserver registry.
  * @private
  */
  IntersectionObserver.prototype._unregisterInstance = function () {};
  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
  function now() {
    return window.performance && performance.now && performance.now();
  }
  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
  function addEvent(node, event, fn, opt_useCapture) {
    if (isFunction(node.addEventListener)) {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (isFunction(node.attachEvent)) {
      node.attachEvent('on' + event, fn);
    }
  }
  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
  function removeEvent(node, event, fn, opt_useCapture) {
    if (isFunction(node.removeEventListener)) {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (isFunction(node.detatchEvent)) {
      node.detatchEvent('on' + event, fn);
    }
  }
  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
      // Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }
    if (!rect) return getEmptyRect();
    // Older IE
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }
  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }
    return false;
  }
  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
  function getParentNode(node) {
    var parent = node.parentNode;
    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }
    if (parent && parent.assignedSlot) {
      // If the parent is distributed in a <slot>, return the parent of a slot.
      return parent.assignedSlot.parentNode;
    }
    return parent;
  }
  // Exposes the constructors globally.
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
}
function handleObjectAssignPolyfill() {
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(Object.assign)) {
    // Must be writable: true, enumerable: false, configurable: true
    Object.assign = function (target) {
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }
}
function handleObjectEntriesPolyfill() {
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(Object.entries)) {
    // Must be writable: true, enumerable: false, configurable: true
    Object.entries = function (obj) {
      if (obj == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = [];
      if (obj != null) {
        // Skip over if undefined or null
        for (var key in obj) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            to.push([key, obj[key]]);
          }
        }
      }
      return to;
    };
  }
}
function handleObjectDefinePropertyPolyfill() {
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(Object.defineProperties)) {
    Object.defineProperties = function (obj, properties) {
      function convertToDescriptor(desc) {
        function hasProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(desc)) {
          throw new TypeError('bad desc');
        }
        var d = {};
        if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;
        if (hasProperty(desc, 'configurable')) {
          d.configurable = !!desc.configurable;
        }
        if (hasProperty(desc, 'value')) d.value = desc.value;
        if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;
        if (hasProperty(desc, 'get')) {
          var g = desc.get;
          if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(g) && !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(g)) {
            throw new TypeError('bad get');
          }
          d.get = g;
        }
        if (hasProperty(desc, 'set')) {
          var s = desc.set;
          if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(s) && !(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(s)) {
            throw new TypeError('bad set');
          }
          d.set = s;
        }
        if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
          throw new TypeError('identity-confused descriptor');
        }
        return d;
      }
      if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(obj)) throw new TypeError('bad obj');
      properties = Object(properties);
      var keys = Object.keys(properties);
      var descs = [];
      for (var i = 0; i < keys.length; i++) {
        descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
      }
      for (var _i6 = 0; _i6 < descs.length; _i6++) {
        Object.defineProperty(obj, descs[_i6][0], descs[_i6][1]);
      }
      return obj;
    };
  }
}
function handlePolyfill() {
  if (true) {
    handleObjectAssignPolyfill();
  }
  if (true) {
    handleObjectEntriesPolyfill();
  }
  if (true) {
    handleObjectDefinePropertyPolyfill();
  }
  if (true) {
    handleArrayFindPolyfill();
  }
  if (true) {
    handleArrayIncludesPolyfill();
  }
  // Exit early if we're not running in a browser.
  if (false) {}
}
if (true) {
  handlePolyfill();
}


/***/ }),

/***/ 1186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cb: function() { return /* binding */ toCamelCase; },
/* harmony export */   D8: function() { return /* binding */ ensure; },
/* harmony export */   Et: function() { return /* binding */ isNumber; },
/* harmony export */   Gv: function() { return /* binding */ isObject; },
/* harmony export */   IQ: function() { return /* binding */ mergeInternalComponents; },
/* harmony export */   Ig: function() { return /* binding */ controlledComponent; },
/* harmony export */   JL: function() { return /* binding */ hooks; },
/* harmony export */   Kg: function() { return /* binding */ isString; },
/* harmony export */   Lj: function() { return /* binding */ toDashed; },
/* harmony export */   Lm: function() { return /* binding */ isBoolean; },
/* harmony export */   MZ: function() { return /* binding */ EMPTY_OBJ; },
/* harmony export */   R8: function() { return /* binding */ warn; },
/* harmony export */   Tn: function() { return /* binding */ isFunction; },
/* harmony export */   YN: function() { return /* binding */ internalComponents; },
/* harmony export */   ZG: function() { return /* binding */ mergeReconciler; },
/* harmony export */   ZH: function() { return /* binding */ capitalize; },
/* harmony export */   b0: function() { return /* binding */ isUndefined; },
/* harmony export */   cy: function() { return /* binding */ isArray; },
/* harmony export */   dg: function() { return /* binding */ getComponentsAlias; },
/* harmony export */   kZ: function() { return /* binding */ isNull; },
/* harmony export */   lQ: function() { return /* binding */ noop; },
/* harmony export */   qZ: function() { return /* binding */ processApis; },
/* harmony export */   sV: function() { return /* binding */ Events; }
/* harmony export */ });
/* unused harmony exports EMPTY_ARR, EventChannel, HOOK_TYPE, PLATFORM_CONFIG_MAP, PLATFORM_TYPE, Shortcuts, TaroHook, TaroHooks, animation, box, cacheDataGet, cacheDataHas, cacheDataSet, focusComponents, getPlatformType, getUniqueKey, hasOwn, indent, isBooleanStringLiteral, isWebPlatform, nestElements, nonsupport, queryToJson, setUniqueKeyToRoute, singleQuote, toKebabCase, touchEvents, unbox, voidElements */
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9394);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9874);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5499);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5501);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2284);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2901);







var DEFAULT_EMPTY_ARRAY = '[]';
var NO_DEFAULT_VALUE = '';
var DEFAULT_TRUE = '!0';
var DEFAULT_FALSE = '!1';
var touchEvents = {
  bindTouchStart: NO_DEFAULT_VALUE,
  bindTouchMove: NO_DEFAULT_VALUE,
  bindTouchEnd: NO_DEFAULT_VALUE,
  bindTouchCancel: NO_DEFAULT_VALUE,
  bindLongTap: NO_DEFAULT_VALUE
};
var animation = {
  animation: NO_DEFAULT_VALUE,
  bindAnimationStart: NO_DEFAULT_VALUE,
  bindAnimationIteration: NO_DEFAULT_VALUE,
  bindAnimationEnd: NO_DEFAULT_VALUE,
  bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
  return "'".concat(s, "'");
}
var View = Object.assign(Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '50',
  'hover-stay-time': '400'
}, touchEvents), animation);
var Icon = {
  type: NO_DEFAULT_VALUE,
  size: '23',
  color: NO_DEFAULT_VALUE
};
var MapComp = Object.assign({
  longitude: NO_DEFAULT_VALUE,
  latitude: NO_DEFAULT_VALUE,
  scale: '16',
  markers: DEFAULT_EMPTY_ARRAY,
  covers: NO_DEFAULT_VALUE,
  polyline: DEFAULT_EMPTY_ARRAY,
  circles: DEFAULT_EMPTY_ARRAY,
  controls: DEFAULT_EMPTY_ARRAY,
  'include-points': DEFAULT_EMPTY_ARRAY,
  'show-location': NO_DEFAULT_VALUE,
  'layer-style': '1',
  bindMarkerTap: NO_DEFAULT_VALUE,
  bindControlTap: NO_DEFAULT_VALUE,
  bindCalloutTap: NO_DEFAULT_VALUE,
  bindUpdated: NO_DEFAULT_VALUE
}, touchEvents);
var Progress = {
  percent: NO_DEFAULT_VALUE,
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: DEFAULT_FALSE,
  'active-mode': singleQuote('backwards'),
  'show-info': DEFAULT_FALSE
};
var RichText = {
  nodes: DEFAULT_EMPTY_ARRAY
};
var Text = Object.assign({
  selectable: DEFAULT_FALSE,
  space: NO_DEFAULT_VALUE,
  decode: DEFAULT_FALSE
}, touchEvents);
var Button = Object.assign({
  size: singleQuote('default'),
  type: NO_DEFAULT_VALUE,
  plain: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  loading: DEFAULT_FALSE,
  'form-type': NO_DEFAULT_VALUE,
  'open-type': NO_DEFAULT_VALUE,
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '20',
  'hover-stay-time': '70',
  name: NO_DEFAULT_VALUE,
  bindagreeprivacyauthorization: NO_DEFAULT_VALUE
}, touchEvents);
var Checkbox = {
  value: NO_DEFAULT_VALUE,
  disabled: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  color: singleQuote('#09BB07'),
  name: NO_DEFAULT_VALUE
};
var CheckboxGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Form = {
  'report-submit': DEFAULT_FALSE,
  bindSubmit: NO_DEFAULT_VALUE,
  bindReset: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Input = {
  value: NO_DEFAULT_VALUE,
  type: singleQuote(NO_DEFAULT_VALUE),
  password: DEFAULT_FALSE,
  placeholder: NO_DEFAULT_VALUE,
  'placeholder-style': NO_DEFAULT_VALUE,
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: NO_DEFAULT_VALUE,
  maxlength: '140',
  'cursor-spacing': '0',
  focus: DEFAULT_FALSE,
  'confirm-type': singleQuote('done'),
  'confirm-hold': DEFAULT_FALSE,
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindInput: NO_DEFAULT_VALUE,
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Label = Object.assign({
  for: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
}, touchEvents);
var Picker = {
  mode: singleQuote('selector'),
  disabled: NO_DEFAULT_VALUE,
  range: NO_DEFAULT_VALUE,
  'range-key': NO_DEFAULT_VALUE,
  value: NO_DEFAULT_VALUE,
  start: NO_DEFAULT_VALUE,
  end: NO_DEFAULT_VALUE,
  fields: singleQuote('day'),
  'custom-item': NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  bindCancel: NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  bindColumnChange: NO_DEFAULT_VALUE
};
var PickerView = {
  value: NO_DEFAULT_VALUE,
  'indicator-style': NO_DEFAULT_VALUE,
  'indicator-class': NO_DEFAULT_VALUE,
  'mask-style': NO_DEFAULT_VALUE,
  'mask-class': NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var PickerViewColumn = {
  name: NO_DEFAULT_VALUE
};
var Radio = {
  value: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  color: singleQuote('#09BB07'),
  name: NO_DEFAULT_VALUE
};
var RadioGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: NO_DEFAULT_VALUE,
  value: '0',
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': DEFAULT_FALSE,
  bindChange: NO_DEFAULT_VALUE,
  bindChanging: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Switch = {
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Textarea = {
  value: NO_DEFAULT_VALUE,
  placeholder: NO_DEFAULT_VALUE,
  'placeholder-style': NO_DEFAULT_VALUE,
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: NO_DEFAULT_VALUE,
  maxlength: '140',
  'auto-focus': DEFAULT_FALSE,
  focus: DEFAULT_FALSE,
  'auto-height': DEFAULT_FALSE,
  fixed: DEFAULT_FALSE,
  'cursor-spacing': '0',
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindLineChange: NO_DEFAULT_VALUE,
  bindInput: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var CoverImage = {
  src: NO_DEFAULT_VALUE,
  bindLoad: 'eh',
  bindError: 'eh'
};
var CoverView = Object.assign({
  'scroll-top': DEFAULT_FALSE
}, touchEvents);
var MovableArea = {
  'scale-area': DEFAULT_FALSE
};
var MovableView = Object.assign(Object.assign({
  direction: 'none',
  inertia: DEFAULT_FALSE,
  'out-of-bounds': DEFAULT_FALSE,
  x: NO_DEFAULT_VALUE,
  y: NO_DEFAULT_VALUE,
  damping: '20',
  friction: '2',
  disabled: NO_DEFAULT_VALUE,
  scale: DEFAULT_FALSE,
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  bindChange: NO_DEFAULT_VALUE,
  bindScale: NO_DEFAULT_VALUE,
  bindHTouchMove: NO_DEFAULT_VALUE,
  bindVTouchMove: NO_DEFAULT_VALUE,
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents), animation);
var ScrollView = Object.assign(Object.assign({
  'scroll-x': DEFAULT_FALSE,
  'scroll-y': DEFAULT_FALSE,
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': NO_DEFAULT_VALUE,
  'scroll-left': NO_DEFAULT_VALUE,
  'scroll-into-view': NO_DEFAULT_VALUE,
  'scroll-with-animation': DEFAULT_FALSE,
  'enable-back-to-top': DEFAULT_FALSE,
  bindScrollToUpper: NO_DEFAULT_VALUE,
  bindScrollToLower: NO_DEFAULT_VALUE,
  bindScroll: NO_DEFAULT_VALUE
}, touchEvents), animation);
var Swiper = Object.assign({
  'indicator-dots': DEFAULT_FALSE,
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: DEFAULT_FALSE,
  current: '0',
  interval: '5000',
  duration: '500',
  circular: DEFAULT_FALSE,
  vertical: DEFAULT_FALSE,
  'previous-margin': singleQuote('0px'),
  'next-margin': singleQuote('0px'),
  'display-multiple-items': '1',
  bindChange: NO_DEFAULT_VALUE,
  bindTransition: NO_DEFAULT_VALUE,
  bindAnimationFinish: NO_DEFAULT_VALUE
}, touchEvents);
var SwiperItem = {
  'item-id': NO_DEFAULT_VALUE
};
var Navigator = {
  url: NO_DEFAULT_VALUE,
  'open-type': singleQuote('navigate'),
  delta: '1',
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: NO_DEFAULT_VALUE,
  bindFail: NO_DEFAULT_VALUE,
  bindComplete: NO_DEFAULT_VALUE
};
var Audio = {
  id: NO_DEFAULT_VALUE,
  src: NO_DEFAULT_VALUE,
  loop: DEFAULT_FALSE,
  controls: DEFAULT_FALSE,
  poster: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  author: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE
};
var Camera = {
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  bindStop: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
var Image = Object.assign({
  src: NO_DEFAULT_VALUE,
  mode: singleQuote('scaleToFill'),
  'lazy-load': DEFAULT_FALSE,
  bindError: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE
}, touchEvents);
var LivePlayer = Object.assign({
  src: NO_DEFAULT_VALUE,
  autoplay: DEFAULT_FALSE,
  muted: DEFAULT_FALSE,
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': DEFAULT_FALSE,
  'min-cache': '1',
  'max-cache': '3',
  bindStateChange: NO_DEFAULT_VALUE,
  bindFullScreenChange: NO_DEFAULT_VALUE,
  bindNetStatus: NO_DEFAULT_VALUE
}, animation);
var Video = Object.assign({
  src: NO_DEFAULT_VALUE,
  duration: NO_DEFAULT_VALUE,
  controls: DEFAULT_TRUE,
  'danmu-list': NO_DEFAULT_VALUE,
  'danmu-btn': NO_DEFAULT_VALUE,
  'enable-danmu': NO_DEFAULT_VALUE,
  autoplay: DEFAULT_FALSE,
  loop: DEFAULT_FALSE,
  muted: DEFAULT_FALSE,
  'initial-time': '0',
  'page-gesture': DEFAULT_FALSE,
  direction: NO_DEFAULT_VALUE,
  'show-progress': DEFAULT_TRUE,
  'show-fullscreen-btn': DEFAULT_TRUE,
  'show-play-btn': DEFAULT_TRUE,
  'show-center-play-btn': DEFAULT_TRUE,
  'enable-progress-gesture': DEFAULT_TRUE,
  'object-fit': singleQuote('contain'),
  poster: NO_DEFAULT_VALUE,
  'show-mute-btn': DEFAULT_FALSE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindFullScreenChange: NO_DEFAULT_VALUE,
  bindWaiting: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
}, animation);
var Canvas = Object.assign({
  'canvas-id': NO_DEFAULT_VALUE,
  'disable-scroll': DEFAULT_FALSE,
  bindError: NO_DEFAULT_VALUE
}, touchEvents);
var Ad = {
  'unit-id': NO_DEFAULT_VALUE,
  'ad-intervals': NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindClose: NO_DEFAULT_VALUE
};
var WebView = {
  src: NO_DEFAULT_VALUE,
  bindMessage: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
var Block = {};
// For Vue，因为 slot 标签被 vue 占用了
var SlotView = {
  name: NO_DEFAULT_VALUE
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
var Slot = {
  name: NO_DEFAULT_VALUE
};
var NativeSlot = {
  name: NO_DEFAULT_VALUE
};
var Script = {};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  WebView: WebView,
  Block: Block,
  Map: MapComp,
  Slot: Slot,
  SlotView: SlotView,
  NativeSlot: NativeSlot,
  Script: Script
};
var controlledComponent = new Set(['input', 'checkbox', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']);
var focusComponents = new Set(['input', 'textarea']);
var voidElements = new Set(['progress', 'icon', 'rich-text', 'input', 'textarea', 'slider', 'switch', 'audio', 'ad', 'official-account', 'open-data', 'navigation-bar']);
var nestElements = new Map([['view', -1], ['catch-view', -1], ['cover-view', -1], ['static-view', -1], ['pure-view', -1], ['block', -1], ['text', -1], ['static-text', 6], ['slot', 8], ['slot-view', 8], ['label', 6], ['form', 4], ['scroll-view', 4], ['swiper', 4], ['swiper-item', 4]]);
var PLATFORM_TYPE;
(function (PLATFORM_TYPE) {
  PLATFORM_TYPE["MINI"] = "mini";
  PLATFORM_TYPE["WEB"] = "web";
  PLATFORM_TYPE["RN"] = "rn";
  PLATFORM_TYPE["HARMONY"] = "harmony";
  PLATFORM_TYPE["QUICK"] = "quickapp";
  PLATFORM_TYPE["ASCF"] = "ascf";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
var PLATFORM_CONFIG_MAP = {
  h5: {
    type: PLATFORM_TYPE.WEB
  },
  harmony: {
    type: PLATFORM_TYPE.HARMONY
  },
  mini: {
    type: PLATFORM_TYPE.MINI
  },
  rn: {
    type: PLATFORM_TYPE.RN
  },
  quickapp: {
    type: PLATFORM_TYPE.QUICK
  },
  ascf: {
    type: PLATFORM_TYPE.ASCF
  }
};
var Events = /*#__PURE__*/function () {
  function Events(opts) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, Events);
    var _a;
    this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, tail, _eventName;
      if (!callback) {
        return this;
      }
      if ((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(eventName) === 'symbol') {
        _eventName = [eventName];
      } else {
        _eventName = eventName.split(Events.eventSplitter);
      }
      this.callbacks || (this.callbacks = {});
      var calls = this.callbacks;
      while (event = _eventName.shift()) {
        var list = calls[event];
        var node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }
      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;
      var _wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(_this, args);
        _this.off(events, _wrapper, context);
      };
      this.on(events, _wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, _events;
      if (!(calls = this.callbacks)) {
        return this;
      }
      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }
      if ((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(events) === 'symbol') {
        _events = [events];
      } else {
        _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
      }
      while (event = _events.shift()) {
        var node = calls[event];
        delete calls[event];
        if (!node || !(callback || context)) {
          continue;
        }
        var tail = node.tail;
        while ((node = node.next) !== tail) {
          var cb = node.callback;
          var ctx = node.context;
          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, _events;
      if (!(calls = this.callbacks)) {
        return this;
      }
      if ((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(events) === 'symbol') {
        _events = [events];
      } else {
        _events = events.split(Events.eventSplitter);
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      while (event = _events.shift()) {
        if (node = calls[event]) {
          var tail = node.tail;
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }
      }
      return this;
    }
  }]);
}();
Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/
var PageEvts = /*#__PURE__*/function (_Events) {
  function PageEvts() {
    var _this2;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, PageEvts);
    _this2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, PageEvts, arguments);
    _this2.exeList = [];
    return _this2;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(PageEvts, _Events);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(PageEvts, [{
    key: "on",
    value: function on(eventName, callback) {
      var _this3 = this;
      (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(PageEvts, "on", this, 3)([eventName, callback, this]);
      this.exeList = this.exeList.reduce(function (prev, item) {
        if (item.eventName === eventName) {
          (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(PageEvts, "trigger", _this3, 3)([item.eventName, item.data]);
        } else {
          prev.push(item);
        }
        return prev;
      }, []);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(events, data) {
      // eslint-disable-next-line
      routeChannel.trigger(events, data);
    }
  }]);
}(Events);
var pageChannel = new PageEvts();
var RouteEvts = /*#__PURE__*/function (_Events2) {
  function RouteEvts() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, RouteEvts);
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, RouteEvts, arguments);
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(RouteEvts, _Events2);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(RouteEvts, [{
    key: "emit",
    value: function emit(events, data) {
      pageChannel.off(events);
      pageChannel.exeList.push({
        eventName: events,
        data: data
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents(events) {
      var _this4 = this;
      if (!events || (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(events) !== 'object') return;
      Object.keys(events).forEach(function (key) {
        _this4.off(key);
        _this4.on(key, events[key], _this4);
      });
    }
  }]);
}(Events);
var routeChannel = new RouteEvts();
var EventChannel = {
  pageChannel: pageChannel,
  routeChannel: routeChannel
};
function isString(o) {
  return typeof o === 'string';
}
function isUndefined(o) {
  return typeof o === 'undefined';
}
function isNull(o) {
  return o === null;
}
function isObject(o) {
  return o !== null && (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(o) === 'object';
}
function isBoolean(o) {
  return o === true || o === false;
}
function isFunction(o) {
  return typeof o === 'function';
}
function isNumber(o) {
  return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}
var isArray = Array.isArray;
var isWebPlatform = function isWebPlatform() {
  return  false || "mini" === 'web';
};
var HOOK_TYPE;
(function (HOOK_TYPE) {
  HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
  HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
  HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
var defaultMiniLifecycle = {
  app: ['onLaunch', 'onShow', 'onHide'],
  page: ['onLoad', 'onUnload', 'onReady', 'onShow', 'onHide', ['onPullDownRefresh', 'onReachBottom', 'onPageScroll', 'onResize', 'defer:onTabItemTap', 'onTitleClick', 'onOptionMenuClick', 'onPopMenuClick', 'onPullIntercept', 'onAddToFavorites'], ['onShareAppMessage', 'onShareTimeline']],
  component: ['attached', 'detached']
};
function TaroHook(type, initial) {
  return {
    type: type,
    initial: initial || null
  };
}
var TaroHooks = /*#__PURE__*/function (_Events3) {
  function TaroHooks(hooks, opts) {
    var _this5;
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, TaroHooks);
    _this5 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, TaroHooks, [opts]);
    _this5.hooks = hooks;
    for (var hookName in hooks) {
      var initial = hooks[hookName].initial;
      if (isFunction(initial)) {
        _this5.on(hookName, initial);
      }
    }
    return _this5;
  }
  (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(TaroHooks, _Events3);
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(TaroHooks, [{
    key: "tapOneOrMany",
    value: function tapOneOrMany(hookName, callback) {
      var _this6 = this;
      var list = isFunction(callback) ? [callback] : callback;
      list.forEach(function (cb) {
        return _this6.on(hookName, cb);
      });
    }
  }, {
    key: "tap",
    value: function tap(hookName, callback) {
      var hooks = this.hooks;
      var _hooks$hookName = hooks[hookName],
        type = _hooks$hookName.type,
        initial = _hooks$hookName.initial;
      if (type === HOOK_TYPE.SINGLE) {
        this.off(hookName);
        this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
      } else {
        initial && this.off(hookName, initial);
        this.tapOneOrMany(hookName, callback);
      }
    }
  }, {
    key: "call",
    value: function call(hookName) {
      var _a;
      var hook = this.hooks[hookName];
      if (!hook) return;
      var type = hook.type;
      var calls = this.callbacks;
      if (!calls) return;
      var list = calls[hookName];
      if (list) {
        var tail = list.tail;
        var node = list.next;
        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rest[_key3 - 1] = arguments[_key3];
        }
        var args = rest;
        var res;
        while (node !== tail) {
          res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
          if (type === HOOK_TYPE.WATERFALL) {
            var params = [res];
            args = params;
          }
          node = node.next;
        }
        return res;
      }
    }
  }, {
    key: "isExist",
    value: function isExist(hookName) {
      var _a;
      return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
    }
  }]);
}(Events);
var hooks = new TaroHooks({
  getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, function (defaultConfig) {
    return defaultConfig;
  }),
  getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
    return this.call('getMiniLifecycle', defaultMiniLifecycle);
  }),
  getLifecycle: TaroHook(HOOK_TYPE.SINGLE, function (instance, lifecycle) {
    return instance[lifecycle];
  }),
  modifyRecursiveComponentConfig: TaroHook(HOOK_TYPE.SINGLE, function (defaultConfig) {
    return defaultConfig;
  }),
  getPathIndex: TaroHook(HOOK_TYPE.SINGLE, function (indexOfNode) {
    return "[".concat(indexOfNode, "]");
  }),
  getEventCenter: TaroHook(HOOK_TYPE.SINGLE, function (Events) {
    return new Events();
  }),
  isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, function (eventName) {
    /**
     * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
     * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
     */
    var BUBBLE_EVENTS = new Set(['touchstart', 'touchmove', 'touchcancel', 'touchend', 'touchforcechange', 'tap', 'longpress', 'longtap', 'transitionend', 'animationstart', 'animationiteration', 'animationend']);
    return BUBBLE_EVENTS.has(eventName);
  }),
  getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, function () {
    return ['view', 'text', 'image'];
  }),
  onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
  batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
  mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
  modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
  createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
  getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
  modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  transferHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
  proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function (proxyObj) {
    return proxyObj;
  }),
  modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
  modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
    try {
      // 有些小程序的事件对象的某些属性只读
      this.call('modifyMpEvent', e);
    } catch (error) {
      console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
    }
  }),
  injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
  modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
  dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, function (e, node) {
    node.dispatchEvent(e);
  }),
  dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
  modifyTaroEventReturn: TaroHook(HOOK_TYPE.SINGLE, function () {
    return undefined;
  }),
  modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
  initNativeApi: TaroHook(HOOK_TYPE.MULTI),
  patchElement: TaroHook(HOOK_TYPE.MULTI),
  modifyAddEventListener: TaroHook(HOOK_TYPE.SINGLE),
  modifyRemoveEventListener: TaroHook(HOOK_TYPE.SINGLE)
});
var EMPTY_OBJ = {};
var EMPTY_ARR = (/* unused pure expression or super */ null && ([]));
var noop = function noop() {};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
var box = function box(v) {
  return {
    v: v
  };
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
var unbox = function unbox(b) {
  return b.v;
};
function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
  var camel = '';
  var nextCap = false;
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }
  return camel;
}
var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
  if (!condition) {
    if (false) { var reportIssue; } else {
      throw new Error(msg);
    }
  }
}
function warn(condition, msg) {
  if (false) {}
}
function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;
  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];
    if (item.length) {
      var s = item.indexOf('=');
      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }
      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }
      if (Array.isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }
  return ret; // Object
}
var _uniqueId = 1;
var _loadTime = new Date().getTime().toString();
function getUniqueKey() {
  return _loadTime + _uniqueId++;
}
var cacheData = {};
function cacheDataSet(key, val) {
  cacheData[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = cacheData[key];
  delelteAfterGet && delete cacheData[key];
  return temp;
}
function cacheDataHas(key) {
  return key in cacheData;
}
function mergeInternalComponents(components) {
  Object.keys(components).forEach(function (name) {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components[name]);
    } else {
      internalComponents[name] = components[name];
    }
  });
  return internalComponents;
}
function getComponentsAlias(origin) {
  var mapping = {};
  var viewAttrs = origin.View;
  var extraList = {
    '#text': {},
    StaticView: viewAttrs,
    StaticImage: origin.Image,
    StaticText: origin.Text,
    PureView: viewAttrs,
    CatchView: viewAttrs
  };
  origin = Object.assign(Object.assign({}, origin), extraList);
  Object.keys(origin).sort(function (a, b) {
    var reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
    var isACommonly = reg.test(a);
    var isBCommonly = reg.test(b);
    if (isACommonly && isBCommonly) {
      return a > b ? 1 : -1;
    } else if (isACommonly) {
      return -1;
    } else if (isBCommonly) {
      return 1;
    } else {
      return a >= b ? 1 : -1;
    }
  }).forEach(function (key, num) {
    var obj = {
      _num: String(num)
    };
    Object.keys(origin[key]).filter(function (attr) {
      return !/^bind/.test(attr) && !['focus', 'blur'].includes(attr);
    }).sort().forEach(function (attr, index) {
      obj[toCamelCase(attr)] = 'p' + index;
    });
    mapping[toDashed(key)] = obj;
  });
  return mapping;
}
function getPlatformType() {
  var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'weapp';
  var configNameOrType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PLATFORM_TYPE.MINI;
  if (Object.keys(PLATFORM_CONFIG_MAP).includes(platform)) {
    configNameOrType = platform;
  }
  var param = PLATFORM_CONFIG_MAP[configNameOrType] || {};
  return param.type || configNameOrType;
}
function mergeReconciler(hostConfig, hooksForTest) {
  var obj = hooksForTest || hooks;
  var keys = Object.keys(hostConfig);
  keys.forEach(function (key) {
    obj.tap(key, hostConfig[key]);
  });
}
function nonsupport(api) {
  return function () {
    console.warn("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(api));
  };
}
function setUniqueKeyToRoute(key, obj) {
  var routerParamsPrivateKey = '__key_';
  var useDataCacheApis = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
  if (useDataCacheApis.indexOf(key) > -1) {
    var url = obj.url = obj.url || '';
    var hasMark = url.indexOf('?') > -1;
    var cacheKey = getUniqueKey();
    obj.url += (hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(cacheKey);
  }
}
function indent(str, size) {
  return str.split('\n').map(function (line, index) {
    var indent = index === 0 ? '' : Array(size).fill(' ').join('');
    return indent + line;
  }).join('\n');
}
var needPromiseApis = new Set(['addPhoneContact', 'authorize', 'canvasGetImageData', 'canvasPutImageData', 'canvasToTempFilePath', 'checkSession', 'chooseAddress', 'chooseImage', 'chooseInvoiceTitle', 'chooseLocation', 'chooseVideo', 'clearStorage', 'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'compressImage', 'connectSocket', 'createBLEConnection', 'downloadFile', 'exitMiniProgram', 'getAvailableAudioSources', 'getBLEDeviceCharacteristics', 'getBLEDeviceServices', 'getBatteryInfo', 'getBeacons', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getClipboardData', 'getConnectedBluetoothDevices', 'getConnectedWifi', 'getExtConfig', 'getFileInfo', 'getImageInfo', 'getLocation', 'getNetworkType', 'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSetting', 'getStorage', 'getStorageInfo', 'getSystemInfo', 'getUserInfo', 'getWifiList', 'hideHomeButton', 'hideShareMenu', 'hideTabBar', 'hideTabBarRedDot', 'loadFontFace', 'login', 'makePhoneCall', 'navigateBack', 'navigateBackMiniProgram', 'navigateTo', 'navigateToBookshelf', 'navigateToMiniProgram', 'notifyBLECharacteristicValueChange', 'hideKeyboard', 'hideLoading', 'hideNavigationBarLoading', 'hideToast', 'openBluetoothAdapter', 'openDocument', 'openLocation', 'openSetting', 'pageScrollTo', 'previewImage', 'queryBookshelf', 'reLaunch', 'readBLECharacteristicValue', 'redirectTo', 'removeSavedFile', 'removeStorage', 'removeTabBarBadge', 'requestSubscribeMessage', 'saveFile', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum', 'scanCode', 'sendSocketMessage', 'setBackgroundColor', 'setBackgroundTextStyle', 'setClipboardData', 'setEnableDebug', 'setInnerAudioOption', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle', 'setScreenBrightness', 'setStorage', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'showActionSheet', 'showFavoriteGuide', 'showLoading', 'showModal', 'showShareMenu', 'showTabBar', 'showTabBarRedDot', 'showToast', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery', 'startDeviceMotionListening', 'startPullDownRefresh', 'stopBeaconDiscovery', 'stopBluetoothDevicesDiscovery', 'stopCompass', 'startCompass', 'startAccelerometer', 'stopAccelerometer', 'showNavigationBarLoading', 'stopDeviceMotionListening', 'stopPullDownRefresh', 'switchTab', 'uploadFile', 'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue']);
function getCanIUseWebp(taro) {
  return function () {
    var _a;
    var res = (_a = taro.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(taro);
    if (!res) {
      if (false) {}
      return false;
    }
    var platform = res.platform;
    var platformLower = platform.toLowerCase();
    if (platformLower === 'android' || platformLower === 'devtools') {
      return true;
    }
    return false;
  };
}
function getNormalRequest(global) {
  return function request(options) {
    options = options ? isString(options) ? {
      url: options
    } : options : {};
    var originSuccess = options.success;
    var originFail = options.fail;
    var originComplete = options.complete;
    var requestTask;
    var p = new Promise(function (resolve, reject) {
      options.success = function (res) {
        originSuccess && originSuccess(res);
        resolve(res);
      };
      options.fail = function (res) {
        originFail && originFail(res);
        reject(res);
      };
      options.complete = function (res) {
        originComplete && originComplete(res);
      };
      requestTask = global.request(options);
    });
    equipTaskMethodsIntoPromise(requestTask, p);
    p.abort = function (cb) {
      cb && cb();
      if (requestTask) {
        requestTask.abort();
      }
      return p;
    };
    return p;
  };
}
function processApis(taro, global) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var patchNeedPromiseApis = config.needPromiseApis || [];
  var _needPromiseApis = new Set([].concat((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(patchNeedPromiseApis), (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(needPromiseApis)));
  var preserved = ['getEnv', 'interceptors', 'Current', 'getCurrentInstance', 'options', 'nextTick', 'eventCenter', 'Events', 'preload', 'webpackJsonp'];
  var apis = new Set(!config.isOnlyPromisify ? Object.keys(global).filter(function (api) {
    return preserved.indexOf(api) === -1;
  }) : patchNeedPromiseApis);
  if (config.modifyApis) {
    config.modifyApis(apis);
  }
  apis.forEach(function (key) {
    if (_needPromiseApis.has(key)) {
      var originKey = key;
      taro[originKey] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        var key = originKey;
        // 第一个参数 options 为字符串，单独处理
        if (typeof options === 'string') {
          if (args.length) {
            return global[key].apply(global, [options].concat(args));
          }
          return global[key](options);
        }
        // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
        if (config.transformMeta) {
          var transformResult = config.transformMeta(key, options);
          key = transformResult.key;
          options = transformResult.options;
          // 新 key 可能不存在
          if (!global.hasOwnProperty(key)) {
            return nonsupport(key)();
          }
        }
        var task = null;
        var obj = Object.assign({}, options);
        // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
        setUniqueKeyToRoute(key, options);
        // Promise 化
        var p = new Promise(function (resolve, reject) {
          obj.success = function (res) {
            var _a, _b;
            (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
            (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
            if (key === 'connectSocket') {
              resolve(Promise.resolve().then(function () {
                return task ? Object.assign(task, res) : res;
              }));
            } else {
              resolve(res);
            }
          };
          obj.fail = function (res) {
            var _a;
            (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
            reject(res);
          };
          obj.complete = function (res) {
            var _a;
            (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
          };
          if (args.length) {
            task = global[key].apply(global, [obj].concat(args));
          } else {
            task = global[key](obj);
          }
        });
        // 给 promise 对象挂载属性
        if (['uploadFile', 'downloadFile'].includes(key)) {
          equipTaskMethodsIntoPromise(task, p);
          p.progress = function (cb) {
            task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
            return p;
          };
          p.abort = function (cb) {
            cb === null || cb === void 0 ? void 0 : cb();
            task === null || task === void 0 ? void 0 : task.abort();
            return p;
          };
        }
        return p;
      };
    } else {
      var platformKey = key;
      // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
      if (config.transformMeta) {
        platformKey = config.transformMeta(key, {}).key;
      }
      // API 不存在
      if (!global.hasOwnProperty(platformKey)) {
        taro[key] = nonsupport(key);
        return;
      }
      if (isFunction(global[key])) {
        taro[key] = function () {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          if (config.handleSyncApis) {
            return config.handleSyncApis(key, global, args);
          } else {
            return global[platformKey].apply(global, args);
          }
        };
      } else {
        taro[key] = global[platformKey];
      }
    }
  });
  !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */
function equipCommonApis(taro, global) {
  var apis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  taro.canIUseWebp = getCanIUseWebp(taro);
  taro.getCurrentPages = getCurrentPages || nonsupport('getCurrentPages');
  taro.getApp = getApp || nonsupport('getApp');
  taro.env = global.env || {};
  try {
    taro.requirePlugin = requirePlugin || nonsupport('requirePlugin');
  } catch (error) {
    taro.requirePlugin = nonsupport('requirePlugin');
  }
  // request & interceptors
  var request = apis.request || getNormalRequest(global);
  function taroInterceptor(chain) {
    return request(chain.requestParams);
  }
  var link = new taro.Link(taroInterceptor);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.miniGlobal = taro.options.miniGlobal = global;
  taro.getAppInfo = function () {
    return {
      platform: "mini" || 0,
      taroVersion: "3.6.38" || 0,
      designWidth: taro.config.designWidth
    };
  };
  taro.createSelectorQuery = delayRef(taro, global, 'createSelectorQuery', 'exec');
  taro.createIntersectionObserver = delayRef(taro, global, 'createIntersectionObserver', 'observe');
}
/**
 * 将Task对象中的方法挂载到promise对象中，适配小程序api原生返回结果
 * @param task Task对象 {RequestTask | DownloadTask | UploadTask}
 * @param promise Promise
 */
function equipTaskMethodsIntoPromise(task, promise) {
  if (!task || !promise) return;
  var taskMethods = ['abort', 'onHeadersReceived', 'offHeadersReceived', 'onProgressUpdate', 'offProgressUpdate', 'onChunkReceived', 'offChunkReceived'];
  task && taskMethods.forEach(function (method) {
    if (method in task) {
      promise[method] = task[method].bind(task);
    }
  });
}
function delayRef(taro, global, name, method) {
  return function () {
    var res = global[name].apply(global, arguments);
    var raw = res[method].bind(res);
    res[method] = function () {
      for (var _len6 = arguments.length, methodArgs = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        methodArgs[_key6] = arguments[_key6];
      }
      taro.nextTick(function () {
        return raw.apply(void 0, methodArgs);
      });
    };
    return res;
  };
}

// 字符串简写
var Shortcuts;
(function (Shortcuts) {
  Shortcuts["Container"] = "container";
  Shortcuts["Childnodes"] = "cn";
  Shortcuts["Text"] = "v";
  Shortcuts["NodeType"] = "nt";
  Shortcuts["NodeName"] = "nn";
  // Attrtibutes
  Shortcuts["Style"] = "st";
  Shortcuts["Class"] = "cl";
  Shortcuts["Src"] = "src";
})(Shortcuts || (Shortcuts = {}));


/***/ }),

/***/ 758:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(7842),
  hooks = _require.hooks;
var taro = (__webpack_require__(4779)/* ["default"] */ .A);
if (hooks.isExist('initNativeApi')) {
  hooks.call('initNativeApi', taro);
}
module.exports = taro;
module.exports["default"] = module.exports;

/***/ }),

/***/ 7956:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ getEnv; },
/* harmony export */   n: function() { return /* binding */ ENV_TYPE; }
/* harmony export */ });
var ENV_TYPE = {
  WEAPP: 'WEAPP',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD',
  WEB: 'WEB',
  RN: 'RN',
  HARMONY: 'HARMONY',
  QUICKAPP: 'QUICKAPP',
  HARMONYHYBRID: 'HARMONYHYBRID',
  ASCF: 'ASCF'
};
function getEnv() {
  if (true) {
    return ENV_TYPE.WEAPP;
  } else {}
}


/***/ }),

/***/ 4779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ Taro; }
/* harmony export */ });
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7842);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1186);
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7956);
/* harmony import */ var _interceptor_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _interceptor_interceptors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3211);
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9184);






/* eslint-disable camelcase */
var Taro = {
  Behavior: _tools_js__WEBPACK_IMPORTED_MODULE_0__/* .Behavior */ .nS,
  getEnv: _env_js__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ ._,
  ENV_TYPE: _env_js__WEBPACK_IMPORTED_MODULE_1__/* .ENV_TYPE */ .n,
  Link: _interceptor_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  interceptors: _interceptor_interceptors_js__WEBPACK_IMPORTED_MODULE_3__,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__.Current,
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__.getCurrentInstance,
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__.options,
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__.nextTick,
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__.eventCenter,
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__/* .Events */ .sV,
  getInitPxTransform: _tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getInitPxTransform */ .hf,
  interceptorify: _interceptor_index_js__WEBPACK_IMPORTED_MODULE_2__/* .interceptorify */ .y
};
Taro.initPxTransform = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getInitPxTransform */ .hf)(Taro);
Taro.preload = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getPreload */ .ei)(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__.Current);
Taro.pxTransform = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getPxTransform */ .Pl)(Taro);


/***/ }),

/***/ 1294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ Chain; }
/* harmony export */ });
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2901);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);



var Chain = /*#__PURE__*/function () {
  function Chain(requestParams, interceptors, index) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, Chain);
    this.index = index || 0;
    this.requestParams = requestParams || {};
    this.interceptors = interceptors || [];
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(Chain, [{
    key: "proceed",
    value: function proceed() {
      var requestParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.requestParams = requestParams;
      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }
      var nextInterceptor = this._getNextInterceptor();
      var nextChain = this._getNextChain();
      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      Object.keys(p).forEach(function (k) {
        return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__/* .isFunction */ .Tn)(p[k]) && (res[k] = p[k]);
      });
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);
}();


/***/ }),

/***/ 47:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ Link; },
/* harmony export */   y: function() { return /* binding */ interceptorify; }
/* harmony export */ });
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2901);
/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1294);



var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, Link);
    this.taroInterceptor = interceptor;
    this.chain = new _chain_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A();
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Link, [{
    key: "request",
    value: function request(requestParams) {
      var chain = this.chain;
      var taroInterceptor = this.taroInterceptor;
      chain.interceptors = chain.interceptors.filter(function (interceptor) {
        return interceptor !== taroInterceptor;
      }).concat(taroInterceptor);
      return chain.proceed(Object.assign({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new _chain_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A();
    }
  }]);
}();
function interceptorify(promiseifyApi) {
  return new Link(function (chain) {
    return promiseifyApi(chain.requestParams);
  });
}


/***/ }),

/***/ 3211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logInterceptor: function() { return /* binding */ logInterceptor; },
/* harmony export */   timeoutInterceptor: function() { return /* binding */ timeoutInterceptor; }
/* harmony export */ });
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      clearTimeout(timeout);
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  // @ts-ignore
  if (!(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isUndefined */ .b0)(p) && (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(p.abort)) res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
    data = requestParams.data,
    url = requestParams.url;
  // eslint-disable-next-line no-console
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  // @ts-ignore
  if ((0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(p.abort)) res.abort = p.abort;
  return res;
}


/***/ }),

/***/ 9184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pl: function() { return /* binding */ getPxTransform; },
/* harmony export */   ei: function() { return /* binding */ getPreload; },
/* harmony export */   hf: function() { return /* binding */ getInitPxTransform; },
/* harmony export */   nS: function() { return /* binding */ Behavior; }
/* harmony export */ });
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4467);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);


function Behavior(options) {
  return options;
}
function getPreload(current) {
  return function (key, val) {
    current.preloadData = (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Gv)(key) ? key : (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, key, val);
  };
}
var defaultDesignWidth = 750;
var defaultDesignRatio = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2
};
var defaultBaseFontSize = 20;
var defaultUnitPrecision = 5;
var defaultTargetUnit = 'rpx';
function getInitPxTransform(taro) {
  return function (config) {
    var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? defaultDesignWidth : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? defaultDesignRatio : _config$deviceRatio,
      _config$baseFontSize = config.baseFontSize,
      baseFontSize = _config$baseFontSize === void 0 ? defaultBaseFontSize : _config$baseFontSize,
      _config$targetUnit = config.targetUnit,
      targetUnit = _config$targetUnit === void 0 ? defaultTargetUnit : _config$targetUnit,
      _config$unitPrecision = config.unitPrecision,
      unitPrecision = _config$unitPrecision === void 0 ? defaultUnitPrecision : _config$unitPrecision;
    taro.config = taro.config || {};
    taro.config.designWidth = designWidth;
    taro.config.deviceRatio = deviceRatio;
    taro.config.baseFontSize = baseFontSize;
    taro.config.targetUnit = targetUnit;
    taro.config.unitPrecision = unitPrecision;
  };
}
function getPxTransform(taro) {
  return function (size) {
    var config = taro.config || {};
    var baseFontSize = config.baseFontSize;
    var deviceRatio = config.deviceRatio || defaultDesignRatio;
    var designWidth = function () {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(config.designWidth) ? config.designWidth(input) : config.designWidth || defaultDesignWidth;
    }(size);
    if (!(designWidth in deviceRatio)) {
      throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
    }
    var targetUnit = config.targetUnit || defaultTargetUnit;
    var unitPrecision = config.unitPrecision || defaultUnitPrecision;
    var formatSize = ~~size;
    var rootValue = 1 / deviceRatio[designWidth];
    switch (targetUnit) {
      case 'rem':
        rootValue *= baseFontSize * 2;
        break;
      case 'px':
        rootValue *= 2;
        break;
    }
    var val = formatSize / rootValue;
    if (unitPrecision >= 0 && unitPrecision <= 100) {
      val = Number(val.toFixed(unitPrecision));
    }
    return val + targetUnit;
  };
}


/***/ }),

/***/ 9762:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6882);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7842);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1291);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2721);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6540);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7260);











var config = {"pages":["pages/index/index","pages/plan/plan","pages/medicine/medicine","pages/mine/mine","pages/login/login","pages/register/register","pages/family-select/family-select","pages/family-manage/family-manage","pages/family/family","pages/profile/profile","pages/medicine-detail/medicine-detail","pages/medicine-scan/medicine-scan","pages/plan-create/plan-create","pages/plan-detail/plan-detail","pages/statistics/statistics","pages/settings/settings","pages/about/about","pages/feedback/feedback","pages/hospital/hospital","pages/expiry-warning/expiry-warning","pages/addPlan/addPlan","pages/reminder-settings/reminder-settings","pages/notification-history/notification-history","pages/export/export","pages/backup/backup","pages/webview/webview","pages/reminder-list/reminder-list","pages/trace-confirm/trace-confirm"],"tabBar":{"custom":true,"color":"#999","selectedColor":"#27AE60","backgroundColor":"#fff","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"assets/images/tab/tab_home_normal.png","selectedIconPath":"assets/images/tab/tab_home_active.png"},{"pagePath":"pages/plan/plan","text":"计划","iconPath":"assets/images/tab/tab_plan_normal.png","selectedIconPath":"assets/images/tab/tab_plan_active.png"},{"pagePath":"pages/medicine/medicine","text":"药品库","iconPath":"assets/images/tab/tab_med_normal.png","selectedIconPath":"assets/images/tab/tab_med_active.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"assets/images/tab/tab_mine_normal.png","selectedIconPath":"assets/images/tab/tab_mine_active.png"}]},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"medhome","navigationBarTextStyle":"black","navigationStyle":"custom"},"permission":{"scope.userLocation":{"desc":"你的位置信息将用于获取周边医院"}},"requiredPrivateInfos":["getLocation"]};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_6__/* .createReactApp */ .ND)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_3__, 2))), react_dom__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ 4746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: function() { return /* binding */ UserManager; },
/* harmony export */   C1: function() { return /* binding */ syncApi; },
/* harmony export */   Ds: function() { return /* binding */ familyApi; },
/* harmony export */   JR: function() { return /* binding */ API_BASE_URL; },
/* harmony export */   Jp: function() { return /* binding */ recordsApi; },
/* harmony export */   ZQ: function() { return /* binding */ authApi; },
/* harmony export */   f0: function() { return /* binding */ medicineApi; },
/* harmony export */   js: function() { return /* binding */ familiesApi; },
/* harmony export */   kT: function() { return /* binding */ FamilyManager; },
/* harmony export */   tC: function() { return /* binding */ TokenManager; },
/* harmony export */   uD: function() { return /* binding */ planApi; },
/* harmony export */   vx: function() { return /* binding */ notificationsApi; }
/* harmony export */ });
/* unused harmony export request */
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2007);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9379);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3029);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2901);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);






// 后端地址 - 修改为你的后端地址
var API_BASE_URL = 'http://192.168.31.90:3001/api';

// ====================== Token 管理 ======================
var TokenManager = /*#__PURE__*/function () {
  function TokenManager() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, TokenManager);
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(TokenManager, null, [{
    key: "getToken",
    value: function getToken() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token') || '';
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', token);
    }
  }, {
    key: "clearToken",
    value: function clearToken() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('refreshToken') || '';
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(token) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('refreshToken', token);
    }
  }, {
    key: "clearRefreshToken",
    value: function clearRefreshToken() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('refreshToken');
    }
  }]);
}(); // ====================== 家庭管理 ======================
var FamilyManager = /*#__PURE__*/function () {
  function FamilyManager() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, FamilyManager);
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(FamilyManager, null, [{
    key: "getCurrentFamilyId",
    value: function getCurrentFamilyId() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('currentFamilyId') || '';
    }
  }, {
    key: "setCurrentFamilyId",
    value: function setCurrentFamilyId(familyId) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('currentFamilyId', familyId);
    }
  }, {
    key: "getCurrentFamily",
    value: function getCurrentFamily() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('currentFamily') || null;
    }
  }, {
    key: "setCurrentFamily",
    value: function setCurrentFamily(family) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('currentFamily', family);
      if (family && family.id) {
        this.setCurrentFamilyId(String(family.id));
      }
    }
  }, {
    key: "clearCurrentFamily",
    value: function clearCurrentFamily() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('currentFamilyId');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('currentFamily');
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      var family = this.getCurrentFamily();
      return family ? family.role === 'admin' : false;
    }
  }]);
}(); // ====================== 用户管理 ======================
var UserManager = /*#__PURE__*/function () {
  function UserManager() {
    (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, UserManager);
  }
  return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(UserManager, null, [{
    key: "getUser",
    value: function getUser() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user') || null;
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('user', user);
    }
  }, {
    key: "clearUser",
    value: function clearUser() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('user');
    }
  }, {
    key: "getCurrentMode",
    value: function getCurrentMode() {
      var token = TokenManager.getToken();
      var isLoggedIn = !!token;
      return {
        isLoggedIn: isLoggedIn,
        isGuestMode: !isLoggedIn
      };
    }
  }]);
}(); // ====================== 请求封装 ======================
function getMockData(url) {
  // 药品列表
  if (url === '/medicine/list') {
    return {
      code: 0,
      data: [{
        id: 5001,
        familyId: 2001,
        name: '阿莫西林胶囊',
        manufacturer: '华北制药',
        specification: '0.25g*24粒',
        category: '抗生素',
        stock: 10,
        unit: '盒',
        dosage: '每次2粒，每日3次，饭后服用',
        expiryDate: '2026-12-31',
        status: 'normal',
        daysToExpiry: 230
      }, {
        id: 5002,
        familyId: 2001,
        name: '布洛芬缓释胶囊',
        manufacturer: '中美天津史克',
        specification: '0.3g*12粒',
        category: '止痛药',
        stock: 5,
        unit: '盒',
        dosage: '每次1粒，每日2次，疼痛时服用',
        expiryDate: '2026-06-30',
        status: 'expiring',
        daysToExpiry: 47
      }, {
        id: 5003,
        familyId: 2001,
        name: '维生素C片',
        manufacturer: '华北制药',
        specification: '0.1g*100片',
        category: '维生素',
        stock: 20,
        unit: '瓶',
        dosage: '每次1片，每日1次，口服',
        expiryDate: '2027-06-30',
        status: 'normal',
        daysToExpiry: 412
      }, {
        id: 5004,
        familyId: 2001,
        name: '感冒清热颗粒',
        manufacturer: '北京同仁堂',
        specification: '10g*10袋',
        category: '感冒药',
        stock: 15,
        unit: '盒',
        dosage: '每次1袋，每日3次，开水冲服',
        expiryDate: '2026-09-30',
        status: 'normal',
        daysToExpiry: 139
      }, {
        id: 5005,
        familyId: 2001,
        name: '创可贴',
        manufacturer: '云南白药',
        specification: '100片/盒',
        category: '医疗器械',
        stock: 50,
        unit: '盒',
        dosage: '按需使用，外用',
        expiryDate: '2027-12-31',
        status: 'normal',
        daysToExpiry: 596
      }]
    };
  }
  // 计划列表
  if (url === '/plan/list') {
    return {
      code: 0,
      data: [{
        id: 6001,
        familyId: 2001,
        medicineName: '阿莫西林胶囊',
        memberName: '张三',
        frequency: '每日3次',
        timeSlots: ['08:00', '12:00', '18:00'],
        status: 'active',
        startDate: '2026-05-01',
        endDate: '2026-05-14'
      }, {
        id: 6002,
        familyId: 2001,
        medicineName: '维生素C片',
        memberName: '张三',
        frequency: '每日1次',
        timeSlots: ['08:30'],
        status: 'active',
        startDate: '2026-03-01',
        endDate: '2026-12-31'
      }]
    };
  }
  // 家庭成员
  if (url === '/family/list') {
    return {
      code: 0,
      data: [{
        id: 4001,
        familyId: 2001,
        name: '张三',
        relationship: '本人',
        age: 35
      }, {
        id: 4002,
        familyId: 2001,
        name: '李四',
        relationship: '配偶',
        age: 33
      }]
    };
  }
  // 家庭列表
  if (url === '/families/my') {
    return {
      code: 0,
      data: [{
        id: 2001,
        name: '我的家庭',
        role: 'admin',
        memberCount: 2
      }]
    };
  }
  // 家庭成员 (families members)
  if (url.includes('/families/') && url.includes('/members') && !url.includes('/role') && !url.includes('/relationship')) {
    return {
      code: 0,
      data: [{
        userId: 1001,
        nickname: '张三',
        role: 'admin',
        relationship: 'self'
      }, {
        userId: 1002,
        nickname: '李四',
        role: 'member',
        relationship: 'spouse'
      }]
    };
  }
  // 关系规则
  if (url === '/families/relationship-rules') {
    return {
      code: 0,
      data: [{
        id: 1,
        relationship: 'self',
        maxCount: 1,
        description: '本人'
      }, {
        id: 2,
        relationship: 'spouse',
        maxCount: 1,
        description: '配偶'
      }, {
        id: 3,
        relationship: 'other',
        maxCount: null,
        description: '其他'
      }]
    };
  }
  // 用药记录
  if (url.startsWith('/records')) {
    var today = new Date().toISOString().split('T')[0];
    return {
      code: 0,
      data: [{
        id: 7001,
        planId: 6001,
        medicineName: '阿莫西林胶囊',
        memberName: '张三',
        time: '08:00',
        date: today,
        status: 'completed'
      }, {
        id: 7002,
        planId: 6001,
        medicineName: '阿莫西林胶囊',
        memberName: '张三',
        time: '12:00',
        date: today,
        status: 'pending'
      }]
    };
  }
  // 识别历史
  if (url.includes('/medicine/recognize/history')) {
    return {
      code: 0,
      data: {
        items: [],
        total: 0,
        page: 1,
        limit: 20,
        totalPages: 0
      }
    };
  }
  // 统计
  if (url === '/sync/statistics') {
    return {
      code: 0,
      data: {
        medicineCount: 5,
        planCount: 2,
        memberCount: 2,
        familyMemberCount: 2,
        expiringCount: 1,
        expiredCount: 0
      }
    };
  }
  // 通知设置
  if (url === '/notifications/settings') {
    return {
      code: 0,
      data: {
        reminderTime: 15,
        expiryWarningDays: 30
      }
    };
  }
  // 订阅状态
  if (url === '/notifications/subscriptions') {
    return {
      code: 0,
      data: {
        subscriptions: [],
        templates: {}
      }
    };
  }
  // 同步数据
  if (url === '/sync/full') {
    return {
      code: 0,
      data: {
        medicines: [],
        plans: [],
        familyMembers: [],
        serverTime: new Date().toISOString()
      }
    };
  }
  return null;
}
function request(_x) {
  return _request.apply(this, arguments);
} // ====================== 导出 ======================
function _request() {
  _request = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)().m(function _callee(url) {
    var method,
      data,
      options,
      token,
      familyId,
      authPaths,
      needAuth,
      mock,
      header,
      res,
      refreshToken,
      _refreshRes$data,
      refreshRes,
      _mock,
      body,
      backendMsg,
      errMsg,
      _mock2,
      _args = arguments,
      _t,
      _t2;
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
          data = _args.length > 2 ? _args[2] : undefined;
          options = _args.length > 3 ? _args[3] : undefined;
          token = TokenManager.getToken();
          familyId = FamilyManager.getCurrentFamilyId(); // 需要认证的路径，但没有token → 返回mock数据
          authPaths = ['/auth/', '/families/'];
          needAuth = !authPaths.some(function (p) {
            return url.startsWith(p);
          });
          if (!(needAuth && !token && method === 'GET')) {
            _context.n = 1;
            break;
          }
          mock = getMockData(url);
          if (!mock) {
            _context.n = 1;
            break;
          }
          return _context.a(2, mock);
        case 1:
          header = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({
            'Content-Type': 'application/json'
          }, (options === null || options === void 0 ? void 0 : options.header) || {});
          if (token) header['Authorization'] = "Bearer ".concat(token);
          if (familyId) header['x-family-id'] = String(familyId);
          _context.p = 2;
          _context.n = 3;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
            url: "".concat(API_BASE_URL).concat(url),
            method: method,
            data: data,
            header: header
          });
        case 3:
          res = _context.v;
          if (!(res.statusCode === 401)) {
            _context.n = 10;
            break;
          }
          refreshToken = TokenManager.getRefreshToken();
          if (!refreshToken) {
            _context.n = 8;
            break;
          }
          _context.p = 4;
          _context.n = 5;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
            url: "".concat(API_BASE_URL, "/auth/refresh"),
            method: 'POST',
            data: {
              refreshToken: refreshToken
            },
            header: {
              'Content-Type': 'application/json'
            }
          });
        case 5:
          refreshRes = _context.v;
          if (!(refreshRes.statusCode === 200 && (_refreshRes$data = refreshRes.data) !== null && _refreshRes$data !== void 0 && (_refreshRes$data = _refreshRes$data.data) !== null && _refreshRes$data !== void 0 && _refreshRes$data.accessToken)) {
            _context.n = 6;
            break;
          }
          TokenManager.setToken(refreshRes.data.data.accessToken);
          return _context.a(2, request(url, method, data, options));
        case 6:
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
        case 8:
          if (!(method === 'GET')) {
            _context.n = 9;
            break;
          }
          _mock = getMockData(url);
          if (!_mock) {
            _context.n = 9;
            break;
          }
          return _context.a(2, _mock);
        case 9:
          TokenManager.clearToken();
          UserManager.clearUser();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('isLoggedIn', false);
          throw new Error('登录已过期，请重新登录');
        case 10:
          if (!(res.statusCode >= 400)) {
            _context.n = 11;
            break;
          }
          body = res.data;
          backendMsg = (body === null || body === void 0 ? void 0 : body.message) || (body === null || body === void 0 ? void 0 : body.error) || (body === null || body === void 0 ? void 0 : body.msg) || '';
          errMsg = backendMsg || "\u8BF7\u6C42\u5931\u8D25 (".concat(res.statusCode, ")");
          if (!(options !== null && options !== void 0 && options.silent)) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: errMsg,
              icon: 'none',
              duration: 3000
            });
          }
          throw new Error(errMsg);
        case 11:
          return _context.a(2, res.data);
        case 12:
          _context.p = 12;
          _t2 = _context.v;
          if (!(method === 'GET')) {
            _context.n = 13;
            break;
          }
          _mock2 = getMockData(url);
          if (!_mock2) {
            _context.n = 13;
            break;
          }
          return _context.a(2, _mock2);
        case 13:
          if (!(options !== null && options !== void 0 && options.silent)) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: _t2.message || '网络请求失败',
              icon: 'none',
              duration: 2000
            });
          }
          throw _t2;
        case 14:
          return _context.a(2);
      }
    }, _callee, null, [[4, 7], [2, 12]]);
  }));
  return _request.apply(this, arguments);
}


// ====================== API 方法 ======================

// Auth
var authApi = {
  loginByPhone: function loginByPhone(phone, password) {
    return request('/auth/login-by-phone', 'POST', {
      phone: phone,
      password: password
    });
  },
  loginByNickname: function loginByNickname(nickname, password) {
    return request('/auth/login-by-nickname', 'POST', {
      nickname: nickname,
      password: password
    });
  },
  wxLogin: function wxLogin(code, userInfo) {
    return request('/auth/login', 'POST', {
      code: code,
      userInfo: userInfo
    });
  },
  getProfile: function getProfile() {
    return request('/auth/profile', 'GET');
  },
  updateProfile: function updateProfile(data) {
    return request('/auth/profile', 'PUT', data);
  },
  uploadAvatar: function uploadAvatar(filePath) {
    return new Promise(function (resolve, reject) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().uploadFile({
        url: "".concat(API_BASE_URL, "/auth/upload-avatar"),
        filePath: filePath,
        name: 'avatar',
        header: {
          Authorization: "Bearer ".concat(TokenManager.getToken())
        },
        success: function success(res) {
          return resolve(JSON.parse(res.data));
        },
        fail: reject
      });
    });
  },
  refreshToken: function refreshToken(_refreshToken) {
    return request('/auth/refresh', 'POST', {
      refreshToken: _refreshToken
    });
  },
  logout: function logout() {
    return request('/auth/logout', 'POST');
  }
};

// Families
var familiesApi = {
  create: function create(name) {
    return request('/families/create', 'POST', {
      name: name
    });
  },
  getMy: function getMy() {
    return request('/families/my', 'GET');
  },
  getRelationshipRules: function getRelationshipRules() {
    return request('/families/relationship-rules', 'GET');
  },
  getDetail: function getDetail(familyId) {
    return request("/families/".concat(familyId), 'GET');
  },
  update: function update(familyId, name) {
    return request("/families/".concat(familyId), 'PUT', {
      name: name
    });
  },
  delete: function _delete(familyId) {
    return request("/families/".concat(familyId), 'DELETE');
  },
  generateInviteCode: function generateInviteCode(familyId) {
    return request("/families/".concat(familyId, "/invite"), 'POST');
  },
  join: function join(inviteCode) {
    return request('/families/join', 'POST', {
      inviteCode: inviteCode
    });
  },
  getMembers: function getMembers(familyId) {
    return request("/families/".concat(familyId, "/members"), 'GET');
  },
  updateMemberRole: function updateMemberRole(familyId, userId, role) {
    return request("/families/".concat(familyId, "/members/").concat(userId, "/role"), 'PUT', {
      role: role
    });
  },
  removeMember: function removeMember(familyId, userId) {
    return request("/families/".concat(familyId, "/members/").concat(userId), 'DELETE');
  },
  leaveFamily: function leaveFamily(familyId) {
    return request("/families/".concat(familyId, "/leave"), 'POST');
  },
  addMemberByPhone: function addMemberByPhone(familyId, phone, relationship) {
    return request("/families/".concat(familyId, "/members/add-by-phone"), 'POST', {
      phone: phone,
      relationship: relationship
    });
  },
  updateMemberRelationship: function updateMemberRelationship(familyId, userId, relationship) {
    return request("/families/".concat(familyId, "/members/").concat(userId, "/relationship"), 'PUT', {
      relationship: relationship
    });
  }
};

// Family Members
var familyApi = {
  getList: function getList() {
    return request('/family/list', 'GET');
  },
  add: function add(data) {
    return request('/family/add', 'POST', data);
  },
  update: function update(id, data) {
    return request("/family/update/".concat(id), 'PUT', data);
  },
  delete: function _delete(id) {
    return request("/family/delete/".concat(id), 'DELETE');
  }
};

// Medicine
var medicineApi = {
  getList: function getList() {
    return request('/medicine/list', 'GET');
  },
  add: function add(data) {
    return request('/medicine/add', 'POST', data);
  },
  update: function update(id, data) {
    return request("/medicine/update/".concat(id), 'PUT', data);
  },
  delete: function _delete(id) {
    return request("/medicine/delete/".concat(id), 'DELETE');
  },
  recognizeBarcode: function recognizeBarcode(barcode) {
    return request('/medicine/recognize/barcode', 'POST', {
      barcode: barcode
    });
  },
  recognizeImage: function recognizeImage(filePath) {
    return new Promise(function (resolve, reject) {
      console.log('[API] 图片识别开始，路径:', filePath);
      var header = {};
      var token = TokenManager.getToken();
      var familyId = FamilyManager.getCurrentFamilyId();
      console.log('[API] Token:', token ? '有' : '无');
      console.log('[API] FamilyId:', familyId);
      if (token) header['Authorization'] = "Bearer ".concat(token);
      if (familyId) header['x-family-id'] = String(familyId);
      console.log('[API] 上传地址:', "".concat(API_BASE_URL, "/medicine/recognize/image"));
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().uploadFile({
        url: "".concat(API_BASE_URL, "/medicine/recognize/image"),
        filePath: filePath,
        name: 'image',
        header: header,
        success: function success(res) {
          console.log('[API] 上传成功，响应:', res);
          try {
            var data = JSON.parse(res.data);
            console.log('[API] 解析后数据:', data);
            resolve(data);
          } catch (e) {
            console.error('[API] 解析响应失败:', e);
            reject(new Error('解析响应失败'));
          }
        },
        fail: function fail(err) {
          console.error('[API] 上传失败:', err);
          reject(err);
        }
      });
    });
  },
  getRecognitionHistory: function getRecognitionHistory() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    return request("/medicine/recognize/history?page=".concat(page, "&limit=").concat(limit), 'GET');
  }
};

// Plans
var planApi = {
  getList: function getList() {
    return request('/plan/list', 'GET');
  },
  create: function create(data) {
    return request('/plan/create', 'POST', data);
  },
  update: function update(id, data) {
    return request("/plan/update/".concat(id), 'PUT', data);
  },
  delete: function _delete(id) {
    return request("/plan/delete/".concat(id), 'DELETE');
  }
};

// Records
var recordsApi = {
  getList: function getList(date) {
    return request("/records".concat(date ? "?date=".concat(date) : ''), 'GET');
  },
  complete: function complete(id) {
    return request("/records/complete/".concat(id), 'POST');
  },
  miss: function miss(id) {
    return request("/records/miss/".concat(id), 'POST');
  },
  add: function add(data) {
    return request('/records/add', 'POST', data);
  }
};

// Notifications
var notificationsApi = {
  subscribe: function subscribe(templateType) {
    return request('/notifications/subscribe', 'POST', {
      templateType: templateType
    });
  },
  unsubscribe: function unsubscribe(templateType) {
    return request("/notifications/unsubscribe/".concat(templateType), 'DELETE');
  },
  getSubscriptions: function getSubscriptions() {
    return request('/notifications/subscriptions', 'GET');
  },
  saveSettings: function saveSettings(data) {
    return request('/notifications/settings', 'POST', data);
  },
  getSettings: function getSettings() {
    return request('/notifications/settings', 'GET');
  }
};

// Sync
var syncApi = {
  getChanges: function getChanges(lastSyncTime) {
    return request("/sync/changes".concat(lastSyncTime ? "?lastSyncTime=".concat(lastSyncTime) : ''), 'GET');
  },
  getFull: function getFull() {
    return request('/sync/full', 'GET');
  },
  getStatistics: function getStatistics() {
    return request('/sync/statistics', 'GET');
  }
};

/***/ }),

/***/ 729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G1: function() { return /* binding */ disconnectSocket; },
/* harmony export */   cH: function() { return /* binding */ connectSocket; }
/* harmony export */ });
/* unused harmony exports onFamilyEvent, getSocket */
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);


var socket = null;
var SOCKET_URL = 'http://192.168.31.90:3001';
function connectSocket() {
  var familyId = _api__WEBPACK_IMPORTED_MODULE_1__/* .FamilyManager */ .kT.getCurrentFamilyId();
  if (!familyId) return;
  disconnectSocket();
  socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(SOCKET_URL, {
    query: {
      familyId: familyId
    },
    transports: ['websocket'],
    timeout: 5000,
    reconnectionAttempts: 2,
    autoConnect: true,
    forceNew: true
  });
  socket.on('connect', function () {
    console.log('[Socket] 已连接');
  });
  socket.on('disconnect', function () {
    console.log('[Socket] 已断开');
  });
  socket.on('connect_error', function () {
    var _socket;
    // Silently ignore - Socket is optional, don't spam console
    (_socket = socket) === null || _socket === void 0 || _socket.disconnect();
  });
  return socket;
}
function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
function onFamilyEvent(event, callback) {
  if (!socket) return;
  socket.on(event, callback);
  return function () {
    var _socket2;
    (_socket2 = socket) === null || _socket2 === void 0 || _socket2.off(event, callback);
  };
}
function getSocket() {
  return socket;
}

/***/ }),

/***/ 9206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: function() { return /* binding */ useUserStore; }
/* harmony export */ });
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2007);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7282);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);





var useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(function (set, get) {
  return {
    isLoggedIn: false,
    isGuestMode: true,
    isSeniorMode: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('seniorMode') || false,
    seniorTheme: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('seniorTheme') || 'white',
    user: null,
    currentFamily: _services_api__WEBPACK_IMPORTED_MODULE_1__/* .FamilyManager */ .kT.getCurrentFamily(),
    families: [],
    setLoggedIn: function setLoggedIn(token, refreshToken, user) {
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .TokenManager */ .tC.setToken(token);
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .TokenManager */ .tC.setRefreshToken(refreshToken);
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .UserManager */ .$5.setUser(user);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('isLoggedIn', true);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('isGuestMode', false);
      set({
        isLoggedIn: true,
        isGuestMode: false,
        user: user
      });
    },
    setGuestMode: function setGuestMode() {
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .TokenManager */ .tC.clearToken();
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .TokenManager */ .tC.clearRefreshToken();
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .UserManager */ .$5.clearUser();
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .FamilyManager */ .kT.clearCurrentFamily();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('isLoggedIn', false);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('isGuestMode', true);
      set({
        isLoggedIn: false,
        isGuestMode: true,
        user: null,
        currentFamily: null,
        families: []
      });
    },
    setSeniorMode: function setSeniorMode(mode) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('seniorMode', mode);
      set({
        isSeniorMode: mode
      });
    },
    setSeniorTheme: function setSeniorTheme(theme) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('seniorTheme', theme);
      set({
        seniorTheme: theme
      });
    },
    setCurrentFamily: function setCurrentFamily(family) {
      _services_api__WEBPACK_IMPORTED_MODULE_1__/* .FamilyManager */ .kT.setCurrentFamily(family);
      set({
        currentFamily: family
      });
    },
    setFamilies: function setFamilies(families) {
      set({
        families: families
      });
    },
    logout: function () {
      var _logout = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)().m(function _callee() {
        var _t;
        return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _services_api__WEBPACK_IMPORTED_MODULE_1__/* .authApi */ .ZQ.logout();
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
            case 3:
              get().setGuestMode();
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }(),
    loadFromStorage: function loadFromStorage() {
      var token = _services_api__WEBPACK_IMPORTED_MODULE_1__/* .TokenManager */ .tC.getToken();
      var isLoggedIn = !!token;
      var isGuestMode = !isLoggedIn;
      var user = _services_api__WEBPACK_IMPORTED_MODULE_1__/* .UserManager */ .$5.getUser();
      var currentFamily = _services_api__WEBPACK_IMPORTED_MODULE_1__/* .FamilyManager */ .kT.getCurrentFamily();
      var isSeniorMode = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('seniorMode') || false;
      var seniorTheme = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('seniorTheme') || 'white';
      set({
        isLoggedIn: isLoggedIn,
        isGuestMode: isGuestMode,
        user: user,
        currentFamily: currentFamily,
        isSeniorMode: isSeniorMode,
        seniorTheme: seniorTheme
      });
    },
    fetchProfile: function () {
      var _fetchProfile = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)().m(function _callee2() {
        var res, profile, _t2;
        return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _services_api__WEBPACK_IMPORTED_MODULE_1__/* .authApi */ .ZQ.getProfile();
            case 1:
              res = _context2.v;
              if (res.code === 0) {
                profile = res.data;
                _services_api__WEBPACK_IMPORTED_MODULE_1__/* .UserManager */ .$5.setUser(profile);
                set({
                  user: profile,
                  families: profile.families || []
                });
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      function fetchProfile() {
        return _fetchProfile.apply(this, arguments);
      }
      return fetchProfile;
    }()
  };
});

/***/ }),

/***/ 735:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_unused_export__=1;__webpack_unused_export__=4;exports.DefaultEventPriority=16;__webpack_unused_export__=1;__webpack_unused_export__=536870912;__webpack_unused_export__=0;


/***/ }),

/***/ 2935:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
    var exports = {};
'use strict';var aa=__webpack_require__(6540),ba=__webpack_require__(8585),ca=Object.assign;function n(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ha=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ma=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),ra=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var sa=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ta=Symbol.iterator;function ua(a){if(null===a||"object"!==typeof a)return null;a=ta&&a[ta]||a["@@iterator"];return"function"===typeof a?a:null}
function va(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ia:return"Fragment";case ha:return"Portal";case ka:return"Profiler";case ja:return"StrictMode";case oa:return"Suspense";case pa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ma:return(a.displayName||"Context")+".Consumer";case la:return(a._context.displayName||"Context")+".Provider";case na:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case qa:return b=a.displayName||null,null!==b?b:va(a.type)||"Memo";case ra:b=a._payload;a=a._init;try{return va(a(b))}catch(c){}}return null}
function xa(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(b);case 8:return b===ja?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function ya(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function za(a){if(ya(a)!==a)throw Error(n(188));}
function Aa(a){var b=a.alternate;if(!b){b=ya(a);if(null===b)throw Error(n(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return za(e),a;if(f===d)return za(e),b;f=f.sibling}throw Error(n(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(n(189));}}if(c.alternate!==d)throw Error(n(190));}if(3!==c.tag)throw Error(n(188));return c.stateNode.current===c?a:b}function Ba(a){a=Aa(a);return null!==a?Ca(a):null}function Ca(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Ca(a);if(null!==b)return b;a=a.sibling}return null}
function Da(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){if(4!==a.tag){var b=Da(a);if(null!==b)return b}a=a.sibling}return null}
var Ea=Array.isArray,Fa=$$$hostConfig.getPublicInstance,Ga=$$$hostConfig.getRootHostContext,Ha=$$$hostConfig.getChildHostContext,Ia=$$$hostConfig.prepareForCommit,Ja=$$$hostConfig.resetAfterCommit,Ka=$$$hostConfig.createInstance,La=$$$hostConfig.appendInitialChild,Ma=$$$hostConfig.finalizeInitialChildren,Na=$$$hostConfig.prepareUpdate,Oa=$$$hostConfig.shouldSetTextContent,Pa=$$$hostConfig.createTextInstance,Qa=$$$hostConfig.scheduleTimeout,Ra=$$$hostConfig.cancelTimeout,Sa=$$$hostConfig.noTimeout,
Ta=$$$hostConfig.isPrimaryRenderer,Ua=$$$hostConfig.supportsMutation,Va=$$$hostConfig.supportsPersistence,p=$$$hostConfig.supportsHydration,Wa=$$$hostConfig.getInstanceFromNode,Xa=$$$hostConfig.preparePortalMount,Ya=$$$hostConfig.getCurrentEventPriority,Za=$$$hostConfig.detachDeletedInstance,$a=$$$hostConfig.supportsMicrotasks,ab=$$$hostConfig.scheduleMicrotask,bb=$$$hostConfig.supportsTestSelectors,cb=$$$hostConfig.findFiberRoot,db=$$$hostConfig.getBoundingRect,eb=$$$hostConfig.getTextContent,fb=
$$$hostConfig.isHiddenSubtree,gb=$$$hostConfig.matchAccessibilityRole,hb=$$$hostConfig.setFocusIfFocusable,ib=$$$hostConfig.setupIntersectionObserver,jb=$$$hostConfig.appendChild,kb=$$$hostConfig.appendChildToContainer,lb=$$$hostConfig.commitTextUpdate,mb=$$$hostConfig.commitMount,nb=$$$hostConfig.commitUpdate,ob=$$$hostConfig.insertBefore,pb=$$$hostConfig.insertInContainerBefore,qb=$$$hostConfig.removeChild,rb=$$$hostConfig.removeChildFromContainer,sb=$$$hostConfig.resetTextContent,tb=$$$hostConfig.hideInstance,
ub=$$$hostConfig.hideTextInstance,vb=$$$hostConfig.unhideInstance,wb=$$$hostConfig.unhideTextInstance,xb=$$$hostConfig.clearContainer,yb=$$$hostConfig.cloneInstance,zb=$$$hostConfig.createContainerChildSet,Ab=$$$hostConfig.appendChildToContainerChildSet,Bb=$$$hostConfig.finalizeContainerChildren,Cb=$$$hostConfig.replaceContainerChildren,Db=$$$hostConfig.cloneHiddenInstance,Eb=$$$hostConfig.cloneHiddenTextInstance,Fb=$$$hostConfig.canHydrateInstance,Gb=$$$hostConfig.canHydrateTextInstance,Hb=$$$hostConfig.canHydrateSuspenseInstance,
Ib=$$$hostConfig.isSuspenseInstancePending,Jb=$$$hostConfig.isSuspenseInstanceFallback,Kb=$$$hostConfig.registerSuspenseInstanceRetry,Lb=$$$hostConfig.getNextHydratableSibling,Mb=$$$hostConfig.getFirstHydratableChild,Nb=$$$hostConfig.getFirstHydratableChildWithinContainer,Ob=$$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,Pb=$$$hostConfig.hydrateInstance,Qb=$$$hostConfig.hydrateTextInstance,Rb=$$$hostConfig.hydrateSuspenseInstance,Sb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
Tb=$$$hostConfig.commitHydratedContainer,Ub=$$$hostConfig.commitHydratedSuspenseInstance,Vb=$$$hostConfig.clearSuspenseBoundary,Wb=$$$hostConfig.clearSuspenseBoundaryFromContainer,Xb=$$$hostConfig.shouldDeleteUnhydratedTailInstances,Yb=$$$hostConfig.didNotMatchHydratedContainerTextInstance,Zb=$$$hostConfig.didNotMatchHydratedTextInstance,$b;function ac(a){if(void 0===$b)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);$b=b&&b[1]||""}return"\n"+$b+a}var bc=!1;
function cc(a,b){if(!a||bc)return"";bc=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{bc=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?ac(a):""}var dc=Object.prototype.hasOwnProperty,ec=[],fc=-1;function gc(a){return{current:a}}
function x(a){0>fc||(a.current=ec[fc],ec[fc]=null,fc--)}function y(a,b){fc++;ec[fc]=a.current;a.current=b}var hc={},A=gc(hc),B=gc(!1),ic=hc;function jc(a,b){var c=a.type.contextTypes;if(!c)return hc;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function C(a){a=a.childContextTypes;return null!==a&&void 0!==a}function kc(){x(B);x(A)}function lc(a,b,c){if(A.current!==hc)throw Error(n(168));y(A,b);y(B,c)}function mc(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(n(108,xa(a)||"Unknown",e));return ca({},c,d)}
function nc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||hc;ic=A.current;y(A,a);y(B,B.current);return!0}function oc(a,b,c){var d=a.stateNode;if(!d)throw Error(n(169));c?(a=mc(a,b,ic),d.__reactInternalMemoizedMergedChildContext=a,x(B),x(A),y(A,a)):x(B);y(B,c)}var qc=Math.clz32?Math.clz32:pc,rc=Math.log,sc=Math.LN2;function pc(a){a>>>=0;return 0===a?32:31-(rc(a)/sc|0)|0}var tc=64,uc=4194304;
function vc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function wc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=vc(h):(f&=g,0!==f&&(d=vc(f)))}else g=c&~e,0!==g?d=vc(g):0!==f&&(d=vc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-qc(b),e=1<<c,d|=a[c],b&=~e;return d}
function xc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function yc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-qc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=xc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function zc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Ac(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}function Bc(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-qc(b);a[b]=c}
function Cc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-qc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function Dc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-qc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var D=0;function Ec(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}
var Fc=ba.unstable_scheduleCallback,Gc=ba.unstable_cancelCallback,Hc=ba.unstable_shouldYield,Ic=ba.unstable_requestPaint,E=ba.unstable_now,Jc=ba.unstable_ImmediatePriority,Kc=ba.unstable_UserBlockingPriority,Lc=ba.unstable_NormalPriority,Mc=ba.unstable_IdlePriority,Nc=null,Oc=null;function Pc(a){if(Oc&&"function"===typeof Oc.onCommitFiberRoot)try{Oc.onCommitFiberRoot(Nc,a,void 0,128===(a.current.flags&128))}catch(b){}}function Qc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Rc="function"===typeof Object.is?Object.is:Qc,Sc=null,Tc=!1,Uc=!1;function Vc(a){null===Sc?Sc=[a]:Sc.push(a)}function Wc(a){Tc=!0;Vc(a)}function Xc(){if(!Uc&&null!==Sc){Uc=!0;var a=0,b=D;try{var c=Sc;for(D=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}Sc=null;Tc=!1}catch(e){throw null!==Sc&&(Sc=Sc.slice(a+1)),Fc(Jc,Xc),e;}finally{D=b,Uc=!1}}return null}var Yc=ea.ReactCurrentBatchConfig;
function Zc(a,b){if(Rc(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!dc.call(b,e)||!Rc(a[e],b[e]))return!1}return!0}
function $c(a){switch(a.tag){case 5:return ac(a.type);case 16:return ac("Lazy");case 13:return ac("Suspense");case 19:return ac("SuspenseList");case 0:case 2:case 15:return a=cc(a.type,!1),a;case 11:return a=cc(a.type.render,!1),a;case 1:return a=cc(a.type,!0),a;default:return""}}function ad(a,b){if(a&&a.defaultProps){b=ca({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var bd=gc(null),cd=null,dd=null,ed=null;function fd(){ed=dd=cd=null}
function gd(a,b,c){Ta?(y(bd,b._currentValue),b._currentValue=c):(y(bd,b._currentValue2),b._currentValue2=c)}function hd(a){var b=bd.current;x(bd);Ta?a._currentValue=b:a._currentValue2=b}function id(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function jd(a,b){cd=a;ed=dd=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(kd=!0),a.firstContext=null)}function ld(a){var b=Ta?a._currentValue:a._currentValue2;if(ed!==a)if(a={context:a,memoizedValue:b,next:null},null===dd){if(null===cd)throw Error(n(308));dd=a;cd.dependencies={lanes:0,firstContext:a}}else dd=dd.next=a;return b}var md=null,nd=!1;
function od(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function qd(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function rd(a,b){var c=a.updateQueue;null!==c&&(c=c.shared,null!==F&&0!==(a.mode&1)&&0===(G&2)?(a=c.interleaved,null===a?(b.next=b,null===md?md=[c]:md.push(c)):(b.next=a.next,a.next=b),c.interleaved=b):(a=c.pending,null===a?b.next=b:(b.next=a.next,a.next=b),c.pending=b))}function sd(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Dc(a,c)}}
function td(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function ud(a,b,c,d){var e=a.updateQueue;nd=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var v=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,z=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:z,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var q=a,N=h;r=b;z=c;switch(N.tag){case 1:q=N.payload;if("function"===typeof q){v=q.call(z,v,r);break a}v=q;break a;case 3:q.flags=q.flags&-65537|128;case 0:q=N.payload;r="function"===typeof q?q.call(z,v,r):q;if(null===r||void 0===r)break a;v=ca({},v,r);break a;case 2:nd=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else z={eventTime:z,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=z,k=v):m=m.next=z,g|=
r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=v);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);vd|=g;a.lanes=g;a.memoizedState=v}}
function wd(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(n(191,e));e.call(d)}}}var xd=(new aa.Component).refs;function yd(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:ca({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Bd={isMounted:function(a){return(a=a._reactInternals)?ya(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=H(),e=zd(a),f=qd(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);rd(a,f);b=Ad(a,e,d);null!==b&&sd(b,a,e)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=H(),e=zd(a),f=qd(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);rd(a,f);b=Ad(a,e,d);null!==b&&sd(b,a,e)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=H(),d=zd(a),e=qd(c,
d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);rd(a,e);b=Ad(a,d,c);null!==b&&sd(b,a,d)}};function Cd(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Zc(c,d)||!Zc(e,f):!0}
function Dd(a,b,c){var d=!1,e=hc;var f=b.contextType;"object"===typeof f&&null!==f?f=ld(f):(e=C(b)?ic:A.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?jc(a,e):hc);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Bd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ed(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Bd.enqueueReplaceState(b,b.state,null)}
function Fd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=xd;od(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=ld(f):(f=C(b)?ic:A.current,e.context=jc(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(yd(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Bd.enqueueReplaceState(e,e.state,null),ud(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}var Gd=[],Hd=0,Id=null,Jd=0,Kd=[],Ld=0,Md=null,Nd=1,Od="";function Pd(a,b){Gd[Hd++]=Jd;Gd[Hd++]=Id;Id=a;Jd=b}
function Qd(a,b,c){Kd[Ld++]=Nd;Kd[Ld++]=Od;Kd[Ld++]=Md;Md=a;var d=Nd;a=Od;var e=32-qc(d)-1;d&=~(1<<e);c+=1;var f=32-qc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Nd=1<<32-qc(b)+e|c<<e|d;Od=f+a}else Nd=1<<f|c<<e|d,Od=a}function Rd(a){null!==a.return&&(Pd(a,1),Qd(a,1,0))}function Sd(a){for(;a===Id;)Id=Gd[--Hd],Gd[Hd]=null,Jd=Gd[--Hd],Gd[Hd]=null;for(;a===Md;)Md=Kd[--Ld],Kd[Ld]=null,Od=Kd[--Ld],Kd[Ld]=null,Nd=Kd[--Ld],Kd[Ld]=null}var Td=null,Ud=null,I=!1,Vd=!1,Wd=null;
function Xd(a,b){var c=Yd(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Zd(a,b){switch(a.tag){case 5:return b=Fb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,Td=a,Ud=Mb(b),!0):!1;case 6:return b=Gb(b,a.pendingProps),null!==b?(a.stateNode=b,Td=a,Ud=null,!0):!1;case 13:b=Hb(b);if(null!==b){var c=null!==Md?{id:Nd,overflow:Od}:null;a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824};c=Yd(18,null,null,0);c.stateNode=b;c.return=a;a.child=c;Td=a;Ud=null;return!0}return!1;default:return!1}}function $d(a){return 0!==(a.mode&1)&&0===(a.flags&128)}
function ae(a){if(I){var b=Ud;if(b){var c=b;if(!Zd(a,b)){if($d(a))throw Error(n(418));b=Lb(c);var d=Td;b&&Zd(a,b)?Xd(d,c):(a.flags=a.flags&-4097|2,I=!1,Td=a)}}else{if($d(a))throw Error(n(418));a.flags=a.flags&-4097|2;I=!1;Td=a}}}function be(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Td=a}
function ce(a){if(!p||a!==Td)return!1;if(!I)return be(a),I=!0,!1;if(3!==a.tag&&(5!==a.tag||Xb(a.type)&&!Oa(a.type,a.memoizedProps))){var b=Ud;if(b){if($d(a)){for(a=Ud;a;)a=Lb(a);throw Error(n(418));}for(;b;)Xd(a,b),b=Lb(b)}}be(a);if(13===a.tag){if(!p)throw Error(n(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));Ud=Sb(a)}else Ud=Td?Lb(a.stateNode):null;return!0}function de(){p&&(Ud=Td=null,Vd=I=!1)}function ee(a){null===Wd?Wd=[a]:Wd.push(a)}
function fe(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(n(309));var d=c.stateNode}if(!d)throw Error(n(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===xd&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(n(284));if(!c._owner)throw Error(n(290,a));}return a}
function ge(a,b){a=Object.prototype.toString.call(b);throw Error(n(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function he(a){var b=a._init;return b(a._payload)}
function ie(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=je(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ke(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ia)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===ra&&he(f)===b.type))return d=e(b,c.props),d.ref=fe(a,b,c),d.return=a,d;d=le(c.type,c.key,c.props,null,a.mode,d);d.ref=fe(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=me(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=ne(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function v(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=ke(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case fa:return c=le(b.type,b.key,b.props,null,a.mode,c),
c.ref=fe(a,null,b),c.return=a,c;case ha:return b=me(b,a.mode,c),b.return=a,b;case ra:var d=b._init;return v(a,d(b._payload),c)}if(Ea(b)||ua(b))return b=ne(b,a.mode,c,null),b.return=a,b;ge(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case fa:return c.key===e?k(a,b,c,d):null;case ha:return c.key===e?l(a,b,c,d):null;case ra:return e=c._init,r(a,
b,e(c._payload),d)}if(Ea(c)||ua(c))return null!==e?null:m(a,b,c,d,null);ge(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case fa:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case ra:var f=d._init;return z(a,b,c,f(d._payload),e)}if(Ea(d)||ua(d))return a=a.get(c)||null,m(b,a,d,e,null);ge(b,d)}return null}
function q(e,g,h,k){for(var l=null,m=null,w=g,u=g=0,t=null;null!==w&&u<h.length;u++){w.index>u?(t=w,w=null):t=w.sibling;var q=r(e,w,h[u],k);if(null===q){null===w&&(w=t);break}a&&w&&null===q.alternate&&b(e,w);g=f(q,g,u);null===m?l=q:m.sibling=q;m=q;w=t}if(u===h.length)return c(e,w),I&&Pd(e,u),l;if(null===w){for(;u<h.length;u++)w=v(e,h[u],k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);I&&Pd(e,u);return l}for(w=d(e,w);u<h.length;u++)t=z(w,e,u,h[u],k),null!==t&&(a&&null!==t.alternate&&w.delete(null===
t.key?u:t.key),g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);a&&w.forEach(function(a){return b(e,a)});I&&Pd(e,u);return l}function N(e,g,h,k){var l=ua(h);if("function"!==typeof l)throw Error(n(150));h=l.call(h);if(null==h)throw Error(n(151));for(var w=l=null,m=g,u=g=0,q=null,t=h.next();null!==m&&!t.done;u++,t=h.next()){m.index>u?(q=m,m=null):q=m.sibling;var V=r(e,m,t.value,k);if(null===V){null===m&&(m=q);break}a&&m&&null===V.alternate&&b(e,m);g=f(V,g,u);null===w?l=V:w.sibling=V;w=V;m=q}if(t.done)return c(e,
m),I&&Pd(e,u),l;if(null===m){for(;!t.done;u++,t=h.next())t=v(e,t.value,k),null!==t&&(g=f(t,g,u),null===w?l=t:w.sibling=t,w=t);I&&Pd(e,u);return l}for(m=d(e,m);!t.done;u++,t=h.next())t=z(m,e,u,t.value,k),null!==t&&(a&&null!==t.alternate&&m.delete(null===t.key?u:t.key),g=f(t,g,u),null===w?l=t:w.sibling=t,w=t);a&&m.forEach(function(a){return b(e,a)});I&&Pd(e,u);return l}function da(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ia&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==
f){switch(f.$$typeof){case fa:a:{for(var k=f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ia){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===ra&&he(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=fe(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ia?(d=ne(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=le(f.type,f.key,f.props,null,a.mode,h),h.ref=fe(a,d,f),h.return=
a,a=h)}return g(a);case ha:a:{for(l=f.key;null!==d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=me(f,a.mode,h);d.return=a;a=d}return g(a);case ra:return l=f._init,da(a,d,l(f._payload),h)}if(Ea(f))return q(a,d,f,h);if(ua(f))return N(a,d,f,h);ge(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&
6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=ke(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return da}var oe=ie(!0),pe=ie(!1),qe={},re=gc(qe),se=gc(qe),te=gc(qe);function ue(a){if(a===qe)throw Error(n(174));return a}function ve(a,b){y(te,b);y(se,a);y(re,qe);a=Ga(b);x(re);y(re,a)}function we(){x(re);x(se);x(te)}function xe(a){var b=ue(te.current),c=ue(re.current);b=Ha(c,a.type,b);c!==b&&(y(se,a),y(re,b))}function ye(a){se.current===a&&(x(re),x(se))}var J=gc(0);
function ze(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||Ib(c)||Jb(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Ae=[];
function Be(){for(var a=0;a<Ae.length;a++){var b=Ae[a];Ta?b._workInProgressVersionPrimary=null:b._workInProgressVersionSecondary=null}Ae.length=0}var Ce=ea.ReactCurrentDispatcher,De=ea.ReactCurrentBatchConfig,Ee=0,K=null,L=null,M=null,Fe=!1,Ge=!1,He=0,Ie=0;function O(){throw Error(n(321));}function Je(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Rc(a[c],b[c]))return!1;return!0}
function Ke(a,b,c,d,e,f){Ee=f;K=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ce.current=null===a||null===a.memoizedState?Le:Me;a=c(d,e);if(Ge){f=0;do{Ge=!1;He=0;if(25<=f)throw Error(n(301));f+=1;M=L=null;b.updateQueue=null;Ce.current=Ne;a=c(d,e)}while(Ge)}Ce.current=Oe;b=null!==L&&null!==L.next;Ee=0;M=L=K=null;Fe=!1;if(b)throw Error(n(300));return a}function Pe(){var a=0!==He;He=0;return a}
function Qe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===M?K.memoizedState=M=a:M=M.next=a;return M}function Re(){if(null===L){var a=K.alternate;a=null!==a?a.memoizedState:null}else a=L.next;var b=null===M?K.memoizedState:M.next;if(null!==b)M=b,L=a;else{if(null===a)throw Error(n(310));L=a;a={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null};null===M?K.memoizedState=M=a:M=M.next=a}return M}
function Se(a,b){return"function"===typeof b?b(a):b}
function Te(a){var b=Re(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=L,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Ee&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var v={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=v,g=d):k=k.next=v;K.lanes|=m;vd|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;Rc(d,b.memoizedState)||(kd=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,K.lanes|=f,vd|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Ue(a){var b=Re(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Rc(f,b.memoizedState)||(kd=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Ve(){}
function We(a,b){var c=K,d=Re(),e=b(),f=!Rc(d.memoizedState,e);f&&(d.memoizedState=e,kd=!0);d=d.queue;Xe(Ye.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==M&&M.memoizedState.tag&1){c.flags|=2048;Ze(9,$e.bind(null,c,d,e,b),void 0,null);if(null===F)throw Error(n(349));0!==(Ee&30)||af(c,b,e)}return e}function af(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=K.updateQueue;null===b?(b={lastEffect:null,stores:null},K.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function $e(a,b,c,d){b.value=c;b.getSnapshot=d;bf(b)&&Ad(a,1,-1)}function Ye(a,b,c){return c(function(){bf(b)&&Ad(a,1,-1)})}function bf(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!Rc(a,c)}catch(d){return!0}}function cf(a){var b=Qe();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:a};b.queue=a;a=a.dispatch=df.bind(null,K,a);return[b.memoizedState,a]}
function Ze(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=K.updateQueue;null===b?(b={lastEffect:null,stores:null},K.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ef(){return Re().memoizedState}function ff(a,b,c,d){var e=Qe();K.flags|=a;e.memoizedState=Ze(1|b,c,void 0,void 0===d?null:d)}
function gf(a,b,c,d){var e=Re();d=void 0===d?null:d;var f=void 0;if(null!==L){var g=L.memoizedState;f=g.destroy;if(null!==d&&Je(d,g.deps)){e.memoizedState=Ze(b,c,f,d);return}}K.flags|=a;e.memoizedState=Ze(1|b,c,f,d)}function hf(a,b){return ff(8390656,8,a,b)}function Xe(a,b){return gf(2048,8,a,b)}function jf(a,b){return gf(4,2,a,b)}function kf(a,b){return gf(4,4,a,b)}
function lf(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function mf(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return gf(4,4,lf.bind(null,b,a),c)}function nf(){}function of(a,b){var c=Re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Je(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function pf(a,b){var c=Re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Je(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function qf(a,b){var c=D;D=0!==c&&4>c?c:4;a(!0);var d=De.transition;De.transition={};try{a(!1),b()}finally{D=c,De.transition=d}}function rf(){return Re().memoizedState}function sf(a,b,c){var d=zd(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};tf(a)?uf(b,c):(vf(a,b,c),c=H(),a=Ad(a,d,c),null!==a&&wf(a,b,d))}
function df(a,b,c){var d=zd(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(tf(a))uf(b,e);else{vf(a,b,e);var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(Rc(h,g))return}catch(k){}finally{}c=H();a=Ad(a,d,c);null!==a&&wf(a,b,d)}}function tf(a){var b=a.alternate;return a===K||null!==b&&b===K}
function uf(a,b){Ge=Fe=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function vf(a,b,c){null!==F&&0!==(a.mode&1)&&0===(G&2)?(a=b.interleaved,null===a?(c.next=c,null===md?md=[b]:md.push(b)):(c.next=a.next,a.next=c),b.interleaved=c):(a=b.pending,null===a?c.next=c:(c.next=a.next,a.next=c),b.pending=c)}function wf(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Dc(a,c)}}
var Oe={readContext:ld,useCallback:O,useContext:O,useEffect:O,useImperativeHandle:O,useInsertionEffect:O,useLayoutEffect:O,useMemo:O,useReducer:O,useRef:O,useState:O,useDebugValue:O,useDeferredValue:O,useTransition:O,useMutableSource:O,useSyncExternalStore:O,useId:O,unstable_isNewReconciler:!1},Le={readContext:ld,useCallback:function(a,b){Qe().memoizedState=[a,void 0===b?null:b];return a},useContext:ld,useEffect:hf,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ff(4194308,
4,lf.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ff(4194308,4,a,b)},useInsertionEffect:function(a,b){return ff(4,2,a,b)},useMemo:function(a,b){var c=Qe();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Qe();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=sf.bind(null,K,a);return[d.memoizedState,a]},useRef:function(a){var b=
Qe();a={current:a};return b.memoizedState=a},useState:cf,useDebugValue:nf,useDeferredValue:function(a){var b=cf(a),c=b[0],d=b[1];hf(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=cf(!1),b=a[0];a=qf.bind(null,a[1]);Qe().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=K,e=Qe();if(I){if(void 0===c)throw Error(n(407));c=c()}else{c=b();if(null===F)throw Error(n(349));
0!==(Ee&30)||af(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;hf(Ye.bind(null,d,f,a),[a]);d.flags|=2048;Ze(9,$e.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Qe(),b=F.identifierPrefix;if(I){var c=Od;var d=Nd;c=(d&~(1<<32-qc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=He++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Ie++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Me={readContext:ld,useCallback:of,useContext:ld,useEffect:Xe,useImperativeHandle:mf,
useInsertionEffect:jf,useLayoutEffect:kf,useMemo:pf,useReducer:Te,useRef:ef,useState:function(){return Te(Se)},useDebugValue:nf,useDeferredValue:function(a){var b=Te(Se),c=b[0],d=b[1];Xe(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=Te(Se)[0],b=Re().memoizedState;return[a,b]},useMutableSource:Ve,useSyncExternalStore:We,useId:rf,unstable_isNewReconciler:!1},Ne={readContext:ld,useCallback:of,useContext:ld,useEffect:Xe,
useImperativeHandle:mf,useInsertionEffect:jf,useLayoutEffect:kf,useMemo:pf,useReducer:Ue,useRef:ef,useState:function(){return Ue(Se)},useDebugValue:nf,useDeferredValue:function(a){var b=Ue(Se),c=b[0],d=b[1];Xe(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=Ue(Se)[0],b=Re().memoizedState;return[a,b]},useMutableSource:Ve,useSyncExternalStore:We,useId:rf,unstable_isNewReconciler:!1};
function xf(a,b){try{var c="",d=b;do c+=$c(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function yf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var zf="function"===typeof WeakMap?WeakMap:Map;function Af(a,b,c){c=qd(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Bf||(Bf=!0,Cf=d);yf(a,b)};return c}
function Df(a,b,c){c=qd(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){yf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){yf(a,b);"function"!==typeof d&&(null===Ef?Ef=new Set([this]):Ef.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ff(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new zf;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Gf.bind(null,a,b,c),b.then(a,a))}function Hf(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function If(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=qd(-1,1),b.tag=2,rd(c,b))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function Jf(a){a.flags|=4}function Kf(a,b){if(null!==a&&a.child===b.child)return!0;if(0!==(b.flags&16))return!1;for(a=b.child;null!==a;){if(0!==(a.flags&12854)||0!==(a.subtreeFlags&12854))return!1;a=a.sibling}return!0}var Lf,Mf,Nf,Of;
if(Ua)Lf=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)La(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}},Mf=function(){},Nf=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=ue(re.current);c=Na(f,c,a,d,e,g);(b.updateQueue=c)&&Jf(b)}},Of=function(a,b,c,d){c!==d&&Jf(b)};else if(Va){Lf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));La(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),La(a,f);else if(4!==e.tag)if(22===e.tag&&null!==e.memoizedState)f=e.child,null!==f&&(f.return=e),Lf(a,e,!0,!0);else if(null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};var Pf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ab(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ab(a,f);else if(4!==e.tag)if(22===e.tag&&null!==e.memoizedState)f=e.child,null!==f&&(f.return=e),Pf(a,e,!0,!0);else if(null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};Mf=function(a,b){var c=
b.stateNode;if(!Kf(a,b)){a=c.containerInfo;var d=zb(a);Pf(d,b,!1,!1);c.pendingChildren=d;Jf(b);Bb(a,d)}};Nf=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=Kf(a,b))&&g===d)b.stateNode=f;else{var h=b.stateNode,k=ue(re.current),l=null;g!==d&&(l=Na(h,c,g,d,e,k));a&&null===l?b.stateNode=f:(f=yb(f,l,c,g,d,b,a,h),Ma(f,c,d,e,k)&&Jf(b),b.stateNode=f,a?Jf(b):Lf(f,b,!1,!1))}};Of=function(a,b,c,d){c!==d?(a=ue(te.current),c=ue(re.current),b.stateNode=Pa(d,a,c,b),Jf(b)):b.stateNode=a.stateNode}}else Mf=
function(){},Nf=function(){},Of=function(){};function Qf(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function P(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Rf(a,b,c){var d=b.pendingProps;Sd(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return P(b),null;case 1:return C(b.type)&&kc(),P(b),null;case 3:d=b.stateNode;we();x(B);x(A);Be();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)ce(b)?Jf(b):null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==Wd&&(Sf(Wd),Wd=null));Mf(a,b);P(b);return null;case 5:ye(b);c=ue(te.current);var e=
b.type;if(null!==a&&null!=b.stateNode)Nf(a,b,e,d,c),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(n(166));P(b);return null}a=ue(re.current);if(ce(b)){if(!p)throw Error(n(175));a=Pb(b.stateNode,b.type,b.memoizedProps,c,a,b,!Vd);b.updateQueue=a;null!==a&&Jf(b)}else{var f=Ka(e,d,c,a,b);Lf(f,b,!1,!1);b.stateNode=f;Ma(f,e,d,c,a)&&Jf(b)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}P(b);return null;case 6:if(a&&null!=b.stateNode)Of(a,b,a.memoizedProps,d);else{if("string"!==
typeof d&&null===b.stateNode)throw Error(n(166));a=ue(te.current);c=ue(re.current);if(ce(b)){if(!p)throw Error(n(176));a=b.stateNode;d=b.memoizedProps;if(c=Qb(a,d,b,!Vd))if(e=Td,null!==e)switch(f=0!==(e.mode&1),e.tag){case 3:Yb(e.stateNode.containerInfo,a,d,f);break;case 5:Zb(e.type,e.memoizedProps,e.stateNode,a,d,f)}c&&Jf(b)}else b.stateNode=Pa(d,a,c,b)}P(b);return null;case 13:x(J);d=b.memoizedState;if(I&&null!==Ud&&0!==(b.mode&1)&&0===(b.flags&128)){for(a=Ud;a;)a=Lb(a);de();b.flags|=98560;return b}if(null!==
d&&null!==d.dehydrated){d=ce(b);if(null===a){if(!d)throw Error(n(318));if(!p)throw Error(n(344));a=b.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));Rb(a,b)}else de(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;P(b);return null}null!==Wd&&(Sf(Wd),Wd=null);if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;c=!1;null===a?ce(b):c=null!==a.memoizedState;d&&!c&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(J.current&1)?0===Q&&(Q=3):Tf()));null!==b.updateQueue&&(b.flags|=
4);P(b);return null;case 4:return we(),Mf(a,b),null===a&&Xa(b.stateNode.containerInfo),P(b),null;case 10:return hd(b.type._context),P(b),null;case 17:return C(b.type)&&kc(),P(b),null;case 19:x(J);e=b.memoizedState;if(null===e)return P(b),null;d=0!==(b.flags&128);f=e.rendering;if(null===f)if(d)Qf(e,!1);else{if(0!==Q||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){f=ze(a);if(null!==f){b.flags|=128;Qf(e,!1);a=f.updateQueue;null!==a&&(b.updateQueue=a,b.flags|=4);b.subtreeFlags=0;a=c;for(d=b.child;null!==
d;)c=d,e=a,c.flags&=14680066,f=c.alternate,null===f?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=f.childLanes,c.lanes=f.lanes,c.child=f.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=f.memoizedProps,c.memoizedState=f.memoizedState,c.updateQueue=f.updateQueue,c.type=f.type,e=f.dependencies,c.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),d=d.sibling;
y(J,J.current&1|2);return b.child}a=a.sibling}null!==e.tail&&E()>Uf&&(b.flags|=128,d=!0,Qf(e,!1),b.lanes=4194304)}else{if(!d)if(a=ze(f),null!==a){if(b.flags|=128,d=!0,a=a.updateQueue,null!==a&&(b.updateQueue=a,b.flags|=4),Qf(e,!0),null===e.tail&&"hidden"===e.tailMode&&!f.alternate&&!I)return P(b),null}else 2*E()-e.renderingStartTime>Uf&&1073741824!==c&&(b.flags|=128,d=!0,Qf(e,!1),b.lanes=4194304);e.isBackwards?(f.sibling=b.child,b.child=f):(a=e.last,null!==a?a.sibling=f:b.child=f,e.last=f)}if(null!==
e.tail)return b=e.tail,e.rendering=b,e.tail=b.sibling,e.renderingStartTime=E(),b.sibling=null,a=J.current,y(J,d?a&1|2:a&1),b;P(b);return null;case 22:case 23:return Vf(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(Wf&1073741824)&&(P(b),Ua&&b.subtreeFlags&6&&(b.flags|=8192)):P(b),null;case 24:return null;case 25:return null}throw Error(n(156,b.tag));}var Xf=ea.ReactCurrentOwner,kd=!1;
function R(a,b,c,d){b.child=null===a?pe(b,null,c,d):oe(b,a.child,c,d)}function Yf(a,b,c,d,e){c=c.render;var f=b.ref;jd(b,e);d=Ke(a,b,c,d,f,e);c=Pe();if(null!==a&&!kd)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zf(a,b,e);I&&c&&Rd(b);b.flags|=1;R(a,b,d,e);return b.child}
function $f(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!ag(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bg(a,b,f,d,e);a=le(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Zc;if(c(g,d)&&a.ref===b.ref)return Zf(a,b,e)}b.flags|=1;a=je(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bg(a,b,c,d,e){if(null!==a&&Zc(a.memoizedProps,d)&&a.ref===b.ref)if(kd=!1,0!==(a.lanes&e))0!==(a.flags&131072)&&(kd=!0);else return b.lanes=a.lanes,Zf(a,b,e);return cg(a,b,c,d,e)}
function dg(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null},y(eg,Wf),Wf|=c;else if(0!==(c&1073741824))b.memoizedState={baseLanes:0,cachePool:null},d=null!==f?f.baseLanes:c,y(eg,Wf),Wf|=d;else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null},b.updateQueue=null,y(eg,Wf),Wf|=a,null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):
d=c,y(eg,Wf),Wf|=d;R(a,b,e,c);return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cg(a,b,c,d,e){var f=C(c)?ic:A.current;f=jc(b,f);jd(b,e);c=Ke(a,b,c,d,f,e);d=Pe();if(null!==a&&!kd)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zf(a,b,e);I&&d&&Rd(b);b.flags|=1;R(a,b,c,e);return b.child}
function gg(a,b,c,d,e){if(C(c)){var f=!0;nc(b)}else f=!1;jd(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Dd(b,c,d),Fd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ld(l):(l=C(c)?ic:A.current,l=jc(b,l));var m=c.getDerivedStateFromProps,v="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;v||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ed(b,g,d,l);nd=!1;var r=b.memoizedState;g.state=r;ud(b,d,g,e);k=b.memoizedState;h!==d||r!==k||B.current||nd?("function"===typeof m&&(yd(b,c,m,d),k=b.memoizedState),(h=nd||Cd(b,c,h,d,r,k,l))?(v||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&
(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;pd(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:ad(b.type,h);g.props=l;v=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=ld(k):(k=C(c)?ic:A.current,k=jc(b,k));var z=c.getDerivedStateFromProps;(m="function"===typeof z||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==v||r!==k)&&Ed(b,g,d,k);nd=!1;r=b.memoizedState;g.state=r;ud(b,d,g,e);var q=b.memoizedState;h!==v||r!==q||B.current||nd?("function"===typeof z&&(yd(b,c,z,d),q=b.memoizedState),(l=nd||Cd(b,c,l,d,r,q,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
q,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,q,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=q),g.props=d,g.state=q,g.context=k,d=l):("function"!==
typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return hg(a,b,c,d,f,e)}
function hg(a,b,c,d,e,f){fg(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&oc(b,c,!1),Zf(a,b,f);d=b.stateNode;Xf.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=oe(b,a.child,null,f),b.child=oe(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&oc(b,c,!0);return b.child}function ig(a){var b=a.stateNode;b.pendingContext?lc(a,b.pendingContext,b.pendingContext!==b.context):b.context&&lc(a,b.context,!1);ve(a,b.containerInfo)}
function jg(a,b,c,d,e){de();ee(e);b.flags|=256;R(a,b,c,d);return b.child}var kg={dehydrated:null,treeContext:null,retryLane:0};function lg(a){return{baseLanes:a,cachePool:null}}
function mg(a,b,c){var d=b.pendingProps,e=J.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(J,e&1);if(null===a){ae(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:Jb(a)?b.lanes=8:b.lanes=1073741824,null;e=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,e={mode:"hidden",children:e},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=e):
f=ng(e,d,0,null),a=ne(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=lg(c),b.memoizedState=kg,a):og(b,e)}e=a.memoizedState;if(null!==e){h=e.dehydrated;if(null!==h){if(g){if(b.flags&256)return b.flags&=-257,pg(a,b,c,Error(n(422)));if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=ng({mode:"visible",children:d.children},e,0,null);f=ne(f,e,c,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&oe(b,a.child,
null,c);b.child.memoizedState=lg(c);b.memoizedState=kg;return f}if(0===(b.mode&1))b=pg(a,b,c,null);else if(Jb(h))b=pg(a,b,c,Error(n(419)));else if(d=0!==(c&a.childLanes),kd||d){d=F;if(null!==d){switch(c&-c){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=
268435456;break;default:f=0}d=0!==(f&(d.suspendedLanes|c))?0:f;0!==d&&d!==e.retryLane&&(e.retryLane=d,Ad(a,d,-1))}Tf();b=pg(a,b,c,Error(n(421)))}else Ib(h)?(b.flags|=128,b.child=a.child,b=qg.bind(null,a),Kb(h,b),b=null):(c=e.treeContext,p&&(Ud=Ob(h),Td=b,I=!0,Wd=null,Vd=!1,null!==c&&(Kd[Ld++]=Nd,Kd[Ld++]=Od,Kd[Ld++]=Md,Nd=c.id,Od=c.overflow,Md=b)),b=og(b,b.pendingProps.children),b.flags|=4096);return b}if(f)return d=rg(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=
null===e?lg(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kg,d;c=sg(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=rg(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?lg(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kg,d;c=sg(a,b,d.children,c);b.memoizedState=null;return c}
function og(a,b){b=ng({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sg(a,b,c,d){var e=a.child;a=e.sibling;c=je(e,{mode:"visible",children:c});0===(b.mode&1)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(d=b.deletions,null===d?(b.deletions=[a],b.flags|=16):d.push(a));return b.child=c}
function rg(a,b,c,d,e){var f=b.mode;a=a.child;var g=a.sibling,h={mode:"hidden",children:c};0===(f&1)&&b.child!==a?(c=b.child,c.childLanes=0,c.pendingProps=h,b.deletions=null):(c=je(a,h),c.subtreeFlags=a.subtreeFlags&14680064);null!==g?d=je(g,d):(d=ne(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function pg(a,b,c,d){null!==d&&ee(d);oe(b,a.child,null,c);a=og(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function tg(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);id(a.return,b,c)}function ug(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function vg(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=J.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&tg(a,c,b);else if(19===a.tag)tg(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(J,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ze(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);ug(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ze(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}ug(b,!0,c,null,f);break;case "together":ug(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function Zf(a,b,c){null!==a&&(b.dependencies=a.dependencies);vd|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(n(153));if(null!==b.child){a=b.child;c=je(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=je(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function wg(a,b,c){switch(b.tag){case 3:ig(b);de();break;case 5:xe(b);break;case 1:C(b.type)&&nc(b);break;case 4:ve(b,b.stateNode.containerInfo);break;case 10:gd(b,b.type._context,b.memoizedProps.value);break;case 13:var d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(J,J.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return mg(a,b,c);y(J,J.current&1);a=Zf(a,b,c);return null!==a?a.sibling:null}y(J,J.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return vg(a,
b,c);b.flags|=128}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(J,J.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dg(a,b,c)}return Zf(a,b,c)}
function xg(a,b){Sd(b);switch(b.tag){case 1:return C(b.type)&&kc(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return we(),x(B),x(A),Be(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return ye(b),null;case 13:x(J);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(n(340));de()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return x(J),null;case 4:return we(),null;case 10:return hd(b.type._context),null;case 22:case 23:return Vf(),
null;case 24:return null;default:return null}}var yg=!1,zg=!1,Ag="function"===typeof WeakSet?WeakSet:Set,S=null;function Bg(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){T(a,b,d)}else c.current=null}function Cg(a,b,c){try{c()}catch(d){T(a,b,d)}}var Dg=!1;
function Eg(a,b){Ia(a.containerInfo);for(S=b;null!==S;)if(a=S,b=a.child,0!==(a.subtreeFlags&1028)&&null!==b)b.return=a,S=b;else for(;null!==S;){a=S;try{var c=a.alternate;if(0!==(a.flags&1024))switch(a.tag){case 0:case 11:case 15:break;case 1:if(null!==c){var d=c.memoizedProps,e=c.memoizedState,f=a.stateNode,g=f.getSnapshotBeforeUpdate(a.elementType===a.type?d:ad(a.type,d),e);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:Ua&&xb(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;
default:throw Error(n(163));}}catch(h){T(a,a.return,h)}b=a.sibling;if(null!==b){b.return=a.return;S=b;break}S=a.return}c=Dg;Dg=!1;return c}function Fg(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Cg(b,c,f)}e=e.next}while(e!==d)}}function Gg(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Hg(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=Fa(c);break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Ig(a,b,c){if(Oc&&"function"===typeof Oc.onCommitFiberUnmount)try{Oc.onCommitFiberUnmount(Nc,b)}catch(g){}switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a=a.next;do{var e=d,f=e.destroy;e=e.tag;void 0!==f&&(0!==(e&2)?Cg(b,c,f):0!==(e&4)&&Cg(b,c,f));d=d.next}while(d!==a)}break;case 1:Bg(b,c);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(g){T(b,
c,g)}break;case 5:Bg(b,c);break;case 4:Ua?Jg(a,b,c):Va&&Va&&(b=b.stateNode.containerInfo,c=zb(b),Cb(b,c))}}function Kg(a,b,c){for(var d=b;;)if(Ig(a,d,c),null===d.child||Ua&&4===d.tag){if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return}d.sibling.return=d.return;d=d.sibling}else d.child.return=d,d=d.child}
function Lg(a){var b=a.alternate;null!==b&&(a.alternate=null,Lg(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&Za(b));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Mg(a){return 5===a.tag||3===a.tag||4===a.tag}
function Ng(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Mg(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Og(a){if(Ua){a:{for(var b=a.return;null!==b;){if(Mg(b))break a;b=b.return}throw Error(n(160));}var c=b;switch(c.tag){case 5:b=c.stateNode;c.flags&32&&(sb(b),c.flags&=-33);c=Ng(a);Pg(a,c,b);break;case 3:case 4:b=c.stateNode.containerInfo;c=Ng(a);Qg(a,c,b);break;default:throw Error(n(161));}}}function Qg(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?pb(c,a,b):kb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Qg(a,b,c),a=a.sibling;null!==a;)Qg(a,b,c),a=a.sibling}
function Pg(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?ob(c,a,b):jb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Pg(a,b,c),a=a.sibling;null!==a;)Pg(a,b,c),a=a.sibling}
function Jg(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(n(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag)Kg(a,d,c),g?rb(f,d.stateNode):qb(f,d.stateNode);else if(18===d.tag)g?Wb(f,d.stateNode):Vb(f,d.stateNode);else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ig(a,d,c),null!==
d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Rg(a,b){if(Ua){switch(b.tag){case 0:case 11:case 14:case 15:Fg(3,b,b.return);Gg(3,b);Fg(5,b,b.return);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&nb(c,f,e,a,d,b)}return;case 6:if(null===b.stateNode)throw Error(n(162));c=b.memoizedProps;lb(b.stateNode,null!==a?a.memoizedProps:c,c);return;case 3:p&&null!==a&&a.memoizedState.isDehydrated&&Tb(b.stateNode.containerInfo);return;
case 12:return;case 13:Sg(b);return;case 19:Sg(b);return;case 17:return}throw Error(n(163));}switch(b.tag){case 0:case 11:case 14:case 15:Fg(3,b,b.return);Gg(3,b);Fg(5,b,b.return);return;case 12:return;case 13:Sg(b);return;case 19:Sg(b);return;case 3:p&&null!==a&&a.memoizedState.isDehydrated&&Tb(b.stateNode.containerInfo);break;case 22:case 23:return}a:if(Va){switch(b.tag){case 1:case 5:case 6:break a;case 3:case 4:b=b.stateNode;Cb(b.containerInfo,b.pendingChildren);break a}throw Error(n(163));}}
function Sg(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ag);b.forEach(function(b){var d=Tg.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function Ug(a,b){for(S=b;null!==S;){b=S;var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a;Ua?Jg(f,e,b):Kg(f,e,b);var g=e.alternate;null!==g&&(g.return=null);e.return=null}catch(wa){T(e,b,wa)}}c=b.child;if(0!==(b.subtreeFlags&12854)&&null!==c)c.return=b,S=c;else for(;null!==S;){b=S;try{var h=b.flags;h&32&&Ua&&sb(b.stateNode);if(h&512){var k=b.alternate;if(null!==k){var l=k.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}if(h&8192)switch(b.tag){case 13:if(null!==
b.memoizedState){var m=b.alternate;if(null===m||null===m.memoizedState)Vg=E()}break;case 22:var v=null!==b.memoizedState,r=b.alternate,z=null!==r&&null!==r.memoizedState;c=b;if(Ua)a:if(d=c,e=v,f=null,Ua)for(var q=d;;){if(5===q.tag){if(null===f){f=q;var N=q.stateNode;e?tb(N):vb(q.stateNode,q.memoizedProps)}}else if(6===q.tag){if(null===f){var da=q.stateNode;e?ub(da):wb(da,q.memoizedProps)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===d)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===
d)break;for(;null===q.sibling;){if(null===q.return||q.return===d)break a;f===q&&(f=null);q=q.return}f===q&&(f=null);q.sibling.return=q.return;q=q.sibling}if(v&&!z&&0!==(c.mode&1)){S=c;for(var t=c.child;null!==t;){for(c=S=t;null!==S;){d=S;var w=d.child;switch(d.tag){case 0:case 11:case 14:case 15:Fg(4,d,d.return);break;case 1:Bg(d,d.return);var u=d.stateNode;if("function"===typeof u.componentWillUnmount){var V=d.return;try{u.props=d.memoizedProps,u.state=d.memoizedState,u.componentWillUnmount()}catch(wa){T(d,
V,wa)}}break;case 5:Bg(d,d.return);break;case 22:if(null!==d.memoizedState){Wg(c);continue}}null!==w?(w.return=d,S=w):Wg(c)}t=t.sibling}}}switch(h&4102){case 2:Og(b);b.flags&=-3;break;case 6:Og(b);b.flags&=-3;Rg(b.alternate,b);break;case 4096:b.flags&=-4097;break;case 4100:b.flags&=-4097;Rg(b.alternate,b);break;case 4:Rg(b.alternate,b)}}catch(wa){T(b,b.return,wa)}c=b.sibling;if(null!==c){c.return=b.return;S=c;break}S=b.return}}}function Xg(a,b,c){S=a;Yg(a,b,c)}
function Yg(a,b,c){for(var d=0!==(a.mode&1);null!==S;){var e=S,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||yg;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||zg;h=yg;var l=zg;yg=g;if((zg=k)&&!l)for(S=e;null!==S;)g=S,k=g.child,22===g.tag&&null!==g.memoizedState?Zg(e):null!==k?(k.return=g,S=k):Zg(e);for(;null!==f;)S=f,Yg(f,b,c),f=f.sibling;S=e;yg=h;zg=l}$g(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,S=f):$g(a,b,c)}}
function $g(a){for(;null!==S;){var b=S;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:zg||Gg(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!zg)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:ad(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&wd(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
Fa(b.child.stateNode);break;case 1:c=b.child.stateNode}wd(b,g,c)}break;case 5:var h=b.stateNode;null===c&&b.flags&4&&mb(h,b.type,b.memoizedProps,b);break;case 6:break;case 4:break;case 12:break;case 13:if(p&&null===b.memoizedState){var k=b.alternate;if(null!==k){var l=k.memoizedState;if(null!==l){var m=l.dehydrated;null!==m&&Ub(m)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(n(163));}zg||b.flags&512&&Hg(b)}catch(v){T(b,b.return,v)}}if(b===a){S=null;break}c=b.sibling;if(null!==
c){c.return=b.return;S=c;break}S=b.return}}function Wg(a){for(;null!==S;){var b=S;if(b===a){S=null;break}var c=b.sibling;if(null!==c){c.return=b.return;S=c;break}S=b.return}}
function Zg(a){for(;null!==S;){var b=S;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Gg(4,b)}catch(k){T(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){T(b,e,k)}}var f=b.return;try{Hg(b)}catch(k){T(b,f,k)}break;case 5:var g=b.return;try{Hg(b)}catch(k){T(b,g,k)}}}catch(k){T(b,b.return,k)}if(b===a){S=null;break}var h=b.sibling;if(null!==h){h.return=b.return;S=h;break}S=b.return}}
var ah=0,bh=1,ch=2,dh=3,eh=4;if("function"===typeof Symbol&&Symbol.for){var fh=Symbol.for;ah=fh("selector.component");bh=fh("selector.has_pseudo_class");ch=fh("selector.role");dh=fh("selector.test_id");eh=fh("selector.text")}function gh(a){var b=Wa(a);if(null!=b){if("string"!==typeof b.memoizedProps["data-testname"])throw Error(n(364));return b}a=cb(a);if(null===a)throw Error(n(362));return a.stateNode.current}
function hh(a,b){switch(b.$$typeof){case ah:if(a.type===b.value)return!0;break;case bh:a:{b=b.value;a=[a,0];for(var c=0;c<a.length;){var d=a[c++],e=a[c++],f=b[e];if(5!==d.tag||!fb(d)){for(;null!=f&&hh(d,f);)e++,f=b[e];if(e===b.length){b=!0;break a}else for(d=d.child;null!==d;)a.push(d,e),d=d.sibling}}b=!1}return b;case ch:if(5===a.tag&&gb(a.stateNode,b.value))return!0;break;case eh:if(5===a.tag||6===a.tag)if(a=eb(a),null!==a&&0<=a.indexOf(b.value))return!0;break;case dh:if(5===a.tag&&(a=a.memoizedProps["data-testname"],
"string"===typeof a&&a.toLowerCase()===b.value.toLowerCase()))return!0;break;default:throw Error(n(365));}return!1}function ih(a){switch(a.$$typeof){case ah:return"<"+(va(a.value)||"Unknown")+">";case bh:return":has("+(ih(a)||"")+")";case ch:return'[role="'+a.value+'"]';case eh:return'"'+a.value+'"';case dh:return'[data-testname="'+a.value+'"]';default:throw Error(n(365));}}
function jh(a,b){var c=[];a=[a,0];for(var d=0;d<a.length;){var e=a[d++],f=a[d++],g=b[f];if(5!==e.tag||!fb(e)){for(;null!=g&&hh(e,g);)f++,g=b[f];if(f===b.length)c.push(e);else for(e=e.child;null!==e;)a.push(e,f),e=e.sibling}}return c}function kh(a,b){if(!bb)throw Error(n(363));a=gh(a);a=jh(a,b);b=[];a=Array.from(a);for(var c=0;c<a.length;){var d=a[c++];if(5===d.tag)fb(d)||b.push(d.stateNode);else for(d=d.child;null!==d;)a.push(d),d=d.sibling}return b}
var lh=Math.ceil,mh=ea.ReactCurrentDispatcher,nh=ea.ReactCurrentOwner,U=ea.ReactCurrentBatchConfig,G=0,F=null,W=null,X=0,Wf=0,eg=gc(0),Q=0,oh=null,vd=0,ph=0,qh=0,rh=null,Y=null,Vg=0,Uf=Infinity;function sh(){Uf=E()+500}var Bf=!1,Cf=null,Ef=null,th=!1,uh=null,vh=0,wh=0,xh=null,yh=-1,zh=0;function H(){return 0!==(G&6)?E():-1!==yh?yh:yh=E()}
function zd(a){if(0===(a.mode&1))return 1;if(0!==(G&2)&&0!==X)return X&-X;if(null!==Yc.transition)return 0===zh&&(a=tc,tc<<=1,0===(tc&4194240)&&(tc=64),zh=a),zh;a=D;return 0!==a?a:Ya()}function Ad(a,b,c){if(50<wh)throw wh=0,xh=null,Error(n(185));var d=Ah(a,b);if(null===d)return null;Bc(d,b,c);if(0===(G&2)||d!==F)d===F&&(0===(G&2)&&(ph|=b),4===Q&&Bh(d,X)),Z(d,c),1===b&&0===G&&0===(a.mode&1)&&(sh(),Tc&&Xc());return d}
function Ah(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Z(a,b){var c=a.callbackNode;yc(a,b);var d=wc(a,a===F?X:0);if(0===d)null!==c&&Gc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Gc(c);if(1===b)0===a.tag?Wc(Ch.bind(null,a)):Vc(Ch.bind(null,a)),$a?ab(function(){0===G&&Xc()}):Fc(Jc,Xc),c=null;else{switch(Ec(d)){case 1:c=Jc;break;case 4:c=Kc;break;case 16:c=Lc;break;case 536870912:c=Mc;break;default:c=Lc}c=Dh(c,Eh.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Eh(a,b){yh=-1;zh=0;if(0!==(G&6))throw Error(n(327));var c=a.callbackNode;if(Fh()&&a.callbackNode!==c)return null;var d=wc(a,a===F?X:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Gh(a,d);else{b=d;var e=G;G|=2;var f=Hh();if(F!==a||X!==b)sh(),Ih(a,b);do try{Jh();break}catch(h){Kh(a,h)}while(1);fd();mh.current=f;G=e;null!==W?b=0:(F=null,X=0,b=Q)}if(0!==b){2===b&&(e=zc(a),0!==e&&(d=e,b=Lh(a,e)));if(1===b)throw c=oh,Ih(a,0),Bh(a,d),Z(a,E()),c;if(6===b)Bh(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Mh(e)&&(b=Gh(a,d),2===b&&(f=zc(a),0!==f&&(d=f,b=Lh(a,f))),1===b))throw c=oh,Ih(a,0),Bh(a,d),Z(a,E()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(n(345));case 2:Nh(a,Y);break;case 3:Bh(a,d);if((d&130023424)===d&&(b=Vg+500-E(),10<b)){if(0!==wc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){H();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Qa(Nh.bind(null,a,Y),b);break}Nh(a,Y);break;case 4:Bh(a,d);if((d&4194240)===d)break;b=a.eventTimes;for(e=-1;0<
d;){var g=31-qc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=E()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lh(d/1960))-d;if(10<d){a.timeoutHandle=Qa(Nh.bind(null,a,Y),d);break}Nh(a,Y);break;case 5:Nh(a,Y);break;default:throw Error(n(329));}}}Z(a,E());return a.callbackNode===c?Eh.bind(null,a):null}function Lh(a,b){var c=rh;a.current.memoizedState.isDehydrated&&(Ih(a,b).flags|=256);a=Gh(a,b);2!==a&&(b=Y,Y=c,null!==b&&Sf(b));return a}
function Sf(a){null===Y?Y=a:Y.push.apply(Y,a)}function Mh(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!Rc(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Bh(a,b){b&=~qh;b&=~ph;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-qc(b),d=1<<c;a[c]=-1;b&=~d}}function Ch(a){if(0!==(G&6))throw Error(n(327));Fh();var b=wc(a,0);if(0===(b&1))return Z(a,E()),null;var c=Gh(a,b);if(0!==a.tag&&2===c){var d=zc(a);0!==d&&(b=d,c=Lh(a,d))}if(1===c)throw c=oh,Ih(a,0),Bh(a,b),Z(a,E()),c;if(6===c)throw Error(n(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Nh(a,Y);Z(a,E());return null}
function Oh(a){null!==uh&&0===uh.tag&&0===(G&6)&&Fh();var b=G;G|=1;var c=U.transition,d=D;try{if(U.transition=null,D=1,a)return a()}finally{D=d,U.transition=c,G=b,0===(G&6)&&Xc()}}function Vf(){Wf=eg.current;x(eg)}
function Ih(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;c!==Sa&&(a.timeoutHandle=Sa,Ra(c));if(null!==W)for(c=W.return;null!==c;){var d=c;Sd(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&kc();break;case 3:we();x(B);x(A);Be();break;case 5:ye(d);break;case 4:we();break;case 13:x(J);break;case 19:x(J);break;case 10:hd(d.type._context);break;case 22:case 23:Vf()}c=c.return}F=a;W=a=je(a.current,null);X=Wf=b;Q=0;oh=null;qh=ph=vd=0;Y=rh=null;if(null!==md){for(b=
0;b<md.length;b++)if(c=md[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}md=null}return a}
function Kh(a,b){do{var c=W;try{fd();Ce.current=Oe;if(Fe){for(var d=K.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Fe=!1}Ee=0;M=L=K=null;Ge=!1;He=0;nh.current=null;if(null===c||null===c.return){Q=1;oh=b;W=null;break}a:{var f=a,g=c.return,h=c,k=b;b=X;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,v=m.tag;if(0===(m.mode&1)&&(0===v||11===v||15===v)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var z=Hf(g);if(null!==z){z.flags&=-257;If(z,g,h,f,b);z.mode&1&&Ff(f,l,b);b=z;k=l;var q=b.updateQueue;if(null===q){var N=new Set;N.add(k);b.updateQueue=N}else q.add(k);break a}else{if(0===(b&1)){Ff(f,l,b);Tf();break a}k=Error(n(426))}}else if(I&&h.mode&1){var da=Hf(g);if(null!==da){0===(da.flags&65536)&&(da.flags|=256);If(da,g,h,f,b);ee(k);break a}}f=k;4!==Q&&(Q=2);null===rh?rh=[f]:rh.push(f);k=xf(k,h);h=g;do{switch(h.tag){case 3:h.flags|=
65536;b&=-b;h.lanes|=b;var t=Af(h,k,b);td(h,t);break a;case 1:f=k;var w=h.type,u=h.stateNode;if(0===(h.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ef||!Ef.has(u)))){h.flags|=65536;b&=-b;h.lanes|=b;var V=Df(h,f,b);td(h,V);break a}}h=h.return}while(null!==h)}Ph(c)}catch(wa){b=wa;W===c&&null!==c&&(W=c=c.return);continue}break}while(1)}function Hh(){var a=mh.current;mh.current=Oe;return null===a?Oe:a}
function Tf(){if(0===Q||3===Q||2===Q)Q=4;null===F||0===(vd&268435455)&&0===(ph&268435455)||Bh(F,X)}function Gh(a,b){var c=G;G|=2;var d=Hh();F===a&&X===b||Ih(a,b);do try{Qh();break}catch(e){Kh(a,e)}while(1);fd();G=c;mh.current=d;if(null!==W)throw Error(n(261));F=null;X=0;return Q}function Qh(){for(;null!==W;)Rh(W)}function Jh(){for(;null!==W&&!Hc();)Rh(W)}function Rh(a){var b=Sh(a.alternate,a,Wf);a.memoizedProps=a.pendingProps;null===b?Ph(a):W=b;nh.current=null}
function Ph(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Rf(c,b,Wf),null!==c){W=c;return}}else{c=xg(c,b);if(null!==c){c.flags&=32767;W=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Q=6;W=null;return}}b=b.sibling;if(null!==b){W=b;return}W=b=a}while(null!==b);0===Q&&(Q=5)}function Nh(a,b){var c=D,d=U.transition;try{U.transition=null,D=1,Th(a,b,c)}finally{U.transition=d,D=c}return null}
function Th(a,b,c){do Fh();while(null!==uh);if(0!==(G&6))throw Error(n(327));var d=a.finishedWork,e=a.finishedLanes;if(null===d)return null;a.finishedWork=null;a.finishedLanes=0;if(d===a.current)throw Error(n(177));a.callbackNode=null;a.callbackPriority=0;var f=d.lanes|d.childLanes;Cc(a,f);a===F&&(W=F=null,X=0);0===(d.subtreeFlags&2064)&&0===(d.flags&2064)||th||(th=!0,Dh(Lc,function(){Fh();return null}));f=0!==(d.flags&15990);if(0!==(d.subtreeFlags&15990)||f){f=U.transition;U.transition=null;var g=
D;D=1;var h=G;G|=4;nh.current=null;Eg(a,d);Ug(a,d,e);Ja(a.containerInfo);a.current=d;Xg(d,a,e);Ic();G=h;D=g;U.transition=f}else a.current=d;th&&(th=!1,uh=a,vh=e);f=a.pendingLanes;0===f&&(Ef=null);Pc(d.stateNode,c);Z(a,E());if(null!==b)for(c=a.onRecoverableError,d=0;d<b.length;d++)c(b[d]);if(Bf)throw Bf=!1,a=Cf,Cf=null,a;0!==(vh&1)&&0!==a.tag&&Fh();f=a.pendingLanes;0!==(f&1)?a===xh?wh++:(wh=0,xh=a):wh=0;Xc();return null}
function Fh(){if(null!==uh){var a=Ec(vh),b=U.transition,c=D;try{U.transition=null;D=16>a?16:a;if(null===uh)var d=!1;else{a=uh;uh=null;vh=0;if(0!==(G&6))throw Error(n(331));var e=G;G|=4;for(S=a.current;null!==S;){var f=S,g=f.child;if(0!==(S.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(S=l;null!==S;){var m=S;switch(m.tag){case 0:case 11:case 15:Fg(8,m,f)}var v=m.child;if(null!==v)v.return=m,S=v;else for(;null!==S;){m=S;var r=m.sibling,z=m.return;Lg(m);if(m===
l){S=null;break}if(null!==r){r.return=z;S=r;break}S=z}}}var q=f.alternate;if(null!==q){var N=q.child;if(null!==N){q.child=null;do{var da=N.sibling;N.sibling=null;N=da}while(null!==N)}}S=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,S=g;else b:for(;null!==S;){f=S;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Fg(9,f,f.return)}var t=f.sibling;if(null!==t){t.return=f.return;S=t;break b}S=f.return}}var w=a.current;for(S=w;null!==S;){g=S;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,S=u;else b:for(g=w;null!==S;){h=S;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Gg(9,h)}}catch(wa){T(h,h.return,wa)}if(h===g){S=null;break b}var V=h.sibling;if(null!==V){V.return=h.return;S=V;break b}S=h.return}}G=e;Xc();if(Oc&&"function"===typeof Oc.onPostCommitFiberRoot)try{Oc.onPostCommitFiberRoot(Nc,a)}catch(wa){}d=!0}return d}finally{D=c,U.transition=b}}return!1}function Uh(a,b,c){b=xf(c,b);b=Af(a,b,1);rd(a,b);b=H();a=Ah(a,1);null!==a&&(Bc(a,1,b),Z(a,b))}
function T(a,b,c){if(3===a.tag)Uh(a,a,c);else for(;null!==b;){if(3===b.tag){Uh(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ef||!Ef.has(d))){a=xf(c,a);a=Df(b,a,1);rd(b,a);a=H();b=Ah(b,1);null!==b&&(Bc(b,1,a),Z(b,a));break}}b=b.return}}
function Gf(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=H();a.pingedLanes|=a.suspendedLanes&c;F===a&&(X&c)===c&&(4===Q||3===Q&&(X&130023424)===X&&500>E()-Vg?Ih(a,0):qh|=c);Z(a,b)}function Vh(a,b){0===b&&(0===(a.mode&1)?b=1:(b=uc,uc<<=1,0===(uc&130023424)&&(uc=4194304)));var c=H();a=Ah(a,b);null!==a&&(Bc(a,b,c),Z(a,c))}function qg(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Vh(a,c)}
function Tg(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(n(314));}null!==d&&d.delete(b);Vh(a,c)}var Sh;
Sh=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||B.current)kd=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return kd=!1,wg(a,b,c);kd=0!==(a.flags&131072)?!0:!1}else kd=!1,I&&0!==(b.flags&1048576)&&Qd(b,Jd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;var e=jc(b,A.current);jd(b,c);e=Ke(null,b,d,a,e,c);var f=Pe();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?
(b.tag=1,b.memoizedState=null,b.updateQueue=null,C(d)?(f=!0,nc(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,od(b),e.updater=Bd,b.stateNode=e,e._reactInternals=b,Fd(b,d,a,c),b=hg(null,b,d,!0,f,c)):(b.tag=0,I&&f&&Rd(b),R(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Wh(d);a=ad(d,a);switch(e){case 0:b=cg(null,b,d,a,c);break a;case 1:b=gg(null,b,d,
a,c);break a;case 11:b=Yf(null,b,d,a,c);break a;case 14:b=$f(null,b,d,ad(d.type,a),c);break a}throw Error(n(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),cg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),gg(a,b,d,e,c);case 3:a:{ig(b);if(null===a)throw Error(n(387));d=b.pendingProps;f=b.memoizedState;e=f.element;pd(a,b);ud(b,d,null,c);var g=b.memoizedState;d=g.element;if(p&&f.isDehydrated)if(f={element:d,isDehydrated:!1,
cache:g.cache,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Error(n(423));b=jg(a,b,d,c,e);break a}else if(d!==e){e=Error(n(424));b=jg(a,b,d,c,e);break a}else for(p&&(Ud=Nb(b.stateNode.containerInfo),Td=b,I=!0,Wd=null,Vd=!1),c=pe(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{de();if(d===e){b=Zf(a,b,c);break a}R(a,b,d,c)}b=b.child}return b;case 5:return xe(b),null===a&&ae(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,
Oa(d,e)?g=null:null!==f&&Oa(d,f)&&(b.flags|=32),fg(a,b),R(a,b,g,c),b.child;case 6:return null===a&&ae(b),null;case 13:return mg(a,b,c);case 4:return ve(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=oe(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),Yf(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=
b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;gd(b,d,g);if(null!==f)if(Rc(f.value,g)){if(f.children===e.children&&!B.current){b=Zf(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=qd(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=
c);id(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(n(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);id(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,jd(b,c),e=ld(e),d=d(e),b.flags|=
1,R(a,b,d,c),b.child;case 14:return d=b.type,e=ad(d,b.pendingProps),e=ad(d.type,e),$f(a,b,d,e,c);case 15:return bg(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,C(d)?(a=!0,nc(b)):a=!1,jd(b,c),Dd(b,d,e),Fd(b,d,e,c),hg(null,b,d,!0,a,c);case 19:return vg(a,b,c);case 22:return dg(a,b,c)}throw Error(n(156,b.tag));};function Dh(a,b){return Fc(a,b)}
function Xh(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Yd(a,b,c,d){return new Xh(a,b,c,d)}function ag(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Wh(a){if("function"===typeof a)return ag(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===na)return 11;if(a===qa)return 14}return 2}
function je(a,b){var c=a.alternate;null===c?(c=Yd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function le(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ag(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ia:return ne(c.children,e,f,b);case ja:g=8;e|=8;break;case ka:return a=Yd(12,c,b,e|2),a.elementType=ka,a.lanes=f,a;case oa:return a=Yd(13,c,b,e),a.elementType=oa,a.lanes=f,a;case pa:return a=Yd(19,c,b,e),a.elementType=pa,a.lanes=f,a;case sa:return ng(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case la:g=10;break a;case ma:g=9;break a;case na:g=11;
break a;case qa:g=14;break a;case ra:g=16;d=null;break a}throw Error(n(130,null==a?a:typeof a,""));}b=Yd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function ne(a,b,c,d){a=Yd(7,a,d,b);a.lanes=c;return a}function ng(a,b,c,d){a=Yd(22,a,d,b);a.elementType=sa;a.lanes=c;a.stateNode={};return a}function ke(a,b,c){a=Yd(6,a,null,b);a.lanes=c;return a}
function me(a,b,c){b=Yd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Yh(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=Sa;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=Ac(0);this.expirationTimes=Ac(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Ac(0);this.identifierPrefix=d;this.onRecoverableError=e;p&&(this.mutableSourceEagerHydrationData=
null)}function Zh(a,b,c,d,e,f,g,h,k){a=new Yh(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Yd(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null};od(f);return a}
function $h(a){if(!a)return hc;a=a._reactInternals;a:{if(ya(a)!==a||1!==a.tag)throw Error(n(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(C(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(n(171));}if(1===a.tag){var c=a.type;if(C(c))return mc(a,c,b)}return b}
function ai(a){var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(n(188));a=Object.keys(a).join(",");throw Error(n(268,a));}a=Ba(b);return null===a?null:a.stateNode}function bi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ci(a,b){bi(a,b);(a=a.alternate)&&bi(a,b)}function di(a){a=Ba(a);return null===a?null:a.stateNode}function ei(){return null}
exports.attemptContinuousHydration=function(a){if(13===a.tag){var b=H();Ad(a,134217728,b);ci(a,134217728)}};exports.attemptHydrationAtCurrentPriority=function(a){if(13===a.tag){var b=H(),c=zd(a);Ad(a,c,b);ci(a,c)}};exports.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=vc(b.pendingLanes);0!==c&&(Dc(b,c|1),Z(b,E()),0===(G&6)&&(sh(),Xc()))}break;case 13:var d=H();Oh(function(){return Ad(a,1,d)});ci(a,1)}};
exports.batchedUpdates=function(a,b){var c=G;G|=1;try{return a(b)}finally{G=c,0===G&&(sh(),Tc&&Xc())}};exports.createComponentSelector=function(a){return{$$typeof:ah,value:a}};exports.createContainer=function(a,b,c,d,e,f,g){return Zh(a,b,!1,null,c,d,e,f,g)};exports.createHasPseudoClassSelector=function(a){return{$$typeof:bh,value:a}};
exports.createHydrationContainer=function(a,b,c,d,e,f,g,h,k){a=Zh(c,d,!0,a,e,f,g,h,k);a.context=$h(null);c=a.current;d=H();e=zd(c);f=qd(d,e);f.callback=void 0!==b&&null!==b?b:null;rd(c,f);a.current.lanes=e;Bc(a,e,d);Z(a,d);return a};exports.createPortal=function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}};exports.createRoleSelector=function(a){return{$$typeof:ch,value:a}};
exports.createTestNameSelector=function(a){return{$$typeof:dh,value:a}};exports.createTextSelector=function(a){return{$$typeof:eh,value:a}};exports.deferredUpdates=function(a){var b=D,c=U.transition;try{return U.transition=null,D=16,a()}finally{D=b,U.transition=c}};exports.discreteUpdates=function(a,b,c,d,e){var f=D,g=U.transition;try{return U.transition=null,D=1,a(b,c,d,e)}finally{D=f,U.transition=g,0===G&&sh()}};exports.findAllNodes=kh;
exports.findBoundingRects=function(a,b){if(!bb)throw Error(n(363));b=kh(a,b);a=[];for(var c=0;c<b.length;c++)a.push(db(b[c]));for(b=a.length-1;0<b;b--){c=a[b];for(var d=c.x,e=d+c.width,f=c.y,g=f+c.height,h=b-1;0<=h;h--)if(b!==h){var k=a[h],l=k.x,m=l+k.width,v=k.y,r=v+k.height;if(d>=l&&f>=v&&e<=m&&g<=r){a.splice(b,1);break}else if(!(d!==l||c.width!==k.width||r<f||v>g)){v>f&&(k.height+=v-f,k.y=f);r<g&&(k.height=g-v);a.splice(b,1);break}else if(!(f!==v||c.height!==k.height||m<d||l>e)){l>d&&(k.width+=
l-d,k.x=d);m<e&&(k.width=e-l);a.splice(b,1);break}}}return a};exports.findHostInstance=ai;exports.findHostInstanceWithNoPortals=function(a){a=Aa(a);a=null!==a?Da(a):null;return null===a?null:a.stateNode};exports.findHostInstanceWithWarning=function(a){return ai(a)};exports.flushControlled=function(a){var b=G;G|=1;var c=U.transition,d=D;try{U.transition=null,D=1,a()}finally{D=d,U.transition=c,G=b,0===G&&(sh(),Xc())}};exports.flushPassiveEffects=Fh;exports.flushSync=Oh;
exports.focusWithin=function(a,b){if(!bb)throw Error(n(363));a=gh(a);b=jh(a,b);b=Array.from(b);for(a=0;a<b.length;){var c=b[a++];if(!fb(c)){if(5===c.tag&&hb(c.stateNode))return!0;for(c=c.child;null!==c;)b.push(c),c=c.sibling}}return!1};exports.getCurrentUpdatePriority=function(){return D};
exports.getFindAllNodesFailureDescription=function(a,b){if(!bb)throw Error(n(363));var c=0,d=[];a=[gh(a),0];for(var e=0;e<a.length;){var f=a[e++],g=a[e++],h=b[g];if(5!==f.tag||!fb(f))if(hh(f,h)&&(d.push(ih(h)),g++,g>c&&(c=g)),g<b.length)for(f=f.child;null!==f;)a.push(f,g),f=f.sibling}if(c<b.length){for(a=[];c<b.length;c++)a.push(ih(b[c]));return"findAllNodes was able to match part of the selector:\n  "+(d.join(" > ")+"\n\nNo matching component was found for:\n  ")+a.join(" > ")}return null};
exports.getPublicRootInstance=function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return Fa(a.child.stateNode);default:return a.child.stateNode}};
exports.injectIntoDevTools=function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ea.ReactCurrentDispatcher,findHostInstanceByFiber:di,findFiberByHostInstance:a.findFiberByHostInstance||
ei,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Nc=b.inject(a),Oc=b}catch(c){}a=b.checkDCE?!0:!1}}return a};exports.isAlreadyRendering=function(){return!1};
exports.observeVisibleRects=function(a,b,c,d){if(!bb)throw Error(n(363));a=kh(a,b);var e=ib(a,c,d).disconnect;return{disconnect:function(){e()}}};exports.registerMutableSourceForHydration=function(a,b){var c=b._getVersion;c=c(b._source);null==a.mutableSourceEagerHydrationData?a.mutableSourceEagerHydrationData=[b,c]:a.mutableSourceEagerHydrationData.push(b,c)};exports.runWithPriority=function(a,b){var c=D;try{return D=a,b()}finally{D=c}};exports.shouldError=function(){return null};
exports.shouldSuspend=function(){return!1};exports.updateContainer=function(a,b,c,d){var e=b.current,f=H(),g=zd(e);c=$h(c);null===b.context?b.context=c:b.pendingContext=c;b=qd(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);rd(e,b);a=Ad(e,g,f);null!==a&&sd(a,e,g);return g};

    return exports;
};


/***/ }),

/***/ 772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(735);
} else {}


/***/ }),

/***/ 4845:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(2935);
} else {}


/***/ }),

/***/ 8271:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var navigator = __webpack_require__(7842)["navigator"];
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 8585:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(8271);
} else {}


/***/ }),

/***/ 5287:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 6540:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 8493:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var window = __webpack_require__(7842)["window"];
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(6540);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ }),

/***/ 2162:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(6540),
  shim = __webpack_require__(9888);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useSyncExternalStore = shim.useSyncExternalStore,
  useRef = React.useRef,
  useEffect = React.useEffect,
  useMemo = React.useMemo,
  useDebugValue = React.useDebugValue;
exports.useSyncExternalStoreWithSelector = function (
  subscribe,
  getSnapshot,
  getServerSnapshot,
  selector,
  isEqual
) {
  var instRef = useRef(null);
  if (null === instRef.current) {
    var inst = { hasValue: !1, value: null };
    instRef.current = inst;
  } else inst = instRef.current;
  instRef = useMemo(
    function () {
      function memoizedSelector(nextSnapshot) {
        if (!hasMemo) {
          hasMemo = !0;
          memoizedSnapshot = nextSnapshot;
          nextSnapshot = selector(nextSnapshot);
          if (void 0 !== isEqual && inst.hasValue) {
            var currentSelection = inst.value;
            if (isEqual(currentSelection, nextSnapshot))
              return (memoizedSelection = currentSelection);
          }
          return (memoizedSelection = nextSnapshot);
        }
        currentSelection = memoizedSelection;
        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
        var nextSelection = selector(nextSnapshot);
        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
          return (memoizedSnapshot = nextSnapshot), currentSelection;
        memoizedSnapshot = nextSnapshot;
        return (memoizedSelection = nextSelection);
      }
      var hasMemo = !1,
        memoizedSnapshot,
        memoizedSelection,
        maybeGetServerSnapshot =
          void 0 === getServerSnapshot ? null : getServerSnapshot;
      return [
        function () {
          return memoizedSelector(getSnapshot());
        },
        null === maybeGetServerSnapshot
          ? void 0
          : function () {
              return memoizedSelector(maybeGetServerSnapshot());
            }
      ];
    },
    [getSnapshot, getServerSnapshot, selector, isEqual]
  );
  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
  useEffect(
    function () {
      inst.hasValue = !0;
      inst.value = value;
    },
    [value]
  );
  useDebugValue(value);
  return value;
};


/***/ }),

/***/ 9888:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(8493);
} else {}


/***/ }),

/***/ 9242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(2162);
} else {}


/***/ }),

/***/ 3145:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ 6369:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ 4243:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3145);

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r);
}


/***/ }),

/***/ 9417:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ 467:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ 9874:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _callSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3954);
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2176);
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6822);



function _callSuper(t, o, e) {
  return o = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o), (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t, (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)() ? Reflect.construct(o, e || [], (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t).constructor) : o.apply(t, e));
}


/***/ }),

/***/ 3029:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ 6324:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3662);


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(p, r.prototype), p;
}


/***/ }),

/***/ 2901:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9922);

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ 4467:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9922);

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ 6045:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _get; }
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(966);

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}


/***/ }),

/***/ 3954:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ 5501:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3662);

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, e);
}


/***/ }),

/***/ 202:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _isNativeFunction; }
/* harmony export */ });
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}


/***/ }),

/***/ 2176:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ 3893:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ 6986:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ 6562:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ 519:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ 9379:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4467);

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ 6822:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2284);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t);
}


/***/ }),

/***/ 2007:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _regenerator; }
/* harmony export */ });
/* harmony import */ var _regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2384);

function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : ((0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u, "constructor", GeneratorFunctionPrototype), (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(GeneratorFunctionPrototype, o, "GeneratorFunction"), (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u), (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u, o, "Generator"), (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u, n, function () {
    return this;
  }), (0,_regeneratorDefine_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}


/***/ }),

/***/ 2384:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _regeneratorDefine; }
/* harmony export */ });
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}


/***/ }),

/***/ 5881:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _set; }
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(966);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4467);


function set(e, r, t, o) {
  return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) {
    var f,
      i = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r);
    if (i) {
      if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0;
      if (!f.writable) return !1;
    }
    if (f = Object.getOwnPropertyDescriptor(o, r)) {
      if (!f.writable) return !1;
      f.value = t, Object.defineProperty(o, r, f);
    } else (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(o, r, t);
    return !0;
  }, set(e, r, t, o);
}
function _set(e, r, t, o, f) {
  if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
  return t;
}


/***/ }),

/***/ 3662:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ 3453:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6369);
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6986);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7800);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6562);




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
}


/***/ }),

/***/ 966:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _superPropBase; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3954);

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t)););
  return t;
}


/***/ }),

/***/ 5499:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _superPropGet; }
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6045);
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3954);


function _superPropGet(t, o, e, r) {
  var p = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}


/***/ }),

/***/ 4559:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _superPropSet; }
/* harmony export */ });
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5881);
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3954);


function _superPropSet(t, e, o, r, p, f) {
  return (0,_set_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(f ? t.prototype : t), e, o, r, p);
}


/***/ }),

/***/ 7695:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _toArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6369);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3893);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7800);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6562);




function _toArray(r) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(r) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
}


/***/ }),

/***/ 9394:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4243);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3893);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7800);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(519);




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
}


/***/ }),

/***/ 2327:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2284);

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ 9922:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2284);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2327);


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i) ? i : i + "";
}


/***/ }),

/***/ 2284:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 7800:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3145);

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a) : void 0;
  }
}


/***/ }),

/***/ 5579:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _wrapNativeSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3954);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3662);
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6324);




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(Wrapper, t);
  }, _wrapNativeSuper(t);
}


/***/ }),

/***/ 4454:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ Emitter; }
/* harmony export */ });
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 6951:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ hasCORS; }
/* harmony export */ });
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
const hasCORS = value;


/***/ }),

/***/ 8026:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ decode; },
/* harmony export */   l: function() { return /* binding */ encode; }
/* harmony export */ });
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}


/***/ }),

/***/ 9450:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ parse; }
/* harmony export */ });
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    if (str.length > 8000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}


/***/ }),

/***/ 459:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dY: function() { return /* binding */ nextTick; },
/* harmony export */   lj: function() { return /* binding */ globalThisShim; },
/* harmony export */   m2: function() { return /* binding */ createCookieJar; },
/* harmony export */   rs: function() { return /* binding */ defaultBinaryType; }
/* harmony export */ });
/* provided dependency */ var window = __webpack_require__(7842)["window"];
const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
const globalThisShim = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() { }


/***/ }),

/***/ 563:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _7: function() { return /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__._7; },
/* harmony export */   dY: function() { return /* reexport safe */ _globals_node_js__WEBPACK_IMPORTED_MODULE_5__.dY; },
/* harmony export */   qg: function() { return /* reexport safe */ _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__.q; },
/* harmony export */   yQ: function() { return /* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_0__.yQ; }
/* harmony export */ });
/* unused harmony export protocol */
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6842);
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1950);
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1198);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4043);
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9450);
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(459);
/* harmony import */ var _transports_polling_fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5536);
/* harmony import */ var _transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9038);
/* harmony import */ var _transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9529);
/* harmony import */ var _transports_webtransport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8187);



const protocol = _socket_js__WEBPACK_IMPORTED_MODULE_0__/* .Socket */ .yQ.protocol;













/***/ }),

/***/ 6842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   yQ: function() { return /* binding */ Socket; }
/* harmony export */ });
/* unused harmony exports SocketWithoutUpgrade, SocketWithUpgrade */
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1198);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4043);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8026);
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9450);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4454);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7723);
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(459);
/* provided dependency */ var location = __webpack_require__(7842)["location"];







const withEventListeners = typeof addEventListener === "function" &&
    typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", () => {
        OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
    }, false);
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */
class SocketWithoutUpgrade extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .v {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts) {
        super();
        this.binaryType = _globals_node_js__WEBPACK_IMPORTED_MODULE_4__/* .defaultBinaryType */ .rs;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */
        this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_5__/* .parse */ .q)(uri);
            opts.hostname = parsedUri.host;
            opts.secure =
                parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query)
                opts.query = parsedUri.query;
        }
        else if (opts.host) {
            opts.hostname = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_5__/* .parse */ .q)(opts.host).host;
        }
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .installTimerFunctions */ ._7)(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t) => {
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: false,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_6__/* .decode */ .D)(this.opts.query);
        }
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = () => {
                    this._onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) {
            this._cookieJar = (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_4__/* .createCookieJar */ .m2)();
        }
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = engine_io_parser__WEBPACK_IMPORTED_MODULE_3__/* .protocol */ .TB;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade &&
            SocketWithoutUpgrade.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
            ? "websocket"
            : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this._onDrain.bind(this))
            .on("packet", this._onPacket.bind(this))
            .on("error", this._onError.bind(this))
            .on("close", (reason) => this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess =
            "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    _onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .byteLength */ .dp)(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_4__/* .nextTick */ .dY)(() => {
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports &&
            this.transports.length > 1 &&
            this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    _onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                    removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) {
                        OFFLINE_EVENT_LISTENERS.splice(i, 1);
                    }
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = engine_io_parser__WEBPACK_IMPORTED_MODULE_3__/* .protocol */ .TB;
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor() {
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
            for (let i = 0; i < this._upgrades.length; i++) {
                this._probe(this._upgrades[i]);
            }
        }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    SocketWithoutUpgrade.priorWebsocketSuccess =
                        "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 &&
            name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(() => {
                if (!failed) {
                    transport.open();
                }
            }, 200);
        }
        else {
            transport.open();
        }
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for (let i = 0; i < upgrades.length; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */
class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}) {
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports ||
            (o.transports && typeof o.transports[0] === "string")) {
            o.transports = (o.transports || ["polling", "websocket", "webtransport"])
                .map((transportName) => _transports_index_js__WEBPACK_IMPORTED_MODULE_0__/* .transports */ .T[transportName])
                .filter((t) => !!t);
        }
        super(uri, o);
    }
}


/***/ }),

/***/ 1950:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ Transport; }
/* harmony export */ });
/* unused harmony export TransportError */
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7723);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4454);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4043);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8026);




class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .v {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .installTimerFunctions */ ._7)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_0__/* .decodePacket */ .JD)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
    createUri(schema, query = {}) {
        return (schema +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(query));
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port &&
            ((this.opts.secure && Number(this.opts.port) !== 443) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))) {
            return ":" + this.opts.port;
        }
        else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__/* .encode */ .l)(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}


/***/ }),

/***/ 1198:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ transports; }
/* harmony export */ });
/* harmony import */ var _polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9038);
/* harmony import */ var _websocket_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9529);
/* harmony import */ var _webtransport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8187);



const transports = {
    websocket: _websocket_node_js__WEBPACK_IMPORTED_MODULE_1__.WS,
    webtransport: _webtransport_js__WEBPACK_IMPORTED_MODULE_2__.WT,
    polling: _polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_0__/* .XHR */ .xq,
};


/***/ }),

/***/ 5536:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Fetch */
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);

/**
 * HTTP long-polling based on the built-in `fetch()` method.
 *
 * Usage: browser, Node.js (since v18), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://caniuse.com/fetch
 * @see https://nodejs.org/api/globals.html#fetch
 */
class Fetch extends (/* unused pure expression or super */ null && (Polling)) {
    doPoll() {
        this._fetch()
            .then((res) => {
            if (!res.ok) {
                return this.onError("fetch read error", res.status, res);
            }
            res.text().then((data) => this.onData(data));
        })
            .catch((err) => {
            this.onError("fetch read error", err);
        });
    }
    doWrite(data, callback) {
        this._fetch(data)
            .then((res) => {
            if (!res.ok) {
                return this.onError("fetch write error", res.status, res);
            }
            callback();
        })
            .catch((err) => {
            this.onError("fetch write error", err);
        });
    }
    _fetch(data) {
        var _a;
        const isPost = data !== undefined;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) {
            headers.set("content-type", "text/plain;charset=UTF-8");
        }
        (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
        return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit",
        }).then((res) => {
            var _a;
            // @ts-ignore getSetCookie() was added in Node.js v19.7.0
            (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
            return res;
        });
    }
}


/***/ }),

/***/ 9038:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xq: function() { return /* binding */ XHR; }
/* harmony export */ });
/* unused harmony exports BaseXHR, Request */
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4454);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4043);
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(459);
/* harmony import */ var _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6951);
/* provided dependency */ var location = __webpack_require__(7842)["location"];
/* provided dependency */ var document = __webpack_require__(7842)["document"];





function empty() { }
class BaseXHR extends _polling_js__WEBPACK_IMPORTED_MODULE_0__/* .Polling */ .A {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data,
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .v {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(createRequest, uri, opts) {
        super();
        this.createRequest = createRequest;
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .installTimerFunctions */ ._7)(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _create() {
        var _a;
        const opts = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .pick */ .Up)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = (this._xhr = this.createRequest(opts));
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this._opts.extraHeaders) {
                        if (this._opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this._method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
                xhr.timeout = this._opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
                    // @ts-ignore
                    xhr.getResponseHeader("set-cookie"));
                }
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this._onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this._data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
            return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this._xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this._index];
        }
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in _globals_node_js__WEBPACK_IMPORTED_MODULE_3__/* .globalThisShim */ .lj ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}
const hasXHR2 = (function () {
    const xhr = newRequest({
        xdomain: false,
    });
    return xhr && xhr.responseType !== null;
})();
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
class XHR extends BaseXHR {
    constructor(opts) {
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_4__/* .hasCORS */ ._)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new _globals_node_js__WEBPACK_IMPORTED_MODULE_3__/* .globalThisShim */ .lj[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}


/***/ }),

/***/ 661:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ Polling; }
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1950);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4043);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7723);



class Polling extends _transport_js__WEBPACK_IMPORTED_MODULE_0__/* .Transport */ .o {
    constructor() {
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__/* .decodePayload */ .D)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this._poll();
            }
            else {
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__/* .encodePayload */ .vy)(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .randomString */ .DU)();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}


/***/ }),

/***/ 9529:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WS: function() { return /* binding */ WS; }
/* harmony export */ });
/* unused harmony export BaseWS */
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1950);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4043);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7723);
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(459);
/* provided dependency */ var navigator = __webpack_require__(7842)["navigator"];




// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class BaseWS extends _transport_js__WEBPACK_IMPORTED_MODULE_0__/* .Transport */ .o {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .pick */ .Up)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent,
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__/* .encodePacket */ .Py)(packet, this.supportsBinary, (data) => {
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                }
                catch (e) {
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_3__/* .nextTick */ .dY)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = () => { };
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .randomString */ .DU)();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = _globals_node_js__WEBPACK_IMPORTED_MODULE_3__/* .globalThisShim */ .lj.WebSocket || _globals_node_js__WEBPACK_IMPORTED_MODULE_3__/* .globalThisShim */ .lj.MozWebSocket;
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative
            ? protocols
                ? new WebSocketCtor(uri, protocols)
                : new WebSocketCtor(uri)
            : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}


/***/ }),

/***/ 8187:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WT: function() { return /* binding */ WT; }
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1950);
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(459);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7723);



/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */
class WT extends _transport_js__WEBPACK_IMPORTED_MODULE_0__/* .Transport */ .o {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed
            .then(() => {
            this.onClose();
        })
            .catch((err) => {
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((stream) => {
                const decoderStream = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__/* .createPacketDecoderStream */ .NJ)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__/* .createPacketEncoderStream */ .d1)();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = () => {
                    reader
                        .read()
                        .then(({ done, value }) => {
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    })
                        .catch((err) => {
                    });
                };
                read();
                const packet = { type: "open" };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this._writer.write(packet).then(() => this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(() => {
                if (lastPacket) {
                    (0,_globals_node_js__WEBPACK_IMPORTED_MODULE_1__/* .nextTick */ .dY)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}


/***/ }),

/***/ 4043:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DU: function() { return /* binding */ randomString; },
/* harmony export */   Up: function() { return /* binding */ pick; },
/* harmony export */   _7: function() { return /* binding */ installTimerFunctions; },
/* harmony export */   dp: function() { return /* binding */ byteLength; }
/* harmony export */ });
/* harmony import */ var _globals_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(459);

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj.setTimeout;
const NATIVE_CLEAR_TIMEOUT = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj.clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj);
    }
    else {
        obj.setTimeoutFn = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj.setTimeout.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj);
        obj.clearTimeoutFn = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj.clearTimeout.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__/* .globalThisShim */ .lj);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
/**
 * Generates a random 8-characters string.
 */
function randomString() {
    return (Date.now().toString(36).substring(3) +
        Math.random().toString(36).substring(2, 5));
}


/***/ }),

/***/ 1905:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ PACKET_TYPES; },
/* harmony export */   gq: function() { return /* binding */ ERROR_PACKET; },
/* harmony export */   u3: function() { return /* binding */ PACKET_TYPES_REVERSE; }
/* harmony export */ });
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };



/***/ }),

/***/ 188:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ decode; }
/* harmony export */ });
/* unused harmony export encode */
// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
const encode = (arraybuffer) => {
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
const decode = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};


/***/ }),

/***/ 1611:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: function() { return /* binding */ decodePacket; }
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1905);
/* harmony import */ var _contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);


const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType),
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
        };
    }
    const packetType = _commons_js__WEBPACK_IMPORTED_MODULE_0__/* .PACKET_TYPES_REVERSE */ .u3[type];
    if (!packetType) {
        return _commons_js__WEBPACK_IMPORTED_MODULE_0__/* .ERROR_PACKET */ .gq;
    }
    return encodedPacket.length > 1
        ? {
            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__/* .PACKET_TYPES_REVERSE */ .u3[type],
            data: encodedPacket.substring(1),
        }
        : {
            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__/* .PACKET_TYPES_REVERSE */ .u3[type],
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer) {
        const decoded = (0,_contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__/* .decode */ .D)(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            }
            else {
                // from HTTP long-polling or WebTransport
                return new Blob([data]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};


/***/ }),

/***/ 1459:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ encodePacket; },
/* harmony export */   x: function() { return /* binding */ encodePacketToBinary; }
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1905);

const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer &&
        (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__/* .PACKET_TYPES */ .X[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    }
    else if (withNativeArrayBuffer &&
        (packet.data instanceof ArrayBuffer || isView(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}



/***/ }),

/***/ 7723:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ decodePayload; },
/* harmony export */   JD: function() { return /* reexport safe */ _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.J; },
/* harmony export */   NJ: function() { return /* binding */ createPacketDecoderStream; },
/* harmony export */   Py: function() { return /* reexport safe */ _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.P; },
/* harmony export */   TB: function() { return /* binding */ protocol; },
/* harmony export */   d1: function() { return /* binding */ createPacketEncoderStream; },
/* harmony export */   vy: function() { return /* binding */ encodePayload; }
/* harmony export */ });
/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1459);
/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1611);
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1905);



const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__/* .encodePacket */ .P)(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__/* .decodePacket */ .J)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform(packet, controller) {
            (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__/* .encodePacketToBinary */ .x)(packet, (encodedPacket) => {
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                }
                else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                }
                else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        },
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */;
                    }
                    else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                    }
                    else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                    }
                }
                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__/* .ERROR_PACKET */ .gq);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__/* .decodePacket */ .J)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__/* .ERROR_PACKET */ .gq);
                    break;
                }
            }
        },
    });
}
const protocol = 4;



/***/ }),

/***/ 5142:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ Backoff; }
/* harmony export */ });
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};


/***/ }),

/***/ 1128:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   io: function() { return /* binding */ lookup; }
/* harmony export */ });
/* unused harmony exports connect, default */
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8569);
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3331);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8643);
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7328);
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(563);



/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0,_url_js__WEBPACK_IMPORTED_MODULE_0__/* .url */ .O)(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new _manager_js__WEBPACK_IMPORTED_MODULE_1__/* .Manager */ .m(source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new _manager_js__WEBPACK_IMPORTED_MODULE_1__/* .Manager */ .m(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: _manager_js__WEBPACK_IMPORTED_MODULE_1__/* .Manager */ .m,
    Socket: _socket_js__WEBPACK_IMPORTED_MODULE_2__/* .Socket */ .y,
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */

/**
 * Expose constructors for standalone build.
 *
 * @public
 */




/***/ }),

/***/ 3331:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ Manager; }
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8643);
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7328);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3655);
/* harmony import */ var _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5142);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4454);






class Manager extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__/* .Emitter */ .v {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__/* .installTimerFunctions */ ._7)(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_3__/* .Backoff */ .n({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || socket_io_parser__WEBPACK_IMPORTED_MODULE_2__;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
            this.skipReconnect = true;
        }
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new engine_io_client__WEBPACK_IMPORTED_MODULE_0__/* .Socket */ .yQ(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        const onError = (err) => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = (0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(socket, "ping", this.onping.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(socket, "data", this.ondata.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(socket, "error", this.onerror.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(socket, "close", this.onclose.bind(this)), 
        // @ts-ignore
        (0,_on_js__WEBPACK_IMPORTED_MODULE_5__.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .dY)(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new _socket_js__WEBPACK_IMPORTED_MODULE_1__/* .Socket */ .y(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}


/***/ }),

/***/ 3655:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   on: function() { return /* binding */ on; }
/* harmony export */ });
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}


/***/ }),

/***/ 8643:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ Socket; }
/* harmony export */ });
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7328);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3655);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4454);



/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .v {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            (0,_on_js__WEBPACK_IMPORTED_MODULE_2__.on)(io, "open", this.onopen.bind(this)),
            (0,_on_js__WEBPACK_IMPORTED_MODULE_2__.on)(io, "packet", this.onpacket.bind(this)),
            (0,_on_js__WEBPACK_IMPORTED_MODULE_2__.on)(io, "error", this.onerror.bind(this)),
            (0,_on_js__WEBPACK_IMPORTED_MODULE_2__.on)(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) {
        }
        else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT:
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK:
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this._drainQueue(true);
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}


/***/ }),

/***/ 8569:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ url; }
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* provided dependency */ var location = __webpack_require__(7842)["location"];

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__/* .parse */ .qg)(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}


/***/ }),

/***/ 7739:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ deconstructPacket; },
/* harmony export */   X: function() { return /* binding */ reconstructPacket; }
/* harmony export */ });
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8278);

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_0__/* .isBinary */ .G)(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),

/***/ 7328:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Decoder: function() { return /* binding */ Decoder; },
/* harmony export */   Encoder: function() { return /* binding */ Encoder; },
/* harmony export */   PacketType: function() { return /* binding */ PacketType; },
/* harmony export */   isPacketValid: function() { return /* binding */ isPacketValid; },
/* harmony export */   protocol: function() { return /* binding */ protocol; }
/* harmony export */ });
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4454);
/* harmony import */ var _binary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7739);
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8278);



/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS = [
    "connect", // used on the client side
    "connect_error", // used on the client side
    "disconnect", // used on both sides
    "disconnecting", // used on the server side
    "newListener", // used by the Node.js EventEmitter
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__/* .hasBinary */ .o)(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__/* .deconstructPacket */ .D)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .v {
    /**
     * Decoder constructor
     */
    constructor(opts) {
        super();
        this.opts = Object.assign({
            reviver: undefined,
            maxAttachments: 10,
        }, typeof opts === "function" ? { reviver: opts } : opts);
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__/* .isBinary */ .G)(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            const n = Number(buf);
            if (!isInteger(n) || n < 0) {
                throw new Error("Illegal attachments");
            }
            else if (n > this.opts.maxAttachments) {
                throw new Error("too many attachments");
            }
            p.attachments = n;
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.opts.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__/* .reconstructPacket */ .X)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}
function isNamespaceValid(nsp) {
    return typeof nsp === "string";
}
// see https://caniuse.com/mdn-javascript_builtins_number_isinteger
const isInteger = Number.isInteger ||
    function (value) {
        return (typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value);
    };
function isAckIdValid(id) {
    return id === undefined || isInteger(id);
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
function isDataValid(type, payload) {
    switch (type) {
        case PacketType.CONNECT:
            return payload === undefined || isObject(payload);
        case PacketType.DISCONNECT:
            return payload === undefined;
        case PacketType.EVENT:
            return (Array.isArray(payload) &&
                (typeof payload[0] === "number" ||
                    (typeof payload[0] === "string" &&
                        RESERVED_EVENTS.indexOf(payload[0]) === -1)));
        case PacketType.ACK:
            return Array.isArray(payload);
        case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject(payload);
        default:
            return false;
    }
}
function isPacketValid(packet) {
    return (isNamespaceValid(packet.nsp) &&
        isAckIdValid(packet.id) &&
        isDataValid(packet.type, packet.data));
}


/***/ }),

/***/ 8278:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ isBinary; },
/* harmony export */   o: function() { return /* binding */ hasBinary; }
/* harmony export */ });
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ 1635:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GG: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   gn: function() { return /* binding */ __classPrivateFieldGet; }
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 7282:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vt: function() { return /* binding */ create; }
/* harmony export */ });
/* unused harmony exports default, useStore */
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9242);





const { useDebugValue } = react__WEBPACK_IMPORTED_MODULE_0__;
const { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_1__;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore(api, selector = identity, equalityFn) {
  if (( false ? 0 : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if (( false ? 0 : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_2__/* .createStore */ .y)(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var react = (createState) => {
  if (( false ? 0 : void 0) !== "production") {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    );
  }
  return create(createState);
};




/***/ }),

/***/ 7283:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ createStore; }
/* harmony export */ });
/* unused harmony export default */
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (( false ? 0 : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState) => {
  if (( false ? 0 : void 0) !== "production") {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
    );
  }
  return createStore(createState);
};




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(9762));
/******/ }
]);;