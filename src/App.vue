<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';
export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
        // getApiConversion(){
        //     axios.get('https://'+ store.host +'/latest?amount=10&from=GBP&to=USD')
        //     .then((response)=>{
        //         console.log(response.data);
        //     })
        // }
        getCurrency(){
            axios.get('https://'+ store.host +'/currencies')
                .then((response)=>{
                    this.store.currency = response.data
                    console.log(this.store.currency);
                    
                })
        }
    },
    mounted(){
        this.getCurrency();
    }
}
</script>

<template>

    <AppHeader />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
