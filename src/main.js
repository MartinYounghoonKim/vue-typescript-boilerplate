/* eslint-disable */
import Vue from 'vue';
import App from './App';
import router from './router/index.ts';
import store from './stores/index.ts';

Vue.config.productionTip = false;

if (module.hot) {
    module.hot.accept();
}

/* eslint-disable no-new */
const vue = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App,
    },
    template: '<App/>',
});

export default vue;
