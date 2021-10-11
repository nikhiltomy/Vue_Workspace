<template lang="">
    <div>
        <button @click="this.$root.$emit('update')">Clickmee</button>
    </div>
</template>
<script>
export default {
    emits:['update'],
    data() {
        return {
            
        }
    },
}
</script>
<style lang="">
    
</style>