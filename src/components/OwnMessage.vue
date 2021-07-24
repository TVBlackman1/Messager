<template>
  <div class="own_message">{{text}}</div>
</template>

<script>
export default {
  name: "OwnMessage",
  props: ['text']
}
</script>

<style scoped>
  .own_message {
    text-align: right;
  }
</style>