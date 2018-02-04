<template>
  <div class="login-box" id="loginbox">
    <div class="clearfix box">
      <div class="left">
        <img src="../../assets/image/icon/logo_03.png" alt="KISSRING" class="logo">
      </div>
      <div class="right">
        <form action="javascript:;" @submit="closeTipsBox"><!-- @submit.prevent -->
          <div class="form-group bb1"  @submit="closeTipsBox">
            <input type="tel" class="form-control" name="tel" v-model="tel" id="tel" placeholder="手机号码">
          </div>
          <div class="form-group bb1 lost-form-group">
            <input v-model="code" type="text" class="form-control lost-form-control" name="verificationCode" id="verificationCode"
                   placeholder="验证码">
          </div>
          <button class="getCode" @click="verificationcode" type="button" :disabled="getCodedisabled">
            <span v-if="sendMsgDisabled && num != 1">{{time+'秒后获取'}}</span>
            <span v-if="!sendMsgDisabled && num != 1">获取验证码</span>
            <span v-if="num == 1">重新获取</span>
          </button>
          <input type="submit"  class="mybtn lost-yzm"  value="重置密码">
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        seen: true,
        tel:'',
        code:'',
        time:60,
        sendMsgDisabled:false,
        num:0,
        getCodedisabled:false
      }
    },
    methods: {
      send() {
        let me = this;
        me.sendMsgDisabled = true;
        me.getCodedisabled = true;
        let interval = window.setInterval(function() {
          if ((me.time--) <= 1) {
            me.time = 59;
            if(this.num == 1) {
              me.sendMsgDisabled = false;
            }  else {
              me.sendMsgDisabled = false;
              this.num = 1
            }
            window.clearInterval(interval);
            me.getCodedisabled = false;
          }
        }, 1000);
      },
      /*获取验证码*/
      verificationcode() {
        if (this.tel == "") {
          this.messagedata = '请输入手机号码';
          this.message();
          return false
        } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.tel))) {
          this.messagedata = '手机号码不正确';
          this.message();
          return false
        } else {
          var url = this.BASEURL + '/index.php?action=sendsms';
          this.$http.post(url, {
            phone_number: this.tel,
          }, {emulateJSON: true}).then(response => {
            if(response.body.error_code == "0"){
              this.messagedata = "验证码已经发送，请注意查收";
              this.message();
              this.send();
            }else if(response.body.error_code == "90003"){
              this.messagedata = response.body.error_message;
              this.message();
            } else {
              this.messagedata = '获取验证码失败，请重新获取';
              this.message();
            }
          }, response => {
            console.log(response);
          });
        }
      },
      closeTipsBox: function () {
        if (this.tel == "") {
          this.messagedata = '请输入手机号码';
          this.message();
          return false
        } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.tel))) {
          this.messagedata = '手机号码不正确';
          this.message();
          return false
        } else if(this.code == ''){
          this.messagedata = '请输入验证码';
          this.message();
          return false
        }else {
          var url = this.BASEURL+'/index.php?action=truecode';
          this.$http.post(url, {
            phone_number: this.tel,
            phone_code: this.code,
          }, {emulateJSON: true}).then(response => {
            if(response.body.error_code == '90020'){
              this.messagedata = '验证码不正确，请重新输入';
              this.message();
              return false;
            }else if(response.body.error_code == '0'){
              this.$router.push({name: 'Login_rest'});
            }else {
              this.messagedata = '请重新尝试!';
              this.message();
              return false;
            }
          }, response => {
            console.log(response);
          });
        }
      }
    }
  }

</script>
<style>
</style>
