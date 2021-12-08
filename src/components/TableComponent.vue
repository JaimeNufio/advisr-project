<template>
  <div>
      
    <b-container>
        
        <b-form @submit="onSubmit" v-if="show">

        <b-form-group  class="px-5 mx-5"
            id="input-group-1"
            label="Filter By Name:"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="filter"
            type="text"
            placeholder=""
            required
            ></b-form-input>
              <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
              <!-- <p>Filtering by: {{filter}}</p> -->
        </b-form-group>
        </b-form>

        <b-table striped hover 
            :items="filteredItems"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            responsive="sm"
        ></b-table>

            


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

                sortBy: 'age',
                sortDesc: false,
                fields: [
                    { key: 'Business Name', sortable: true },
                    { key: 'Category', sortable: true },
                    { key: 'Number of Campaigns', sortable: true },
                    { key: 'Average Campaign Budget', sortable: true }

                ],
                form: {
                name: '',
                },
                show: true,
            }
        },
            

        mounted(){
           this.fetchBusinesses()
        },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        console.log(this.filter)
      },
      
      fetchBusinesses(){
     
            axios.get(
                'http://localhost:3000/company/all',
                {},
            ).then( (response) => {
                if (response.status==200) {
                    this.items = response.data
                    console.log(this.items)
                    console.log(this.filteredItems)
                }
            }
        )
      },
        
   },
    computed:{
        
    filteredItems(){

            //  return this.items
        if (!this.filter ) { return this.items }

        return this.items.filter( (el) => 
            el['Business Name'].indexOf("Hank") > -1
        )
    
    }
    }
}
</script>