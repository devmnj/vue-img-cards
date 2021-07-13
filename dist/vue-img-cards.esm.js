import Vue from 'vue';

var script$1 = /*#__PURE__*/Vue.extend({
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
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "imgBx"
  }, [_c('img', {
    attrs: {
      "src": "" + _vm.img['src'],
      "alt": "" + _vm.img['alt']
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "details"
  }, [_vm._t("details", function () {
    return [_vm._m(0)];
  })], 2)]);
};

var __vue_staticRenderFns__$1 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('h2', [_vm._v("SomeOne Famous"), _c('br'), _c('span', [_vm._v("Director")])]);
}];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-779fdd3b_0", {
    source: ".box[data-v-779fdd3b]{width:1200px;display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:15px;margin:0 auto}.card[data-v-779fdd3b]{position:relative;width:300px;height:350px;background:#fff;margin:0 auto;border-radius:11px;box-shadow:0 2px 10px rgba(0,0,0,.2)}.card[data-v-779fdd3b]:after,.card[data-v-779fdd3b]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:11px;background:#fff;transition:.5s;z-index:-1}.card[data-v-779fdd3b]:hover:before{transform:rotate(20deg);box-shadow:0 2px 20px rgba(0,0,0,.2)}.card[data-v-779fdd3b]:hover:after{transform:rotate(10deg);box-shadow:0 2px 20px rgba(0,0,0,.2)}.card .imgBx[data-v-779fdd3b]{position:absolute;top:10px;left:10px;bottom:10px;right:10px;background:#222;transition:.5s;z-index:1}.card:hover .imgBx[data-v-779fdd3b]{bottom:80px}.card .imgBx img[data-v-779fdd3b]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.card .details[data-v-779fdd3b]{position:absolute;left:10px;right:10px;bottom:10px;height:60px;text-align:center}.card .details h2[data-v-779fdd3b]{margin:0;padding:0;font-weight:600;font-size:20px;color:#777;text-transform:uppercase}.card .details h2 span[data-v-779fdd3b]{font-weight:500;font-size:16px;color:#f38695;display:block;margin-top:5px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-779fdd3b";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var script = /*#__PURE__*/Vue.extend({
  name: "VueMiniBio"
});

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "card"
  }, [_vm._t("img", function () {
    return [_vm._m(0)];
  }), _vm._v(" "), _c('div', {
    staticClass: "details"
  }, [_c('div', {
    staticClass: "center"
  }, [_vm._t("details", function () {
    return [_vm._m(1), _vm._v(" "), _c('p', [_vm._v("\n            Lorem ipsum is simple dummy text on the printing and typesetting industry.\n          ")]), _vm._v(" "), _vm._m(2)];
  })], 2)])], 2)]);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    }
  })]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('h1', [_vm._v("Someone nonsense"), _c('br'), _c('span', [_vm._v("team leader")])]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', [_c('li', [_c('a', {
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
  })])])]);
}];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-0a96f46e_0", {
    source: ".card[data-v-0a96f46e]{position:relative;width:360px;height:250px;background:#000}.card .image[data-v-0a96f46e]{width:100%;height:100%;overflow:hidden}.card .image img[data-v-0a96f46e]{width:100%;transition:.5s}.card:hover .image img[data-v-0a96f46e]{opacity:.5;transform:translateX(30%)}.card .details[data-v-0a96f46e]{position:absolute;top:0;left:0;width:70%;height:100%;background:#ffc107;transition:.5s;transform-origin:left;transform:perspective(2000px) rotateY(-90deg)}.card:hover .details[data-v-0a96f46e]{transform:perspective(2000px) rotateY(0)}.card .details .center[data-v-0a96f46e]{padding:20px;text-align:center;background:#fff;position:absolute;top:50%;transform:translateY(-50%)}.card .details .center h1[data-v-0a96f46e]{margin:0;padding:0;color:#ff3636;line-height:20px;font-size:20px;text-transform:uppercase}.card .details .center h1 span[data-v-0a96f46e]{font-size:14px;color:#262626}.card .details .center p[data-v-0a96f46e]{margin:10px 0;padding:0;color:#262626}.card .details .center ul[data-v-0a96f46e]{margin:10px auto 0;padding:0;display:table}.card .details .center ul li[data-v-0a96f46e]{list-style:none;margin:0 5px;float:left}.card .details .center ul li a[data-v-0a96f46e]{display:block;background:#262626;color:#fff;width:30px;height:30px;line-height:30px;text-align:center;transform:.5s}.card .details .center ul li a[data-v-0a96f46e]:hover{background:#ff3636}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-0a96f46e";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VueProfileCard: __vue_component__$1,
  VueMiniBio: __vue_component__
});

// Import vue components

const install = function installVueImgCards(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { __vue_component__ as VueMiniBio, __vue_component__$1 as VueProfileCard };
