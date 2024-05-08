<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            
        };
    },
    methods: {
        
    },
    updated(){
        console.log('valuta corrente:',this.store.selectedCurrency, typeof this.store.selectedCurrency)
        console.log('valuta 2 corrente:',this.store.selectedCurrency2, typeof this.store.selectedCurrency2)
    }
};
</script>
<template>
    <div>
        
        <input type="number" v-model="store.money" @keyup="$emit('changeValue')">
        <select name="money" id="money" v-model="store.selectedCurrency">
            <option :value="elem" v-for="(elem, i) in store.currency" :key="i">
                {{ elem }}
            </option>
        </select>
    </div>
    <div>
        <input type="number"  v-model="store.money2" @keyup="$emit('changeValue2')">
        <select name="money2" id="money2"v-model="store.selectedCurrency2" >
            <option :value="elem" v-for="(elem, i) in store.currency" :key="i">
                {{ elem }}
                {{ console.log(i) }}
            </option>
        </select>
    </div>
</template>

