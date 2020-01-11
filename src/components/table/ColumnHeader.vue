<template>
  <th :style="'width:'+ width">
    {{name}}
  </th>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },

    width: {
      type: String
    }
  }
}
</script>

<style scoped>
  th{
    text-transform: capitalize;
  }
</style>