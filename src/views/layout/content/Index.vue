<!--  -->
<template>
  <div>
    <div class="header">
      <div class="open">
        <span v-if="!isCollapse" class="icon el-icon-s-fold" @click="changeMenu"></span>
        <span v-else class="icon el-icon-s-unfold" @click="changeMenu"></span>
      </div>
    </div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["isCollapse"],
  methods: {
    changeMenu() {
      this.$emit("changeShow");
    },
  },
};
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #1e78bf;
  color: #fff;
  line-height: 50px;
}

.icon {
  font-size: 22px;
  cursor: pointer;
}
</style>
