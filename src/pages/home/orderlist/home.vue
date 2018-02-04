<template>
  <div class="clearfix h100 productlist Orderlist">
    <div class="header-child bb1">
      <form action="">
        <ul class="clearfix pr">
          <li class="pull-left">
            <div class="search-box  before pr">
              <form action="javascript:;" @submit="inputsearch()">
                <input type="search" v-model="searchbox" placeholder="输入顾客姓名或者手机号查询">
              </form>
            </div>
          </li>
          <li>
            <div class="selectbox clearfix">
              <el-select clearable  v-model="ordertype" size="small" placeholder="订单类型">
                <el-option
                value="">订单类型
              </el-option>
              <el-option
              v-for="item in ordertypelist"
              :key="item.val"
              :label="item.txt"
              :value="item.val">
            </el-option>
          </el-select>
          <el-select clearable  v-model="status" size="small" placeholder="订单状态">
            <el-option
            value="">订单状态
          </el-option>
          <el-option
          v-for="item in statuslist"
          :key="item.val"
          :label="item.txt"
          :value="item.val">
        </el-option>
      </el-select>
    </div>
  </li>
  <li>
    <el-date-picker
    style="width:6rem"
    v-model="timemodel"
    type= "daterange"
    align= "right"
    value-format = "yyyy/MM/dd"
    range-separator= "至"
    start-placeholder= "开始日期"
    end-placeholder= "结束日期"
    size= "mini"
    @change= "dateChange"
    :editable= false
    :picker-options= "pickerOptions2">
  </el-date-picker>
</li>
</ul>
</form>
</div>
<div class="content">
  <el-table :data="searchlist['tdList']" style="width: 100%" stripe >
    <el-table-column fit min-width="14%" prop="order_id" label="订单号"></el-table-column>
    <el-table-column fit min-width="6%" prop="ordertype" label="订单类型" >
      <template slot-scope="scope">
        <span v-if="scope.row.ordertype == '1'">购买订单</span>
        <span v-if="scope.row.ordertype == '2'">VIP定制</span>
        <span v-if="scope.row.ordertype == '3'">高级定制</span>
      </template>
    </el-table-column>
    <el-table-column fit min-width="10%" prop="cname" label="顾客姓名"></el-table-column>
    <el-table-column fit min-width="8%" prop="cphone" label="顾客手机号"></el-table-column>
    <el-table-column fit min-width="6%" prop="price" label="金额">
      <template slot-scope="scope">
        <span v-if="scope.row.deep_price">{{scope.row.deep_price}}</span>
        <span v-else>{{scope.row.price}}</span>
      </template>
    </el-table-column>
    <el-table-column fit min-width="14%" sortable prop="createtime" label="下单时间">
      <template slot-scope="scope">
        <span>{{gettime(scope.row.createtime)}}</span>
      </template>
    </el-table-column>
    <el-table-column fit min-width="2%" prop="change" label="">
      <template slot-scope="scope">
        <span v-if="scope.row.change"><i class="warning-box fc-red"></i></span>
      </template>
    </el-table-column>
    <el-table-column fit min-width="6%" prop="status" label="状态">
      <template slot-scope="scope">
            <!--1、待审核（IPAD端显示待处理）
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
            <span v-if="scope.row.status == '0'" >待审核</span>
            <span v-if="scope.row.status == '1' && scope.row.ordertype != '3'" >待定制</span>
            <span v-if="scope.row.status == '1' && scope.row.ordertype == '3'" >待建模</span>
            <span v-if="scope.row.status == '2' && scope.row.ordertype != '3'" >待定制</span>
            <span v-if="scope.row.status == '2' && scope.row.ordertype == '3'" >待建模</span>
            <span v-if="scope.row.status == '3'" >定制中</span>
            <span v-if="scope.row.status == '4'" >制作但暂停中</span>
            <span v-if="scope.row.status == '5'" >待确认收货</span>
            <span v-if="scope.row.status == '6'" >已完成</span>
            <span v-if="scope.row.status == '9'" >已关闭</span>
            <span v-if="scope.row.status == '10'" >建模中</span>
            <span v-if="scope.row.status == '11'" >建模中</span>
            <span v-if="scope.row.status == '12'" >待顾客确认</span>
            <span v-if="scope.row.status == '13'" >待定制</span>
            <span v-if="scope.row.status == '-1'" >审核不通过</span>
          </template>
        </el-table-column>
        <el-table-column fit min-width="8%"  label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagemodule :pagesize="12" @Currentpage="getpage" :page="page" :currentpage="page" :total="searchlist['searchNum']"></Pagemodule>
  </div>
</template>
<script>

export default {
  created() {
    if(this.$route.query.page){
      this.page = parseInt(this.$route.query.page)
    }
    this.initialize();
  },
  data() {
    return {
      ordertypelist: [
      {txt:'购买订单',val:'1'},
      {txt:'VIP定制',val:'2'},
      {txt:'高级定制',val:'3'},
      ],
      statuslist: [
      {txt:'待审核 ',val:'0'},
      {txt:'待定制-待建模',val:'2'},
      {txt:'建模中',val:'10'},
      {txt:'待顾客确认',val:'12'},
      {txt:'定制中 ',val:'3'},
      {txt:'待确认收货',val:'5'},
      {txt:'已完成 ',val:'6'},
      {txt:'审核不通过',val:'-1'},
      {txt:'已关闭 ',val:'9'},
      ],
      superscriptNum: '',
      /*搜索*/
      searchbox: '',
      /*获取到的页码*/
      page: 1,
      searchlist: {
        tdList: [],
        searchNum: '',
      },
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }],
      },
      /*日期输入框值*/
      timemodel: '',
      timevalue: '',
      ordertype: '',/*订单类型*/
      status: '',/*订单状态*/
      keywords: '',/*搜索框*/
      datatime: '',


    }
  },
  methods: {
    dateChange(val){
      this.timevalue = val;
      this.initialize();
    },
    /*输入框查询*/
    inputsearch() {
      this.initialize();
    },
    /*页码数据改变*/
    getpage(page) {
      this.page = page;
      this.initialize()
    },
    initialize() {
      if(this.timevalue){
        this.datatime = this.timevalue[0] + '~' + this.timevalue[1];
      }
      /*初始化裸钻数据*/
      var url = this.BASEURL+'/index.php?action=orderlist';
      this.$http.get(url, {
        params: {
          perpage: '12',
          page: this.page,
          ordertype: this.ordertype,
          status: this.status,
          createtime: this.datatime,
          keywords: this.searchbox,
        }
      }, {}).then(response => {
        if (response.body.error_code == 0) {
          this.searchlist.tdList = response.body.result;
          this.searchlist.searchNum = parseInt(response.body.dia_nums);
        }else if(response.body.error_code == '90001'){
          this.searchlist.tdList = '';
          this.searchlist.searchNum = 0;
        }
      },
      response => {
        console.log(response);
      });

    },
    /*查看订单详情*/
    handleEdit(index,row) {
      /*带参数跳转到下个页面*/
      if(row.ordertype == '1'){/*购买订单*/
        this.$router.push({
          name: 'OrderlistShop',
          query: {id:  row.order_id, page:this.page}
        });
      }else if(row.ordertype == '2'){ /*普通定制*/
        this.$router.push({
          name: 'OrderlistCommoncustom',
          query: {id:  row.order_id,page:this.page }
        });
      }else if(row.ordertype == '3') { /*深度定制*/
        this.$router.push({
          name: 'OrderlistDepthcustom',
          query: {id:  row.order_id, page:this.page}
        });
      }
    },
  },
  watch: {
    $route(){
      if(this.$route.query.page){
        this.page = parseInt(this.$route.query.page)
      }
      this.initialize();
    },
    ordertype:function(val){
      this.initialize();
    },
    status:function(val){
      this.initialize();
    }
  }
}
</script>
<style type="text/css">
.warning-box {
  display: inline-block;
  width: .14rem;
  height: .14rem;
  background-color: rgba(255, 0, 0, 0.82);
  border-radius: 50%;
  margin-right: -.3rem;
}
</style>
