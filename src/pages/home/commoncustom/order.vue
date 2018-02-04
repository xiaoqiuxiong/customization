<template>
  <div class="clearfix h100 productdetails commoncustomorder">
    <div class="productdetailsleft w50">
      <Swipermodule :pic="pruductdetails.ring_pic"></Swipermodule>
    </div>
    <div class="productdetailsright w50">
      <div class="top">
        <h3 class=" bb1 mt0 mb-4">
          <span class="bc-blue">裸钻详情</span>
        </h3>
        <div class="top-box clearfix pr">
          <div class="left-box pull-left">
            <div class="img img-white">
              <img v-if="diamonddatas.Shape == 'ROUND' " src="../../../assets/image/round.png" height="393" width="393"
                   alt=""><!--圆形-->
              <img v-if="diamonddatas.Shape == 'PRINCESS' " src="../../../assets/image/cushion.png" height="393"
                   width="393" alt=""><!--公主房-->
              <img v-if="diamonddatas.Shape == 'EMERALD' " src="../../../assets/image/zuanshi_emerald.png" height="393"
                   width="393" alt=""><!--祖母绿-->
              <img v-if="diamonddatas.Shape == 'MARQUISE' " src="../../../assets/image/marquise.png" height="393"
                   width="393" alt=""><!--橄榄型-->
              <img v-if="diamonddatas.Shape == 'OVAL' " src="../../../assets/image/oval.png" height="393" width="393"
                   alt=""><!--椭圆形-->
              <img v-if="diamonddatas.Shape == 'RADIANT' " src="../../../assets/image/Asscher.png" height="393"
                   width="393" alt=""><!--雷蒂恩-->
              <img v-if="diamonddatas.Shape == 'PEAR' " src="../../../assets/image/pear.png" height="393" width="393"
                   alt=""><!--水滴形-->
              <img v-if="diamonddatas.Shape == 'HEART' " src="../../../assets/image/heart.png" height="393" width="393"
                   alt=""> <!--心形-->
              <img v-if="diamonddatas.Shape == 'TRIANGLE' " src="../../../assets/image/round_2_3.jpg" height="393"
                   width="393" alt=""><!--三角形-->
              <img v-if="diamonddatas.Shape == 'CUSHION' " src="../../../assets/image/radiant.png" height="393"
                   width="393" alt=""><!--垫形-->
            </div>
            <router-link class="w100 mt-1 reelect-btn"
                         :to="{path:'/inventory',query:{set:JSON.stringify(this.setlist[5]),clientmsg: JSON.stringify(this.ringlist.senddata), pricepushdata: JSON.stringify(this.ringlist.sendpricedata), rid: this.ringlist.rid,letteringtext:this.letteringtext}}">重选
            </router-link>
          </div>
          <div class="right-box pull-left pa">
            <ul class="clearfix">
              <li class=" pull-left dis-ib w60">
                <div class="bb1">
                  <span class="name">货号</span><span class="details" v-html="diamonddatas.Ref"></span>
                </div>
              </li>
              <li class=" pull-left dis-ib w40">
                <div class="bb1">
                  <span class="name">价格</span><span
                  class="details fcBlue">¥ {{diamonddatas.totalPrice}}</span>
                </div>
              </li>
              <li class=" pull-left dis-ib w60">
                <div class="bb1">
                  <span class="name fblack" v-if="diamonddatas.Shape == 'ROUND'">圆形</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'PRINCESS'">公主方</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'EMERALD'">祖母绿</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'MARQUISE'">橄榄形</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'OVAL'">椭圆形</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'ASSCHER'">雷蒂恩</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'PEAR'">水滴形</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'HEART'">心形</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'TRILLION'">三角形</span>
                  <span class="name fblack" v-if="diamonddatas.Shape == 'CUSHION'">垫形</span
                  ><span style="margin-left: -.08rem;" class="details fblack">{{diamonddatas.Size}} 克拉</span>
                </div>
              </li>
              <li class=" pull-left dis-ib w40">
                <div class="bb1">
                  <span class="name ">颜色</span><span class="details ">{{diamonddatas.Color}}</span>
                </div>
              </li>
              <li class=" pull-left dis-ib w60">
                <div class="bb1">
                  <span class="name ">净度</span><span class="details">{{diamonddatas.Clarity}}</span>
                </div>
              </li>
              <li class=" pull-left dis-ib w40">
                <div class="bb1">
                  <span class="name ">切工</span><span class="details">{{diamonddatas.Cut}}</span>
                </div>
              </li>
              <li class=" pull-left dis-ib w60">
                <div class="bb1">
                  <span class="name ">抛光</span><span class="details">{{diamonddatas.Polish}}</span>
                </div>
              </li>
              <li class=" pull-left dis-ib w40">
                <div class="bb1">
                  <span class="name ">对称</span><span class="details">{{diamonddatas.Sym}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="head">
        <h3 class=" bb1 mt0 mb-4">
          <span class="bc-blue">戒托详情</span>
        </h3>
        <div class="title pl0">
          <div>
            <h4>{{pruductdetails.name}}</h4>
            <span class="fc-gray">{{pruductdetails.fnum}}</span>
            <router-link class="w100  reelect-btn pull-right"
                         :to="{path:'/product',query:{set:JSON.stringify(this.setlist[5]),did: this.ringlist.did}}">重选
            </router-link>
          </div>
          <p class="pb-2"><span class="fc-gray ls2">价格</span><span class="fc-blue f30 ml3"><span
            class="fc-blue"> ¥</span>
            <span class="fc-blue f36" v-if="!countpricedata">{{pruductdetails.p_min}} ~ {{pruductdetails.p_max}}</span>
            <span class="fc-blue f36"
                  v-if="countpricedata">{{ringlist.sendpricedata.total_price}}</span>
            </span></p>
          <p class="pb-2">
            <span class="fc-gray ls2">金重</span> <span
            class="fc-gray ml3">{{ringlist.sendpricedata.ring_weight}} 克</span>
            <span class="fc-gray ls3 ml1">辅石重</span>
            <span class="fc-gray ">{{ringlist.sendpricedata.f_weight}} ct</span>
          </p>
        </div>
      </div>
      <div class="foot pl0">
        <form class="bdn pt0" action="javascript:;" @submit="surecustomization()">
          <ul>
            <li>
              <span class="fc-gray ls2">材质</span>
              <span class="ml3">
                <el-radio-group v-model="texturedata" size="small" class="linecheckbox">
                  <el-radio-button v-for="(item,index) in texturelist" :key="index"
                                   :label="item.name"></el-radio-button>
                </el-radio-group>
            </span>
              <span class="fc-red" v-show="tipsisshow">请选择材质</span>
            </li>
            <li><span class="fc-gray ls2">手寸</span>
              <el-select class="ml3" clearable v-model="HandNumselected" size="small" placeholder="请选择">
                <el-option
                  v-for="item in HandNum"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              <span class="fc-red" v-show="tipsisshow">请选择手寸大小</span>
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
            <button type="submit" class="mybtn w100">提交定制</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    created() {
      this.initialize()
      this.watchfun()
    },
    data() {
      return {
        /*刻字输入信息*/
        letteringtext: '',
        /*手寸和材质提示框,默认是隐藏的*/
        tipsisshow: false,
        /*手寸*/
        /*手寸选项数据*/
        HandNum: '',
        /*手寸选中数据*/
        HandNumselected: '',
        /*材质*/
        texturedata: '',
        texturelist: '',
        /*返回参数*/
        pruductdetails: '',
        /*计算价格展示*/
        countpricedata: true,
        countpricetxt: '',
        /*戒托详情信息*/
        ringlist: {
          /*戒托id*/
          rid: this.$route.query.rid,
          /*裸钻id*/
          did: this.$route.query.did,
          /*初始化数据*/
          data: '',
          /*传过来的选择数据*/
          clientmsg: JSON.parse(this.$route.query.clientmsg),
          /*传递过来的价格返回数据*/
          sendpricedata: JSON.parse(this.$route.query.pricepushdata),
        },

        /*返回的裸钻详情数据*/
        diamonddatas: '',
        /*裸钻详情信息*/
        rightboxlist: [
        ],
        /*提交定制后，用sendtotal来存客户选择后的数据*/
        sendtotal: {
          rid: '',
          did: '',
          ringlist: {
            ring_fnum: '',
            ring_price: '',
            ring_weight: '',
            f_weight: '',
            ring_material: '',
            ring_handsize: '',
            ring_txt: '',
          }
        },
      };
    },
    methods: {
      /*确认定制接口配置*/
      surecustomization() {
        /*整理客户选择数据，保存到变量sendtotal里面，然后传给路由一起传给下一个页面*/
        this.sendtotal.rid = this.ringlist.rid;
        this.sendtotal.did = this.ringlist.did;
        this.sendtotal.ringlist.ring_fnum = this.pruductdetails.fnum;
        this.sendtotal.ringlist.ring_price = this.ringlist.sendpricedata.total_price;
        this.sendtotal.ringlist.ring_weight = this.ringlist.sendpricedata.ring_weight;
        this.sendtotal.ringlist.f_weight = this.ringlist.sendpricedata.f_weight;
        this.sendtotal.ringlist.ring_material = this.texturedata;
        this.sendtotal.ringlist.ring_handsize = this.HandNumselected;
        this.sendtotal.ringlist.ring_txt = this.letteringtext;
        var url = this.BASEURL + '/index.php?action=addorder';
        this.$http.get(url, {
          params: {
//            戒托：
            ring_id: this.sendtotal.rid,
            ring_name: this.pruductdetails.name,
            ring_fnum: this.pruductdetails.fnum,
            ring_fushi: this.ringlist.sendpricedata.f_weight,
            ring_weight: this.ringlist.sendpricedata.ring_weight,
            ring_handsize: this.HandNumselected,
            ring_lettering: this.letteringtext,
            ring_material: this.sendtotal.ringlist.ring_material,
            ring_price: this.ringlist.sendpricedata.total_price,
//            钻石：
            dia_id: this.sendtotal.did,
            dia_ref: this.diamonddatas.Ref,
            dia_price: this.diamonddatas.totalPrice,
            dia_size: this.diamonddatas.Size,
            dia_shape: this.diamonddatas.Shape,
            dia_color: this.diamonddatas.Color,
            dia_clarity: this.diamonddatas.Clarity,
            dia_cut: this.diamonddatas.Cut,
            dia_polish: this.diamonddatas.Polish,
            dia_sym: this.diamonddatas.Sym,
            dia_cert: this.diamonddatas.Cert,
          }
        }, {}).then(response => {
            if (response.body.error_code == 0) {

              /*带参数跳转到下个页面*/
              this.$router.push({
                name: 'Commoncustomdetails',
                query: {orderid: response.body.order_id, sendtotal: JSON.stringify(this.sendtotal)},
              });
            }else if(response.body.error_code == '90009' || response.body.error_code == '90005'){
              this.$router.push({name: 'Login'});
              return false
            }
          },
          response => {
            console.log(response);
          });
      },
      /*初始化参数*/
      initialize() {

        /*初始化裸钻数据*/
        var url = this.BASEURL + '/index.php?action=diamonds_detail';
        this.$http.get(url, {
          params: {
            id: this.ringlist.did,
          }
        }, {}).then(response => {
            if (response.body.error_code == 0) {
              this.diamonddatas = response.body.result;
            }else if(response.body.error_code == '90009' || response.body.error_code == '90005'){
              this.$router.push({name: 'Login'});
              return false
            }
          },
          response => {
            console.log(response);
          });
        /*初始化戒托数据*/
        var url = this.BASEURL + '/index.php?action=ringcare_detail';
        this.$http.get(url, {
          params: {
            rid: this.ringlist.rid,
          }
        }, {}).then(response => {
            if (response.body.error_code == 0) {
              this.pruductdetails = response.body.result;
              this.texturelist = response.body.result.material;
              this.HandNum = response.body.result.handsize;
            }else if(response.body.error_code == '90009' || response.body.error_code == '90005'){
              this.$router.push({name: 'Login'});
              return false
            }
          },
          response => {
            console.log(response);
          });
      },
      /*实时计算价格*/
      countprice() {
        if (this.zhisshow) {
          if (this.texturedata && this.HandNumselected != '0' && this.StoneNumselected && this.StoneNumselected != '0') {
            this.countpricefun();
            this.countpricedata = true;
          } else {
            this.countpricedata = false;
          }
        } else {
          if (this.texturedata && this.HandNumselected != '0') {
            this.countpricefun();
            this.countpricedata = true;
          } else {
            this.countpricedata = false;
          }
        }

      },
      /*计算价格方法*/
      countpricefun(){

        var url = this.BASEURL + '/index.php?action=ring_price';
        this.$http.get(url, {
          params: {
            rid: this.$route.query.rid,
            size: this.HandNumselected,
            material: this.texturedata,
          }
        }, {}).then(response => {
          if (response.body.error_code == 0) {
            this.countpricedata = true;
            this.countpricetxt = parseInt(response.body.result);
            this.ringlist.sendpricedata = response.body.result;
          }else if(response.body.error_code == '90009' || response.body.error_code == '90005'){
            this.$router.push({name: 'Login'});
            return false
          }
        }, response => {
          console.log(response);
        });
      },
      watchfun() {
        /*传过来的选择数据*/
        if(this.$route.query.clientmsg){
          this.ringlist.senddata = JSON.parse(this.$route.query.clientmsg)
          this.texturedata = this.ringlist.senddata.material
          this.HandNumselected = this.ringlist.senddata.size
        }
        if(this.$route.query.letteringtext){
          this.letteringtext = this.$route.query.letteringtext
        }
        /*传递过来的价格返回数据*/
        if(this.$route.query.pricepushdata){
          this.ringlist.sendpricedata = JSON.parse(this.$route.query.pricepushdata)
        }
        /*戒托id*/
        if (this.$route.query.rid) {
          this.ringlist.rid = this.$route.query.rid
        }
        /*裸钻id*/
        if (this.$route.query.did) {
          this.ringlist.did = this.$route.query.did
        }
      }
    },
    watch: {
      $route(){
//        this.initialize()
        this.watchfun()
      },
      texturedata: function () {
        this.countprice();
      },
      HandNumselected: function () {
        this.countprice();
      },
      texturedata: function () {
        this.countprice();
      }
    }
  }

</script>
<style type="text/css">
  .commoncustomorder .top-box .right-box li {
    padding:0;
  }

</style>
