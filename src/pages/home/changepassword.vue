<template>
  <div class="pr w100 h100">
    <div class="pa box changepassword">
      <form action="javascript:;" @submit="submitdata()">
        <!-- @submit.prevent -->
        <div class="form-group bb1">
          <input @focus="clear()" v-model="oldpassword" type="password" class="form-control" name="password_first" id="password_old"
                 placeholder="旧密码">
        </div>
        <div class="form-group bb1 pr">
          <input v-model="newpassword" type="password" class="form-control" name="password_first" id="password_first"
                 placeholder="新密码">
          <div v-show="changebox_show" class="changebox pa" style="width: 4rem">
            <span>弱 </span>
            <el-progress :show-text="false" :percentage="passWordchange"></el-progress>
            <span> 强</span>
          </div>
        </div>
        <div class="form-group bb1">
          <input v-model="newpasswordagain" type="password" class="form-control" name="password_second"
                 id="password_second" placeholder="确认新密码">
        </div>
        <p class="mt-1 tac orange">请输入同时包含数字和字母的6~18位新密码</p>
        <input type="submit" class="mybtn lost-yzm w100 mt1" value="重置密码">
      </form>
    </div>
  </div>
</template>
<script>
  import crypto from 'crypto'
  /*6位数以上的字符串(可以纯数字)，必须以post方式提交*/
  /*新密码需要显示密码强度，6位数以下的密码不显示任何，
   6位数以上单纯数字或者单纯字母则为弱、
   数字+字母则为中，
   数字+大小写字母或者数字+字母+符号则为强，
   输入的过程中就给出提示；*/
  export default {
    created() {
    },
    data() {
      return {
        oldpassword: '',
        newpassword: '',
        newpasswordagain: '',
        /*密码强度条*/
        passWordchange: 0,
        second:5,
        /*密码强度条显示*/
        changebox_show: false,
      }
    },
    methods: {
      clear(){
        this.oldpassword = ''
      },
      submitdata() {
        /*判断原密码是否低于6位数*/
        if (!(/^.{6,}$/.test(this.oldpassword))) {
          this.messagedata = '请正确输入原密码';
          this.message();
          return false
        } else {
        }
        /*判断新旧密码是否输入正确*/
        if (!(/^.{6,18}$/.test(this.newpassword)) || !(/^.{6,18}$/.test(this.newpasswordagain))) {
          this.messagedata = '密码强度不能为弱';
          this.message();
          return false
        } else if (this.newpassword != this.newpasswordagain) {/*新旧密码是否输入一致*/
          this.messagedata = '两次输入密码不一致';
          this.message();
          return false
        } else if(this.passWordchange <= 33){
          this.messagedata = '密码强度不能为弱';
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
          md5.update(this.oldpassword);
          b = md5.digest('hex');

          var url = this.BASEURL+'/index.php?action=editpsw';
          this.$http.post(url, {
            password: a,
            oldpassword: b,
          }, {emulateJSON: true}).then(response => {
            if (response.body.error_code == '90009' || response.body.error_code == '90005') {
              this.$router.push({name: 'Login'})
              return false
            } else {
              if (response.body.result == 'SUCCESS') {
                 if(this.$store.state.user.resetStatus){
                   this.$store.dispatch('save_restStatus','');
                  };
                 var self = this; 
                this.$message({
                  message: '修改成功,3秒后返回登录页面',
                  duration: 3000,
                  customClass: 'my-el-message',
                  onClose:function(){
                    var url = self.BASEURL+'/logout.php';
                    self.$http.get(url).then(response => {
                      self.setCookie("login_num", "", -1);
                      self.$router.push({name: 'Login'});
                    }, response => {
                      console.log(response);
                    });
                  }
                });
              } else if (response.body.error_code == "90006-1") {
                this.$message({
                  message: '修改失败，请重新尝试',
                  duration: 1000,
                  customClass: 'my-el-message',
                });
              }
            }
          });
        }
      },
    },
    watch: {
      newpassword: function (val) {
        this.changebox_show = val != '' ? true : false;
        /*判断新密码强度*/
        if ((/^\d{6,18}$/.test(val)) || (/^[A-Za-z]{6,18}$/.test(val))) {/*六位以上纯数字或者六位以上纯字母*/
          this.passWordchange = 33
        } else if ((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(val))) {/*六位以上数字加字母*/
          this.passWordchange = 66
        } else if ((/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{6,18}$/.test(val))) {/*必须包含大小写字母和数字的组合，不能使用特殊字符,特殊符号包括: ~!@#$%^&**/
          this.passWordchange = 100
        } else {
          this.passWordchange = 0
        }
      },
      newpasswordagain: function(val) {
        this.changebox_show = true;
      },
    }
  }

</script>

<style>
  .changepassword {
    margin-top: -.8rem;
  }

  .el-progress {
    display: inline-block;
    position: relative;
    line-height: 1;
    width: 80%;
  }

  .el-progress-bar__inner {
    background-color: #45C3D3;
  }
</style>
