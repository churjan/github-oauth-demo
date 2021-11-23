<template>
  <div>
    <h1 v-if="userInfo">Hello,{{ userInfo.name }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style lang="scss" scoped></style>
