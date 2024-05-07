//questo import ci permette di creare un oggetto reattivo
import { reactive } from "vue";

export const store = reactive({
    host: 'api.frankfurter.app',
    conversion: [],
    currency: [],
    currencyKey: [],
    currencyValue: [],
    money: '1', 
    money2:'1.08'
    
});