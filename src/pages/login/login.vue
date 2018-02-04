<template>
  <div class="login-box clearfix h100" id="loginbox">
    <div class="clearfix box">
      <div class="left">
        <img src="../../assets/image/icon/logo_03.png" alt="KISSRING" class="logo">
      </div>
      <div class="right">
        <form action="javascript:;" @submit="submitdata()">
          <div class="form-group bb1 before">
            <input type="tel" class="form-control form-control-img" v-model="tel" name="tel" id="tel"
                   placeholder="手机号码">
          </div>
          <div class="form-group bb1 before after">
            <input type="password" class="form-control form-control-img " v-model="password" name="password" id="password" placeholder="登录密码">
            <!-- <span @click="showpassword"><i class="el-icon-view" ></i></span> -->
          </div>
          <transition name="fade">
          <div v-show="login_num>0" class="form-group bb1 before" style="padding-bottom:0">
            <input style="width:60%" type="text" v-model="verificationCode" name="verificationCode" id="verificationCode" placeholder="验证码" class="form-control lost-form-control form-control-img yzminput">
            <div id="tyzmgetCodeext" @click="refreshCode" class="getCode yzmgetCode">
              <s-identify  :identifyCode="identifyCode"></s-identify>
              <span>看不清楚,重新获取</span>
            </div>
          </div>
        </transition>
          <div class="login_lostpassword"><a @click="login_lostpassword()" style="color:#777777" href="javascript:;">忘记密码</a></div>
          <input type="submit" class="mybtn" value="登 录">
        </form>
      </div>
    </div>
    <!-- 公共组件 -->
    <!-- 提示窗 -->
    <!-- 1、没有输入手机号码反馈提示：
    2、手机号码格式错误提示：
    3、系统不存的的帐号或者密码错误提示：
    4、登陆成功提示：
    请输入登录手机号码
    手机号码不正确
    帐号或登陆密码不正确 -->
  </div>
</template>
<script>
  import crypto from 'crypto'
  export default {
    created(){
      /*进来时候判断是否已经登录*/
      var url = this.BASEURL+'/index.php?action=loginstatus';
      this.$http.get(url, {}).then(response => {
        if(response.body.error_code == '0'){
          this.$router.push({name: 'Index'});
        }
      }, response => {
        console.log(response);
      });

      if(this.getCookie("login_num")){
        this.login_num = this.getCookie("login_num");
      }
      
    },
    data() {
      return {
        tel: '',
        password: '',
        messagedata: '',
        login_num: 0,
        identifyCodes: '1234567890',
        identifyCode: '',
        verificationCode:'',
        // showpassword_change: 'password',
        title: "定制系统",
      }
    },
    mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
    methods: {
      login_lostpassword (){
          this.$router.push({path: '/login_lostpassword'});
      },
      /*showpassword (){
        if(this.showpassword_change==='password'){
          this.showpassword_change = "text"
        }else{
          this.showpassword_change = "password"
        }
      },*/
      // 生成一个随机数
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
        }
      },
      submitdata() {
        this.submit_disabled = true;
        /*假如有验证码，需要验证码*/
        if(this.login_num > 0){
          if(this.verificationCode==""){
            this.messagedata = '请输入验证码';
            this.message();
            return false;
          };
          if(this.verificationCode.toUpperCase() != this.identifyCode){
            this.messagedata = '请正确输入验证码';
            this.message();
            // document.getElementById("tyzmgetCodeext").click();
            return false;
          }
          
        }

        /*md5加密*/
        var a;
        var md5 = crypto.createHash("md5");
        md5.update(this.password);
        a = md5.digest('hex');

        if (this.tel == "") {
          this.messagedata = '请输入登录手机号码';
          this.message();
          return false
        } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.tel))) {
          this.messagedata = '手机号码不正确';
          this.message();
          return false
        } else if (this.password == "") {
          this.messagedata = '请输入登录密码';
          this.message();
          return false
        } else {
          var url = this.BASEURL+'/index.php?action=login';
          this.$http.post(url, {
            mobile: this.tel,
            password: a
          }, {emulateJSON: true}).then(response => {
            if (response.body.error_code == '0') {
              this.setCookie("login_num", "", -1);
              if(response.body.reset_status == '1'){
                this.messagedata = '第一次登录，请修改密码';
                this.message();
                this.$store.dispatch('save_restStatus',response.body.reset_status);
                var self = this; 
                var Timeout = setTimeout(function () {  
                  self.$router.push({path: '/changepassword'});
                }, 1000);
              }else{
                this.messagedata = '登录成功';
                this.message();
                this.$store.dispatch('save_user',{
                  result:response.body.result,
                  sname:response.body.sname});
                this.setCookie("shop_id", response.body.result.sid, 365);
                this.$store.dispatch('save_restStatus','');
                var self = this; 
                var Timeout = setTimeout(function () {  
                  self.$router.push({path: '/index'});
                }, 1000);
                
              }
              
            } else if (response.body.error_code == '90002') {
              this.messagedata = '登录密码错误';
              this.message();
              this.login_num++;
              this.setCookie("login_num", this.login_num, 0.04);
            } else if (response.body.error_code == '90003') {
              this.messagedata = '登录账号不存在';
              this.message();
              this.login_num++;
              this.setCookie("login_num", this.login_num, 0.04);
            }
          }, response => {
            console.log(response);
          });
        }
      },
      /*查询数据整理*/
      clearsearchlist(demo) {
        var str = "";
        demo.forEach(
          function (item) {
            str += item + "-"
          }
        )
        return str;
      },
    }
  }

</script>
<style>
  .login_lostpassword {
    text-align: right;
    padding-top: 0;
    padding-bottom: .4rem;
  }
  .yzminput{
    width: 40%;
    margin-top: 0;
    padding-bottom: 0;
    vertical-align: top;
  }
  .yzmgetCode{
    padding:0;
    background:transparent;
    /*margin-top: -0.1rem;*/
    margin-top: 0;
    width: 38%;
    float: none;
    box-sizing: border-box;
    text-align: right;
    padding-bottom: 0;
  }
  .yzmgetCode:hover{
    background: transparent;
  }
  .yzmgetCode>span{
    color: #9B9B9B;
    position: absolute;
    top: .2rem;
    left: 100%;
    display: inline-table;
    margin-left: .2rem;
  }
</style>
