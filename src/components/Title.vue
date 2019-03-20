<template>
  <div class="title">{{ customtitle }}</div>
</template>

<script>
export default {
  data: () => {
    return {
      // title: this.props.customtitle
    };
  },
  props: ["customtitle"]
};
</script>

<style>
.title {
  display: block;
  float: left;
  width: 100%;
  padding: 25px 15px 15px 15px;
  text-transform: uppercase;
  color: #666;
  font-weight: 600;
  border-bottom: 1px #ebebeb solid;
}
</style>
