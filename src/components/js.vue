<template>
    <h1></h1>
</template>

<script>
    export default {
        mounted () {
            this.$http.get('http://localhost:9000/getList?id=3').then((response)=>{
                console.log(response.body)
            })
        }
    }

</script>

<style lang="less">
  
</style>