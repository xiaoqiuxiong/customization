<template>
  <div class="login-box clearfix h100" id="loginbox">
    <div class="clearfix box">
      <div class="left">
        <img src="../../assets/image/icon/logo_03.png" alt="KISSRING" class="logo">
      </div>
      <div class="right">
        <form action="javascript:;" @submit="submit">
          <div class="form-group bb1">
            <input type="password" class="form-control" name="password_first" id="password_first" v-model="newpassword"
                   placeholder="新密码">
          </div>
          <div class="form-group bb1">
            <input type="password" class="form-control" name="password_second" id="password_second"
                   v-model="newpasswordagain" placeholder="确认新密码">
          </div>
          <input type="submit" class="mybtn lost-yzm" value="保存密码">
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import crypto from 'crypto'
  export default {
    data() {
      return {
        newpassword: '',
        newpasswordagain: '',
      }
    },
    methods: {
      submit () {
        var self = this;
        this.$message({
                  message: '修改成功,3秒后返回登录页面',
                  duration: 3000,
                  customClass: 'my-el-message',
                  onClose:function(){
                    self.$router.push({name: 'Login'})
                  }
                });
        return false
        /*判断新旧密码是否输入正确*/
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(this.newpassword)) || !(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(this.newpasswordagain))) {
          this.messagedata = '请输入同时包含数字和字母且不少于6位的密码';
          this.message();
          return false
        } else if (this.newpassword != this.newpasswordagain) {/*新旧密码是否输入一致*/
          this.messagedata = '两次输入密码不一致';
          this.message();
          return false
        } else {
          /*md5加密*/
          var a;
          var md5 = crypto.createHash("md5");
          md5.update(this.newpassword);
          a = md5.digest('hex');

          /*md5加密*/
          var b;
          var md5 = crypto.createHash("md5");
          md5.update(this.newpasswordagain);
          b = md5.digest('hex');

          var url = this.BASEURL+'/index.php?action=setpsw';
          this.$http.post(url, {
            password_one: a,
            password_two: b,
            type: 'changepwd',
          }, {emulateJSON: true}).then(response => {
            if (response.body.error_code == '90009' || response.body.error_code == '90005') {
              return false
            } else if (response.body.error_code == '0') {
                this.$message({
                  message: '修改成功,3秒后返回登录页面',
                  duration: 3000,
                  customClass: 'my-el-message',
                  onClose:function(){
                    var self = this; 
                    self.$router.push({name: 'Login'})
                  }
                });
            } else if (response.body.error_code == "90006-1") {
              this.messagedata = response.body.error_massege;
              this.message();

            } else if (response.body.error_code == '90024'){
              this.messagedata = response.body.error_massege;
              this.message();
            }
          });
        }
      },
    }
  }

</script>
<style>
</style>
