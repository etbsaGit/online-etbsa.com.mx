/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#388E3C',
          secondary: '#2D3753',
          accent: '#9E9D24',
          error: '#f44336',
          info: '#2d3753',
          success: '#7a904a',
          warning: '#f78012',
        },
      },
    },
  },
})
