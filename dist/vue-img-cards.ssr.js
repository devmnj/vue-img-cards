'use strict';var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$1 = /*#__PURE__*/Vue__default['default'].extend({
  name: "VueProfileCard",
  props: {
    img: {
      type: Object,
      default: new Object({
        src: "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        alt: "images"
      })
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<div class=\"imgBx\" data-v-779fdd3b><img" + _vm._ssrAttr("src", "" + _vm.img['src']) + _vm._ssrAttr("alt", "" + _vm.img['alt']) + " data-v-779fdd3b></div> "), _vm._ssrNode("<div class=\"details\" data-v-779fdd3b>", "</div>", [_vm._t("details", function () {
    return [_c('h2', [_vm._v("SomeOne Famous"), _c('br'), _c('span', [_vm._v("Director")])])];
  })], 2)], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-779fdd3b_0", {
    source: ".box[data-v-779fdd3b]{width:1200px;display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:15px;margin:0 auto}.card[data-v-779fdd3b]{position:relative;width:300px;height:350px;background:#fff;margin:0 auto;border-radius:11px;box-shadow:0 2px 10px rgba(0,0,0,.2)}.card[data-v-779fdd3b]:after,.card[data-v-779fdd3b]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:11px;background:#fff;transition:.5s;z-index:-1}.card[data-v-779fdd3b]:hover:before{transform:rotate(20deg);box-shadow:0 2px 20px rgba(0,0,0,.2)}.card[data-v-779fdd3b]:hover:after{transform:rotate(10deg);box-shadow:0 2px 20px rgba(0,0,0,.2)}.card .imgBx[data-v-779fdd3b]{position:absolute;top:10px;left:10px;bottom:10px;right:10px;background:#222;transition:.5s;z-index:1}.card:hover .imgBx[data-v-779fdd3b]{bottom:80px}.card .imgBx img[data-v-779fdd3b]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.card .details[data-v-779fdd3b]{position:absolute;left:10px;right:10px;bottom:10px;height:60px;text-align:center}.card .details h2[data-v-779fdd3b]{margin:0;padding:0;font-weight:600;font-size:20px;color:#777;text-transform:uppercase}.card .details h2 span[data-v-779fdd3b]{font-weight:500;font-size:16px;color:#f38695;display:block;margin-top:5px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-779fdd3b";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-779fdd3b";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var script = /*#__PURE__*/Vue__default['default'].extend({
  name: "VueMiniBio"
});/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div class=\"card\" data-v-0a96f46e>", "</div>", [_vm._t("img", function () {
    return [_c('div', {
      staticClass: "image"
    }, [_c('img', {
      attrs: {
        "src": "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
      }
    })])];
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"details\" data-v-0a96f46e>", "</div>", [_vm._ssrNode("<div class=\"center\" data-v-0a96f46e>", "</div>", [_vm._t("details", function () {
    return [_c('h1', [_vm._v("Someone nonsense"), _c('br'), _c('span', [_vm._v("team leader")])]), _vm._v(" "), _c('p', [_vm._v("\n            Lorem ipsum is simple dummy text on the printing and typesetting industry.\n          ")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('i', {
      staticClass: "fa fa-facebook",
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('i', {
      staticClass: "fa fa-twitter",
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('i', {
      staticClass: "fa fa-google-plus",
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('i', {
      staticClass: "fa fa-linkedin",
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_c('i', {
      staticClass: "fa fa-instagram",
      attrs: {
        "aria-hidden": "true"
      }
    })])])])];
  })], 2)])], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0a96f46e_0", {
    source: ".card[data-v-0a96f46e]{position:relative;width:360px;height:250px;background:#000}.card .image[data-v-0a96f46e]{width:100%;height:100%;overflow:hidden}.card .image img[data-v-0a96f46e]{width:100%;transition:.5s}.card:hover .image img[data-v-0a96f46e]{opacity:.5;transform:translateX(30%)}.card .details[data-v-0a96f46e]{position:absolute;top:0;left:0;width:70%;height:100%;background:#ffc107;transition:.5s;transform-origin:left;transform:perspective(2000px) rotateY(-90deg)}.card:hover .details[data-v-0a96f46e]{transform:perspective(2000px) rotateY(0)}.card .details .center[data-v-0a96f46e]{padding:20px;text-align:center;background:#fff;position:absolute;top:50%;transform:translateY(-50%)}.card .details .center h1[data-v-0a96f46e]{margin:0;padding:0;color:#ff3636;line-height:20px;font-size:20px;text-transform:uppercase}.card .details .center h1 span[data-v-0a96f46e]{font-size:14px;color:#262626}.card .details .center p[data-v-0a96f46e]{margin:10px 0;padding:0;color:#262626}.card .details .center ul[data-v-0a96f46e]{margin:10px auto 0;padding:0;display:table}.card .details .center ul li[data-v-0a96f46e]{list-style:none;margin:0 5px;float:left}.card .details .center ul li a[data-v-0a96f46e]{display:block;background:#262626;color:#fff;width:30px;height:30px;line-height:30px;text-align:center;transform:.5s}.card .details .center ul li a[data-v-0a96f46e]:hover{background:#ff3636}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-0a96f46e";
/* module identifier */

var __vue_module_identifier__ = "data-v-0a96f46e";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VueProfileCard: __vue_component__$1,VueMiniBio: __vue_component__});var install = function installVueImgCards(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VueProfileCard: __vue_component__$1,VueMiniBio: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;