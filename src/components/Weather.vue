<template>
  <main>
    <section :style="image">
      <!-- <div class="bgImg" :style="{'background-image':'url(https://vuejs.org/images/logo.png)'}"></div> -->
      <!-- <img class="bgImg" src="../assets/cloudy.png"/> -->
      <div>
        <Search @sendDataToParent="fetchData" />
      </div>
      <h2>{{this.weatherData.name}}</h2>
      <h2>{{this.weatherMain.temp}}  °C</h2>
      <div class="imgCenter">
        <img v-bind:src="'https://openweathermap.org/img/wn/'+weatherIcon+'.png'" />
      </div>
      <h6 class="center">{{this.weatherDesc}}</h6>
      <p class="center">Humidity: {{this.weatherMain.humidity}}%</p>
      <!-- <h2>{{this.weatherLocation}}</h2> -->
      <div class="highLow">
        <p>H: {{this.weatherMain.temp_max}}  °C</p>
        <p>L: {{this.weatherMain.temp_min}}  °C</p>
      </div>
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
    border: 3px solid gray;
    background-size: cover;
    color: white;
  }

  .bgImg{
    position: relative;
    object-fit:cover;
    max-width: fit-content
  }

  h2, .center{
    text-align: center;
  }
  .highLow, .imgCenter{
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  h6{
    line-height: 1rem;
    margin: 1rem;
  }

  p{
    font-size: 1.3rem;
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
      image: { backgroundImage: "url(https://wallpapercave.com/wp/wp5594572.png)" }
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
      this.weatherIcon = e.weather[0].icon
      this.loadbg()
    },
    loadbg(){
      if(this.weatherDesc === 'mist'){
        this.image = { backgroundImage: "url(https://wallpapercave.com/wp/wp9040181.jpg)" }
      } else if (this.weatherDesc === 'clear sky') {
        this.image = { backgroundImage: "url(https://wallpapercave.com/wp/wp5594572.png)" }
      } 
        else if (this.weatherDesc === 'few clouds') {
        this.image = { backgroundImage: "url(https://wallpapercave.com/wp/wp5613559.jpg)" }
      } 
      else if (this.weatherDesc === 'broken clouds') {
        this.image = { backgroundImage: "url(https://wallpapercave.com/wp/wp9048573.jpg)" }
      } 
      
      // https://wallpapercave.com/wp/wp9322371.jpg
      console.log("I'm running")
      
      console.log(this.weatherDesc)
      
    }
  },
  components:{
    Search
  }
}
</script>
