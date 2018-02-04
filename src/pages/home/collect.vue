<template>
  <div class="clearfix h100 productlist">
    <div class="header-child bb1">
        <ul class="clearfix pr">
          <li class="pull-left">
            <form action="javascript:;" @submit="getinputsearch()">
            <div class="search-box  before pr">
              <input v-model="searchbox" type="search" placeholder="请输入款式关键字">
            </div>
            </form>
          </li>
          <li class="pull-right">
            <input @click="clearlist()" type="button" value="清空收藏夹" class="btn-cont btn-gray" >
          </li>
          <p class="centertxt pa">
            <span class="fc-blue">收藏 <span class="fc-blue">{{searchNum}}</span> 款</span>
          </p>
        </ul>

    </div>
    <div class="content">
      <div class="w100 h100" v-show = false >没有搜索到相关的产品</div>
      <ul class="clearfix">
        <li class="fl" v-for="item in ringcaresList" :id="item.rid">
          <router-link :to="{path:'/product/details',query:{ num:item.rid,set:JSON.stringify(set)}}">
            <div class=" box pr">
              <div class="tipsbox  pa">
                <div>
                   <span v-for="tag in labelStyle" v-if="tag.id == item.tag" :class="tag.id == '28' ? 'newtips':'hottips'">{{tag.name}}</span>
                </div>
              </div>
              <div class="img">
                <img :src="item.pic" height="800" width="800" alt=""></div>
              <div class="txt">
                <p>{{item.name}}</p>
                <p class="fc-blue">¥ {{item.p_min}} ~ {{item.p_max}}元</p>
              </div>
              <div class="line" :class="{ active: productmoduleisshow }"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Pagemodule v-show="parseFloat(searchNum)>6" :pagesize="6" @Currentpage="getpage" :page="page" :total="searchNum"></Pagemodule>
  </div>
</template>
<script>
  export default {
    created() {
      this.initialize()
    },
    data() {
      return {
        /*设置公用组件数据*/
        set: JSON.parse(this.$route.query.set),
        productmoduleisshow: false,
        /*搜索*/
        searchbox: '',
        /*戒托分类*/
        ringClassify:'',
        ringClassifysel: '0',
        /*戒托款式*/
        ringStyle: '',
        ringStylesel: '0',
        /*主石形状*/
        diamondShape: [
          {txt: '圆形', 'val': 'Round', src: require('../../assets/image/icon/lzkc1_03_r1_c1.png')},
          {txt: '公主方', 'val': 'Princess', src: require('../../assets/image/icon/lzkc1_03_r1_c3.png')},
          {txt: '祖母绿', 'val': 'Emerald', src: require('../../assets/image/icon/lzkc1_03_r1_c5.png')},
          {txt: '橄榄形', 'val': 'Marquise', src: require('../../assets/image/icon/lzkc1_03_r1_c7.png')},
          {txt: '椭圆形', 'val': 'Oval', src: require('../../assets/image/icon/lzkc1_03_r1_c9.png')},
          {txt: '雷蒂恩', 'val': 'Asscher', src: require('../../assets/image/icon/lzkc2_03_r1_c1.png')},
          {txt: '水滴形', 'val': 'Pear', src: require('../../assets/image/icon/lzkc2_03_r1_c3.png')},
          {txt: '心形', 'val': 'Heart', src: require('../../assets/image/icon/lzkc2_03_r1_c5.png')},
          {txt: '三角形', 'val': 'Trillion', src: require('../../assets/image/icon/lzkc2_03_r1_c7.png')},
          {txt: '垫形', 'val': 'Cushion', src: require('../../assets/image/icon/lzkc2_03_r1_c9.png')}
        ],
        diamondShapesel: '0',
        /*时间排序*/
        addtimerank: 'desc',
        /*价格排序*/
        pricerank_min: '',
        pricerank_max: 'desc',
        /*推荐数据*/
        recommendmel: '',
        /*新款数据*/
        newstylemel: '',
        /*戒托列表数据*/
        ringcaresList: '',
        /*获取到的页码*/
        page: 1,
        /*查询到的数据条数*/
        searchNum: '',
        listcode: this.$route.query.listcode,
        detailcode: this.$route.query.detailcode,
        zhisshow: this.$route.query.zhisshow,
        did: this.$route.query.did,
        labelStyle: '',
      };
    },
    watch: {
      $route(){
        this.initialize()
      },
      ringClassifysel: function(val) {
        this.searchdata();
      },
      ringStylesel: function(val) {
        this.searchdata();
      },
      diamondShapesel: function(val) {
        this.searchdata();
      },
      recommendmel: function(val) {
        if(val){
          this.recommendmel='1'
        }else {
          this.recommendmel=''
        }
        this.searchdata();
      },
      newstylemel: function(val) {
        if(val){
          this.newstylemel='1'
        }else {
          this.newstylemel=''
        }
        this.searchdata();
      },
    },
    methods: {
      /*清空收藏夹*/
      clearlist(){
        this.$confirm("是否确认清空收藏夹", {
          confirmButtonClass: 'btn-b',
          cancelButtonClass: 'btn-w',
        }).then(() => {
          var url = this.BASEURL + '/index.php?action=clean_collection'
          this.$http.get(url, {
            params: {
            }
          }, {}).then(response => {
            if(response.body.error_code == '90009' || response.body.error_code == '90005'){
              this.$router.push({name: 'Login'})
              return false
            }else {
              this.ringcaresList = ''
              this.searchNum = 0;
            }

          }, response => {
            console.log(response);
          });
        }).catch(() => {
        });
        
      },
      /*初始化参数*/
      initialize() {
        if(this.getCookie("ringsetting_data")){
          var ringsetting_data_str = this.getCookie("ringsetting_data");
          var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
          this.labelStyle = ringsetting_data;
        }
      
        var url = this.BASEURL + '/index.php?action=collected';
        this.$http.get(url, {
          params: {
            perpage: 6,
            page: this.page,
          }
        }, {}).then(response => {
          if(response.body.error_code == '90009' || response.body.error_code == '90005'){
            this.$router.push({name: 'Login'})
            return false
          }else if(response.body.error_code == '90001'){
            this.ringcaresList = '';
            this.searchNum = 0;
          }else {
            this.ringcaresList = response.body.result;
            this.searchNum = parseInt(response.body.cl_nums);
          }

        }, response => {
          console.log(response);
        });
      },
      /*输入框查询接口*/
      getinputsearch() {
        //如果用户没有输入搜索信息,则加载全部信息
        if(this.searchbox=="") {
          this.initialize();
        }else {
          var url = this.BASEURL + this.BASEURL+'/index.php?action=collected';
          this.$http.get(url, {
            params: {
              keyword: this.searchbox,
              perpage: 6,
            }
          }).then(response => {
            this.searchNum = response.body;
            console.log(response)
            if(response.body.error_code == '90009' || response.body.error_code == '90005'){
              this.$router.push({name: 'Login'})
              return false
            }else {
              if(response.body == NaN){
                this.searchNum = 0;
                this.ringcaresList = '';
                return false
              }
              if (response.body.error_code == "90001") {
                console.log("没有数据哦！亲");
                this.searchNum = 0;
                this.ringcaresList = '';
                return false;
              } else {
                this.searchNum = parseInt(response.body.cl_nums);
                this.ringcaresList = response.body.result;
              }
            }
          }, response => {
            console.log(response);
          });
        }
      },
      /*页码数据改变*/
      getpage(page) {
        this.page = page;
        this.initialize();
      },
    }
  }

</script>
<style type="text/css">
  .tipsbox {
    top: .4rem;
    left: -.2rem;
    z-index: 2
  }


</style>
