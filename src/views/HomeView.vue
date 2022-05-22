<template>
  <div class="home">
    <QuadrantLayer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuadrantLayer from '@/components/quadrant/QuadrantLayer.vue'

export default {
  name: 'HomeView',
  components: {
    QuadrantLayer
  }
}
</script>
<style lang="less" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  background: #fafafa;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>