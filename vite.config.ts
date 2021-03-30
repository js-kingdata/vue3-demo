import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), ViteComponents()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@views': path.resolve(__dirname, './src/views'),
            '@': path.resolve(__dirname, './src')
        }
    }
})
