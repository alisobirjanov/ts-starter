import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      transformers: [
        transformerVariantGroup(),
      ],
    }),
  ],
})
