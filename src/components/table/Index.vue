<template>
  <div class="table-wrapper">

    <before-table 
      @onSearch="onSearch" 
      :searchText="searchText"
      @setRecordsPerPage="setRecordsPerPage"
      :recordsPerPage="recordsPerPage"
    />

    <div class="table-content">
      <table :class="tableClasses">
        <thead :class="tableHeaderClasses">
          <tr>
            <ColumnHeader 
              v-for="(column, index) in columns" 
              :key="index" 
              :name="column.name"
              :width="column.width"
            />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in records" :key="index">
            <td v-for="(column, colIndex) in columns" :key="colIndex">
              {{row[column.name]}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <after-table
      :pageNumber="pageNumber"
      :recordsLength="availableRecords"
      :recordsPerPage="recordsPerPage"
      @setPageNumber="setPageNumber"
    />
  </div>
</template>

<script>
import BeforeTable from './BeforeTable.vue';
import AfterTable from './AfterTable.vue';
import ColumnHeader from './ColumnHeader.vue';

export default {
  data(){
    return {
      searchText: "",
      recordsPerPage: "10",
      availableRecords: 0,
      pageNumber: 1
    }
  },

  mounted(){
    // debugger
  },

  components: {
    BeforeTable,
    AfterTable,
    ColumnHeader
  },

  props: {
    columns: {
      type: Array,
      default: () => []
    },

    rows: {
      type: Array,
      default: () => []
    },

    noDataText: {
      type: String,
      default: "No Record Found!"
    },

    tableClasses: {
      type: String,
      default: ""
    },

    tableHeaderClasses: {
      type: String,
      default: ""
    }
  },

  methods: {
    onSearch(searchText){
      this.searchText = searchText;
    },

    setRecordsPerPage(recordsPerPage){
      this.recordsPerPage = recordsPerPage;
    },

    setPageNumber(page) {
      this.pageNumber = page;
    }
  },

  computed: {
    records() {
      if(this.rows.length == 0) return [];

      let vm = this;
      let filteredRows;
      
      if( this.searchText == "" ) {
        filteredRows = this.rows;
      } else {
        filteredRows = this.rows.filter( (row) => {
          return vm.columns.some((column) =>  row[column.name].toLowerCase().includes(vm.searchText.toLowerCase()) )
        })
      }

      vm.availableRecords = filteredRows.length;

      let perPage = parseInt(this.recordsPerPage);

      let endIndex = (perPage * this.pageNumber)
      let startIndex = endIndex - perPage;

      return filteredRows.filter((row, index) => index >= startIndex && index < endIndex );
    }
  }
}
</script>