<template>
  <div id="app">


    <NavbarComponent/>
    <WelcomeComponent class="mt-5" @updateThing="newRows"></WelcomeComponent>
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

    ]
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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

</style>
