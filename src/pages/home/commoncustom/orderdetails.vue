 <template>
  <div class="">
    <div class="shopcar clearfix commoncustomorder orderdetails">
      <div class="productdetailsleft w50 pull-left pl1">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
            <span>商品列表</span>
          </div>
        </div>
        <div class="top">
          <h3 class="  mt0 mb-2">
            <span class="bc-blue">裸钻详情</span>
          </h3>
          <div class="top-box clearfix pr">
            <div class="left-box pull-left">
              <div class="img img-white">
                <img v-if="diamonddatas.Shape == 'ROUND' " src="../../../assets/image/round.png" height="393"
                     width="393"
                     alt=""><!--圆形-->
                <img v-if="diamonddatas.Shape == 'PRINCESS' " src="../../../assets/image/cushion.png" height="393"
                     width="393" alt=""><!--公主房-->
                <img v-if="diamonddatas.Shape == 'EMERALD' " src="../../../assets/image/zuanshi_emerald.png"
                     height="393"
                     width="393" alt=""><!--祖母绿-->
                <img v-if="diamonddatas.Shape == 'MARQUISE' " src="../../../assets/image/marquise.png" height="393"
                     width="393" alt=""><!--橄榄型-->
                <img v-if="diamonddatas.Shape == 'OVAL' " src="../../../assets/image/oval.png" height="393" width="393"
                     alt=""><!--椭圆形-->
                <img v-if="diamonddatas.Shape == 'RADIANT' " src="../../../assets/image/Asscher.png" height="393"
                     width="393" alt=""><!--雷蒂恩-->
                <img v-if="diamonddatas.Shape == 'PEAR' " src="../../../assets/image/pear.png" height="393" width="393"
                     alt=""><!--水滴形-->
                <img v-if="diamonddatas.Shape == 'HEART' " src="../../../assets/image/heart.png" height="393"
                     width="393"
                     alt=""> <!--心形-->
                <img v-if="diamonddatas.Shape == 'TRIANGLE' " src="../../../assets/image/round_2_3.jpg" height="393"
                     width="393" alt=""><!--三角形-->
                <img v-if="diamonddatas.Shape == 'CUSHION' " src="../../../assets/image/radiant.png" height="393"
                     width="393" alt=""><!--垫形-->
              </div>
              <!--带参数跳转到裸钻库存-->
              <button class="w100 mt-1 fblack reelect-btn" @click="choosedia()">重选</button>
            </div>
            <div class="right-box pull-left pa">
              <ul class="clearfix">
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name">货号</span><span class="details" v-html="diamonddatas.Ref"></span>
                  </div>
                </li>
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name">价格</span
                    ><span class="details fcBlue">¥ {{diamonddatas.totalPrice}}</span>
                  </div>
                </li>
                <li class=" pull-left dis-ib w50">
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
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name ">颜色</span><span class="details ">{{diamonddatas.Color}}</span>
                  </div>
                </li>
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name ">净度</span><span class="details">{{diamonddatas.Clarity}}</span>
                  </div>
                </li>
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name ">切工</span><span class="details">{{diamonddatas.Cut}}</span>
                  </div>
                </li>
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name ">抛光</span><span class="details">{{diamonddatas.Polish}}</span>
                  </div>
                </li>
                <li class=" pull-left dis-ib w50">
                  <div class="bb1">
                    <span class="name ">对称</span><span class="details">{{diamonddatas.Sym}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="head mt-4">
          <h3 class=" mt0 mb-2">
            <span class="bc-blue">戒托详情</span>
          </h3>
          <div class="top-box pd-4">
            <div class=" ">
              <div class="title pl0">
                <div>
                  <button class="w100 fblack reelect-btn pull-right" @click="choosering()">重选</button>
                </div>
                <p class="pb-2"><span class="fc-gray ls2">款号</span> <span class="ml3">{{senddatalist.ringlist.ring_fnum}}</span>
                </p>
                <p class="pb-2"><span class="fc-gray ls2">价格</span><span class="fc-blue f30 ml3">
                  ¥ {{senddatalist.ringlist.ring_price.toFixed(2)}}</span></p>
                <p class="pb-2">
                  <span class="fc-gray ls2">金重</span> <span
                  class="fc-gray ml3">{{senddatalist.ringlist.ring_weight}} 克</span>
                  <span class="fc-gray ls3 pl1">辅石重</span> <span
                  class="fc-gray ">{{senddatalist.ringlist.f_weight}} ct</span>
                </p>
                <p class="pb-2"><span class="fc-gray ls2">材质</span> <span class="ml3 fc-gray">{{senddatalist.ringlist.ring_material}}</span>
                </p>
                <p class="pb-2"><span class="fc-gray ls2">手寸</span> <span class="ml3 fc-gray">{{senddatalist.ringlist.ring_handsize}}</span>
                </p>
                <p class=""><span class="fc-gray ls2">刻字</span> <span class="ml3 fc-gray">{{senddatalist.ringlist.ring_txt}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="account pt-6">
          <p class=" pr1">合计：&nbsp;¥ <span class="f36">{{totalPrice}}</span> 元</p>
        </div>
      </div>
      <div class="shopcarright w50 pull-left pl1 pr1">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productdetails.png" height="27" width="34" alt="">
            <span>顾客信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent">
          <h3 class="  mt0 mb-2">
            <span class="bc-blue">裸钻详情</span>
          </h3>
          <form action="javascript:;" @submit="pushorder()">
            <ul>
              <li class="clearfix">
                <span class="title w20">顾客姓名：</span>
                <el-input type="text" @focus="handleSelectname" v-bind:class="{checkoutbox: clientshowname}" class="w80"
                          v-model="client.name" placeholder=""></el-input>
              </li>
              <li class="clearfix">
                <span class="title">顾客电话：</span>
                <el-input type="tel" v-number-only  @focus="handleSelectphone" v-bind:class="{checkoutbox: clientshowphone}" class="w80" v-model="client.phone" placeholder=""></el-input>
              </li>
              <li class="clearfix">
                <span class="title">顾客备注：</span>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 6}"
                  placeholder=""
                  v-model="client.txt">
                </el-input>
              </li>
              <li class="clearfix line pr">
                <span class="title"></span>
                <div class="w80"></div>
              </li>
              <li class="clearfix">
                <span class="title">优惠价格：</span>
                <el-checkbox class="shopcarcheckbox" v-model="recommendmel"></el-checkbox>
                <transition name="fade">
                  <div v-show="recommendmel" class="dis-ib pl-25" style="width: 74%">
                    <el-input step="0.01" type="number" style="width: 50%" placeholder="" v-model="pricediscountsafter">
                      <template slot="append">元</template>
                    </el-input>
                    <tt v-if="(/^[1-9]$/.test(pricediscountstip))">
                      <tt class="pl48">{{pricediscountstip}}</tt>
                      <tt>折</tt>
                    </tt>
                  </div>
                </transition>
              </li>
              <li class="clearfix">
                <span class="title">预收定金：</span>
                <el-input step="0.01" type="number" class="w60" placeholder="" v-model="pricebefore">
                  <template slot="append">元</template>
                </el-input>
                <tt v-if="(/^[1-9]\d*$/.test(pricebeforetip)) && parseFloat(pricebeforetip) < 100">
                  <tt class="pl48" >{{pricebeforetip}}</tt>
                  <tt>%</tt>
                </tt>
              </li>
              <li class="clearfix">
                <span class="title">尾款需付：</span>
                <el-input step="0.01" type="number" class="w60" placeholder="" v-model="priceafter">
                  <template slot="append">元</template>
                </el-input>
                <tt v-if="(/^[1-9]\d*$/.test(priceaftertip)) && parseFloat(priceaftertip) < 100">
                  <tt class="pl48">{{priceaftertip}}</tt>
                  <tt>%</tt>
                </tt>
              </li>
              <li class="clearfix line pr">
                <span class="title"></span>
                <div class="w80"></div>
              </li>
              <li class="clearfix">
                <span class="title">销售店员：</span>
                <el-select  v-model="salesman" placeholder="请选择" @visible-change="handleSelectman" :disabled="disabled" v-bind:class="{checkoutbox: clientshowman}" class="w80 salesmans_box">
                  <el-option
                    v-for="(item,index) in salesmans"
                    :key="index"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </li>
              <li class="clearfix line pr">
                <span class="title"></span>
                <div class="w80"></div>
              </li>
              <li class="clearfix">
                <span class="title"></span>
                <button type="submit" class="mybtn w80 pull-left"> 提交订单</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 // type="text/ecmascript-6"
  export default {
    created() {
      this.initialize();
      this.routerfun()
    },
    data() {
      return {
        recommendmel: false,
        /*接收传递过来的订单号*/
        orderId: this.$route.query.orderid,
        /*接收传递过来的客户选择的数据*/
        senddatalist: JSON.parse(this.$route.query.sendtotal),
        /*返回的裸钻详情数据*/
        diamonddatas: '',
        /*合计的价格*/
        /*顾客信息client*/
        client: {
          name: '',
          phone: '',
          txt: '',
        },
        /*款项信息price*/
        pricediscountsafter: '', /*折后价*/
        pricediscounts: '',
        pricediscountstip: 0,
        pricebefore: '',
        pricebeforetip: 0,
        priceafter: '',
        priceaftertip: 0,
        /*销售员*/
        salesman: '',
        /*错误提示信息显示*/
        clientshowname: false,
        clientshowphone: false,
        clientshowman: false,
        /*门店销售员*/
        salesmans: '',
      }
    },
    methods: {
      /*重选钻石*/
      choosedia(){
        /*整理参数*/
        var data = this.senddatalist
        var letteringtext = data.ringlist.ring_txt
        var pricepushdata = data.ringlist
        var clientmsg = {}
        clientmsg.material = data.ringlist.ring_material
        clientmsg.size = data.ringlist.ring_handsize
        /*带参数跳转到下个页面*/
        this.$router.push({
          name: 'InventoryList',
          query: {clientmsg: JSON.stringify(clientmsg), pricepushdata: JSON.stringify(pricepushdata), rid: data.rid,letteringtext:letteringtext,set:JSON.stringify(this.setlist[5])}
        });
      },
      /*重选戒托*/
      choosering(){
        /*整理参数*/
        var data = this.senddatalist
        var letteringtext = data.ringlist.ring_txt
        var pricepushdata = data.ringlist
        var clientmsg = {}
        clientmsg.material = data.ringlist.ring_material
        clientmsg.size = data.ringlist.ring_handsize
        /*带参数跳转到下个页面*/
        this.$router.push({
          name: 'Productlist',
          query: { did: data.did,set:JSON.stringify(this.setlist[5])}
        });
      },
      /*折合价格*/
      countconvert(val){
        var a = this.totalPrice;
        if (parseFloat(this.pricediscountsafter) <= 0 || parseFloat(this.pricediscountsafter) >= a) {
          this.messagedata = '请输入正确金额';
          this.message();
          return false
        } else {
          this.pricediscountstip = (val / a).toFixed(1) * 10
          if (this.pricediscountstip == '10') {
            this.pricediscountstip = 9
          }
          if (this.pricediscountstip == '0') {
            this.pricediscountstip = 9
          }
        }

      },
      /*自动获取焦点判断值*/
      handleSelectname(){
        if (this.clientshowname) {
          this.clientshowname = false;
        }else if(this.client.name == ""){
          this.clientshowname = false;
        }
      },
      handleSelectphone(){
        if (this.clientshowphone) {
          this.clientshowphone = false;
        }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.client.phone))){
          this.clientshowphone = false;
        }
      },
      handleSelectman(){
        if (this.clientshowman) {
          this.clientshowman = false;
        }else if(this.salesman == ""){
          this.clientshowman = false;
        }
      },
      /*初始化参数*/
      initialize() {
        /*初始化裸钻数据*/
        var url = this.BASEURL+'/index.php?action=diamonds_detail';
        this.$http.get(url, {
          params: {
            id: this.senddatalist.did,
          }
        }, {}).then(response => {
            if (response.body.error_code == 0) {
              this.diamonddatas = response.body.result;
            } else if (response.body.error_code == '90009' || response.body.error_code == '90005') {
              this.$router.push({name: 'Logon'})
              return false
            }
          },
          response => {
            console.log(response);
          });
        /*初始化戒托数据*/
        var url = this.BASEURL+'/index.php?action=ringcare_detail';
        this.$http.get(url, {
          params: {
            rid: this.senddatalist.rid,
          }
        }, {}).then(response => {
            if (response.body.error_code == 0) {
              this.pruductdetails = response.body.result;
              this.texturelist = response.body.result.material;
              this.HandNum = response.body.result.handsize;

            } else if (response.body.error_code == '90009' || response.body.error_code == '90005') {
              this.$router.push({name: 'Logon'})
              return false
            }
          },
          response => {
            console.log(response);
          });
      },
      /*提交订单*/
      pushorder () {
        /*判断顾客姓名*/
        if (this.client.name == "" ) {
          this.messagedata = '请输入顾客姓名';
          this.message();
          this.clientshowname = true;
          return false
        }else {
          this.clientshowname = false;
        }
        /*判断电话号码*/
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.client.phone))) {
          this.messagedata = '请正确输入电话号码';
          this.message();
          this.clientshowphone = true;
          return false
        }else {
          this.clientshowphone = false;
        }
        /*判断销售员*/
        if (this.salesman == "") {
          this.messagedata = '请输入销售人员';
          this.message();
          this.clientshowman = true;
          return false
        }else {
          this.clientshowman = false;
        }
        /*/!*判断预收定金、尾款是否为空*!/
        if(this.pricebefore =='' || this.priceafter == ''){
          this.messagedata = '预收定金 和 需付尾款 不能为空';
          this.message();
          return false
        }*/
        /*判断预收定金、尾款、优惠价格是否大于或者等于总价*/
        if(parseFloat(this.pricebefore) <0 || parseFloat(this.priceafter) <0 || parseFloat(this.pricediscountsafter) <0){
          this.messagedata = '优惠价格、预收定金 和 需付尾款 输入不规范';
          this.message();
          return false
        }
        //2.判断是否有勾选折扣价(recommendmel的真假)，有就a=pricediscountsafter,没有就a=totalPrice
        var a = '';
        if (this.recommendmel) {
          a = this.pricediscountsafter
        } else {
          a = ''
        }
        /*拼接id*/
        var url = this.BASEURL+'/index.php?action=sureorder';
        this.$http.get(url, {
          params: {
            order_id: this.orderId,
            cname: this.client.name,
            cphone: this.client.phone,
            remark: this.client.txt,
            price: this.totalPrice,
            cash: a,
            deposit: this.pricebefore,
            tailcash: this.priceafter,
            salename: this.salesman,
          }
        }, {}).then(response => {
            if (response.body.result == 'SUCCESS') {
              this.$confirm('订单提交成功', {
                confirmButtonText: '前往首页',
                cancelButtonText: '订单中心',
                confirmButtonClass: 'btn-b',
                cancelButtonClass: 'btn-w',
              }).then(() => {
                this.$router.push({name: 'Index'});
              }).catch(() => {
                this.$router.push({name: 'OrderlistHome'});
              });
            } else if (response.body.error_code == '90009' || response.body.error_code == '90005') {
              this.$router.push({name: 'Logon'})
              return false
            }
          },
          response => {
            console.log(response);
          });
      },
      /*计算预付定金,计算尾款*//*计算尾款,计算预付定金*/
      countprice (n) {
        //判断是否选择折扣,如果没有选择折扣，就直接使用totalPrice,否者使用折后价this.pricediscountsafter
        var a = 0;
        if (!this.recommendmel) {
          a = (parseFloat(this.totalPrice)).toFixed(2)
        } else if (parseFloat(this.pricediscountsafter) > 0) {
          a = (parseFloat(this.pricediscountsafter)).toFixed(2)
        } else {
          a = (parseFloat(this.totalPrice)).toFixed(2)
        }
        if (n)/*计算预付定金,计算尾款*/{
          this.priceafter = (parseFloat(a - this.pricebefore))
          this.pricebefore = (parseFloat(a - this.priceafter))
          this.pricebefore = this.pricebefore
          this.priceafter = this.priceafter
          this.priceaftertip = Math.round((this.priceafter / a).toFixed(2) * 100);
          this.pricebeforetip = Math.round((this.pricebefore / a).toFixed(2) * 100);
        } else  /*计算尾款,计算预付定金*/{
          this.pricebefore = (parseFloat(a - this.priceafter))
          this.priceafter = (parseFloat(a - this.pricebefore))
          this.priceafter = this.priceafter
          this.pricebefore = this.pricebefore
          this.pricebeforetip = Math.round((this.pricebefore / a).toFixed(2) * 100);
          this.priceaftertip = Math.round((this.priceafter / a).toFixed(2) * 100);
        }

      },
      routerfun () {
        if(this.getCookie("ringsetting_data")){
          var ringsetting_data_str = this.getCookie("ringsetting_data");
          var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
          this.salesmans = ringsetting_data['店员名称'];
        }
        if (this.$route.query.orderid) {
          /*接收传递过来的订单号*/
          this.orderId = this.$route.query.orderid;
        }
        if (this.$route.query.sendtotal) {
          /*接收传递过来的客户选择的数据*/
          this.senddatalist = JSON.parse(this.$route.query.sendtotal);
        }
      }
    },
    watch: {
      $route() {
        /*路由初始化*/
        this.initialize();
        this.routerfun()
      },
      /*判断是否勾选折合*/
      recommendmel: function (val) {
        this.countprice(true)
      },
      /*优惠价格折扣*/
      pricediscountsafter(val){
        /*判断是否选择商品*/
        this.countconvert(val)
        /*计算预付定金,计算尾款*/
        this.countprice(true)
      },
      /*结算折合*/
      pricediscountstip() {
        var a = this.totalPrice;
        this.pricediscounts = (this.pricediscountstip / 100 * a).toFixed(2);
      },
      /*修改预收定金触发*/
      pricebefore: function (val) {
        this.countprice(true);
      },
      /*修改尾款触发*/
      priceafter: function () {
        this.countprice(false);
      },
      /*'client.phone': function (val) {
        this.client.phone = val.replace(/[^\d]/g, "");
      }*/
    },
    directives: {
        numberOnly: {
            bind: function(el) {
                el.handler = function() {
                  console.log(el.value)
                  
                }
                el.addEventListener('input', el.handler)
            },
            unbind: function(el) {
                el.removeEventListener('input', el.handler)
            }
        }
    },
    computed: {
      totalPrice() {
        var a = (this.senddatalist.ringlist.ring_price + this.diamonddatas.totalPrice).toFixed(2);
        return a;
      },
    }
  }

</script>
<style>
  .shopcar .shopcarright .shopcarrightcontent .salesmans_box .el-input{
    width: 100%;
  }
</style>
