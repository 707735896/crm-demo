<template>
    <router-view></router-view>
</template>
<script>
    export default {
        name: 'App',
        // data(){
        //     url :''
        // },
        // watch: {
        //     "$route": {
        //         handler(route) {
        //             this.url = route.path;
        //             sessionStorage.setItem('router_path', route.path);
        //             window.addEventListener('popstate', this.goBack(route.path), false);
        //         }
        //     }
        // },
        // destroyed() {
        //     window.removeEventListener('popstate', this.goBack, false);
        // },
        // methods: {
        //     goBack(path) {
        //         history.pushState(null, null, path);
        //         let router_path = sessionStorage.getItem('router_path');
        //         this.$router.push(path);
        //     }
        // }
    };
</script>
<style lang="scss">
    @import "common.scss";
</style>
