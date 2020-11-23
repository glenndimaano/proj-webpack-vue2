import './scss/style.scss'

import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
})

if (process.env.NODE_ENV === 'development') {
  if (module.hot) module.hot.accept()
}
