<template>
  <ElConfigProvider :locale="locale">
    <el-container style="height: 100%;">
      <el-header class="header">縣市</el-header>
      <el-container class="container">
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </ElConfigProvider>
</template>
<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-tw'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      locale: lang,
      handleOpen,
      handleClose,
      Location,
      Document,
      IconMenu,
      Setting
    }
  },
})

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