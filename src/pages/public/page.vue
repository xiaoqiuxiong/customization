<template>
  <div class="page-box mt-4 tar" v-if="total">
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size='pagesize'
        layout="prev, pager, next"
        :current-page='page'
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['total', 'pagesize', 'page'],
    methods: {
      handleCurrentChange(val) {
        this.$emit('Currentpage', val);
      }
    },
    data() {
      return {};
    }
  }
</script>
<style>
  .el-pager li.active {
    border-color: #45C3D3;
    background-color: #45C3D3;
    color: #fff;
    cursor: default;
  }

</style>
