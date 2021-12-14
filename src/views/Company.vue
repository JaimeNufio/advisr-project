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

                <div class="my-3">
                    <b-button v-b-modal.modal-1 variant="primary">Add A Campaign</b-button>

                    <b-modal id="modal-1" title="Add a Campaign">
                        <div>
                        <b-form >
                            <label class="my-2" label-for="campaignnamelabel">Campaign name</label>
                            
                            <b-form-input
                            id="campaignnamelabel"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Taco Tuesday"
                            v-model="campaignname"
                            ></b-form-input>

                            <label class="my-2" for="budgetlabel">Budget</label>
                            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                            <b-form-input 
                            id="budgetlabel" 
                            placeholder="10000"
                            v-model="budget"
                            ></b-form-input>
                            </b-input-group>

                            <b-button @click="postCampaign" class="mt-4" variant="primary">Submit</b-button>
                        </b-form>
                        </div>
                    </b-modal>
                </div>

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
        campaignname:"",
        campaignbudget:"",
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
                console.log(this.details)
            }
        })
    },
    methods:{        
        
    getCampaigns(i){
        axios.get(
            'http://localhost:3000/company/details',
            {params:{index:i}},
        ).catch((e)=>console.log(e))
        .then( (response) => {
            if (response.status==200) {
                this.details = response.data
                console.log(this.details)
            }
        })
    },

    postCampaign(){

             console.log({
                    name:this.campaignname,
                    budget:this.budget,
                    company_id:this.$route.query.index,
                })

            if (!this.campaignname || !this.budget){
                alert("Won't pass empty values.")
                return;
            }

            axios.post(
                'http://localhost:3000/campaign',
                {
                    name:this.campaignname,
                    budget:this.budget,
                    company_id:this.$route.query.index,
                },
            ).catch((e)=>{
                console.log(e)
                alert("Improper Data")    
            }).then( (response) => {
                if (response.status==200) {
                    this.getCampaigns(this.$route.query.index)
                }
            })
         },    
    },
}


</script>

<style scoped>

</style>
