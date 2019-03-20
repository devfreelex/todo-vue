<template>
  <div class="header">
    <div class="content">
      <h1 class="header__logo">
        <span class="logo--font-bold">Task</span>
        Manager
      </h1>
      <span class="btn btn--save" @click="showForm">+</span>
    </div>
  </div>
</template>

<script>
import {formSubject} from '../eventBus/main'

export default {
  data: () => {
    return {}
  },
  methods: {
    showForm (e) {
      formSubject.next({isActive: true})
    }
  }
};
</script>

<style scoped>
.header {
  display: block;
  float: left;
  width: 100%;
  padding: 20px 15px;
  line-height: 50%;
  border-bottom: 3px #1867c0 solid;
  background: #1867c0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  text-align: right;
  z-index: 14999;
}

.header__logo {
  display: block;
  float: left;
  font-size: 1.5em;
  color: #fff;
}

.logo--font-bold {
  font-weight: 600;
}

.btn {
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 100px;
  position: relative;
  transform: translateY(calc(50% - 13px));
  background: #18c0aa;
  position: absolute;
  top: 50%;
  right: 15px;
  color: #fff;
  font-weight: bold;
  font-size: 2em;
  text-decoration: none;
  text-align: center;
  line-height: 42px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>

