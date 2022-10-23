<template>
  <main>
    <section>
      <div>
        <Search @sendDataToParent="fetchData" />
      </div>
      <h1>Weather App</h1>
      <h2>{{this.weatherData.name}}</h2>
      <!-- <h2>{{this.weatherLocation}}</h2> -->
      <p>{{this.weatherMain.temp}}  °C</p>
      <p>{{this.weatherMain.temp_max}}  °C</p>
      <p>{{this.weatherMain.temp_min}}  °C</p>
      <p>{{this.weatherMain.humidity}}%</p>
      <p>{{this.weatherDesc}}</p>
      <img v-bind:src="'https://openweathermap.org/img/wn/'+weatherIcon+'.png'" />
    </section>
  </main>
</template>

<style>
  main{
    display: flex;
    margin-top: 10rem;
    align-items: center;
    justify-content: center;
  }
  section{

    width: 50%;
    border: 3px solid blue;
  }
</style>

<script>
import Search from'./Search'
export default {
  name: 'Weather-app',
  data(){
    return{
      weatherData:[],
      weatherMain:[],
      weatherDesc:[],
      weatherIcon:[],
    }
  },
  methods:{
    reset(){
        this.weatherData=[]  
        this.weatherMain=[]
        this.weatherDesc=[]
        this.weatherIcon=[]
    },
    fetchData(e){
      this.reset()
      this.weatherData = e
      this.weatherMain = e.main
      this.weatherDesc = e.weather[0].description
      this.weatherIcon.push(e.weather[0].icon)
    }
  },
  components:{
    Search
  }
}
</script>
