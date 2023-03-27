import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/TestViteReactApp/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // workbox: {
      //   globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      // },
      manifest: {
        name: "TestReactApp",
        short_name: "TestReactApp",
        icons: [
          {
            src: "./icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          }
        ],
        start_url: "index.html",
        // "start_url": "./",
        // scope: "./",
        display: "standalone",
        background_color: "#3E4EB8",
        theme_color: "#2F3BA2"
      }
    })
  ],
});
