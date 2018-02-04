<template>
  <div class="depthcustomhome depthcustomdetails orderdetails">
    <div class="shopcar clearfix">
      <div class="shopcarleft w60 pull-left pl-25" style="position: absolute;left: 0;height: 100%;overflow-x: hidden;overflow-y: auto;">
        <div>
                <div class="header">
          <div class="content">
            <img style="margin-left:0" src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
            <span>商品信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent pr0">
          <ul v-if="imagesData" class="imglist clearfix" style="margin-bottom: 0">
            <li v-for="item in imagesData" >
              <div class="w100 h100" :style="{backgroundSize: 'cover',backgroundImage: 'url(' + item + ')'}"></div>
            </li>
          </ul>
          <div class="commoncustomorder"  v-if="diamond_id">
            <div class="top">
            <div class="header header-scroll" style="width: 100%;right: auto;margin-left:-.25rem">
              <div class="content">
                <img src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
                <span>裸钻信息</span>
              </div>
            </div>
            <div class="top-box clearfix pr">
              <div class="left-box pull-left w20" style="margin-top:1.5rem;width:18%">
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

                <router-link style="padding-left:.1rem;padding-right:.1rem;" v-if="diamond_id && acceptData" class="w100 mt-1 reelect-btn" :to="{path:'/inventory',
                  query:{
                    set:JSON.stringify(this.setlist[7]),
                    images: this.imagesData.join('-'),
                    datalist: JSON.stringify(acceptData.orderinfo.info),
                    gj_handsize: acceptData.orderinfo.handsize,
                    gj_lettering: acceptData.orderinfo.lettering,
                    gj_cremark: acceptData.cremark,
                    client: JSON.stringify(client),
                    pricebefore: pricebefore,
                    pricebeforetip: pricebeforetip,
                    priceafter: priceafter,
                    priceaftertip: priceaftertip,
                    salesman: salesman,
                    gj_order_id: gj_order_id
                  }
                }">重选裸钻
                </router-link>

                <router-link  style="padding-left:.1rem;padding-right:.1rem;" v-if="diamond_id && datalist" class="w100 mt-1 reelect-btn" :to="{path:'/inventory',
                  query:{
                    set:JSON.stringify(this.setlist[7]),
                    images: this.imagesData.join('-'),
                    datalist: JSON.stringify(datalist),
                    gj_handsize: gj_handsize,
                    gj_lettering: gj_lettering,
                    gj_cremark: gj_cremark,
                    client: JSON.stringify(client),
                    pricebefore: pricebefore,
                    pricebeforetip: pricebeforetip,
                    priceafter: priceafter,
                    priceaftertip: priceaftertip,
                    salesman: salesman,
                    gj_order_id: gj_order_id
                  }
                }">重选裸钻
                </router-link>

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

          <table class="table table-striped table-hover import-hover mb-4 mt-4" v-if="datalist || acceptData">
            <thead>
            <tr>
              <th class="w10">序号</th>
              <th class="w10">类别</th>
              <th class="w30">项目</th>
              <th class="w10">数量</th>
              <th>单价</th>
              <th>小计</th>
            </tr>
            </thead>
            <tbody  v-if="datalist">
           <tr v-for="(item,index) in datalist">
              <td class="index">{{index+1}}</td>
              <td>
                <span >{{item.texture}}</span>
              </td>
              <td>
                <span class="project">{{item.weight}}</span>
              </td>
              <td>
                <span class="index">{{item.num}} <span></span>{{item.parameteritemunit}}</span>
              </td>
              <td>
                <input class="w100 tac" disabled="disabled" type="text" name="" :value="item.unitprice" >
              </td>
              <td>
                <input disabled="true" class="w100  tac" type="text" name="" :value="item.totalprice" >
              </td>
            </tr>
            </tbody>
            <tbody  v-if="acceptData">
            <tr v-for="(item,index) in acceptData.orderinfo.info" >
              <td class="index">{{index+1}}</td>
              <td>
                <span v-if="item.texture == k" class="type" v-for="k in typelist">{{k}}</span>
              </td>
              <td>
                <span class="project">{{item.weight}}</span>
              </td>
              <td>
                <span class="index">{{item.num}} <span></span>{{item.parameteritemunit}}</span>
              </td>
              <td>
                <input class="w100 tac" disabled="disabled" type="text" name="" :value="item.unitprice" >
              </td>
              <td>
                <input disabled="true" class="w100  tac" type="text" name="" :value="item.totalprice" >
              </td>
            </tr>
            </tbody>
          </table>
          <div class="w100 bt1 bb1 pt-4 pb-4 pl-4 pr-4 other ">
            <div class="clearfix">
              <p class="pull-left">
                <span class="fc-gray">手寸：</span
                ><span class="select" v-if="acceptData">{{acceptData.orderinfo.handsize}}</span
                ><span class="select" v-if="gj_handsize">{{gj_handsize}}</span>
              </p>
              <p class="pull-left"><span class="fc-gray">刻字：</span>
                <input disabled="true" v-if="acceptData" type="text" name="" id="" :value="acceptData.orderinfo.lettering">
                <input disabled="true" v-if="gj_lettering" type="text" name="" id="" :value="gj_lettering">
              </p>
            </div>
            <div class="textareabox">
              <span style="line-height: .5rem;white-space: nowrap;" class="fc-gray">定制说明：</span>
              <span class="textarea" v-if="acceptData">{{acceptData.cremark}}</span>
              <span class="textarea" v-if="gj_cremark">{{gj_cremark}}</span>
            </div>
          </div>
          <div class="bottom">
            <div class="total pb-2">
              <span class="f36 ">合计：</span>
              <span class="fc-blue">约 ¥ <span class="fc-blue fw-b f36">{{gj_total}}</span> 元</span>
            </div>
            <p class="fc-gray pb-2">该费用为预估的，费用会有10%上下的误差，最终价格以建模后价格为准</p>
          </div>
        </div>
        </div>
      </div>
      <div class="shopcarright w40 pull-left pl1 pr-25" style="position: absolute;right: 0;height: 100%;overflow-x: hidden;overflow-y: auto;">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productdetails.png" height="27" width="34" alt="">
            <span>订单信息</span>
          </div>
        </div>
        <div class="shopcarrightcontent">
          <form action="javascript:;" @submit="pushorder()">
            <ul>
              <li class="clearfix">
                <span class="title w20">顾客姓名 </span>
                <el-input @focus="handleSelectname" v-bind:class="{checkoutbox: clientshowname}" class="w80"
                          v-model="client.name" placeholder=""></el-input>
              </li>
              <li class="clearfix">
                <span class="title">顾客电话 </span>
                <el-input @focus="handleSelectphone" v-bind:class="{checkoutbox: clientshowphone}" class="w80"
                          v-model="client.phone" placeholder=""></el-input>
              </li>
              <li class="clearfix">
                <span class="title">顾客备注 </span>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 6}"
                  placeholder="请输入顾客备注内容"
                  v-model="client.txt">
                </el-input>
              </li>
              <li class="clearfix line pr">
                <span class="title"></span>
                <div class="w80"></div>
              </li>
              <li class="clearfix">
                <span class="title">预收定金 </span>
                <el-input @focus="handleSelectpricebefore" v-bind:class="{checkoutbox: clientshowpricebefore}" step="0.01" type="number" class="w60" placeholder="" v-model="pricebefore">
                  <template slot="append">元</template>
                </el-input>
                <tt v-if="(/^[1-9]\d*$/.test(pricebeforetip)) && parseFloat(pricebeforetip) < 100">
                  <tt class="pl48" >{{pricebeforetip}}</tt>
                  <tt>%</tt>
                </tt>
              </li>
              <li class="clearfix">
                <span class="title">尾款需付 </span>
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
                <span class="title">销售人员 </span>
                <el-select :disabled="disabled" v-model="salesman" placeholder="请选择" @visible-change="handleSelectman" v-bind:class="{checkoutbox: clientshowman}" class="w80 salesmans_box">
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
<script type="text/ecmascript-6">
  export default {
    created(){
      this.getdata();
      this.imagesData = this.$store.state.imglist;
    },
    data(){
      return {
        /*接受路由传过来的数据*/
        acceptData: '',
        /*接受路由传过来的图片数据*/
        imagesData: [],

        /*顾客信息client*/
        client: {
          name: '',
          phone: '',
          txt: '',
        },
        /*款项信息price*/
        pricebefore: '',
        pricebeforetip: '',
        priceafter: '',
        priceaftertip: '',
        /*销售员*/
        salesman: '',

        /*错误提示信息显示*/
        clientshowname: false,
        clientshowphone: false,
        clientshowman: false,
        clientshowpricebefore: false,
        /*参数类别数据*/
        typelist:'',
        /*裸钻参数数据*/
        diamonddatas: '',
        diamond_id: '',
        datalist: '',
        /*手寸*/
        gj_handsize: '',
        gj_lettering: '',
        gj_cremark: '',
        gj_total: 0,
        /*订单ID*/
        gj_order_id: '',
        /*门店销售员*/
        salesmans: '',
      }
    },
    methods: {
          /*删除裸钻*/
    delateDimonds() {
      this.$confirm('确定删除裸钻吗', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        confirmButtonClass: 'btn-b',
        cancelButtonClass: 'btn-w',
      }).then(() => {
        this.diamond_id = '';
        this.messagedata = '删除成功';
        this.message();
        this.$router.push({
          name: 'DepthcustomHome',
          query: {images: this.images.join('-')}
        });
      }).catch(() => {
      });
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
      handleSelectpricebefore(){
        if (this.clientshowpricebefore) {
          this.clientshowpricebefore = false;
        }else if(this.pricebefore == ""){
          this.clientshowpricebefore = false;
        }
      },
      handleSelectman(){
        if (this.clientshowman) {
          this.clientshowman = false;
        }else if(this.salesman == ""){
          this.clientshowman = false;
        }
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
        /*判断预收定金*/
        if (this.pricebefore == "") {
          this.messagedata = '请正确输入预收定金';
          this.message();
          this.clientshowpricebefore = true;
          return false
        }else {
          this.clientshowpricebefore = false;
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
        /*判断预收定金、尾款是否<0*/
        if(this.pricebefore < 0 || this.priceafter < 0){
          this.messagedata = '预收定金 和 需付尾款 不能小于0';
          this.message();
          return false
        }
        var b = ''
        if(this.pricebefore == '' || this.pricebefore == 0){
          this.priceafter = this.gj_total
        }
        if(this.priceafter == '' || this.priceafter == 0){
          this.pricebefore = this.gj_total
        }
        //1.判断参数是否齐全
        var url = this.BASEURL+'/index.php?action=sureorder';
        this.$http.get(url, {
          params: {
            order_id: this.gj_order_id,
            cname: this.client.name,
            cphone: this.client.phone,
            remark: this.client.txt,
            price: this.gj_total,
            deposit: this.pricebefore,
            tailcash: this.priceafter,
            salename: this.salesman,
            salename: this.salesman,
            diamond_id: this.diamond_id,
          }
        }, {}).then(response => {
            if (response.body.error_code == 0) {
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
            }
          },
          response => {
            console.log(response);
          });
      },
      /*接收数据*/
      getdata(){
        if(this.getCookie("ringsetting_data")){
          var ringsetting_data_str = this.getCookie("ringsetting_data");
          var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
          this.salesmans = ringsetting_data['店员名称'];
        }
        if (this.$route.query.msg) {
          this.acceptData = JSON.parse(this.$route.query.msg)
          this.gj_total = this.acceptData.price
          this.gj_order_id = this.acceptData.order_id
        }
        if (this.acceptData.orderinfo) {
          this.acceptData.orderinfo = JSON.parse(this.acceptData.orderinfo)
        }
        if(this.$route.query.datalist){
          this.datalist = JSON.parse(this.$route.query.datalist);
        }
        if (this.$route.query.typelist) {
          this.typelist = this.$route.query.typelist
        }
        if(this.$route.query.did){
          this.diamond_id = this.$route.query.did;
        }
        if(this.$route.query.gj_handsize){
          this.gj_handsize = this.$route.query.gj_handsize;
        }
        if(this.$route.query.gj_lettering){
          this.gj_lettering = this.$route.query.gj_lettering;
        }
        if(this.$route.query.gj_cremark){
          this.gj_cremark = this.$route.query.gj_cremark;
        }
        if(this.$route.query.client){
          this.client = JSON.parse(this.$route.query.client);
        }
        if(this.$route.query.pricebefore){
          this.pricebefore = 0;
        }
        if(this.$route.query.pricebeforetip){
          this.pricebeforetip = 0;
        }
        if(this.$route.query.priceafter){
          this.priceafter = 0;
        }
        if(this.$route.query.priceaftertip){
          this.priceaftertip = 0;
        }
        if(this.$route.query.salesman){
          this.salesman = this.$route.query.salesman;
        }
        if(this.$route.query.gj_order_id){
          this.gj_order_id = this.$route.query.gj_order_id;
        }
        if(this.diamond_id){
         /*初始化裸钻数据*/
        var url = this.BASEURL + '/index.php?action=diamonds_detail';
        this.$http.get(url, {
          params: {
            id: this.diamond_id,
          }
        }, {}).then(response => {
          if (response.body.error_code == 0) {
            this.diamonddatas = response.body.result;
            if(this.datalist){
              var a = 0;
              for (let i = 0; i < this.datalist.length; i++) {
                a += parseFloat(this.datalist[i].totalprice);
              }
              this.gj_total = a + this.diamonddatas.totalPrice;
            }
          }
        },
        response => {
          console.log(response);
        }); 
      }else{
        var a = 0;
        for (let i = 0; i < this.acceptData.orderinfo.info.length; i++) {
          a += parseFloat(this.acceptData.orderinfo.info[i].totalprice);
        }
        this.gj_total = a;
        
      }

      },
      /*计算预付定金,计算尾款*//*计算尾款,计算预付定金*/
      countprice (n) {
        //判断是否选择折扣,如果没有选择折扣，就直接使用totalPrice,否者使用折后价this.pricediscountsafter
        var a = this.gj_total;
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
          this.priceafter = this.priceafter.toFixed(0)
        }
        if(this.pricebefore.toString().length>12){
          this.pricebefore = this.pricebefore.toFixed(0)
        }
      },
    },
    watch: {
      $route(){
        this.getdata()
      },
      /*监视预收定金变化,计算尾款*/
      pricebefore: function (val) {
        this.countprice(true);
      },
      priceafter:function() {
        this.countprice(false);
      },
    }
  }
</script>
<style>
  #app .shopcarright .shopcarrightcontent .salesmans_box .el-input{
    width: 100%;
  }

</style>
