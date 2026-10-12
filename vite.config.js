import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const page = (name) => fileURLToPath(new URL(`./${name}/index.html`, import.meta.url))

export default defineConfig({
  // GitHub Pages publishes this repository at https://admiral23kizaru.github.io/GEMANG/
  base: '/GEMANG/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: page('projects'),
        qa: page('qa'),
        skills: page('skills'),
        certifications: page('certifications'),
        experience: page('experience'),
        contact: page('contact'),
      },
    },
  },
})
