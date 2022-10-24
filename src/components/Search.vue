<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="width: 250px; max-width: 100%">
      <!-- <q-toolbar class="bg-primary text-white rounded-borders"> -->
        <!-- <q-avatar class="gt-xs">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar> -->

        <!-- <q-space /> -->

        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon  name="search" @click="grab" />
          </template>
        </q-input>
      <!-- </q-toolbar> -->
    </div>
  </div>
</template>
  
  <style>

  .q-pa-md{
    display: flex;
    justify-content: center;
  }

  </style>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'search-location',
    data(){
        return{
            weatherData: "",
            city: "London"
        }
    },
    propos:{
        data: Array
    },

    methods: {
        grab () {
            console.log(this.text)
            this.city = this.text
            this.fetchData(this.city)
        },
        async fetchData (city){
            const apiKey = "574be141045fd202821891433c4208b7"
            await axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(response => (this.weatherData = response.data))
                .catch(error => console.log(error))
            this.$emit("sendDataToParent", this.weatherData)
        },
    },
    async mounted(){
        await this.fetchData(this.city)
    }
  }
  </script>
  