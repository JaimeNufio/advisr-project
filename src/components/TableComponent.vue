<template>
    <div class="text-center pb-5">
        
        <div class="jumbo  p-4">
        <b-container class="">
            <b-form-group class="filter text-left pt-2 px-5 "
                label="Filter:"
                label-for="input"
            >
                <b-form-input
                    class=""
                    id="input"
                    v-model="filter"
                    type="text"
                    placeholder=""
                    required
                ></b-form-input>
            </b-form-group>
        </b-container>

    </div>

        <b-container class="mt-4" style="">
            <h1 class="text-left">Filtered Businesses</h1>
            <b-table class="mt-3 table" striped hover 
                :items="this.filteredItems"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                responsive="sm"
            >
            <template #cell(BusinessName)="row">
                <b-link  :href="`/company?index=${row.item.id}`" class="tablelink">{{row.item.BusinessName}}</b-link>
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
            items:[],
            filter:"",
            // filteredItems:[],
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
            // console.log(this.filter)
            
            axios.get(
                'http://localhost:3000/company/all',
                {},
            )
            .catch((e)=>console.log(e))
            .then( (response) => {
                if (response.status==200) {
                    this.items = response.data
                    this.filteredItems = this.items
                }
            }
        )
      },  
   },

    computed:{
        filteredItems:{
        
        get: function(){
            let val = this.filter
            console.log(val)

            let filteredSet =  this.items.filter( (el) => 
                el['BusinessName'].toLowerCase().indexOf(val.toLowerCase()) > -1
            )

            if (filteredSet.length > 0){
                return filteredSet
            }else{
                return this.items
            }
        },

        set: function(newValue) {
            console.log(newValue)
        }
    }
    }
}

</script>

<style scoped>

</style>