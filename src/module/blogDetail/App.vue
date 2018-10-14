<template>
    <div class="blog_detail">
        <div class="blog_detail_nav">
            <a class="detail_nav_title">前端菜鸟</a>
        </div>
        <div class="blog_content" v-html="">

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        mounted () {
            const blogId = this.getQueryString('_id');
            const tableId = this.getQueryString('tab_id');
            console.log(blogId)
            this.$http.get('http://localhost:9000/getBlogDetail?id='+blogId+'&tableId='+tableId).then((res)=>{
                console.log(res.body)
            })
        },
        methods : {
            getQueryString (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]); return null;
            }
        }
    }
</script>
    

<style lang="less">
    .blog_detail {
        width: 100%;
        .blog_detail_nav{
            width: 100%;
            height: 52px;
            padding: 0 30px;
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
            .detail_nav_title{
                height: 52px;
                line-height: 52px;
                font-size: 26px;
                font-weight: 400;
                color: #0084ff;
    
                // 
            }
        }
        .blog_content{
            overflow: hidden;
            width: 690px;
            margin: 0 auto;
        }
    }
</style>

