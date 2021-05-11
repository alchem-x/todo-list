import App from './App.js'

const Vue = window.Vue

const app = new Vue({
    render: h => h(App),
})

app.$mount("#app")
