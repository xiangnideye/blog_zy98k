<template>
    <div class="css_body">
        <v-htmlTemplate :listId=4></v-htmlTemplate>
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
    
</style>