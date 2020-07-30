<template>
    <div class="wrapper">
        <div class="main-box">
            <div class="main-flex">
                <div class="menu-left">
                    <div style="position: relative;z-index: 12;width: 240px; border-radius: 8px;">
                        <Nav module="index"></Nav>
                    </div>
                </div>

                <div class="content-right">
                    <div class="inner-content">
                        <div style="position: relative;height: 100%;z-index: 12; border-radius: 8px;">
                            <router-view></router-view>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
    import Nav from '@/components/Nav/nav';

    export default {
        name: 'System',
        components: {
            Nav
        },
        data() {
            return {
                flag: true
            };
        },
        methods: {
            close() {
                this.$emit('close');
            },
            cardClick(name) {
                this.$emit('cardClick', name);
            },
            routeChange() {
                let arr = this.$route.path.split('/');
                this.flag = arr[arr.length - 1] === 'index' || arr[arr.length - 1] === '';
            }
        },
        watch: {
            '$route': 'routeChange'
        },
        created() {
            this.routeChange();
        }
    };
</script>

<style lang="scss" scoped>
    .wrapper{
        height: 100%;
    }
    .header {
        height: 50px;
    }
    .main-box{
        // padding: 34px 28px 0 22px;
        height: calc(100% - 50px);
    }
    .nav-background{
        position: absolute;
        top: -12px;
        left: 8px;
        transform: rotate(0.5deg);
        border-radius: 8px;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .container-background{
        position: absolute;
        top: -12px;
        left: 8px;
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: 8px;
        transform: rotate(0.25deg);
    }
</style>
