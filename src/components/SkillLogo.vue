<template>
  <span class="logo-shell" aria-hidden="true">
    <svg v-if="brand" class="brand-logo" viewBox="0 0 24 24" focusable="false"><path :d="brand.path" :fill="fill" /></svg>
    <svg v-else class="generic-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path v-for="path in generic.paths" :key="path" :d="path" /></svg>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { siCapacitor, siCss, siDjango, siDocker, siExpo, siFirebase, siGit, siGithub, siHtml5, siIonic, siJavascript, siKalilinux, siLaravel, siMysql, siN8n, siNuxt, siPhp, siPostgresql, siPython, siReact, siVuedotjs } from 'simple-icons'

const props = defineProps({ icon: { type: String, required: true } })

const brands = {
  html5: siHtml5, css3: siCss, javascript: siJavascript, vue: siVuedotjs, nuxt: siNuxt,
  php: siPhp, laravel: siLaravel, python: siPython, django: siDjango, n8n: siN8n,
  mysql: siMysql, postgresql: siPostgresql, firebase: siFirebase, git: siGit, github: siGithub, docker: siDocker,
  ionic: siIonic, capacitor: siCapacitor, reactnative: siReact, expo: siExpo, kalilinux: siKalilinux,
}

const genericIcons = {
  'rule-ai': { paths: ['M7 4h10l3 3v10l-3 3H7l-3-3V7l3-3Z', 'M8 9h8M8 12h8M8 15h5', 'M12 4v5M12 15v5'] },
  qa: { paths: ['M12 3 4.5 6v5c0 4.7 3.1 8.7 7.5 10 4.4-1.3 7.5-5.3 7.5-10V6L12 3Z', 'm8.5 12 2.1 2.1 4.8-4.8'] },
  regression: { paths: ['M19 8V4l-2.1 2.1A7 7 0 0 0 5 10', 'M5 16v4l2.1-2.1A7 7 0 0 0 19 14', 'M5 10h3M16 14h3'] },
  documentation: { paths: ['M6 3h8l4 4v14H6z', 'M14 3v5h5', 'M9 12h6M9 16h6'] },
  hardware: { paths: ['m14.4 6.2 3.4-3.4 2.8 2.8-3.4 3.4', 'm12.4 8.2-7.6 7.6a2.1 2.1 0 0 0 3 3l7.6-7.6', 'M3.5 4.5 7 8l-2 2-3.5-3.5z'] },
  configuration: { paths: ['M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4', 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z'] },
  network: { paths: ['M12 4a2 2 0 1 0 0 .01M5 17a2 2 0 1 0 0 .01M19 17a2 2 0 1 0 0 .01', 'M12 6v5M10.2 12.2 6.8 15.1M13.8 12.2l3.4 2.9'] },
  system: { paths: ['M4 4h16v6H4zM4 14h16v6H4z', 'M7 7h.01M7 17h.01M11 7h6M11 17h6'] },
  reformat: { paths: ['M5 5h14v10H5z', 'M9 19h6', 'M12 15v4', 'm8 11 2 2 4-4'] },
  office: { paths: ['M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'] },
  workspace: { paths: ['M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z'] },
  correspondence: { paths: ['M4 6h16v12H4z', 'm4 8 8 5 8-5'] },
  tool: { paths: ['M5 5h14v14H5z', 'M8 9h8M8 13h8M8 17h5'] },
}

const brand = computed(() => brands[props.icon])
const generic = computed(() => genericIcons[props.icon] || genericIcons.tool)
const overrides = { django: '#44B78B', github: '#F4F7FB', expo: '#F4F7FB' }
const fill = computed(() => overrides[props.icon] || `#${brand.value.hex}`)
</script>

<style scoped>
.logo-shell{width:42px;height:42px;display:grid;place-items:center}.brand-logo,.generic-logo{width:27px;height:27px;display:block}.generic-logo{color:var(--cyan)}
</style>
