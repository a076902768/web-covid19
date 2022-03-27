<template>
  <ElConfigProvider :locale="locale">
    <el-container style="height: 100%">
      <el-header class="header">
        <el-menu
          :default-active="'/'"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(menu, key) in pathList"
            :key="key"
            :index="menu.value"
          >{{ menu.name }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-container class="container">
        <el-main>
          <Title :title="pathName" />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </ElConfigProvider>
</template>
<script>
import { defineComponent, ref, watch, onMounted } from "vue";
import { useRouter } from 'vue-router'
import { ElConfigProvider } from "element-plus";
import Title from '@/components/Title'
import lang from "element-plus/lib/locale/lang/zh-tw";
import { pathList, findPath, default as pathEnum } from '@/assets/js/enum/pathEnum'

export default defineComponent({
  components: {
    ElConfigProvider,
    Title,
  },
  setup() {
    const activeIndex = ref('');

    const pathName = ref('');

    const router = useRouter();

    watch(activeIndex, (val) => changePathName(val));

    const changePathName = (val) => pathName.value = findPath(val).name || '';

    const handleSelect = key => {
      activeIndex.value = key
      router.push({ name: key })
    };

    onMounted(() => {
      changePathName(pathEnum.index.value);
    });

    return {
      locale: lang,
      activeIndex,
      pathList,
      handleSelect,
      pathName,
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
