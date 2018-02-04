<template>
  <div class="clearfix h100 productlist" @touch="demo()">
    <div class="header-child bb1">
      <ul class="clearfix">
        <li>
          <div class="search-box pr">
            <i class="el-icon-search"></i>
            <form action="javascript:;" @submit="inputsearch()">
              <input type="search" v-model="searchbox" placeholder="请输入款式关键字">
            </form>
          </div>
        </li>
        <li>
          <el-select clearable v-model="ringClassifysel" size="small" placeholder="戒托分类">
            <el-option value="">请选择</el-option>
            <el-option
              v-for="item in ringClassify"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          <el-select clearable v-model="ringStylesel" size="small" placeholder="戒托款式">
            <el-option value="">请选择</el-option>
            <el-option
              v-for="(item,index) in ringStyle"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
          <el-select clearable v-model="diamondShapesel" size="small" placeholder="主石形状">
            <el-option value="">请选择</el-option>
            <el-option
              v-for="item in diamondShape"
              :key="item.val"
              :label="item.txt"
              :value="item.val"
            >
            </el-option>
          </el-select>
          <el-select clearable v-model="labelStylesel" size="small" placeholder="标签分类">
            <el-option value="">请选择</el-option>
            <el-option
              v-for="item in labelStyle"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </li>
        <li>
          <span style="display: inline-block;color:#48c2d3">共找到 <span style="color:#48c2d3">{{searchNum}}</span> 款</span>
        </li>
        <li>
          <input @click="changetimerankdata" v-if="addtimerank=='desc'" type="button" value="更新时间 ▼"
                 class="btn-cont btn-gray">
          <input @click="changetimerankdata" v-if="addtimerank=='asc'" type="button" value="更新时间 ▲"
                 class="btn-cont btn-gray">
          <input @click="changepricerankdata" v-if="pricerank_max=='desc'" type="button" value="价格高低 ▼"
                 class="btn-cont btn-gray">
          <input @click="changepricerankdata" v-if="pricerank_min=='asc'" type="button" value="价格高低 ▲"
                 class="btn-cont btn-gray">
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="w100 h100" v-show=false>没有搜索到相关的产品</div>
      <swiper :options="swiperOption">
        <swiper-slide>
          <ul class="clearfix">
            <li class="fl" v-for="item in ringcaresList" :id="item.rid">
              <router-link
                :to="{path:'/product/details',query:{ num:item.rid,set:JSON.stringify(set),did:did}}">
                <div class=" box pr">
                  <div class="tipsbox pa">
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
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

    </div>
    <Pagemodule v-show="parseFloat(searchNum)>6" :pagesize="6" @Currentpage="getpage" :page="page" :currentpage="page" :total="searchNum"></Pagemodule>
  </div>
</template>
<script>
  export default {
    created() {
      this.initializesel()
      this.restset();
    },
    mounted() {
    },
    data() {
      return {
        swiperOption: {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop: true,
          setWrapperSize: true,
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          onSlideNextStart: this.nextpage,
          onSlidePrevStart: this.prevpage
        },
        pruductdetails: [],
        /*设置公用组件数据*/
        set: JSON.parse(this.$route.query.set),
        did: this.$route.query.did,
        checked: true,
        productmoduleisshow: false,
        /*搜索*/
        searchbox: '',
        /*戒托分类*/
        ringClassify: '',
        ringClassifysel: '',
        /*戒托款式*/
        ringStyle: '',
        ringStylesel: '',
        /*标签分类*/
        labelStyle: '',
        labelStylesel: '',
        /*主石形状*/
        diamondShape: [
          {txt: '圆形', 'val': 'Round', src: require('../../../assets/image/icon/lzkc1_03_r1_c1.png')},
          {txt: '公主方', 'val': 'Princess', src: require('../../../assets/image/icon/lzkc1_03_r1_c3.png')},
          {txt: '祖母绿', 'val': 'Emerald', src: require('../../../assets/image/icon/lzkc1_03_r1_c5.png')},
          {txt: '橄榄形', 'val': 'Marquise', src: require('../../../assets/image/icon/lzkc1_03_r1_c7.png')},
          {txt: '椭圆形', 'val': 'Oval', src: require('../../../assets/image/icon/lzkc1_03_r1_c9.png')},
          {txt: '雷蒂恩', 'val': 'Asscher', src: require('../../../assets/image/icon/lzkc2_03_r1_c1.png')},
          {txt: '水滴形', 'val': 'Pear', src: require('../../../assets/image/icon/lzkc2_03_r1_c3.png')},
          {txt: '心形', 'val': 'Heart', src: require('../../../assets/image/icon/lzkc2_03_r1_c5.png')},
          {txt: '三角形', 'val': 'Trillion', src: require('../../../assets/image/icon/lzkc2_03_r1_c7.png')},
          {txt: '垫形', 'val': 'Cushion', src: require('../../../assets/image/icon/lzkc2_03_r1_c9.png')}
        ],
        diamondShapesel:'',
        /*时间排序*/
        addtimerank: 'desc',
        /*价格排序*/
        pricerank_min: '',
        pricerank_max: 'desc',
        /*推荐数据*/
        recommendmel: '',
        recommendmeldata: '',
        /*新款数据*/
        newstylemel: '',
        newstylemeldata: '',
        /*戒托列表数据*/
        ringcaresList: '',
        /*获取到的页码*/
        page: 0,
        /*当前页码*/
        /*查询到的数据条数*/
        searchNum: '',
        /*禁止左右滑动*/
        allowSwipeToNext: true,
        allowSwipeToPrev: true,
        tagslist: [],
      };
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      $route() {
        this.initializesel()
        this.restset();
      },
      ringClassifysel: function (val) {
        this.searchdata();
      },
      ringStylesel: function (val) {
        this.searchdata();
      },
      labelStylesel: function (val) {
        this.searchdata();
      },
      recommendmel: function (val) {
        this.searchdata();
      },
      diamondShapesel: function (val) {
        this.searchdata();
      },
    },
    methods: {
      nextpage(){
        if (parseInt(this.searchNum / 6 + 1) == this.page) {
          this.page = 0
        }
        this.page++
        this.searchdata()
      },
      prevpage(){
        if (this.page == 1) {
          this.page = parseInt(this.searchNum / 6 + 1) + 1
        }
        this.page--
        this.searchdata()
      },
      /*初始化参数*/
      initialize() {
        /*设置公用组件数据*/
        if (this.$route.query.set) {
          this.set = JSON.parse(this.$route.query.set)
        }
        if (this.$route.query.did) {
          this.did = this.$route.query.did
        }
        var url = this.BASEURL+'/index.php?action=ringcare';
        this.$http.get(url, {
          params: {
            perpage: 6,
          }
        }, {}).then(response => {
          if (response.body.error_code == '0') {
            this.ringcaresList = response.body.ringcares;
            this.searchNum = parseInt(response.body.ring_nums);
          }

        }, response => {
          console.log(response);
        });
      },
      /*初始化下拉框*/
      initializesel() {
        var ringsetting_data_str = this.getCookie("ringsetting_data");
        var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
        this.ringClassify = ringsetting_data['戒托分类'];
        this.ringStyle = ringsetting_data['戒托款式'];
        this.labelStyle = ringsetting_data['戒托标签'];
      },
      /*搜索戒托数据*/
      searchdata() {
        var url = this.BASEURL+'/index.php?action=ringcare';
        this.$http.get(url, {
          params: {
            page: this.page,
            perpage: 6,
            type: this.ringClassifysel,
            kuanshi: this.ringStylesel,
            tag: this.labelStylesel,
            addtime: this.addtimerank,
            p_min: this.pricerank_min,
            p_max: this.pricerank_max,
            shape: this.diamondShapesel,
          }
        }).then(response => {
          if (response.body.error_code == '0') {
            if (response.body.ringcares == undefined) {
              this.searchNum = 0;
              this.ringcaresList = '';
              return false;
            } else {
              this.searchNum = parseInt(response.body.ring_nums);
              this.ringcaresList = response.body.ringcares;
            }
          }


        }, response => {
          console.log(response);
        });
      },
      /*输入框查询*/
      inputsearch() {
        this.getinputsearch();
      },
      /*输入框查询接口*/
      getinputsearch() {
        //如果用户没有输入搜索信息,则加载全部信息
        if (this.searchbox == "") {
          this.initialize();
        } else {
          var url = this.BASEURL+'/index.php?action=ring_search';
          this.$http.get(url, {
            params: {
              perpage: 6,
              keywords: this.searchbox,
            }
          }).then(response => {
            if (response.body.error_code == '0') {
              if (response.body.error_code == "90001") {
                this.searchNum = 0;
                this.ringcaresList = '';
                return false;
              } else {
                this.searchNum = parseInt(response.body.ring_nums);
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
        this.searchdata();
      },
      /*改变更新时间*/
      changetimerankdata(){
        this.addtimerank == 'desc' ? this.addtimerank = 'asc' : this.addtimerank = 'desc';
        this.searchdata();
      },
      /*改变价格排行*/
      changepricerankdata(){
        this.pricerank_max == 'desc' ? this.pricerank_max = '' : this.pricerank_max = 'desc';
        this.pricerank_min == 'asc' ? this.pricerank_min = '' : this.pricerank_min = 'asc';
        this.searchdata();
      },
      /*排序接口*/
      rankfun() {

      },
    }
  }

</script>
<style type="text/css">
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .swiper-item {
    height: 300px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .tipsbox {
    top: .4rem;
    left: -.2rem;
    z-index: 2
  }

  .el-icon-search {
    position: absolute;
    height: .5rem;
    width: .5rem;
    font-size: .4rem;
    line-height: .5rem;
    color: #45C3D3;
  }

  .search-box {
    /*box-shadow: 0px 0px 10px #eee inset;*/
  }
</style>
