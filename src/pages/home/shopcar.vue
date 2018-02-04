<template>
  <div class="">
    <div class="shopcar clearfix pr">
      <div class="header header-scroll w50">
        <div class="content">
          <img src="../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
          <span>商品列表</span>
          <div class="pull-right el-checkbox_me">
            <el-checkbox :disabled='checkAlldisabled'   sclass="shopcurcheckbox" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
        </div>
      </div>
      <div class="accountfix account" v-show="parseFloat(totalPrice) > 0">
        <p class=" pr1" style="margin: 0;">合计：&nbsp;¥ <span class="f36">{{totalPrice}}</span> 元</p>
        <p style="background-color:#fff;margin: 0;"></p>
      </div>
      <div class="shopcarleft pull-left w50" style="position: absolute;overflow: scroll;height:100%;top: 1.5rem;">
        <div class="">
          <ul class="productlist detailslist-scroll">
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" style="padding-bottom: 1.4rem">
              <li class="product-item clearfix" v-for="(item,index) in orderdetail">
                <el-checkbox class="pull-right shopcurcheckbox" :label="item.id" :key="item.info.price"></el-checkbox>
                <div class="ring" v-if="item.type == '1'">
                  <div class="img">
                    <img :src="item.info.pic" height="150" width="150" alt="">
                  </div>
                  <div class="details">
                    <ul class="detailslist  bb1 clearfix ring">
                      <li class="pull-left f000 pr">
                        名称<span class="f000 name pa">{{item.info.name}}</span>
                      </li>
                      <li class="pull-left f000">
                        款号<span class="f000">{{item.info.fnum}}</span>
                      </li>
                      <li class="pull-left">
                        材质<span>{{item.info.material}}</span>
                      </li>
                      <li class="pull-left">
                        手寸<span>{{item.info.handsize}}</span>
                      </li>
                    </ul>
                    <div class="bb1 pr">
                      <p>¥ <span class="fc-blue">{{parseFloat(item.info.price).toFixed(2)}}</span> 元</p>
                      <button @click="shopcardel($event,index)" :id="item.id" class="pa">删 除</button>
                    </div>
                  </div>
                </div>
                <div class="dia" v-if="item.type == '2'">
                    <div class="img">
                      <img v-if="item.info.shape == 'ROUND' " src="../../assets/image/round.png"
                           height="393"
                           width="393"
                           alt=""><!--圆形-->
                      <img v-if="item.info.shape == 'PRINCESS' " src="../../assets/image/cushion.png"
                           height="393"
                           width="393" alt=""><!--公主房-->
                      <img v-if="item.info.shape == 'EMERALD' " src="../../assets/image/zuanshi_emerald.png"
                           height="393"
                           width="393" alt=""><!--祖母绿-->
                      <img v-if="item.info.shape == 'MARQUISE' " src="../../assets/image/marquise.png"
                           height="393"
                           width="393" alt=""><!--橄榄型-->
                      <img v-if="item.info.shape == 'OVAL' " src="../../assets/image/oval.png"
                           height="393"
                           width="393"
                           alt=""><!--椭圆形-->
                      <img v-if="item.info.shape == 'RADIANT' " src="../../assets/image/Asscher.png"
                           height="393"
                           width="393" alt=""><!--雷蒂恩-->
                      <img v-if="item.info.shape == 'PEAR' " src="../../assets/image/pear.png"
                           height="393"
                           width="393"
                           alt=""><!--水滴形-->
                      <img v-if="item.info.shape == 'HEART' " src="../../assets/image/heart.png"
                           height="393"
                           width="393"
                           alt=""> <!--心形-->
                      <img v-if="item.info.shape == 'TRIANGLE' " src="../../assets/image/round_2_3.jpg"
                           height="393"
                           width="393" alt=""><!--三角形-->
                      <img v-if="item.info.shape == 'CUSHION' " src="../../assets/image/radiant.png"
                           height="393"
                           width="393" alt=""><!--垫形-->
                    </div>
                  <div class="details">
                    <ul class="detailslist  bb1 clearfix ring">
                      <li class="pull-left f000 pr">
                        货号<span class="f000 name pa">{{item.info.ref}}</span>
                      </li>
                      <li class="pull-left">
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='ROUND'">圆形</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='PRINCESS'">公主方</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='EMERALD'">祖母绿</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='HEART'">心形</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='OVAL'">椭圆形</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='PEAR'">水滴形</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='MARQUISE'">橄榄形</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='ASSCHER'">雷蒂恩</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='CUSHION'">垫形</span>
                        <span style="margin-left: -.26rem;" v-if="item.info.shape=='TRILLION'">三角形</span>
                        <span>{{item.info.size}}</span>
                      </li>
                      <li class="pull-left">
                        颜色<span>{{item.info.color}}</span>
                      </li>
                      <li class="pull-left">
                        净度<span>{{item.info.clarity}}</span>
                      </li>
                      <li class="pull-left">
                        切工<span>{{item.info.cut}}</span>
                      </li>
                      <li class="pull-left">
                        抛光<span>{{item.info.polish}}</span>
                      </li>
                      <li class="pull-left">
                        对称<span>{{item.info.sym}}</span>
                      </li>
                    </ul>
                    <div class="bb1 pr">
                      <p>¥ <span class="fc-blue">{{parseFloat(item.info.price).toFixed(2) }}</span> 元</p>
                      <button @click="shopcardel($event,index)" :id="item.id" class="pa">删 除</button>
                    </div>
                  </div>
                </div>
              </li>
            </el-checkbox-group>
          </ul>
        </div>
      </div>
      <div class="shopcarright w50 pull-left pl1 pr-25" style="margin-left: 50%">
        <div class="header">
          <div class="content">
            <img src="../../assets/image/icon/shopcar-productdetails.png" height="27" width="34" alt="">
            <span>顾客信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent">
          <form action="javascript:;" @submit="pushorder()">
            <ul>
              <li class="clearfix">
                <span class="title w20">顾客姓名：</span>
                <el-input :disabled="disabled" @focus="handleSelectname" v-bind:class="{checkoutbox: clientshowname}"
                          class="w80"
                          v-model="client.name" placeholder=""></el-input>
              </li>
              <li class="clearfix">
                <span class="title">顾客电话：</span>
                <el-input type="tel" :disabled="disabled" @focus="handleSelectphone"
                          v-bind:class="{checkoutbox: clientshowphone}" class="w80"
                          v-model="client.phone" placeholder=""></el-input>
              </li>
              <li class="clearfix">
                <span class="title">顾客备注：</span>
                <el-input
                  :disabled="disabled"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 6}"
                  placeholder="请输入内容"
                  v-model="client.txt">
                </el-input>
              </li>
              <li class="clearfix line pr">
                <span class="title"></span>
                <div class="w80"></div>
              </li>
              <li class="clearfix">
                <span class="title">优惠价格：</span>
                <el-checkbox :disabled="disabled" class="shopcarcheckbox" v-model="recommendmel"></el-checkbox>
                <transition name="fade">
                  <div v-show="recommendmel" class="dis-ib pl-25">
                    <el-input step="0.01" type="number"  :disabled="disabled" style="width: 50%"
                              placeholder="" v-model="pricediscountsafter">
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
                <el-input @focus="handleSelectpricebefore" step="0.01" type="number" @blur="verifydata()" :disabled="disabled" v-bind:class="{checkoutbox: clientshowpricebefore}" class="w60" placeholder=""
                          v-model="pricebefore">
                  <template slot="append">元</template>
                </el-input>
                <tt v-if="(/^[1-9]\d*$/.test(pricebeforetip)) && parseFloat(pricebeforetip) < 100">
                  <tt class="pl48" >{{pricebeforetip}}</tt>
                  <tt>%</tt>
                </tt>
              </li>
              <li class="clearfix">
                <span class="title">尾款需付：</span>
                <el-input step="0.01" type="number"  :disabled="disabled" class="w60" placeholder=""
                          v-model="priceafter">
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
                <span class="title">销售人员：</span>
                <el-select size="small" :disabled="disabled" v-model="salesman" placeholder="请选择" @visible-change="handleSelectman" v-bind:class="{checkoutbox: clientshowman}" class="w80 salesmans_box">
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
                <button :disabled="disabled" type="submit" class="mybtn w80 pull-left"> 提交订单</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    created() {
      this.initialize()
      if(this.checkedCities.length ==0){
        this.disabled = true
      }
    },
    data() {
      return {
        /*优惠价格开关*/
        recommendmel: false,
        /*订单数据*/
        orderdetail: '',
        checkAll: false,
        checkedCities: [],
        isIndeterminate: true,
        /*订单号列表*/
        orderdetailidlist: [],
        /*合计的价格*/
        totalPricedata: '',

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
        clientshowpricebefore: false,
        totalPrice: 0,
        /*输入框禁用*/
        disabled: true,
        /*全选选择框禁用*/
        checkAlldisabled:false,
        /*门店销售员*/
        salesmans: '',
      }
    },
    methods: {
      /*验证数据输入范围*/
      verifydata(){
      },
      /*折合价格*/
      countconvert(val){
        if (this.checkedCities.length == 0) {
          this.messagedata = '请选择商品';
          this.message();
          return false
        } else {
          this.pricediscountstip = this.zhekou(this.totalPrice, val)
        }
      },
      /*自动获取焦点判断值*/
      handleSelectname(){
        if (this.clientshowname) {
          this.clientshowname = false;
        }else{
          this.clientshowname = false;
        }
      },
      handleSelectphone(){
        if (this.clientshowphone) {
          this.clientshowphone = false;
        }else {
          this.clientshowphone = false;
        }
      },
      handleSelectman(){
        if (this.clientshowman) {
          this.clientshowman = false;
        }else {
          this.clientshowman = false;
        }
      },
      handleSelectpricebefore(){
        if (this.clientshowpricebefore) {
          this.clientshowpricebefore = false;
        }else {
          this.clientshowpricebefore = false;
        }
      },

      getStatus (urlStr) {
        var urlStrArr = urlStr.split('/')
        return urlStrArr[urlStrArr.length - 1]
      },
      handleCheckAllChange(val) {
        /*判断是否选择了商品，如果没有选择商品。就禁用右边的所有选项*/

        this.checkedCities = val ? this.orderdetailidlist : [];
        this.isIndeterminate = false;
        if(this.checkedCities.length == 0){
          this.disabled = true
          return false
        }else {
          this.disabled = false
        }
      },
      handleCheckedCitiesChange(value) {
        /*判断是否选择了商品，如果没有选择商品。就禁用右边的所有选项*/
        if(this.checkedCities.length == 0){
          this.disabled = true
          return false
        }else {
          this.disabled = false
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.orderdetailidlist.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.orderdetailidlist.length;
        }
      },
      /*初始化参数*/
      initialize() {
        if(this.getCookie("ringsetting_data")){
          var ringsetting_data_str = this.getCookie("ringsetting_data");
          var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
          this.salesmans = ringsetting_data['店员名称'];
        }
        var url = this.BASEURL+'/index.php?action=cartlist';
        this.$http.get(url, {
          params: {}
        }, {}).then(response => {
          if (response.body.error_code == 0) {
              this.orderdetail = response.body.result;
              for (var i = 0; i < this.orderdetail.length; i++) {
                this.orderdetailidlist.push(this.orderdetail[i].id);
                this.orderdetail[i].info = this.orderdetail[i].info;
              }
            }

        }, response => {
          console.log(response);
        });

      },
      /*购物车订单删除*/
      shopcardel(obj, index) {
        var url = this.BASEURL+'/index.php?action=diecart';
        this.$http.get(url, {
          params: {
            cid: event.currentTarget.id,
          }
        }, {}).then(response => {
          if (response.body.error_code == 0) {
            this.orderdetail.splice(index, 1);
            if (this.orderdetail == '') {
              this.disabled = true
              this.totalPrice = 0
              this.pricebefore = ''
              this.priceafter = ''
            }
            if(this.orderdetail.length == 0){
              this.checkAlldisabled =true
            }
          }

        }, response => {
          console.log(response);
        });
      },
      /*获取总价*/
      gettotalPrice() {
        console.log(this.totalPrice)
      },
      /*购物车订单提交*/
      pushorder () {
        /*判断商品*/
        if (this.checkedCities.length == 0) {
          this.messagedata = '请选择商品';
          this.message();
          return false
        }
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
        /*判断预付定金*/
        if (this.pricebefore != '' ){
          this.clientshowpricebefore = false;
        }else{
          this.messagedata = '请正确输入预收定金';
          this.message();
          this.clientshowpricebefore = true;
          return false
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
        /*判断预收定金、尾款、优惠价格是否大于0*/
        if(parseFloat(this.pricebefore) < 0 || parseFloat(this.priceafter) < 0 || parseFloat(this.pricediscountsafter) < 0){
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
        var idlist = this.checkedCities.toString();
        var url = this.BASEURL+'/index.php?action=cartorder';
        this.$http.get(url, {
          params: {
            pro_id: idlist,
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
                this.$router.push({name: 'Index',query:{tab:0}});
              }).catch(() => {
                this.$router.push({name: 'OrderlistHome',query:{tab:3}});
              });
            } else if (response.body.error_code == '90009' || response.body.error_code == '90005') {
              this.$router.push({name: 'Login'})
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
          this.priceafter = parseFloat(a - this.pricebefore)
          this.pricebefore = parseFloat(a - this.priceafter)
          this.pricebeforetip = this.priceratio(a,this.pricebefore)
          this.priceaftertip = this.priceratio(a,this.priceafter)
        } else  /*计算尾款,计算预付定金*/{
          this.pricebefore = parseFloat(a - this.priceafter)
          this.priceafter = parseFloat(a - this.pricebefore)
          this.pricebeforetip = this.priceratio(a,this.pricebefore)
          this.priceaftertip = this.priceratio(a,this.priceafter)
        }
        if(this.priceafter.toString().length>12){
          this.priceafter = this.priceafter.toFixed(2)
        }
        if(this.pricebefore.toString().length>12){
          this.pricebefore = this.pricebefore.toFixed(2)
        }
      },
    },
    watch: {
      $route(){
        this.initialize()
      },
      /*计算总价*/
      checkedCities: function (val) {
        this.totalPrice = 0
        for (var i = 0; i < val.length; i++) {
          for (var j = 0; j < this.orderdetail.length; j++) {
            if (this.orderdetail[j].id == val[i]) {
              this.totalPrice += Number(this.orderdetail[j].info.price);
            }
          }
        }
        this.totalPrice = this.totalPrice.toFixed(2)
        this.countprice(true);
        if (this.recommendmel) {
          this.countconvert(this.pricediscountsafter)
        }

      },
      /*判断是否勾选折合*/
      recommendmel: function (val) {
        this.countprice(true)
      },
      /*优惠价格折扣*/
      pricediscountsafter(val){
        if (this.checkedCities.length == 0) {
          this.messagedata = '请选择商品';
          this.message();
          return false
        }
        /*判断是否选择商品*/
        this.countconvert(val)
        /*计算预付定金,计算尾款*/
        this.countprice(true)
      },
      /*修改预收定金触发*/
      pricebefore: function (val) {
        if (this.checkedCities.length == 0) {
          this.messagedata = '请选择商品';
          this.message();
          return false
        }
        this.countprice(true);
      },
      /*修改尾款触发*/
      priceafter: function () {
        if (this.checkedCities.length == 0) {
          this.messagedata = '请选择商品';
          this.message();
          return false
        }
        this.countprice(false);
      },
      /*修改优惠折合触发*/
      pricediscounts: function (val) {
      }
    },
  }
</script>
<style>
  .el-checkbox_me {
    position: absolute;
    right: .45rem;
    display: inline-block
  }

  #app .shopcurcheckbox .el-checkbox__label {
    display: none;
  }

  .shopcarleft::-webkit-scrollbar {
    display: none
  }
/*  .header-scroll {
    position: fixed;
    top: .8rem;
    width: 50%;
    background: #fff;
    z-index: 2;
  }

  .detailslist-scroll {
    padding-top: 1.6rem;
    padding-bottom: 1.5rem;
  }*/
  #app .shopcar .shopcarright .shopcarrightcontent .salesmans_box .el-input{
    width: 100%;
  }
  #app .shopcar .shopcarright .shopcarrightcontent .salesmans_box .el-input .el-input__inner{
    width: 100%;
  }
</style>
