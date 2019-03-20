export default {
  add(context, payload) {
    context.commit("ADD_TASK", payload);
  },

  remove(context, payload) {
    context.commit("REMOVE_TASK", payload);
  },

  complete(context, payload) {
    context.commit("COMPLETE_TASK", payload);
  },

  setTypeFilter(context, payload) {
    context.commit("SET_TYPE_FILTER", payload);
  },

  loadData(context, payload) {
    context.commit("LOAD_DATA", payload);
  }
};
