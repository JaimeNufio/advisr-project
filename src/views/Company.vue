<template>
  <div id="app">

    <b-container class="text-center py-4 mt-5">
        <h1>{{this.details.name}}</h1>

        <b-container class="mb-5">
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quae accusamus quam nihil autem mollitia distinctio pariatur dicta unde minima minus sunt officia error iure ducimus maxime, laboriosam, repudiandae fugiat?</h6>
        </b-container>

        <b-row>
            <b-col>
                <b-table striped hover 
                    :items="this.details.campaigns"
                    :fields="fields"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    responsive="sm">
                </b-table>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    
    </b-container>


  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Company',
  props: {
    },
  components:{
  },
  data(){
    return {
        index:-1,
        details:[],
        fields:[
            { key: 'name', sortable: true },
            { key: 'budget', sortable: true },
        ]
    }
  },
  mounted(){
        let uri = window.location.search.substring(1); 
        let params = new URLSearchParams(uri);
        this.index =params.get('index') 

        axios.get(
            'http://localhost:3000/company/details',
            {params:{index:this.index}},
        ).then( (response) => {
            if (response.status==200) {
                this.details = response.data
            }
        })
    }
}
</script>


<style>
