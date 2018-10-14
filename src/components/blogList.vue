<template>
    
</template>

<script>
    export default {
    
        mounted () {
            console.log(1)
            this.$http.get('http://localhost:9000/getList?id=1').then((response)=>{
                console.log(response.body)
            })
        }
    }

</script>
<style lang="less">

</style>