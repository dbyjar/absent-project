(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$root.auth;
    }
  },
  data: function data() {
    return {
      columns: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$user;

  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("Tools", {
    attrs: {
      withoutDefaultButton: ""
    }
  }, [((_vm$user = _vm.user) === null || _vm$user === void 0 ? void 0 : _vm$user.user_role_id) === 1 ? _c("button", {
    staticClass: "btn btn-primary",
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "scanQRCode"
        });
      }
    }
  }, [_c("i", {
    staticClass: "mdi mdi-qrcode-scan"
  }), _vm._v(" Scan QR\n        ")]) : _vm._e()]), _vm._v(" "), _vm._m(0)], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("Recent Comments")])]), _vm._v(" "), _c("div", {
    staticClass: "comment-widgets scrollable"
  }, [_c("div", {
    staticClass: "d-flex flex-row comment-row m-t-0"
  }, [_c("div", {
    staticClass: "p-2"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/users/1.jpg */ "./resources/js/assets/images/users/1.jpg"),
      alt: "user",
      width: "50"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "comment-text w-100"
  }, [_c("h6", {
    staticClass: "font-medium"
  }, [_vm._v("James Anderson")]), _vm._v(" "), _c("span", {
    staticClass: "m-b-15 d-block"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing\n                                and type setting industry. ")]), _vm._v(" "), _c("div", {
    staticClass: "comment-footer"
  }, [_c("span", {
    staticClass: "text-muted float-end"
  }, [_vm._v("April 14, 2021")]), _vm._v(" "), _c("span", {
    staticClass: "badge bg-primary"
  }, [_vm._v("Pending")]), _vm._v(" "), _c("span", {
    staticClass: "action-icons"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-pencil-alt"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-check"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-heart"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row comment-row"
  }, [_c("div", {
    staticClass: "p-2"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/users/4.jpg */ "./resources/js/assets/images/users/4.jpg"),
      alt: "user",
      width: "50"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "comment-text active w-100"
  }, [_c("h6", {
    staticClass: "font-medium"
  }, [_vm._v("Michael Jorden")]), _vm._v(" "), _c("span", {
    staticClass: "m-b-15 d-block"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing\n                                and type setting industry. ")]), _vm._v(" "), _c("div", {
    staticClass: "comment-footer"
  }, [_c("span", {
    staticClass: "text-muted float-end"
  }, [_vm._v("April 14, 2021")]), _vm._v(" "), _c("span", {
    staticClass: "badge bg-success"
  }, [_vm._v("Approved")]), _vm._v(" "), _c("span", {
    staticClass: "action-icons active"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-pencil-alt"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "icon-close"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-heart text-danger"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row comment-row"
  }, [_c("div", {
    staticClass: "p-2"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/users/5.jpg */ "./resources/js/assets/images/users/5.jpg"),
      alt: "user",
      width: "50"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "comment-text w-100"
  }, [_c("h6", {
    staticClass: "font-medium"
  }, [_vm._v("Johnathan Doeting")]), _vm._v(" "), _c("span", {
    staticClass: "m-b-15 d-block"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing\n                                and type setting industry. ")]), _vm._v(" "), _c("div", {
    staticClass: "comment-footer"
  }, [_c("span", {
    staticClass: "text-muted float-end"
  }, [_vm._v("April 14, 2021")]), _vm._v(" "), _c("span", {
    staticClass: "badge bg-danger"
  }, [_vm._v("Rejected")]), _vm._v(" "), _c("span", {
    staticClass: "action-icons"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-pencil-alt"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-check"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "ti-heart"
  })])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/assets/images/users/1.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/images/users/1.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/1.jpg?3f014353c13bafde351a2733b99f2df6";

/***/ }),

/***/ "./resources/js/assets/images/users/4.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/images/users/4.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/4.jpg?128dd6c1580e0c9d2212a1f1fef11453";

/***/ }),

/***/ "./resources/js/assets/images/users/5.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/images/users/5.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/5.jpg?0163d723597a6013d01bc761027fd993";

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=82704d4a& */ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=82704d4a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&");


/***/ })

}]);