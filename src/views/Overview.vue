<template>
  <div id="app">

    <div class="jumbo ">
    <b-container class=" text-left px-auto pt-4 ">

        <b-breadcrumb class="jumbo bread">
            <b-breadcrumb-item class="bread" href="/">Landing Page</b-breadcrumb-item>
            <b-breadcrumb-item class="bread active" active href="/overview">Business Overview</b-breadcrumb-item>
        </b-breadcrumb>
        <div>
            <h1>Business Campaign Overview</h1>

            <p class="mb-0">
                Begin typing in the search bar to filter through companies. You can click on a Business name to view more information about it. 
            </p>
    
        </div>
    </b-container>
    </div>
    <TableComponent ></TableComponent>
 
  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'

export default {
  name: 'Overview',
  props: {
    },
  components:{
    TableComponent,
  },
  data(){
    return {

    }
  },
  }
</script>


