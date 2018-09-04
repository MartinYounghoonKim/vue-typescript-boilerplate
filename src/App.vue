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
    }
</script>

<style lang="scss">
    @import './styles/sample';
</style>
