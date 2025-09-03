import type { Plugin, PluginObject } from 'vuepress/core'
import { getDirname, logger, path } from 'vuepress/utils'
import type { AllinOneAccessibilityPluginOptions } from '../shared/index.js'

const __dirname = import.meta.dirname || getDirname(import.meta.url)

export const AllinOneAccessibilityPlugin =
  (options: AllinOneAccessibilityPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: 'vuepress-plugin-all-in-one-accessibility',
    }

    return {
      ...plugin,

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      define: {
        __GA_OPTIONS__: options,
      },
    }
  }
