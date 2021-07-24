<template>
  <div class="other_message">{{text}}</div>
</template>

<script>
export default {
  name: "OtherMessage",
  props: ['text']
}
</script>

<style scoped>
  .other_message {
    text-align: left;
  }
</style>