<template>
    <div class="blog_edit">
        <div class="edit_body">
            <div class="form_item">
                <span class="blog_title">title</span>
                <input type="text" class="blog_input" v-model="titleVal">
            </div>
            <div class="form_item">
                <quill-editor v-model="myQuillEditor"
                    ref="myQuillEditor"
                    :options="editorOption">
                </quill-editor>
            </div>
            <div class="button_list">
                <button class="button_cancel">Cancel</button>
                <button class="button_confirm" @click="button_confirm">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        data () {
            return {
                titleVal:'',
                myQuillEditor:'',
            }
        },
        methods :{
            button_confirm () {
                console.log(this.titleVal);
                console.log(this.myQuillEditor)
                this.$http.post('http://localhost:9000/postBlogData',{
                    blogTitle:this.titleVal,
                    content:this.myQuillEditor
                },{emulateJSON:true}).then((response)=>{
                    console.log(response)
                })
            }
        }
    }

</script>

<style lang="less">
    .blog_edit{
        width: 100%;
        padding-top:100px;
        .edit_body{
            width: 100%;
            min-width: 1000px;
            margin: 0 auto;
            padding: 0 40px 50px;
            .form_item{
                width: 800px;
                margin:0 auto 20px;
                .blog_title{
                    font-size: 16px;
                    color: #283644;
                    margin: 0 10px 0 0;
                }
                .blog_input{
                    width: 400px;
                    height: 36px;
                    padding-left: 10px; 
                }
                .ql-editor{
                    height: 500px;
                }
            }
            .button_list{
                width: 260px;
                margin: 0 auto;
                .button_cancel,.button_confirm{
                    display: inline-block;
                    width: 120px;
                    height: 36px;
                    font-size: 14px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    border-radius: 2px !important;
                    cursor: pointer;
                }
                .button_confirm{
                    color: #fff;
                    background: #4C9DFF;
                    margin: 0 0 0 10px;
                }
            }
        }
    }
</style>

