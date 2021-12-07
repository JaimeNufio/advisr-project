<template>
  <div id="app">


    <NavbarComponent/>
    <WelcomeComponent class="mt-5"></WelcomeComponent>
    <TableComponent :items="items"></TableComponent>

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
      items:[
      { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]
  }
  }
  }
</script>


<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

</style>
