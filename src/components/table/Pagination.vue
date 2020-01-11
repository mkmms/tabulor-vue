<template>
  <div class="table-pagination">
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{disabled: pageNumber == 1}">
          <a class="page-link" @click="gotoPage('-1')">Previous</a>
        </li>
        
        <li 
          v-for="(page, index) in pages" 
          :key="index"
          class="page-item"
          :class="{active: pageNumber == page }"
        >
          <a class="page-link" @click="gotoPage(page)">{{page}}</a>
        </li>

        <li class="page-item" :class="{disabled: isLastPage}">
          <a class="page-link" @click="gotoPage('+1')">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },

  props: {
    pageNumber: {
      type: Number,
      default: 1
    },

    recordsLength: {
      type: Number
    },

    recordsPerPage: {
      type: String
    }
  },

  methods: {
    gotoPage(page){
      if( page == "-1" || page == "+1"){
        this.$emit('setPageNumber', this.pageNumber + parseInt(page));
      } else {
        this.$emit('setPageNumber', page);
      }
    }
  },

  computed: {
    pages(){
      let pages = [];
      if( this.pageNumber > 2 ){
        pages.push(this.pageNumber - 2);
        pages.push(this.pageNumber - 1);
      }

      pages.push(this.pageNumber);

      let perPage = parseInt(this.recordsPerPage)
      let len = parseInt(this.recordsLength)
      let lastPage = (len % perPage) == 0 ? (len/perPage) : ((len/perPage) + 1)

      if( (this.pageNumber + 1) <= lastPage ){
        pages.push(this.pageNumber + 1);
      }

      if( (this.pageNumber + 2) <= lastPage ){
        pages.push(this.pageNumber + 2);
      }

      return pages;
    },

    isLastPage(){
      let perPage = parseInt(this.recordsPerPage)
      let len = parseInt(this.recordsLength)
      let lastPage = (len % perPage) == 0 ? (len/perPage) : ((len/perPage) + 1) 
      return lastPage == this.pageNumber
    }
  }
}
</script>

<style scoped>
  li:not(.disabled) a{
    cursor: pointer;
  }
</style>>