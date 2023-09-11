import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Eldin + Emana',
          description: 'Srdačno vas pozivamo da naše venčanje učinite još posebnijim svojim prisustvom. Kreirali smo ovu platformu kako bismo na interaktivan način olakšali potvrdu vašeg dolaska, bilo da se odlučite za dolazak u hotel ili za učešće u svatovima. Radujemo se vašem odgovoru!',
          url: 'https://wediiz.com',
          image: 'https://wediiz.com/ee-logo.png',
          faviconHref: 'https://wediiz.com/favicon.ico',
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Configure the alias for your source directory
    }
  }
})
