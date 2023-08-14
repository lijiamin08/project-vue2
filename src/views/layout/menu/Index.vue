<!--  -->
<template>
  <div class="menu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b"
      route
      :collapse="isCollapse"
    >
      <el-menu-item>
        <span slot="title">首客生鲜采购系统</span>
      </el-menu-item>
      <!-- 首页 -->
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 产品管理 -->
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list">产品列表</el-menu-item>
          <el-menu-item index="/product/catagory">产品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 订单管理 -->
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">订单列表</el-menu-item>
          <el-menu-item index="/order/order-catagory">订单分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 广告管理 -->
      <el-submenu index="/advert">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/advert-list">广告列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      // isCollapse: true,
    };
  },
  props: ["isCollapse"],
};
</script>

<style scoped>
.el-menu {
  border-right: 0;
}

.is-active {
  background-color: #1e78bf !important;
  color: #fff !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
