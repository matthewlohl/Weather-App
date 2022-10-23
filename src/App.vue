<template>
  <Weather />
</template>

<script>
import { ref } from 'vue'
import Weather from './components/Weather.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Weather
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
