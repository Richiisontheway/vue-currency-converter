<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            money: '1', 
            money2:'1.08'
        };
    },
    methods: {
        
    }
};
</script>
<template>
    <div>
        <div>
            <span>
                {{ money }} equivale a {{ money2 }}
            </span>
        </div>
        <input type="number" v-model="money" @keyup="$emit('changeValue')">
        <select name="money" id="money" >
            <option :value="elem" v-for="(elem, i) in store.currencyValue" :key="i" :selected = "elem == 'Euro'">
                {{ elem }}
            </option>
        </select>
    </div>
    <div>
        <input type="number"  v-model="money2">
        <select name="money2" id="money2" >
            <option :value="elem" v-for="(elem, i) in store.currencyValue" :key="i" :selected = "elem == 'United States Dollar'">
                {{ elem }}
            </option>
        </select>
    </div>
</template>

