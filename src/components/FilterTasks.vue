<template>
  <div class="content">
    <Title class="title"/>
    <div class="box__filter">
      <span class="filter__title">Filtrar por:</span>

      <span
        class="btn"
        @click="setType('complete')"
        v-bind:class="{'is--active': showCompleted}"
      >Feitas</span>

      <span
        class="btn"
        @click="setType('notComplete')"
        v-bind:class="{'is--active': showNotCompleted}"
      >Pra fazer</span>

      <span class="btn" @click="setType('all')" v-bind:class="{'is--active': showAll}">Todas</span>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import { filterTasks } from "../eventBus/main";
import { mapState } from "vuex";

export default {
  data: () => {
    return {};
  },
  components: {
    Title
  },
  methods: {
    setType(type) {
      filterTasks.next(type);
    }
  },
  computed: {
    ...mapState({
      showCompleted: state => {
        if(state.typeFilter === "complete") return true
      },
      showNotCompleted: state => {
        if(state.typeFilter === "notComplete") return true
      },
      showAll: state => {
        return state.typeFilter === "all" || state.typeFilter === null;
      }
    })
  }
};
</script>
    
<style scoped>
.box__filter {
  display: block;
  float: right;
  padding: 45px 15px 0 0;
  text-align: right;
  color: #666;
  text-transform: uppercase;
  font-size: 0.775em;
  font-weight: bold;
}
.filter__title {
  padding-right: 5px;
}

.btn {
  display: inline-block;
  border: 1px #ebebeb solid;
  padding: 10px;
  text-decoration: none;
  color: #666;
  cursor: pointer;
}
.btn.is--active {
  background: #1867c0;
  color: #fff;
  border: 1px #1867c0 solid;
}
.btn + .btn {
  border-left: 0;
}
</style>


