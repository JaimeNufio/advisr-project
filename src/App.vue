<template>
  <div id="app">


    <NavbarComponent/>
    <WelcomeComponent class="mt-5"></WelcomeComponent>
    <TableComponent ></TableComponent>

  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'
import WelcomeComponent from './components/WelcomeComponent'

export default {
  name: 'App',
  props: {
    },
  components:{
    NavbarComponent, 
    WelcomeComponent,
    TableComponent,
  },
  data(){
    return {

  }
  },
  methods:{
    newRows(value){
      alert(value)
      alert("parent")
    }
  }
  }
</script>


<style>

</style>
