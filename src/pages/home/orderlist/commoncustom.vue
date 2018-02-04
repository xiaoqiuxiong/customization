<template>
  <div class="orderlist_a">
    <div class="shopcar clearfix">
      <div class="shopcarleft w50 pull-left pl-25">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
            <span>商品信息</span>
          </div>
        </div>
        <ul class="productlist">
          <li class="product-item clearfix">
            <div class="img">
              <img src="../../../assets/image/round.png" height="150" width="150" alt="">
            </div>
            <div class="details">
              <ul class="detailslist bb1 clearfix ring">
                <li class="pull-left f000 pr">
                  名称<span class="f000 name pa">{{ringdata.name}}</span>
                </li>
                <li class="pull-left f000">
                  款号<span class="f000">{{ringdata.fnum}}</span>
                </li>
                <li class="pull-left">
                  辅石<span>{{ringdata.fushi}}</span>
                </li>
                <li class="pull-left">
                  手寸<span>{{ringdata.handsize}}</span>
                </li>
                <li class="pull-left">
                  材质<span>{{ringdata.material}}</span>
                </li>
                <li class="pull-left">
                  刻字<span>{{ringdata.lettering}}</span>
                </li>
                <li class="pull-left">
                  金重<span>{{ringdata.weight}}</span>
                </li>
              </ul>
              <div class="bb1 pr">
                <p>¥ <span class="fc-blue">{{ringdata.price}}</span> 元</p>
              </div>
            </div>
          </li>
          <li class="product-item clearfix">
            <div class="img">
              <img v-if="diamondsdata.shape == 'ROUND' " src="../../../assets/image/round.png" height="393" width="393"
                   alt=""><!--圆形-->
              <img v-if="diamondsdata.shape == 'PRINCESS' " src="../../../assets/image/cushion.png" height="393"
                   width="393" alt=""><!--公主房-->
              <img v-if="diamondsdata.shape == 'EMERALD' " src="../../../assets/image/zuanshi_emerald.png" height="393"
                   width="393" alt=""><!--祖母绿-->
              <img v-if="diamondsdata.shape == 'MARQUISE' " src="../../../assets/image/marquise.png" height="393"
                   width="393" alt=""><!--橄榄型-->
              <img v-if="diamondsdata.shape == 'OVAL' " src="../../../assets/image/oval.png" height="393" width="393"
                   alt=""><!--椭圆形-->
              <img v-if="diamondsdata.shape == 'ASSCHER' " src="../../../assets/image/Asscher.png" height="393"
                   width="393" alt=""><!--雷蒂恩-->
              <img v-if="diamondsdata.shape == 'PEAR' " src="../../../assets/image/pear.png" height="393" width="393"
                   alt=""><!--水滴形-->
              <img v-if="diamondsdata.shape == 'HEART' " src="../../../assets/image/heart.png" height="393" width="393"
                   alt=""> <!--心形-->
              <img v-if="diamondsdata.shape == 'TRILLION' " src="../../../assets/image/round_2_3.jpg" height="393"
                   width="393" alt=""><!--三角形-->
              <img v-if="diamondsdata.shape == 'CUSHION' " src="../../../assets/image/radiant.png" height="393"
                   width="393" alt=""><!--垫形-->
            </div>
            <div class="details">
              <ul class="detailslist  bb1 clearfix ring">
                <li class="pull-left f000 pr">
                  货号<span class="f000 name pa">{{diamondsdata.ref}}</span>
                </li>
                <li class="pull-left f000">
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='ROUND'" class="f000">圆形</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='PRINCESS'" class="f000">公主方</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='EMERALD'" class="f000">祖母绿</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='HEART'" class="f000">心形</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='OVAL'" class="f000">椭圆形</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='PEAR'" class="f000">水滴形</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='MARQUISE'" class="f000">橄榄形</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='ASSCHER'" class="f000">雷蒂恩</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='CUSHION'" class="f000">垫形</span>
                  <span style="margin-left: -.26rem;" v-if="diamondsdata.shape=='TRILLION'" class="f000">三角形</span>
                  <span style="margin-left: -.26rem;" class="f000">{{diamondsdata.size}}</span>
                </li>
                <li class="pull-left">
                  颜色<span>{{diamondsdata.color}}</span>
                </li>
                <li class="pull-left">
                  净度<span>{{diamondsdata.clarity}}</span>
                </li>
                <li class="pull-left">
                  切工<span>{{diamondsdata.cut}}</span>
                </li>
                <li class="pull-left">
                  抛光<span>{{diamondsdata.polish}}</span>
                </li>
                <li class="pull-left">
                  对称<span>{{diamondsdata.sym}}</span>
                </li>
              </ul>
              <div class="bb1 pr">
                <p>¥ <span class="fc-blue">{{diamondsdata.price}}</span> 元</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="account pt-6"><p class=" pr1">合计：&nbsp;¥ <span class="f36">{{orderdetail.price}}</span>
          元</p></div>
      </div>
      <div class="shopcarright w50 pull-left pl1 pr-25">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productdetails.png" height="27" width="34" alt="">
            <span>订单信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent">
          <ul>
            <li class="clearfix">
              <span class="title">订单编号： </span>
              <span  class="w80 f000"  v-html="orderdetail.order_id"></span>
            </li>
            <li class="clearfix">
              <span class="title w20">顾客姓名：</span>
              <el-input :disabled="formGroundsStatus" :value="cname" v-model="cname" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input>
            </li>
            <li class="clearfix">
              <span class="title">顾客电话：</span>
              <el-input :disabled="formGroundsStatus" :value="cphone" v-model="cphone" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input>
            </li>
            <li class="clearfix">
              <span class="title">顾客备注：</span>
              <el-input :disabled="formGroundsStatus" :value="cremark" v-model="cremark" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input>
            </li>
            <li class="clearfix">
              <span class="title">销售人员：</span>
              <el-select size="small" :disabled="formGroundsStatus" :value="salename"  v-model="salename" clearable placeholder="请选择" class="w80 orderdetail_ml15 salesmans_box">
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
            <li class="clearfix" v-if="orderdetail.cash != '0'">
              <span class="title">优惠价格：</span>
              <el-input :disabled="formGroundsStatus" :value="cash" type="number" v-model="cash"  class="w30 orderdetail_ml15" placeholder=""></el-input>
              <span v-if="(/^[1-9]$/.test(discount))" class="w10 tips" >{{discount}} 折</span>
            </li>
            <li class="clearfix">
              <span class="title">预收定金：</span>
              <el-input :disabled="formGroundsStatus" :value="deposit" type="number" v-model="deposit" class="w30 orderdetail_ml15" placeholder=""></el-input>
              <span v-if="(/^[1-9]\d*$/.test(earnestratio))" class="w10 tips">{{earnestratio}} %</span>
            </li>
            <li class="clearfix">
              <span class="title">尾款需付：</span>
              <el-input :disabled="formGroundsStatus" :value="tailcash" type="number" v-model="tailcash" class="w30 orderdetail_ml15" placeholder=""></el-input>
              <span v-if="(/^[1-9]\d*$/.test(finalratio))" class="w10 tips">{{finalratio}} %</span>
            </li>
            <li class="clearfix line pr">
              <span class="title"></span>
              <div class="w80"></div>
            </li>
            <li class="clearfix">
              <span class="title fc-red">订单状态：</span>
              <!-- 1、待审核（IPAD端显示待处理）
              2、待建模（深度定制特有）
              3、建模中（开始建模后，等待输入定价）
              4、待顾客确认（深度定制特有）
              5、待定制（审核通过的订单）
              6、定制中（开始定制后，等待发货）
              7、待确认收货（已经发货，等待门店确认收货）
              8、已完成（门店已经确认收货，订单结束了）
              9、审核不通过（订单审核没有通过）
              10、已关闭（订单由后台主动关闭）-->
              <!--"-1审核失败 0待审核 1未定义 2审核通过 3制作中 4制作但暂停中(变更) 5已发货 6已到货 9已关闭10建模中11待定价12待顾客确认13顾客已确认"-->
              <span v-if="orderdetail.status == '0'" class="w80 fc-red" type="text">待审核</span>
              <span v-if="orderdetail.status == '1' && orderdetail.ordertype == '3'"  class="w80 fc-red" >待建模</span>
              <span v-if="orderdetail.status == '1' && orderdetail.ordertype != '3'"  class="w80 fc-red" >待定制</span>
              <span v-if="orderdetail.status == '2' && orderdetail.ordertype == '3'" class="w80 fc-red">待建模</span>
              <span v-if="orderdetail.status == '2' && orderdetail.ordertype != '3'" class="w80 fc-red">待定制</span>
              <span v-if="orderdetail.status == '3'" class="w80 fc-red" type="text">定制中</span>
              <span v-if="orderdetail.status == '4'" class="w80 fc-red" type="text">定制中</span>
              <span v-if="orderdetail.status == '5'" class="w80 fc-red" type="text">待确认收货</span>
              <span v-if="orderdetail.status == '6'" class="w80 fc-red" type="text">已完成</span>
              <span v-if="orderdetail.status == '9'" class="w80 fc-red" type="text">已关闭</span>
              <span v-if="orderdetail.status == '10'" class="w80 fc-red" type="text">建模中</span>
              <span v-if="orderdetail.status == '11'" class="w80 fc-red" type="text">建模中</span>
              <span v-if="orderdetail.status == '12'" class="w80 fc-red" type="text">待顾客确认</span>
              <span v-if="orderdetail.status == '13'" class="w80 fc-red" type="text">待定制</span>
              <span v-if="orderdetail.status == '-1'" class="w80 fc-red" type="text">审核不通过</span>
            </li>
            <li class="clearfix" v-if="orderdetail.status == '5'">
              <span class="title">快递公司：</span>
              <span class="w80" type="text" v-html="orderdetail.logistic"></span>
            </li>
            <li class="clearfix" v-if="orderdetail.status == '5'">
              <span class="title">快递单号：</span>
              <span class="w80" type="text" v-html="orderdetail.logistic_num"></span>
            </li>
            <li class="clearfix line pr">
              <span class="title"></span>
              <div class="w80"></div>
            </li>
            <li class="clearfix">
              <span class="title"></span>
              <button v-if="orderdetail.status == '5'" class="mybtn w80 pull-left" @click="ConfirmReceipt(id)"> 确认收货
              </button>
              <button @click='amendOrder' v-if="orderdetail.status == '0'" class="mybtn w30 pull-left" style="margin-right:.2rem">{{formGroundsStatus_btn_txt}}</button>
              <router-link  v-if="orderdetail.status == '0'" :to="{name:'OrderlistHome',query:{page:page}}"
                           class="btn-w w30 pull-left" style="padding: .2rem;font-size: .32rem;text-align: center;"> 返回
              </router-link>
              <router-link v-else :to="{name:'OrderlistHome',query:{page:page}}" class="mybtn w80 pull-left"> 返回</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    created() {
      this.initialize()
    },
    data() {
      return {
        /*传过来的id*/
        id: this.$route.query.id,
        /*订单数据*/
        orderdetail: '',
        /*戒托信息*/
        ringdata: '',
        /*裸钻信息*/
        diamondsdata: {},
        /*确认收货按钮显示状态*/
        btnisshow: '',
        /*折扣*/
        discount: '',
        /*定金比例*/
        earnestratio: '',
        /*尾款比例*/
        finalratio: '',
        /*表单元素编辑状态*/
        formGroundsStatus: true,
        /*传递过来的页码*/
        page:0,
        /*表单元素编辑状态按钮文本*/
        formGroundsStatus_btn_txt: '修改订单',
        /*优惠价格*/
        cash: 0,
        /*预收定金*/
        deposit: 0,
        /*尾款需付*/
        tailcash: 0,
        /*销售员*/
        salename: '',
        /*顾客姓名*/
        cname: '',
        /*顾客电话*/
        cphone: '',
        /*顾客备注*/
        cremark: '',
        /*门店销售员*/
        salesmans: '',
      }
    },
    methods: {
      /*修改订单*/
      amendOrder() {
        if(this.formGroundsStatus){
          this.formGroundsStatus = false
          this.formGroundsStatus_btn_txt = '确认修改'
        }else{
        /*提交修改信息*/
        //判断数据是否规范
        /*判断顾客姓名*/
        if (this.cname == "" ) {
          this.messagedata = '请输入顾客姓名';
          this.message();
          return false
        }
        /*判断电话号码*/
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.cphone))) {
          this.messagedata = '请正确输入电话号码';
          this.message();
          return false
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
          return false
        }
        /*判断预收定金、尾款、优惠价格是否大于0*/
        if(parseFloat(this.deposit) < 0 || parseFloat(this.tailcash) < 0 || parseFloat(this.cash) < 0){
          this.messagedata = '优惠价格、预收定金 和 需付尾款 输入不规范';
          this.message();
          return false
        }
        var url = this.BASEURL+'/index.php?action=amend_orderdetail';
        this.$http.post(url, {
            orderid: this.id,
            cname: this.cname,
            cphone: this.cphone,
            cremark: this.cremark,
            salename: this.salename,
            deposit: this.deposit,
            tailcash: this.tailcash,
            cash: this.cash,
            // cname 顾客姓名，cphone 顾客电话，cremark 顾客备注，salename  销售人员，deposit 定金，tailcash  尾款
        }, {emulateJSON: true}).then(response => {
          if (response.body.error_code == 0) {
            this.messagedata = '修改订单成功';
            this.message();
            // 修改成功修改按钮
            this.formGroundsStatus = true
            this.formGroundsStatus_btn_txt = '修改订单'
          }else if(response.body.error_code == 90001){
            this.messagedata = '修改订单成功';
            this.message();
            // 修改成功修改按钮
            this.formGroundsStatus = true
            this.formGroundsStatus_btn_txt = '修改订单'
           }else{
            this.messagedata = '修改订单失败';
            this.message();
           }
        }, response => {
          this.messagedata = '修改订单失败';
          this.message();
          console.log(response);
          return false;
        });
        }
      },
      /*初始化参数*/
      initialize() {
        if(this.getCookie("ringsetting_data")){
          var ringsetting_data_str = this.getCookie("ringsetting_data");
          var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
          this.salesmans = ringsetting_data['店员名称'];
        }
        var url = this.BASEURL+'/index.php?action=order_detail';
        this.$http.get(url, {
          params: {
            orderid: this.id,
          }
        }, {}).then(response => {
          if (response.body.error_code == 0) {
            this.ringdata = response.body.orderinfo.orderinfo.ringinfo;
            this.diamondsdata = response.body.orderinfo.orderinfo.diamonds;
            this.orderdetail = response.body.orderinfo;
            this.btnisshow = this.orderdetail.status;
            /*优惠价格*/
            this.cash = this.orderdetail.cash;
            /*预收定金*/
            this.deposit = this.orderdetail.deposit;
            /*尾款需付*/
            this.tailcash = this.orderdetail.tailcash;
            /*销售员*/
            this.salename = this.orderdetail.salename;
            /*顾客姓名*/
            this.cname = this.orderdetail.cname;
            /*顾客电话*/
            this.cphone = this.orderdetail.cphone;
            /*顾客备注*/
            this.cremark = this.orderdetail.cremark;
            /*折扣*/
            this.discount = this.zhekou(this.orderdetail.price, this.orderdetail.cash)
            /*定金比例*/
            this.earnestratio = this.priceratio(this.orderdetail.cash, this.orderdetail.deposit)
            /*尾款比例*/
            this.finalratio = this.priceratio(this.orderdetail.cash, this.orderdetail.tailcash)

          }
        }, response => {
          console.log(response);
        });
        if(this.$route.query.page){
          this.page = this.$route.query.page
        };
      },

    },
    watch: {
      $route(){
        this.initialize()
      },
      /*优惠价格*/
      cash (newVal,oldVal) {
        /*折扣*/
        this.discount = this.zhekou(this.orderdetail.price, newVal)
        this.deposit = this.cash - this.tailcash
        this.tailcash = this.cash - this.deposit
        /*计算定金和尾款比例前，先判断是否有优惠价格*/
        if (newVal == '0' || newVal == '') {
          /*定金比例*/
          this.earnestratio = this.priceratio(newVal, this.deposit)
          /*尾款比例*/
          this.finalratio = this.priceratio(newVal, this.tailcash)
        } else {
          /*定金比例*/
          this.earnestratio = this.priceratio(newVal, this.deposit)
          /*尾款比例*/
          this.finalratio = this.priceratio(newVal, this.tailcash)
        }
      },
      /*预收定金*/
      deposit (newVal,oldVal) {
        this.tailcash = this.cash - newVal
        /*计算定金和尾款比例前，先判断是否有优惠价格*/
        if (this.cash == '0' || this.cash == '') {
          /*定金比例*/
          this.earnestratio = this.priceratio(this.cash, newVal)
          /*尾款比例*/
          this.finalratio = this.priceratio(this.cash, this.tailcash)
        } else {
          /*定金比例*/
          this.earnestratio = this.priceratio(this.cash, newVal)
          /*尾款比例*/
          this.finalratio = this.priceratio(this.cash, this.tailcash)
        }
      },
      /*尾款需付*/
      tailcash (newVal,oldVal) {
        this.deposit = this.cash - newVal
        /*计算定金和尾款比例前，先判断是否有优惠价格*/
        if (this.cash == '0' || this.cash == '') {
          /*定金比例*/
          this.earnestratio = this.priceratio(this.cash, this.deposit)
          /*尾款比例*/
          this.finalratio = this.priceratio(this.cash, newVal)
        } else {
          /*定金比例*/
          this.earnestratio = this.priceratio(this.cash, this.deposit)
          /*尾款比例*/
          this.finalratio = this.priceratio(this.cash, newVal)
        }
      },
    }
  }
</script>
<style>
  .orderlist_a .orderdetail_ml15 .is-disabled>input{
      background-color: #fff;
      border: 0;
      margin-left: -15px;
  }
  
  .orderlist_a .orderdetail_ml15.is-disabled.w30>input{
    color: #48c2d3;
  }
  #app .orderlist_a .salesmans_box .el-input--small{
    width: 100%;
  }
  #app .orderlist_a .salesmans_box .el-input--small .el-input__inner{
    width: 100%;
  }
    #app .orderlist_a .orderdetail_ml15>input{
  }
  #app .orderlist_a .orderdetail_ml15.is-disabled>input{
      background-color: #fff;
      border: 0;
  }
  
  #app .orderlist_a .shopcar .shopcarright .shopcarrightcontent .el-input.w30{
    width: 30%;
  }
  #app .orderlist_a .orderdetail_ml15.el-textarea.is-disabled .el-textarea__inner{
    background-color: #fff;
    border: 0;
    resize : none;
  }
  #app .orderlist_a .orderdetail_ml15.el-select .is-disabled .el-input__inner{
    background-color: #fff;
    border: 0;
    resize : none;
  }
  #app .orderlist_a .orderdetail_ml15.el-select .is-disabled .el-input__suffix{
    display: none
  }
  #app .orderlist_a select[disabled="disabled"]{
    border: 0;
    -webkit-appearance: none;  
    -webkit-tap-highlight-color: #fff;  
    outline: 0;  
    text-align: center;
  }
  #app .orderlist_a input[disabled="disabled"]{
    border: 0;
    background-color: transparent;
  }
  #app .orderdetail_ml15.is-disabled>input{
      background-color: #fff;
      border: 0;
      margin-left: -15px;
  }
</style>
