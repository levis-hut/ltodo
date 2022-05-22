<template>
  <div class="slider-container">
    <div class="text">
      <QuadrantContainer title="紧急不重要" color="yellow" />
      <QuadrantContainer title="紧急并重要" color="red" :taskList="tasks.q1" />
    </div>
    <div class="operator d-flex">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  props: {
    text: String,
  },
  components: {
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
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.line {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 50%;
}
.quadrant {
  display: flex;
  width: 50%;
  color: #777;
}
.top-left {
  border-right: @borderWidth solid @borderColor;
  border-bottom: @borderWidth solid @borderColor;
}
.top-right {
  border-left: @borderWidth solid @borderColor;
  border-bottom: @borderWidth solid @borderColor;
}
.bottom-left {
  border-top: @borderWidth solid @borderColor;
  border-right: @borderWidth solid @borderColor;
}
.bottom-right {
  border-top: @borderWidth solid @borderColor;
  border-left: @borderWidth solid @borderColor;
}
.task-container {
  display: flex;
}
.category {
  display: flex;
  font-size: 1.5rem;
}
.tasks {
  display: flex;
}
</style>
