<template>
  <div class="search-box form-inline mb-3">
    <input 
      class="form-control ml-auto" 
      type="search" 
      placeholder="Search" 
      aria-label="Search"
      @input="handleSearch"
      :value="searchText"
    />
  </div>
</template>

<script>
export default {
  
  props: {
    searchText: {
      type: String
    }
  },

  methods: {
    handleSearch(event){
      this.$emit('onSearch', event.target.value)
    }
  }
}
</script>