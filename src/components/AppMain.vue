<script>
import ValueChange from './ValueChange.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        getConversion(){
            axios.get(`https://${store.host}/latest?amount=${store.money}&from=EUR&to=USD`)
            .then((response) => {
                store.money2 = response.data.rates.USD;
                console.log(response.data.rates.USD)
            });
        },
        getConversion2(){
            axios.get(`https://${store.host}/latest?amount=${store.money2}&from=USD&to=EUR`)
            .then((response) => {
                store.money = response.data.rates.EUR;
                console.log(response.data.rates.USD)
            });
        }
    },
    components: {
        ValueChange
    }
}
</script>

<template>
    <main>
        <div class="container border-success border ">
            <h1>
                Converter
            </h1>
            <div>
                <span>
                    {{ store.money }} equivale a {{ store.money2 }}
                </span>
            </div>
            <ValueChange @changeValue="getConversion()" @changeValue2="getConversion2()"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
