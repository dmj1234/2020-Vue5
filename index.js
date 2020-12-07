import m1, { s1, s2, say } from '/m1.js'
import './src/css/1.css'
import './src/css/1.less'
import './src/css/1.scss'
import App from './components/App.vue'

console.log(m1)
console.log(s1)
console.log(s2)
console.log(say)


import Vue from 'vue'
import App from './component.vue'

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})