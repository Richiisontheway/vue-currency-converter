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
            axios.get(`https://${store.host}/latest?amount=${store.money}&from=${this.store.selectedCurrency}&to=${this.store.selectedCurrency2}`)
            .then((response) => {
                store.money2 = response.data.rates.USD;
                console.log(response.data.rates.USD)
            });
        },
        getConversion2(){
            axios.get(`https://${store.host}/latest?amount=${store.money2}&from=${this.store.selectedCurrency2}&to=${this.store.selectedCurrency}`)
            .then((response) => {
                store.money = response.data.rates.EUR;
                console.log(response.data.rates.EUR)
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
                    {{ store.money }} {{ store.selectedCurrency }} equivale a {{ store.money2 }} {{ store.selectedCurrency2 }}
                </span>
            </div>
            <ValueChange @changeValue="getConversion()" @changeValue2="getConversion2()"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
