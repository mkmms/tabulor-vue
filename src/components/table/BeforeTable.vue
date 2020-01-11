<template>
  <div class="before-table">
    <div class="d-flex justify-content-between">
      <records-per-page
        @setRecordsPerPage="setRecordsPerPage"
        :recordsPerPage="recordsPerPage"
      ></records-per-page>
      <search-box
        @onSearch="onSearch"
        :searchText="searchText"
      ></search-box>
    </div>
  </div>
</template>

<script>
import SearchBox from './Search.vue';
import RecordsPerPage from './RecordsPerPage.vue';

export default {
  components: {
    SearchBox,
    RecordsPerPage
  },

  props: {
    searchText: {
      type: String
    },

    recordsPerPage: {
      type: String
    }
  },

  methods: {
    onSearch(value){
      this.$emit('onSearch', value);
    },

    setRecordsPerPage(value) {
      this.$emit('setRecordsPerPage', value);
    }
  }
}
</script>