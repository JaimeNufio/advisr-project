<template>
  <div>

    <GmapMap  
      :center='center'
      :zoom='17.5'
      style='width:100%;  height: 400px;'
      >
      <GmapMarker
        :key="index"
        :position="center"
        @click="center=center"
      />
      </GmapMap>


  </div>
</template>

<script>
export default {
  name: 'GoogleMapComponent',
  props:{
    target:{
      lat:0,
      lng:0
    }
  },
   data() {
    return {
      center: { lat: 1, lng: -1 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
watch:{
  target(val){
    console.log(val)
    this.center=val
  }
},
mounted() {
  // console.log(this.target)
  },
  methods: {
        addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
  },
  }
</script>