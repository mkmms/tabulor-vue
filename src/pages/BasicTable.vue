<template>
  <div>
    <h1 class="dispaly-3">
      Basic Table
    </h1>

    <tablulor
      :columns="columns"
      :rows="records"
      tableClasses="table table-bordered"
      tableHeaderClasses="thead-dark"
    ></tablulor>
  </div>
</template>


<script>
import Tablulor from '../components/table/Index.vue';
import records from '../records';
export default {
  components: {
    Tablulor
  },

  data(){
    return {
      records,
      columns: [
        {
          name: 'name'
        },
        {
          name: 'username'
        },
        {
          name: 'email'
        },
        {
          name: 'phone',
          width: '200px'
        },
        {
          name: 'website'
        }
      ]
    }
  },

  methods: {
    
  }
}
</script>