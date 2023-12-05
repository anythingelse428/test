import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, watch, withCtx, createVNode, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-6c200899.mjs';
import { b as useRoute } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = "" + buildAssetsURL("logo.ad530c1e.svg");
const _imports_1 = "" + buildAssetsURL("burger.3ef72217.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const isCollapsed = ref(false);
    const route = useRoute();
    watch(() => route.fullPath, () => {
      if (isCollapsed.value) {
        isCollapsed.value = false;
      }
    });
    watch(isCollapsed, () => {
      const $body = document.querySelector("body");
      if ($body) {
        isCollapsed.value ? $body.style.overflow = "hidden" : $body.style.overflow = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav-menu" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-menu__logo"${_scopeId}><img width="48" height="48"${ssrRenderAttr("src", _imports_0$1)} alt loading="lazy"${_scopeId}> GolDev </div>`);
          } else {
            return [
              createVNode("div", { class: "nav-menu__logo" }, [
                createVNode("img", {
                  width: "48",
                  height: "48",
                  src: _imports_0$1,
                  alt: "",
                  loading: "lazy"
                }),
                createTextVNode(" GolDev ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="nav-menu__collapse-trigger" role="button"><img width="48" height="48"${ssrRenderAttr("src", _imports_1)} alt="Burger" loading="lazy"></div><div class="${ssrRenderClass(`nav-menu__collapse ${unref(isCollapsed) ? "--collapsed" : ""}`)}">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-menu__item",
        to: "/#about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438`);
          } else {
            return [
              createTextVNode("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-menu__item",
        to: "/#projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u043E\u0435\u043A\u0442\u044B`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u043E\u0435\u043A\u0442\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-menu__item",
        to: "/#services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0423\u0441\u043B\u0443\u0433\u0438`);
          } else {
            return [
              createTextVNode("\u0423\u0441\u043B\u0443\u0433\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-menu__item",
        to: "/#process"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043E\u0442\u044B`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043E\u0442\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-menu__item",
        to: "/#contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B`);
          } else {
            return [
              createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar/NavigationMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("logo-light.be924b15.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer-col --contacts"><div class="footer-col__header"><div class="footer-logo"><img${ssrRenderAttr("src", _imports_0)} width="56" height="56" alt="GolDev"> GolDev </div></div><div class="footer-row"><a href="tel:+79867369425">+7 986 736-94-25</a></div><div class="footer-row"><a href="mailto:goldev@gmail.com">goldev@gmail.com</a></div></div><div class="footer-col --address"><div class="footer-col__header"> \u0410\u0434\u0440\u0435\u0441 </div><div class="footer-row"><a href="https://yandex.ru/maps/-/CDqUaH~E" target="_blank"> \u0413. \u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A \u0423\u043B. \u041E\u043C\u0441\u043A\u0430\u044F 4 </a></div></div><div class="footer-col --services"><div class="footer-col__header">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/#services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0423\u0441\u043B\u0443\u0433\u0438 `);
      } else {
        return [
          createTextVNode(" \u0423\u0441\u043B\u0443\u0433\u0438 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-row">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/analytics" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 `);
      } else {
        return [
          createTextVNode(" \u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-row">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/backend" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Backend `);
      } else {
        return [
          createTextVNode(" Backend ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-row">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/frontend" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Front-end `);
      } else {
        return [
          createTextVNode(" Front-end ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-row">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/web-dev" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 `);
      } else {
        return [
          createTextVNode(" Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-row">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/support" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 `);
      } else {
        return [
          createTextVNode(" \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout --default" }, _attrs))}><header>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</header><main class="main-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(TheFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-855ea39b.mjs.map
