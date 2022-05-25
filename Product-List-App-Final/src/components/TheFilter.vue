<template>
    <ul class="sort-by">
        <li>
            <input type="range" placeholder="min price" id="minPrice" v-model="minValue" />
            <p>{{this.minValue}}</p>
            <input type="range" placeholder="max price" id="maxPrice" v-model="maxValue"/>
            <p>{{this.maxValue}}</p>
        </li>
        <button class="filterbtn" @click="$emit('price-filter',minValue,maxValue)">Filter</button>
        <button @click="clear()">Clear</button>
    </ul>
</template>

<script>
    export default{
        emits:['price-filter','clear-filter'],
        data() {
            return {
                minValue: 0,
                maxValue: 0
            }
        },
        methods:{
            clear(){
                this.minValue=0;
                this.maxValue=0;
                this.$emit('clear-filter')
            },
        }
    }
</script>

<style scoped>
.filterbtn{
    align-content: center;
    width: 15%;
    margin: 20px;
}
ul{
    list-style-type: none;
    padding: 0px;
}
</style>