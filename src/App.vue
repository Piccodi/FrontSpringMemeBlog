<template>


  <div id="app">
    <NavigationPanel></NavigationPanel>
    <router-view/>
  </div>


</template>

<script>

import NavigationPanel from '@/components/NavBar';

export default {

  name: 'App',
  components: {
    NavigationPanel
  },
  mounted() {
    if(localStorage.username){
      this.$store.commit('setUser',{
        id : localStorage.id,
        username : localStorage.username
      })
    }
  }
}


</script>

<style>

</style>
