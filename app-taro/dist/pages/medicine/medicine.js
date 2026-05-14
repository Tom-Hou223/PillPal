(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[759],{

/***/ 4371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ CustomTabBar; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9206);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);





var normalList = [{
  pagePath: '/pages/index/index',
  text: '首页',
  icon: '/assets/images/tab/tab_home_normal.png',
  activeIcon: '/assets/images/tab/tab_home_active.png'
}, {
  pagePath: '/pages/plan/plan',
  text: '计划',
  icon: '/assets/images/tab/tab_plan_normal.png',
  activeIcon: '/assets/images/tab/tab_plan_active.png'
}, {
  pagePath: '/pages/medicine/medicine',
  text: '药品库',
  icon: '/assets/images/tab/tab_med_normal.png',
  activeIcon: '/assets/images/tab/tab_med_active.png'
}, {
  pagePath: '/pages/mine/mine',
  text: '我的',
  icon: '/assets/images/tab/tab_mine_normal.png',
  activeIcon: '/assets/images/tab/tab_mine_active.png'
}];
var seniorList = [{
  pagePath: '/pages/index/index',
  text: '首页',
  icon: '/assets/images/tab/tab_home_normal.png',
  activeIcon: '/assets/images/tab/tab_home_active.png'
}, {
  pagePath: '/pages/mine/mine',
  text: '我的',
  icon: '/assets/images/tab/tab_mine_normal.png',
  activeIcon: '/assets/images/tab/tab_mine_active.png'
}];
function CustomTabBar() {
  var _Taro$getCurrentInsta;
  var _useUserStore = (0,_stores_user_store__WEBPACK_IMPORTED_MODULE_1__/* .useUserStore */ .k)(),
    isSeniorMode = _useUserStore.isSeniorMode,
    seniorTheme = _useUserStore.seniorTheme;
  var list = isSeniorMode ? seniorList : normalList;
  var currentPage = ((_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.path) || '';
  var getSelected = function getSelected() {
    if (isSeniorMode) {
      return currentPage.includes('pages/mine/mine') ? 1 : 0;
    }
    if (currentPage.includes('pages/index/index')) return 0;
    if (currentPage.includes('pages/plan/plan')) return 1;
    if (currentPage.includes('pages/medicine/medicine')) return 2;
    if (currentPage.includes('pages/mine/mine')) return 3;
    return 0;
  };
  var selected = getSelected();
  var switchTab = function switchTab(path) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
      url: path
    });
  };
  var cls = isSeniorMode ? "tab-bar senior-mode ".concat(seniorTheme === 'yellow' ? 'theme-yellow' : '') : 'tab-bar';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
    className: cls,
    children: list.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
        className: "tab-bar-item ".concat(selected === index ? 'active' : ''),
        onClick: function onClick() {
          return switchTab(item.pagePath);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
          className: "tab-icon",
          src: selected === index ? item.activeIcon : item.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
          className: "tab-text",
          children: item.text
        })]
      }, item.text);
    })
  });
}

/***/ }),

/***/ 2789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ MedicinePage; }
/* harmony export */ });
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9394);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2007);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9379);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(467);
/* harmony import */ var F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(118);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9206);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4746);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8887);
/* harmony import */ var _utils_traceImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6669);
/* harmony import */ var _custom_tab_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2321);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
















var CATEGORIES = [{
  label: '抗生素',
  value: '抗生素'
}, {
  label: '解热镇痛',
  value: '解热镇痛'
}, {
  label: '感冒用药',
  value: '感冒用药'
}, {
  label: '维生素',
  value: '维生素'
}, {
  label: '止咳化痰',
  value: '止咳化痰'
}];
function MedicinePage() {
  var isGuestMode = (0,_stores_user_store__WEBPACK_IMPORTED_MODULE_2__/* .useUserStore */ .k)(function (s) {
    return s.isGuestMode;
  });
  var isAdmin = _services_api__WEBPACK_IMPORTED_MODULE_3__/* .FamilyManager */ .kT.isAdmin();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState, 2),
    statusBarHeight = _useState2[0],
    setStatusBarHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState5, 2),
    medicines = _useState6[0],
    setMedicines = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState7, 2),
    searchKeyword = _useState8[0],
    setSearchKeyword = _useState8[1];

  // Dialog state
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState9, 2),
    showAddDialog = _useState0[0],
    setShowAddDialog = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState1, 2),
    editingMedicine = _useState10[0],
    setEditingMedicine = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState11, 2),
    showDatePicker = _useState12[0],
    setShowDatePicker = _useState12[1];

  // Calendar for expiry date
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().getFullYear()),
    _useState14 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState13, 2),
    calYear = _useState14[0],
    setCalYear = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().getMonth() + 1),
    _useState16 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState15, 2),
    calMonth = _useState16[0],
    setCalMonth = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState17, 2),
    calSelected = _useState18[0],
    setCalSelected = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: '',
      manufacturer: '',
      specification: '',
      barcode: '',
      category: '抗生素',
      stock: 1,
      unit: '盒',
      expiryDate: '',
      dosage: ''
    }),
    _useState20 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState19, 2),
    formData = _useState20[0],
    setFormData = _useState20[1];

  // Photo buffer
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState21, 2),
    photoBuffer = _useState22[0],
    setPhotoBuffer = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState23, 2),
    showPhotoBufferModal = _useState24[0],
    setShowPhotoBufferModal = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState25, 2),
    isRecognizing = _useState26[0],
    setIsRecognizing = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState27, 2),
    lastPhotoTime = _useState28[0],
    setLastPhotoTime = _useState28[1];

  // ========== Data loading ==========
  var loadMedicines = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().m(function _callee() {
    var res, list, keyword, currentDate, _t;
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (!loading) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          setLoading(true);
          _context.p = 2;
          _context.n = 3;
          return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.getList();
        case 3:
          res = _context.v;
          list = res.data || [];
          keyword = searchKeyword.trim().toLowerCase();
          if (keyword) {
            list = list.filter(function (med) {
              return (med.name || '').toLowerCase().includes(keyword) || (med.manufacturer || '').toLowerCase().includes(keyword) || (med.category || '').toLowerCase().includes(keyword);
            });
          }
          currentDate = new Date();
          list = list.map(function (med) {
            var statusColor = 'success';
            var statusText = '正常';
            try {
              if (med.expiryDate) {
                var expiryDate = new Date(med.expiryDate);
                var timeDiff = expiryDate.getTime() - currentDate.getTime();
                var daysToExpiry = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                if (daysToExpiry <= 0) {
                  statusColor = 'danger';
                  statusText = '过期';
                } else if (daysToExpiry <= 7) {
                  statusColor = 'warning';
                  statusText = '临期';
                } else if (daysToExpiry <= 90) {
                  statusColor = 'default';
                  statusText = '临期';
                }
              }
            } catch (_unused) {
              statusColor = 'success';
              statusText = '正常';
            }
            return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, med), {}, {
              statusColor: statusColor,
              statusText: statusText
            });
          });
          setMedicines(list);
          setLoading(false);
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          setLoading(false);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '加载失败',
            icon: 'none'
          });
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[2, 4]]);
  })), [searchKeyword, loading]);

  // ========== Handlers ==========
  var handleSearchInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    setSearchKeyword(value);
  }, []);
  var handleSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    loadMedicines();
  }, [loadMedicines]);
  var handleAddMedicine = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (isGuestMode) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: '登录提示',
        content: '需要登录才能添加药品',
        confirmText: '去登录',
        success: function success(res) {
          if (res.confirm) _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: '/pages/login/login'
          });
        }
      });
      return;
    }
    if (!isAdmin) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '仅管理员可操作',
        icon: 'none'
      });
      return;
    }
    setEditingMedicine(null);
    setFormData({
      name: '',
      manufacturer: '',
      specification: '',
      barcode: '',
      category: '抗生素',
      stock: 1,
      unit: '盒',
      expiryDate: '',
      dosage: ''
    });
    setShowAddDialog(true);
  }, [isGuestMode, isAdmin]);
  var handleEditMedicine = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (medicine) {
    if (isGuestMode) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: '登录提示',
        content: '需要登录才能编辑药品',
        confirmText: '去登录',
        success: function success(res) {
          if (res.confirm) _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: '/pages/login/login'
          });
        }
      });
      return;
    }
    if (!isAdmin) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '仅管理员可操作',
        icon: 'none'
      });
      return;
    }
    setEditingMedicine(medicine);
    setFormData({
      name: medicine.name || '',
      manufacturer: medicine.manufacturer || '',
      specification: medicine.specification || '',
      barcode: medicine.barcode || '',
      category: medicine.category || '抗生素',
      stock: medicine.stock || 1,
      unit: medicine.unit || '盒',
      expiryDate: medicine.expiryDate || '',
      dosage: medicine.dosage || ''
    });
    setShowAddDialog(true);
  }, [isGuestMode, isAdmin]);
  var handleDeleteMedicine = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (medicine) {
    if (isGuestMode) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: '登录提示',
        content: '需要登录才能删除药品',
        confirmText: '去登录',
        success: function success(res) {
          if (res.confirm) _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: '/pages/login/login'
          });
        }
      });
      return;
    }
    if (!isAdmin) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '仅管理员可操作',
        icon: 'none'
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '确认删除',
      content: "\u786E\u5B9A\u8981\u5220\u9664\"".concat(medicine.name, "\"\u5417\uFF1F"),
      confirmText: '删除',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: function () {
        var _success = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().m(function _callee2(res) {
          var _t2;
          return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                if (!res.confirm) {
                  _context2.n = 4;
                  break;
                }
                _context2.p = 1;
                _context2.n = 2;
                return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.delete(medicine.id);
              case 2:
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '删除成功',
                  icon: 'success'
                });
                loadMedicines();
                _context2.n = 4;
                break;
              case 3:
                _context2.p = 3;
                _t2 = _context2.v;
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '删除失败',
                  icon: 'none'
                });
              case 4:
                return _context2.a(2);
            }
          }, _callee2, null, [[1, 3]]);
        }));
        function success(_x) {
          return _success.apply(this, arguments);
        }
        return success;
      }()
    });
  }, [isGuestMode, isAdmin, loadMedicines]);
  var handleCloseDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setShowAddDialog(false);
    setEditingMedicine(null);
    setShowDatePicker(false);
  }, []);
  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().m(function _callee3() {
    var name, expiryDate, stockNum, medicineData, _t3;
    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          name = formData.name, expiryDate = formData.expiryDate;
          if (!(!name || !name.trim())) {
            _context3.n = 1;
            break;
          }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '请输入药品名称',
            icon: 'none'
          });
          return _context3.a(2);
        case 1:
          if (expiryDate) {
            _context3.n = 2;
            break;
          }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '请选择过期日期',
            icon: 'none'
          });
          return _context3.a(2);
        case 2:
          stockNum = parseInt(String(formData.stock));
          if (!(isNaN(stockNum) || stockNum < 0)) {
            _context3.n = 3;
            break;
          }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '请输入有效的库存数量',
            icon: 'none'
          });
          return _context3.a(2);
        case 3:
          if (!(!formData.unit || !formData.unit.trim())) {
            _context3.n = 4;
            break;
          }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '请输入药品单位',
            icon: 'none'
          });
          return _context3.a(2);
        case 4:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
            title: '保存中...',
            mask: true
          });
          medicineData = {
            name: (name || '').trim(),
            manufacturer: (formData.manufacturer || '').trim(),
            specification: (formData.specification || '').trim(),
            category: formData.category || '其他',
            stock: stockNum,
            unit: formData.unit.trim(),
            expiryDate: formData.expiryDate,
            dosage: (formData.dosage || '').trim()
          };
          _context3.p = 5;
          if (!editingMedicine) {
            _context3.n = 7;
            break;
          }
          _context3.n = 6;
          return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.update(editingMedicine.id, medicineData);
        case 6:
          _context3.n = 8;
          break;
        case 7:
          _context3.n = 8;
          return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.add(medicineData);
        case 8:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '保存成功',
            icon: 'success'
          });
          handleCloseDialog();
          loadMedicines();
          _context3.n = 10;
          break;
        case 9:
          _context3.p = 9;
          _t3 = _context3.v;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
        case 10:
          return _context3.a(2);
      }
    }, _callee3, null, [[5, 9]]);
  })), [formData, editingMedicine, handleCloseDialog, loadMedicines]);

  // Category picker
  var handleCategorySelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
      itemList: CATEGORIES.map(function (c) {
        return c.label;
      }),
      success: function success(res) {
        setFormData(function (prev) {
          return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
            category: CATEGORIES[res.tapIndex].value
          });
        });
      }
    });
  }, []);

  // Expiry date selection
  var handleExpiryDateSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var now = new Date();
    setCalYear(now.getFullYear());
    setCalMonth(now.getMonth() + 1);
    setCalSelected(formData.expiryDate || '');
    setShowDatePicker(true);
  }, [formData.expiryDate]);
  var handleCalendarDaySelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (day) {
    var dateStr = "".concat(calYear, "-").concat(String(calMonth).padStart(2, '0'), "-").concat(String(day).padStart(2, '0'));
    setCalSelected(dateStr);
  }, [calYear, calMonth]);
  var handleCalendarConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (calSelected) {
      setFormData(function (prev) {
        return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
          expiryDate: calSelected
        });
      });
    }
    setShowDatePicker(false);
  }, [calSelected]);

  // Scan / photo — regular functions to avoid stale closure issues
  var handleScanCode = function handleScanCode() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
      itemList: ['药品溯源', '拍照识别', '从相册选择'],
      success: function success(res) {
        if (res.tapIndex === 0) {
          handleTraceSource();
        } else if (res.tapIndex === 1) {
          takePhoto();
        } else if (res.tapIndex === 2) {
          chooseImage();
        }
      }
    });
  };
  var handleTraceSource = function handleTraceSource() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
      itemList: ['拍照溯源', '打开相册'],
      success: function success(res) {
        var sourceType = res.tapIndex === 0 ? 'camera' : 'album';
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: [sourceType],
          success: function success(chooseRes) {
            recognizeTraceCode(chooseRes.tempFilePaths[0]);
          },
          fail: function fail() {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '选择图片失败',
              icon: 'none'
            });
          }
        });
      }
    });
  };

  // 辅助函数：从 API 响应中提取真实数据（处理嵌套结构）
  var getActualTraceData = function getActualTraceData(res) {
    if (res.code === 0 && res.data) {
      if (res.data.success && res.data.data) {
        return res.data.data;
      }
      return res.data;
    }
    return null;
  };
  var recognizeTraceCode = /*#__PURE__*/function () {
    var _ref3 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().m(function _callee4(imagePath) {
      var res, actualData, _t4;
      return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: '识别中...'
            });
            _context4.p = 1;
            _context4.n = 2;
            return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.recognizeImage(imagePath);
          case 2:
            res = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            actualData = getActualTraceData(res);
            if (actualData && actualData.traceCode) {
              // 保存图片到全局数据
              (0,_utils_traceImage__WEBPACK_IMPORTED_MODULE_10__/* .setTraceCodeImage */ .U)(imagePath);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                url: "/pages/trace-confirm/trace-confirm?traceCode=".concat(encodeURIComponent(actualData.traceCode))
              });
            } else {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
                title: '提示',
                content: '未识别到有效溯源码，请重新拍摄',
                confirmText: '重新拍摄',
                cancelText: '取消',
                success: function success(modalRes) {
                  if (modalRes.confirm) handleTraceSource();
                }
              });
            }
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '提示',
              content: '识别失败，请重新拍摄',
              confirmText: '重新拍摄',
              cancelText: '取消',
              success: function success(modalRes) {
                if (modalRes.confirm) handleTraceSource();
              }
            });
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function recognizeTraceCode(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var takePhoto = function takePhoto() {
    if (isRecognizing) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '正在识别中...',
        icon: 'none'
      });
      return;
    }
    var now = Date.now();
    var fiveMinutes = 5 * 60 * 1000;
    if (photoBuffer.length > 0) {
      if (lastPhotoTime > 0 && now - lastPhotoTime > fiveMinutes) {
        setPhotoBuffer([]);
        setLastPhotoTime(0);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '已超时，重新拍照',
          icon: 'none'
        });
      } else {
        setShowPhotoBufferModal(true);
        return;
      }
    }
    var remainingCount = 9 - photoBuffer.length;
    if (remainingCount <= 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '最多9张照片',
        icon: 'none'
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: remainingCount,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: function success(res) {
        setPhotoBuffer([].concat((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(photoBuffer), (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(res.tempFilePaths)));
        setShowPhotoBufferModal(true);
        setLastPhotoTime(Date.now());
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '拍照失败',
          icon: 'none'
        });
      }
    });
  };
  var chooseImage = function chooseImage() {
    if (isRecognizing) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '正在识别中...',
        icon: 'none'
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: function success(res) {
        recognizeMultiImage(res.tempFilePaths);
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '选择图片失败',
          icon: 'none'
        });
      }
    });
  };
  var recognizeMultiImage = /*#__PURE__*/function () {
    var _ref4 = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(/*#__PURE__*/(0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().m(function _callee5(imagePaths) {
      var getActualData, res, actualData, fixedRes, mergedResult, i, _res, _actualData, _t5, _t6;
      return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            console.log('[识别] 开始识别，图片路径:', imagePaths);
            if (!(!imagePaths || imagePaths.length === 0)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            setIsRecognizing(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: '识别中...'
            });

            // 提取真实数据的辅助函数
            getActualData = function getActualData(res) {
              // 处理响应格式: { code: 0, data: { success: true, data: {...} } }
              if (res.code === 0 && res.data) {
                if (res.data.success && res.data.data) {
                  return res.data.data;
                }
                return res.data;
              }
              return null;
            };
            if (!(imagePaths.length === 1)) {
              _context5.n = 6;
              break;
            }
            _context5.p = 2;
            console.log('[识别] 调用 API');
            _context5.n = 3;
            return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.recognizeImage(imagePaths[0]);
          case 3:
            res = _context5.v;
            console.log('[识别] API 响应:', res);

            // 修复数据结构
            actualData = getActualData(res);
            fixedRes = {
              code: 0,
              data: actualData
            };
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            setIsRecognizing(false);
            console.log('[识别] 修复后的响应:', fixedRes);
            showRecognitionResult(fixedRes);
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            console.error('[识别] 错误:', _t5);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            setIsRecognizing(false);
            showRecognitionResult({
              code: 0,
              data: {
                name: '',
                manufacturer: '',
                specification: '',
                category: '其他',
                dosage: '',
                expiryDate: ''
              }
            });
          case 5:
            return _context5.a(2);
          case 6:
            // Multi image - sequential
            mergedResult = {
              name: '',
              manufacturer: '',
              specification: '',
              category: '其他',
              dosage: '',
              expiryDate: ''
            };
            i = 0;
          case 7:
            if (!(i < imagePaths.length)) {
              _context5.n = 12;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: "\u8BC6\u522B\u4E2D... ".concat(i + 1, "/").concat(imagePaths.length)
            });
            _context5.p = 8;
            _context5.n = 9;
            return _services_api__WEBPACK_IMPORTED_MODULE_3__/* .medicineApi */ .f0.recognizeImage(imagePaths[i]);
          case 9:
            _res = _context5.v;
            console.log("[\u8BC6\u522B] \u56FE\u7247 ".concat(i + 1, " \u54CD\u5E94:"), _res);
            _actualData = getActualData(_res);
            if (_actualData) {
              if (!mergedResult.name && _actualData.name) mergedResult.name = _actualData.name;
              if (!mergedResult.manufacturer && _actualData.manufacturer) mergedResult.manufacturer = _actualData.manufacturer;
              if (!mergedResult.specification && _actualData.specification) mergedResult.specification = _actualData.specification;
              if (mergedResult.category === '其他' && _actualData.category !== '其他') mergedResult.category = _actualData.category;
              if (!mergedResult.dosage && _actualData.dosage) mergedResult.dosage = _actualData.dosage;
              if (!mergedResult.expiryDate && _actualData.expiryDate) mergedResult.expiryDate = _actualData.expiryDate;
            }
            _context5.n = 11;
            break;
          case 10:
            _context5.p = 10;
            _t6 = _context5.v;
            console.error("[\u8BC6\u522B] \u56FE\u7247 ".concat(i + 1, " \u9519\u8BEF:"), _t6);
          case 11:
            i++;
            _context5.n = 7;
            break;
          case 12:
            console.log('[识别] 合并后的结果:', mergedResult);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            setIsRecognizing(false);
            showRecognitionResult({
              code: 0,
              data: mergedResult
            });
          case 13:
            return _context5.a(2);
        }
      }, _callee5, null, [[8, 10], [2, 4]]);
    }));
    return function recognizeMultiImage(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var showRecognitionResult = function showRecognitionResult(result) {
    var data = (result === null || result === void 0 ? void 0 : result.code) === 0 ? result.data : null;
    if (!data) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: '识别失败',
        content: '未能识别药品信息，请手动输入',
        confirmText: '手动输入',
        cancelText: '重新识别',
        success: function success(res) {
          if (res.confirm) handleAddMedicine();else handleScanCode();
        }
      });
      return;
    }
    var hasAnyData = data.name || data.manufacturer || data.specification || data.dosage || data.expiryDate;
    setEditingMedicine(null);
    setFormData({
      name: data.name || '',
      manufacturer: data.manufacturer || '',
      specification: data.specification || '',
      barcode: data.barcode || '',
      category: data.category && data.category !== '其他' ? data.category : '抗生素',
      stock: 1,
      unit: '盒',
      expiryDate: data.expiryDate || '',
      dosage: data.dosage || ''
    });
    if (hasAnyData) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '识别成功，请核对信息',
        icon: 'success',
        duration: 2000
      });
    }
    setShowAddDialog(true);
    setPhotoBuffer([]);
    setShowPhotoBufferModal(false);
  };

  // Photo buffer handlers
  var handleContinueAddPhoto = function handleContinueAddPhoto() {
    var remaining = 9 - photoBuffer.length;
    if (remaining <= 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '最多9张照片',
        icon: 'none'
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: remaining,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: function success(res) {
        setPhotoBuffer([].concat((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(photoBuffer), (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(res.tempFilePaths)));
        setLastPhotoTime(Date.now());
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '拍照失败',
          icon: 'none'
        });
      }
    });
  };
  var handleRemovePhoto = function handleRemovePhoto(index) {
    var newBuffer = (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(photoBuffer);
    newBuffer.splice(index, 1);
    setPhotoBuffer(newBuffer);
    if (newBuffer.length === 0) setShowPhotoBufferModal(false);
  };
  var handleClearPhotoBuffer = function handleClearPhotoBuffer() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '确认清空',
      content: '确定要清空所有已拍照片吗？',
      confirmText: '清空',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: function success(res) {
        if (res.confirm) {
          setPhotoBuffer([]);
          setShowPhotoBufferModal(false);
          setLastPhotoTime(0);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '已清空',
            icon: 'success'
          });
        }
      }
    });
  };
  var handleRecognizeBufferPhotos = function handleRecognizeBufferPhotos() {
    if (photoBuffer.length === 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '没有照片',
        icon: 'none'
      });
      return;
    }
    setShowPhotoBufferModal(false);
    recognizeMultiImage(photoBuffer);
  };

  // ========== Lifecycle ==========
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useLoad)(function (options) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfo().then(function (res) {
      return setStatusBarHeight(res.statusBarHeight || 0);
    }).catch(function () {});
    loadMedicines();

    // Handle scan params from navigation (e.g. from scan-result page)
    if (options && (options.scan === 'true' || options.name || options.manufacturer)) {
      setEditingMedicine(null);
      setFormData({
        name: options.name || '',
        manufacturer: options.manufacturer || '',
        specification: options.specification || '',
        barcode: options.barcode || '',
        category: options.category && options.category !== '其他' ? options.category : '抗生素',
        stock: options.stock ? parseInt(String(options.stock)) : 1,
        unit: options.unit || '盒',
        expiryDate: options.expiryDate || '',
        dosage: options.dosage || ''
      });
      if (options.name) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '已填充扫描结果',
          icon: 'success',
          duration: 1500
        });
      }
      setShowAddDialog(true);
    }
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    loadMedicines();
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.usePullDownRefresh)(function () {
    loadMedicines();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().stopPullDownRefresh();
  });

  // ========== Render helpers ==========
  var renderCalendarGrid = function renderCalendarGrid() {
    var daysInMonth = (0,_utils_date__WEBPACK_IMPORTED_MODULE_12__/* .getDaysInMonth */ .PK)(calYear, calMonth);
    var firstDay = (0,_utils_date__WEBPACK_IMPORTED_MODULE_12__/* .getFirstDayOfWeek */ .GV)(calYear, calMonth);
    var cells = [];
    for (var i = 0; i < firstDay; i++) {
      cells.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "cal-grid-day cal-grid-empty"
      }, "e-".concat(i)));
    }
    var _loop = function _loop(d) {
      var dateStr = "".concat(calYear, "-").concat(String(calMonth).padStart(2, '0'), "-").concat(String(d).padStart(2, '0'));
      var selected = dateStr === calSelected;
      cells.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "cal-grid-day ".concat(selected ? 'cal-grid-selected' : ''),
        onClick: function onClick() {
          return handleCalendarDaySelect(d);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
          children: d
        })
      }, d));
    };
    for (var d = 1; d <= daysInMonth; d++) {
      _loop(d);
    }
    return cells;
  };
  var renderNavBar = function renderNavBar() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "nav-bar",
      style: {
        paddingTop: "".concat(statusBarHeight, "px")
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "nav-bar-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "nav-placeholder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
          className: "nav-bar-title",
          children: "\u836F\u54C1\u5E93"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "nav-placeholder"
        })]
      })
    });
  };
  var renderStatusBadge = function renderStatusBadge(item) {
    var isExpired = item.statusText === '过期';
    var isExpiring = item.statusText === '临期';
    var className = 'med-tag ';
    if (isExpired) className += 'med-tag-danger';else if (isExpiring && item.statusColor === 'warning') className += 'med-tag-warning';else if (isExpiring) className += 'med-tag-default';else className += 'med-tag-normal';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: className,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
        children: item.statusText
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
    className: "medicine-container",
    style: {
      paddingTop: "".concat(statusBarHeight + 88, "px")
    },
    children: [renderNavBar(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "search-bar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "search-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "search-input-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
            className: "search-input",
            value: searchKeyword,
            placeholder: "\u641C\u7D22\u836F\u54C1\u540D\u79F0",
            onInput: function onInput(e) {
              return handleSearchInput(e.detail.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "search-icon-wrap",
            onClick: handleSearch,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              className: "search-icon",
              children: "\uD83D\uDD0D"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "scan-button",
          onClick: handleScanCode,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "scan-icon-sml",
            children: "\uD83D\uDCF7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "scan-text",
            children: "\u62CD\u7167"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "medicine-list",
      children: [medicines.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "medicine-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "medicine-info",
            onClick: function onClick() {
              return isAdmin && handleEditMedicine(item);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "medicine-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "med-pill-icon",
                children: "\uD83D\uDC8A"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                className: "medicine-details",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                  className: "medicine-name",
                  children: ["\u836F\u54C1\u540D\uFF1A", item.name]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                  className: "medicine-dosage",
                  children: ["\u7528\u6CD5\uFF1A", item.dosage || '无']
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                  className: "medicine-spec-stock",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                    className: "spec-text",
                    children: ["\u89C4\u683C\uFF1A", item.specification]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                    className: "stock-text",
                    children: ["\u5E93\u5B58\uFF1A", item.stock, item.unit || '盒']
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                className: "medicine-status-badge",
                children: renderStatusBadge(item)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "medicine-category",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "category-text",
                children: item.category
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "medicine-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              className: "manufacturer-text",
              children: ["\u5382\u5BB6\uFF1A", item.manufacturer || '未知厂家']
            }), isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "medicine-actions",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                className: "action-icon",
                onClick: function onClick() {
                  return handleEditMedicine(item);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                  className: "action-icon-text edit-icon",
                  children: "\u270F\uFE0F"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                className: "action-icon",
                onClick: function onClick() {
                  return handleDeleteMedicine(item);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                  className: "action-icon-text delete-icon",
                  children: "\uD83D\uDDD1"
                })
              })]
            })]
          })]
        }, item.id);
      }), medicines.length === 0 && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "empty-state",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
          className: "empty-state-text",
          children: "\u6682\u65E0\u836F\u54C1"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "add-button",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "add-btn",
        onClick: handleAddMedicine,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
          className: "add-btn-text",
          children: "+ \u6DFB\u52A0\u836F\u54C1"
        })
      })
    }), showAddDialog && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "dialog-overlay",
      onClick: handleCloseDialog,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "dialog-container",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "dialog-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "dialog-title",
            children: editingMedicine ? '编辑药品' : '添加药品'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "dialog-close",
            onClick: handleCloseDialog,
            children: "\u2715"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .ScrollView */ .BM, {
          className: "dialog-content",
          scrollY: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item form-item-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u836F\u54C1\u540D\u79F0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "required-mark",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
                className: "form-input",
                value: formData.name,
                placeholder: "\u8BF7\u8F93\u5165\u836F\u54C1\u540D\u79F0",
                onInput: function onInput(e) {
                  return setFormData(function (prev) {
                    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
                      name: e.detail.value
                    });
                  });
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item form-item-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u751F\u4EA7\u5382\u5BB6"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
                className: "form-input",
                value: formData.manufacturer,
                placeholder: "\u8BF7\u8F93\u5165\u751F\u4EA7\u5382\u5BB6",
                onInput: function onInput(e) {
                  return setFormData(function (prev) {
                    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
                      manufacturer: e.detail.value
                    });
                  });
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item form-item-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u89C4\u683C"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
                className: "form-input",
                value: formData.specification,
                placeholder: "\u8BF7\u8F93\u5165\u89C4\u683C",
                onInput: function onInput(e) {
                  return setFormData(function (prev) {
                    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
                      specification: e.detail.value
                    });
                  });
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item",
            onClick: handleCategorySelect,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u5206\u7C7B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "required-mark",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "form-value-text has-value",
                children: formData.category
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "form-arrow",
                children: "\u203A"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item form-item-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u5E93\u5B58"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "required-mark",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
                className: "form-input",
                type: "number",
                value: String(formData.stock),
                placeholder: "\u8BF7\u8F93\u5165\u5E93\u5B58\u6570\u91CF",
                onInput: function onInput(e) {
                  return setFormData(function (prev) {
                    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
                      stock: Number(e.detail.value) || 0
                    });
                  });
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item form-item-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u5355\u4F4D"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "required-mark",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
                className: "form-input",
                value: formData.unit,
                placeholder: "\u8BF7\u8F93\u5165\u5355\u4F4D\uFF08\u5982\uFF1A\u76D2\u3001\u74F6\uFF09",
                onInput: function onInput(e) {
                  return setFormData(function (prev) {
                    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
                      unit: e.detail.value
                    });
                  });
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item",
            onClick: handleExpiryDateSelect,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u8FC7\u671F\u65E5\u671F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "required-mark",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "form-value-text ".concat(formData.expiryDate ? 'has-value' : ''),
                children: formData.expiryDate || '选择过期日期'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "form-arrow",
                children: "\u203A"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "form-item form-item-input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-label",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                children: "\u7528\u6CD5\u7528\u91CF"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "form-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .pd, {
                className: "form-input",
                value: formData.dosage,
                placeholder: "\u8BF7\u8F93\u5165\u7528\u6CD5\u7528\u91CF",
                onInput: function onInput(e) {
                  return setFormData(function (prev) {
                    return (0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,F_medimate_app_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)({}, prev), {}, {
                      dosage: e.detail.value
                    });
                  });
                }
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "dialog-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "dialog-btn dialog-btn-cancel",
            onClick: handleCloseDialog,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              children: "\u53D6\u6D88"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "dialog-btn dialog-btn-confirm",
            onClick: handleSubmit,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              children: "\u4FDD\u5B58"
            })
          })]
        })]
      })
    }), showDatePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "calendar-overlay",
      onClick: function onClick() {
        return setShowDatePicker(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "calendar-dialog",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "date-picker-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "date-picker-cancel",
            onClick: function onClick() {
              return setShowDatePicker(false);
            },
            children: "\u53D6\u6D88"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "date-picker-title",
            children: "\u9009\u62E9\u8FC7\u671F\u65E5\u671F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "date-picker-confirm",
            onClick: handleCalendarConfirm,
            children: "\u786E\u8BA4"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "calendar-grid-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "cal-month-nav",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              onClick: function onClick() {
                if (calMonth === 1) {
                  setCalMonth(12);
                  setCalYear(function (y) {
                    return y - 1;
                  });
                } else setCalMonth(function (m) {
                  return m - 1;
                });
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "cal-nav-arrow",
                children: "\u25C0"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              className: "cal-month-label",
              children: [calYear, "\u5E74", calMonth, "\u6708"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              onClick: function onClick() {
                if (calMonth === 12) {
                  setCalMonth(1);
                  setCalYear(function (y) {
                    return y + 1;
                  });
                } else setCalMonth(function (m) {
                  return m + 1;
                });
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                className: "cal-nav-arrow",
                children: "\u25B6"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "cal-grid",
            children: [['日', '一', '二', '三', '四', '五', '六'].map(function (w) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                className: "cal-grid-week",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                  children: w
                })
              }, w);
            }), renderCalendarGrid()]
          })]
        })]
      })
    }), showPhotoBufferModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "photo-buffer-overlay",
      onClick: function onClick() {
        return setShowPhotoBufferModal(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
        className: "photo-buffer-modal",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "photo-buffer-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "photo-buffer-title",
            children: ["\u7167\u7247\u7F13\u51B2\u533A (", photoBuffer.length, "/9)"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
            className: "photo-buffer-subtitle",
            children: "\u5DF2\u62CD\u6444\u7167\u7247\uFF0C\u53EF\u7EE7\u7EED\u6DFB\u52A0"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "photo-buffer-grid",
          children: photoBuffer.map(function (path, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
              className: "photo-buffer-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Image */ ._V, {
                className: "photo-buffer-image",
                src: path,
                mode: "aspectFill"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
                className: "photo-buffer-remove",
                onClick: function onClick() {
                  return handleRemovePhoto(idx);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
                  className: "photo-remove-text",
                  children: "\u2715"
                })
              })]
            }, idx);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
          className: "photo-buffer-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "pba-btn pba-btn-default ".concat(photoBuffer.length >= 9 ? 'pba-btn-disabled' : ''),
            onClick: handleContinueAddPhoto,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              children: "\u7EE7\u7EED\u6DFB\u52A0"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "pba-btn pba-btn-danger",
            onClick: handleClearPhotoBuffer,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              children: "\u6E05\u7A7A"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
            className: "pba-btn pba-btn-primary",
            onClick: handleRecognizeBufferPhotos,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
              children: "\u5F00\u59CB\u8BC6\u522B"
            })
          })]
        })]
      })
    }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .View */ .Ss, {
      className: "loading-overlay",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__/* .Text */ .EY, {
        className: "loading-text",
        children: "\u52A0\u8F7D\u4E2D..."
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_custom_tab_bar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})]
  });
}

/***/ }),

/***/ 118:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $n: function() { return /* binding */ Button; },
/* harmony export */   BM: function() { return /* binding */ ScrollView; },
/* harmony export */   EY: function() { return /* binding */ Text; },
/* harmony export */   Hl: function() { return /* binding */ Canvas; },
/* harmony export */   LC: function() { return /* binding */ Picker; },
/* harmony export */   SC: function() { return /* binding */ WebView; },
/* harmony export */   Sc: function() { return /* binding */ Checkbox; },
/* harmony export */   Ss: function() { return /* binding */ View; },
/* harmony export */   _V: function() { return /* binding */ Image; },
/* harmony export */   dO: function() { return /* binding */ Switch; },
/* harmony export */   pd: function() { return /* binding */ Input; }
/* harmony export */ });
/* unused harmony exports Ad, AdCustom, Audio, Block, Camera, ChannelLive, ChannelVideo, CheckboxGroup, CoverImage, CoverView, CustomWrapper, DraggableSheet, Editor, Form, FunctionalPageNavigator, GridBuilder, GridView, Icon, KeyboardAccessory, Label, ListBuilder, ListView, LivePlayer, LivePusher, Map, MatchMedia, MovableArea, MovableView, NativeSlot, NavigationBar, Navigator, NestedScrollBody, NestedScrollHeader, OfficialAccount, OpenContainer, OpenData, PageContainer, PageMeta, PickerView, PickerViewColumn, Progress, Radio, RadioGroup, RichText, RootPortal, ShareElement, Slider, Slot, Snapshot, Span, StickyHeader, StickySection, Swiper, SwiperItem, Textarea, Video, VoipRoom */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var NativeSlot = 'native-slot';
var CustomWrapper = 'custom-wrapper';

// For React.createElement's type
var Editor = 'editor';
var MatchMedia = 'match-media';
var FunctionalPageNavigator = 'functional-page-navigator';
var LivePusher = 'live-pusher';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var NavigationBar = 'navigation-bar';
var PageMeta = 'page-meta';
var VoipRoom = 'voip-room';
var AdCustom = 'ad-custom';
var PageContainer = 'page-container';
var ShareElement = 'share-element';
var KeyboardAccessory = 'keyboard-accessory';
var RootPortal = 'root-portal';
var ChannelLive = 'channel-live';
var ChannelVideo = 'channel-video';
var ListView = 'list-view';
var ListBuilder = 'list-builder';
var GridView = 'grid-view';
var GridBuilder = 'grid-builder';
var StickyHeader = 'sticky-header';
var StickySection = 'sticky-section';
var Snapshot = 'snapshot';
var Span = 'span';
var OpenContainer = 'open-container';
var DraggableSheet = 'draggable-sheet';
var NestedScrollHeader = 'nested-scroll-header';
var NestedScrollBody = 'nested-scroll-body';


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

/***/ 2321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7842);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_custom_tab_bar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4371);


var inst = Component((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createComponentConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_custom_tab_bar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, 'custom-tab-bar/index'))

/* harmony default export */ __webpack_exports__.A = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_custom_tab_bar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 9169:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7842);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_medicine_medicine_medicine_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2789);


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_medicine_medicine_medicine_tsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, 'pages/medicine/medicine', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (component)));


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

/***/ 8887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GV: function() { return /* binding */ getFirstDayOfWeek; },
/* harmony export */   PK: function() { return /* binding */ getDaysInMonth; },
/* harmony export */   Yq: function() { return /* binding */ formatDate; },
/* harmony export */   jC: function() { return /* binding */ safeName; }
/* harmony export */ });
/* unused harmony exports getCurrentDateString, getMonthFirstDate, getMonthLastDate, getPickerDateRange, isSameDay, addDays, addMonths, computeDaysToExpiry */
/**
 * 日期工具函数 - 统一处理日期相关操作
 */
function formatDate(date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
}
function getCurrentDateString() {
  return formatDate(new Date());
}
function getMonthFirstDate(year, month) {
  return new Date(year, month - 1, 1);
}
function getMonthLastDate(year, month) {
  var lastDay = new Date(year, month, 0).getDate();
  return new Date(year, month - 1, lastDay);
}
function getPickerDateRange(currentYear) {
  return {
    minDate: new Date(currentYear - 5, 0, 1),
    maxDate: new Date(currentYear + 5, 11, 31)
  };
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function getFirstDayOfWeek(year, month) {
  return new Date(year, month - 1, 1).getDay();
}
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}
function safeName(value) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '未设置昵称';
  if (value === null || value === undefined || value === 'null' || value === 'undefined') return fallback;
  var str = String(value).trim();
  return str || fallback;
}

// 计算距离过期天数
function computeDaysToExpiry(expiryDate) {
  if (!expiryDate) return {
    daysToExpiry: null,
    status: 'normal'
  };
  var days = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / (1000 * 3600 * 24));
  if (days <= 0) return {
    daysToExpiry: days,
    status: 'expired'
  };
  if (days <= 30) return {
    daysToExpiry: days,
    status: 'expiring'
  };
  return {
    daysToExpiry: days,
    status: 'normal'
  };
}

/***/ }),

/***/ 6669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ getTraceCodeImage; },
/* harmony export */   U: function() { return /* binding */ setTraceCodeImage; }
/* harmony export */ });
// 全局数据存储（模拟原项目 getApp().globalData）
var globalTraceCodeImage = null;
var setTraceCodeImage = function setTraceCodeImage(imagePath) {
  globalTraceCodeImage = imagePath;
};
var getTraceCodeImage = function getTraceCodeImage() {
  var img = globalTraceCodeImage;
  globalTraceCodeImage = null;
  return img;
};

/***/ }),

/***/ 1020:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


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

/***/ 4848:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(1020);
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
/******/ var __webpack_exports__ = (__webpack_exec__(9169));
/******/ }
]);