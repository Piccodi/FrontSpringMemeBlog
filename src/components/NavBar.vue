<template>
  <div class="navbar">
    <div class="navbar_btns">
      <button class="btn" style="margin-left: 20px" @click="router_p.push('/')">Home</button>
      <button class="btn" style="margin-left: 20px" @click="router_p.push('/login')">Login</button>
      <button class="btn" v-if="this.$store.state.username" style="margin-left: 20px" @click="gotoImages">TIME TO MEMES</button>
      <button class="btn" v-if="this.$store.state.username" style="margin-left: 20px" @click="gotoSaves">Favorites</button>
      <button class="btn" v-if="this.$store.state.username" style="margin-left: 20px" @click="logout" >Logout</button>
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
.navbar{
  height: 50px;
  background-color: lightblue;
  box-shadow: 2px 2px 4px black;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.btn {
  padding: 10px 15px;
  background: steelblue;
  color: greenyellow;
  border: 1px solid teal;
}
</style>