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
    .css_body{
        position: absolute;
        top:150px;
        width: 100%;
        max-width: 1000px;
        margin: 0px auto;
        background-color: #fff; 
    }
</style>