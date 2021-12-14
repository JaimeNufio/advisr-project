<template>
    <div id="app">

    <div class="jumbo" >
    <b-container>
    <b-jumbotron class="jumbo"  header="Advisr Applicant Project" lead="Jaime Nufio">
        <p>Vue.js / Express.js, Axios for Rest Calls, Implements Google Maps API</p>
        <b-button variant="success" :to="{name:`Overview`}">Click Here To Get Started</b-button>
    </b-jumbotron>
    </b-container>
    </div>

    <b-container>

        
        <h1 class="display-4">Tools For Your Business Needs</h1>
        <p class="lead">Streamline workflow for better synergy.</p>

        <b-row class="mt-5">
            <b-col >
                <div>
                    <b-card
                        title="Plan."
                        img-src="https://picsum.photos/600/300/?image=2"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                        Quickly view information to make the right business decisions.
                        </b-card-text>

                        <b-button href="/Plan" variant="primary">Find Out More</b-button>
                    </b-card>
                    </div>
            </b-col>
                        <b-col>
                <div>
                    <b-card
                        title="Organize."
                        img-src="https://picsum.photos/600/300/?image=20"
                        img-alt="Image"
                        img-top
                        tag="article"

                        class="mb-2"
                    >
                        <b-card-text>
                            Gather past data in one point to better understand the bigger picture.
                        </b-card-text>

                        <b-button href="/Organize" variant="primary">Find Out More</b-button>
                    </b-card>
                    </div>
            </b-col>
                        <b-col>
                <div>
                    <b-card
                        title="Collaborate."
                        img-src="https://picsum.photos/600/300/?image=7"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                            Communicate findings with your team to problem solve better.
                        </b-card-text>

                        <b-button href="/Organize" variant="primary">Find Out More</b-button>
                    </b-card>
                    </div>
            </b-col>
        </b-row>


    </b-container>
    </div>
</template>

<script>

export default {
  name: 'LandingPage',
  props: {
    },
  components:{

  },
  data(){
    return {

    }
  },
  }
</script>


<style scoped>
    .jumbo{
        background-color: rgb(26, 82, 167);
        color: white;
        border-radius: 0;
    }
</style>
