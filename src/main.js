import { createApp, provide, h } from "vue"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "./stores/apollo-client"
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const pinia = createPinia()

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

app.use(pinia)
app.use(router)

app.mount('#app');