<template>
  <div>

    <b-container>
        
        <b-form @submit="onSubmit" v-if="show">

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
    const axios = require('axios')

    export default {
        props:{
            items: Array
        },
        data(){
            return {
            form: {
            name: '',
            },
            show: true,
        }  
        },
        mounted(){
          
        },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.fetchBusinesses(-1)
        // alert(JSON.stringify(this.form))
      },
      
      fetchBusinesses(which){
          console.log(which)
          if (which == -1){
              //get all

            axios.get(
                'http://localhost:3000/company/all',
                {'body':{}},
                {}
            ).then( (response) => {
                if (response.status==200) {
                    

                    this.items = response.data


                    // alert("got 200")
                    // this.$emit('updateThing', this.items)
                }
                console.log(response)
            })
          }else{
              //find specifc by id
          }
      }

   }
}
</script>