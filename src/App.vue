<template>
  <div id="app">
    <NavbarComponent/>
    <router-view/>

    <div class="footer-copyright text-center py-3 mt-5 ">
      <b-container class="bottom-block p-3 ">
        <span> Jaime Nufio </span>
          <a href="https://github.com/JaimeNufio" size="sm" class="mx-2 my-2 my-sm-0 myicon" type="submit">
            <b-icon-github/>
          </a>
          <a href="https://www.linkedin.com/in/jaimenufio/" size="sm" class="mx-2 my-2 my-sm-0 myicon" type="submit">
            <b-icon-linkedin/>
          </a>
          <a href="https://www.instagram.com/jaimenufio/" size="sm" class="mx-2 my-2 my-sm-0 myicon" type="submit">
            <b-icon-instagram/>
          </a>
      </b-container>
    </div>

  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  name: 'App',
  props: {
    },
  components:{
    NavbarComponent, 
  },
  data(){
    return {

    }
  },
  }
</script>


<style>
  .bottom-block{
    background: rgb(26, 82, 167);
    color: white;
    text-decoration: none;
  }

  .myicon{
    color: white;
  }

  ol{
      background-color: rgb(26, 82, 167) !important;
      color: white;    
  }

    .jumbo{
      background-color: rgb(26, 82, 167);
      color: white;
      border-radius: 0;
      text-decoration: none;
  }

    .bread{
        background-color: rgb(26, 82, 167);
        color:white !important;
    }

    a{
        color: white !important;
    }

    a:hover{
        color: White !important;
    }

    .tablelink{
      color: rgb(26, 82, 167) !important;
      font-weight: 700;
    }
    a.tablelink:hover{
      color: rgb(15, 40, 77) !important;
      font-weight: 700;
    }

    .filter{
      max-width: 50vw;
    }
</style>