<template>
    <ul class="sort-by">
        <li>
            <input type="number" placeholder="min price" id="minPrice" v-model="minValue" />
            <input type="number" placeholder="max price" id="maxPrice" v-model="maxValue"/>
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
                minValue: '',
                maxValue: ''
            }
        },
        methods:{
            clear(){
                this.minValue='';
                this.maxValue='';
                this.$emit('clear-filter')
            }
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