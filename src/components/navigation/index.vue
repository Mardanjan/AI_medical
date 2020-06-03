<template>
   <div class="header">
      <div class="container">
        <div class="logo"></div>
        <div class="navigation">
            <div class="index" @click="handleJumpToIndex"><a>首页</a></div>
            <div :class="arr[0]" @click="handleJumpToCase"><a>案例</a></div>
            <div :class="arr[1]" @click="handleJumpToServer">服务 </div>
            <div :class="arr[2]" @click="handleJumpToAbout">我们</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        arr: {
            type: Array,
            default: () => ['index', 'index', 'index']
        }
    },
    data() {
        return{
            // arr: ['index', 'index', 'index']
        }
    },
    methods: {
    handleJumpToIndex() {
      if (this.$route.path !== '/') {
          this.$router.push({
            path: '/'
        })
      }
    },
    handleJumpToCase() {
      if (this.$route.path !== '/case') {
          this.$router.push({
            path: '/case'
          })
      }
    },
    handleJumpToServer() {
       if (this.$route.path !== '/server')  {
           this.$router.push({
                path: '/server'
            })
       }
    },
    handleJumpToAbout() {
        if (this.$route.path !== '/about') {
            this.$router.push({
                path: '/about'
            })
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 90px;
        background:rgba(255,255,255,1);
        position: relative;
    }
    .container {
        height: 50px;
        width: 100%;
        position: relative;
        top: 20px;

        .logo {
            width: 190px;
            height: 50px;
            background: url('../../assets/logo2.png') center no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 23.39%;
        }

        .navigation {
            display: inline-block;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 61.77%;
            width: 288px;

            .index {
                flex: 1;
                line-height: 50px;
                font-size:16px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(51, 51, 51, 1);
                display: flex;
                justify-content: center;
                cursor:pointer;
                
            }
            .line {
                color:rgba(34, 104, 178, 1);
                position: relative;
            }

            .line::after{
                content: '';
                width: 21px;
                height: 2px;
                background-color: rgba(34, 104, 178, 1);
                position: absolute;
               // text-align: center;
                left:50%;
                transform: translateX(-50%);
                bottom: 0px;
            }
      }

    }
</style>
