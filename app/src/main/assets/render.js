import App from './App.js'

const Vue = globalThis.Vue

const app = new Vue({
    render: h => h(App),
})

app.$mount("#app")
