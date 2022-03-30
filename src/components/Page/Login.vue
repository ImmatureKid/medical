<template>
  <div @click="gotoHome">{{ str }}</div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "login",
  data() {
    return {
      str: "login",
    };
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
  },
};
</script>
