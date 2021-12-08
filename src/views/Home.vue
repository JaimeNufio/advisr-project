<template>
  <div id="app">
    <WelcomeComponent class="mt-5"></WelcomeComponent>
    <TableComponent ></TableComponent>

  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
import WelcomeComponent from '@/components/WelcomeComponent.vue'

export default {
  name: 'Home',
  props: {
    },
  components:{
    WelcomeComponent,
    TableComponent,
  },
  data(){
    return {

    }
  },
  }
</script>


<style>
