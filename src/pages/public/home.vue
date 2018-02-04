<template>

  <div class="h100">
    <title>欢迎光临{{$store.state.user.user.sname}}</title>
    <!-- 公共头部开始 -->
    <header v-if="reset_status != '1'">
      <i v-if="backpageIsshow" @click="getprevpage" class="el-icon-arrow-left f36 backpage" style="color: #a6a6a6"></i>
      <i v-if="!backpageIsshow" class="el-icon-arrow-left f36 backpage" style="opacity:0"></i>
      <tt v-if="superscriptNum != 0" @click="getOrderditail" class="ordertipsnum" v-text="superscriptNum"></tt>
      <ul>
        <li v-for="(item,index) in headItems" :key="index">
          <router-link :to="item.href">
            <img @click="changeSrc(index)" :title="item.title" :src="headeritemactive == index?item.srca:item.src" alt="">
          </router-link>
        </li>
      </ul>
      <div class="header_bottom_line"></div>
    </header>
    <!-- 公共头部结束 -->
    <!-- 中间内容展示开始 -->
    <div class="pub-container  h100 clearfix ">
      <div class="pr w100 h100 clearfix">
        <keep-alive>
          <transition :name="transitionName">
            <router-view class="Router h100"></router-view>
          </transition>
        </keep-alive>
      </div>
    </div>
    <!-- 中间内容展示结束 -->
  </div>
</template>
<script>

  export default {
    created() {
      if(this.getCookie("reset_status")){
          this.reset_status = this.getCookie("reset_status");
          this.messagedata = '第一次登录，请修改密码';
          this.message();
          this.$router.push({path: '/changepassword'});
        }
      this.inittab()
      this.backpage()
      this.initialize();
    },
    data() {
      return {
        title:'定制系统',
        reset_status: '',
        transitionName: 'slide-left', // 默认动态路由变化为slide-right
        loading: false,
        goding: true,
        superscriptNum: 0,
        /*/!*设置公用组件数据*!/
         set: this.$route.query.set,*/
        headeritemactive: 0,
        headItems: [{
          href: '/index',
          title: '首页',
          src: require('../../assets/image/icon/head-home.png'),
          srca: require('../../assets/image/icon/head-home-a.png')
        },
          {
            href: {path: "/collect", query: {set: JSON.stringify(this.setlist[4]), tab: 1}},
            title: '收藏',
            src: require('../../assets/image/icon/head-collect.png'),
            srca: require('../../assets/image/icon/head-collect-a.png')
          },
          {
            href: {path: "/shopcar", query: {tab: 2}},
            title: '购物车',
            src: require('../../assets/image/icon/head-car.png'),
            srca: require('../../assets/image/icon/head-car-a.png')
          },
          {
            href: {path: "/orderlist", query: {tab: 3}},
            title: '订单',
            src: require('../../assets/image/icon/head-shoplist.png'),
            srca: require('../../assets/image/icon/head-shoplist-a.png'),
          },
          {
            href: {path: "/setting", query: {tab: 4}},
            title: '设置',
            src: require('../../assets/image/icon/head-set.png'),
            srca: require('../../assets/image/icon/head-set-a.png')
          }
        ],
        /*返回上一页按钮显示与隐藏*/
        backpageIsshow: true,
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    methods: {
      getOrderditail(){
        this.$router.push({name: 'OrderlistHome'});
      },
      /*返回上一页*/
      getprevpage(){
        this.$router.go(-1)
        this.$router.goBack()
      },
      // 点击切换顶部导航栏
      changeSrc: function (index) {
        this.headeritemactive = index;
        event.currentTarget.src = this.headItems[this.headeritemactive].srca;
      },
      /*订单列表有更新*/
      initialize(){
        var url = this.BASEURL+'/index.php?action=pending';
        this.$http.get(url, {
          params: {}
        }, {}).then(response => {
            if (response.body.error_code == 0) {
              this.superscriptNum = response.body.num;
            }
          },
          response => {
            console.log(response);
          })
      },
      /*配置导航*/
      inittab(){
        if (this.$route.query.tab) {
          this.headeritemactive = this.$route.query.tab
        } else {
          if (this.$route.name == "Index") {
            this.headeritemactive = 0
          } else {

            this.headeritemactive = 6
          }
        }
      },
      /*判断返回上一页显示隐藏*/
      backpage(){
        if (this.$route.name == "Index") {
          this.backpageIsshow = false
        } else {
          this.backpageIsshow = true
        }
      },
    },
    watch: {
      '$route'(to, from) {
        if(this.getCookie("reset_status")){
          this.reset_status = this.getCookie("reset_status");
          this.messagedata = '第一次登录，请修改密码';
          this.message();
          this.$router.push({path: '/changepassword'});
        }
        this.inittab()
        this.backpage()
        /*路由初始化*/
        this.initialize()
      },
    }
  }
</script>
<style>
  .ordertipsnum {
    display: block;
    width: .4rem;
    height: .4rem;
    background: red;
    color: #fff;
    font-size: .22rem;
    border-radius: 50%;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    top: 0.06rem;
    z-index: 999;
    right: 1.1rem;
  }

  .header-line {
    padding-top: .8rem;
    margin-top: -1px;
  }

  .Router {
    position: absolute;
    width: 100%;
    transition: all .8s ease;
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
