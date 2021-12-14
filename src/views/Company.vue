<template>
  <div id="app">
    <div class="jumbo pt-4 mb-4">

    <b-container class="text-left pb-4">
        
        <b-breadcrumb class="jumbo bread">
            <b-breadcrumb-item class="bread"><router-link :to="{name:'LandingPage'}"> Landing Page </router-link></b-breadcrumb-item>
            <b-breadcrumb-item class="bread" to="Overview"><router-link :to="{name:'Overview'}">Business Overview</router-link></b-breadcrumb-item>
            <b-breadcrumb-item class="bread active" active>{{this.details.name}}</b-breadcrumb-item>
        </b-breadcrumb>

        <h1>{{this.details.name}}</h1>
        <p>{{this.details.desc}}

        <div class="mb-5">
            <p>Find the list of Campaigns, and the location of the business below.
            </p>
        </div>


    </b-container>
    </div>

    <b-container>
                        <div>
                <h3>Campaigns</h3>
                <b-table class="mt-4" striped hover 
                    :items="this.details.campaigns"
                    :fields="fields"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    responsive="sm">
                </b-table>
                </div>
                                <div class="p-3">
                    <GoogleMapComponent :target="this.details.location"/>
                </div>
    </b-container>

  </div>
</template>

<script>
import axios from "axios"
import GoogleMapComponent from '@/components/GoogleMapComponent.vue'


export default {
  name: 'Company',
  props: {
    },
  components:{
      GoogleMapComponent
  },
  data(){
    return {
        index:-1,
        details:[],
        fields:[
            { key: 'name', sortable: true },
            { key: 'budget', sortable: true },
        ],
    }
  },
  created(){
        let uri = window.location.search.substring(1); 
        let params = new URLSearchParams(uri);
        this.index =params.get('index') 

        axios.get(
            'http://localhost:3000/company/details',
            {params:{index:this.index}},
        ).catch((e)=>console.log(e))
        .then( (response) => {
            if (response.status==200) {
                this.details = response.data
            }
        })
    },
}
</script>

<style scoped>

</style>
