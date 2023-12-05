import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { a as useSeoMeta } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("cube.82a35c56.svg");
const _imports_1 = "" + buildAssetsURL("secure.0042c8d2.svg");
const _imports_2 = "" + buildAssetsURL("planet.057d1758.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "GolDev | Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
      ogTitle: "GolDev",
      description: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u041F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u043C \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u043C\u0438",
      ogDescription: "\u041C\u043E\u043B\u043E\u0434\u0430\u044F \u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F IT \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0441\u0442\u0440\u0435\u043C\u044F\u0449\u0430\u044F\u0441\u044F \u043A \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u044F\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2013 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0435\u043B\u0430\u044E\u0442 \u0436\u0438\u0437\u043D\u044C \u043F\u0440\u043E\u0449\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435\u0435",
      author: "\u0413\u043E\u043B\u043E\u0442\u0438\u043D \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041F\u0430\u0432\u043B\u043E\u0432\u0438\u0447",
      robots: "index, follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page web-dev" }, _attrs))}><section class="page__main-section"><div class="page__main-section-content-wrapper"><h1 class="page__header">Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</h1><div class="page__description"><p> \u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0432\u044B\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u0435 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043E\u0442 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0434\u043E \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. </p></div></div><div class="page-picture"></div></section><section class="offer-section"><h1 class="page__header">\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C</h1><div class="offer-section__items"><div class="offer-section__item"><img${ssrRenderAttr("src", _imports_0)} width="220" height="220" class="offer-section__item-img"><div class="offer-section__item-description"> \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 </div></div><div class="offer-section__item"><img${ssrRenderAttr("src", _imports_1)} width="220" height="220" class="offer-section__item-img"><div class="offer-section__item-description"> \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0431-\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 </div></div><div class="offer-section__item"><img${ssrRenderAttr("src", _imports_2)} width="220" height="220" class="offer-section__item-img"><div class="offer-section__item-description"> \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0431-\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 </div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/web-dev/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-1bb95a64.mjs.map
