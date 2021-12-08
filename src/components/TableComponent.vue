<template>
  <div>
      
    <b-container>
        
            <b-form-input
            id="input-1"
            v-model="filter"
            type="text"
            placeholder=""
            required
            ></b-form-input>

        <b-table striped hover 
            :items="filteredItems"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            responsive="sm"
        >
            <template #cell(BusinessName)="row">
                <b-link :href="`/company?index=${row.item.id}`">{{row.item.BusinessName}}</b-link>
            </template>
        
        </b-table>

            


    </b-container>

  </div>
</template>

<script>
    const axios = require('axios')

export default {
    data(){
        return {

            sortBy: 'age',
            sortDesc: false,
            fields: [
                { key: 'BusinessName', sortable: true },
                { key: 'Category', sortable: true },
                { key: 'Number of Campaigns', sortable: true },
                { key: 'Average Campaign Budget', sortable: true }

            ],
            filter:"",
            filteredItems:[],
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
            console.log(this.filter)
            axios.get(
                'http://localhost:3000/company/all',
                {},
            ).then( (response) => {
                if (response.status==200) {
                    this.items = response.data
                    this.filteredItems = this.items
                }
            }
        )
      },  
   },
   watch: {
       filter(val){
            console.log(val)
            if (val == null || val == "" || val == undefined) {this.filteredItems = this.items; return} 
        
        this.filteredItems = this.items.filter( (el) => 
            el['BusinessName'].toLowerCase().indexOf(val.toLowerCase()) > -1
        )}
    }
}

</script>