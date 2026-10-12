import { createHotContext as __vite__createHotContext } from "/PORTFOLIO929/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/HomePage.vue");import SiteNav from"/PORTFOLIO929/src/components/SiteNav.vue";import SiteFooter from"/PORTFOLIO929/src/components/SiteFooter.vue";import{base,projects}from"/PORTFOLIO929/src/data/portfolio.js"
const _sfc_main = {
  __name: 'HomePage',
  setup(__props, { expose: __expose }) {
  __expose();

const __returned__ = { SiteNav, SiteFooter, get base() { return base }, get projects() { return projects } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createVNode as _createVNode, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createStaticVNode as _createStaticVNode } from "/PORTFOLIO929/node_modules/.vite/deps/vue.js?v=5eca7c4c"

const _hoisted_1 = { class: "page" }
const _hoisted_2 = { class: "hero" }
const _hoisted_3 = { class: "shell hero-grid" }
const _hoisted_4 = { class: "button-row" }
const _hoisted_5 = ["href"]
const _hoisted_6 = ["href"]
const _hoisted_7 = { class: "section" }
const _hoisted_8 = { class: "shell" }
const _hoisted_9 = { class: "featured" }
const _hoisted_10 = ["src", "alt"]
const _hoisted_11 = { class: "eyebrow" }
const _hoisted_12 = ["href"]
const _hoisted_13 = { class: "qa-tease dark" }
const _hoisted_14 = { class: "shell qa-grid" }
const _hoisted_15 = ["href"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["SiteNav"], { active: "home" }),
    _createElementVNode("main", null, [
      _createElementVNode("section", _hoisted_2, [
        _createElementVNode("div", _hoisted_3, [
          _createElementVNode("div", null, [
            _cache[0] || (_cache[0] = _createElementVNode("p", { class: "eyebrow" }, "Develop Â· Test Â· Improve", -1 /* CACHED */)),
            _cache[1] || (_cache[1] = _createElementVNode("h1", null, [
              _createTextVNode("Reliable software."),
              _createElementVNode("br"),
              _createElementVNode("em", null, "Evidence-led QA.")
            ], -1 /* CACHED */)),
            _cache[2] || (_cache[2] = _createElementVNode("p", null, "I build web and mobile applications, then help prove they work through structured testing, clear documentation, and attention to real user needs.", -1 /* CACHED */)),
            _createElementVNode("div", _hoisted_4, [
              _createElementVNode("a", {
                class: "button primary",
                href: $setup.base+'projects/'
              }, "View projects â", 8 /* PROPS */, _hoisted_5),
              _createElementVNode("a", {
                class: "button ghost",
                href: $setup.base+'qa/'
              }, "Explore QA work", 8 /* PROPS */, _hoisted_6)
            ])
          ]),
          _cache[3] || (_cache[3] = _createStaticVNode("<div class=\"hero-note\" data-v-2d1117dc><div class=\"code-window\" data-v-2d1117dc><div class=\"dots\" data-v-2d1117dc><i data-v-2d1117dc></i><i data-v-2d1117dc></i><i data-v-2d1117dc></i></div><code data-v-2d1117dc>plan()<br data-v-2d1117dc>test()<br data-v-2d1117dc>document()<br data-v-2d1117dc>improve()</code></div><p data-v-2d1117dc>Clean code.<br data-v-2d1117dc>Thoughtful testing.<br data-v-2d1117dc>Better software.</p></div>", 1))
        ])
      ]),
      _cache[9] || (_cache[9] = _createElementVNode("section", { class: "proof-bar" }, [
        _createElementVNode("div", { class: "shell" }, [
          _createElementVNode("strong", null, "Development and QA are one workflow."),
          _createElementVNode("span", null, "Build with intent Â· Validate with evidence Â· Communicate clearly")
        ])
      ], -1 /* CACHED */)),
      _createElementVNode("section", _hoisted_7, [
        _createElementVNode("div", _hoisted_8, [
          _cache[4] || (_cache[4] = _createElementVNode("div", { class: "section-head" }, [
            _createElementVNode("h2", null, "Work with proof."),
            _createElementVNode("p", null, "Selected systems and the QA documentation behind the work.")
          ], -1 /* CACHED */)),
          _createElementVNode("div", _hoisted_9, [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($setup.projects, (project) => {
              return (_openBlock(), _createElementBlock("article", {
                key: project.title
              }, [
                _createElementVNode("img", {
                  src: project.image,
                  alt: project.title
                }, null, 8 /* PROPS */, _hoisted_10),
                _createElementVNode("div", null, [
                  _createElementVNode("p", _hoisted_11, _toDisplayString(project.category), 1 /* TEXT */),
                  _createElementVNode("h3", null, _toDisplayString(project.title), 1 /* TEXT */),
                  _createElementVNode("p", null, _toDisplayString(project.description), 1 /* TEXT */),
                  _createElementVNode("a", {
                    href: $setup.base+'projects/'
                  }, "View project details â", 8 /* PROPS */, _hoisted_12)
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ]),
      _createElementVNode("section", _hoisted_13, [
        _createElementVNode("div", _hoisted_14, [
          _createElementVNode("div", null, [
            _cache[5] || (_cache[5] = _createElementVNode("p", { class: "eyebrow" }, "QA case study", -1 /* CACHED */)),
            _cache[6] || (_cache[6] = _createElementVNode("h2", null, "AI-CAKE testing portfolio", -1 /* CACHED */)),
            _cache[7] || (_cache[7] = _createElementVNode("p", { class: "muted" }, "A six-page evidence report covering role-based workflows, 181 PHP file checks, verified defects, payment-flow risk, and release-readiness recommendations.", -1 /* CACHED */)),
            _createElementVNode("a", {
              class: "button primary",
              href: $setup.base+'qa/'
            }, "Read QA case study â", 8 /* PROPS */, _hoisted_15)
          ]),
          _cache[8] || (_cache[8] = _createElementVNode("dl", null, [
            _createElementVNode("div", null, [
              _createElementVNode("dt", null, "181"),
              _createElementVNode("dd", null, "PHP files syntax-checked")
            ]),
            _createElementVNode("div", null, [
              _createElementVNode("dt", null, "3"),
              _createElementVNode("dd", null, "Role workspaces audited")
            ]),
            _createElementVNode("div", null, [
              _createElementVNode("dt", null, "6"),
              _createElementVNode("dd", null, "Verified defects documented")
            ])
          ], -1 /* CACHED */))
        ])
      ])
    ]),
    _createVNode($setup["SiteFooter"])
  ]))
}

import "/PORTFOLIO929/src/pages/HomePage.vue?vue&type=style&index=0&scoped=2d1117dc&lang.css"

_sfc_main.__hmrId = "2d1117dc"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.on('file-changed', ({ file }) => {
  __VUE_HMR_RUNTIME__.CHANGED_FILE = file
})
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/PORTFOLIO929/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-2d1117dc"],['__file',"C:/Users/Admin/Downloads/PORTFOLIO/GEMANG/src/pages/HomePage.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiSG9tZVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT48ZGl2IGNsYXNzPVwicGFnZVwiPjxTaXRlTmF2IGFjdGl2ZT1cImhvbWVcIi8+PG1haW4+PHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+PGRpdiBjbGFzcz1cInNoZWxsIGhlcm8tZ3JpZFwiPjxkaXY+PHAgY2xhc3M9XCJleWVicm93XCI+RGV2ZWxvcCDCtyBUZXN0IMK3IEltcHJvdmU8L3A+PGgxPlJlbGlhYmxlIHNvZnR3YXJlLjxici8+PGVtPkV2aWRlbmNlLWxlZCBRQS48L2VtPjwvaDE+PHA+SSBidWlsZCB3ZWIgYW5kIG1vYmlsZSBhcHBsaWNhdGlvbnMsIHRoZW4gaGVscCBwcm92ZSB0aGV5IHdvcmsgdGhyb3VnaCBzdHJ1Y3R1cmVkIHRlc3RpbmcsIGNsZWFyIGRvY3VtZW50YXRpb24sIGFuZCBhdHRlbnRpb24gdG8gcmVhbCB1c2VyIG5lZWRzLjwvcD48ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPjxhIGNsYXNzPVwiYnV0dG9uIHByaW1hcnlcIiA6aHJlZj1cImJhc2UrJ3Byb2plY3RzLydcIj5WaWV3IHByb2plY3RzIOKGkjwvYT48YSBjbGFzcz1cImJ1dHRvbiBnaG9zdFwiIDpocmVmPVwiYmFzZSsncWEvJ1wiPkV4cGxvcmUgUUEgd29yazwvYT48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaGVyby1ub3RlXCI+PGRpdiBjbGFzcz1cImNvZGUtd2luZG93XCI+PGRpdiBjbGFzcz1cImRvdHNcIj48aT48L2k+PGk+PC9pPjxpPjwvaT48L2Rpdj48Y29kZT5wbGFuKCk8YnIvPnRlc3QoKTxici8+ZG9jdW1lbnQoKTxici8+aW1wcm92ZSgpPC9jb2RlPjwvZGl2PjxwPkNsZWFuIGNvZGUuPGJyLz5UaG91Z2h0ZnVsIHRlc3RpbmcuPGJyLz5CZXR0ZXIgc29mdHdhcmUuPC9wPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cInByb29mLWJhclwiPjxkaXYgY2xhc3M9XCJzaGVsbFwiPjxzdHJvbmc+RGV2ZWxvcG1lbnQgYW5kIFFBIGFyZSBvbmUgd29ya2Zsb3cuPC9zdHJvbmc+PHNwYW4+QnVpbGQgd2l0aCBpbnRlbnQgwrcgVmFsaWRhdGUgd2l0aCBldmlkZW5jZSDCtyBDb21tdW5pY2F0ZSBjbGVhcmx5PC9zcGFuPjwvZGl2Pjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj48ZGl2IGNsYXNzPVwic2hlbGxcIj48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkXCI+PGgyPldvcmsgd2l0aCBwcm9vZi48L2gyPjxwPlNlbGVjdGVkIHN5c3RlbXMgYW5kIHRoZSBRQSBkb2N1bWVudGF0aW9uIGJlaGluZCB0aGUgd29yay48L3A+PC9kaXY+PGRpdiBjbGFzcz1cImZlYXR1cmVkXCI+PGFydGljbGUgdi1mb3I9XCJwcm9qZWN0IGluIHByb2plY3RzXCIgOmtleT1cInByb2plY3QudGl0bGVcIj48aW1nIDpzcmM9XCJwcm9qZWN0LmltYWdlXCIgOmFsdD1cInByb2plY3QudGl0bGVcIi8+PGRpdj48cCBjbGFzcz1cImV5ZWJyb3dcIj57e3Byb2plY3QuY2F0ZWdvcnl9fTwvcD48aDM+e3twcm9qZWN0LnRpdGxlfX08L2gzPjxwPnt7cHJvamVjdC5kZXNjcmlwdGlvbn19PC9wPjxhIDpocmVmPVwiYmFzZSsncHJvamVjdHMvJ1wiPlZpZXcgcHJvamVjdCBkZXRhaWxzIOKGkjwvYT48L2Rpdj48L2FydGljbGU+PC9kaXY+PC9kaXY+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzPVwicWEtdGVhc2UgZGFya1wiPjxkaXYgY2xhc3M9XCJzaGVsbCBxYS1ncmlkXCI+PGRpdj48cCBjbGFzcz1cImV5ZWJyb3dcIj5RQSBjYXNlIHN0dWR5PC9wPjxoMj5BSS1DQUtFIHRlc3RpbmcgcG9ydGZvbGlvPC9oMj48cCBjbGFzcz1cIm11dGVkXCI+QSBzaXgtcGFnZSBldmlkZW5jZSByZXBvcnQgY292ZXJpbmcgcm9sZS1iYXNlZCB3b3JrZmxvd3MsIDE4MSBQSFAgZmlsZSBjaGVja3MsIHZlcmlmaWVkIGRlZmVjdHMsIHBheW1lbnQtZmxvdyByaXNrLCBhbmQgcmVsZWFzZS1yZWFkaW5lc3MgcmVjb21tZW5kYXRpb25zLjwvcD48YSBjbGFzcz1cImJ1dHRvbiBwcmltYXJ5XCIgOmhyZWY9XCJiYXNlKydxYS8nXCI+UmVhZCBRQSBjYXNlIHN0dWR5IOKGkjwvYT48L2Rpdj48ZGw+PGRpdj48ZHQ+MTgxPC9kdD48ZGQ+UEhQIGZpbGVzIHN5bnRheC1jaGVja2VkPC9kZD48L2Rpdj48ZGl2PjxkdD4zPC9kdD48ZGQ+Um9sZSB3b3Jrc3BhY2VzIGF1ZGl0ZWQ8L2RkPjwvZGl2PjxkaXY+PGR0PjY8L2R0PjxkZD5WZXJpZmllZCBkZWZlY3RzIGRvY3VtZW50ZWQ8L2RkPjwvZGl2PjwvZGw+PC9kaXY+PC9zZWN0aW9uPjwvbWFpbj48U2l0ZUZvb3Rlci8+PC9kaXY+PC90ZW1wbGF0ZT5cbjxzY3JpcHQgc2V0dXA+aW1wb3J0IFNpdGVOYXYgZnJvbScuLi9jb21wb25lbnRzL1NpdGVOYXYudnVlJztpbXBvcnQgU2l0ZUZvb3RlciBmcm9tJy4uL2NvbXBvbmVudHMvU2l0ZUZvb3Rlci52dWUnO2ltcG9ydHtiYXNlLHByb2plY3RzfWZyb20nLi4vZGF0YS9wb3J0Zm9saW8nPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPi5oZXJve3BhZGRpbmc6MTA1cHggMCA4MHB4fS5oZXJvLWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxLjFmciAuOWZyO2dhcDo3MHB4O2FsaWduLWl0ZW1zOmNlbnRlcn0uaGVybyBoMXtmb250LXNpemU6Y2xhbXAoMy43cmVtLDd2dyw3cmVtKTtsaW5lLWhlaWdodDouOTtsZXR0ZXItc3BhY2luZzotLjA4NWVtO21hcmdpbjoyNXB4IDB9Lmhlcm8gaDEgZW17Zm9udC1zdHlsZTpub3JtYWw7Y29sb3I6dmFyKC0tYmx1ZSl9Lmhlcm8gaDErcHttYXgtd2lkdGg6NjAwcHg7Y29sb3I6dmFyKC0taW5rLXNvZnQpO2ZvbnQtc2l6ZToxLjA4cmVtfS5oZXJvLW5vdGV7bWluLWhlaWdodDozOTBweDtiYWNrZ3JvdW5kOnZhcigtLW5hdnkpO3BhZGRpbmc6MjhweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2NvbG9yOnZhcigtLXdoaXRlKTtib3gtc2hhZG93OjIwcHggMjBweCAwIHZhcigtLWJsdWUtc29mdCl9LmNvZGUtd2luZG93e2JhY2tncm91bmQ6IzBlMzE1ZTtwYWRkaW5nOjIxcHg7Zm9udC1mYW1pbHk6dmFyKC0tbW9ubyl9LmRvdHN7ZGlzcGxheTpmbGV4O2dhcDo2cHg7bWFyZ2luLWJvdHRvbTozNXB4fS5kb3RzIGl7d2lkdGg6OHB4O2hlaWdodDo4cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1hbWJlcil9Y29kZXtmb250OjUwMCAxLjNyZW0vMS44IHZhcigtLW1vbm8pO2NvbG9yOiNkOGU3ZmZ9Lmhlcm8tbm90ZT5we2FsaWduLXNlbGY6ZW5kO21hcmdpbjowO3RleHQtYWxpZ246cmlnaHQ7Zm9udC1zdHlsZTppdGFsaWM7Zm9udC1zaXplOjEuMXJlbX0ucHJvb2YtYmFye2JvcmRlci1ibG9jazoxcHggc29saWQgdmFyKC0tbGluZSk7cGFkZGluZzoyNXB4IDB9LnByb29mLWJhciAuc2hlbGx7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDoyMHB4fS5wcm9vZi1iYXIgc3Bhbntjb2xvcjp2YXIoLS1pbmstc29mdCk7Zm9udC1zaXplOi44OHJlbX0uZmVhdHVyZWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDoyNnB4fS5mZWF0dXJlZCBhcnRpY2xle2JvcmRlcjoxcHggc29saWQgdmFyKC0tbGluZSk7YmFja2dyb3VuZDp2YXIoLS13aGl0ZSl9LmZlYXR1cmVkIGltZ3t3aWR0aDoxMDAlO2FzcGVjdC1yYXRpbzoxLjcyO29iamVjdC1maXQ6Y292ZXI7b2JqZWN0LXBvc2l0aW9uOnRvcDtkaXNwbGF5OmJsb2NrO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWxpbmUpfS5mZWF0dXJlZCBhcnRpY2xlPmRpdntwYWRkaW5nOjI1cHh9LmZlYXR1cmVkIGgze2ZvbnQtc2l6ZToxLjQ1cmVtO2xpbmUtaGVpZ2h0OjEuMTttYXJnaW46MTZweCAwIDEwcHh9LmZlYXR1cmVkIHA6bm90KC5leWVicm93KXtjb2xvcjp2YXIoLS1pbmstc29mdCk7Zm9udC1zaXplOi45MnJlbX0uZmVhdHVyZWQgYXtmb250LXdlaWdodDo4MDA7Y29sb3I6dmFyKC0tYmx1ZSk7Zm9udC1zaXplOi44OHJlbX0ucWEtdGVhc2V7cGFkZGluZzo5MHB4IDB9LnFhLWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDo5MHB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ucWEtZ3JpZCBoMntmb250LXNpemU6Y2xhbXAoMi41cmVtLDV2dyw0LjdyZW0pO2xpbmUtaGVpZ2h0Oi45NTtsZXR0ZXItc3BhY2luZzotLjA3ZW07bWFyZ2luOjIycHggMH0ucWEtZ3JpZCAuYnV0dG9ue21hcmdpbi10b3A6MjVweH0ucWEtZ3JpZCBkbHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLDFmcik7Z2FwOjFweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjE2KTttYXJnaW46MH0ucWEtZ3JpZCBkbCBkaXZ7cGFkZGluZzoyOHB4IDIwcHg7YmFja2dyb3VuZDp2YXIoLS1uYXZ5KX1kdHtmb250LXNpemU6Mi44cmVtO2ZvbnQtd2VpZ2h0OjgwMDtsZXR0ZXItc3BhY2luZzotLjA3ZW07Y29sb3I6I2I5ZDRmZn1kZHttYXJnaW46NnB4IDAgMDtjb2xvcjojYjljN2RhO2ZvbnQtc2l6ZTouODJyZW19QG1lZGlhKG1heC13aWR0aDo3NjBweCl7Lmhlcm8tZ3JpZCwucWEtZ3JpZCwuZmVhdHVyZWR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcn0uaGVyb3twYWRkaW5nLXRvcDo3MHB4fS5wcm9vZi1iYXIgLnNoZWxse2Rpc3BsYXk6YmxvY2t9LnByb29mLWJhciBzcGFue2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDo4cHh9LnFhLWdyaWR7Z2FwOjQwcHh9LnFhLWdyaWQgZGx7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnJ9fTwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiJBQUNjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7cUJBRDlJLEtBQUssRUFBQyxNQUFNO3FCQUF3QyxLQUFLLEVBQUMsTUFBTTtxQkFBTSxLQUFLLEVBQUMsaUJBQWlCO3FCQUEyUSxLQUFLLEVBQUMsWUFBWTs7O3FCQUE2a0IsS0FBSyxFQUFDLFNBQVM7cUJBQU0sS0FBSyxFQUFDLE9BQU87cUJBQWdJLEtBQUssRUFBQyxVQUFVOztzQkFBbUgsS0FBSyxFQUFDLFNBQVM7O3NCQUFzTCxLQUFLLEVBQUMsZUFBZTtzQkFBTSxLQUFLLEVBQUMsZUFBZTs7Ozt3QkFBdCtDLG9CQUFxZ0UsT0FBcmdFLFVBQXFnRTtJQUFuL0QsYUFBd0IscUJBQWYsTUFBTSxFQUFDLE1BQU07SUFBRSxvQkFBdzhEO01BQWw4RCxvQkFBbXRCLFdBQW50QixVQUFtdEI7UUFBN3JCLG9CQUFtckIsT0FBbnJCLFVBQW1yQjtVQUF0cEIsb0JBQTZhO3NDQUF4YSxvQkFBK0MsT0FBNUMsS0FBSyxFQUFDLFNBQVMsSUFBQywwQkFBd0I7c0NBQUksb0JBQXlEOytCQUFyRCxvQkFBa0I7Y0FBQSxvQkFBSztjQUFBLG9CQUF5QixZQUFyQixrQkFBZ0I7O3NDQUFVLG9CQUF3SixXQUFySixtSkFBaUo7WUFBSSxvQkFBa0ssT0FBbEssVUFBa0s7Y0FBMUksb0JBQXNFO2dCQUFuRSxLQUFLLEVBQUMsZ0JBQWdCO2dCQUFFLElBQUksRUFBRSxXQUFJO2lCQUFjLGlCQUFlO2NBQUksb0JBQThEO2dCQUEzRCxLQUFLLEVBQUMsY0FBYztnQkFBRSxJQUFJLEVBQUUsV0FBSTtpQkFBUSxpQkFBZTs7Ozs7O2dDQUFtUSxvQkFBZ00sYUFBdkwsS0FBSyxFQUFDLFdBQVc7UUFBQyxvQkFBMkosU0FBdEosS0FBSyxFQUFDLE9BQU87VUFBQyxvQkFBcUQsZ0JBQTdDLHNDQUFvQztVQUFTLG9CQUE2RSxjQUF2RSxrRUFBZ0U7OztNQUF1QixvQkFBMGUsV0FBMWUsVUFBMGU7UUFBamQsb0JBQXVjLE9BQXZjLFVBQXVjO29DQUFwYixvQkFBMEgsU0FBckgsS0FBSyxFQUFDLGNBQWM7WUFBQyxvQkFBeUIsWUFBckIsa0JBQWdCO1lBQUssb0JBQWlFLFdBQTlELDREQUEwRDs7VUFBVSxvQkFBb1QsT0FBcFQsVUFBb1Q7K0JBQTlSLG9CQUF3Uiw2QkFBN1AsZUFBUSxHQUFuQixPQUFPO29DQUF2QixvQkFBd1I7Z0JBQWxQLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSzs7Z0JBQUUsb0JBQWdEO2tCQUExQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUs7a0JBQUcsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLOztnQkFBRyxvQkFBb0s7a0JBQS9KLG9CQUEyQyxLQUEzQyxXQUEyQyxtQkFBdEIsT0FBTyxDQUFDLFFBQVE7a0JBQU0sb0JBQTBCLDZCQUFwQixPQUFPLENBQUMsS0FBSztrQkFBTyxvQkFBOEIsNEJBQXpCLE9BQU8sQ0FBQyxXQUFXO2tCQUFNLG9CQUFzRDtvQkFBbEQsSUFBSSxFQUFFLFdBQUk7cUJBQWMsd0JBQXNCOzs7Ozs7O01BQTBDLG9CQUE4akIsV0FBOWpCLFdBQThqQjtRQUEvaEIsb0JBQXFoQixPQUFyaEIsV0FBcWhCO1VBQTFmLG9CQUFxVTtzQ0FBaFUsb0JBQW9DLE9BQWpDLEtBQUssRUFBQyxTQUFTLElBQUMsZUFBYTtzQ0FBSSxvQkFBa0MsWUFBOUIsMkJBQXlCO3NDQUFLLG9CQUErSyxPQUE1SyxLQUFLLEVBQUMsT0FBTyxJQUFDLDRKQUEwSjtZQUFJLG9CQUFxRTtjQUFsRSxLQUFLLEVBQUMsZ0JBQWdCO2NBQUUsSUFBSSxFQUFFLFdBQUk7ZUFBUSxzQkFBb0I7O29DQUFVLG9CQUErSztZQUEzSyxvQkFBd0Q7Y0FBbkQsb0JBQVksWUFBUixLQUFHO2NBQUssb0JBQWlDLFlBQTdCLDBCQUF3Qjs7WUFBVyxvQkFBcUQ7Y0FBaEQsb0JBQVUsWUFBTixHQUFDO2NBQUssb0JBQWdDLFlBQTVCLHlCQUF1Qjs7WUFBVyxvQkFBeUQ7Y0FBcEQsb0JBQVUsWUFBTixHQUFDO2NBQUssb0JBQW9DLFlBQWhDLDZCQUEyQjs7Ozs7O0lBQXVDLGFBQWEiLCJpZ25vcmVMaXN0IjpbXX0=
