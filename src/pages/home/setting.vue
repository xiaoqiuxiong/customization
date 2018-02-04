<template>
  <div class="">
    <div class="conttent clearfix tac setting pa w100">
      <div class="w25 dis-ib pd-3">
        <router-link :to="{name:'UserlistHome'}">
          <div class="box pull-left pr settingleft ">
            <div class="sm-box clearfix h100"  style="border:0;background-color:transparent">
              <div class="box-content pa">
                <img src="../../../src/assets/image/icon/userlist.png" height="50" width="42" alt="">
                <p class="f36 fc-white"> &nbsp;|&nbsp; 店员管理</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="w25 dis-ib pd-3">
        <router-link :to="{name:'Changepassword'}">
          <div class="box pull-left pr settingright">
            <div class="sm-box clearfix h100">
              <div class="box-content pa">
                <img src="../../../src/assets/image/icon/chagepassword.png" height="50" width="42" alt="">
                <p class="f36 fc-blue"> &nbsp;|&nbsp; 修改密码</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="w25 dis-ib pd-3">
        <router-link to="">
          <div @click="logout()" class="box pull-left pr settingleft">
            <div class="sm-box clearfix h100"  style="border:0;background-color:transparent">
              <div class="box-content pa">
                <img src="../../../src/assets/image/icon/logout.png" height="50" width="42" alt="">
                <p class="f36 fc-white"> &nbsp;|&nbsp; 用户注销</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      var url = this.BASEURL+'/logout.php';
      this.$http.get(url).then(response => {
        this.$router.push({name: 'Login'});
        this.setCookie("login_num", "", -1);
      }, response => {
        console.log(response);
      });
    }
  }
}
</script>

<style scoped>
.settingright:active {
  border-color: #97f1fd;
}

.settingleft:active {
  background-color: #46d8e8;
}
.setting{

}
</style>
