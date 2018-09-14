<template>
    <div class="index_body">
        <nav class="index_nav">
            <ul class="index_nav_list">
                <li class="index_nav_item" v-for="(item,index) in navArr" :key="index">
                    <router-link :to=item.path class="nav_router">{{item.navName}}</router-link>
                </li>
                 <router-view></router-view>
            </ul>
        </nav>
        
    </div>
</template>

<script>
    import '../../common/css/reset.css'
    export default {
        data () {
            return {
                navArr:[
                    {
                        navName:'HTML',
                        path:'/html'
                    },
                    {
                        navName:'CSS',
                        path:'/css'
                    },
                    {
                        navName:'JS',
                        path:'/js'
                    },
                    {
                        navName:'NODE',
                        path:'/node'
                    },
                ]
            }
        },
        mounted() {
            
        },
    }

</script>



<style lang="less">
    body,html{
        background-color: #EBEBEB;
    }
    .index_body{
        width: 100%;
        .index_nav{
            width: 100%;
            background-color: #364956;
            .index_nav_list{
                position: relative;
                width: 100%;
                max-width: 1000px;
                height: 45px;
                margin:0 auto;
                .index_nav_item{
                    float: left;
                    height: 45px;
                    line-height: 45px;
                    cursor: pointer;
                    .nav_router{
                        color: #fff;
                        font-weight: 600;
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding: 0 20px;
                    }
                    &:hover{
                        background-color:#0099FF; 
                    }
                } 
            }
        }
        
    }
</style>

