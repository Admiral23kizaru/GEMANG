import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const page = (name) => fileURLToPath(new URL(`./${name}/index.html`, import.meta.url))

export default defineConfig({
  base: '/GEMANG/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: page('projects'),
        qa: page('qa'),
        process: page('process'),
        skills: page('skills'),
        certifications: page('certifications'),
        experience: page('experience'),
        contact: page('contact'),
      },
    },
  },
})
