<template>
    <div class="">
        <ul>
            <li v-for="(item,index) in blogList" :key="index">
                <div>{{item.title}}</div>
                <div>{{item.conent}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            listId:{
                type:Number,
                default:1
            }
        },
        data () {
            return {
                blogList:[],
            }
        },
        mounted () {
            console.log(this.listId)
            this.$http.get('http://localhost:9000/getList?id='+this.listId).then((response)=>{
                this.blogList = response.body;
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

