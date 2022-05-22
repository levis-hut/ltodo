<template>
  <div class="quadrant border d-flex">
    <div class="category d-flex">
      <span :class="`c-${color}`">{{ title }}</span>
      <button class="add" @click="showNewInput = !showNewInput">新增</button>
    </div>
    <div class="task-list d-flex">
      <div class="task d-flex" v-show="showNewInput">
        <input
          class="d-flex"
          type="text"
          placeholder="TODO"
          v-model="newTask"
        />
        <button class="d-flex" @click="addTask">确认</button>
        <button class="d-flex" @click="cancelAddTask">取消</button>
      </div>
      <div class="task d-flex" v-for="task in tasks" :key="task">
        <div
          class="task-info w-100 d-flex"
          :class="task.finished ? 'task-finished' : ''"
        >
          {{ task.desc }}
        </div>
        <div class="task-meta w-100 d-flex">
          {{ task.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuadrantContainer",
  props: {
    title: String,
    color: String,
    taskList: Array,
  },
  data() {
    return {
      // 任务
      tasks: this.taskList ?? [],
      // 是否显示新增
      showNewInput: false,
      // 新任务
      newTask: "",
      count: 1,
    };
  },
  methods: {
    addTask() {
      this.tasks.unshift({
        desc: this.newTask,
        date: new Date(),
        finished: false,
      });
      this.showNewInput = false;
      this.newTask = "";
    },
    cancelAddTask() {
      this.showNewInput = false;
      this.newTask = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@quadrantPadding: 0.5rem;
@borderColor: #ccc;
@borderWidth: 0.3px;

@categoryHeight: 1.5rem;
@taskListHeight: 100% - 1.5rem;
.quadrant {
  flex-direction: column;
  padding: @quadrantPadding;
  width: 100%;
  height: 100%;
  color: #777;
}
.border {
  border-left: @borderWidth solid @borderColor;
  border-bottom: @borderWidth solid @borderColor;
}
.category {
  font-size: @categoryHeight;
  height: @categoryHeight;
}
.add {
}

// Task
.task-list {
  flex-direction: column;
  height: @taskListHeight;
  overflow-x: hidden;
  overflow-y: auto;
}
.task {
  padding: 10% 10% 0 10%;
  flex-direction: column;
  justify-content: center;
}
.task-finished {
  text-decoration: line-through;
  color: #ccc !important;
}
.task-info {
  padding: 0.5rem 0;
  color: #666;
  font-size: 1.3rem;
  cursor: pointer;
}
.task-meta {
  padding: 0.8rem 0;
  color: #ccc;
  font-size: 0.8rem;
  border-bottom: 1px solid #ccc;
}
</style>
