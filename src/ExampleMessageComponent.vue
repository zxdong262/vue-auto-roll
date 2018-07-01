<template>
  <pre class="message" v-html="message"></pre>
</template>

<script>
  export default {
    name: "example-message-component",
    props: {
      message: {
        type: String,
        default: "Hello World!",
      }
    }
  }
</script>

<style>
  .message {
    font-size: 24px;
  }
</style>