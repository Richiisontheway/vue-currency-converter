<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            
        };
    },
    methods: {
        
    }
};
</script>
<template>
    <div>
        
        <input type="number" v-model="store.money" @keyup="$emit('changeValue')">
        <select name="money" id="money" >
            <option :value="elem" v-for="(elem, i) in store.currencyValue" :key="i" :selected = "elem == 'Euro'">
                {{ elem }}
            </option>
        </select>
    </div>
    <div>
        <input type="number"  v-model="store.money2" @keyup="$emit('changeValue2')">
        <select name="money2" id="money2" >
            <option :value="elem" v-for="(elem, i) in store.currencyValue" :key="i" :selected = "elem == 'United States Dollar'">
                {{ elem }}
            </option>
        </select>
    </div>
</template>

