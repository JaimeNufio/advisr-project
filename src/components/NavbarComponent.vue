<template>
    <div>
      <div>
        <b-navbar class="mynavbar" toggleable="lg" type="dark" variant="info">
          <b-navbar-brand class="branding" href="/">ADVISR</b-navbar-brand>

          <b-collapse is-nav>
         <b-navbar-nav class="ml-auto">
          <a href="https://github.com/JaimeNufio" size="sm" class="mx-2 my-2 my-sm-0 myicon" type="submit">
            <b-icon-github/>
          </a>
          <a href="https://www.linkedin.com/in/jaimenufio/" size="sm" class="mx-2 my-2 my-sm-0 myicon" type="submit">
            <b-icon-linkedin/>
          </a>
          <a href="https://www.instagram.com/jaimenufio/" size="sm" class="mx-2 my-2 my-sm-0 myicon" type="submit">
            <b-icon-instagram/>
          </a>
        </b-navbar-nav>
          </b-collapse>

         </b-navbar>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: {
  
  }
}
</script>

<style scoped>
  .mynavbar{
    background-color: rgb(6, 5, 112) !important;
  }
  .branding{
    color: white;
    font-weight: bold !important; 
    font-size: 1.4em !important;
  }

  .myicon{
    color: white;
    font-weight: bold !important; 
    font-size: 1.7em !important;
  }
</style>