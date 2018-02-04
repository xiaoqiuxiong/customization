<template>
  <div>
    <div class="home-box">
      <ul>
        <li v-for="item in boxList">
          <router-link :to="item.href"><img :src="item.src" alt="">
            <div :class="'text ' + item.textClass">
              <h3 class="f36 fc333">{{ item.title }}</h3>
              <p class="index-line fc333"></p>
              <p :class="'f32 ' + item.textClass">{{ item.english }}</p>
              <p class="f24" :class="item.textClass">{{ item.title1 }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    var url = this.BASEURL+'/index.php?action=ringcare_type';
    this.$http.get(url, {
      params: {
      }
    }).then(response => {
      
      /*修改vuex gj_data*/
      this.$store.commit('changeGjData',response.body);

      var ringsetting_data_obj = JSON.stringify(response.body);
      this.setCookie("ringsetting_data",escape(ringsetting_data_obj), 365);
    }, response => {
      console.log(response);
    });
  },
  data() {
    return {

      boxList: [{
        href: {path:'inventory',query:{set:JSON.stringify(this.setlist[0])}},
        src: require('../../assets/image/home-index1.png'),
        textClass: 'violet',
        title: '裸钻库存',
        english: 'QUALITY',
        title1: '坚持高品质'
      },
      {
        href: {path:'product',query:{set:JSON.stringify(this.setlist[1])}},
        src: require('../../assets/image/home-index2.png'),
        textClass: 'pink',
        title: '产品中心',
        english: 'DESIGN',
        title1: '多样化设计'
      },
      {
        href: 'commoncustom',
        src: require('../../assets/image/home-index3.png'),
        textClass: 'green',
        title: 'VIP定制',
        english: 'SUPPORT',
        title1: '贴心的协助'
      },
      {
        href: 'depthcustom',
        src: require('../../assets/image/home-index4.png'),
        textClass: 'orange',
        title: '高级定制',
        english: 'SERVICE',
        title1: '专属的服务'
      }
      ]
    }
  }
}

</script>
<style scoped>

</style>
