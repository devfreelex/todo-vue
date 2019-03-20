<template>
  <div>
    <ToolBar />
    <div class="container align--center">
      <Register />
      <FilterTasks />
      <Tasks />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Tasks from "./components/Tasks";
import ToolBar from "./components/ToolBar";
import Register from "./components/Register";
import FilterTasks from "./components/FilterTasks";

export default {
  name: "App",
  mounted() {
    this.loadData(true);
  },
  components: {
    Tasks,
    ToolBar,
    Register,
    FilterTasks
  },
  methods: {
    ...mapActions(["loadData"])
  },
  data() {
    return {};
  }
};
</script>
