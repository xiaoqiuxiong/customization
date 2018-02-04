<template>
  <div class="clearfix h100 commoncustom">
    <ul class="box">
      <li class="clearfix">
        <router-link style="border: 0" :to="{path:'/inventory',query:{set:JSON.stringify(this.setlist[2])}}">
        <div class="commoncustom-left w50 pull-left">
          <img src="../../../assets/image/commonpic1.png" height="324" width="493" alt="">
        </div>
        <div class="commoncustom-right w50 pull-left">
          <h3>从 <span class="btn-b tip-before f36" ><span class="xsj"></span>挑选钻石</span> 开始</h3>
          <p class="fc-darkgray f26">先从全球库里挑选一颗钻石</p>
          <p class="fc-darkgray f26">然后选择合适戒托</p>
        </div>
        </router-link>
      </li>
      <li class="clearfix">
        <router-link style="border: 0;padding: 0" :to="{path:'/product',query:{set:JSON.stringify(this.setlist[3])}}">
        <div style="padding-top: 0.6rem;" class="commoncustom-right w50 pull-left">
          <h3>从 <span class="btn-b tip-before f36" ><span class="xsj"></span>挑选戒托</span> 开始</h3>
          <p class="fc-darkgray f26">先挑选你中意的戒托款式</p>
          <p class="fc-darkgray f26">然后搭配上合适的钻石</p>
        </div>
        <div class="commoncustom-left w50 pull-left">
          <img src="../../../assets/image/commonpic2.png" height="324" width="493" alt="">
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listcode:this.$route.query.listcode,
      detailcode:this.$route.query.detailcode
    }
  },
  methods: {
  }
}

</script>
<style type="text/css">


</style>
