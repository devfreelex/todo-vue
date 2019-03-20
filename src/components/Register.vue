<template>
  <div class="register" v-bind:class="{ 'is--visible': isFormActive }">
    <div class="content">
      <Title :customtitle="title" />
      <form action class="register__form" @submit.prevent="addTask">
        <label class="form__label">
          <input
            type="text"
            class="form__input"
            v-model="task.title"
            v-bind:class="{ 'has--value': task.title }"
          />
          <span class="form__span">Título</span>
          <i></i>
        </label>
        <label class="form__label">
          <textarea
            type="text"
            class="form__input"
            rows="6"
            v-model="task.description"
            v-bind:class="{ 'has--value': task.description }"
          ></textarea>
          <span class="form__span">Título</span>
          <i></i>
        </label>
        <label>
          <button type="submit" class="form__button btn--save">Salvar</button>
          <button class="form__button btn--cancel" @click="hideForm">
            Cancelar
          </button>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import { formSubject } from "../eventBus/main";

import Title from "./Title";
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      task: {},
      isFormActive: false,
      title: "Tarefas Cadastradas"
    };
  },
  mounted() {
    formSubject.subscribe(stateForm => {
      this.showForm(stateForm);
    });
  },
  components: {
    Title
  },
  computed: {
    hasValue() {
      const nothing = 0;
      if (this.task.hasOwnProperty("title")) {
        return this.task.title.split("").length > nothing;
      }
      return false;
    }
  },
  methods: {
    ...mapActions(["add"]),
    addTask(e) {
      e.preventDefault();
      if (!this.task.hasOwnProperty("title")) return;

      this.add(this.task);
      this.task = { title: "", description: "" };
      this.hideForm();
    },
    showForm(stateForm) {
      this.isFormActive = stateForm.isActive;
    },
    hideForm() {
      this.isFormActive = false;
    }
  }
};
</script>

<style scoped>
.register {
  display: block;
  background: #f5f5f5;
  float: left;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: 0.5s;
}

.register.is--visible {
  height: auto;
}

.register__form,
.form__label,
.form__input,
.form__span {
  display: block;
  float: left;
  width: 100%;
}

.register__form {
  padding: 10px 0;
}

.form__label {
  position: relative;
  padding: 15px 0;
}

.form__span {
  position: absolute;
  top: 33px;
  left: 15px;
  transition: 0.5s;
  text-transform: uppercase;
  color: #666;
  font-size: 0.875em;
}

.form__input {
  padding: 15px;
  border: 1px #ebebeb solid;
  outline: 0;
}

.form__input:hover + .form__span,
.form__input.has--value + .form__span,
.form__span:hover {
  top: -4px;
  left: 0;
  font-size: 0.775em;
}

.form__button {
  display: block;
  float: right;
  padding: 10px 15px;
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 0.775em;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px #1867c0 solid;
}
.form__button + .form__button {
  margin-right: 5px;
}
.form__button.btn--save {
  background: #1867c0;
}
.form__button.btn--cancel {
  background: #f5f7f7;
  border-color: #d81831;
  color: #d81831;
}
</style>
