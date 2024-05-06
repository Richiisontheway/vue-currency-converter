<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {

    }
};
</script>

<template>
    <div>
        <input type="text">
        <select name="money" id="money">
            <option :value="elem"
                v-for="(elem, i) in store.currencyValue" :key="i" :selected = "elem == 'Euro'">
                {{ elem }}
            </option>
        </select>
    </div>
    <div>
        <input type="text">
        <select name="money" id="money">
            <option :value="elem"
                v-for="(elem, i) in store.currencyValue" :key="i" :selected = "elem == 'United States Dollar'">
                {{ elem }}
            </option>
        </select>
    </div>
</template>