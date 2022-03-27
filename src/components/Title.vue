<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  }
})
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>