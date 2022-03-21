<template>
  <ElConfigProvider :locale="locale">
    <el-container style="height: 100%">
      <el-header class="header">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>
      <el-container class="container">
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </ElConfigProvider>
</template>
<script>
import { defineComponent, ref } from "vue";
import { ElConfigProvider } from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-tw";

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    const activeIndex = ref("1");
    const activeIndex2 = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      locale: lang,
      activeIndex,
      activeIndex2,
      handleSelect
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  background-color: $color1;
}
.header {
  background-color: $color3;
  font-size: 1rem;
}
</style>
