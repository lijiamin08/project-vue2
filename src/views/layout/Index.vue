<!--  -->
<template>
  <div class="layout">
    <div class="layout-menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <div class="layout-content" :class="{ small: isCollapse }">
      <Content :isCollapse="isCollapse" @changeShow="changeShow"></Content>
    </div>
  </div>
</template>

<script>
import Menu from "./menu/Index.vue";
import Content from "./content/Index.vue";

export default {
  name: "Layout",
  components: {
    Menu,
    Content,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changeShow() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
}

.layout-menu {
  /* width: 200px; */
  background-color: #112f50;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

.layout-content {
  flex: 1;
  padding-left: 200px;
  padding-top: 0;
}

.small {
  padding-left: 64px;
}
</style>
