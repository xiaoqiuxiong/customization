<template>
  <div class="clearfix h100 productdetails">
    <div class="productdetailsleft w50 ">
      <Swipermodule :pic="pruductdetails.ring_pic"></Swipermodule>
    </div>
    <div class="productdetailsright w50">
      <div class="head">
        <div class="title">
          <div>
            <h4>{{pruductdetails.name}}</h4>
            <span>{{pruductdetails.fnum}}</span>
          </div>
          <p><span class="fc-gray ls2">价格</span><span class="fc-blue f36" style="margin-left: -.3rem;"><span class="fc-blue">¥</span>
            <span class="fc-blue f36" v-if="!countpricedata">{{pruductdetails.p_min}} ~ {{pruductdetails.p_max}}</span>
            <span class="fc-blue f36" v-if="countpricedata">{{countpricetxt}}</span>
          </span>
            <span v-if="collectData == '0' " @click="collectPort()"><img
              src="../../../assets/image/icon/disfavorite.png" alt=""> 收藏</span>
            <span @click="clearcollect" v-if="collectData == '1' " class="fc-gray"><img src="../../../assets/image/icon/favorite.png" alt=""> 已收藏</span>
          </p>
          <h5 class="fblack">空托参数</h5>
        </div>
        <div class="details">
          <ul class="clearfix">
            <li class="pr"><span class="fc-gray">主石形状</span>
              <!-- <span v-if="pruductdetails.shape=='ROUND'" class="fc-gray">圆形</span>
              <span v-if="pruductdetails.shape=='PRINCESS'" class="fc-gray">公主方</span>
              <span v-if="pruductdetails.shape=='EMERALD'" class="fc-gray">祖母绿</span>
              <span v-if="pruductdetails.shape=='HEART'" class="fc-gray">心形</span>
              <span v-if="pruductdetails.shape=='OVAL'" class="fc-gray">椭圆形</span>
              <span v-if="pruductdetails.shape=='PEAR'" class="fc-gray">水滴形</span>
              <span v-if="pruductdetails.shape=='MARQUISE'" class="fc-gray">橄榄形</span>
              <span v-if="pruductdetails.shape=='ASSCHER'" class="fc-gray">雷蒂恩</span>
              <span v-if="pruductdetails.shape=='CUSHION'" class="fc-gray">垫形</span>
              <span v-if="pruductdetails.shape=='TRILLION'" class="fc-gray">三角形</span> -->
              <span v-if="pruductdetails.shape=='圆形'" class="fc-gray">圆形</span>
              <span v-if="pruductdetails.shape=='公主方'" class="fc-gray">公主方</span>
              <span v-if="pruductdetails.shape=='祖母绿'" class="fc-gray">祖母绿</span>
              <span v-if="pruductdetails.shape=='心形'" class="fc-gray">心形</span>
              <span v-if="pruductdetails.shape=='椭圆形'" class="fc-gray">椭圆形</span>
              <span v-if="pruductdetails.shape=='水滴形'" class="fc-gray">水滴形</span>
              <span v-if="pruductdetails.shape=='橄榄形'" class="fc-gray">橄榄形</span>
              <span v-if="pruductdetails.shape=='雷蒂恩'" class="fc-gray">雷蒂恩</span>
              <span v-if="pruductdetails.shape=='垫形'" class="fc-gray">垫形</span>
              <span v-if="pruductdetails.shape=='三角形'" class="fc-gray">三角形</span>
            </li>
            <li class="pr"><span class="fc-gray ls3">主石重</span> <span class="fc-gray ml1">{{pruductdetails.w_min}} - {{pruductdetails.w_max}} ct</span>
            </li>
            <li class="pr">
              <span class="fc-gray ls2">金重</span>
              <span class="fc-gray ml">{{pruductdetails.j_min}} - {{pruductdetails.j_max}} 克</span>
            </li>
            <li class="pr"><span class="fc-gray ls3">辅石重</span> <span class="fc-gray ml1">{{pruductdetails.f_min}} - {{pruductdetails.f_max}} ct</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="foot ">
        <form class="bt1" action="javascript:;">
          <ul>
            <li>
              <span class="fc-gray ls2">材质</span>
              <span class="ml3 w80" style="display:inline-block">
                <el-radio-group v-model="texturedata" size="small" class="linecheckbox">
                  <el-radio-button v-for="(item,index) in texturelist" :key="index" :label="item.name"></el-radio-button>
                  <span class="fc-red" v-show="tipsisshow">请选择材质</span>
                </el-radio-group>
            </span>
              
            </li>
            <li><span class="fc-gray ls2">手寸</span>
              <el-select  class="ml3" clearable  v-model="HandNumselected" size="small" placeholder="请选择">
                <el-option value="">请选择
                </el-option>
                <el-option
                  v-for="item in HandNum"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              <span class="fc-red ml-1" v-show="tipsisshow">请选择手寸大小</span>
            </li>
            <li v-if="set.gem == '1'">
              <span style="vertical-align: top;" class="fc-gray ls2">主石</span>
              <el-input step="0.01" type="number" style="width: 2rem"  class="ml3 w20"  placeholder="" v-model="StoneNumselected">
                <template slot="append">ct</template>
              </el-input>
              <span class="fc-red ml-1" v-show="tipsisshow">请输入主石重量</span>
            </li>
            <li>
              <span class="fc-gray vertical-align-top ls2">刻字</span>
              <el-input
                class="ml3 form-controle f26"
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="letteringtext">
              </el-input>
            </li>
          </ul>
          <div class="btn-box">
            <button v-if="set.ring == '1'" class="btn-w" @click="buyrings()">购买戒托</button>
            <button @click="skippagekc()" v-if="set.ring == '1'" class="btn-b">选钻定制</button>
            <!--裸钻列表-->
            <button @click="skippagelz()"  v-if="set.ring == '3'" class="btn-b">下一步</button>
            <!--确认订单-->
            <button v-if="set.ring == '2'" @click="skippage()"  class="btn-b">下一步</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    created() {
      this.initialize();
      this.restset();
      if(this.$route.query.did){
        this.did=this.$route.query.did
      };
      if(this.$route.query.num){
        this.rid=this.$route.query.num
      };
    },
    data() {
      return {
        /*设置公用组件数据*/
        set: JSON.parse(this.$route.query.set),
        /*主石选项显示隐藏*/
        did: this.$route.query.did,
        rid: this.$route.query.num,
        /*材质*/
        texturelist: '',
        texturelistone: '',
        texturedata: this.texturelistone,
        /*手寸*/
        HandNumselected: '',
        /*手寸和主石提示框,默认是隐藏的*/
        tipsisshow: false,
        /*刻字*/
        letteringtext: '',
        HandNum: '',
        /*主石*/
        StoneNumselected: '',
        /*返回参数*/
        pruductdetails: '',
        /*收藏数据*/
        collectData: '0', /*未收藏：0，已收藏：1*/
        /*计算价格展示*/
        countpricedata: false,
        countpricetxt: '',
        /*戒托信息列表需要路由传参*/
        clientmsg: {
          lettering:'',
          StoneNumselected:'',
          material:'',
          size:'',
        },
        /*获取到价格后传递给下一页面的数据*/
        pricepushdata: '',
        /*记录选钻参数*/
        choosediadata:{
          maxweight:'',
          minweight:'',
          shape:''
        }
      }
    },
    methods: {
      /*取消收藏接口*/
      clearcollect(){
        var url = this.BASEURL+'/index.php?action=clean_collection';
        this.$http.get(url, {
          params: {
            id: this.rid,
          }
        }, {}).then(response => {
          if(response.body.error_code == 0){
            if(response.body=='1'){
              this.collectData = '0'
            }else if(response.body=='0'){
              this.collectData = '1'
            }
          }
        }, response => {
          console.log(response);
        });
      },
      /*初始化参数*/
      initialize() {
        var url = this.BASEURL+'/index.php?action=ringcare_detail';
        this.$http.get(url, {
          params: {
            rid: this.rid,
          }
        }, {}).then(response => {
          if(response.body.error_code == 0) {
            this.pruductdetails = response.body.result;
            this.HandNum = response.body.result.handsize;
            this.collectData = response.body.result.collection;
            this.texturelist = response.body.result.material;
            this.choosediadata.minweight = this.pruductdetails.w_min;
            this.choosediadata.maxweight = this.pruductdetails.w_max;
            this.choosediadata.shape = this.pruductdetails.shape;
          }
        }, response => {
          console.log(response);
        });
      },
      /*购买戒托*/
      buyrings() {
        /*只买空托的时候手寸和主石重量为必填项，需要填写后才能添加进购买车；*/
        if (this.HandNumselected != '0' && this.StoneNumselected != '') {
          if (this.StoneNumselected >this.pruductdetails.w_max ||  this.StoneNumselected < this.pruductdetails.w_min) {
            this.messagedata = '主石重量填写不正确';
            this.message();
            this.tipsisshow = true;
          }else{
            this.tipsisshow = false;
            this.openonlydiamond('成功添加进购物车','前往购物车','继续购买','Shopcar','Productlist',true)
          }
        } else {
          this.tipsisshow = true;
        }
      },
      /*收藏接口*/
      collectPort() {

        var url = this.BASEURL+'/index.php?action=collection';
        this.$http.get(url, {
          params: {
            rid: this.rid,
          }
        }, {}).then(response => {
          if (response.body.result == 'SUCCESS') {
            this.collectData = '1'
          }
        }, response => {
          console.log(response);
        });
      },
      /*实时计算价格*/
      countprice() {
        if(this.texturedata != '' && this.HandNumselected != ''){
          if(this.zhisshow){
            if (this.texturedata && this.HandNumselected!='0' && this.StoneNumselected && this.StoneNumselected!='0') {
              this.countpricefun();
              this.countpricedata = true;
            } else {
              this.countpricedata = false;
            }
          }else {
            if (this.texturedata && this.HandNumselected!='0') {
              this.countpricefun();
              this.countpricedata = true;
            } else {
              this.countpricedata = false;
            }
          }
        }else {
          this.countpricedata = false;
        }
      },
      /*计算价格方法*/
      countpricefun(){
        var url = this.BASEURL+'/index.php?action=ring_price';
        this.$http.get(url, {
          params: {
            rid: this.rid,
            size: this.HandNumselected,
            material: this.texturedata,
          }
        }, {}).then(response => {
          if(response.body.error_code == 0){
            this.countpricedata = true;
            this.countpricetxt = response.body.result.total_price;
            this.clientmsg.size = this.HandNumselected;
            this.clientmsg.material = this.texturedata;
            this.clientmsg.StoneNumselected = this.StoneNumselected;
            this.clientmsg.lettering = this.letteringtext;
            this.pricepushdata = response.body.result;
          }
        }, response => {
          console.log(response);
        });
      },
      /*点击下一步，实现带参跳转，跳转订单*/
      skippage(){
        /*判断是否有主石选项*/
        /*有*/
        if(this.zhisshow) {
          if (this.texturedata && this.HandNumselected!='0' && this.StoneNumselected && this.StoneNumselected!='0') {
            this.tipsisshow = false;
            this.countprice();
            /*带参数跳转到下个页面*/
            this.$router.push({
              name: 'CommoncustomOrder',
              query: {clientmsg:  JSON.stringify(this.clientmsg), pricepushdata: JSON.stringify(this.pricepushdata), rid: this.rid,did: this.did}
            });
          } else {
            this.tipsisshow = true;
          }
        }else {
          /*没有*/
          if (this.texturedata && this.HandNumselected!='0' ) {
            this.tipsisshow = false;
            this.countprice();
            /*带参数跳转到下个页面*/
            this.$router.push({
              name: 'CommoncustomOrder',
              query: {clientmsg:  JSON.stringify(this.clientmsg), pricepushdata: JSON.stringify(this.pricepushdata), rid: this.rid,did: this.did,letteringtext:this.letteringtext}
            });
          } else {
            this.tipsisshow = true;
          }
        }

      },
      /*点击下一步，实现带参跳转,跳转库存列表*/
      skippagekc(){

        if (this.texturedata && this.HandNumselected!='') {
          this.tipsisshow = false;
          this.countprice();
          /*带参数跳转到下个页面*/
          this.$router.push({
            name: 'InventoryList',
            query: {set:JSON.stringify(this.set),clientmsg: JSON.stringify(this.clientmsg), pricepushdata: JSON.stringify(this.pricepushdata), rid: this.rid,did: this.did,letteringtext:this.letteringtext,choosediadata:JSON.stringify(this.choosediadata)}
          });
        } else {
          this.tipsisshow = true;
        }
      },
      skippagelz(){
        if (this.texturedata && this.HandNumselected!='0' ) {
          this.tipsisshow = false;
          this.countprice();
          /*带参数跳转到下个页面*/
          this.$router.push({
            name: 'InventoryList',
            query: {set:JSON.stringify(this.set),clientmsg:  JSON.stringify(this.clientmsg), pricepushdata: JSON.stringify(this.pricepushdata), rid: this.rid,letteringtext:this.letteringtext,choosediadata:JSON.stringify(this.choosediadata)}
          });
        } else {
          this.tipsisshow = true;
        }
      },
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      $route(){
        this.initialize();
        this.restset();
        if(this.$route.query.did){
          this.did=this.$route.query.did
        };
        if(this.$route.query.num){
          this.rid=this.$route.query.num
        };
      },
      texturedata: function () {
        this.countprice();
      },
      HandNumselected: function () {
        this.countprice();
      },
      StoneNumselected: function (val) {
        if((/([1-9]\d*(\.\d*[1-9])?)|(0\.\d*[1-9])/).test(val)){
          this.countprice();
        }else {
          return false
        }

      },
    }
  }

</script>
<style type="text/css">


</style>
