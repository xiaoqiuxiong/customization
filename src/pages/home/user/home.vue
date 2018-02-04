<template>
  <div class="clearfix h100 productlist Orderlist">
    <div class="header-child bb1">
      <form action="">
        <ul class="clearfix pr">
          <li class="pull-left">
            <div class="search-box  before pr">
              <form action="javascript:;" @submit="inputsearch()">
                <input type="search" v-model="searchbox" placeholder="搜索">
              </form>
            </div>
          </li>
          <li class="pull-right">
            <button @click="openolddata" type="button" style="padding: 0;height: 100%;padding-left: .2rem;padding-right: .2rem;" class="btn-w sm-btn-w ml-2">添加店员</button>
          </li>
        </ul>
      </form>
    </div>
    <div class="content">
      <el-table :data="searchlist['tdList']" style="width: 100%" stripe >
        <el-table-column fit min-width="14%" prop="name" label="姓名"></el-table-column>
        <el-table-column fit min-width="6%" prop="phone" label="联系电话" ></el-table-column>
        <el-table-column fit min-width="10%" prop="profession" label="职位"></el-table-column>
        <el-table-column fit min-width="8%" prop="addtime" label="添加时间">
          <template slot-scope="scope">
            <span>{{gettime(scope.row.addtime)}}</span>
          </template>
        </el-table-column>
        <el-table-column fit min-width="8%"  label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagemodule :pagesize="12" @Currentpage="getpage" :page="page" :currentpage="page" :total="searchlist['searchNum']"></Pagemodule>
    <transition name="fade">
      <div class="w100 olddatamodel" v-show="olddatamodelisshow">
        <div class="w40 content dis-ib">
          <h4 class="">新增店员</h4>
          <ul class="clearfix">
            <li style="width:100%;padding:0">
              <el-input v-model="userData.name" class="w80 mb-2 mt-4" placeholder="店员姓名"></el-input>
              <el-input v-model="userData.phone" class="w80 mb-2" placeholder="电话号码"></el-input>
              <el-input v-model="userData.profession" class="w80 mb-4" placeholder="店员职位"></el-input>
            </li>
          </ul>
          <button @click="closeolddata()" class="btn-w"> 取 消 </button>
          <button @click="openolddata()" class="btn-b"> 确 认 </button>
        </div>
      </div>
    </transition>
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
      /*搜索*/
      searchbox: '',
      /*获取到的页码*/
      page: 1,
      searchlist: {
        tdList: [],
        searchNum: '',
      },
      /*新增店员*/
      olddatamodelisshow:false,
      /*新增店员信息*/
      userData:{
        name: '',
        phone: '',
        profession: '',
      }
    }
  },
  methods: {
    /*输入框查询*/
    inputsearch() {
      this.initialize();
    },
    /*删除店员*/
    handleDelete(a,b) {
      /*进行二次确认*/
      this.$confirm('你确定要删除本店员吗？', {
        confirmButtonClass: 'btn-b',
        cancelButtonClass: 'btn-w',
      }).then(() => {
        var url = this.BASEURL+'/index.php?action=clean_salesclerk';
        this.$http.get(url, {
          params: {
            id : b.id,
          }
        }, {}).then(response => {
          if (response.body == '1') {
            this.messagedata = '店员删除成功！';
            this.message();
            this.initialize();
          }else{
            this.messagedata = '店员删除失败！';
            this.message();
          }
        },
        response => {
          console.log(response);
        });
      }).catch(() => {
      });
      
    },
    /*页码数据改变*/
    getpage(page) {
      this.page = page;
      this.initialize()
    },
    initialize() {
      var shop_id = this.getCookie("shop_id");
      /*初始化店员数据*/
      var url = this.BASEURL+'/index.php?action=salesclerk';
      this.$http.get(url, {
        params: {
          perpage : 12,
          sid: shop_id,
          page: this.page,
          inquire: this.searchbox,
        }
      }, {}).then(response => {
        if (response.body.error_code == 0) {
          this.searchlist.tdList = response.body.salesclerk;
          this.searchlist.searchNum = parseInt(response.body.salesclerk_nums);
        }else if(response.body.error_code == '90001'){
          this.searchlist.searchNum = 0;
        }
      },
      response => {
        console.log(response);
      });
    },
    /*查看原参数*/
    closeolddata() {
      this.olddatamodelisshow = false;
      this.userData.name = '';
      this.userData.phone = '';
      this.userData.position = '';
    },
    openolddata() {
      if(this.olddatamodelisshow){
        /*提交数据*/
      //判断数据
      if(!this.userData.name) {
        this.messagedata = '店员姓名不能为空';
        this.message();
        return false;
      }
      if(!this.userData.phone) {
        this.messagedata = '手机号码不能为空';
        this.message();
        return false;
      }
      if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.userData.phone))) {
        this.messagedata = '手机号码不正确';
        this.message();
        return false
      }
      if(!this.userData.profession) {
        this.messagedata = '店员职位不能为空';
        this.message();
        return false;
      }
      var shop_id = this.getCookie("shop_id");
      var url = this.BASEURL+'/index.php?action=add_salesclerk';
      this.$http.get(url, {
        params: {
          sid: shop_id,
          name: this.userData.name,
          phone: this.userData.phone,
          profession: this.userData.profession,
        }
      }, {}).then(response => {
        if (response.body.error_code == 0) {
          this.messagedata = '店员添加成功！';
          this.message();
          this.userData.name = '';
          this.userData.phone = '';
          this.userData.profession = '';
          this.initialize();
        }else{
          this.messagedata = '店员添加失败！';
          this.message();
        }
      },
      response => {
        console.log(response);
      });
      this.olddatamodelisshow = false
    }else {
      this.olddatamodelisshow = true
    }
  }
},
watch: {
  $route(){
    if(this.$route.query.page){
      this.page = parseInt(this.$route.query.page)
    }
  },
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
