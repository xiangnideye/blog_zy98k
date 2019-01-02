<template>
    <div class="blog_detail">
        <div class="blog_detail_nav">
            <a class="detail_nav_title">前端菜鸟</a>
        </div>
        <div class="blog_detail_body">
            <div class="blog_detail_title">{{blogTitle}}</div>
            <div class="blog_content" v-html="blogContent">

            </div>
        </div>
        
    </div>
</template>

<script>
import  '../../common/css/reset.css'
export default { 
    data () {
        return {
            blogId: '',
            tableId: '',
            blogTitle: '',
            blogContent: '',
        }
    },
    mounted () {
        this.blogId = this.getQueryString('_id');
        this.tableId = this.getQueryString('tab_id');
        this.getBlogDetail();
    },
    methods : {
        getBlogDetail () {
            this.$http.get('www.zy98k.com/getBlogDetail?id=' + this.blogId + '&tableId=' + this.tableId).then((res)=>{
                console.log(res.body)
                if (res.body.error_code == 200) {
                    this.blogTitle = res.body.successObj.title;
                    this.blogContent = res.body.successObj.content;
                }
                
            })
        },
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
        .blog_detail_body{
            overflow: hidden;
            width: 690px;
            margin: 0 auto;
            .blog_detail_title{
                font-weight: 600;
                font-synthesis: style;
                font-size: 24px;
                margin: 24px 0;
                word-wrap: break-word;
            }
            .blog_content{
                overflow: hidden;
                width: 690px;
                margin: 0 auto;
            }
        }
        
    }
</style>

