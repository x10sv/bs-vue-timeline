import moment from 'moment';
import cssVars from 'css-vars-ponyfill';

//

var script = {
  name: "TimelineItem",
  props: {
    itemTimeline: {
      type: Object,
      default: function () { return ({}); }
    }
  },

  methods: {
    TimeDifference: function TimeDifference(from, to) {
      var formatedTime = '<span class="duration">';

      var yearsDiff = moment(to).diff(moment(from), "year");
      var monthsDiff = moment(to).diff(moment(from), "months") - yearsDiff * 12; //substract the full years as months

      var separator = "";

      if (yearsDiff > 0 && monthsDiff > 0) {
        separator = ", ";
      }

      // Show years only if the duration is over one year and handle the pluralisation
      if (yearsDiff === 1) {
        formatedTime = formatedTime + " 1 year";
      } else if (yearsDiff > 1) {
        formatedTime = formatedTime + yearsDiff + " years";
      }

      // Show months only if the months are over 1 and handle the pluralisation
      if (monthsDiff === 1) {
        formatedTime = formatedTime + separator + "1 month";
      } else if (monthsDiff > 1) {
        formatedTime = formatedTime + separator + monthsDiff + " months";
      }

      formatedTime = formatedTime + "</span>";

      return formatedTime;
    }
  },

  filters: {
    FormatedDate: function(InputDate) {
      var momentDate = moment(InputDate);

      if (moment().isSame(momentDate, "month")) {
        return "Present time";
      } else {
        return momentDate.format("MM YYYY");
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "b-row",
    {
      staticClass: "justify-content-around align-items-start timeline-nodes",
      attrs: { "no-gutters": "" }
    },
    [
      _c(
        "b-col",
        {
          staticClass: "timeline-content",
          attrs: {
            cols: "9",
            md: "5",
            offset: "3",
            "offset-md": "0",
            order: "3",
            "order-md": "1"
          }
        },
        [
          _c("h3", {
            staticClass: "text-light",
            domProps: { innerHTML: _vm._s(_vm.itemTimeline.title) }
          }),
          _vm._v(" "),
          _c("h2", {
            domProps: { innerHTML: _vm._s(_vm.itemTimeline.subtitle) }
          }),
          _vm._v(" "),
          _c("p", { domProps: { innerHTML: _vm._s(_vm.itemTimeline.content) } })
        ]
      ),
      _vm._v(" "),
      _c(
        "b-col",
        {
          staticClass: "timeline-image text-sm-center mx-md-4",
          attrs: {
            cols: "1",
            md: "1",
            offset: "1",
            "offset-md": "0",
            order: "1"
          }
        },
        [
          _c("img", {
            staticClass: "img-fluid",
            attrs: {
              src: "img/" + _vm.itemTimeline.image,
              alt: _vm.itemTimeline.title
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "b-col",
        {
          staticClass: "py-3 timeline-date",
          attrs: {
            cols: "9",
            md: "5",
            order: "2",
            offset: "1",
            "offset-md": "0",
            "order-md": "3"
          }
        },
        [
          _vm._v(
            "\n    " +
              _vm._s(_vm._f("FormatedDate")(_vm.itemTimeline.from)) +
              " - " +
              _vm._s(_vm._f("FormatedDate")(_vm.itemTimeline.to)) +
              "\n    "
          ),
          _c("time", {
            domProps: {
              innerHTML: _vm._s(
                _vm.TimeDifference(_vm.itemTimeline.from, _vm.itemTimeline.to)
              )
            }
          })
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TimelineItem = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//

var script$1 = {
  name: "VueBSTimeline",
  components: { TimelineItem: TimelineItem },
  props: {
    timelineItems: {
      type: Array,
      default: function () { return []; }
    }
  }
};

cssVars({
  
});

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "timeline" },
      _vm._l(_vm.timelineItems, function(itemTimeline, timelineIndex) {
        return _c("TimelineItem", {
          key: timelineIndex,
          attrs: { "item-timeline": itemTimeline }
        })
      }),
      1
    )
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-338aab1f_0", { source: "\n.timeline {\r\n  padding: 50px 0;\r\n  position: relative;\n}\n.timeline-nodes {\r\n  padding-bottom: 25px;\r\n  position: relative;\n}\n.timeline-nodes:nth-child(even) {\r\n  flex-direction: row-reverse;\n}\n.timeline h3,\r\n.timeline p {\r\n  padding: 5px 15px;\n}\n.timeline h3 {\r\n  font-weight: lighter;\r\n  background: var(--bvt-primary-color, #0288d1);\n}\n.timeline h2 {\r\n  padding: 5px 15px;\r\n  font-size: 1em;\r\n  background-color: var(--bvt-bg-secondary, #ddd);\r\n  margin-top: -8px;\n}\n.timeline p,\r\n.timeline time {\r\n  color: var(--bvt-timeline-text-color, #333);\n}\n.timeline::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 0;\r\n  border-left: 1px solid var(--bvt-timeline-color, #aaa);\r\n  height: 100%;\r\n  z-index: 1;\r\n  transform: translateX(-50%);\n}\n.timeline-content {\r\n  background-color: #fff;\r\n  border: 1px solid var(--bvt-border-color, #aaa);\r\n  position: relative;\r\n  border-radius: 0 0 10px 10px;\r\n  box-shadow: var(--bvt-box-shadow1, 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24));\n}\n.timeline-date {\r\n    padding: 5px 15px !important;\n}\n.timeline-nodes:nth-child(odd) h3,\r\n.timeline-nodes:nth-child(odd) h2,\r\n.timeline-nodes:nth-child(odd) p {\r\n  text-align: right;\n}\n.timeline-nodes:nth-child(odd) .timeline-date {\r\n  text-align: left;\n}\n.timeline-nodes:nth-child(even) .timeline-date {\r\n  text-align: right;\n}\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 100%;\r\n  width: 0;\r\n  border-left: 10px solid var(--bvt-primary-color, #0288d1);\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\n}\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 5%;\r\n  right: 100%;\r\n  width: 0;\r\n  border-right: 10px solid var(--bvt-primary-color, #0288d1);\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\n}\n.timeline-image {\r\n  position: relative;\r\n  z-index: 100;\n}\n.timeline-image::before {\r\n  content: \"\";\r\n  width: 100px;\r\n  height: 100px;\r\n  border: 1px solid var(--bvt-timeline-color, #aaa);\r\n  border-radius: 50%;\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  z-index: 1;\n}\n.timeline-image img {\r\n  position: relative;\r\n  z-index: 100;\r\n  width: 90px;\r\n  height: auto;\n}\r\n\r\n/*small device style*/\n@media (max-width: 767px) {\n.timeline-nodes:nth-child(odd) h3,\r\n  .timeline-nodes:nth-child(odd) h2,\r\n  .timeline-nodes:nth-child(odd) p {\r\n    text-align: left;\n}\n.timeline-nodes:nth-child(even) {\r\n    flex-direction: row;\n}\n.timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 8.333333%;\r\n    width: 0;\r\n    border-left: 1px solid var(--bvt-timeline-color ,#aaa);\r\n    height: 100%;\r\n    z-index: 1;\r\n    transform: translateX(-50%);\n}\n.timeline h3 {\r\n    font-size: 1.7rem;\n}\n.timeline p {\r\n    font-size: 14px;\n}\n.timeline-image {\r\n    position: relative;\r\n    left: -4.333333%;\r\n    top: 60px;\n}\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    left: auto;\r\n    right: 100%;\r\n    width: 0;\r\n    border-left: 0;\r\n    border-right: 10px solid var(--bvt-primary-color, #0288d1);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\n}\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 100%;\r\n    width: 0;\r\n    border-right: 10px solid var(--bvt-primary-color, #0288d1);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\n}\n.timeline-nodes:nth-child(even) .timeline-date {\r\n    text-align: left;\n}\n}\nspan.duration {\r\n  margin-left: 10px;\r\n  color: var(--bvt-duration-color, #0288d1);\r\n  font-style: italic;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\angel\\code\\vue-bs-timeline\\src\\components\\VueBSTimeline.vue"],"names":[],"mappings":";AAmCA;EACA,eAAA;EACA,kBAAA;AACA;AACA;EACA,oBAAA;EACA,kBAAA;AACA;AACA;EACA,2BAAA;AACA;AACA;;EAEA,iBAAA;AACA;AACA;EACA,oBAAA;EACA,6CAAA;AACA;AAEA;EACA,iBAAA;EACA,cAAA;EACA,+CAAA;EACA,gBAAA;AACA;AAEA;;EAEA,2CAAA;AACA;AACA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,sDAAA;EACA,YAAA;EACA,UAAA;EACA,2BAAA;AACA;AACA;EACA,sBAAA;EACA,+CAAA;EACA,kBAAA;EACA,4BAAA;EACA,gGAAA;AACA;AACA;IACA,4BAAA;AACA;AACA;;;EAGA,iBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,iBAAA;AACA;AACA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,yDAAA;EACA,kCAAA;EACA,qCAAA;AACA;AACA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,QAAA;EACA,0DAAA;EACA,kCAAA;EACA,qCAAA;AACA;AACA;EACA,kBAAA;EACA,YAAA;AACA;AACA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,iDAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,sBAAA;EACA,UAAA;AACA;AACA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AACA;;AAEA,qBAAA;AAEA;AACA;;;IAGA,gBAAA;AACA;AACA;IACA,mBAAA;AACA;AACA;IACA,WAAA;IACA,cAAA;IACA,kBAAA;IACA,MAAA;IACA,eAAA;IACA,QAAA;IACA,sDAAA;IACA,YAAA;IACA,UAAA;IACA,2BAAA;AACA;AACA;IACA,iBAAA;AACA;AACA;IACA,eAAA;AACA;AACA;IACA,kBAAA;IACA,gBAAA;IACA,SAAA;AACA;AACA;IACA,WAAA;IACA,kBAAA;IACA,OAAA;IACA,UAAA;IACA,WAAA;IACA,QAAA;IACA,cAAA;IACA,0DAAA;IACA,kCAAA;IACA,qCAAA;AACA;AACA;IACA,WAAA;IACA,kBAAA;IACA,OAAA;IACA,WAAA;IACA,QAAA;IACA,0DAAA;IACA,kCAAA;IACA,qCAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;AAEA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;AACA","file":"VueBSTimeline.vue","sourcesContent":["<template>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"timeline\">\r\n      <TimelineItem\r\n        v-for=\"(itemTimeline, timelineIndex) in timelineItems\"\r\n        :key=\"timelineIndex\"\r\n        :item-timeline=\"itemTimeline\"\r\n      />\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport TimelineItem from \"./TimelineItem.vue\";\r\nimport cssVars from 'css-vars-ponyfill';\r\n\r\nexport default {\r\n  name: \"VueBSTimeline\",\r\n  components: { TimelineItem },\r\n  props: {\r\n    timelineItems: {\r\n      type: Array,\r\n      default: () => []\r\n    }\r\n  }\r\n};\r\n\r\ncssVars({\r\n  \r\n});\r\n\r\n</script>\r\n\r\n<style>\r\n\r\n.timeline {\r\n  padding: 50px 0;\r\n  position: relative;\r\n}\r\n.timeline-nodes {\r\n  padding-bottom: 25px;\r\n  position: relative;\r\n}\r\n.timeline-nodes:nth-child(even) {\r\n  flex-direction: row-reverse;\r\n}\r\n.timeline h3,\r\n.timeline p {\r\n  padding: 5px 15px;\r\n}\r\n.timeline h3 {\r\n  font-weight: lighter;\r\n  background: var(--bvt-primary-color, #0288d1);\r\n}\r\n\r\n.timeline h2 {\r\n  padding: 5px 15px;\r\n  font-size: 1em;\r\n  background-color: var(--bvt-bg-secondary, #ddd);\r\n  margin-top: -8px;\r\n}\r\n\r\n.timeline p,\r\n.timeline time {\r\n  color: var(--bvt-timeline-text-color, #333);\r\n}\r\n.timeline::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 0;\r\n  border-left: 1px solid var(--bvt-timeline-color, #aaa);\r\n  height: 100%;\r\n  z-index: 1;\r\n  transform: translateX(-50%);\r\n}\r\n.timeline-content {\r\n  background-color: #fff;\r\n  border: 1px solid var(--bvt-border-color, #aaa);\r\n  position: relative;\r\n  border-radius: 0 0 10px 10px;\r\n  box-shadow: var(--bvt-box-shadow1, 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24));\r\n}\r\n.timeline-date {\r\n    padding: 5px 15px !important;\r\n  }\r\n.timeline-nodes:nth-child(odd) h3,\r\n.timeline-nodes:nth-child(odd) h2,\r\n.timeline-nodes:nth-child(odd) p {\r\n  text-align: right;\r\n}\r\n.timeline-nodes:nth-child(odd) .timeline-date {\r\n  text-align: left;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) .timeline-date {\r\n  text-align: right;\r\n}\r\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 100%;\r\n  width: 0;\r\n  border-left: 10px solid var(--bvt-primary-color, #0288d1);\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\r\n}\r\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 5%;\r\n  right: 100%;\r\n  width: 0;\r\n  border-right: 10px solid var(--bvt-primary-color, #0288d1);\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\r\n}\r\n.timeline-image {\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n.timeline-image::before {\r\n  content: \"\";\r\n  width: 100px;\r\n  height: 100px;\r\n  border: 1px solid var(--bvt-timeline-color, #aaa);\r\n  border-radius: 50%;\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  z-index: 1;\r\n}\r\n.timeline-image img {\r\n  position: relative;\r\n  z-index: 100;\r\n  width: 90px;\r\n  height: auto;\r\n}\r\n\r\n/*small device style*/\r\n\r\n@media (max-width: 767px) {\r\n  .timeline-nodes:nth-child(odd) h3,\r\n  .timeline-nodes:nth-child(odd) h2,\r\n  .timeline-nodes:nth-child(odd) p {\r\n    text-align: left;\r\n  }\r\n  .timeline-nodes:nth-child(even) {\r\n    flex-direction: row;\r\n  }\r\n  .timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 8.333333%;\r\n    width: 0;\r\n    border-left: 1px solid var(--bvt-timeline-color ,#aaa);\r\n    height: 100%;\r\n    z-index: 1;\r\n    transform: translateX(-50%);\r\n  }\r\n  .timeline h3 {\r\n    font-size: 1.7rem;\r\n  }\r\n  .timeline p {\r\n    font-size: 14px;\r\n  }\r\n  .timeline-image {\r\n    position: relative;\r\n    left: -4.333333%;\r\n    top: 60px;\r\n  }\r\n  .timeline-nodes:nth-child(odd) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    left: auto;\r\n    right: 100%;\r\n    width: 0;\r\n    border-left: 0;\r\n    border-right: 10px solid var(--bvt-primary-color, #0288d1);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n  }\r\n  .timeline-nodes:nth-child(even) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 100%;\r\n    width: 0;\r\n    border-right: 10px solid var(--bvt-primary-color, #0288d1);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n  }\r\n  .timeline-nodes:nth-child(even) .timeline-date {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\nspan.duration {\r\n  margin-left: 10px;\r\n  color: var(--bvt-duration-color, #0288d1);\r\n  font-style: italic;\r\n}\r\n</style>"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var VueBSTimeline = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('VueBSTimeline', VueBSTimeline);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};


// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default VueBSTimeline;
export { install };
