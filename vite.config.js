import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    base: '/cours-4-frontend-bis/',
    build: {
        entryPoints: ['app.js'],
    },
});
