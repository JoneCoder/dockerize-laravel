import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    publicDir :(process.env.MIX_VUE_ROUTER_BASE) ? '/' + process.env.MIX_VUE_ROUTER_BASE + '/' : '/',
    build: {
        outDir: 'public/build',
        sourcemap: true,
        minify: 'esbuild',
        rollupOptions:{
            output:{
                entryFileNames:"assets/[name].js",
                chunkFileNames:"assets/[name].js",
                assetFileNames:"assets/[name].[ext]"
            }
        },

    },
});
