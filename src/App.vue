<template>
    <div id="app">
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'App',
    })

    export default class App extends Vue {
        constructor () {
            super();
        }
        created () {
            console.log(process.env.DEVELOPMENT_API_BASE_URI);
        }
    }
</script>

<style lang="scss">
    @import './styles/sample';
</style>
