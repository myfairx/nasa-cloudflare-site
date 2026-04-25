// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  adapter: isDev
    ? node({ mode: 'standalone' })
    : cloudflare({
        imageService: 'cloudflare',
      }),
  output: isDev ? 'server' : 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
