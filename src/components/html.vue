<template>
    <div class="css_body">
        <v-htmlTemplate :listId=1></v-htmlTemplate>
    </div>
</template>

<script>
    import htmlTemplate from './htmlTemplate'
    export default {
        data () {
            return {
            
            }
        },
        components:{
            'v-htmlTemplate':htmlTemplate
        },
        mounted () {
            
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