<template>
    <div class="blog_body">
        <ul class="blog_content">
            <li class="blog_item" v-for="(item,index) in blogList" :key="index">
                <div class="blog_left_content">
                    <a class="left_title" @click="enterBlogDetail(item)">{{item.title}}</a>
                    <span class="left_introduction" v-html="item.content"></span>
                    <span class="left_border"></span>
                    <span class="left_time">{{item.time}}</span>
                </div>
                <div class="blog_right_content">
                    <img class="right_img" src="" alt="">
                </div>
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
            let ran_ = Date.parse(new Date());

            this.$http.get('http://localhost:8000/getList?id='+this.listId+'&ran_='+ran_).then((response)=>{
                this.blogList = response.body;
                console.log(response.body)
            })
        },
        methods :{
            enterBlogDetail (el) {
                window.open('blogDetail.html?_id=' + el.id + '&tab_id=' +this.listId);
            }
        }
    }
</script>

<style lang="less">
    .blog_body{
        .blog_content{
            min-width: 1000px;
            width: 100%;
            .blog_item{
                margin: 0 0 20px 0;
                width: 100%;
                height: 230px;
                background: #fff;
                .blog_left_content{
                    float: left;
                    margin: 60px 85px 60px 30px;
                    .left_title{
                        display: block;
                        margin-bottom: 16px;
                        width: 560px;
                        font-size: 24px;
                        color: #424953;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                    .left_introduction{
                        display: block;
                        margin-bottom: 20px;
                        font-weight: 200;
                        width: 560px;
                        font-size: 14px;
                        color: #7f8794;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .left_border{
                        display: block;
                        margin-bottom: 20px;
                        background: #2061ff;
                        width: 28px;
                        height: 1px;
                    }
                    .left_time{
                        display: block;
                        font-size: 14px;
                        color: #c6c9cf;
                        font-weight: 300;
                    }
                }
                .blog_right_content{
                    float: left;
                    margin: 25px 25px 25px 0;
                    width: 300px;
                    height: 180px;
                }
            }
        }
    }
</style>

