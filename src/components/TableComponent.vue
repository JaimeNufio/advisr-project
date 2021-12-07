<template>
  <div>

    <b-container>
        
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group
            id="input-group-1"
            label="Filter By Name:"
            label-for="input-1"

        >
            <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder=""
            required
            ></b-form-input>
              <b-button type="submit" variant="primary">Submit</b-button>
        </b-form-group>
        </b-form>

        <b-table striped hover :items="items"></b-table>

    </b-container>

  </div>
</template>

<script>
  export default {
    props:{
        items: Array

      },
        data(){
            return {
            form: {
            name: '',
            },
            show: true
        }  
        },
        mounted(){
          
        },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))
      },
      
      fetchBusinesses(which){
          if (which == -1){
              //get all
          }else{
              //find specifc by id
          }
      }

   }
}
</script>