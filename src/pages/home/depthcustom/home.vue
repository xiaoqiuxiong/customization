<template>
  <div class="depthcustomhome h100">
    <div class="shopcar clearfix pr h100">
      <div class="shopcarleft w40 pull-left  pr" style="position: absolute;overflow-y: auto;height: 100%;padding-bottom:.6rem">
        <div class="commoncustomorder">
          <div class="top" v-if="diamond_id">
            <div class="header header-scroll" style="width: 100%;right: auto">
              <div class="content">
                <img src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
                <span>裸钻信息</span>
                <router-link v-if="diamond_id" class="pull-right btn-w sm-btn-w" :to="{path:'/inventory',query:{set:JSON.stringify(this.setlist[6]),datalist: JSON.stringify(datalist),gj_handsize:handsize,gj_lettering:lettering,gj_cremark:cremark}}">重选裸钻</router-link>
              </div>
            </div>

            <div class="top-box clearfix pr">
              <div class="left-box pull-left" style="margin-top:1.5rem">
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
                <button class="w100 mt-1 reelect-btn" @click="delateDimonds">删除</button>
              </div>
              <div class="right-box pull-left" style="width: 72%;top: auto; right:auto;transform:inherit;margin-top:1.7rem">
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
          <div class="shopcarleftcontent detailslist-scroll">
            <div class="header header-scroll" style="width: 100%;right: auto">
              <div class="content">
                <img src="../../../assets/image/icon/shopcar-productlist.png" height="29" width="38" alt="">
                <span>高级定制</span>
                <div style="display: initial">
                  <button id='addPic' href="" @click="addPic" class="pull-right btn-w sm-btn-w ml-2">添加图片</button>
                  <input type="file" @change="onFileChange" multiple style="display: none;">
                </div>
              </div>
            </div>
            <div>
              <ul class="imgul">
                <li class="imgli" v-for="(image,key) in images">
                  <div class="imgimg" :style="{backgroundImage: 'url(' + image + ')'}" @click='delImage(key)'></div>
                  <a class="imgdelete" href="#" style="position: absolute;" @click='delImage(key)'></a>
                </li>
              </ul>
            </div>           
          </div>
        </div>
      </div>
      <div class="shopcarright w60 pull-left pr-25" style="margin-left: 40%;padding-left: .8rem">
        <div class="header">
          <div class="content">
            <img src="../../../assets/image/icon/shopcar-productdetails.png" height="27" width="34" alt="">
            <span>订单信息</span>
            <button type="text" @click="adddata()" class="pull-right btn-w sm-btn-w ml-2">添加参数</button>
            <router-link v-if="!diamond_id" class="pull-right btn-w sm-btn-w" :to="{path:'/inventory',query:{set:JSON.stringify(this.setlist[6]),
              datalist: JSON.stringify(datalist),gj_handsize:handsize,gj_lettering:lettering,gj_cremark:cremark}}">挑选裸钻</router-link>
          </div>
        </div>
        <div class="shopcarrightcontent ">
          <form action="javascript:;" @submit="senddata()">
            <table class="table table-striped table-hover import-hover mb1 ">
              <thead>
                <tr>
                  <th class="w10">序号</th>
                  <th>类别</th>
                  <th>项目</th>
                  <th>数量</th>
                  <th>单价</th>
                  <th class="subtotalbox">小计</th>
                  <th class="w10">删除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in datalist">
                  <td class="index">{{index + 1}}</td>
                  <td>
                    <select v-model="item.texture" class="type bb1" name="">
                      <option :value="item" v-for="item in typelist">{{item}}</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="item.weight" class="project bb1" name="">
                      <option :value="iteme.name" v-for="iteme in item.parameteritemdata">{{iteme.name}}</option>
                    </select>
                  </td>
                  <td>
                    <div class="box bd1">
                      <input step="0.01" v-model="item.num"  type="number" name="" value=""><span>{{item.parameteritemunit}}</span>
                    </div>
                  </td>
                  <td>
                    <input step="0.01" v-model="item.unitprice" disabled="disabled" class="w100 tac" type="number" name="" value="">
                  </td>
                  <td class="subtotalbox">
                    <input step="0.01" @focus ="tips()" disabled="disabled" @blur ="tips()"  v-model="item.totalprice" class="w100 tac" type="number" name="" value="">
                  </td>
                  <td>
                    <span class="delatedatabox" @click="delate(index + 1)" >
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="w100 bt1 bb1 pt-4 pb-4 other ">
              <div class="clearfix">
                <!-- <p class="pull-left" v-for="(val, key, index) in ring_type">
                  <span class="fc-gray">{{key.slice(5)}}</span>
                  <el-select style="margin-left:-3px" clearable v-model="val.val" size="small" placeholder="请选择">
                    <el-option value="">请选择</el-option>
                    <el-option :value="item.name" :key="index" v-for="(item,index) in val.data">{{item.name}}</el-option>
                  </el-select>
                </p> -->
                <p class="pull-left" v-for="(val, key, index) in $store.state.gj_data">
                  <span class="fc-gray">{{key.slice(5)}}</span>
                  <el-select style="margin-left:-3px" clearable v-model="val.val" size="small" placeholder="请选择">
                    <el-option value="">请选择</el-option>
                    <el-option :value="item.name" :key="index" v-for="(item,index) in val.data">{{item.name}}</el-option>
                  </el-select>
                </p>
                <p class="pull-left" style="font-size:0">
                  <span class="fc-gray" style="width:12%">刻字：</span>
                  <el-input class="w60" v-model="lettering" placeholder="" style="width: 88%"></el-input>
                </p>
                </div>
                <div class="textareabox">
                  <span class="fc-gray" style="width:12%">说明：</span> 
                  <el-input
                  style="width:88%;"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 6}"
                  placeholder="顾客特别说明"
                  v-model="cremark">
                </el-input>
              </div>
            </div>
            <div class="bottom">
              <div class="total pb-2">
                <span class="f36 ">合计：</span>
                <span class="fc-blue">约 ¥ <span class="fc-blue fw-b f36">{{price}}</span> 元</span>
              </div>
              <p class="fc-gray pb-2">该费用为预估的，费用会有10%上下的误差，最终价格以建模后价格为准。</p>
              <div class="">
                <button type="reset" class="btn-w" @click="cleardata()">重新选择</button>
                <button type="submit" class="btn-b ml-2">提交定制</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var tip = false/*0为关闭，1位开启*/
export default {
  created(){
    this.initialize();
    this.images = this.$store.state.imglist;
  },
  data() {
    return {
      /*裸钻*/
      diamonddatas: '',
      /*图片控件*/
      images: [],
      cremark: '', /*定制说明*/
      lettering: '', /*刻字*/
      handsize: '', /*手寸*/
      price: 0, /*价格*/
      /*参数列表*/
      datalist: [],
      isshow: false,
      /*后台定制参数*/
      parameter: '',
      parameteritem: '',
      parameteritemdata: '',
      /*类别列表*/
      typelist:[],
      /*裸钻ID*/
      diamond_id: '',
      /*后台手寸数据*/
      handsizeList: '',
      /*后台深度定制选项数据*/
      ring_type: '',

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
    /*挑选裸钻*/
    adddiamond(){

    },
    delate(val){
      this.datalist.splice(val-1,1)
    },
    /*记录是否手动改动价格（如果为true为手动，false为自动）*/
    tips(){
      if(tip){
        tip=false
      }else {
        tip=true
      }
    },
    addPic(e){
      e.preventDefault();
      $('input[type=file]').trigger('click');
      return false;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)return;
      this.createImage(files);
    },
    createImage(file) {
      if (typeof FileReader === 'undefined') {
        alert('您的浏览器不支持图片上传，请升级您的浏览器');
        return false;
      }
      var vm = this;
      var leng = file.length;
      for (var i = 0; i < leng; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(file[i]);
        reader.onload = function (e) {
          vm.images.push(e.target.result);
        };
      }

      /*修改vuex imglist*/
      this.$store.commit('changeImgList',vm.images);
    },
    delImage: function (index) {
      this.$confirm('确定需要删除本张图片吗', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        confirmButtonClass: 'btn-b',
        cancelButtonClass: 'btn-w',
      }).then(() => {
        /*修改vuex imglist*/
        this.$store.commit('changeImgList',this.images);
        this.images.splice(index,1);
        this.messagedata = '删除成功';
        this.message();
        
      }).catch(() => {
      });

    },
    /*初始化参数*/
    initialize() {
      if(this.getCookie("ringsetting_data")){
        var ringsetting_data_str = this.getCookie("ringsetting_data");
        var ringsetting_data = JSON.parse(unescape(ringsetting_data_str));
        var a = {};
        for(let k in ringsetting_data){
          if( k.indexOf('深度定制-') != -1){
            a[k] = ringsetting_data[k];
            a[k]['val'] = ''
          }
        }
        this.ring_type = a;
        this.handsizeList = ringsetting_data['深度定制-手寸'].data;
      }

      if(this.$route.query.images){
        this.images = this.$route.query.images.split("-");
      }
      if(this.$route.query.datalist){
        this.datalist = JSON.parse(this.$route.query.datalist);
      }
      if(this.$route.query.gj_handsize){
        this.handsize = this.$route.query.gj_handsize;
      }
      if(this.$route.query.gj_lettering){
        this.lettering = this.$route.query.gj_lettering;
      }
      if(this.$route.query.gj_cremark){
        this.cremark = this.$route.query.gj_cremark;
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
      if(this.$route.query.did){
        this.diamond_id = this.$route.query.did;
        /*初始化裸钻数据*/
        var url = this.BASEURL + '/index.php?action=diamonds_detail';
        this.$http.get(url, {
          params: {
            id: this.diamond_id,
          }
        }, {}).then(response => {
          if (response.body.error_code == 0) {
            this.diamonddatas = response.body.result;
            var a = 0;
            for (let i = 0; i < this.datalist.length; i++) {
              a += parseFloat(this.datalist[i].totalprice);
            }
            this.price = a + this.diamonddatas.totalPrice;
          }
        },
        response => {
          console.log(response);
        });
      }

    },
    /*添加参数*/
    adddata(){
      var a = {
        texture: '', /*参数类别 */
        weight: '', /*参数项目 */
        num: 1, /*参数数量*/
        unitprice: '', /*单价*/
        totalprice: '', /*总价*/
        parameteritemunit: '',
      }
      this.datalist.push(a);
    },
/*提交定制*/
senddata(){

  var filelist = []
  for (var i = 0; i < this.images.length; i++) {
    filelist.push(this.images[i])
  }
  /*判断客户是否选择图片，没有选择，就直接return false,并且提示*/
  if(filelist.length == 0){
    this.messagedata = '请选择图片';
    this.message();
    return false
  }
  /*判断客户是否增加参数，没有就直接return false,并且提示*/
  if(this.datalist.length == 0){
    this.messagedata = '请添加参数';
    this.message();
    return false
  }
  /*判断添加的参数是否全部填写完毕*/
  for (var n = 0; n < this.datalist.length; n++) {
    for (let k in this.datalist[n]) {
      if(k != 'parameteritemdata'){
        if(this.datalist[n][k] == ''){
          this.messagedata = '参数没有填写完整';
          this.message();
          return false
        }
      }
    }
  }

  /*判断高级定制选项，没有就直接return false,并且提示*/
  /*提交的高级定制参数信息*/
  var gj_data = {};
  for(let k in this.ring_type){
    /*必填选项*/
    if(this.ring_type[k].is_bt == 1) {
      if(!this.ring_type[k].val){
        this.messagedata = '请选择' + k.slice(5);
        this.message();
        return false;
      }
    }
    gj_data[this.ring_type[k].name] = this.ring_type[k].val;
  }

  gj_data['cremark'] = this.cremark;
  gj_data['lettering'] = this.lettering;
  gj_data['info'] = this.datalist;
  gj_data['price'] = this.price;
  gj_data['images'] = filelist;

  this.isshow = false

  var url = this.BASEURL+'/index.php?action=upimg';
  this.$http.post(url, gj_data, {emulateJSON: true}).then(response => {
    if (response.body.error_code == 0) {
      /*带参数跳转到下个页面*/
      this.$router.push({
        name: 'DepthcustomOrderdetails',
        query: {
          msg: JSON.stringify(response.body.result),
          typelist:this.typelist,
          did:this.diamond_id
        },
      });
    }
  });
},
/*清空*/
cleardata(){
  this.cremark = ''
  /*定制说明*/
  this.lettering = ''
  /*刻字*/
  this.handsize = ''
  /*手寸*/
  this.price = 0
  /*价格*/
  /*参数列表*/
  this.datalist = []
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
    console.log(a)
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
    this.initialize();
  },
  dataRest: {
    handler: function (nowVal, oldVal) {
      var b = ''
      var p = ''
      if (nowVal.length != oldVal.length) {
        return false
      } else {
        for (var i = 0; i < nowVal.length; i++) {
          /*当选择为裸钻的时候，限制数量最大为1*/
          if(nowVal[i].texture == '裸钻'){
           if(nowVal[i].num>1){
             this.messagedata = '裸钻数量不能大于1';
             this.message();
           }
         }
         if (nowVal[i] != oldVal[i]) {
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
  },
  deep: true
},
}
}
</script>
<style>
.delatedatabox{
  height: .4rem;
  width: .4rem;
  display: inline-block;
  background: url("../../../assets/image/icon/delate.png") no-repeat;
  background-size: cover;
}
.delatedatabox:active{
  background: url("../../../assets/image/icon/delate-active.png") no-repeat;
  background-size: cover;
}
ul.imgul {
  list-style: none outside none;
  margin: 0;
  padding: 0;
}

li.imgli {
  height: 3rem;
  width: 50%;
  display: inline-block;
  list-style: none;
  position: relative;
  padding: .1rem 0;
}
li.imgli:first-child {
  margin-top: 1.5rem;
}

li.imgli:nth-child(odd) {
  box-sizing: border-box;
  padding-right: .1rem;
}

li.imgli:nth-child(even) {
  box-sizing: border-box;
  padding-left: .1rem;
}

.imgimg {
  width: 100%;
  height: 100%;
  margin: auto;
  margin-bottom: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.imgdelete {
  top: 15px;
  right: 15px;
}

.el-upload__input {
  display: none !important;
}

.subtotalbox {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
