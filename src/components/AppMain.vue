<script>
import ValueChange from './ValueChange.vue';
export default {
    data() {
        return {

        };
    },
    methods: {
        getConsoleLog(){
            console.log('ciao')
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
            <ValueChange @changeValue="getConsoleLog()"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
