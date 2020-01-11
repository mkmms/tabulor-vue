<template>
  <div class="after-table">
    <div class="d-flex justify-content-between">
      <div class="available"></div>
      <pagination 
        :pageNumber="pageNumber"
        :recordsLength="recordsLength"
        :recordsPerPage="recordsPerPage"
        @setPageNumber="setPageNumber"
      ></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue';
export default {

  props:{
    pageNumber: {
      type: Number
    },

    recordsLength: {
      type: Number
    },

    recordsPerPage: {
      type: String
    }
  },

  methods: {
    setPageNumber(page){
      this.$emit('setPageNumber', page)
    }
  },

  components: {
    Pagination
  }
}
</script>