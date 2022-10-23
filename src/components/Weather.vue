<template>
  <main>
    <section>
      <div>
        <Search />
      </div>
      <h1>Weather App</h1>
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
  components:{
    Search
  }
}
</script>
