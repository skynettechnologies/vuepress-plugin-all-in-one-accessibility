import { defineClientConfig } from 'vuepress/client'
import type { AllinOneAccessibilityPluginOptions } from '../shared/index.js'
import { useAllinOneAccessibility } from './composables/index.js'

export default defineClientConfig({
  enhance() {
    useAllinOneAccessibility()
  },
})
