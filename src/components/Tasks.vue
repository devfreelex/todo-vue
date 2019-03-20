<template>
  <div class="content">
    <div class="task__box">
      <article class="task__item" :key="task.id" v-for="task of tasks">
        <header>
          <h2 class="task__title">{{ task.title }}</h2>
          <div class="task__controll">
            <i class="task__icon">&#9776;</i>
            <div class="controll__list">
              <span class="controll__item" @click="completeTask(task.id)"
                >Concluir</span
              >
              <span class="controll__item" @click="removeTask(task)"
                >Excluir</span
              >
            </div>
          </div>
        </header>
        <p class="task__description">{{ task.description }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import { subject, filterTasks } from "../eventBus/main";
import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {};
  },
  mounted() {
    subject.subscribe(payload => {
      this.addTask(payload);
    });

    filterTasks.subscribe(payload => {
      this.setTypeFilter(payload);
    });
  },
  computed: {
    ...mapState({
      tasks: state => {
        if (state.typeFilter === "complete") {
          const completedTasks = state.tasks.filter(task => {
            if (task.isComplete) return task;
          });
          return completedTasks;
        }

        if (state.typeFilter === "notComplete") {
          const completedTasks = state.tasks.filter(task => {
            if (!task.isComplete) return task;
          });
          return completedTasks;
        }

        if (state.typeFilter === "all" || state.typeFilter === null) {
          return state.tasks;
        }
      }
    })
  },
  methods: {
    ...mapActions(["setTypeFilter", "add", "remove", "complete"]),
    getRandomId(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    removeTask(id) {
      this.remove(id);
    },
    completeTask(id) {
      this.complete(id);
    },
    getCompleteTasks() {
      const completeTasks = this.tasks.filter(task => {
        if (task.isComplete) return task;
      });
      return completeTasks;
    }
  }
};
</script>

<style>
.content {
  display: block;
  float: left;
  width: 980px;
  padding: 15px;
}
.task__box,
.task__title,
.task__description,
.controll__list {
  display: block;
  float: left;
}

.task__box {
  display: flex;
  flex-direction: row;
  padding: 30px 0;
  flex-wrap: wrap;
  width: 100%;
}

.task__item {
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  width: calc(25% - 30px);
  margin: 15px 15px 15px 0;
  border: 1px #ebebeb solid;
}

.task__item + .task__item {
  margin: 15px 15px 15px 20px;
}

.task__item:nth-of-type(4n + 1) {
  margin: 15px 15px 15px 0;
}

.task__title {
  padding: 15px;
  color: #666;
  font-weight: 500;
  font-size: 1em;
  width: 100%;
  border-bottom: 1px #ebebeb solid;
}

.task__description {
  color: #666;
  font-size: 0.875em;
  line-height: 1.2em;
  padding: 15px;
}

.task__item {
  display: block;
  float: left;
  padding: 15px;
}

.task__controll {
  position: relative;
}

.controll__list {
  width: 100%;
  position: absolute;
  padding: 15px;
  border-radius: 3px;
  border: 1px #ebebeb solid;
  background: #fff;
  top: -15px;
  display: none;
}

.task__controll,
.controll__item {
  display: block;
  float: left;
  width: 100%;
}

.controll__item {
  padding: 15px;
  text-decoration: none;
  color: #666;
  font-size: 0.875em;
  transition: 0.5s;
}

.controll__item + .controll__item {
  border-top: 1px #ebebeb solid;
}

.controll__item:hover {
  color: #008cff;
}

.task__icon {
  display: block;
  float: right;
  padding: 10px;
  line-height: 16px;
  border: 1px #ebebeb solid;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  position: absolute;
  top: -50px;
  right: 0;
  background: #fff;
}

.task__icon:hover + .controll__list,
.controll__list:hover {
  display: block;
}

@media all and (max-width: 1180px) {
}
@media all and (max-width: 980px) {
  .task__item {
    width: calc(33.333% - 30px);
    margin: 15px;
  }
  .task__item:nth-of-type(4n + 1) {
    margin: 15px;
  }
  .task__item + .task__item {
    margin: 15px;
  }
}
@media all and (max-width: 780px) {
  .task__item {
    width: calc(50% - 30px);
    margin: 15px;
  }
  .task__item:nth-of-type(4n + 1) {
    margin: 15px;
  }
  .task__item + .task__item {
    margin: 15px;
  }
}
@media all and (max-width: 580px) {
  .task__item {
    width: calc(100% - 30px);
    margin: 15px;
  }
  .task__item:nth-of-type(4n + 1) {
    margin: 15px;
  }
  .task__item + .task__item {
    margin: 15px;
  }
}

@media all and (max-width: 479px) {
  body::before {
    content: "Para obter uma boa experiência utilize um dispositivo com resulução mínima de até 480px";
    display: block;
    float: left;
    width: 100%;
    padding: 15px;
    min-height: 45px;
    line-height: 1.2em;
    background: #f00;
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: 0;
    z-index: 15000;
  }
}
</style>
