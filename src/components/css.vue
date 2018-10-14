<template>
    <div class="css_body">
        <v-htmlTemplate :listId=2></v-htmlTemplate>
    </div>
</template>

<script>
    import htmlTemplate from './htmlTemplate'
    export default {
        components:{
            'v-htmlTemplate':htmlTemplate
        },
        data () {
            return {
                
            }
        },
        mounted () {
            
        }
    }
</script>

<style lang="less">
    .css_body{
        position: absolute;
        top:100px;
        width: 100%;
        max-width: 1000px;
        margin: 0px auto;
        // background-color: #fff; 
    }
</style>

