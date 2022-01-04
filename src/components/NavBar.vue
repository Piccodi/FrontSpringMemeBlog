<template>
  <div>
    <div class="navbar_btns">
      <button style="margin-left: 20px" @click="router_p.push('/')">Home</button>
      <button style="margin-left: 20px" @click="router_p.push('/login')">Login</button>
      <button v-if="this.$store.state.username" style="margin-left: 20px" @click="gotoImages">TIME TO MEMES</button>
      <button v-if="this.$store.state.username" style="margin-left: 20px" @click="gotoSaves">Favorites</button>
      <button v-if="this.$store.state.username" style="margin-left: 20px" @click="logout" >Logout</button>
    </div>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: "NavBar",
  data(){
    return{
      router_p: router
    }
  },
  methods:{
    gotoImages(){
      this.router_p.push('/images')
      this.$store.commit('setPosition', false)
    },
    gotoSaves(){
      this.router_p.push('/favs')
      this.$store.commit('setPosition', true)
    },
    logout(){
      this.$store.commit('setUser', {id : null, username : ''});
      localStorage.clear();
      this.router_p.push('/')
    }
  }
}
</script>

<style scoped>

</style>