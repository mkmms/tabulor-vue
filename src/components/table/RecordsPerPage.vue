<template>
  <div class="form-inline records-per-page">
    <select 
      class="form-control mb-3"
      :value="recordsPerPage"
      @input="setRecordsPerPage"
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    recordsPerPage: {
      type: String
    }
  },

  methods: {
    setRecordsPerPage(event){
      this.$emit('setRecordsPerPage', event.target.value)
    }
  }
}
</script>