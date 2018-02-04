<template>
  <div class="depthcustomhome depthcustomdetails orderdetails orderlist_a">
    <div class="shopcar clearfix">
      <div class="shopcarleft w60 pull-left pl-25" style="position: absolute;
    left: 0px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;">
              <div class="commoncustomorder"  v-if="diamond_id" style="margin-bottom: .4rem">
          <div class="top">
            <div class="header header-scroll" style="width: 60%;right: auto;margin-left:-.25rem">
              <div class="content">
                <img src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
                <span>裸钻信息</span>
              </div>
            </div>
            <div class="top-box clearfix pr">
              <div class="left-box pull-left w20" style="margin-top:1.7rem;width:18%">
                <div class="img img-white">
                  <img v-if="diamonddatas.Shape == 'ROUND' " src="../../../assets/image/round.png" height="393" width="393"
                  alt=""><!-- 圆形 -->
                  <img v-if="diamonddatas.Shape == 'PRINCESS' " src="../../../assets/image/cushion.png" height="393"
                  width="393" alt=""><!-- 公主房 -->
                  <img v-if="diamonddatas.Shape == 'EMERALD' " src="../../../assets/image/zuanshi_emerald.png" height="393"
                  width="393" alt=""><!-- 祖母绿 -->
                  <img v-if="diamonddatas.Shape == 'MARQUISE' " src="../../../assets/image/marquise.png" height="393"
                  width="393" alt=""><!-- 橄榄型 -->
                  <img v-if="diamonddatas.Shape == 'OVAL' " src="../../../assets/image/oval.png" height="393" width="393"
                  alt=""><!-- 椭圆形 -->
                  <img v-if="diamonddatas.Shape == 'RADIANT' " src="../../../assets/image/Asscher.png" height="393"
                  width="393" alt=""><!-- 雷蒂恩 -->
                  <img v-if="diamonddatas.Shape == 'PEAR' " src="../../../assets/image/pear.png" height="393" width="393"
                  alt=""><!-- 水滴形 -->
                  <img v-if="diamonddatas.Shape == 'HEART' " src="../../../assets/image/heart.png" height="393" width="393"
                  alt=""><!--  心形 -->
                  <img v-if="diamonddatas.Shape == 'TRIANGLE' " src="../../../assets/image/round_2_3.jpg" height="393"
                  width="393" alt=""><!-- 三角形 -->
                  <img v-if="diamonddatas.Shape == 'CUSHION' " src="../../../assets/image/radiant.png" height="393"
                  width="393" alt=""><!-- 垫形 -->
                </div>
          
              </div>
              <div class="right-box pull-left" style="width: 82%;top: auto; right:auto;transform:inherit;margin-top:1.7rem">
                <ul class="clearfix">
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name">货号</span>
                      <span class="details" v-html="diamonddatas.Ref"></span>
                    </div>
                  </li>
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name">价格</span>
                      <span class="details fcBlue">¥ {{diamonddatas.totalPrice}}</span>
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
                      <span class="name fblack" v-if="diamonddatas.Shape == 'CUSHION'">垫形</span>
                      <span style="margin-left: -.08rem;" class="details fblack">{{diamonddatas.Size}} 克拉</span>
                    </div>
                  </li>
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name ">颜色</span>
                      <span class="details ">{{diamonddatas.Color}}</span>
                    </div>
                  </li>
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name ">净度</span>
                      <span class="details">{{diamonddatas.Clarity}}</span>
                    </div>
                  </li>
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name ">切工</span>
                      <span class="details">{{diamonddatas.Cut}}</span>
                    </div>
                  </li>
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name ">抛光</span>
                      <span class="details">{{diamonddatas.Polish}}</span>
                    </div>
                  </li>
                  <li class=" pull-left dis-ib w50">
                    <div class="bb1">
                      <span class="name ">对称</span>
                      <span class="details">{{diamonddatas.Sym}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div> 
         </div>
        </div>
        <div class="header">
          <div class="content">
            <img style="margin-left:0" src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
            <span>商品信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent pr0">
        	<ul class="imglist clearfix">
        		<li v-for="image in orderpic" >
              <div class="w100 h100" :style="{backgroundSize: 'cover',backgroundImage: 'url(' + image.pic + ')'}"></div>  
            </li>
          </ul>
          <table v-if="!orderdetail.deep_model" class="table table-striped table-hover import-hover mb-4">
            <thead>
              <tr>
                <th>序号</th>
                <th>类别</th>
                <th>项目</th>
                <th>数量</th>
                <th>单价</th>
                <th>小计</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="index != 'info'" v-for="(item,index) in datalist">
                <td class="index">{{index+1}}</td>
                <td>
                  <!-- <span  class="type">{{item.texture}}</span> -->
                  <select :disabled="formGroundsStatus" v-model="item.texture" class="type bb1" name="">
                    <option :value="item" v-for="item in typelist">{{item}}</option>
                  </select>
                </td>
                <td>
                  <!-- <span class="project">{{item.weight}}</span> -->
                  <select :disabled="formGroundsStatus" v-model="item.weight" class="project bb1" name="">
                    <option :value="iteme.name" v-for="iteme in item.parameteritemdata">{{iteme.name}}</option>
                  </select>
                </td>
                <td class="tac">
                  <!-- <span class="index tac">{{item.num}} <span>{{item.unit}}</span></span> -->
                  <div class="box bd1">
                    <input :disabled="formGroundsStatus" step="0.01" v-model="item.num"  type="number" name="" value=""><span>{{item.parameteritemunit}}</span>
                  </div>
                  
                </td>
                <td class="tac">
                  <span class="w100 tac"  v-html="item.unitprice" id=""></span>
                </td>
                <td>
                  <span  class="w100  tac"  name="" v-html="item.totalprice" id=""></span>
                </td>
              </tr>
            </tbody>
          </table>
          <table v-if="orderdetail.deep_model" class="table table-striped table-hover import-hover mb-4">
            <thead>
              <tr>
                <th>序号</th>
                <th>类别</th>
                <th>项目</th>
                <th>数量</th>
              <!--<th>单价</th>
                <th>小计</th>-->
              </tr>
            </thead>
            <tbody>
              <tr v-if="orderdetail.deep_model" v-for="(item, key, index) in orderdetail.deep_model">
                <td class="index">{{index + 1}}</td>
                <td>
                  <span class="type">{{item.texture}}</span>
                </td>
                <td>
                  <span class="project">{{item.weight}}</span>
                </td>
                <td class="tac">
                  <span class="index tac">{{item.num}} <span>{{item.parameteritemunit}}</span></span>
                </td>
              <!--<td class="tac">
                <span class="w100 tac"  v-html="parseFloat(item.unitprice).toFixed(2)" id=""></span>
              </td>
              <td>
                <span  class="w100  tac"  name="" v-html="parseFloat(item.totalprice).toFixed(2)" id=""></span>
              </td>-->
            </tr>
          </tbody>
        </table>

        <div class="w100 bt1 bb1 pt-4 pb-4 other ">
          <div class="clearfix">
            <p class="pull-left">
              <span class="fc-gray">手寸 ：</span
                ><el-select style="margin-left: .6rem;" class="orderdetail_ml15" :disabled="formGroundsStatus" :value="handsize" clearable v-model="handsize" size="small" placeholder="请选择">
                    <el-option value="">请选择</el-option>
                    <el-option :value="item.name" :key="index" v-for="(item,index) in handsizeList">{{item.name}}</el-option>
                  </el-select>
                  <!-- <span class="select">{{orderdetails.handsize}}</span> -->
              </p>
              <p class="pull-left">
                <span class="fc-gray">刻字 ：</span>
                <el-input class="w60 orderdetail_ml15" :value="orderdetails.lettering" :disabled="formGroundsStatus" placeholder="" style="width: 74%"></el-input>
              </p>
            </div>
            <div class="textareabox">
              <span style="line-height: .5rem" class="fc-gray">定制说明 ：</span>&nbsp;
              <el-input
                  class="orderdetail_ml15"
                  :disabled="formGroundsStatus"
                  :value="orderdetail.cremark"
                  type="textarea"
                  style="width:82%"
                  :autosize="{ minRows: 2, maxRows: 6}"
                  placeholder=""
                  v-model="cremark">
                </el-input>
              </div>
            </div>
            <!--显示确认价格之前-->
            <div v-if="orderdetail.status == '0' || orderdetail.status == '1' || orderdetail.status == '2' || orderdetail.status == '9' || orderdetail.status == '10' || orderdetail.status == '11' || orderdetail.status == '-1'" class="bottom">
              <div class="total pb-2" style="text-aline:right">
                <span class="f36 ">合计 </span>
                <span class="fc-blue">约 ¥ <span class="fc-blue fw-b f36">{{price}}</span> 元</span>
                <!--<span v-if="orderdetail.deep_price" class="fc-blue">约 ¥ <span class="fc-blue fw-b f36">{{parseFloat(orderdetail.deep_price).toFixed(2)}}</span> 元</span>-->
              </div>
              <p class="fc-gray pb-2">该费用为预估的，费用会有10%上下的误差，最终价格以建模后价格为准</p>
            </div>
            <!--显示确认价格之后-->
            <div v-if="orderdetail.status == '12' || orderdetail.status == '13' || orderdetail.status == '3' || orderdetail.status == '4' || orderdetail.status == '5'
            || orderdetail.status == '6'" class="bottom">
            <button @click="openolddata" class="btn-w">查看原参数</button>
          </div>
        </div>
      </div>
      <div class="shopcarright w40 pull-left pl1 pr-25" style="
      position: absolute;
    right: 0px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productdetails.png" height="27" width="34" alt="">
            <span>订单信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent">
          <ul>
            <li class="clearfix">
              <span class="title" style="width:24%">订单编号： </span>
              <span style="padding-left:0;width:76%" class="w80 f000"  v-html="orderdetail.order_id"></span>
            </li>
            <li class="clearfix">
              <span class="title" style="width:24%">顾客姓名： </span>
              <el-input style="width:76%" :disabled="formGroundsStatus" :value="cname" v-model="cname" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input>
            </li>
            <li class="clearfix">
              <span class="title" style="width:24%">顾客电话： </span>
              <el-input style="width:76%" :disabled="formGroundsStatus" :value="cphone" v-model="cphone" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input>
            </li>
            <li class="clearfix">
              <span class="title" style="width:24%">顾客备注： </span>
              <el-input style="width:76%" :disabled="formGroundsStatus" :value="cremark" v-model="cremark" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input>
            </li>
            <li class="clearfix">
              <span class="title" style="width:24%">销售人员： </span>
              <el-select size="small" style="width:76%" :disabled="formGroundsStatus" :value="salename"  v-model="salename" clearable placeholder="请选择" class="w80 orderdetail_ml15 salesmans_box">
                <el-option
                  v-for="(item,index) in salesmans"
                  :key="index"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
              <!-- <el-input style="width:76%" :disabled="formGroundsStatus" :value="salename" v-model="salename" type="text"  class="w80 orderdetail_ml15" placeholder=""></el-input> -->
            </li>
            <li class="clearfix line pr">
              <span class="title"></span>
              <div class="w80"></div>
            </li>
            <li class="clearfix">
              <span class="title" style="width:24%">预收定金： </span>
              <!-- <span  class="w30 fc-blue"  v-html="'¥ ' + orderdetail.deposit"></span> -->
              <el-input :disabled="formGroundsStatus" :value="deposit" type="number" v-model="deposit" class="w30 orderdetail_ml15" placeholder=""></el-input>
              <span v-if="(/^[1-9]\d*$/.test(earnestratio)) && parseFloat(earnestratio) < 100" class=" tips">{{earnestratio}} %</span>
            </li>
            <li class="clearfix">
              <span class="title" style="width:24%">尾款需付： </span>
              <!-- <span  class="w30 fc-blue"  v-html="'¥ ' + orderdetail.tailcash"></span> -->
              <el-input :disabled="formGroundsStatus" :value="tailcash" type="number" v-model="tailcash" class="w30 orderdetail_ml15" placeholder=""></el-input>
              <span v-if="(/^[1-9]\d*$/.test(finalratio)) && parseFloat(finalratio) < 100" class= "tips">{{finalratio}} %</span>
            </li>
            <li class="clearfix line pr">
              <span class="title"></span>
              <div class="w80"></div>
            </li>
            <li class="clearfix">
              <span class="title fc-red">订单状态 </span>
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
            <li v-if="orderdetail.status == '12'" class="clearfix">
              <span class="title fblack f36">定价 </span>
              <span class=" w80 fblack"> ¥ <span class="fc-blue fw-b f36" style="color: #45C3D3!important">{{parseFloat(orderdetail.deep_price).toFixed(2)}}</span> 元</span>
            </li>
            <li v-if="orderdetail.status == '5'" class="clearfix">
              <span class="title">快递公司 </span>
              <span  class="w80" type="text" v-html="orderdetail.logistic"></span>
            </li>
            <li v-if="orderdetail.status == '5'" class="clearfix">
              <span class="title">快递单号 </span>
              <span  class="w80" type="text" v-html="orderdetail.logistic_num"></span>
            </li>
            <li class="clearfix line pr">
              <span class="title"></span>
              <div class="w80"></div>
            </li>
            <li class="clearfix">
              <span class="title"></span>
              <button v-if="orderdetail.status == '5'" class="mybtn w80 pull-left"
              @click="ConfirmReceipt(id)"> 确认收货
            </button>
            <button v-else-if="orderdetail.status == '12'" class="mybtn w80 pull-left"
            @click="surePrice(id)"> 确认价格
          </button>
          <button @click='amendOrder' v-if="orderdetail.status == '0'" class="mybtn w30 pull-left" style="margin-right:.2rem">{{formGroundsStatus_btn_txt}}</button>
              <router-link  v-if="orderdetail.status == '0'" :to="{name:'OrderlistHome',query:{page:page}}"
                           class="btn-w w30 pull-left" style="padding: .2rem;font-size: .32rem;text-align: center;"> 返回
              </router-link>
          <router-link v-else :to="{name:'OrderlistHome',query:{page:page}}"
          class="mybtn w80 pull-left"> 返回
        </router-link>
      </li>
    </ul>
  </div>
</div>
</div>
<transition name="fade">
  <div class="w100 olddatamodel" v-show="olddatamodelisshow">
    <div class="w60 content dis-ib">
      <h4 class="">原设参数</h4>
      <table class="table table-striped table-hover import-hover mb-4 ">
        <thead>
          <tr>
            <th>序号</th>
            <th>类别</th>
            <th>项目</th>
            <th>数量</th>
            <th>单价</th>
            <th>小计</th>
          </tr>
        </thead>
        <tbody>

          <tr v-if="index != 'info'" v-for="(item,index) in orderdetaillist">
            <td class="index">{{index + 1}}</td>
            <td>
              <span  class="type">{{item.texture}}</span>
            </td>
            <td>
              <span class="project">{{item.weight}}</span>
            </td>
            <td class="tac">
              <span class="index tac">{{item.num}} <span>{{item.unit}}</span></span>
            </td>
            <td class="tac">
              <span class="w100 tac"  v-html="parseFloat(item.unitprice).toFixed(0)" id=""></span>
            </td>
            <td>
              <span  class="w100  tac"  name="" v-html="parseFloat(item.totalprice).toFixed(0)" id=""></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total pb-2" style="text-aline:right">
        <span class="f36 ">合计 </span>
        <span v-if="orderdetail.deep_price" class="fc-blue">约 ¥ <span class="fc-blue fw-b f36">{{parseFloat(orderdetail.price).toFixed(2)}}</span> 元</span>
      </div>
      <button @click="openolddata()" class="btn-w"> 确 认 </button>
    </div>
  </div>
</transition>
</div>
</template>
<script>
var tip = false/*0为关闭，1位开启*/
export default {
  created() {
    this.initialize()
    this.id=this.$route.query.id
  },
  data() {
    return {
      /*传过来的id*/
      id: this.$route.query.id,
      /*订单数据*/
      orderdetail: '',
      /*手寸等数据*/
      orderdetails: '',
      /*类目列表*/
      orderdetaillist: '',
      /*图片列表*/
      orderpic:'',
      /*确认收货按钮显示状态*/
      btnisshow: '',
      /*定金比例*/
      earnestratio:'',
      /*尾款比例*/
      finalratio: '',
      /*查看原参数*/
      olddatamodelisshow:false,
      deep_price: 0,
      /*裸钻ID*/
      diamond_id: '',
      /*裸钻信息*/
      diamonddatas: '',
      page: 0,
      /*表单元素编辑状态*/
      formGroundsStatus: true,
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
      /*后台手寸信息*/
      handsizeList: '',
      /*后台参数信息*/
      parameter: '',
      /*类别列表*/
      typelist:[],
      /*刻字信息*/
      lettering: '',
      /*手寸信息*/
      handsize: '',
      /*存放客户选择的参数信息*/
      parameters_choose: {},
      /*参数列表*/
      datalist: [],
      price: '',
      /*门店销售员*/
      salesmans: '',
    }
  },
  methods: {
        /*记录是否手动改动价格（如果为true为手动，false为自动）*/
    tips(){
      if(tip){
        tip=false
      }else {
        tip=true
      }
    },
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
        /*判断添加的参数是否全部填写完毕*/
        for (var n = 0; n < this.datalist.length; n++) {
          for (let k in this.datalist[n]) {
            if(this.datalist[n][k] == undefined){
              this.messagedata = '参数没有填写完整';
              this.message();
              return false
            }
            if(k != 'parameteritemdata'){
              if(this.datalist[n][k] == ''){
                this.messagedata = '参数没有填写完整';
                this.message();
                return false
              }
            }
          }
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
            lettering: this.lettering,
            info: this.datalist,
            handsize: this.handsize,
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
    surePrice(id) {
     this.$confirm('<p>是否已经跟顾客确认过价格？</p><p>￥ ' + parseFloat(this.orderdetail.deep_price).toFixed(2) +' 元</p>', {  
      confirmButtonClass: 'btn-b',
      cancelButtonClass: 'btn-w',
      dangerouslyUseHTMLString: true
    }).then(() => {
      this.ConfirmPrice(id);
    }).catch(() => {
    });
  },
  /*初始化参数*/
  initialize() {
    if(this.getCookie("ringsetting_data")){
      var ringsetting_data_str = this.getCookie("ringsetting_data");
      var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
      this.salesmans = ringsetting_data['店员名称'];
    }
    var ringsetting_data_str = this.getCookie("ringsetting_data");
    var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
    this.handsizeList = ringsetting_data['手寸'];
    var url = this.BASEURL+'/index.php?action=order_detail';
    this.$http.get(url, {
      params: {
        orderid: this.id,
      }
    }, {}).then(response => {
      if (response.body.error_code == 0) {
        this.orderdetail = response.body.orderinfo;
        this.diamond_id = this.orderdetail.diamond_id;
        if(this.diamond_id){
        /*初始化裸钻数据*/
        var url = this.BASEURL + '/index.php?action=diamonds_detail';
        this.$http.get(url, {
          params: {
            id: this.diamond_id,
          }
        }, {}).then(response => {
          if (response.body.error_code == 0) {
            this.diamonddatas = response.body.result
          }
        },
        response => {
          console.log(response);
        });
        }
        this.orderpic = response.body.picinfo;
        this.orderdetails = response.body.orderinfo.orderinfo;
        this.orderdetaillist = response.body.orderinfo.orderinfo.info;
        for (var i = 0; i < this.orderdetaillist.length; i++) {
          this.datalist.push(this.orderdetaillist[i]);
        }
        this.price = this.orderdetail.price;
        /*计算定金和尾款比例前，先判断是否有后台最终修改价格*/
        if (this.orderdetail.deep_price == '0' || this.orderdetail.deep_price == '') {
          /*定金比例*/
          this.earnestratio = this.priceratio(this.orderdetail.price, this.orderdetail.deposit)
          /*尾款比例*/
          this.finalratio = this.priceratio(this.orderdetail.price, this.orderdetail.tailcash)
        } else {
          /*定金比例*/
          this.earnestratio = this.priceratio(this.orderdetail.cash, this.orderdetail.deposit)
          /*尾款比例*/
          this.finalratio = this.priceratio(this.orderdetail.cash, this.orderdetail.tailcash)
        }
        this.deep_price = this.orderdetail.deep_price;
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
        this.handsize = this.orderdetails.handsize;
      }

    }, response => {
      console.log(response);
    });
    if(this.$route.query.page){
      this.page = this.$route.query.page
    }
    var url = this.BASEURL+'/index.php?action=deep_dia';
      this.$http.get(url, {
        params: {}
      }).then(response => {
        if (response.body.error_code == 0 ){
          this.parameter = response.body.result;
          var i = 1
          for (let k in this.parameter) {
            this.typelist.push(k)
            i++
          }
        }

      }, response => {
        console.log(response);
      });
  },
  /*查看原参数*/
  openolddata() {
    if(this.olddatamodelisshow){
      this.olddatamodelisshow = false
    }else {
      this.olddatamodelisshow = true
    }
  },
  /*监视参数变化，修改对应变化*/
changedata(b, n, p, q, e){
  this.datalist[n].parameteritemunit = b
  this.datalist[n].unitprice = p
  /*判断价格变化*/
  var a = 0
  for (let i = 0; i < this.datalist.length; i++) {
    if(this.datalist[i].num!=''){
      /*根据tip判断手动价格还是自动价格*/
      if(!tip){
        this.datalist[i].totalprice = (q[i].num * q[i].unitprice);
      }else {
      }
    }else {
    }
    a += parseFloat(this.datalist[i].totalprice);
  }
  if(this.diamonddatas.totalPrice){
    this.price = a + this.diamonddatas.totalPrice;
  }else{
    this.price = a;
  }
  
},
},
computed: {
  dataRest: function () {
    var arry = [];
    for (var i = 0; i < this.datalist.length; i++) {
      var obj = {};
      for (let k in this.datalist[i]) {
        obj[k] = this.datalist[i][k]
      }
      arry.push(obj)
    }
    return arry;
  },
},
watch: {
  $route(){
    this.initialize()
    this.id=this.$route.query.id
  },

  /*预收定金*/
  deposit (newVal,oldVal) {
    this.tailcash = this.price - newVal
    /*计算定金和尾款比例前，先判断是否有优惠价格*/
    if (this.price == '0' || this.price == '') {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, newVal)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, this.tailcash)
    } else {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, newVal)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, this.tailcash)
    }
  },
  /*尾款需付*/
  tailcash (newVal,oldVal) {
    this.deposit = this.price - newVal
    /*计算定金和尾款比例前，先判断是否有优惠价格*/
    if (this.price == '0' || this.price == '') {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, this.deposit)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, newVal)
    } else {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, this.deposit)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, newVal)
    }
  },
  dataRest: {
    handler: function (nowVal, oldVal) {
      var b = ''
      var p = ''
      if (nowVal.length != oldVal.length) {
        console.log(666)
        return false
      } else {
        for (var i = 0; i < nowVal.length; i++) {
          if (nowVal[i] != oldVal[i]) {
            if(nowVal[i].texture != oldVal[i].texture){
              this.datalist[i].weight = '';
              this.datalist[i].unitprice = '';
              this.datalist[i].totalprice = '';
              this.datalist[i].parameteritemunit = '';
              this.datalist[i].num = 1;
            }
          for (let f in this.parameter){
            if (nowVal[i].texture == f) {
              this.datalist[i].parameteritemdata = this.parameter[f]
            }
          }
          for (let o in this.parameter) {
            for (let h = 0; h < this.parameter[o].length; h++) {
              for (let j in this.parameter[o][h]) {
                /*判断单位、单价*/
                if (this.parameter[o][h][j] == nowVal[i]['weight']) {
                  b = this.parameter[o][h]['unit']
                  p = this.parameter[o][h]['total_price']
                  this.changedata(b, i, p,nowVal,oldVal)
                }
              }
            }
          }
        }
      }
    }

    /*预收定金*/
    this.tailcash = this.price - this.deposit;
    /*计算定金和尾款比例前，先判断是否有优惠价格*/
    if (this.price == '0' || this.price == '') {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, this.deposit)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, this.tailcash)
    } else {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, this.deposit)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, this.tailcash)
    }
    /*尾款需付*/
    this.deposit = this.price - this.tailcash;
    /*计算定金和尾款比例前，先判断是否有优惠价格*/
    if (this.price == '0' || this.price == '') {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, this.deposit)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, this.tailcash)
    } else {
      /*定金比例*/
      this.earnestratio = this.priceratio(this.price, this.deposit)
      /*尾款比例*/
      this.finalratio = this.priceratio(this.price, this.tailcash)
    }

  },
  deep: true
  },
  }
}
</script>
<style>
  #app .orderlist_a .orderdetail_ml15.is-disabled>input{
      background-color: #fff;
      border: 0;
      color: #000;
  }
  #app .orderlist_a .shopcar .shopcarright .shopcarrightcontent .el-input.w30{
    width: 30%;
  }
  #app .orderlist_a .orderdetail_ml15.is-disabled.w30>input{
    color: #48c2d3;
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
    color: #000;
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
  #app .orderdetail_ml15 .is-disabled>input{
    background-color: #fff;
    border: 0;
    margin-left: -15px;
  }
  #app .orderlist_a .salesmans_box .el-input--small{
    width: 100%;
  }
  #app .orderlist_a .salesmans_box .el-input--small .el-input__inner{
    width: 100%;
  }
</style>
