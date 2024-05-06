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
            <option value="elem"
                v-for="(elem, i) in store.currencyValue" :key="i">
                {{ elem }}
            </option>
        </select>
    </div>
    <div>
        <input type="text">
        <select name="money2" id="money2">
            <option value="elem"
                v-for="(elem, a) in store.currencyValue" :key="a">
                {{ elem }}
            </option>
        </select>
    </div>
</template>