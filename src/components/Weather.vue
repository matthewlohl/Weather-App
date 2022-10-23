<template>
  <main>
    <section>
      <div>
        <Search @sendDataToParent="fetchData" />
      </div>
      <h1>Weather App</h1>
      <h3>{{this.weatherData}}</h3>
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
      weatherData: []
    }
  },
  methods:{
    reset(){
        this.weatherData=[]  
    },
    fetchData(e){
      this.reset()
      this.weatherData.push(e)
    }
  },
  components:{
    Search
  }
}
</script>
