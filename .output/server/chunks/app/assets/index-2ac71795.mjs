import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6c200899.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$1, a as _imports_1$1 } from './support-2eb6d664.mjs';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
import '../server.mjs';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    isReversed: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "marquee-container" }, _attrs))}><div class="items-list"><div class="${ssrRenderClass(`items marquee ${__props.isReversed ? "reverse" : ""}`)}"><div class="item">.NET</div><div class="item">Kafka</div><div class="item">JavaScript</div><div class="item">MQTT</div><div class="item">Vue</div><div class="item">C#</div><div class="item">PostgreSQL</div><div class="item">MSSQL</div><div class="item">Nuxt</div><div class="item">EntityFramework</div><div class="item">RabbitMQ</div><div class="item">TypeScript</div><div class="item">Redis</div><div class="item">REST</div><div class="item">K8s</div></div><div aria-hidden="true" class="${ssrRenderClass(`items marquee ${__props.isReversed ? "reverse" : ""}`)}"><div class="item">.NET</div><div class="item">Kafka</div><div class="item">JavaScript</div><div class="item">MQTT</div><div class="item">Vue</div><div class="item">C#</div><div class="item">PostgreSQL</div><div class="item">MSSQL</div><div class="item">Nuxt</div><div class="item">EntityFramework</div><div class="item">RabbitMQ</div><div class="item">TypeScript</div><div class="item">Redis</div><div class="item">REST</div><div class="item">K8s</div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Marquee/Marquee.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    message: {},
    type: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `alert ${_ctx.type === "error" ? "--error" : ""}`
      }, _attrs))}>${ssrInterpolate(_ctx.message)}</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Alert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("5.c32bd595.png");
const _imports_1 = "" + buildAssetsURL("slide1.0a79cec7.png");
const _imports_2 = "" + buildAssetsURL("slide2.275d1bcd.png");
const _imports_3 = "" + buildAssetsURL("slide3.fe85a3c0.png");
const _imports_4 = "" + buildAssetsURL("analytics.8c363472.svg");
const _imports_5 = "" + buildAssetsURL("web.e340a599.svg");
const _imports_6 = "" + buildAssetsURL("fullstack.47fd4b8b.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isMount = ref(false);
    const modules = [Navigation];
    const email = ref("");
    const tel = ref("");
    const isAlertShow = ref(false);
    let alertType = "info";
    let alertMessage = "";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Marquee = _sfc_main$2;
      const _component_Alert = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><section id="hero" class="hero"><div class="hero-content"><h1 class="hero__header">\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</h1><div class="hero__description">\u041F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u043C \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u043C\u0438</div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "#contacts",
        class: "hero__contact-us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442`);
          } else {
            return [
              createTextVNode("\u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><img class="hero-img" width="634" height="529"${ssrRenderAttr("src", _imports_0)} loading="eager"></section>`);
      _push(ssrRenderComponent(_component_Marquee, { class: "marquee-divider" }, null, _parent));
      _push(`<section id="about" class="about"><h1 class="about__header">\u041E \u043D\u0430\u0441</h1><div class="about__description"> \u041C\u044B - \u043C\u043E\u043B\u043E\u0434\u0430\u044F \u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F IT \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0441\u0442\u0440\u0435\u043C\u044F\u0449\u0430\u044F\u0441\u044F \u043A \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u044F\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2013 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0435\u043B\u0430\u044E\u0442 \u0436\u0438\u0437\u043D\u044C \u043F\u0440\u043E\u0449\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435\u0435 </div></section>`);
      _push(ssrRenderComponent(_component_Marquee, {
        class: "marquee-divider--reversed",
        "is-reversed": true
      }, null, _parent));
      _push(`<section id="concept" class="concept"><h1 class="concept__header">\u041D\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445</h1><div class="concept-items"><div class="concept-item"><div class="concept-item__counter">1</div><div class="concept-item__title">\u0418\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438</div><div class="concept-item__description">\u0421\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u043D\u0434\u0430\u043C\u0438 \u0438 \u0432\u043D\u0435\u0434\u0440\u044F\u0435\u043C \u0438\u0445 \u0432 \u043D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</div></div><div class="concept-item"><div class="concept-item__counter">2</div><div class="concept-item__title">\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E</div><div class="concept-item__description">\u0421\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u043A \u0432\u044B\u0441\u043E\u043A\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0443 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0430\u0441\u043F\u0435\u043A\u0442\u0435 \u043D\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B</div></div><div class="concept-item"><div class="concept-item__counter">3</div><div class="concept-item__title">\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E</div><div class="concept-item__description"> \u0412\u0435\u0440\u0438\u043C \u0432 \u0441\u0438\u043B\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u0438\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0438\u0445 \u0446\u0435\u043B\u0435\u0439 </div></div></div></section><section id="projects" class="projects"><div class="projects__header">\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</div>`);
      if (unref(isMount)) {
        _push(`<div class="projects-slider">`);
        _push(ssrRenderComponent(unref(Swiper), {
          modules,
          "slides-per-view": 1,
          grabCursor: true,
          "centered-slides": true,
          loop: true,
          navigation: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="projects-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C" class="projects-slide__img" loading="lazy" fetchpriority="low"${_scopeId2}><div class="projects-slide__content"${_scopeId2}><div class="projects-slide__name"${_scopeId2}>\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C</div><div class="projects-slide__stack"${_scopeId2}> \u0421\u0442\u0435\u043A: <div class="projects-slide__stack-item"${_scopeId2}>MSSQL</div><div class="projects-slide__stack-item"${_scopeId2}>.NET</div><div class="projects-slide__stack-item"${_scopeId2}>MQTT</div><div class="projects-slide__stack-item"${_scopeId2}>Nuxt</div><div class="projects-slide__stack-item"${_scopeId2}>TypeScript</div><div class="projects-slide__stack-item"${_scopeId2}>SCSS</div><div class="projects-slide__stack-item"${_scopeId2}>Pinia</div></div><div class="projects-slide__description"${_scopeId2}> \u041F\u0440\u043E\u0435\u043A\u0442 \u0443\u043C\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Moio, \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u043B\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0434\u043E\u043C\u0430. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435\u043C, \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435\u043C \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0432 \u0434\u043E\u043C\u0435 </div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "projects-slide" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C",
                          class: "projects-slide__img",
                          loading: "lazy",
                          fetchpriority: "low"
                        }),
                        createVNode("div", { class: "projects-slide__content" }, [
                          createVNode("div", { class: "projects-slide__name" }, "\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C"),
                          createVNode("div", { class: "projects-slide__stack" }, [
                            createTextVNode(" \u0421\u0442\u0435\u043A: "),
                            createVNode("div", { class: "projects-slide__stack-item" }, "MSSQL"),
                            createVNode("div", { class: "projects-slide__stack-item" }, ".NET"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "MQTT"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "Nuxt"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "TypeScript"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "SCSS"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "Pinia")
                          ]),
                          createVNode("div", { class: "projects-slide__description" }, " \u041F\u0440\u043E\u0435\u043A\u0442 \u0443\u043C\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Moio, \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u043B\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0434\u043E\u043C\u0430. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435\u043C, \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435\u043C \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0432 \u0434\u043E\u043C\u0435 ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="projects-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439" class="projects-slide__img" loading="lazy" fetchpriority="low"${_scopeId2}><div class="projects-slide__content"${_scopeId2}><div class="projects-slide__name"${_scopeId2}>\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</div><div class="projects-slide__stack"${_scopeId2}> \u0421\u0442\u0435\u043A: <div class="projects-slide__stack-item"${_scopeId2}>.NET</div><div class="projects-slide__stack-item"${_scopeId2}>Kafka</div><div class="projects-slide__stack-item"${_scopeId2}>TCP/IP</div><div class="projects-slide__stack-item"${_scopeId2}>ASP .NET core</div><div class="projects-slide__stack-item"${_scopeId2}>PostgreSQL</div></div><div class="projects-slide__description"${_scopeId2}> \u0411\u044B\u043B\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u043F\u0440\u043E\u0441\u043B\u043E\u0439\u043A\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0430\u044F \u0431\u0435\u0441\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432\u0441\u0435\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430 \u043F\u0440\u0438 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u0445 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u0430\u043D\u0430\u043B </div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "projects-slide" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
                          class: "projects-slide__img",
                          loading: "lazy",
                          fetchpriority: "low"
                        }),
                        createVNode("div", { class: "projects-slide__content" }, [
                          createVNode("div", { class: "projects-slide__name" }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"),
                          createVNode("div", { class: "projects-slide__stack" }, [
                            createTextVNode(" \u0421\u0442\u0435\u043A: "),
                            createVNode("div", { class: "projects-slide__stack-item" }, ".NET"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "Kafka"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "TCP/IP"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "ASP .NET core"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "PostgreSQL")
                          ]),
                          createVNode("div", { class: "projects-slide__description" }, " \u0411\u044B\u043B\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u043F\u0440\u043E\u0441\u043B\u043E\u0439\u043A\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0430\u044F \u0431\u0435\u0441\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432\u0441\u0435\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430 \u043F\u0440\u0438 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u0445 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u0430\u043D\u0430\u043B ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="projects-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt="\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430" class="projects-slide__img" loading="lazy" fetchpriority="low"${_scopeId2}><div class="projects-slide__content"${_scopeId2}><div class="projects-slide__name"${_scopeId2}>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430</div><div class="projects-slide__stack"${_scopeId2}> \u0421\u0442\u0435\u043A: <div class="projects-slide__stack-item"${_scopeId2}>PostgreSQL</div><div class="projects-slide__stack-item"${_scopeId2}>Oracle</div></div><div class="projects-slide__description"${_scopeId2}> \u041D\u0430\u0448\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430 \u043D\u0430 SQL \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0431\u0430\u0433\u0430\u0436\u0430 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 - \u043E\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043E \u043F\u043E\u0441\u0430\u0434\u043A\u0438 \u043D\u0430 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 </div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "projects-slide" }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430",
                          class: "projects-slide__img",
                          loading: "lazy",
                          fetchpriority: "low"
                        }),
                        createVNode("div", { class: "projects-slide__content" }, [
                          createVNode("div", { class: "projects-slide__name" }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430"),
                          createVNode("div", { class: "projects-slide__stack" }, [
                            createTextVNode(" \u0421\u0442\u0435\u043A: "),
                            createVNode("div", { class: "projects-slide__stack-item" }, "PostgreSQL"),
                            createVNode("div", { class: "projects-slide__stack-item" }, "Oracle")
                          ]),
                          createVNode("div", { class: "projects-slide__description" }, " \u041D\u0430\u0448\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430 \u043D\u0430 SQL \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0431\u0430\u0433\u0430\u0436\u0430 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 - \u043E\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043E \u043F\u043E\u0441\u0430\u0434\u043A\u0438 \u043D\u0430 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "projects-slide" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C",
                        class: "projects-slide__img",
                        loading: "lazy",
                        fetchpriority: "low"
                      }),
                      createVNode("div", { class: "projects-slide__content" }, [
                        createVNode("div", { class: "projects-slide__name" }, "\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C"),
                        createVNode("div", { class: "projects-slide__stack" }, [
                          createTextVNode(" \u0421\u0442\u0435\u043A: "),
                          createVNode("div", { class: "projects-slide__stack-item" }, "MSSQL"),
                          createVNode("div", { class: "projects-slide__stack-item" }, ".NET"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "MQTT"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "Nuxt"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "TypeScript"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "SCSS"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "Pinia")
                        ]),
                        createVNode("div", { class: "projects-slide__description" }, " \u041F\u0440\u043E\u0435\u043A\u0442 \u0443\u043C\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Moio, \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u043B\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0434\u043E\u043C\u0430. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435\u043C, \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435\u043C \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0432 \u0434\u043E\u043C\u0435 ")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "projects-slide" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
                        class: "projects-slide__img",
                        loading: "lazy",
                        fetchpriority: "low"
                      }),
                      createVNode("div", { class: "projects-slide__content" }, [
                        createVNode("div", { class: "projects-slide__name" }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"),
                        createVNode("div", { class: "projects-slide__stack" }, [
                          createTextVNode(" \u0421\u0442\u0435\u043A: "),
                          createVNode("div", { class: "projects-slide__stack-item" }, ".NET"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "Kafka"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "TCP/IP"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "ASP .NET core"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "PostgreSQL")
                        ]),
                        createVNode("div", { class: "projects-slide__description" }, " \u0411\u044B\u043B\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u043F\u0440\u043E\u0441\u043B\u043E\u0439\u043A\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0430\u044F \u0431\u0435\u0441\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432\u0441\u0435\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430 \u043F\u0440\u0438 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u0445 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u0430\u043D\u0430\u043B ")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "projects-slide" }, [
                      createVNode("img", {
                        src: _imports_3,
                        alt: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430",
                        class: "projects-slide__img",
                        loading: "lazy",
                        fetchpriority: "low"
                      }),
                      createVNode("div", { class: "projects-slide__content" }, [
                        createVNode("div", { class: "projects-slide__name" }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430"),
                        createVNode("div", { class: "projects-slide__stack" }, [
                          createTextVNode(" \u0421\u0442\u0435\u043A: "),
                          createVNode("div", { class: "projects-slide__stack-item" }, "PostgreSQL"),
                          createVNode("div", { class: "projects-slide__stack-item" }, "Oracle")
                        ]),
                        createVNode("div", { class: "projects-slide__description" }, " \u041D\u0430\u0448\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0431\u0430\u0433\u0430\u0436\u0430 \u043D\u0430 SQL \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0431\u0430\u0433\u0430\u0436\u0430 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 - \u043E\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043E \u043F\u043E\u0441\u0430\u0434\u043A\u0438 \u043D\u0430 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 ")
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section id="services" class="services"><h1 class="services__header">\u0423\u0441\u043B\u0443\u0433\u0438</h1><div class="services-container">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/analytics" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="services__item"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} width="193" height="193" alt="\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430" class="services__item-img" loading="lazy" fetchpriority="low"${_scopeId}><div class="services__item-name"${_scopeId}>\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</div></div>`);
          } else {
            return [
              createVNode("div", { class: "services__item" }, [
                createVNode("img", {
                  src: _imports_4,
                  width: "193",
                  height: "193",
                  alt: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430",
                  class: "services__item-img",
                  loading: "lazy",
                  fetchpriority: "low"
                }),
                createVNode("div", { class: "services__item-name" }, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/web-dev" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="services__item"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} width="160" height="122" alt="Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430" class="services__item-img" loading="lazy" fetchpriority="low"${_scopeId}><div class="services__item-name"${_scopeId}>Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</div></div>`);
          } else {
            return [
              createVNode("div", { class: "services__item" }, [
                createVNode("img", {
                  src: _imports_5,
                  width: "160",
                  height: "122",
                  alt: "Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
                  class: "services__item-img",
                  loading: "lazy",
                  fetchpriority: "low"
                }),
                createVNode("div", { class: "services__item-name" }, "Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/frontend" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="services__item"${_scopeId}><img${ssrRenderAttr("src", _imports_6)} width="180" height="180" alt="Fullstack" class="services__item-img" loading="lazy" fetchpriority="low"${_scopeId}><div class="services__item-name"${_scopeId}>Frontend</div></div>`);
          } else {
            return [
              createVNode("div", { class: "services__item" }, [
                createVNode("img", {
                  src: _imports_6,
                  width: "180",
                  height: "180",
                  alt: "Fullstack",
                  class: "services__item-img",
                  loading: "lazy",
                  fetchpriority: "low"
                }),
                createVNode("div", { class: "services__item-name" }, "Frontend")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/backend" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="services__item"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} width="188" height="188" alt="Backend" class="services__item-img" loading="lazy" fetchpriority="low"${_scopeId}><div class="services__item-name"${_scopeId}>Backend</div></div>`);
          } else {
            return [
              createVNode("div", { class: "services__item" }, [
                createVNode("img", {
                  src: _imports_0$1,
                  width: "188",
                  height: "188",
                  alt: "Backend",
                  class: "services__item-img",
                  loading: "lazy",
                  fetchpriority: "low"
                }),
                createVNode("div", { class: "services__item-name" }, "Backend")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/support" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="services__item"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} width="112" height="112" alt="\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439" class="services__item-img" loading="lazy" fetchpriority="low"${_scopeId}><div class="services__item-name"${_scopeId}>\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439</div></div>`);
          } else {
            return [
              createVNode("div", { class: "services__item" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  width: "112",
                  height: "112",
                  alt: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439",
                  class: "services__item-img",
                  loading: "lazy",
                  fetchpriority: "low"
                }),
                createVNode("div", { class: "services__item-name" }, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="process" class="process"><h1 class="process__header">\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043E\u0442\u044B</h1><ol class="process-steps"><li class="process-step"><div class="process-step-wrapper"><div class="process-step__header">\u041E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430</div><div class="process-step__content">\u041D\u0430\u0437\u043D\u0430\u0447\u0430\u0435\u043C \u0432\u0441\u0442\u0440\u0435\u0447\u0443 \u0438 \u043E\u0431\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442 \u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443</div></div></li><li class="process-step"><div class="process-step-wrapper"><div class="process-step__header">\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0422\u0417</div><div class="process-step__content">\u0410\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043C \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0438\u0435</div></div></li><li class="process-step"><div class="process-step-wrapper"><div class="process-step__header">\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F</div><div class="process-step__content">\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F</div></div></li><li class="process-step"><div class="process-step-wrapper"><div class="process-step__header">\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 </div><div class="process-step__content">\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043C \u0433\u043E\u0442\u043E\u0432\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0438 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043C \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443</div></div></li></ol></section><section id="contacts" class="contact"><h1 class="contact__header"> \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E </h1><form class="contact-form"><div class="contact-form__header">\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438, \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u0435\u043C \u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u0432\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C!</div><div class="contact-form__input-group-wrapper"><div class="contact-form__input-group"><label for="email" class="contact-form__input-group-label">Email</label><input${ssrRenderAttr("value", unref(email))} type="email" autocomplete="email" name="email" class="contact-form__input-group-input" id="email" required></div><div class="contact-form__input-group"><label for="tel" class="contact-form__input-group-label">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><input${ssrRenderAttr("value", unref(tel))} type="tel" autocomplete="tel" name="tel" class="contact-form__input-group-input" id="tel" required></div><br><input type="submit" value="\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" class="contact-form__submit"></div></form></section>`);
      _push(ssrRenderComponent(_component_Alert, {
        style: unref(isAlertShow) ? null : { display: "none" },
        message: unref(alertMessage),
        type: unref(alertType)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2ac71795.mjs.map
