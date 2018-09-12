/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
// import router from './router/index.ts';
// import store from './stores/index.ts';

Vue.config.productionTip = false;
if ((module as any).hot) {
    (module as any).hot.accept();
}

/* eslint-disable no-new */
const vue = new Vue({
    el: '#app',
    // router,
    // store,
    components: {
        App,
    },
    template: '<App/>',
});

export default vue;
