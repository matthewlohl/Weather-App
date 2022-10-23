<template>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
        <q-toolbar class="bg-primary text-white rounded-borders">
          <q-avatar class="gt-xs">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
  
          <q-space />
  
          <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
            <template v-slot:append>
              <q-icon  name="search" @click="grab" />
            </template>
          </q-input>
        </q-toolbar>
      </div>
    </div>
    <!-- <h3>{{this.weatherData}}</h3> -->
  </template>
  
  <style>

  </style>
  
  <script>
//   import { useQuasar } from 'quasar'
//   import { ref } from 'vue'
  import axios from 'axios'
  export default {
    name: 'search-location',
    data(){
        return{
            weatherData: "" 
        }
    },
    propos:{
        data: Array
    },
    methods: {
        grab () {
            // const text = ref()
            console.log(`hello`)
            // console.log(this.$refs.location)
            console.log(this.text)
            // const city = this.text
            this.fetchData(this.text)
            // let apiKey = "574be141045fd202821891433c4208b7"
            // axios
            //     .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.text}&units=metric&appid=${apiKey}`)
            //     .then(response => (this.weatherData = response.data))
            // console.log(this.weatherData)
            
            
        },
        async fetchData (city){
            const apiKey = "574be141045fd202821891433c4208b7"
            // const response = await 
            await axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(response => (this.weatherData = response.data))
                .catch(error => console.log(error))
            this.$emit("sendDataToParent", this.weatherData)
        //     // this.weatherData.push(...(response.data))
        //     console.log(this.weatherData)
            
        },

    // }
    // },
    // mounted (city, apiKey="574be141045fd202821891433c4208b7") {
    //     axios
    //     // let apiKey = "574be141045fd202821891433c4208b7"
    //         .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    //         .then(response => (this.info = response))
    }
  }
  </script>
  