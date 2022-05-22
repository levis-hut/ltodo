<template>
  <div class="layer-container bg-gray">
    <div class="line">
      <QuadrantContainer title="紧急并重要" color="red" :taskList="tasks.q1" />
      <QuadrantContainer title="紧急不重要" color="yellow" />
    </div>
    <div class="line">
      <QuadrantContainer title="不紧急但重要" color="blue" />
      <QuadrantContainer title="不紧急不重要" color="green" />
    </div>
  </div>
</template>

<script>
import QuadrantContainer from "@/components/quadrant/QuadrantContainer.vue";

export default {
  name: "QuadrantLayer",
  props: {
    msg: String,
  },
  components: {
    QuadrantContainer,
  },
  data() {
    return {
      tasks: {
        q1: [
          { desc: "做一个Demo", date: "2022-05-22 00:00:00", finished: false },
          { desc: "摸鱼", date: "2022-05-22 00:00:00", finished: false },
          { desc: "摸鱼", date: "2022-05-22 00:00:00", finished: true },
          { desc: "摸鱼", date: "2022-05-22 00:00:00", finished: true },
          { desc: "摸鱼", date: "2022-05-22 00:00:00", finished: true },
          { desc: "摸鱼", date: "2022-05-22 00:00:00", finished: true },
          { desc: "摸鱼", date: "2022-05-22 00:00:00", finished: true },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@borderColor: #ccc;
@borderWidth: 0.3px;
.layer-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.line {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
}
</style>
