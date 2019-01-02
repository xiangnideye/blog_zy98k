<template>
    
</template>

<script>
    export default {
    
        mounted () {
            console.log(1)
            this.$http.get('www.zy98k.com/getList?id=1').then((response)=>{
                console.log(response.body)
            })
        }
    }

</script>
<style lang="less">

</style>